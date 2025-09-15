<<<<<<< HEAD
const fs = require("fs");
const path = require("path");
function fixMergeConflicts(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
    // Remove merge conflict markers and keep the content after the last marker;
    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    // Fix common syntax issues;
    content = content.replace(/},\s*}/g, "}");
    content = content.replace(/},\s*]/g, "]");
    content = content.replace(/},\s*\)/g, ")");
    fs.writeFileSync(filePath, content);
    } catch (error) {
  console.error(`Error fixing ${filePath}:`, error.message)}
}
;
function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
  const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.includes("node_modules") && !file.includes(".git")) {
  findAndFixFiles(filePath)} else if (file.match(/\.(tsx?|jsx?)$/)) {
  const content = fs.readFileSync(filePath, "utf8");
      if (content.includes("") || content.includes("") || content.includes(">>>>>>>")) {
  fixMergeConflicts(filePath)}
    }
  }
}
;

findAndFixFiles(".");
=======
<<<<<<< HEAD
const fs = require("fs");"const path = require("path");function fixMergeConflicts(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); / Remove merge conflict markers and keep the newer version (after =======)''"
=======
const fs = require('fs');
const path = require('path');
function fixMergeConflicts(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers and keep the newer version (after );
>>>>>>> main
>>>>>>> main
