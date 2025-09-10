>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:code-quality-checker.js
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd());  this.issues.forEach(issue => )} } new CodeQualityChecker().run();
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
}
new CodeQualityChecker().run();
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
const fs = require('fs'); const path = require('path'); class CodeQualityChecker { constructor() { this.issues = []} checkFileSize(filePath) { const stats = fs.statSync(filePath); if (stats.size > 100000) { this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)} } scanDirectory(dir) { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if ( stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' ) { this.scanDirectory(fullPath)} else if ( stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx')) ) { this.checkFileSize(fullPath)} } } run() { this.scanDirectory(process.cwd()); console.log(`Found ${this.issues.length} code quality issues`); this.issues.forEach(issue => console.log(issue))} } new CodeQualityChecker().run();
>>>>>>> main
>>>>>>> main
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:code-quality-checker.js
