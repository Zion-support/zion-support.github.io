<<<<<<< HEAD
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process';  try {  const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {  Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => {})} else {} } catch (error) {}
;
  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))#!/usr/bin/env node;'
import fs from 'fs';'
import path from 'path';'
import { execSync  } from 'child_process';'
console.log('🔒 Starting Security Audit...\n')// Check for security vulnerabilities;'
try {console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json', { 'encoding': 'utf8' };'
  const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {console.log('⚠️  Security vulnerabilities 'found': ')Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else {console.log('✅ No security vulnerabilities found in dependencies')}'} catch (error) {console.log('❌ Failed to run npm 'audit': ', error.message)}'
// Check for sensitive data in files;
console.log('\n🔍 Scanning for sensitive data...')const sensitivePatterns = [/password\s*=\s*[''][^'']+['']/gi,#!/usr/bin/env node;'
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process';  try {  const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {  Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => {})} else {} } catch (error) {}
;
  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process';  try {  const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {  Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => {})} else {} } catch (error) {}
;
  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))#!/usr/bin/env node;'
  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {console && console.log('⚠️  Security vulnerabilities 'found': '),Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`)console.log('🔒 Starting Security Audit...\n')// Check for security vulnerabilities;'try {console.log('📦 Checking npm dependencies for vulnerabilities...')const auditData  = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {console.log('⚠️  Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else {console.log('✅ No security vulnerabilities found in dependencies')}'} catch (error) {console.log('❌ Failed to run npm 'audit':', error.message)// Check for sensitive data in files;'
}
console.log('\n🔍 Scanning for sensitive data...')const scanDirectory = (dir, results = []) => {const files = fs.readdirSync(dir)files.forEach((file) => {const filePath = path.join(dir, file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {scanDirectory(filePath, results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) {if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {scanDirectory(filePath, results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) {try {const content = fs.readFileSync(filePath, 'utf8')sensitivePatterns.forEach(pattern => { return  ; }'
  }
  const matches = content.match(pattern)if (matches) {results.push({'file': filePath,'matches': matches;'
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process';  try {  const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {  Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => {})} else {} } catch (error) {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

<<<<<<< HEAD
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
=======
const scanDirectory = (dir,results = []) => {;
  }
  const files = fs.readdirSync(dir); files.forEach(file = > {;
  }
  const filePath = path.join(dir,file);

const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern = > {;'
  }
  const matches = content.match(pattern); if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} }
}); return results};

const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) {  sensitiveResults.forEach(result = > {  result.matches.forEach((match) => {}...`)})})} else {}  try {;`}
const outdatedResult = execSync('npm outdated --json',{ 'encoding': 'utf8',;'
});

const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) {  Object.entries(outdatedData).forEach(([pkg,info]) => {})} else {} } catch (error) {}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2));  '
#!/usr/bin/env node,
import { execSync } from 'child_process';'
console.log('🔒 Starting Security Audit...\n');'
// Check for security vulnerabilities,
try {
  }
  console.log('📦 Checking npm dependencies for vulnerabilities...');'

const auditResult = execSync('npm audit --audit-level=moderate --json', { 'encoding': 'utf8' });'

const auditData = JSON.parse(auditResult);
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    }
    console.log('⚠️  Security vulnerabilities 'found': ');'
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      }
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else {`    }
    console.log('✅ No security vulnerabilities found in dependencies')}'
} catch (error) {
  }
  console.log('❌ Failed to run npm 'audit': ', error.message)}'
// Check for sensitive data in files,
console.log('\n🔍 Scanning for sensitive data...');'

const sensitivePatterns = [/password\s*=\s*[''][^'']+['']/gi,;'

  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {
    }
    console && console.log('⚠️  Security vulnerabilities 'found': '),'
    Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      }
      console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`);`
    });
  } else {
    }
    console.log('✅ No security vulnerabilities found in dependencies');'
  }
} catch (error) {

  }

  console && console.log('❌ Failed to run npm 'audit':', error && error.message);'
}


// Check for sensitive data in files,
console.log('\n🔍 Scanning for sensitive data...');'

const sensitivePatterns = [;
  /password\s*=\s*[''][^'']+['']/gi,'
  /api[_-]?key\s*=\s*[''][^'']+['']/gi,'
  /secret\s*=\s*[''][^'']+['']/gi,'
  /token\s*=\s*[''][^'']+['']/gi,'
  /private[_-]?key\s*=\s*[''][^'']+['']/gi'
];
const scanDirectory = (dir, results = []) => {
 ;
  }
  const files = fs.readdirSync(dir);
  files.forEach(file = > {
   ;
  }
  const filePath = path.join(dir, file);

const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {'
      }
      scanDirectory(filePath, results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) {
      }
      try {
        }
        const content = fs.readFileSync(filePath, 'utf8');'
        sensitivePatterns.forEach(pattern = > {
         ;
  }
  const matches = content.match(pattern);
          if (matches) {
            }
            results.push({
              'file': filePath,'
              'matches': matches'
            })}
        })} catch (error) {'file': filePath,'matches': matches;
            })}
        })} catch (error) {// Skip files that can't be read;'
      }
    }
  })return results}

const sensitiveResults = scanDirectory('.')if (sensitiveResults.length > 0) {console.log('⚠️  Potential sensitive data 'found': ')sensitiveResults.forEach((result) => {console.log(`   - ${result.file}`)result.matches.forEach((match) => {console.log(`     ${match.substring(0, 50)}...`)})})} else {console.log('✅ No sensitive data patterns found')}'// Check for outdated dependencies;
console.log('\n📅 Checking for outdated dependencies...')try {const outdatedResult = execSync('npm outdated --json', { 'encoding': 'utf8' };'
  const outdatedData = JSON.parse(outdatedResult)if (Object.keys(outdatedData).length > 0) {console.log('⚠️  Outdated dependencies 'found': ')Object.entries(outdatedData).forEach(([pkg, info]) => {console.log(`   - ${pkg}: ${info.current} → ${info.latest}`)})} else {console.log('✅ All dependencies are up to date')}'} catch (error) {console.log('✅ All dependencies are up to date')}'
// Generate security report;

const securityReport = {'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': ['Run 'npm audit fix' to resolve dependency vulnerabilities';'
  }
  return results;
}

const sensitiveResults  = scanDirectory('.')if (sensitiveResults.length > 0) {console.log('⚠️  Potential sensitive data 'found': ')sensitiveResults.forEach((result) => {console.log(`   - ${result.fil,`}`)result.matches.forEach((match) => {console.log(`     ${match.substring(0, 50)}...`)})})} else {console.log('✅ No sensitive data patterns found')// Check for outdated dependencies;'}
console.log('\n📅 Checking for outdated dependencies...')try {const outdatedData  = JSON.parse(outdatedResult)if (Object.keys(outdatedData).length > 0) {console.log('⚠️  Outdated dependencies 'found':')Object.entries(outdatedData).forEach(([pkg, info]) => {console.log(`   - ${pkg}: ${info.current} → ${info.latest}`)})} else {console.log('✅ All dependencies are up to date')}'} catch (error) {console.log('✅ All dependencies are up to date')// Generate security report;'

}

const securityReport = {'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [;
    'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration''
];

}console.log('🔒 Security audit completed!')ursor/automate-test-improve-and-merge-code-646c;'
fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n')try { console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...';'  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': 'filePath','matches': 'matches' })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': 'sensitiveResults.length','recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n')try { console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...';'  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')ursor/automate-test-improve-and-merge-code-646c;'
console.log('🔒 Security audit completed!')fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n')try { console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...';'  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': 'filePath','matches': 'matches' })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': 'sensitiveResults.length','recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n')try { console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...';'  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')console.log('🔒 Security audit completed!')#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n')try { console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...';'  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n')try { console.log('📦 Checking npm dependencies for vulnerabilities...')const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8','
})const auditData = JSON.parse(auditResult)if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':')Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...';'  const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir)files.forEach((file) => { const filePath = path.join(dir,file)const stat = fs.statSync(filePath)if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8')sensitivePatterns.forEach((pattern) => { const matches = content.match(pattern)if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} },'
};
  return result;
}

const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2))console.log('\n📊 Security audit report saved to security-audit-report.json')console.log('🔒 Security audit completed!')ursor/add-new-services-and-deploy-updates-0462;'
ursor/fix-syntax-push-and-merge-to-main-40de;
console.log('🔒 Security audit completed!')origin/cursor/integrate-build-improve-and-re-verify-c7b5;'

const fs = require('fs')const path  = require('path')console.log('🔒 Running security audit...')console.log('✅ Security audit completed')const { execSync } = require('child_process')const fs = require('fs')const path = require('path')function log() {const ts = new Date().toISOString()}'
function tryExec() {try {execSync(cmd, { 'stdio': 'inherit' })return { 'ok': true } catch (e) ;'
  return { 'ok': false, 'error': e }'
}
function main() {log('🔒 Starting security audit...')// npm audit (best-effort)log('Running npm audit (moderate)...';'
  }
  const audit = tryExec('npm audit --audit-level=moderate')if (!audit.ok) {log('Vulnerabilities found, attempting npm audit fix', 'WARN')tryExec('npm audit fix')}'
  // scan for sensitive files;

const sensitive  = ['.env', '.env.local', '.env.production', 'config.json', 'secrets.json'];'

const found = sensitive.filter(f => fs.existsSync(path.join(process.cwd(), f)))if (found.length > 0) {log(`Sensitive files 'present': ${found.join(', ')}`, 'WARN')} else {log('No sensitive files found in repo root')}'  log('✅ Security audit completed')}'
main()#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require('child_process')'const fs = require('fs')'const path = require('path')'function log() { const ts = new Date().toISOString()console.log(`[${ts}] [${level}] ${msg}`)}function tryExec() { try {' execSync(cmd, { 'stdio': 'inherit' })' return { 'ok': true ,'} catch (e) {';'
}
return { 'ok': false, 'error': e },;
}function main() {' log(' Starting security audit.')/ npm audit (best-effort)' log('Running npm audit (moderate).')' const audit = tryExec('npm audit --audit-level=moderate')if (!audit.ok) {' log('Vulnerabilities found, attempting npm audit fix', 'WARN')' tryExec('npm audit fix')} / scan for sensitive files';'
  const sensitive = ['.env', '.env.local', '.env.production', 'config.json', 'secrets.json'];'

const found = sensitive.filter(f => fs.existsSync(path.join(process.cwd(), f)))if (found.length > 0) {'` log(`Sensitive files 'present': ${found.join(', ')}`, 'WARN')} else {' log('No sensitive files found in repo root')}' log(' Security audit completed')}main()'`'`;`#!/usr/bin/env node;

const { execSync } = require('child_process')const fs = require('fs';'
  const path = require('path')function log(msg, level = 'INFO')execSync(cmd, { 'stdio': 'inherit'})return { 'ok'}'
   ;
  return { 'ok': false, 'error'}'
  log('� Starting security audit...')log('Running npm audit (moderate)...';'

const audit = tryExec('npm audit --audit-level=moderate')log('Vulnerabilities found, attempting npm audit fix', 'WARN')tryExec('npm audit fix';'
  const sensitive = ['.env', '.env.local', '.env.production', 'config.json', 'secrets.json'];'
    log(`Sensitive files 'present': ${found.join(', ')}`, 'WARN';'    log('No sensitive files found in repo root')log(' Security audit completed')const { execSync } = require('child_process')const fs = require('fs')const path  = require('path')console.log('🔒 Starting Security Audit...')class SecurityAuditor {constructor() {this.reportFile = path.join(__dirname, '..', 'security-audit-report.json')this.results = {'timestamp': new Date().toISOString(),'npmAudit': null,'dependencyCheck': null,'filePermissions': null,'environmentVariables': null,'overall': { 'status': 'unknown', 'score': 0 }'
    
}async runCommand(command, description) {try {console.log(`🔍 ${description}...`)const result = execSync(command, {'encoding': 'utf8','stdio': 'pipe','cwd': path.join(__dirname, '..')})console.log(`✅ ${description} - Success`)return { 'success': true, result } catch (error) {console.log(`❌ ${description} - 'Failed': ${error.messag,`}`;`  return { 'success': false, 'error': error.message }
 
}async runNpmAudit() ;
  const result = await this.runCommand('npm audit --json', 'NPM Security Audit')this.results.npmAudit = result;'
  }async checkDependencies() {const result = await this.runCommand('npm ls --depth=0', 'Dependency Check')this.results.dependencyCheck = result;'
  }async checkFilePermissions() {try {const criticalFiles = [
  'package.json','next.config.js','middleware.ts','.env.local','.env.production''
];
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
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



=======

const permissions = {}for (const file of criticalFiles) {try ;
  }
  const stats = fs.statSync(file)permissions[file] = {'exists': true,'mode': stats.mode.toString(8),'readable': true,'writable': true;
          } catch (error) {permissions[file] = {'exists': false,'error': error.message;
          }
      }this.results.filePermissions = { 'success': true, permissions }console.log('✅ File Permissions Check - Success')} catch (error) {this.results.filePermissions = { 'success': false, 'error': error.message }console.log(`❌ File Permissions Check - 'Failed': ${error.message}`)}` 
}async checkEnvironmentVariables() ;
  const envVars = {'NODE_ENV': process.env.NODE_ENV,'NEXT_PUBLIC_API_URL': process.env.NEXT_PUBLIC_API_URL,'SUPABASE_URL': process.env.SUPABASE_URL,'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY ? '***HIDDEN***' : undefined;'
    }this.results.environmentVariables = {'success': true,'variables': envVars,'count': Object.keys(envVars).length;
    }console.log('✅ Environment Variables Check - Success')}calculateOverallScore() {let totalScore = 0;'
    }
    let maxScore  = 0;// NPM Audit (40% weight)if (this.results.npmAudit?.success) {totalScore += 100 * 0.4;
  });
  return results};

const sensitiveResults = scanDirectory('.');'
if (sensitiveResults.length > 0) {
  }
  console.log('⚠️  Potential sensitive data 'found': ');'
  sensitiveResults.forEach((result) => {
    }
    console.log(`   - ${result.file}`);`    result.matches.forEach((match) => {
      }
      console.log(`     ${match.substring(0, 50)}...`)})})} else {`  }
  console.log('✅ No sensitive data patterns found')}'
// Check for outdated dependencies,
console.log('\n📅 Checking for outdated dependencies...');'
try {
  }
  const outdatedResult = execSync('npm outdated --json', { 'encoding': 'utf8' });'

const outdatedData = JSON.parse(outdatedResult);
  if (Object.keys(outdatedData).length > 0) {
    }
    console.log('⚠️  Outdated dependencies 'found': ');'
    Object.entries(outdatedData).forEach(([pkg, info]) => {
      }
      console.log(`   - ${pkg}: ${info.current} → ${info.latest}`)})} else {`    }
    console.log('✅ All dependencies are up to date')}'
} catch (error) {
  }
  console.log('✅ All dependencies are up to date')}'
// Generate security report,
const securityReport = {
  'timestamp': new Date().toISOString(),'
  'vulnerabilities': sensitiveResults.length,'
  'recommendations': ['Run 'npm audit fix' to resolve dependency vulnerabilities','

}

if (sensitiveResults && sensitiveResults.length > 0) {
  }
  console && console.log('⚠️  Potential sensitive data 'found': '),'
  sensitiveResults && sensitiveResults.forEach((result) => {
    }
    console && console.log(`   - ${result && result.file}`);`    result && result.matches.forEach((match) => {
      }
      console && console.log(`     ${match && match.substring(0, 50)}...`);`    });
  });
} else {
  }
  console && console.log('✅ No sensitive data patterns found');'
}


// Check for outdated dependencies,
console.log('\n📅 Checking for outdated dependencies...');'
try {
}
const outdatedResult = execSync('npm outdated --json', { 'encoding': 'utf8',;'
});

const outdatedData = JSON.parse(outdatedResult);
  

  if (Object && Object.keys(outdatedData).length > 0) {
    }
    console && console.log('⚠️  Outdated dependencies 'found': '),'
    Object && Object.entries(outdatedData).forEach(([pkg, info]) => {
      }
      console && console.log(`   - ${pkg}: ${info && info.current} → ${info && info.latest}`);`
>>>>>>> origin/cursor/delete-old-data-records-6bba
    });
  } else {
    }
    console.log('✅ All dependencies are up to date');'
  }
} catch (error) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }

  console && console.log('✅ All dependencies are up to date');'
}


<<<<<<< HEAD

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

=======
// Generate security report,
const securityReport = {
  }
  'timestamp': new Date().toISOString(),
  'vulnerabilities': sensitiveResults.length,
  'recommendations': [
    'Run 'npm audit fix' to resolve dependency vulnerabilities','
    'Review and remove any hardcoded secrets','
    'Update outdated dependencies','
    'Implement proper environment variable management','
    'Add security headers to Next.js configuration''
  ]
};


console.log('🔒 Security audit completed!');'


fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2));'
console.log('\n📊 Security audit report saved to security-audit-report.json');'
console.log('🔒 Security audit completed!');'
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...');'

}

const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8',;'
});
>>>>>>> origin/cursor/delete-old-data-records-6bba

const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...');'
const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

<<<<<<< HEAD
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
=======
const scanDirectory = (dir,results = []) => {;
  }
  const files = fs.readdirSync(dir); files.forEach(file = > {;
  }
  const filePath = path.join(dir,file);

const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern = > {;'
  }
  const matches = content.match(pattern); if (matches) { results.push({ 'file': 'filePath','matches': 'matches' })} })} catch (error) {} },'
}); return results};

const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data 'found':'); sensitiveResults.forEach((result) => { console.log(` - ${result.file}`); result.matches.forEach((match) => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies 'found':'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')}'
const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': 'sensitiveResults.length','recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');'
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...');'

}

const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8',;'
});

const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...');'
const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => {;
  }
  const files = fs.readdirSync(dir); files.forEach(file = > {;
  }
  const filePath = path.join(dir,file);

const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern = > {;'
  }
  const matches = content.match(pattern); if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} }
}); return results};

const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data 'found':'); sensitiveResults.forEach((result) => { console.log(` - ${result.file}`); result.matches.forEach((match) => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies 'found':'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')}'
const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');'


console.log('🔒 Security audit completed!');'
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...');'

}
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8',;'
});

const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...');'
const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => {;
  }
  const files = fs.readdirSync(dir); files.forEach(file = > {;
  }
  const filePath = path.join(dir,file);

const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern = > {;'
  }
  const matches = content.match(pattern); if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} }
}); return results};

const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data 'found':'); sensitiveResults.forEach((result) => { console.log(` - ${result.file}`); result.matches.forEach((match) => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies 'found':'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')}'
const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');'
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...');'

}

const auditResult = execSync('npm audit --audit-level=moderate --json',{ 'encoding': 'utf8',;'
});

const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities 'found':'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm 'audit':',error.message)} console.log('\n🔍 Scanning for sensitive data...');'
const sensitivePatterns = [ /password\s*=\s*[''][^'']+['']/gi,/api[_-]?key\s*=\s*[''][^'']+['']/gi,/secret\s*=\s*[''][^'']+['']/gi,/token\s*=\s*[''][^'']+['']/gi,/private[_-]?key\s*=\s*[''][^'']+['']/gi ];'

const scanDirectory = (dir,results = []) => {;
  }
  const files = fs.readdirSync(dir); files.forEach(file = > {;
  }
  const filePath = path.join(dir,file);

const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern = > {;'
  }
  const matches = content.match(pattern); if (matches) { results.push({ 'file': filePath,'matches': matches })} })} catch (error) {} }
}); return results};

const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data 'found':'); sensitiveResults.forEach((result) => { console.log(` - ${result.file}`); result.matches.forEach((match) => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies 'found':'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')}'
const securityReport = { 'timestamp': new Date().toISOString(),'vulnerabilities': sensitiveResults.length,'recommendations': [ 'Run 'npm audit fix' to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');'
ursor/add-new-services-and-deploy-updates-0462,
ursor/fix-syntax-push-and-merge-to-main-40de,
console.log('🔒 Security audit completed!');'
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
const fs = require('fs');'

const path = require('path');'

console.log('🔒 Running security audit...');'
console.log('✅ Security audit completed');'

const { execSync } = require('child_process');'

const fs = require('fs');'

const path = require('path');'

console.log('🔒 Starting Security Audit...');'
>>>>>>> origin/cursor/delete-old-data-records-6bba

class SecurityAuditor {
  }
  constructor() {
    }
    this.reportFile = path.join(__dirname, '..', 'security-audit-report.json');'
    this.results = {
      }
      'timestamp': new Date().toISOString(),
      'npmAudit': null,
      'dependencyCheck': null,
      'filePermissions': null,
      'environmentVariables': null,
      'overall': { 'status': 'unknown', 'score': 0 }'
   
};
  }

  async runCommand(command, description) {
    }
    try {
      }
      console.log(`🔍 ${description}...`);`
const result = execSync(command, { 
        }
        'encoding': 'utf8', '
        'stdio': 'pipe','
        'cwd': path.join(__dirname, '..')'
      });
      console.log(`✅ ${description} - Success`);`      return { 'success': true, result };
    } catch (error) {
      }
      console.log(`❌ ${description} - 'Failed': ${error.messag,`}`);`return { 'success': false, 'error': error.message,;
};
    }
  }

  async checkSecurityHeaders() {
    try {
      console.log('🛡️  Checking security headers...');
      
      const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const config = fs.readFileSync(nextConfigPath, 'utf8');
        
        const securityChecks = [
          { name: 'Content Security Policy', pattern: /contentSecurityPolicy|CSP/i },
          { name: 'X-Frame-Options', pattern: /xFrameOptions|X-Frame-Options/i },
          { name: 'X-Content-Type-Options', pattern: /xContentTypeOptions|X-Content-Type-Options/i },
          { name: 'X-XSS-Protection', pattern: /xXSSProtection|X-XSS-Protection/i },
          { name: 'Strict-Transport-Security', pattern: /strictTransportSecurity|Strict-Transport-Security/i }
        ];
        
        securityChecks.forEach(check => {
          if (check.pattern.test(config)) {
            this.auditResults.securityHeaders.push({
              name: check.name,
              status: 'configured',
              recommendation: 'Good security practice implemented'
            });
          } else {
            this.auditResults.securityHeaders.push({
              name: check.name,
              status: 'missing',
              recommendation: `Implement ${check.name} for better security`
            });
          }
        });
      }
      
      console.log(`✅ Checked ${this.auditResults.securityHeaders.length} security headers`);
      
    } catch (error) {
      console.warn('⚠️  Security headers check failed:', error.message);
    }
  }

  async scanCodeForIssues() {
    try {
      console.log('🔍 Scanning code for security issues...');
      
      const srcDir = path.join(__dirname, '..', 'src');
      const pagesDir = path.join(__dirname, '..', 'pages');
      const componentsDir = path.join(__dirname, '..', 'components');
      
      const directories = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
      
      const securityPatterns = [
        {
          name: 'Hardcoded Secrets',
          pattern: /(password|secret|key|token)\s*[:=]\s*[''][^'']+['']/gi,
          severity: 'high'
        },
        {
          name: 'SQL Injection Risk',
          pattern: /(query|sql).*\+.*['']/gi,
          severity: 'high'
        },
        {
          name: 'XSS Risk',
          pattern: /dangerouslySetInnerHTML/gi,
          severity: 'medium'
        },
        {
          name: 'Unsafe Eval',
          pattern: /eval\s*\(/gi,
          severity: 'high'
        },
        {
          name: 'Console Logs',
          pattern: /console\.(log|warn|error)/gi,
          severity: 'low'
        }
      ];
      
      for (const dir of directories) {
        this.scanDirectory(dir, securityPatterns);
      }
      
      console.log(`✅ Scanned code for security issues`);
      
    } catch (error) {
      console.warn('⚠️  Code scanning failed:', error.message);
    }
  }

const finalScore = Math.round((totalScore / maxScore) * 100)this.results.overall.score = finalScore;
    this.results.overall.status = finalScore >= 80 ? 'excellent' :;'
                                 finalScore >= 60 ? 'good' :;'
                                 finalScore >= 40 ? 'fair' : 'poor';return finalScore;'
  }async generateReport() {const score  = this.calculateOverallScore()fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2))console.log(`📊 Security audit report saved 'to': ${this.reportFile}`)console.log(`🎯 Overall Security 'Score': ${score}/100 (${this.results.overall.status})`)}async run() {try {console.log('🚀 Starting comprehensive security audit...')await this.runNpmAudit()await this.checkDependencies()await this.checkFilePermissions()await this.checkEnvironmentVariables()await this.generateReport()console.log('🎉 Security audit completed successfully!')} catch (error) {console.log(`❌ Security audit 'failed': ${error.message}`)process.exit(1)}`  }
}// Run the security auditor;

const auditor = new SecurityAuditor()auditor.run().catch(console.error)origin/cursor/integrate-build-improve-and-re-verify-c7b5;

const fs = require('fs';'
  const path  = require('path')console.log('🔒 Running security audit...')console.log('✅ Security audit completed')ursor/fix-website-loading-errors-and-merge-6662;'
origin/main;
origin/automation-improvements-final;
console.log('🔒 Security audit completed!')ursor/automate-test-improve-and-merge-code-646c;'
console.log('🔒 Security audit completed!')origin/main;'
origin/automation-improvements-final;
console.log('🔒 Security audit completed!')'

  async generateReport() {
    }
    const score = this.calculateOverallScore();
    
    fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
    console.log(`📊 Security audit report saved 'to': ${this.reportFil,`}`);`    console.log(`🎯 Overall Security 'Score': ${score}/100 (${this.results.overall.statu,`})`);`  }

  async run() {
    }
    try {
      }
      console.log('🚀 Starting comprehensive security audit...');'
      
      const report = this.generateReport();
      
      console.log('\n🔒 Security Audit Summary:');
      console.log(`Vulnerabilities: ${report.summary.totalVulnerabilities}`);
      console.log(`Missing Security Headers: ${report.summary.missingSecurityHeaders}`);
      console.log(`Code Issues: ${report.summary.codeIssues}`);
      console.log(`High Severity Issues: ${report.summary.highSeverityIssues}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Security Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
      console.log('🎉 Security audit completed successfully!');'
    } catch (error) {
      }
      console.log(`❌ Security audit 'failed': ${error.messag,`}`);`
      process.exit(1);
    }
  }
}

<<<<<<< HEAD
async function main() {
  const auditor = new SecurityAuditor();
  await auditor.run();
}


auditor.run().catch(console.error);








=======
// Run the security auditor,
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);

const fs = require('fs');'

const path = require('path');'

console.log('🔒 Running security audit...');'
console.log('✅ Security audit completed');'

origin/main,
origin/automation-improvements-final,
console.log('🔒 Security audit completed!');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
