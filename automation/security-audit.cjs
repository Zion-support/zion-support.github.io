<<<<<<< HEAD
}},
}},



=======

}},
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

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

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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








=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
            !content.includes('// "Security": ')
          ) {
            securityIssues++;
          }
        });

<<<<<<< HEAD





=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`
        );
      }
    },
  },
<<<<<<< HEAD




        


=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },
<<<<<<< HEAD




        


=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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








=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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




=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};

<<<<<<< HEAD








=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};

<<<<<<< HEAD














=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}

const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

<<<<<<< HEAD












=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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
    "status"
    "status"
    "status"

    "status"
    "status"










=======

    "status"
    "status"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

