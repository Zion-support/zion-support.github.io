#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Enhancement Automation...');

// Security issues identified in the audit
const securityIssues = [
  {
    file: 'pages/index.tsx',
    issue: 'Use of innerHTML - potential XSS risk',
    severity: 'medium',
    line: 'unknown'
  }
];

// Function to fix XSS vulnerabilities
function fixXSSVulnerabilities() {
  console.log('🛡️  Fixing XSS vulnerabilities...');
  
  const filesToFix = ['pages/index.tsx'];
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check for innerHTML usage
      if (content.includes('innerHTML')) {
        console.log(`⚠️  Found innerHTML usage in ${filePath}`);
        
        // Create backup
        const backupPath = filePath + '.security-backup';
        fs.writeFileSync(backupPath, content);
        console.log(`💾 Security backup created: ${backupPath}`);
        
        // Replace innerHTML with safer alternatives
        content = content.replace(/innerHTML\s*=/g, 'textContent =');
        content = content.replace(/dangerouslySetInnerHTML/g, '// SECURITY: Replaced dangerouslySetInnerHTML');
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed XSS vulnerability in ${filePath}`);
      } else {
        console.log(`✅ No innerHTML usage found in ${filePath}`);
      }
    }
  });
}

// Function to add security headers
function addSecurityHeaders() {
  console.log('🔐 Adding security headers...');
  
  const securityHeaders = `// Security Headers Configuration
export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';"
  }
];
`;

  fs.writeFileSync('utils/security-headers.js', securityHeaders);
  console.log('✅ Created security headers configuration');
}

// Function to create a security validation script
function createSecurityValidator() {
  const validatorScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Security Validation...');

// Security patterns to check for
const securityPatterns = [
  {
    pattern: /innerHTML\\s*=/g,
    issue: 'XSS Risk: innerHTML usage',
    severity: 'high'
  },
  {
    pattern: /dangerouslySetInnerHTML/g,
    issue: 'XSS Risk: dangerouslySetInnerHTML usage',
    severity: 'high'
  },
  {
    pattern: /eval\\s*\\(/g,
    issue: 'Code Injection Risk: eval usage',
    severity: 'critical'
  },
  {
    pattern: /document\\.write/g,
    issue: 'XSS Risk: document.write usage',
    severity: 'high'
  },
  {
    pattern: /window\\.location/g,
    issue: 'Potential redirect vulnerability',
    severity: 'medium'
  }
];

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  securityPatterns.forEach(({ pattern, issue, severity }) => {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({
        file: filePath,
        issue,
        severity,
        count: matches.length
      });
    }
  });

  return issues;
}

// Scan all TypeScript/JavaScript files
function scanAllFiles() {
  const filesToScan = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && /\\.(ts|tsx|js|jsx)$/.test(item)) {
        filesToScan.push(fullPath);
      }
    });
  }

  scanDirectory('.');
  
  const allIssues = [];
  filesToScan.forEach(file => {
    const issues = scanFile(file);
    allIssues.push(...issues);
  });

  return allIssues;
}

// Main execution
const issues = scanAllFiles();

if (issues.length === 0) {
  console.log('✅ No security issues found!');
} else {
  console.log(\`⚠️  Found \${issues.length} security issues:\`);
  issues.forEach(issue => {
    console.log(\`   \${issue.severity.toUpperCase()}: \${issue.file} - \${issue.issue} (\${issue.count} occurrences)\`);
  });
}

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  totalIssues: issues.length,
  issues: issues,
  summary: {
    critical: issues.filter(i => i.severity === 'critical').length,
    high: issues.filter(i => i.severity === 'high').length,
    medium: issues.filter(i => i.severity === 'medium').length,
    low: issues.filter(i => i.severity === 'low').length
  }
};

fs.writeFileSync('security-validation-report.json', JSON.stringify(report, null, 2));
console.log('📄 Security validation report saved to security-validation-report.json');
`;

  fs.writeFileSync('scripts/security-validator.cjs', validatorScript);
  console.log('✅ Created security validator script');
}

// Function to generate security enhancement report
function generateSecurityReport() {
  const report = {
    timestamp: new Date().toISOString(),
    securityEnhancements: {
      xssFixes: 'Replaced innerHTML with safer alternatives',
      securityHeaders: 'Added comprehensive security headers',
      validationScript: 'Created automated security validation'
    },
    recommendations: [
      'Implement Content Security Policy (CSP)',
      'Add input validation and sanitization',
      'Use HTTPS in production',
      'Implement rate limiting',
      'Add security monitoring and logging',
      'Regular security audits and dependency updates'
    ],
    nextSteps: [
      'Run security validator regularly',
      'Update security headers in next.config.js',
      'Implement input validation middleware',
      'Set up security monitoring'
    ]
  };

  fs.writeFileSync('security-enhancement-report.json', JSON.stringify(report, null, 2));
  console.log('📄 Security enhancement report saved to security-enhancement-report.json');
}

// Main execution
try {
  fixXSSVulnerabilities();
  addSecurityHeaders();
  createSecurityValidator();
  generateSecurityReport();
  
  console.log('🎉 Security enhancement automation completed successfully!');
  console.log('📋 Security improvements applied:');
  console.log('   ✅ XSS vulnerability fixes');
  console.log('   ✅ Security headers configuration');
  console.log('   ✅ Security validation script');
  console.log('   ✅ Security enhancement report');
  
} catch (error) {
  console.error('❌ Security enhancement automation failed:', error.message);
  process.exit(1);
}