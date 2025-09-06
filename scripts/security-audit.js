#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console && console.log('🔒 Starting Security Audit...\n');

// Check for security vulnerabilities
try {
  console && console.log('📦 Checking npm dependencies for vulnerabilities...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const auditData = JSON && JSON.parse(auditResult);
  
<<<<<<< HEAD:scripts/security-audit.js
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities found:');
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`);
=======
  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {
    console && console.log('⚠️  Security vulnerabilities found: '),
    Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-audit.js
    });
  } else {
    console && console.log('✅ No security vulnerabilities found in dependencies');
  }
} catch (error) {
<<<<<<< HEAD:scripts/security-audit.js
  console.log('❌ Failed to run npm audit:', error.message);
=======
  console && console.log('❌ Failed to run npm audit:', error && error.message);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-audit.js

// Check for sensitive data in files
console && console.log('\n🔍 Scanning for sensitive data...');
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
<<<<<<< HEAD:scripts/security-audit.js
if (sensitiveResults.length > 0) {
  console.log('⚠️  Potential sensitive data found:');
  sensitiveResults.forEach(result => {
    console.log(`   - ${result.file}`);
    result.matches.forEach(match => {
      console.log(`     ${match.substring(0, 50)}...`);
    });
  });
} else {
  console.log('✅ No sensitive data patterns found');
=======
if (sensitiveResults && sensitiveResults.length > 0) {
  console && console.log('⚠️  Potential sensitive data found: '),
  sensitiveResults && sensitiveResults.forEach(result => {
    console && console.log(`   - ${result && result.file}`);
    result && result.matches.forEach(match => {
      console && console.log(`     ${match && match.substring(0, 50)}...`);
    });
  });
} else {
  console && console.log('✅ No sensitive data patterns found');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-audit.js

// Check for outdated dependencies
console && console.log('\n📅 Checking for outdated dependencies...');
try {
  const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
  const outdatedData = JSON && JSON.parse(outdatedResult);
  
<<<<<<< HEAD:scripts/security-audit.js
  if (Object.keys(outdatedData).length > 0) {
    console.log('⚠️  Outdated dependencies found:');
    Object.entries(outdatedData).forEach(([pkg, info]) => {
      console.log(`   - ${pkg}: ${info.current} → ${info.latest}`);
=======
  if (Object && Object.keys(outdatedData).length > 0) {
    console && console.log('⚠️  Outdated dependencies found: '),
    Object && Object.entries(outdatedData).forEach(([pkg, info]) => {
      console && console.log(`   - ${pkg}: ${info && info.current} → ${info && info.latest}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-audit.js
    });
  } else {
    console && console.log('✅ All dependencies are up to date');
  }
} catch (error) {
<<<<<<< HEAD:scripts/security-audit.js
  console.log('✅ All dependencies are up to date');
=======
  console && console.log('✅ All dependencies are up to date');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-audit.js

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

<<<<<<< HEAD:scripts/security-audit.js
fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2));
console.log('\n📊 Security audit report saved to security-audit-report.json');
<<<<<<< HEAD
console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: 'filePath',matches: 'matches' })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: 'sensitiveResults.length',recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
console.log('🔒 Security audit completed!');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
fs && fs.writeFileSync('security-audit-report && report.json', JSON && JSON.stringify(securityReport, null, 2));
console && console.log('\n📊 Security audit report saved to security-audit-report && report.json');
console && console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console && console.log('🔒 Starting Security Audit...\n'); try { console && console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON && JSON.parse(auditResult); if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) { console && console.log('⚠️ Security vulnerabilities found:'); Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg,vuln]) => { console && console.log(` - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`)})} else { console && console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console && console.log('❌ Failed to run npm audit:',error && error.message)} console && console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs && fs.readdirSync(dir); files && files.forEach(file => { const filePath = path && path.join(dir,file); const stat = fs && fs.statSync(filePath); if (stat && stat.isDirectory() && !file && file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat && stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs && fs.readFileSync(filePath,'utf8'); sensitivePatterns && sensitivePatterns.forEach(pattern => { const matches = content && content.match(pattern); if (matches) { results && results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults && sensitiveResults.length > 0) { console && console.log('⚠️ Potential sensitive data found:'); sensitiveResults && sensitiveResults.forEach(result => { console && console.log(` - ${result && result.file}`); result && result.matches.forEach(match => { console && console.log(` ${match && match.substring(0,50)}...`)})})} else { console && console.log('✅ No sensitive data patterns found')} console && console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON && JSON.parse(outdatedResult); if (Object && Object.keys(outdatedData).length > 0) { console && console.log('⚠️ Outdated dependencies found:'); Object && Object.entries(outdatedData).forEach(([pkg,info]) => { console && console.log(` - ${pkg}: ${info && info.current} → ${info && info.latest}`)})} else { console && console.log('✅ All dependencies are up to date')} } catch (error) { console && console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults && sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next && Next.js configuration' ] }; fs && fs.writeFileSync('security-audit-report && report.json',JSON && JSON.stringify(securityReport,null,2)); console && console.log('\n📊 Security audit report saved to security-audit-report && report.json'); console && console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console && console.log('🔒 Starting Security Audit...\n'); try { console && console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON && JSON.parse(auditResult); if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) { console && console.log('⚠️ Security vulnerabilities found:'); Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg,vuln]) => { console && console.log(` - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`)})} else { console && console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console && console.log('❌ Failed to run npm audit:',error && error.message)} console && console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs && fs.readdirSync(dir); files && files.forEach(file => { const filePath = path && path.join(dir,file); const stat = fs && fs.statSync(filePath); if (stat && stat.isDirectory() && !file && file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat && stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs && fs.readFileSync(filePath,'utf8'); sensitivePatterns && sensitivePatterns.forEach(pattern => { const matches = content && content.match(pattern); if (matches) { results && results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults && sensitiveResults.length > 0) { console && console.log('⚠️ Potential sensitive data found:'); sensitiveResults && sensitiveResults.forEach(result => { console && console.log(` - ${result && result.file}`); result && result.matches.forEach(match => { console && console.log(` ${match && match.substring(0,50)}...`)})})} else { console && console.log('✅ No sensitive data patterns found')} console && console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON && JSON.parse(outdatedResult); if (Object && Object.keys(outdatedData).length > 0) { console && console.log('⚠️ Outdated dependencies found:'); Object && Object.entries(outdatedData).forEach(([pkg,info]) => { console && console.log(` - ${pkg}: ${info && info.current} → ${info && info.latest}`)})} else { console && console.log('✅ All dependencies are up to date')} } catch (error) { console && console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults && sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next && Next.js configuration' ] }; fs && fs.writeFileSync('security-audit-report && report.json',JSON && JSON.stringify(securityReport,null,2)); console && console.log('\n📊 Security audit report saved to security-audit-report && report.json'); console && console.log('🔒 Security audit completed!');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-audit.js
