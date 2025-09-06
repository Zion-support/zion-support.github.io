#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

    });
  } else {
    console && console.log(' No security vulnerabilities found in dependencies');
  }
} catch (error) {

// Check for sensitive data in files
console && console.log('\n Scanning for sensitive data...');
const sensitivePatterns = [
  /password\s*=\s*["'][^"']+["']/gi,
  /api[_-]?key\s*=\s*["'][^"']+["']/gi,
  /secret\s*=\s*["'][^"']+["']/gi,
  /token\s*=\s*["'][^"']+["']/gi,
  /private[_-]?key\s*=\s*["'][^"']+["']/gi
];

const scanDirectory = (dir, results = []) => {
  const files = fs && fs.readdirSync(dir);
  files && files.forEach(file => {
    const filePath = path && path.join(dir, file);
    const stat = fs && fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file && file.startsWith('.') && file !== 'node_modules') {
      scanDirectory(filePath, results);
    } else if (stat && stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) {
      try {
        const content = fs && fs.readFileSync(filePath, 'utf8');
        sensitivePatterns && sensitivePatterns.forEach(pattern => {
          const matches = content && content.match(pattern);
          if (matches) {
            results && results.push({
              file: filePath,
              matches: matches
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    }
  });
  return results;
};

const sensitiveResults = scanDirectory('.');

// Check for outdated dependencies
console && console.log('\n Checking for outdated dependencies...');
try {
  const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
  const outdatedData = JSON && JSON.parse(outdatedResult);
  
    });
  } else {
    console && console.log(' All dependencies are up to date');
  }
} catch (error) {

// Generate security report
const securityReport = {
  timestamp: new Date().toISOString(),
  vulnerabilities: sensitiveResults && sensitiveResults.length,
  recommendations: [
    'Run "npm audit fix" to resolve dependency vulnerabilities',
    'Review and remove any hardcoded secrets',
    'Update outdated dependencies',
    'Implement proper environment variable management',
    'Add security headers to Next && Next.js configuration'
  ]
};

