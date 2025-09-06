<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
}},
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> origin/main
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Security checks
const securityChecks = [{
    "name": 'Dependency Vulnerability Scan',
    "action": () => {
      try {
        execSync('npm audit --audit-level=moderate', { "stdio": 'pipe' });
      } catch (error) {
      }
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> origin/main
    }},
  {
    "name": 'Environment Variables Check',
    "action": () => {
      const envFiles = ['.env', '.env.local', '.env.production'];
      let foundEnvFiles = 0;
      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          foundEnvFiles++;
        }
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      console.log(`Found ${foundEnvFiles} environment files`);
    },
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
      console.log(`Found ${foundEnvFiles} environment files`);
    },
  },
=======

      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======

      
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }},
  {
    "name": 'API Security Check',
    "action": () => {
      const apiDir = path.join(process.cwd(), 'pages', 'api');
      if (fs.existsSync(apiDir)) {
        const apiFiles = fs
          .readdirSync(apiDir)
          .filter(file => file.endsWith('.ts') || file.endsWith('.js'));
        let securityIssues = 0;
        apiFiles.forEach(file => {
          const content = fs.readFileSync(path.join(apiDir, file), 'utf8');
          if (
            content.includes('process.env') &&
<<<<<<< HEAD
<<<<<<< HEAD
            !content.includes('// Security: ')
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            !content.includes('// Security: ')
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
            !content.includes('// Security: ')
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            !content.includes('// "Security": ')
          ) {
            securityIssues++;
          }
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> origin/main
        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`
        );
      }
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======

        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }},
  {
    "name": 'Content Security Policy Check',
    "action": () => {
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs
          .readdirSync(pagesDir)
          .filter(file => file.endsWith('.tsx'));
        let cspFound = 0;
        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          if (
            content.includes('Content-Security-Policy') ||
            content.includes('CSP')
          ) {
            cspFound++;
          }
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> origin/main
        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======

        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }},
  {
    "name": 'HTTPS Enforcement Check',
    "action": () => {
      const nextConfigPath = path.join(process.cwd(), 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        if (content.includes('https') || content.includes('secure')) {
        } else {
        }
      } else {
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    },
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
    },
  },
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }},
];
// Run security checks
let successCount = 0;
let totalCount = securityChecks.length;
for (const check of securityChecks) {
  try {
    check.action();
    successCount++;
  } catch (error) {
  }
}
// Generate security report
const report = {
  "timestamp": new Date().toISOString(),
  "checks": securityChecks.map(check => ({
    name: check.name,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> origin/main
    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======

>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}
const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
console.log(`📄 Security report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Security Audit Starting.\n");/ Security checksconst securityChecks = [{" name: "Dependency Vulnerability Scan"," action: () => {" console.log(" Scanning for vulnerable dependencies."); try {"" execSync("npm audit --audit-level=moderate", { stdio: "pipe" });" console.log(" No high-severity vulnerabilities found"); } catch (error) {" console.log(" Some vulnerabilities found - check npm audit output"); } }}, {"" name: "Environment Variables Check"," action: () => {" console.log(" Checking environment variables.");" const envFiles = [".env", ".env.local", ".env.production"]; let foundEnvFiles = 0; envFiles.forEach(envFile => { if (fs.existsSync(envFile)) { foundEnvFiles++; console.log(`Found ${envFile}`); } });` console.log(`Found ${foundEnvFiles} environment files`); }}, {"" name: "API Security Check"," action: () => {" console.log(" Checking API security.");" const apiDir = path.join(process.cwd(), "pages", "api"); if (fs.existsSync(apiDir)) { const apiFiles = fs .readdirSync(apiDir)" .filter(file => file.endsWith(".ts") | file.endsWith(".js")); let securityIssues = 0; apiFiles.forEach(file => {" const content = fs.readFileSync(path.join(apiDir, file), "utf8"); if (" content.includes("process.env") &&"" !content.includes("/ Security: ") ) { securityIssues++; } }); console.log(` `Found ${apiFiles.length} API files, ${securityIssues} potential security issues` ); } }}, {"" name: "Content Security Policy Check"," action: () => {" console.log(" Checking Content Security Policy.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let cspFound = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("Content-Security-Policy") |" content.includes("CSP") ) { cspFound++; } });` console.log(`Found CSP in ${cspFound}/${pages.length} pages`); } }}, {"" name: "HTTPS Enforcement Check"," action: () => {" console.log(" Checking HTTPS enforcement.");" const nextConfigPath = path.join(process.cwd(), "next.config.js"); if (fs.existsSync(nextConfigPath)) {" const content = fs.readFileSync(nextConfigPath, "utf8");" if (content.includes("https") | content.includes("secure")) {" console.log(" HTTPS configuration found"); } else {" console.log(" No HTTPS enforcement found"); } } else {" console.log(" No Next.js config found"); } }},];/ Run security checkslet successCount = 0;let totalCount = securityChecks.length;for (const check of securityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Security Audit Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate security reportconst report = {" timestamp: new Date().toISOString()," checks: securityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Security report saved to: ${reportFile}`);""`"`
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log(`📄 Security report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Security Audit Starting.\n");/ Security checksconst securityChecks = [{" name: "Dependency Vulnerability Scan"," action: () => {" console.log(" Scanning for vulnerable dependencies."); try {"" execSync("npm audit --audit-level=moderate", { stdio: "pipe" });" console.log(" No high-severity vulnerabilities found"); } catch (error) {" console.log(" Some vulnerabilities found - check npm audit output"); } }}, {"" name: "Environment Variables Check"," action: () => {" console.log(" Checking environment variables.");" const envFiles = [".env", ".env.local", ".env.production"]; let foundEnvFiles = 0; envFiles.forEach(envFile => { if (fs.existsSync(envFile)) { foundEnvFiles++; console.log(`Found ${envFile}`); } });` console.log(`Found ${foundEnvFiles} environment files`); }}, {"" name: "API Security Check"," action: () => {" console.log(" Checking API security.");" const apiDir = path.join(process.cwd(), "pages", "api"); if (fs.existsSync(apiDir)) { const apiFiles = fs .readdirSync(apiDir)" .filter(file => file.endsWith(".ts") | file.endsWith(".js")); let securityIssues = 0; apiFiles.forEach(file => {" const content = fs.readFileSync(path.join(apiDir, file), "utf8"); if (" content.includes("process.env") &&"" !content.includes("/ Security: ") ) { securityIssues++; } }); console.log(` `Found ${apiFiles.length} API files, ${securityIssues} potential security issues` ); } }}, {"" name: "Content Security Policy Check"," action: () => {" console.log(" Checking Content Security Policy.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let cspFound = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("Content-Security-Policy") |" content.includes("CSP") ) { cspFound++; } });` console.log(`Found CSP in ${cspFound}/${pages.length} pages`); } }}, {"" name: "HTTPS Enforcement Check"," action: () => {" console.log(" Checking HTTPS enforcement.");" const nextConfigPath = path.join(process.cwd(), "next.config.js"); if (fs.existsSync(nextConfigPath)) {" const content = fs.readFileSync(nextConfigPath, "utf8");" if (content.includes("https") | content.includes("secure")) {" console.log(" HTTPS configuration found"); } else {" console.log(" No HTTPS enforcement found"); } } else {" console.log(" No Next.js config found"); } }},];/ Run security checkslet successCount = 0;let totalCount = securityChecks.length;for (const check of securityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Security Audit Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate security reportconst report = {" timestamp: new Date().toISOString()," checks: securityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Security report saved to: ${reportFile}`);""`"`
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('� Security Audit Starting...\n')
    "name"
        execSync('npm audit --audit-level=moderate', { "stdio"})
    "name"
    "name"
            !content.includes('// "Security")
    "name"
    "name"
    "status"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
    "status"
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
    "status"
=======
    "status"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
    "status"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    "status"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/main
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
