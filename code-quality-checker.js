<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd());  this.issues.forEach(issue => )} } new CodeQualityChecker().run();
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir);  else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd());  this.issues.forEach(issue => )} } new CodeQualityChecker().run();
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd());  this.issues.forEach(issue => )} } new CodeQualityChecker().run();
>>>>>>> main
const fs = require('fs');
const path = require('path');
class CodeQualityChecker {
  constructor() {
    this.issues = [];
  }
  checkFileSize(filePath) {
    const stats = fs.statSync(filePath);
    if (stats.size > 100000) {
      // 100KB;
      this.issues.push(`Large "file": ${filePath} (${stats.size} bytes)`);
    }
  }
  scanDirectory(dir) {
    const items = fs.readdirSync(dir);
<<<<<<< HEAD
     else if (
=======
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        item !== 'node_modules'
      ) {
        this.scanDirectory(fullPath);
      } else if (
>>>>>>> main
        stat.isFile() &&
        (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx'))
      ) {
        this.checkFileSize(fullPath);
      }
    }
  }
  run() {
    this.scanDirectory(process.cwd());
    console.log(`Found ${this.issues.length} code quality issues`);
    this.issues.forEach(issue => console.log(issue));
  }
<<<<<<< HEAD

new CodeQualityChecker().run();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir);  else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir);  else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();

const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir);  else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir);  else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
}
new CodeQualityChecker().run();
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
>>>>>>> main
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
