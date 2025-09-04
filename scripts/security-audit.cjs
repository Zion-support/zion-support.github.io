#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔒 Security Audit - Zion Tech Group');
console.log('===================================');

const securityChecks = {
  packageAudit: () => {
    console.log('📦 Checking package vulnerabilities...');
    try {
      const { execSync } = require('child_process');
      const output = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(output);
      
      if (audit.vulnerabilities) {
        const vulnCount = Object.keys(audit.vulnerabilities).length;
        if (vulnCount > 0) {
          console.log(`⚠️  Found ${vulnCount} vulnerabilities:`);
          Object.entries(audit.vulnerabilities).forEach(([pkg, vuln]) => {
            console.log(`   - ${pkg}: ${vuln.severity} (${vuln.via})`);
          });
          return false;
        } else {
          console.log('✅ No vulnerabilities found in packages.');
          return true;
        }
      } else {
        console.log('✅ No vulnerabilities found in packages.');
        return true;
      }
    } catch (error) {
      console.log(`❌ Package audit failed: ${error.message}`);
      return false;
    }
  },
  
  environmentVariables: () => {
    console.log('🔐 Checking environment variables...');
    try {
      const envFiles = ['.env', '.env.local', '.env.production'];
      let hasEnvFile = false;
      
      envFiles.forEach(envFile => {
        const envPath = path.join(process.cwd(), envFile);
        if (fs.existsSync(envPath)) {
          hasEnvFile = true;
          const content = fs.readFileSync(envPath, 'utf8');
          const lines = content.split('\n');
          
          let hasSecrets = false;
          lines.forEach(line => {
            if (line.includes('SECRET') || line.includes('KEY') || line.includes('PASSWORD')) {
              if (!line.includes('=') || line.split('=')[1].trim() === '') {
                console.log(`⚠️  Empty or missing value for: ${line.split('=')[0]}`);
                hasSecrets = true;
              }
            }
          });
          
          if (!hasSecrets) {
            console.log(`✅ Environment file ${envFile} looks secure.`);
          }
        }
      });
      
      if (!hasEnvFile) {
        console.log('⚠️  No environment files found. Consider adding .env for configuration.');
      }
      
      return true;
    } catch (error) {
      console.log(`❌ Environment variables check failed: ${error.message}`);
      return false;
    }
  },
  
  filePermissions: () => {
    console.log('📁 Checking file permissions...');
    try {
      const sensitiveFiles = [
        'package.json',
        'package-lock.json',
        '.env',
        '.env.local',
        '.env.production'
      ];
      
      let hasIssues = false;
      
      sensitiveFiles.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const mode = stats.mode.toString(8);
          
          // Check if file is world-readable (last digit should be 4 or less)
          if (parseInt(mode.slice(-1)) > 4) {
            console.log(`⚠️  ${file} has overly permissive permissions: ${mode}`);
            hasIssues = true;
          } else {
            console.log(`✅ ${file} has secure permissions: ${mode}`);
          }
        }
      });
      
      return !hasIssues;
    } catch (error) {
      console.log(`❌ File permissions check failed: ${error.message}`);
      return false;
    }
  },
  
  codeSecurity: () => {
    console.log('🔍 Checking code for security issues...');
    try {
      const pagesDir = path.join(process.cwd(), 'pages');
      const componentsDir = path.join(process.cwd(), 'components');
      
      let securityIssues = [];
      
      const checkFile = (filePath) => {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for dangerous patterns
          if (line.includes('eval(') || line.includes('Function(')) {
            securityIssues.push(`${filePath}:${index + 1} - Dangerous code execution detected`);
          }
          
          if (line.includes('innerHTML') && !line.includes('dangerouslySetInnerHTML')) {
            securityIssues.push(`${filePath}:${index + 1} - Potential XSS vulnerability`);
          }
          
          if (line.includes('process.env.') && line.includes('console.log')) {
            securityIssues.push(`${filePath}:${index + 1} - Potential environment variable exposure`);
          }
        });
      };
      
      const checkDirectory = (dir) => {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          if (fs.statSync(filePath).isDirectory()) {
            checkDirectory(filePath);
          } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
            checkFile(filePath);
          }
        });
      };
      
      checkDirectory(pagesDir);
      checkDirectory(componentsDir);
      
      if (securityIssues.length > 0) {
        console.log(`⚠️  Found ${securityIssues.length} potential security issues:`);
        securityIssues.forEach(issue => {
          console.log(`   - ${issue}`);
        });
        return false;
      } else {
        console.log('✅ No obvious security issues found in code.');
        return true;
      }
    } catch (error) {
      console.log(`❌ Code security check failed: ${error.message}`);
      return false;
    }
  }
};

const results = {};
let overallScore = 0;
const totalChecks = Object.keys(securityChecks).length;

console.log('\n🛡️  Starting Security Audit...\n');

for (const [checkName, checkFunction] of Object.entries(securityChecks)) {
  try {
    const result = checkFunction();
    results[checkName] = result;
    if (result) overallScore++;
    console.log('');
  } catch (error) {
    results[checkName] = false;
    console.log(`❌ ${checkName} failed: ${error.message}\n`);
  }
}

const score = Math.round((overallScore / totalChecks) * 100);

console.log('📊 Security Audit Results');
console.log('========================');
console.log(`Security Score: ${score}% (${overallScore}/${totalChecks} checks passed)`);

if (score >= 80) {
  console.log('🛡️  Excellent security posture! Your app is well protected.');
} else if (score >= 60) {
  console.log('⚠️  Good security with room for improvement.');
} else {
  console.log('🚨 Security needs immediate attention!');
}

// Generate security report
const report = {
  timestamp: new Date().toISOString(),
  score,
  results,
  recommendations: []
};

if (score < 80) {
  report.recommendations.push('Run npm audit fix to resolve package vulnerabilities');
  report.recommendations.push('Review and secure environment variables');
  report.recommendations.push('Implement Content Security Policy (CSP) headers');
  report.recommendations.push('Add input validation and sanitization');
  report.recommendations.push('Implement rate limiting for API endpoints');
  report.recommendations.push('Use HTTPS in production');
}

// Save report
const reportPath = path.join(process.cwd(), 'security-audit-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log(`\n📄 Security audit report saved to: ${reportPath}`);

if (report.recommendations.length > 0) {
  console.log('\n💡 Security Recommendations:');
  report.recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
}

console.log('\n🎯 Security audit completed!');