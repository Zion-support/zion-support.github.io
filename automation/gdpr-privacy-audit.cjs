#!/usr/bin/env node
/**
 * GDPR & Privacy Compliance Scanner
 * Checks for consent banner, tracking scripts, privacy policy links, form consent, data disclosures
 * Uses Playwright for realistic DOM evaluation (like accessibility audit)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const STATE_DIR = path.join(ROOT, '.hermes', 'memory', 'gdpr-privacy');
const LOG_FILE = path.join(STATE_DIR, 'privacy-audit.log');
const HISTORY_FILE = path.join(STATE_DIR, 'history.json');
const REPORT_FILE = path.join(STATE_DIR, 'latest-report.json');

const BASE_URL = process.env.APP_URL || 'https://ziontechgroup.com';
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID || '8435383377';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Known tracking script patterns
const TRACKING_PATTERNS = [
  /google-analytics\.com|gtag|analytics\.js/gi,
  /googletagmanager\.com/gi,
  /facebook\.net\/fr\/|fbq\(/gi,
  /hotjar\.com/gi,
  /clarity\.ms/gi,
  /mixpanel\.com/gi,
  /segment\.com/gi,
  /hotjar\.com/gi,
];

// Consent manager selectors (common)
const CONSENT_SELECTORS = [
  '#onetrust-consent-sdk',
  '.cookie-banner',
  '[aria-label*="cookie"]',
  '[aria-label*="consent"]',
  '.gdpr-banner',
  '.privacy-consent',
];

const PAGE_TIMEOUT_MS = 30000;
const MAX_PAGES = 20; // limit for speed

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

// Build Playwright script inline
function buildPlaywrightScript(pages) {
  return `
const { chromium } = require('playwright');
const BASE = '${BASE_URL}';
const pages = ${JSON.stringify(pages)};
const results = {};

(async () => {
  const browser = await chromium.launch({ headless: 'new' });
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const p of pages) {
    const url = p.startsWith('http') ? p : BASE + p;
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: ${PAGE_TIMEOUT_MS} });

      // 1. Check consent banner visibility
      const consentSelectors = ${JSON.stringify(CONSENT_SELECTORS)};
      let bannerVisible = false;
      for (const sel of consentSelectors) {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 1000 })) {
          bannerVisible = true;
          break;
        }
      }

      // 2. Scan for tracking scripts in DOM
      const scriptSrc = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('script[src]')).map(s => s.src);
      });
      const trackingScripts = scriptSrc.filter(src => ${JSON.stringify(TRACKING_PATTERNS.map(p => p.toString())).replace(/"/g, "'")}.some(pattern => src.match(pattern)));

      // 3. Check privacy policy link in footer
      const footerLinks = await page.evaluate(() => {
        const footer = document.querySelector('footer') || document.body;
        return Array.from(footer.querySelectorAll('a[href]')).map(a => ({ text: a.textContent.trim(), href: a.href }));
      });
      const privacyLink = footerLinks.find(l => l.href.includes('privacy') || l.text.toLowerCase().includes('privacy'));

      // 4. Check forms for email inputs without explicit consent
      const forms = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('form')).map(f => {
          const inputs = Array.from(f.querySelectorAll('input'));
          const hasEmail = inputs.some(i => (i.type === 'email' || i.name?.includes('email') || i.placeholder?.toLowerCase().includes('email')));
          const hasConsentCheckbox = inputs.some(i => i.type === 'checkbox' && (i.name?.toLowerCase().includes('consent') || i.name?.toLowerCase().includes('marketing')));
          return { hasEmail, hasConsentCheckbox };
        });
      });
      const emailForms = forms.filter(f => f.hasEmail);
      const formsWithConsent = forms.filter(f => f.hasEmail && f.hasConsentCheckbox);

      // 5. Look for data collection disclosure text
      const bodyText = await page.evaluate(() => document.body.innerText.toLowerCase());
      const hasDataDisclosure = /we collect|personal data|third.party|processing of data/.test(bodyText);

      // 6. Check for IP anonymization in GA (look in inline scripts)
      const inlineScripts = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('script:not([src])')).map(s => s.textContent);
      });
      const gaAnonymize = inlineScripts.some(s => /anonymize_ip|anonymizeIp/.test(s));

      results[p] = {
        url,
        bannerVisible,
        trackingScripts: trackingScripts.length,
        trackingScriptList: trackingScripts,
        privacyLink: !!privacyLink,
        privacyLinkHref: privacyLink?.href,
        totalForms: forms.length,
        emailForms: emailForms.length,
        formsWithConsent: formsWithConsent.length,
        hasDataDisclosure,
        gaAnonymize,
      };
    } catch (e) {
      results[p] = { url, error: e.message };
    }
  }

  await browser.close();
  require('fs').writeFileSync('${REPORT_FILE}', JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ scanned: pages.length, results }));
})();
`;
}

async function fetchSitemap() {
  const https = require('https');
  return new Promise((resolve, reject) => {
    https.get('${BASE_URL}/sitemap.xml', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractUrlsFromSitemap(xml) {
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function main() {
  ensureFiles();
  log('🔐 Starting GDPR/Privacy Compliance Audit...');

  // 1. Get pages from sitemap
  const sitemapXml = await fetchSitemap();
  const sitemapUrls = extractUrlsFromSitemap(sitemapXml);
  const pagesToScan = sitemapUrls.slice(0, MAX_PAGES);
  log(`📄 Scanning ${pagesToScan.length} pages from sitemap`);

  if (pagesToScan.length === 0) {
    log('⚠️ No sitemap pages; using homepage only');
    pagesToScan.push('/');
  }

  // 2. Build and run Playwright script
  const script = buildPlaywrightScript(pagesToScan);
  const tmpScript = path.join(ROOT, '.tmp', 'gdpr-scan.js');
  fs.mkdirSync(path.dirname(tmpScript), { recursive: true });
  fs.writeFileSync(tmpScript, script);

  log('🧪 Running Playwright scan...');
  const out = execSync(`node ${tmpScript}`, { cwd: ROOT, stdio: 'pipe' }).toString();
  const scanResults = JSON.parse(out);

  // 3. Aggregate metrics
  let pagesWithBanner = 0;
  let pagesWithTracking = 0;
  let pagesWithPrivacyLink = 0;
  let pagesWithDataDisclosure = 0;
  let pagesWithGaAnonymize = 0;
  let totalEmailForms = 0;
  let totalFormsWithConsent = 0;
  const issues = [];

  for (const [page, data] of Object.entries(scanResults.results)) {
    if (data.error) continue;
    if (data.bannerVisible) pagesWithBanner++;
    if (data.trackingScripts > 0) pagesWithTracking++;
    if (data.privacyLink) pagesWithPrivacyLink++;
    if (data.hasDataDisclosure) pagesWithDataDisclosure++;
    if (data.gaAnonymize) pagesWithGaAnonymize++;
    totalEmailForms += data.emailForms;
    totalFormsWithConsent += data.formsWithConsent;

    // Flag issues
    if (!data.bannerVisible) issues.push({ page, issue: 'missing_consent_banner', critical: true });
    if (data.trackingScripts > 0 && !data.bannerVisible) issues.push({ page, issue: 'tracking_without_consent', critical: true });
    if (!data.privacyLink) issues.push({ page, issue: 'missing_privacy_link', critical: true });
    if (data.emailForms > 0 && data.formsWithConsent < data.emailForms) {
      issues.push({ page, issue: 'forms_missing_explicit_consent', critical: false });
    }
  }

  const totalPagesScanned = Object.keys(scanResults.results).length;
  const complianceScore = Math.round(
    (pagesWithBanner / totalPagesScanned) * 25 +
    (pagesWithPrivacyLink / totalPagesScanned) * 25 +
    (totalFormsWithConsent / Math.max(1, totalEmailForms)) * 25 +
    (pagesWithGaAnonymize / totalPagesScanned) * 10 +
    (1 - (pagesWithTracking / Math.max(1, totalPagesScanned))) * 15
  ); // rough 0-100

  log(`📊 Compliance score: ${complianceScore}/100`);
  log(`   Banner present: ${pagesWithBanner}/${totalPagesScanned}`);
  log(`   Privacy link: ${pagesWithPrivacyLink}/${totalPagesScanned}`);
  log(`   Forms with consent: ${totalFormsWithConsent}/${totalEmailForms}`);
  log(`   Issues found: ${issues.length}`);

  // 4. Update history
  const history = loadHistory();
  const todayKey = new Date().toISOString().slice(0, 10);
  history.dates[todayKey] = {
    pagesScanned: totalPagesScanned,
    complianceScore,
    pagesWithBanner,
    pagesWithPrivacyLink,
    totalEmailForms,
    totalFormsWithConsent,
    criticalIssues: issues.filter(i => i.critical).length,
  };

  // Keep last 90 days
  const dates = Object.keys(history.dates).sort();
  if (dates.length > 90) {
    const toRemove = dates.slice(0, dates.length - 90);
    for (const d of toRemove) delete history.dates[d];
  }
  saveHistory(history);

  // 5. Build report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    pagesScanned: totalPagesScanned,
    complianceScore,
    summary: {
      pagesWithBanner,
      pagesWithPrivacyLink,
      pagesWithDataDisclosure,
      pagesWithGaAnonymize,
      totalEmailForms,
      totalFormsWithConsent,
      pagesWithTracking,
    },
    issues,
    perPage: scanResults.results,
  };
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  // 6. Alerts
  if (TELEGRAM_TOKEN) {
    await sendTelegram(report);
  }

  // 7. GitHub issue for critical problems
  const criticalCount = issues.filter(i => i.critical).length;
  if (criticalCount >= 2 && GITHUB_TOKEN) {
    await createGitHubIssue(report, criticalCount);
  }

  log('✅ GDPR/Privacy audit complete');
}

async function sendTelegram(report) {
  const https = require('https');
  const now = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  let text = `🛡️ *GDPR/Privacy Compliance Audit* — ${now}\n`;
  text += `Base: ${BASE_URL}\n\n`;

  text += `📊 Compliance Score: ${report.complianceScore}/100\n`;
  text += `Pages scanned: ${report.pagesScanned}\n\n`;

  if (report.summary.pagesWithBanner < report.pagesScanned) {
    text += `🚨 Consent banner missing on ${report.pagesScanned - report.summary.pagesWithBanner} pages\n`;
  }
  if (!report.summary.pagesWithPrivacyLink) {
    text += `🚨 Privacy policy link not found\n`;
  }
  if (report.summary.totalEmailForms > report.summary.totalFormsWithConsent) {
    text += `⚠️ ${report.summary.totalEmailForms - report.summary.totalFormsWithConsent} email forms lack explicit consent checkbox\n`;
  }
  if (report.summary.pagesWithTracking > 0) {
    text += `⚠️ Tracking scripts detected on ${report.summary.pagesWithTracking} pages\n`;
  }

  text += `\nDetails: .hermes/memory/gdpr-privacy/latest-report.json`;

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

async function createGitHubIssue(report, criticalCount) {
  const title = `🚨 GDPR/Privacy Compliance Issues — ${new Date().toLocaleDateString()} — ${criticalCount} critical violations`;
  const body = [
    '## GDPR/Privacy Compliance Report',
    '',
    `**Run:** ${new Date().toISOString()}`,
    `**Site:** ${BASE_URL}`,
    `**Compliance Score:** ${report.complianceScore}/100`,
    '',
    '### Critical Violations',
    ...report.issues.filter(i => i.critical).map(i => `- [${i.page}](${BASE_URL}${i.page}): ${i.issue}`),
    '',
    '### Summary',
    `- Consent banner present: ${report.summary.pagesWithBanner}/${report.pagesScanned} pages`,
    `- Privacy policy linked: ${report.summary.pagesWithPrivacyLink ? '✅ Yes' : '❌ No'}`,
    `- Email forms with explicit opt-in: ${report.summary.totalFormsWithConsent}/${report.summary.totalEmailForms}`,
    `- Tracking scripts detected: ${report.summary.pagesWithTracking} pages`,
    `- Data disclosure statements: ${report.summary.pagesWithDataDisclosure} pages`,
    '',
    '### Remediation',
    '- Implement cookie consent banner (e.g., OneTrust, Cookiebot, or custom) that blocks non-essential cookies until accepted',
    '- Add privacy policy link to footer (must be clearly visible)',
    '- Add explicit unchecked consent checkbox to all email/marketing forms',
    '- Configure analytics to anonymize IP (e.g., `gtag('config', '...', { 'anonymize_ip': true })`)',
    '- Ensure tracking scripts only load after consent',
    '- Add data collection disclosure text (e.g., "We collect personal data to provide services..." )',
    '',
    '---',
    '*Generated by automation/gdpr-privacy-audit.cjs*',
  ].join('\n');

  try {
    const escaped = body.replace(/"/g, '\\"').replace(/\$/g, '\\$');
    execSync(`gh issue create --title "${title}" --body "${escaped}" --label "automation,gdpr,privacy,compliance"`, { stdio: 'pipe' });
    log('✅ GitHub issue created');
  } catch (e) {
    log('⚠️ gh CLI failed; issue not created: ' + e.message);
  }
}

main().catch(err => {
  console.error('❌ GDPR/Privacy audit failed:', err);
  process.exit(1);
});
