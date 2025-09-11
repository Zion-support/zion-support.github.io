<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}},
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Code quality checks;
const qualityChecks = [{

    "action": () => {"
      try {
  // TODO: Implement
}"

      } catch (error) {
      }
    },
  },
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
    }},
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  {
    "name": 'ESLint Code Analysis',
    "action": () => {
      try {
        execSync('npx eslint . --ext .ts,.tsx,.js,.jsx', { "stdio": 'pipe' });
      } catch (error) {
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },
  },
    },
  },
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    },
  },
    },
  },
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
            .readdirSync(dir, { recursive: true })
            .readdirSync(dir, { recursive: true })
            .readdirSync(dir, { recursive: true })
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
      console.log(`Average lines per file: ${avgLinesPerFile}`);
      console.log(`Total files analyzed: ${totalFiles}`);
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
      
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }},
  {
    "name": Import/Export Analysis,
    "action": () => {
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
        console.log(`Total imports: ${importCount}`);
        console.log(`Total exports: ${exportCount}`);
      }
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

        
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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







        console.log(`Total exports: ${exportCount}`);

              names.forEach(name => {
                if ()
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
        console.log(`Potential unused imports: ${unusedImports}`);
      }
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    }},
];
// Run quality checks







        console.log(`Potential unused imports: ${unusedImports}`);

];

// Run quality checks;
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
  // TODO: Implement
    check.action();
    successCount++;


const report = {

  "checks": qualityChecks.map(check => ({"
    name: check.name,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    status: 'completed',
  })),
  summary: {,
  total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
};
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}
const reportFile = path.join(reportsDir, `quality-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log(`📄 Quality report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Code Quality Checker Starting.\n");/ Code quality checksconst qualityChecks = [{" name: "TypeScript Type Checking"," action: () => {" console.log(" Running TypeScript type checking."); try {"" execSync("npx tsc --noEmit", { stdio: "pipe" });" console.log(" TypeScript type checking passed"); } catch (error) {" console.log(" TypeScript type checking found issues"); } }}, {"" name: "ESLint Code Analysis"," action: () => {" console.log(" Running ESLint analysis."); try {"" execSync("npx eslint . --ext .ts,.tsx,.js,.jsx", { stdio: "pipe" });" console.log(" ESLint analysis passed"); } catch (error) {" console.log(" ESLint found code quality issues"); } }}, {"" name: "Prettier Code Formatting"," action: () => {" console.log(" Checking code formatting."); try {"" execSync("npx prettier --check .", { stdio: "pipe" });" console.log(" Code formatting is consistent"); } catch (error) {" console.log(" Code formatting issues found"); } }}, {"" name: "Code Complexity Analysis"," action: () => {" console.log(" Analyzing code complexity.");" const pagesDir = path.join(process.cwd(), "pages");" const componentsDir = path.join(process.cwd(), "components"); let totalLines = 0; let totalFiles = 0; [pagesDir, componentsDir].forEach(dir => { if (fs.existsSync(dir)) { const files = fs" .readdirSync(dir, { recursive: true })" .filter(file => file.endsWith(".tsx") | file.endsWith(".ts")); files.forEach(file => { const filePath = path.join(dir, file);" const content = fs.readFileSync(filePath, "utf8");" const lines = content.split("\n").length; totalLines += lines; totalFiles++; }); } }); const avgLinesPerFile totalFiles > 0 ? Math.round(totalLines / totalFiles) : 0;" console.log(`Average lines per file: ${avgLinesPerFile}`);"` console.log(`Total files analyzed: ${totalFiles}`); }}, {"" name: "Import/Export Analysis"," action: () => {" console.log(" Analyzing imports and exports.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let importCount = 0; let exportCount = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); importCount += (content.match(/^import\s+/gm) | []).length; exportCount += (content.match(/^export\s+/gm) | []).length; });"` console.log(`Total imports: ${importCount}`);"` console.log(`Total exports: ${exportCount}`); } }}, {"" name: "Dead Code Detection"," action: () => {" console.log(" Checking for dead code.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let unusedImports = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); const imports ="" content.match(/^import\s+.*from\s+[""][^""]+[""]/gm) | []; imports.forEach(importLine => { const importName = importLine.match(/import\s+{([^}]+)}/); if (importName) {" const names = importName[1].split(",").map(name => name.trim()); names.forEach(name => { if ( !content.includes(name) content.indexOf(name) === content.lastIndexOf(name) ) { unusedImports++; } }); } }); });"` console.log(`Potential unused imports: ${unusedImports}`); } }},];/ Run quality checkslet successCount = 0;let totalCount = qualityChecks.length;for (const check of qualityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Code Quality Check Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate quality reportconst report = {" timestamp: new Date().toISOString()," checks: qualityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `quality-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Quality report saved to: ${reportFile}`);'"`'"`
=======
<<<<<<< HEAD
<<<<<<< HEAD
console.log(`📄 Quality report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Code Quality Checker Starting.\n");/ Code quality checksconst qualityChecks = [{" name: "TypeScript Type Checking"," action: () => {" console.log(" Running TypeScript type checking."); try {"" execSync("npx tsc --noEmit", { stdio: "pipe" });" console.log(" TypeScript type checking passed"); } catch (error) {" console.log(" TypeScript type checking found issues"); } }}, {"" name: "ESLint Code Analysis"," action: () => {" console.log(" Running ESLint analysis."); try {"" execSync("npx eslint . --ext .ts,.tsx,.js,.jsx", { stdio: "pipe" });" console.log(" ESLint analysis passed"); } catch (error) {" console.log(" ESLint found code quality issues"); } }}, {"" name: "Prettier Code Formatting"," action: () => {" console.log(" Checking code formatting."); try {"" execSync("npx prettier --check .", { stdio: "pipe" });" console.log(" Code formatting is consistent"); } catch (error) {" console.log(" Code formatting issues found"); } }}, {"" name: "Code Complexity Analysis"," action: () => {" console.log(" Analyzing code complexity.");" const pagesDir = path.join(process.cwd(), "pages");" const componentsDir = path.join(process.cwd(), "components"); let totalLines = 0; let totalFiles = 0; [pagesDir, componentsDir].forEach(dir => { if (fs.existsSync(dir)) { const files = fs" .readdirSync(dir, { recursive: true })" .filter(file => file.endsWith(".tsx") | file.endsWith(".ts")); files.forEach(file => { const filePath = path.join(dir, file);" const content = fs.readFileSync(filePath, "utf8");" const lines = content.split("\n").length; totalLines += lines; totalFiles++; }); } }); const avgLinesPerFile totalFiles > 0 ? Math.round(totalLines / totalFiles) : 0;" console.log(`Average lines per file: ${avgLinesPerFile}`);"` console.log(`Total files analyzed: ${totalFiles}`); }}, {"" name: "Import/Export Analysis"," action: () => {" console.log(" Analyzing imports and exports.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let importCount = 0; let exportCount = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); importCount += (content.match(/^import\s+/gm) | []).length; exportCount += (content.match(/^export\s+/gm) | []).length; });"` console.log(`Total imports: ${importCount}`);"` console.log(`Total exports: ${exportCount}`); } }}, {"" name: "Dead Code Detection"," action: () => {" console.log(" Checking for dead code.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let unusedImports = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); const imports ="" content.match(/^import\s+.*from\s+[""][^""]+[""]/gm) | []; imports.forEach(importLine => { const importName = importLine.match(/import\s+{([^}]+)}/); if (importName) {" const names = importName[1].split(",").map(name => name.trim()); names.forEach(name => { if ( !content.includes(name) content.indexOf(name) === content.lastIndexOf(name) ) { unusedImports++; } }); } }); });"` console.log(`Potential unused imports: ${unusedImports}`); } }},];/ Run quality checkslet successCount = 0;let totalCount = qualityChecks.length;for (const check of qualityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Code Quality Check Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate quality reportconst report = {" timestamp: new Date().toISOString()," checks: qualityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `quality-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Quality report saved to: ${reportFile}`);'"`'"`
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    "status"
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    "status"
    "status"
    "status"
    "status"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
