#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Security Audit...\n');

// Function to perform security audit
function performSecurityAudit() {
  console.log('🛡️ Security Analysis\n');
  
  // Check for security vulnerabilities
  console.log('📋 Dependency Security Check:');
  try {
    execSync('npm audit --audit-level moderate', { stdio: 'pipe' });
    console.log('   ✅ No moderate or high severity vulnerabilities found');
  } catch (error) {
    console.log('   ⚠️ Security vulnerabilities found. Run "npm audit fix" to fix them.');
  }

  // Check for sensitive information
  console.log('\n🔍 Sensitive Information Check:');
  const sensitivePatterns = [
    { pattern: /password\s*=\s*["'][^"']+["']/gi, type: 'Password in code' },
    { pattern: /api[_-]?key\s*=\s*["'][^"']+["']/gi, type: 'API key in code' },
    { pattern: /secret\s*=\s*["'][^"']+["']/gi, type: 'Secret in code' },
    { pattern: /token\s*=\s*["'][^"']+["']/gi, type: 'Token in code' },
    { pattern: /private[_-]?key\s*=\s*["'][^"']+["']/gi, type: 'Private key in code' }
  ];

  const findSensitiveInfo = (dir) => {
    let issues = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          issues = issues.concat(findSensitiveInfo(fullPath));
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            sensitivePatterns.forEach(({ pattern, type }) => {
              const matches = content.match(pattern);
              if (matches) {
                issues.push({ file: fullPath, type, matches: matches.length });
              }
            });
          } catch (error) {
            // Ignore files we can't read
          }
        }
      }
    } catch (error) {
      // Ignore directories we can't read
    }
    return issues;
  };

  const sensitiveIssues = findSensitiveInfo('.');
  if (sensitiveIssues.length > 0) {
    console.log('   ⚠️ Potential sensitive information found:');
    sensitiveIssues.forEach(issue => {
      console.log(`   - ${issue.file}: ${issue.type} (${issue.matches} matches)`);
    });
  } else {
    console.log('   ✅ No obvious sensitive information found');
  }

  // Check for console.log statements in production code
  console.log('\n📝 Console Statement Check:');
  const findConsoleLogs = (dir) => {
    let consoleLogs = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          consoleLogs = consoleLogs.concat(findConsoleLogs(fullPath));
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const matches = content.match(/console\.(log|warn|error|info|debug)/g);
            if (matches) {
              consoleLogs.push({ file: fullPath, count: matches.length });
            }
          } catch (error) {
            // Ignore files we can't read
          }
        }
      }
    } catch (error) {
      // Ignore directories we can't read
    }
    return consoleLogs;
  };

  const consoleLogs = findConsoleLogs('.');
  if (consoleLogs.length > 0) {
    console.log('   ⚠️ Console statements found in production code:');
    consoleLogs.forEach(log => {
      console.log(`   - ${log.file}: ${log.count} console statements`);
    });
    console.log('   Consider removing or using a proper logging library');
  } else {
    console.log('   ✅ No console statements found');
  }

  // Check for hardcoded URLs
  console.log('\n🌐 Hardcoded URL Check:');
  const findHardcodedUrls = (dir) => {
    let urls = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          urls = urls.concat(findHardcodedUrls(fullPath));
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const urlMatches = content.match(/https?:\/\/[^\s"']+/g);
            if (urlMatches) {
              urls.push({ file: fullPath, urls: urlMatches });
            }
          } catch (error) {
            // Ignore files we can't read
          }
        }
      }
    } catch (error) {
      // Ignore directories we can't read
    }
    return urls;
  };

  const hardcodedUrls = findHardcodedUrls('.');
  if (hardcodedUrls.length > 0) {
    console.log('   ⚠️ Hardcoded URLs found:');
    hardcodedUrls.forEach(url => {
      console.log(`   - ${url.file}: ${url.urls.length} URLs`);
      url.urls.forEach(u => console.log(`     ${u}`));
    });
    console.log('   Consider using environment variables for URLs');
  } else {
    console.log('   ✅ No hardcoded URLs found');
  }

  // Check for proper error handling
  console.log('\n⚠️ Error Handling Check:');
  const findErrorHandling = (dir) => {
    let errorHandling = { tryCatch: 0, throwStatements: 0, errorBoundaries: 0 };
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          const subErrorHandling = findErrorHandling(fullPath);
          errorHandling.tryCatch += subErrorHandling.tryCatch;
          errorHandling.throwStatements += subErrorHandling.throwStatements;
          errorHandling.errorBoundaries += subErrorHandling.errorBoundaries;
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            errorHandling.tryCatch += (content.match(/try\s*{/g) || []).length;
            errorHandling.throwStatements += (content.match(/throw\s+/g) || []).length;
            errorHandling.errorBoundaries += (content.match(/ErrorBoundary|componentDidCatch|getDerivedStateFromError/gi) || []).length;
          } catch (error) {
            // Ignore files we can't read
          }
        }
      }
    } catch (error) {
      // Ignore directories we can't read
    }
    return errorHandling;
  };

  const errorHandling = findErrorHandling('.');
  console.log(`   Try-catch blocks: ${errorHandling.tryCatch}`);
  console.log(`   Throw statements: ${errorHandling.throwStatements}`);
  console.log(`   Error boundaries: ${errorHandling.errorBoundaries}`);
  
  if (errorHandling.tryCatch === 0) {
    console.log('   ⚠️ No try-catch blocks found. Consider adding error handling.');
  } else {
    console.log('   ✅ Error handling patterns found');
  }

  console.log('\n✅ Security audit completed');
}

// Run security audit
performSecurityAudit();