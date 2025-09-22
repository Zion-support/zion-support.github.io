#!/usr/bin/env node
/**
 * Fix All Remaining Syntax Errors
 * Fixes all remaining syntax errors in the project
 */
const fs = require("fs");
const path = require("path");

function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix escaped quotes in import statements
    content = content.replace(/import\s+[^;]+from\s+"([^"]+)";/g, (match, p1) => {
      return match.replace(/"/g, "'");
    });
    
    // Fix duplicate import statements
    const lines = content.split('\n');
    const seenImports = new Set();
    const filteredLines = lines.filter(line => {
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          return false;
        }
        seenImports.add(line.trim());
      }
      return true;
    });
    content = filteredLines.join('\n');
    
    // Fix malformed JSX
    content = content.replace(/<div className="([^"]*)"\s*>\s*}\s*$/gm, '<div className="$1">');
    content = content.replace(/<div className="([^"]*)"\s*>\s*}\s*$/gm, '<div className="$1">');
    
    // Fix extra semicolons in JSX
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix malformed closing tags
    content = content.replace(/<\/div>\s*}\s*\);\s*}\s*$/gm, '</div>\n  );\n}');
    
    // Fix import statements in wrong places
    content = content.replace(/import\s+[^;]+;\s*}\s*$/gm, '}');
    
    // Fix metadata syntax
    content = content.replace(/,\s*}\s*$/gm, '}');
    content = content.replace(/,\s*}\s*;\s*$/gm, '};');
    
    // Fix JSX structure
    content = content.replace(/<h1[^>]*>\s*([^<]+);\s*<\/h1>/g, '<h1$1</h1>');
    content = content.replace(/<h2[^>]*>\s*([^<]+);\s*<\/h2>/g, '<h2$1</h2>');
    content = content.replace(/<h3[^>]*>\s*([^<]+);\s*<\/h3>/g, '<h3$1</h3>');
    
    // Fix anchor tags
    content = content.replace(/<a;\s*href/g, '<a href');
    content = content.replace(/<a;\s*href/g, '<a href');
    
    // Fix button tags
    content = content.replace(/<button;\s*onClick/g, '<button onClick');
    content = content.replace(/<button;\s*onClick/g, '<button onClick');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${filePath}`);
    } else {
      console.log(`No changes needed for ${filePath}`);
    }
    
  } catch (error) {
    console.log(`❌ Failed to fix ${filePath}: ${error.message}`);
  }
}

function fixDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  }
}

function main() {
  console.log("🔧 Starting comprehensive syntax fixing...");
  
  const appDir = path.join(process.cwd(), "app");
  const pagesDir = path.join(process.cwd(), "pages");
  
  if (fs.existsSync(appDir)) {
    console.log("Fixing app directory...");
    fixDirectory(appDir);
  }
  
  if (fs.existsSync(pagesDir)) {
    console.log("Fixing pages directory...");
    fixDirectory(pagesDir);
  }
  
  console.log("✅ Comprehensive syntax fixing completed!");
}

main();