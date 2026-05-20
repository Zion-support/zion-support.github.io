#!/usr/bin/env node
/**
 * Lead-gen contact route guard
 * Checks that the contact page returns the expected email
 */

const https = require('https');

const LEAD_GEN_BASE_URL = process.env.LEAD_GEN_BASE_URL || 'https://ziontechgroup.com';
const LEAD_GEN_EXPECTED_EMAIL = process.env.LEAD_GEN_EXPECTED_EMAIL || 'kleber@ziontechgroup.com';

function checkContactRoute() {
  return new Promise((resolve) => {
    const options = {
      hostname: new URL(LEAD_GEN_BASE_URL).hostname,
      port: 443,
      path: '/contact',
      method: 'GET',
      headers: { 'User-Agent': 'lead-gen-contact-route-guard/1.0' }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const containsExpectedEmail = data.includes(LEAD_GEN_EXPECTED_EMAIL);
        console.log(`Contact page check: ${containsExpectedEmail ? 'PASS' : 'FAIL'}`);
        console.log(`Expected email: ${LEAD_GEN_EXPECTED_EMAIL}`);
        resolve(containsExpectedEmail);
      });
    });

    req.on('error', (e) => {
      console.error(`Contact route check error: ${e.message}`);
      resolve(false);
    });

    req.end();
  });
}

checkContactRoute()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch(() => {
    process.exit(1);
  });
