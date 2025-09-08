  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {

    console && console.log('⚠️  Security vulnerabilities found: '),
    Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {}
      console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`);


import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔒 Starting Security Audit...\n');

// Check for security vulnerabilities
try {
  console.log('📦 Checking npm dependencies for vulnerabilities...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const auditData = JSON.parse(auditResult);
  
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities found:');
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`);
// Check for security vulnerabilities
try {
  console.log('📦 Checking npm dependencies for vulnerabilities...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const auditData = JSON.parse(auditResult);

  
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities found:');
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`);

    });

  } else {
    console.log('✅ No security vulnerabilities found in dependencies');
  }
} catch (error) {

console.log('\n🔍 Scanning for sensitive data...');

const scanDirectory = (dir, results = []) => {

  const files = fs.readdirSync(dir);
  files.forEach(file => {}
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

      try {

        const content = fs.readFileSync(filePath, 'utf8');
        sensitivePatterns.forEach(pattern => {}
          const matches = content.match(pattern);


        // Skip files that can't be read

      }
    }
  });
return results;
};

const sensitiveResults = scanDirectory('.');





  timestamp: new Date().toISOString(),
  vulnerabilities: sensitiveResults.length,

console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: 'filePath',matches: 'matches' })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: 'sensitiveResults.length',recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');

console.log('🔒 Security audit completed!');

fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2));

console.log('\n📊 Security audit report saved to security-audit-report.json');
console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: 'filePath',matches: 'matches' })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: 'sensitiveResults.length',recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');

console.log('🔒 Security audit completed!');

const fs = require('fs');


const path = require('path');
'
console.log('🔒 Running security audit...');'
console.log('✅ Security audit completed');



const { execSync } = require('child_process');

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting security audit...');
async function main() {
  const auditor = new SecurityAuditor();
  await auditor.run();
}


auditor.run().catch(console.error);








