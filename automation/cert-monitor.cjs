#!/usr/bin/env node
/**
 * Autonomous SSL/TLS Certificate Expiration Monitor
 *
 * Checks SSL certificate expiry for configured domains.
 * Alerts at 30, 7, and 1 day before expiry.
 * Optionally attempts auto-renew via Let's Encrypt for known ACME endpoints.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'cert-monitor');
const CONFIG_PATH = path.join(process.cwd(), '.hermes', 'config', 'cert-monitor.json');

const ALERT_DAYS = [30, 7, 1]; // alert thresholds
const DEFAULT_RENEW_DAYS_BEFORE = 30; // Let's Encrypt typical

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }
function formatDate(d) { return d.toISOString().split('T')[0]; }

function loadConfig() {
  let config = { domains: [], autoRenew: false, notifications: { telegram: true } };
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      config = { ...config, ...JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) };
    }
  } catch (e) {
    console.warn('⚠️  Could not parse cert monitor config, using defaults.');
  }
  return config;
}

// Fetch certificate expiry using openssl s_client
function checkDomain(domain) {
  try {
    // Connect to port 443
    const cmd = `echo | openssl s_client -servername ${domain} -connect ${domain}:443 2>/dev/null | openssl x509 -noout -dates`;
    const output = execSync(cmd, { encoding: 'utf8', timeout: 10000 });
    const notAfterMatch = output.match(/notAfter=(.*)/);
    if (notAfterMatch) {
      const expiryDate = new Date(notAfterMatch[1]);
      const daysLeft = Math.floor((expiryDate - new Date()) / (1000 * 60 * 60 * 24));
      return { domain, expiryDate: formatDate(expiryDate), daysLeft, ok: daysLeft > 0 };
    }
    return { domain, error: 'Could not parse certificate dates', ok: false };
  } catch (e) {
    return { domain, error: e.message, ok: false };
  }
}

function attemptAutoRenew(domain) {
  // Placeholder: In production, use certbot or ACME client
  console.log(`   🔄 Auto-renew not implemented for ${domain} — manual renewal required.`);
  return false;
}

function main() {
  console.log('🔐 SSL/TLS Certificate Expiration Monitor — starting\n');
  ensureDir(STATE_DIR);

  const config = loadConfig();
  if (config.domains.length === 0) {
    console.error('❌ No domains configured. Create .hermes/config/cert-monitor.json with ["domains": ["ziontechgroup.com", ...]]');
    process.exit(1);
  }

  console.log(`📋 Checking ${config.domains.length} domain(s)...\n`);
  const results = [];
  let hasAlerts = false;

  for (const domain of config.domains) {
    const result = checkDomain(domain);
    console.log(`   ${domain}: expires ${result.expiryDate || 'N/A'} (${result.daysLeft !== undefined ? result.daysLeft + ' days' : 'error'})`);
    results.push(result);

    if (!result.ok) {
      hasAlerts = true;
      console.log(`   🔴 Error/expired: ${result.error || 'Certificate expired'}`);
      continue;
    }

    // Check thresholds
    for (const days of ALERT_DAYS) {
      if (result.daysLeft <= days) {
        hasAlerts = true;
        console.log(`   ⚠️  Alert: ≤${days} days until expiry!`);
        break;
      }
    }

    // Attempt auto-renew if configured and within renew window
    if (config.autoRenew && result.daysLeft <= DEFAULT_RENEW_DAYS_BEFORE) {
      attemptAutoRenew(domain);
    }
  }

  // Save history
  const historyFile = path.join(STATE_DIR, 'history.json');
  const entry = {
    timestamp: nowISO(),
    results
  };
  const history = loadJson(historyFile, { entries: [] });
  history.entries.push(entry);
  // keep last 90 days
  history.entries = history.entries.filter(e => new Date(e.timestamp) > new Date(Date.now() - 90*24*60*60*1000));
  saveJson(historyFile, history);

  console.log('\n📋 Summary:');
  console.log(`   Total domains: ${config.domains.length}`);
  console.log(`   Issues found: ${hasAlerts ? 'YES' : 'No'}\n`);

  if (hasAlerts) {
    console.log('🚨 Certificate issues detected — check above for details.\n');
    // If errors or expiring soon, we could open GitHub issue
    process.exit(1);
  } else {
    console.log('✅ All certificates healthy.\n');
    process.exit(0);
  }
}

function loadJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}

function saveJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

main();
