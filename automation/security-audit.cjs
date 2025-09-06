<<<<<<< HEAD
=======
}},
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
=======

      

      

      
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
            !content.includes('// "Security": ')
          ) {
            securityIssues++;
          }
        });
<<<<<<< HEAD
=======
        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`
        );
      }
    },
  },
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6

        
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
=======
        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6

        
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
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};

<<<<<<< HEAD
=======



>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
    "status"
    "status"
    "status"
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
