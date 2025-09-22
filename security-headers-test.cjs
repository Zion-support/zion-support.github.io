#!/usr/bin/env node

const https = require('https');
const http = require('http');

console.log('🧪 Security Headers Test Starting...\n');

// Required security headers
const requiredHeaders = {
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload'
};

// Test security headers
function testSecurityHeaders(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      const results = {
        url,
        headers: res.headers,
        missing: [],
        incorrect: [],
        passed: true
      };
      
      // Check for required headers
      Object.entries(requiredHeaders).forEach(([header, expectedValue]) => {
        const actualValue = res.headers[header];
        
        if (!actualValue) {
          results.missing.push(header);
          results.passed = false;
        } else if (actualValue.toLowerCase() !== expectedValue.toLowerCase()) {
          results.incorrect.push({
            header,
            expected: expectedValue,
            actual: actualValue
          });
          results.passed = false;
        }
      });
      
      resolve(results);
    }).on('error', reject);
  });
}

// Run security headers test
async function runTest() {
  const testUrl = process.argv[2] || 'http://localhost:3000';
  
  try {
    console.log(`🔍 Testing security headers for: ${testUrl}`);
    
    const results = await testSecurityHeaders(testUrl);
    
    if (results.passed) {
      console.log('✅ All security headers are properly configured');
    } else {
      console.log('❌ Security headers issues found:');
      
      if (results.missing.length > 0) {
        console.log('   Missing headers:');
        results.missing.forEach(header => {
          console.log(`     - ${header}`);
        });
      }
      
      if (results.incorrect.length > 0) {
        console.log('   Incorrect headers:');
        results.incorrect.forEach(issue => {
          console.log(`     - ${issue.header}: expected "${issue.expected}", got "${issue.actual}"`);
        });
      }
    }
    
    // Save results
    require('fs').writeFileSync('security-headers-test.json', JSON.stringify(results, null, 2));
    
  } catch (error) {
    console.error('❌ Security headers test failed:', error.message);
    process.exit(1);
  }
}

runTest();
