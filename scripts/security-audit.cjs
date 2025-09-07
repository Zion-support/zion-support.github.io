const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔒 Security Audit Starting...');

const securityChecks = [;
  {
    name: 'NPM audit check',
    check: () => {
      try {
        console.log('🔍 Running npm audit...');
        execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
        console.log('✅ No security vulnerabilities found');
        return true;
      } catch (error) {
        console.log('⚠️  Security vulnerabilities detected. Run "npm audit fix" to resolve.');
        return false;
      }
    }
  },
  {
    name: 'Environment variables check',
    check: () => {
      const envFiles = ['.env', '.env.local', '.env.production'];
      let hasSecrets = false;
      
      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          const content = fs.readFileSync(envFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach(line => {
            if (line.includes('password') || line.includes('secret') || line.includes('key')) {
              if (!line.includes('example') && !line.includes('placeholder')) {
                console.log(`⚠️  Potential secret in ${envFile}: ${line.split('=')[0]}`);
                hasSecrets = true;
              }
            }
          });
        }
      });
      
      return !hasSecrets;
    }
  },
  {
    name: 'Package.json security check',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Check for unsafe scripts
      const scripts = packageJson.scripts || {};
      const unsafeScripts = Object.keys(scripts).filter(script => 
        scripts[script].includes('rm -rf') || scripts[script].includes('sudo')
      );
      
      if (unsafeScripts.length > 0) {
        console.log(`⚠️  Potentially unsafe scripts: ${unsafeScripts.join(', ')}`);
        return false;
      }
      
      return true;
    }
  },
  {
    name: 'File permissions check',
    check: () => {
      const sensitiveFiles = ['package.json', 'package-lock.json', '.env'];
      let hasIssues = false;
      
      sensitiveFiles.forEach(file => {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          const mode = stats.mode & parseInt('777', 8);
          
          if (mode > parseInt('644', 8)) {
            console.log(`⚠️  ${file} has overly permissive permissions: ${mode.toString(8)}`);
            hasIssues = true;
          }
        }
      });
      
      return !hasIssues;
    }
  }
];

let passed = 0;
let failed = 0;

securityChecks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n🔒 Security Audit Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All security checks passed!');
} else {
  console.log('⚠️  Security issues detected. Please review and fix.');
}