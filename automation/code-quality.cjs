
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}},
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Code quality checks
const qualityChecks = [{
    "name": 'TypeScript Type Checking',
    "action": () => {
      try {
        execSync('npx tsc --noEmit', { "stdio": 'pipe' });
      } catch (error) {
      }
    },
  },
<<<<<<< HEAD
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

    }},
  {
    "name": 'ESLint Code Analysis',
    "action": () => {
      
      try {
        execSync('npx eslint . --ext .ts,.tsx,.js,.jsx', { "stdio": 'pipe' });
        
      } catch (error) {
        
      }
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

    }},
  {
    "name": 'Prettier Code Formatting',
    "action": () => {
      
      try {
        execSync('npx prettier --check .', { "stdio": 'pipe' });
        
      } catch (error) {
        
      }
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

    }},
  {
    "name": 'Code Complexity Analysis',
    "action": () => {
      
      const pagesDir = path.join(process.cwd(), 'pages');
      const componentsDir = path.join(process.cwd(), 'components');

      let totalLines = 0;
      let totalFiles = 0;

      [pagesDir, componentsDir].forEach(dir => {
        if (fs.existsSync(dir)) {
          const files = fs
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

            .readdirSync(dir, { "recursive": true })
            .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

          files.forEach(file => {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n').length;
            totalLines += lines;
            totalFiles++;
          });
        }
      });

      const avgLinesPerFile =
        totalFiles > 0 ? Math.round(totalLines / totalFiles) : 0;

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      console.log(`Average lines per file: ${avgLinesPerFile}`);
      console.log(`Total files analyzed: ${totalFiles}`);
    },
  },

<<<<<<< HEAD
      
      
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
      
      
main

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    }},
  {
    "name": 'Import/Export Analysis',
    "action": () => {
      
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs
          .readdirSync(pagesDir)
          .filter(file => file.endsWith('.tsx'));
        let importCount = 0;
        let exportCount = 0;

        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          importCount += (content.match(/^import\s+/gm) || []).length;
          exportCount += (content.match(/^export\s+/gm) || []).length;
        });

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        console.log(`Total imports: ${importCount}`);
        console.log(`Total exports: ${exportCount}`);
      }
    },
  },
<<<<<<< HEAD


        
        
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b

        
        
main

=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      }
    }},
  {
    "name": 'Dead Code Detection',
    "action": () => {
      
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs
          .readdirSync(pagesDir)
          .filter(file => file.endsWith('.tsx'));
        let unusedImports = 0;

        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          const imports =
            content.match(/^import\s+.*from\s+['"][^'"]+['"]/gm) || [];

          imports.forEach(importLine => {
            const importName = importLine.match(/import\s+{([^}]+)}/);
            if (importName) {
              const names = importName[1].split(',').map(name => name.trim());
              names.forEach(name => {
                if (
                  !content.includes(name) ||
                  content.indexOf(name) === content.lastIndexOf(name)
                ) {
                  unusedImports++;
                }
              });
            }
          });
        });

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        console.log(`Potential unused imports: ${unusedImports}`);
      }
    },
  },
<<<<<<< HEAD


        
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b

        
main

=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      }
    }},
];

// Run quality checks
let successCount = 0;
let totalCount = qualityChecks.length;

for (const check of qualityChecks) {
  try {
    
    check.action();
    
    successCount++;
  } catch (error) {
    
  }
}

// Generate quality report
const report = {
  "timestamp": new Date().toISOString(),
  "checks": qualityChecks.map(check => ({
    name: check.name,

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b




origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b

main


=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}

const reportFile = path.join(reportsDir, `quality-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

<<<<<<< HEAD


origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b





main


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log(' Code Quality Checker Starting...\n')
    "name"
        execSync('npx tsc --noEmit', { "stdio"})
    "name"
        execSync('npx eslint . --ext .ts,.tsx,.js,.jsx', { "stdio"})
    "name"
        execSync('npx prettier --check .', { "stdio"})
    "name"
    "name"
    "name"
            content.match(/^import\s+.*from\s+['"][^'')]
    "status"
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    "status"
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main

=======

    "status"
    "status"
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

