#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Common Lucide React icons that are frequently used;
const commonIcons = ['ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',];
let totalFixes = 0;
let filesProcessed = 0;
// Find missing imports in a file;
function findMissingImports() {const missingImports = [];
  // Check for each common icon;
  commonIcons && commonIcons.forEach(icon => {const iconRegex = new RegExp(`\\b${icon}\\b`, 'g')const matches = content && content.match(iconRegex)if (matches && matches.length > 0) {// Check if the icon is already imported;
      const importRegex = new RegExp(`import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g';
      )const existingImport = content && content.match(importRegex)if (!existingImport) {missingImports && missingImports.push(icon)}
    }
  })return missingImports}
// Fix missing imports in a file;
function fixMissingImports() {const missingImports = findMissingImports(content, filePath)if (missingImports && missingImports.length === 0) {return { content, "changes": 0 }}
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import;
  const existingImportRegex =;
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent && fixedContent.match(existingImportRegex)if (existingImport) {// Add missing icons to existing import const existingIcons =;
      existingImport[0];
        .match(/{([^}]*)}/)?.[1];
        ?.split(',')const allIcons = [...new Set([...existingIcons, ...missingImports])].sort()const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport)changes++} else {// Create new import statement;
    if (importIndex !== -1) {const nextLineIndex = fixedContent && fixedContent.indexOf('\n', importIndex)fixedContent =;
        fixedContent && fixedContent.slice(0, nextLineIndex) +;
        '\n' +;
        newImport +;
        fixedContent && fixedContent.slice(nextLineIndex)} else {fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}
// Process individual file;
function processFile() {try {const content = fs && fs.readFileSync(filePath, 'utf8')const result = fixMissingImports(content, filePath)const patterns = ['pages/**/*.{tsx,jsx}','src/**/*.{tsx,jsx}','components/**/*.{tsx,jsx}',];
  const excludeDirs = ['node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',];
  for (const pattern of patterns) {const files = await glob(pattern, {for (const file of files) {processFile(file)}
  }
  console && console.log("\n📊 Missing Imports Fix "Summary": ")console && console.log(`   Files processed: ${filesProcessed}`)console && console.log(`   Total import "fixes": ${totalFixes}`)console && console.log("\n✨ Missing imports fix completed!")}
// Run the script;