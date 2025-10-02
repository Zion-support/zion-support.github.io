#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔒 Starting Security Enhancement...');

// Check for security headers
function checkSecurityHeaders() {
  console.log('🛡️  Checking security headers...');
  
  const htmlPath = path.join(process.cwd(), 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    
    const securityHeaders = [
      'X-Content-Type-Options',
      'X-Frame-Options',
      'X-XSS-Protection',
      'Referrer-Policy'
    ];
    
    const found = securityHeaders.filter(header => html.includes(header));
    
    if (found.length === securityHeaders.length) {
      console.log('✅ All security headers present');
    } else {
      console.log(`⚠️  Missing security headers: ${securityHeaders.filter(h => !found.includes(h)).join(', ')}`);
    }
  }
}

// Check for CSP (Content Security Policy)
function checkCSP() {
  console.log('🔐 Checking Content Security Policy...');
  
  const htmlPath = path.join(process.cwd(), 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    
    if (html.includes('Content-Security-Policy')) {
      console.log('✅ CSP header found');
    } else {
      console.log('⚠️  No CSP header found - consider adding for enhanced security');
    }
  }
}

// Check for external dependencies
function checkExternalDependencies() {
  console.log('📦 Checking external dependencies...');
  
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`📊 Dependencies: ${dependencies.length} production, ${devDependencies.length} dev`);
    
    // Check for known vulnerable packages (simplified check)
    const knownVulnerable = ['lodash@4.17.0', 'jquery@3.6.0'];
    const vulnerable = [...dependencies, ...devDependencies].filter(dep => 
      knownVulnerable.some(vuln => dep.includes(vuln.split('@')[0]))
    );
    
    if (vulnerable.length > 0) {
      console.log(`⚠️  Potentially vulnerable packages: ${vulnerable.join(', ')}`);
    } else {
      console.log('✅ No known vulnerable packages detected');
    }
  }
}

// Check for HTTPS usage
function checkHTTPSUsage() {
  console.log('🔐 Checking HTTPS usage...');
  
  const srcPath = path.join(process.cwd(), 'src');
  let httpLinks = 0;
  let httpsLinks = 0;
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        const httpMatches = content.match(/http:\/\//g);
        const httpsMatches = content.match(/https:\/\//g);
        
        if (httpMatches) httpLinks += httpMatches.length;
        if (httpsMatches) httpsLinks += httpsMatches.length;
      }
    });
  }
  
  if (fs.existsSync(srcPath)) {
    checkDirectory(srcPath);
  }
  
  console.log(`🌐 Protocol usage: HTTP(${httpLinks}) HTTPS(${httpsLinks})`);
  
  if (httpLinks > 0) {
    console.log('⚠️  HTTP links found - consider using HTTPS for better security');
  } else {
    console.log('✅ All external links use HTTPS');
  }
}

// Check for sensitive data exposure
function checkSensitiveData() {
  console.log('🔍 Checking for sensitive data exposure...');
  
  const srcPath = path.join(process.cwd(), 'src');
  let potentialIssues = [];
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for potential API keys, passwords, etc.
        const sensitivePatterns = [
          /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi,
          /password\s*[:=]\s*["'][^"']+["']/gi,
          /secret\s*[:=]\s*["'][^"']+["']/gi,
          /token\s*[:=]\s*["'][^"']+["']/gi
        ];
        
        sensitivePatterns.forEach(pattern => {
          if (pattern.test(content)) {
            potentialIssues.push(`Potential sensitive data in ${filePath}`);
          }
        });
      }
    });
  }
  
  if (fs.existsSync(srcPath)) {
    checkDirectory(srcPath);
  }
  
  if (potentialIssues.length === 0) {
    console.log('✅ No obvious sensitive data exposure detected');
  } else {
    console.log(`⚠️  Potential issues found: ${potentialIssues.length}`);
    potentialIssues.forEach(issue => console.log(`   - ${issue}`));
  }
}

// Check for console.log statements in production code
function checkConsoleLogs() {
  console.log('📝 Checking for console.log statements...');
  
  const srcPath = path.join(process.cwd(), 'src');
  let consoleLogs = 0;
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        const matches = content.match(/console\.(log|warn|error|info)/g);
        if (matches) {
          consoleLogs += matches.length;
        }
      }
    });
  }
  
  if (fs.existsSync(srcPath)) {
    checkDirectory(srcPath);
  }
  
  if (consoleLogs === 0) {
    console.log('✅ No console.log statements found');
  } else {
    console.log(`⚠️  ${consoleLogs} console.log statements found - consider removing for production`);
  }
}

// Main execution
async function enhance() {
  checkSecurityHeaders();
  checkCSP();
  checkExternalDependencies();
  checkHTTPSUsage();
  checkSensitiveData();
  checkConsoleLogs();
  
  console.log('\n✅ Security enhancement check completed!');
  console.log('\n🔒 Security Recommendations:');
  console.log('   - Implement Content Security Policy (CSP)');
  console.log('   - Use HTTPS for all external resources');
  console.log('   - Regularly update dependencies');
  console.log('   - Remove console.log statements from production');
  console.log('   - Implement proper authentication and authorization');
  console.log('   - Use environment variables for sensitive data');
}

enhance().catch(console.error);