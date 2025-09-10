#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔐 Environment Security Check Starting...\n');

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
  /password\s*=\s*['"][^'"]+['"]/gi,
  /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
  /secret\s*=\s*['"][^'"]+['"]/gi,
  /token\s*=\s*['"][^'"]+['"]/gi,
  /private[_-]?key\s*=\s*['"][^'"]+['"]/gi
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
const files = execSync(`find . -name "${pattern}" -type f`, { encoding: 'utf8' });
        .split('\n')
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
      console.log(`   File: ${secret.file}`);
      secret.matches.forEach(match => {
        console.log(`   Secret: ${match}`);
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
      console.log(`   ${file}`);
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
      console.log(`   ${ignore}`);
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
    console.log('\n🎉 Environment security check passed!');
  } else {
    console.log('\n🚨 Environment security issues found!');
    process.exit(1);
  }
}

runAllChecks();
