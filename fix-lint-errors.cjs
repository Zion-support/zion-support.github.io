<<<<<<< HEAD
#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");



// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, "");
    content = content.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, "");
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< .*$/gm, "");
    content = content.replace(/^=======.*$/gm, "");
    content = content.replace(/^>>>>>>> .*$/gm, "");
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n");
    
    fs.writeFileSync(filePath, content);
    
    return true} catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false}
}

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    
    // Remove unused imports from lucide-react
    const lines = content.split('\n');
    const newLines = [];
    const usedIcons = new Set();
    
    // Find all used icons in the file
    for (const line of lines) {
      const iconMatches = line.match(/(?:<|{)([A-Z][a-zA-Z0-9]*)(?:\s|>|})/g);
      if (iconMatches) {
        iconMatches.forEach(match => {
          const iconName = match.replace(/[<>{}\s]/g, '');
          if (iconName && iconName[0] === iconName[0].toUpperCase()) {
            usedIcons.add(iconName)}
        })}
    }
    
    // Process import lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line from lucide-react
      if (line.includes('from "lucide-react"') || line.includes("from 'lucide-react'")) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*["']lucide-react["']/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => usedIcons.has(imp));
          
          if (usedImports.length === 0) {
            // Remove the entire import line
            continue} else if (usedImports.length < imports.length) {
            // Keep only used imports
            newLines.push(`import { ${usedImports.join(', ')} } from "lucide-react";`);
            continue}
        }
      }
      
      newLines.push(line)}
    
    fs.writeFileSync(filePath, newLines.join('\n'));
    
    return true} catch (error) {
    console.error(`❌ Error cleaning imports in ${filePath}:`, error.message);
    return false}
}

// Function to find all files with issues
function findFilesWithIssues(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== "node_modules") {
          searchDirectory(fullPath)} else if (stat.isFile() && (
          item.endsWith(".tsx") || 
          item.endsWith(".ts") || 
          item.endsWith(".js") || 
          item.endsWith(".jsx")
        )) {
          try {
            const content = fs.readFileSync(fullPath, "utf8");
            if (content.includes("<<<<<<<") || content.includes("=======") || content.includes(">>>>>>>")) {
              files.push(fullPath)}
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  searchDirectory(dir);
  return files}

// Main execution
try {
  const conflictedFiles = findFilesWithIssues(".");
  
  if (conflictedFiles.length === 0) {
    } else {
    
    conflictedFiles.forEach(file => );
    
    let resolvedCount = 0;
    for (const file of conflictedFiles) {
      if (resolveMergeConflicts(file)) {
        resolvedCount++}
    }
    
    }
  
  // Try to run lint fix
  
  try {
    execSync("npm run "lint": fix", { "stdio": "inherit" });
    } catch (error) {
    }
  
} catch (error) {
  console.error("❌ Error during lint error "fixing": ", error.message);
  process.exit(1)}
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Starting lint error fixes.");/ Function to resolve merge conflicts in a filefunction resolveMergeConflicts(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); / Remove merge conflict markers""
=======
#!/usr/bin/env node;
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(" Starting lint error fixes...")
    let content = fs.readFileSync(filePath, "utf8")
    content = content.replace(/[\s\S]*?[\s\S]*?[^\n]*/g, "")
    content = content.replace(/[^\n]*[\s\S]*?[\s\S]*?[^\n]*/g, "")
    content = content.replace(/^.*$/gm, "")
    content = content.replace(/^.*$/gm, "")
    content = content.replace(/^.*$/gm, "")
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n")
    console.log(` Resolved conflicts "in"`)
    let content = fs.readFileSync(filePath, "utf8")
      if (line.includes('from "lucide-react"') || line.includes(')
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*["']lucide-react[']
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> main
>>>>>>> main
