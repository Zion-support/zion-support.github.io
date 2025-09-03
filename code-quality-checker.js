
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {

  this.issues = [];
}
  checkFileSize() {

  const stats = fs.statSync(filePath);
    if (stats.size > 100000) { // 100KB;
      this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`);
}
  }
  scanDirectory() {

  const items = fs.readdirSync(dir);
    for() {

  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
  this.scanDirectory(fullPath);
} else if (stat.isFile() && (item.endsWith(".js") || item.endsWith(".ts") || item.endsWith(".tsx"))) {
  this.checkFileSize(fullPath);
}
    }
  }
  run() {

  this.scanDirectory(process.cwd());
    console.log(``Found ${this.issues.length} code quality issues``);
    this.issues.forEach(issue => console.log(issue));
}
}
new CodeQualityChecker().run()