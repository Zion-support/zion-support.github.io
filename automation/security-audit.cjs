<<<<<<< HEAD
=======

}},

>>>>>>> origin/merge-pr-12271
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
(function main() {
  let json = null;
=======
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

        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`
        );
      }
    },
  },

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

        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },

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

    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};

    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};

const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}

const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

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

    "status"
    "status"

>>>>>>> origin/merge-pr-12271
