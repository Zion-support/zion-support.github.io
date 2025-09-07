<<<<<<< HEAD

}},

=======
}},
}},
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    }},
  {
    "name": 'ESLint Code Analysis',
    "action": () => {
      try {
        execSync('npx eslint . --ext .ts,.tsx,.js,.jsx', { "stdio": 'pipe' });
      } catch (error) {
      }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    }},
  {
    "name": 'Prettier Code Formatting',
    "action": () => {
      try {
        execSync('npx prettier --check .', { "stdio": 'pipe' });
      } catch (error) {
      }
<<<<<<< HEAD

=======
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

=======
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

      console.log(`Average lines per file: ${avgLinesPerFile}`);
      console.log(`Total files analyzed: ${totalFiles}`);
    },
  },

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

        console.log(`Total imports: ${importCount}`);
        console.log(`Total exports: ${exportCount}`);
      }
    },
  },

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

        console.log(`Potential unused imports: ${unusedImports}`);
      }
    },
  },

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
// Generate quality report
const report = {
  "timestamp": new Date().toISOString(),
  "checks": qualityChecks.map(check => ({
    name: check.name,
<<<<<<< HEAD

    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};

=======
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}
const reportFile = path.join(reportsDir, `quality-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD

=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

    "status"
    "status"

=======
"status"
    "status"
    "status"
    "status"
    "status"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
