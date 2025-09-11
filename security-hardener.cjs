#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Security Hardener Starting...\n');

// Security configurations
const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", 'https://vercel.live'],
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'img-src': ["'self'", 'data:', 'https:', 'blob:'],
    'connect-src': ["'self'", 'https://api.zion.app'],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
  },

  // Security headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  },

  // Environment variables security
  envSecurity: {
    NODE_ENV: 'production',
    NEXT_TELEMETRY_DISABLED: '1',
    NEXT_PRIVATE_STANDALONE: 'true',
  },
};

// Create security middleware
function createSecurityMiddleware() {
  console.log('🛡️  Creating security middleware...');

  const middleware = `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Content Security Policy
const csp = [;
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://vercel.live",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.zion.app",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
`;

  fs.writeFileSync('middleware.ts', middleware);
  console.log('✅ Security middleware created');
}

// Create security configuration for Next.js
function updateNextConfigSecurity() {
  console.log('🔧 Updating Next.js configuration for security...');

  const nextConfigPath = 'next.config.js';
  let nextConfig = '';

  if (fs.existsSync(nextConfigPath)) {
    nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  }

  // Add security configurations
  const securityConfig = `;
const nextConfig = {
  // Security configurations
  poweredByHeader: false,
  compress: true,
  
  // Headers for security
  async headers() {
return [;
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ];
  },
  
  // Environment variables
  env: {
    NODE_ENV: 'production',
    NEXT_TELEMETRY_DISABLED: '1'
  }
};

module.exports = nextConfig;
`;

  fs.writeFileSync(nextConfigPath, securityConfig);
  console.log('✅ Next.js security configuration updated');
}

// Create security audit script
function createSecurityAudit() {
  console.log('🔍 Creating security audit script...');

  const auditScript = `#!/usr/bin/env node;

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Security Audit Starting...\\n');

// Security audit checks
const securityChecks = [;
  {
    name: 'Dependency vulnerabilities',
    command: 'npm audit --audit-level=moderate',
    critical: true
  },
  {
    name: 'Outdated packages',
    command: 'npm outdated',
    critical: false
  },
  {
    name: 'License compliance',
    command: 'npx license-checker --summary',
    critical: false
  },
  {
    name: 'Security headers check',
    command: 'npx security-headers-check https://zion.app',
    critical: true
  }
];

// Run security checks
async function runSecurityChecks() {
  const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
    timestamp: new Date().toISOString()
  };
  
  for (const check of securityChecks) {
    console.log(\`🔍 Running: \${check.name}\`);
    
    try {
      const output = execSync(check.command, { encoding: 'utf8', stdio: 'pipe' });
      console.log(\`✅ \${check.name}: PASSED\`);
      results.passed++;
    } catch (error) {
      if (check.critical) {
        console.log(\`❌ \${check.name}: FAILED\`);
        console.log(error.message);
        results.failed++;
      } else {
        console.log(\`⚠️  \${check.name}: WARNING\`);
        console.log(error.message);
        results.warnings++;
      }
    }
  }
  
  // Save audit results
  fs.writeFileSync('security-audit-results.json', JSON.stringify(results, null, 2));
  
  console.log('\\n📊 Security Audit Results:');
  console.log(\`✅ Passed: \${results.passed}\`);
  console.log(\`❌ Failed: \${results.failed}\`);
  console.log(\`⚠️  Warnings: \${results.warnings}\`);
  
  if (results.failed > 0) {
    console.log('\\n🚨 Critical security issues found! Please address them immediately.');
    process.exit(1);
  } else {
    console.log('\\n🎉 Security audit completed successfully!');
  }
}

runSecurityChecks();
`;

  fs.writeFileSync('security-audit.cjs', auditScript);
  console.log('✅ Security audit script created');
}

// Create environment security checker
function createEnvSecurityChecker() {
  console.log('🔐 Creating environment security checker...');

  const envChecker = `#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');

console.log('🔐 Environment Security Check Starting...\\n');

// Check for sensitive files
const sensitiveFiles = [;
  '.env.local',
  '.env.production',
  '.env.development',
  'secrets.json',
  'config.json',
  'credentials.json'
];

// Check for hardcoded secrets
const secretPatterns = [;
  /password\\s*=\\s*['"][^'"]+['"]/gi,
  /api[_-]?key\\s*=\\s*['"][^'"]+['"]/gi,
  /secret\\s*=\\s*['"][^'"]+['"]/gi,
  /token\\s*=\\s*['"][^'"]+['"]/gi,
  /private[_-]?key\\s*=\\s*['"][^'"]+['"]/gi
];

// Scan files for secrets
function scanForSecrets() {
  console.log('🔍 Scanning for hardcoded secrets...');
  
const filesToScan = [;
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}'
  ];
  
  let foundSecrets = [];
  
  filesToScan.forEach(pattern => {
    try {
const files = execSync(\`find . -name "\${pattern}" -type f\`, { encoding: 'utf8' });
        .split('\\n')
        .filter(file => file.trim());
      
      files.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          secretPatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
              foundSecrets.push({
                file,
                matches: matches.map(match => match.substring(0, 50) + '...')
              });
            }
          });
        } catch (error) {
          // Skip files that can't be read
        }
      });
    } catch (error) {
      // Skip patterns that don't match any files
    }
  });
  
  if (foundSecrets.length > 0) {
    console.log('🚨 Hardcoded secrets found:');
    foundSecrets.forEach(secret => {
      console.log(\`   File: \${secret.file}\`);
      secret.matches.forEach(match => {
        console.log(\`   Secret: \${match}\`);
      });
    });
    return false;
  } else {
    console.log('✅ No hardcoded secrets found');
    return true;
  }
}

// Check sensitive files
function checkSensitiveFiles() {
  console.log('🔍 Checking for sensitive files...');
  
  let foundSensitive = [];
  
  sensitiveFiles.forEach(file => {
    if (fs.existsSync(file)) {
      foundSensitive.push(file);
    }
  });
  
  if (foundSensitive.length > 0) {
    console.log('⚠️  Sensitive files found:');
    foundSensitive.forEach(file => {
      console.log(\`   \${file}\`);
    });
    console.log('   Make sure these files are in .gitignore');
    return false;
  } else {
    console.log('✅ No sensitive files found in root');
    return true;
  }
}

// Check .gitignore
function checkGitignore() {
  console.log('🔍 Checking .gitignore configuration...');
  
  if (!fs.existsSync('.gitignore')) {
    console.log('❌ .gitignore file not found');
    return false;
  }
  
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
const requiredIgnores = [;
    '.env',
    '.env.local',
    '.env.production',
    '.env.development',
    'node_modules',
    '.next',
    'dist',
    'build'
  ];
  
  let missingIgnores = [];
  requiredIgnores.forEach(ignore => {
    if (!gitignore.includes(ignore)) {
      missingIgnores.push(ignore);
    }
  });
  
  if (missingIgnores.length > 0) {
    console.log('⚠️  Missing .gitignore entries:');
    missingIgnores.forEach(ignore => {
      console.log(\`   \${ignore}\`);
    });
    return false;
  } else {
    console.log('✅ .gitignore configuration looks good');
    return true;
  }
}

// Run all checks
function runAllChecks() {
  const results = {
    secrets: scanForSecrets(),
    sensitiveFiles: checkSensitiveFiles(),
    gitignore: checkGitignore()
  };
  
  const allPassed = Object.values(results).every(result => result === true);
  
  if (allPassed) {
    console.log('\\n🎉 Environment security check passed!');
  } else {
    console.log('\\n🚨 Environment security issues found!');
    process.exit(1);
  }
}

runAllChecks();
`;

  fs.writeFileSync('env-security-checker.cjs', envChecker);
  console.log('✅ Environment security checker created');
}

// Create security headers test
function createSecurityHeadersTest() {
  console.log('🧪 Creating security headers test...');

  const headersTest = `#!/usr/bin/env node;

const https = require('https');
const http = require('http');

console.log('🧪 Security Headers Test Starting...\\n');

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
    console.log(\`🔍 Testing security headers for: \${testUrl}\`);
    
    const results = await testSecurityHeaders(testUrl);
    
    if (results.passed) {
      console.log('✅ All security headers are properly configured');
    } else {
      console.log('❌ Security headers issues found:');
      
      if (results.missing.length > 0) {
        console.log('   Missing headers:');
        results.missing.forEach(header => {
          console.log(\`     - \${header}\`);
        });
      }
      
      if (results.incorrect.length > 0) {
        console.log('   Incorrect headers:');
        results.incorrect.forEach(issue => {
          console.log(\`     - \${issue.header}: expected "\${issue.expected}", got "\${issue.actual}"\`);
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
`;

  fs.writeFileSync('security-headers-test.cjs', headersTest);
  console.log('✅ Security headers test created');
}

// Main execution
async function main() {
  try {
    createSecurityMiddleware();
    updateNextConfigSecurity();
    createSecurityAudit();
    createEnvSecurityChecker();
    createSecurityHeadersTest();

    console.log('\n🎉 Security Hardener completed successfully!');
    console.log('\n📋 Created files:');
    console.log('   - middleware.ts');
    console.log('   - next.config.js (updated)');
    console.log('   - security-audit.cjs');
    console.log('   - env-security-checker.cjs');
    console.log('   - security-headers-test.cjs');

    console.log('\n🔒 Security features added:');
    console.log('   - Content Security Policy (CSP)');
    console.log('   - Security headers');
    console.log('   - XSS protection');
    console.log('   - Clickjacking protection');
    console.log('   - MIME type sniffing protection');
    console.log('   - Referrer policy');
    console.log('   - HSTS (HTTP Strict Transport Security)');

    console.log('\n🚀 Next steps:');
    console.log('   1. Run: node security-audit.cjs');
    console.log('   2. Run: node env-security-checker.cjs');
    console.log(
      '   3. Run: node security-headers-test.cjs http://localhost:3000'
    );
    console.log('   4. Test: npm run build && npm start');
  } catch (error) {
    console.error('❌ Security hardening failed:', error.message);
    process.exit(1);
  }
}

main();
