const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {
  this.issues = []}

  checkFileSize(filePath) {
  const stats = fs.statSync(filePath);
    if (stats.size > 100000) { // 100KB;
      this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`)}
  }

  scanDirectory(dir) {