#!/usr/bin/env node

<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix missing Head import in a file"
function fixMissingHeadImport(filePath) {"
  try {"'"
    let content = fs.readFileSync(filePath, 'utf8");"
    "
    // Check if file uses Head but doesn"t import it"'"
    if (content.includes('<Head>') && !content.includes("import Head from "next/head)) {"
      console.log(`Fixing missing Head import in: ${filePath}`)";"
      "
      // Find the first import statement and add Head import after it"'"
      const lines = content.split('\n");
      let insertIndex = 0;"
      "
      for (let i = 0; i < lines.length; i++) {"'"
=======
const fs = require('fs')
const path = require('path')
// Function to fix missing Head import in a file;
function fixMissingHeadImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Check if file uses Head but doesn't import it
    if (content.includes('<Head>') && !content.includes("import Head from 'next/head'")) {
      console.log(`Fixing missing Head import in: ${filePath}`)
      // Find the first import statement and add Head import after it;
     ;
const lines = content.split('\n')
      let insertIndex = 0
      for (let i = 0; i < lines.length; i++) {
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
        if (lines[i].startsWith("import ") && lines[i].includes("from '")) {
          insertIndex = i + 1
        }
<<<<<<< HEAD
      }"
      "
      // Insert Head import"'"
      lines.splice(insertIndex, 0, "import Head from 'next/head';");"
      "'"
      const fixedContent = lines.join('\n");"'"
      fs.writeFileSync(filePath, fixedContent, 'utf8");
      
      return true;
=======
      }
      
      // Insert Head import;
      lines.splice(insertIndex, 0, "import Head from 'next/head';")
      const fixedContent = lines.join('\n')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      return true
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and fix all files
function fixAllMissingImports(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
<<<<<<< HEAD
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    "
    if (stat.isDirectory()) {"
      // Skip node_modules and other common directories"'"
      if (['node_modules', '.git', '.next', 'dist', 'build"].includes(file)) {
        continue;"
      }"
      fixedCount += fixAllMissingImports(filePath);"'"
    } else if (file.endsWith('.tsx') || file.endsWith('.ts")) {
=======
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        continue
      }
      fixedCount += fixAllMissingImports(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
      if (fixMissingHeadImport(filePath)) {
        fixedCount++
      }
    }
  }
  
<<<<<<< HEAD
  return fixedCount;
}"
"
// Main execution"'"
console.log('Starting missing imports fix...");"'"
const fixedCount = fixAllMissingImports('/workspace/app");"
console.log(`Fixed missing imports in ${fixedCount} files`);"'"
=======
  return fixedCount
}

// Main execution
console.log('Starting missing imports fix...')
const fixedCount = fixAllMissingImports('/workspace/app')
console.log(`Fixed missing imports in ${fixedCount} files`)
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
