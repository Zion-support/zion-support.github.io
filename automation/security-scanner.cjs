#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting Security Scanner...');

const securityChecks = {
  npmAudit: false,
  packageLock: false,
  envFiles: false,
  sensitiveData: false,
  permissions: false
};

try {
  // Run npm audit
  console.log('📋 Running npm audit...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const audit = JSON.parse(auditResult);
  
  if (audit.vulnerabilities && Object.keys(audit.vulnerabilities).length > 0) {
    console.log(`⚠️  Found ${Object.keys(audit.vulnerabilities).length} vulnerabilities`);
    Object.entries(audit.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} (${vuln.via})`);
    });
  } else {
    console.log('✅ No vulnerabilities found');
  }
  securityChecks.npmAudit = true;
} catch (error) {
  console.log('❌ npm audit failed');
}

try {
  // Check for package-lock.json
  if (fs.existsSync('package-lock.json')) {
    console.log('✅ package-lock.json found (dependencies locked)');
    securityChecks.packageLock = true;
  } else {
    console.log('⚠️  package-lock.json not found (dependencies not locked)');
  }
} catch (error) {
  console.log('❌ package-lock.json check failed');
}

try {
  // Check for environment files
  const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
  const foundEnvFiles = envFiles.filter(file => fs.existsSync(file));
  
  if (foundEnvFiles.length > 0) {
    console.log(`✅ Environment files found: ${foundEnvFiles.join(', ')}`);
    
    // Check if .env files are in .gitignore
    if (fs.existsSync('.gitignore')) {
      const gitignore = fs.readFileSync('.gitignore', 'utf8');
      const envInGitignore = envFiles.some(file => gitignore.includes(file));
      if (envInGitignore) {
        console.log('✅ Environment files are in .gitignore');
      } else {
        console.log('⚠️  Environment files may not be in .gitignore');
      }
    }
  } else {
    console.log('ℹ️  No environment files found');
  }
  securityChecks.envFiles = true;
} catch (error) {
  console.log('❌ Environment files check failed');
}

try {
  // Check for sensitive data patterns
  const sensitivePatterns = [
    /password\s*=\s*['"][^'"]+['"]/gi,
    /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
    /secret\s*=\s*['"][^'"]+['"]/gi,
    /token\s*=\s*['"][^'"]+['"]/gi
  ];
  
  let sensitiveDataFound = false;
  
  function checkFile(filePath) {
    try {
      if (fs.statSync(filePath).isDirectory()) return;
      const content = fs.readFileSync(filePath, 'utf8');
      
      sensitivePatterns.forEach(pattern => {
        if (pattern.test(content)) {
          console.log(`⚠️  Potential sensitive data in ${filePath}`);
          sensitiveDataFound = true;
        }
      });
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  function walkDir(dir) {
    try {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        if (file.startsWith('.') || file === 'node_modules') return;
        checkFile(filePath);
        if (fs.statSync(filePath).isDirectory()) {
          walkDir(filePath);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir('.');
  
  if (!sensitiveDataFound) {
    console.log('✅ No obvious sensitive data patterns found');
  }
  securityChecks.sensitiveData = true;
} catch (error) {
  console.log('❌ Sensitive data check failed');
}

try {
  // Check file permissions
  const criticalFiles = ['package.json', 'package-lock.json'];
  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      const mode = stats.mode & parseInt('777', 8);
      if (mode > parseInt('644', 8)) {
        console.log(`⚠️  ${file} has overly permissive permissions (${mode.toString(8)})`);
      } else {
        console.log(`✅ ${file} has appropriate permissions`);
      }
    }
  });
  securityChecks.permissions = true;
} catch (error) {
  console.log('❌ Permissions check failed');
}

// Calculate security score
const totalChecks = Object.keys(securityChecks).length;
const passedChecks = Object.values(securityChecks).filter(Boolean).length;
const securityScore = Math.round((passedChecks / totalChecks) * 100);

console.log(`\n📊 Security Score: ${securityScore}% (${passedChecks}/${totalChecks})`);

if (securityScore >= 80) {
  console.log('🎉 Security scan passed!');
  process.exit(0);
} else if (securityScore >= 60) {
  console.log('⚠️  Security scan found some issues');
  process.exit(0);
} else {
  console.log('🚨 Security scan found critical issues');
  process.exit(1);
}