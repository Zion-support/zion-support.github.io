<<<<<<< HEAD

}},
}},

origin/cursor/expand-services-advertise-and-build-project-c28b


=======
<<<<<<< HEAD
=======

}},

>>>>>>> origin/merge-pr-12271
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
    "action": () => {"
      try {
  // TODO: Implement
}"

      } catch (error) {
      }
    },
},

    }},
main


    }},
  {
    "name": 'Environment Variables Check',
    "action": () => {

  {
    "name": 'Environment Variables Check',
    "action": () => {"]"
=======
<<<<<<< HEAD
(function main() {
  let json = null;
=======
    }},
  {
    "name": 'Environment Variables Check',
    "action": () => {
      
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
      const envFiles = ['.env', '.env.local', '.env.production'];
      let foundEnvFiles = 0;

      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          foundEnvFiles++;
          
        }
      });

<<<<<<< HEAD


origin/cursor/integrate-build-improve-and-re-verify-c7b5




      envFiles.forEach(envFile => {)
        if (fs.existsSync(envFile)) {
          foundEnvFiles++;
      });



=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main

        apiFiles.forEach(file => {)


=======

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
            !content.includes('// "Security": ')
          ) {
            securityIssues++;
          }
        });

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b


=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`
        );
      }
    },
  },

<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b

main



=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },

<<<<<<< HEAD


origin/cursor/integrate-build-improve-and-re-verify-c7b5

        pages.forEach(page => {)

            cspFound++;



=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main


=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    }},
];

// Run security checks
<<<<<<< HEAD
  // TODO: Implement
  // TODO: Implement

];

// Run security checks;
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
let successCount = 0;
let totalCount = securityChecks.length;

for (const check of securityChecks) {
>>>>>>> origin/merge-pr-12271
  try {
    const out = execSync('npm audit --json', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    json = JSON.parse(out);
  } catch (e) {
    console.warn('[security-audit] npm audit failed, capturing partial');
    try { json = JSON.parse(e.stdout || '{}'); } catch { json = { error: String(e.message || e) }; }
  }
<<<<<<< HEAD
  const outDir = path.join(process.cwd(), 'data', 'security');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'npm-audit.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), report: json }, null, 2), 'utf8');
  console.log('[security-audit] wrote', outPath);
})();
=======
}

// Generate security report
const report = {
  "timestamp": new Date().toISOString(),
  "checks": securityChecks.map(check => ({
    name: check.name,

<<<<<<< HEAD


origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main


=======

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};

<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b

main




=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}

const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

<<<<<<< HEAD




origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
  "summary": {"
    total: totalCount,"
    "successful": successCount,""
    "failed": totalCount - successCount}};""
const reportsDir = path.join(process.cwd(), 'automation-reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });"
const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));


main


=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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

origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main


    "status"
    "status"


=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

    "status"
    "status"

<<<<<<< HEAD
    "status"

=======
>>>>>>> origin/merge-pr-12271
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
