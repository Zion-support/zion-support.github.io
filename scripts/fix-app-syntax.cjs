#!/usr/bin/env node
/**
 * Fix App Syntax Errors
 * Fixes syntax errors in the app directory
 */
const fs = require("fs");
const path = require("path");

function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix malformed JSX with escaped quotes
    content = content.replace(/className=\\"([^"]*)\\"\s*\/>/g, 'className="$1">');
    content = content.replace(/className=\\"([^"]*)\\"\s*\/>/g, 'className="$1">');
    
    // Fix malformed JSX structure
    content = content.replace(/<div className=\\"([^"]*)\\"\s*\/>\s*<div className=\\"([^"]*)\\"\s*\/>/g, '<div className="$1">\n        <div className="$2">');
    
    // Fix unterminated strings
    content = content.replace(/className=\\"([^"]*)\\"\s*\/>\s*$/gm, 'className="$1">');
    
    // Fix malformed JSX closing tags
    content = content.replace(/\/>\s*}\s*$/gm, '>');
    
    // Fix import statements in wrong places
    content = content.replace(/import\s+[^;]+;\s*}/g, '}');
    
    // Fix metadata syntax
    content = content.replace(/,\s*}\s*$/gm, '}');
    content = content.replace(/,\s*}\s*;\s*$/gm, '};');
    
    // Fix JSX structure
    content = content.replace(/<div className=\\"([^"]*)\\"\s*\/>\s*<div className=\\"([^"]*)\\"\s*\/>\s*<div className=\\"([^"]*)\\"\s*\/>/g, 
      '<div className="$1">\n        <div className="$2">\n          <div className="$3">');
    
    // Fix closing tags
    content = content.replace(/\/>\s*}\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*}/g, '>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}');
    
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
  console.log("🔧 Starting app syntax fixing...");
  
  const appDir = path.join(process.cwd(), "app");
  
  if (!fs.existsSync(appDir)) {
    console.log("App directory not found");
    return;
  }
  
  fixDirectory(appDir);
  console.log("✅ App syntax fixing completed!");
}

main();