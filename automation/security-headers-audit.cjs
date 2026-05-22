#!/usr/bin/env node
/**
 * Security Headers & HTTPS Enforcement Auditor
 * Probes production site for security headers, mixed content, HTTPS redirects, cookie flags
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT = process.cwd();
const STATE_DIR = path.join(ROOT, '.hermes', 'memory', 'security-headers');
const LOG_FILE = path.join(STATE_DIR, 'security-audit.log');
const HISTORY_FILE = path.join(STATE_DIR, 'history.json');
const REPORT_FILE = path.join(STATE_DIR, 'latest-report.json');

const BASE_URL = process.env.APP_URL || 'https://ziontechgroup.com';
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID || '8435383377';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Expected headers (can override via SECURITY_EXPECTED_HEADERS JSON)
const DEFAULT_EXPECTED = {
  'strict-transport-security': { required: true, minMaxAge: 31536000, value: 'max-age=31536000; includeSubDomains' },
  'content-security-policy': { required: true, minLength: 20 }, // at least some directives
  'x-frame-options': { required: true, allowed: ['DENY', 'SAMEORIGIN'] },
  'x-content-type-options': { required: true, value: 'nosniff' },
  'x-xss-protection': { required: false, value: '1; mode=block' }, // deprecated but still good
  'referrer-policy': { required: true, allowed: ['no-referrer', 'origin', 'strict-origin', 'strict-origin-when-cross-origin'] },
  'permissions-policy': { required: false }, // recommended
};

let EXPECTED_HEADERS = DEFAULT_EXPECTED;
if (process.env.SECURITY_EXPECTED_HEADERS) {
  try { EXPECTED_HEADERS = JSON.parse(process.env.SECURITY_EXPECTED_HEADERS); } catch (e) { console.warn('Invalid SECURITY_EXPECTED_HEADERS JSON; using defaults'); }
}

const HTTP_PORT = 80;
const HTTPS_PORT = 443;
const TIMEOUT_MS = 15000;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureFiles() {
  if (!fs.existsSync(HISTORY_FILE)) fs.writeFileSync(HISTORY_FILE, JSON.stringify({ dates: {} }, null, 2));
}

function loadHistory() {
  try { return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8')); } catch { return { dates: {} }; }
}

function saveHistory(hist) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(hist, null, 2));
}

function fetchUrl(url, options = {}) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.request(
      url,
      {
        method: options.method || 'GET',
        timeout: TIMEOUT_MS,
        headers: { 'User-Agent': 'OpenClaw-SecurityAudit/1.0', ...options.headers },
        maxRedirects: 0, // we want to see redirects explicitly
      },
      (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
      }
    );
    req.on('error', (e) => resolve({ status: 0, error: e.message, headers: {}, body: '' }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, error: 'timeout', headers: {}, body: '' }); });
    req.end();
  });
}

function checkHttpsEnforcement() {
  // Try HTTP root — should redirect to HTTPS (301/302)
  const httpUrl = BASE_URL.replace('https://', 'http://');
  return fetchUrl(httpUrl).then(res => ({
    httpStatus: res.status,
    redirectLocation: res.headers.location || null,
    ok: [301, 302, 308].includes(res.status) && res.headers.location && res.headers.location.startsWith('https'),
  }));
}

function checkSecurityHeaders(headers) {
  const results = {};
  let missingCritical = 0;
  let warnings = 0;

  for (const [header, rule] of Object.entries(EXPECTED_HEADERS)) {
    const value = headers[header]?.toLowerCase() || headers[header];
    const present = value != null && value !== '';

    if (rule.required && !present) {
      results[header] = { status: 'missing', severity: 'critical' };
      missingCritical++;
    } else if (present) {
      // Validate value if rules specify
      if (rule.allowed && !rule.allowed.map(a => a.toLowerCase()).includes(value)) {
        results[header] = { status: 'invalid', expected: rule.allowed, actual: value, severity: 'critical' };
        missingCritical++;
      } else if (rule.minMaxAge && header === 'strict-transport-security') {
        // Parse max-age from value
        const match = value.match(/max-age=(\d+)/);
        const age = match ? parseInt(match[1]) : 0;
        if (age < rule.minMaxAge) {
          results[header] = { status: 'weak', actual: value, expected: `max-age≥${rule.minMaxAge}`, severity: 'warning' };
          warnings++;
        } else {
          results[header] = { status: 'ok', actual: value };
        }
      } else if (rule.minLength && value.length < rule.minLength) {
        results[header] = { status: 'too_short', actual: value, expected: `≥${rule.minLength} chars`, severity: 'warning' };
        warnings++;
      } else {
        results[header] = { status: 'ok', actual: value };
      }
    } else {
      // Not required, not present
      results[header] = { status: 'not_set', optional: true };
    }
  }

  return { perHeader: results, missingCritical, warnings };
}

function checkMixedContent(html) {
  // Find any http:// URLs in src/href attributes
  const insecureRegex = /(?:src|href)=["'](http:\/\/[^"']+)["']/gi;
  const matches = [];
  let m;
  while ((m = insecureRegex.exec(html)) !== null) {
    matches.push(m[1]);
  }
  return matches;
}

function checkCookies(headers) {
  const setCookie = headers['set-cookie'];
  if (!setCookie) return { hasSecure: false, hasHttpOnly: false, hasSameSite: false, issues: ['no_cookies'] };

  const cookies = Array.isArray(setCookie) ? setCookie : [setCookie];
  let hasSecure = false, hasHttpOnly = false, hasSameSite = false;

  for (const c of cookies) {
    const lower = c.toLowerCase();
    if (lower.includes('secure')) hasSecure = true;
    if (lower.includes('httponly')) hasHttpOnly = true;
    if (lower.includes('samesite')) hasSameSite = true;
  }

  const issues = [];
  if (!hasSecure) issues.push('missing_secure');
  if (!hasHttpOnly) issues.push('missing_httponly');
  if (!hasSameSite) issues.push('missing_samesite');

  return { hasSecure, hasHttpOnly, hasSameSite, issues };
}

async function main() {
  ensureFiles();
  log('🔐 Starting Security Headers & HTTPS Audit...');

  const now = new Date();
  const todayKey = now.toISOString().slice(0, 10);

  // 1. Check HTTPS enforcement (HTTP → HTTPS redirect)
  log('🌐 Checking HTTPS enforcement...');
  const httpsCheck = await checkHttpsEnforcement();
  log(`   HTTP → ${httpsCheck.httpStatus} → ${httpsCheck.redirectLocation || 'no redirect'}`);

  // 2. Fetch homepage over HTTPS
  log('📥 Fetching homepage headers...');
  const mainRes = await fetchUrl(BASE_URL);
  if (mainRes.status !== 200) {
    log(`⚠️ Homepage returned ${mainRes.status}`);
  }

  // 3. Check security headers
  const headerCheck = checkSecurityHeaders(mainRes.headers);
  log(`   Headers: ${Object.keys(headerCheck.perHeader).length} checked, ${headerCheck.missingCritical} missing critical`);

  // 4. Check cookies
  const cookieCheck = checkCookies(mainRes.headers);

  // 5. Check mixed content in HTML
  log('🔍 Scanning for mixed content...');
  const mixedLinks = checkMixedContent(mainRes.body);
  log(`   Found ${mixedLinks.length} insecure resource references`);

  // 6. Update history
  const history = loadHistory();
  if (!history.dates[todayKey]) history.dates[todayKey] = {};

  history.dates[todayKey] = {
    httpsEnforce: httpsCheck.ok,
    httpsStatus: httpsCheck.httpStatus,
    headers: headerCheck.perHeader,
    cookieFlags: cookieCheck,
    mixedContentCount: mixedLinks.length,
    mixedContent: mixedLinks.slice(0, 10),
  };

  // Keep last 90 days
  const dates = Object.keys(history.dates).sort();
  if (dates.length > 90) {
    const toRemove = dates.slice(0, dates.length - 90);
    for (const d of toRemove) delete history.dates[d];
  }
  saveHistory(history);

  // 7. Build report
  const report = {
    timestamp: now.toISOString(),
    baseUrl: BASE_URL,
    httpsEnforcement: httpsCheck,
    headers: headerCheck,
    cookies: cookieCheck,
    mixedContent: mixedLinks,
  };
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  // 8. Alerts
  if (TELEGRAM_TOKEN) {
    await sendTelegram(report);
  }

  // 9. GitHub issue for critical failures
  const criticalIssues = [];
  if (!httpsCheck.ok) criticalIssues.push('HTTPS redirect missing or incorrect');
  if (headerCheck.missingCritical > 0) criticalIssues.push(`${headerCheck.missingCritical} critical security headers missing`);
  if (mixedLinks.length > 0) criticalIssues.push(`${mixedLinks.length} mixed content references`);

  if (criticalIssues.length > 0 && GITHUB_TOKEN) {
    await createGitHubIssue(report, criticalIssues);
  }

  log('✅ Security audit complete');
}

async function sendTelegram(report) {
  const https = require('https');
  const now = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  let text = `🔐 *Security Headers & HTTPS Audit* — ${now}\n`;
  text += `Base: ${BASE_URL}\n\n`;

  // HTTPS enforcement
  if (report.httpsEnforcement.ok) {
    text += '✅ HTTPS redirect: working\n';
  } else {
    text += `❌ HTTPS redirect: HTTP ${report.httpsEnforcement.httpStatus} → ${report.httpsEnforcement.redirectLocation || 'none'}\n`;
  }

  // Headers summary
  const okHeaders = Object.values(report.headers.perHeader).filter(h => h.status === 'ok').length;
  const totalH = Object.keys(report.headers.perHeader).length;
  text += `📋 Security headers: ${okHeaders}/${totalH} OK\n`;

  // Critical missing
  const missingCrit = Object.entries(report.headers.perHeader)
    .filter(([k, v]) => v.severity === 'critical')
    .map(([k, v]) => k);
  if (missingCrit.length > 0) {
    text += `🚨 Missing/critical: ${missingCrit.join(', ')}\n`;
  }

  // Cookies
  if (report.cookies.issues.includes('no_cookies')) {
    text += '🍪 No cookies set\n';
  } else {
    const flags = [];
    if (report.cookies.hasSecure) flags.push('Secure');
    if (report.cookies.hasHttpOnly) flags.push('HttpOnly');
    if (report.cookies.hasSameSite) flags.push('SameSite');
    text += `🍪 Cookie flags: ${flags.join(', ')} (${report.cookies.issues.length} missing)\n`;
  }

  // Mixed content
  text += `🔗 Mixed content (HTTP resources): ${report.mixedContent.length}\n`;
  if (report.mixedContent.length > 0) {
    text += `   Examples: ${report.mixedContent.slice(0, 3).join(', ')}\n`;
  }

  text += `\nDetails: .hermes/memory/security-headers/latest-report.json`;

  const payload = new URLSearchParams({ chat_id: TELEGRAM_CHAT, text, parse_mode: 'Markdown' });

  await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': payload.byteLength },
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => (res.statusCode === 200 ? resolve() : reject(new Error(`HTTP ${res.statusCode}: ${body}`))));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
  log('✅ Telegram alert sent');
}

async function createGitHubIssue(report, criticalIssues) {
  const title = `🚨 Security Headers & HTTPS Issues — ${new Date().toLocaleDateString()} — ${criticalIssues.length} critical`;
  const body = [
    '## Security Headers & HTTPS Compliance Report',
    '',
    `**Run:** ${new Date().toISOString()}`,
    `**Target:** ${BASE_URL}`,
    '',
    '### Critical Issues',
    ...criticalIssues.map(issue => `- ${issue}`),
    '',
    '### Header Analysis',
    ...Object.entries(report.headers.perHeader).map(([h, v]) => {
      let line = `- **${h}**: ${v.status}`;
      if (v.expected) line += ` (expected: ${JSON.stringify(v.expected)})`;
      if (v.actual) line += ` → actual: ${v.actual}`;
      return line;
    }),
    '',
    report.mixedContent.length > 0 ? `### Mixed Content (${report.mixedContent.length} found)\n` + report.mixedContent.map(url => `- ${url}`).join('\n') + '\n' : '',
    '### Cookie Security',
    `Secure: ${report.cookies.hasSecure ? '✅' : '❌'} | HttpOnly: ${report.cookies.hasHttpOnly ? '✅' : '❌'} | SameSite: ${report.cookies.hasSameSite ? '✅' : '❌'}`,
    '',
    '### Remediation',
    '- Ensure HTTP → HTTPS redirect (301) on all routes',
    '- Add missing security headers via server config (nginx/Apache/Next.js middleware)',
    '- For CSP: start with strict-dynamic; nonce; report-uri',
    '- Set HSTS: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`',
    '- Add `Secure; HttpOnly; SameSite=Strict` to all cookies',
    '- Remove all `http://` resource references; use protocol-relative or HTTPS',
    '',
    '---',
    '*Generated by automation/security-headers-audit.cjs*',
  ].join('\n');

  try {
    const escaped = body.replace(/"/g, '\\"').replace(/\$/g, '\\$');
    const { execSync } = require('child_process');
    execSync(`gh issue create --title "${title}" --body "${escaped}" --label "automation,security,headers"`, { stdio: 'pipe' });
    log('✅ GitHub issue created');
  } catch (e) {
    log('⚠️ gh CLI failed; issue not created: ' + e.message);
  }
}

main().catch(err => {
  console.error('❌ Security headers audit failed:', err);
  process.exit(1);
});
