const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const SECURITY_LOG_PATH = path.join(process.cwd(), 'security-report.json');

async function runSecurityScan() {
  console.log('🔒 Running security scan...');
  
  try {
    // Run npm audit
    const auditResult = await new Promise((resolve, reject) => {
      exec('npm audit --json', (error, stdout, stderr) => {
        if (error && error.code !== 1) { // npm audit exits with code 1 for vulnerabilities
          return reject(error);
        }
        resolve({ stdout, stderr });
      });
    });

    let auditData = {};
    try {
      auditData = JSON.parse(auditResult.stdout);
    } catch (e) {
      console.log('⚠️  Could not parse audit results');
    }

    // Check for common security issues in code
    const securityChecks = {
      hardcodedSecrets: await checkForHardcodedSecrets(),
      unsafeEval: await checkForUnsafeEval(),
      consoleLogs: await checkForConsoleLogs(),
      weakCrypto: await checkForWeakCrypto()
    };

    const securityReport = {
      timestamp: new Date().toISOString(),
      npmAudit: {
        vulnerabilities: auditData.metadata?.vulnerabilities || {},
        summary: auditData.metadata?.summary || {}
      },
      codeSecurity: securityChecks,
      recommendations: []
    };

    // Generate recommendations
    if (auditData.metadata?.vulnerabilities?.high > 0) {
      securityReport.recommendations.push('Fix high-severity vulnerabilities found in dependencies');
    }
    
    if (securityChecks.hardcodedSecrets.length > 0) {
      securityReport.recommendations.push('Remove hardcoded secrets from code');
    }
    
    if (securityChecks.unsafeEval.length > 0) {
      securityReport.recommendations.push('Replace unsafe eval() usage with safer alternatives');
    }

    fs.mkdirSync(path.dirname(SECURITY_LOG_PATH), { recursive: true });
    fs.writeFileSync(SECURITY_LOG_PATH, JSON.stringify(securityReport, null, 2));
    
    console.log('✅ Security scan completed');
    console.log(`🔍 Vulnerabilities found: ${auditData.metadata?.vulnerabilities?.total || 0}`);
    console.log(`🔐 Code security issues: ${Object.values(securityChecks).flat().length}`);
    
    if (securityReport.recommendations.length > 0) {
      console.log('💡 Security recommendations:');
      securityReport.recommendations.forEach(rec => console.log(`   - ${rec}`));
    }

  } catch (error) {
    console.error('❌ Security scan failed:', error);
  }
}

async function checkForHardcodedSecrets() {
  return new Promise((resolve) => {
    exec('grep -r "password\\|secret\\|key\\|token" pages/ components/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | grep -v "//" | head -10', (error, stdout) => {
      if (error) {
        resolve([]);
      } else {
        resolve(stdout.trim().split('\n').filter(line => line.trim()));
      }
    });
  });
}

async function checkForUnsafeEval() {
  return new Promise((resolve) => {
    exec('grep -r "eval(" pages/ components/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"', (error, stdout) => {
      if (error) {
        resolve([]);
      } else {
        resolve(stdout.trim().split('\n').filter(line => line.trim()));
      }
    });
  });
}

async function checkForConsoleLogs() {
  return new Promise((resolve) => {
    exec('grep -r "console\\.log" pages/ components/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | wc -l', (error, stdout) => {
      if (error) {
        resolve(0);
      } else {
        resolve(parseInt(stdout.trim()) || 0);
      }
    });
  });
}

async function checkForWeakCrypto() {
  return new Promise((resolve) => {
    exec('grep -r "Math\\.random\\|crypto\\.randomBytes" pages/ components/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"', (error, stdout) => {
      if (error) {
        resolve([]);
      } else {
        resolve(stdout.trim().split('\n').filter(line => line.trim()));
      }
    });
  });
}

// Run security scan every hour
setInterval(runSecurityScan, 60 * 60 * 1000);
runSecurityScan(); // Run immediately on startup

console.log('🛡️  Security scanner started');