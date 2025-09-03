#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔒 Starting security audit...');

const securityIssues = [];
const securityWarnings = [];

// Check for sensitive data patterns
const sensitivePatterns = [
  {
    pattern: /password\s*[:=]\s*['"][^'"]+['"]/gi,
    severity: 'high',
    message: 'Potential hardcoded password'
  },
  {
    pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
    severity: 'high',
    message: 'Potential hardcoded API key'
  },
  {
    pattern: /secret\s*[:=]\s*['"][^'"]+['"]/gi,
    severity: 'high',
    message: 'Potential hardcoded secret'
  },
  {
    pattern: /token\s*[:=]\s*['"][^'"]+['"]/gi,
    severity: 'medium',
    message: 'Potential hardcoded token'
  },
  {
    pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
    severity: 'high',
    message: 'Potential hardcoded private key'
  }
];

// Check for dangerous functions
const dangerousFunctions = [
  {
    pattern: /eval\s*\(/gi,
    severity: 'high',
    message: 'Use of eval() function - security risk'
  },
  {
    pattern: /innerHTML\s*=/gi,
    severity: 'medium',
    message: 'Use of innerHTML - potential XSS risk'
  },
  {
    pattern: /document\.write\s*\(/gi,
    severity: 'medium',
    message: 'Use of document.write() - potential XSS risk'
  }
];

// File extensions to check
const extensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];

// Directories to scan
const directories = ['components', 'pages', 'lib', 'scripts', 'automation'];

function auditFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for sensitive data
    sensitivePatterns.forEach(({ pattern, severity, message }) => {
      const matches = content.match(pattern);
      if (matches) {
        const issue = {
          file: filePath,
          severity,
          message,
          count: matches.length
        };
        
        if (severity === 'high') {
          securityIssues.push(issue);
        } else {
          securityWarnings.push(issue);
        }
      }
    });
    
    // Check for dangerous functions
    dangerousFunctions.forEach(({ pattern, severity, message }) => {
      const matches = content.match(pattern);
      if (matches) {
        const issue = {
          file: filePath,
          severity,
          message,
          count: matches.length
        };
        
        if (severity === 'high') {
          securityIssues.push(issue);
        } else {
          securityWarnings.push(issue);
        }
      }
    });
  } catch (error) {
    // Skip files that can't be read
  }
}

// Scan directories
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir, { recursive: true });
    files.forEach(file => {
      if (typeof file === 'string' && extensions.some(ext => file.endsWith(ext))) {
        auditFile(path.join(dir, file));
      }
    });
  }
});

// Check for .env files
if (fs.existsSync('.env')) {
  securityWarnings.push({
    file: '.env',
    severity: 'medium',
    message: '.env file found - ensure it\'s in .gitignore',
    count: 1
  });
}

// Check package.json for known vulnerabilities
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  // Check for known problematic packages
  const problematicPackages = {
    'request': 'Deprecated package with security vulnerabilities',
    'node-uuid': 'Deprecated package, use uuid instead',
    'hoek': 'Package with known vulnerabilities'
  };
  
  Object.keys(problematicPackages).forEach(pkg => {
    if (dependencies[pkg]) {
      securityWarnings.push({
        file: 'package.json',
        severity: 'medium',
        message: `Potentially vulnerable package: ${pkg} - ${problematicPackages[pkg]}`,
        count: 1
      });
    }
  });
} catch (error) {
  securityWarnings.push({
    file: 'package.json',
    severity: 'low',
    message: 'Could not parse package.json for security check',
    count: 1
  });
}

// Display results
console.log('\n🔒 Security Audit Results:');

if (securityIssues.length === 0 && securityWarnings.length === 0) {
  console.log('✅ No security issues found');
} else {
  if (securityIssues.length > 0) {
    console.log(`\n🚨 High Severity Issues (${securityIssues.length}):`);
    securityIssues.forEach(issue => {
      console.log(`   - ${issue.file}: ${issue.message} (${issue.count} occurrences)`);
    });
  }
  
  if (securityWarnings.length > 0) {
    console.log(`\n⚠️  Warnings (${securityWarnings.length}):`);
    securityWarnings.forEach(warning => {
      console.log(`   - ${warning.file}: ${warning.message}`);
    });
  }
}

// Save report
const report = {
  timestamp: new Date().toISOString(),
  issues: securityIssues,
  warnings: securityWarnings,
  summary: {
    totalIssues: securityIssues.length,
    totalWarnings: securityWarnings.length,
    severity: securityIssues.length > 0 ? 'high' : securityWarnings.length > 0 ? 'medium' : 'low'
  }
};

fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Security audit report saved to security-audit-report.json');

process.exit(securityIssues.length > 0 ? 1 : 0);