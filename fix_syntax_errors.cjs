#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to find all TypeScript/JavaScript files
function findTSFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to fix syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix commented JSX elements that are causing syntax errors
    const lines = content.split('\n');
    const fixedLines = lines.map((line, index) => {
      const trimmed = line.trim();
      
      // Fix lines that start with // but contain JSX-like content
      if (trimmed.startsWith('//') && (trimmed.includes('<') || trimmed.includes('{') || trimmed.includes('}'))) {
        // Check if this is a commented JSX element
        if (trimmed.includes('<') && (trimmed.includes('title=') || trimmed.includes('description=') || trimmed.includes('canonical=') || trimmed.includes('EnhancedSEO') || trimmed.includes('404') || trimmed.includes('</div>') || trimmed.includes('</span>') || trimmed.includes('</h1>') || trimmed.includes('</h2>') || trimmed.includes('</h3>') || trimmed.includes('</p>') || trimmed.includes('</button>') || trimmed.includes('</a>') || trimmed.includes('</Link>'))) {
          // Remove the comment and fix the JSX
          const uncommented = trimmed.substring(2).trim();
          if (uncommented.startsWith('<') || uncommented.startsWith('{') || uncommented.startsWith('}')) {
            modified = true;
            return uncommented;
          }
        }
      }
      
      // Fix lines that are just variable names (unused expressions)
      if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('*') && !trimmed.startsWith('import') && !trimmed.startsWith('export') && !trimmed.includes('=') && !trimmed.includes('(') && !trimmed.includes('{') && !trimmed.includes('}') && !trimmed.includes(';') && !trimmed.includes('return') && !trimmed.includes('if') && !trimmed.includes('for') && !trimmed.includes('while') && !trimmed.includes('const') && !trimmed.includes('let') && !trimmed.includes('var') && !trimmed.includes('function') && !trimmed.includes('class') && !trimmed.includes('interface') && !trimmed.includes('type') && !trimmed.includes('enum') && !trimmed.includes('<') && !trimmed.includes('>') && !trimmed.includes('//') && !trimmed.includes('*') && !trimmed.includes('/*') && !trimmed.includes('*/')) {
        // This looks like an unused variable, comment it out
        modified = true;
        return `// ${line}`;
      }
      
      return line;
    });
    
    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific common issues
function fixCommonIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing imports
    if (content.includes('EnhancedSEO') && !content.includes("import EnhancedSEO")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import EnhancedSEO from "../components/EnhancedSEO";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (content.includes('StructuredData') && !content.includes("import StructuredData")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import StructuredData from "../components/StructuredData";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (content.includes('ResponsiveContainer') && !content.includes("import ResponsiveContainer")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import ResponsiveContainer from "../components/ResponsiveContainer";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (content.includes('FuturisticButton') && !content.includes("import FuturisticButton")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import FuturisticButton from "../components/FuturisticButton";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (content.includes('FuturisticCard') && !content.includes("import FuturisticCard")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import FuturisticCard from "../components/FuturisticCard";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (content.includes('FuturisticText') && !content.includes("import FuturisticText")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import FuturisticText from "../components/FuturisticText";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (content.includes('FuturisticBackground') && !content.includes("import FuturisticBackground")) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.trim().startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex + 1, 0, 'import FuturisticBackground from "../components/FuturisticBackground";');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing common issues in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Finding TypeScript/JavaScript files...');
  
  const files = findTSFiles(process.cwd());
  console.log(`📁 Found ${files.length} files to process`);
  
  console.log('\n🔧 Fixing syntax errors and common issues...');
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      const syntaxFixed = fixSyntaxErrors(filePath);
      const commonFixed = fixCommonIssues(filePath);
      
      if (syntaxFixed || commonFixed) {
        fixedCount++;
        console.log(`  ✅ Fixed: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`  ❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Files fixed: ${fixedCount}`);
  console.log(`  ❌ Errors: ${errorCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🎉 Syntax fixes completed! You can now run your build and lint commands again.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { findTSFiles, fixSyntaxErrors, fixCommonIssues };