#!/usr/bin/env node;
import fs from "fs";";
import path from "path";";
import { fileURLToPath   } from "url";";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files;
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and other common directories;
      if (!['node_modules', '.git', '.next', 'dist', 'out', 'build'].includes(file)) {';
        getAllFiles(fullPath, arrayOfFiles);
      };
    } else {
      // Only process TypeScript, JavaScript, and JSX files;
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix HTML entities;
function fixHtmlEntities(content) {
  let fixed = content;
  let fixesApplied = 0;

  // HTML entity mappings;
  const entityMap = {
    ''': "'",'";
    '"': '"','";
    '<': '<',';
    '>': '>',';
    '&': '&',';
    ''': "'",'";
    ''': "'",'";
    ''': "'",'";
    '"': '"','";
    '"': '"','";
    '...': '...',';
    '–': '–',';
    '—': '—',';
    ' ': ' ',';
    '©': '©',';
    '®': '®',';
    '™': '™',';
  };

  // Fix HTML entities;
  Object.entries(entityMap).forEach(([entity, replacement]) => {
    const before = fixed;
    fixed = fixed.replace(new RegExp(entity, 'g'), replacement);';
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed quotes and strings;
  fixed = fixed.replace(/'([^']*?)'/g, "'$1'");'";
  fixed = fixed.replace(/"([^"]*?)"/g, '"$1"');'";
  // Fix extra quotes at end of lines;
  fixed = fixed.replace(/;/g, ';);';
  fixed = fixed.replace(/;/g, ';);';
  // Fix malformed imports;
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'import { $1   } from "$2";);'";
  fixed = fixed.replace(/import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"];?/g, 'import $1 from "$2";);'";
  // Fix malformed exports;
  fixed = fixed.replace(/export\s+default\s+([^;]+);?/g, 'export default $1;);';
  // Fix malformed function calls;
  fixed = fixed.replace(/resolve\(__dirname,\s*['"]([^'"]+)['"]\)/g, 'resolve(__dirname, "$1")');'";
  // Fix extra semicolons;
  fixed = fixed.replace(/;+/g, ';);';
  // Fix malformed JSX;
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\s)\s*>/g, '<////$1$2>');';
  return { content: fixed, fixesApplied };
}

// Main function;
function main() {
  console.log('🔍 Scanning for files with HTML entities...');';
  const allFiles = getAllFiles(process.cwd());
  let totalFixes = 0;
  let filesProcessed = 0;

  allFiles.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');';
      const { content: fixedContent, fixesApplied } = fixHtmlEntities(originalContent);
      
      if (fixesApplied > 0) {
        fs.writeFileSync(file, fixedContent, 'utf8');';
        console.log(`✅ Fixed ${fixesApplied} HTML entities in ${file}`);`;
        totalFixes += fixesApplied;
        filesProcessed++;
      }
    } catch (error) {
      console.warn(`⚠️  Could not process file ${file}: ${error.message}`);`;
    }
  });

  console.log(`\n🎉 Summary:`);`;
  console.log(`   Files processed: ${filesProcessed}`);`;
  console.log(`   Total fixes applied: ${totalFixes}`);`;
  if (totalFixes > 0) {
    console.log(`\n✨ All HTML entities have been fixed!`);`;
  } else {
    console.log(`\n✨ No HTML entities found to fix.`);`;
  }
}

// Run the script;
main();

export { fixHtmlEntities };