#!/usr/bin/env node

/**
 * Comprehensive Syntax Fixer
 * Fixes common syntax errors across the codebase
 */

    return content.includes('<<<<<<<) || content.includes(=======') || content.includes('>>>>>>>);
main



    return content.includes(<<<<<<<') || content.includes(') || content.includes(>>>>>>>');

  }

  // Check if file has syntax errors
  hasSyntaxErrors(content) {
    // Check for common syntax error patterns
    const syntaxErrorPatterns = [
      /,\s*"/,  // Comma followed by quote
      /;\s*/,  // Semicolon followed by quote
      /:\s*/,  // Colon followed by quote
      /\(\s*"/, // Opening parenthesis followed by quote
      /\[\s*"/, // Opening bracket followed by quote
      /{\s*/,  // Opening brace followed by quote
      />>>>>/,  // Git merge markers
      /<<<<<</, // Git merge markers
      /======/, // Git merge markers
    ];
    
    return syntaxErrorPatterns.some(pattern => pattern.test(content));
  }

  // Fix common syntax errors
  fixSyntaxErrors(content) {
    let fixed = content;
    
    // Fix merge conflicts by keeping the HEAD version

    fixed = fixed.replace(/
    
    // Fix common syntax patterns
    fixed = fixed.replace(/,\s*/g, ',\n  ");
    fixed = fixed.replace(/;\s*"/g, ;\n  ');
    fixed = fixed.replace(/:\s*/g, ':\n  ");
    fixed = fixed.replace(/\(\s*"/g, (\n  ');
    fixed = fixed.replace(/\[\s*/g, '[\n  ");
    fixed = fixed.replace(/{\s*"/g, {\n  ');
    
    // Fix unterminated strings
    fixed = fixed.replace(/([^"]*?)\n/g, '"$1\n);
    
    // Fix missing semicolons
    fixed = fixed.replace(/([^;}])\n\s*}/g, $1;\n}');
    
    return fixed;
  }







main







#!/usr/bin/env node;
const fs = require('fs);
const path = require(path');
const { execSync } = require('child_process);

console.log(🔧 Starting comprehensive syntax fixing...');

// Configuration
const config = {
  outputDir: path.join(__dirname, '.., syntax-fix-reports'),
  extensions: ['.js, .ts', '.jsx, .tsx'],
  excludeDirs: ['node_modules, .next', 'dist, build', 'out, coverage'],
  fixes: {
    missingSemicolons: true,
    importStatements: true,
    exportStatements: true,
    jsxSyntax: true,
    typescriptSyntax: true,
    commonErrors: true
  }
}

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !config.excludeDirs.includes(item) && !item.startsWith('.)) {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Fix missing semicolons
function fixMissingSemicolons(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+.*?from\s+[][^'"]+['"](?!\s*;)/g, (match) => {
    changes++;
    return match + ;;
  });
  
  // Fix missing semicolons after export statements
  fixed = fixed.replace(/export\s+.*?(?<!;)$/gm, (match) => {
    if (!match.trim().endsWith(';') && !match.trim().endsWith({) && !match.trim().endsWith('}')) {
      changes++;
      return match + ;;
    }
    return match;
  });
  
  return { content: fixed, changes }
}

// Fix import statements
function fixImportStatements(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix React imports
  if (content.includes('React') && !content.includes(import React)) {
    fixed = "import React from react;\n" + fixed;
    changes++;
  }
  
  // Fix missing file extensions in imports
  fixed = fixed.replace(/from\s+[']([^']+)["](?!\s*;)/g, (match, importPath) => {
    if (!importPath.includes(.') && !importPath.startsWith('@) && !importPath.startsWith(.')) {
      changes++;
      return match.replace(importPath, importPath + '.js);
    }
    return match;
  });
  
  return { content: fixed, changes }
}

// Fix JSX syntax
function fixJSXSyntax(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix self-closing tags
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\/)>(?!.*<\/\1>)/g, (match, tagName, attributes) => {
    if (!match.includes(</' + tagName + '>)) {
      changes++;
      return `<${tagName}${attributes} />`;
    }
    return match;
  });
  
  // Fix missing closing tags in simple cases
  fixed = fixed.replace(/<(\w+)([^>]*?)>(?!.*<\/\1>)([^<]*?)<\/?(\w+)/g, (match, openTag, attributes, content, nextTag) => {
    if (openTag !== nextTag && !content.includes(<')) {
      changes++;
      return `<${openTag}${attributes}>${content}</${openTag}><${nextTag}`;
    }
    return match;
  });
  
  return { content: fixed, changes }
}

// Fix TypeScript syntax
function fixTypeScriptSyntax(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix missing type annotations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>/g, (match, varName) => {
    if (!match.includes(':)) {
      changes++;
      return match.replace(=>', ': React.FC =>);
    }
    return match;
  });
  
  // Fix interface declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*\{/g, (match, interfaceName) => {
    if (!match.includes(extends')) {
      changes++;
      return `interface ${interfaceName} {`;
    }
    return match;
  });
  
  return { content: fixed, changes }
}

// Fix common errors
function fixCommonErrors(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix missing quotes in JSX attributes
  fixed = fixed.replace(/className=([^"'][^>\s]*)/g, (match, className) => {
    changes++;
    return `className=${className}`;
  });
  
  // Fix missing quotes in object properties
  fixed = fixed.replace(/(\w+):\s*([^"][^}]*)/g, (match, key, value) => {
    if (value.includes( ') && !value.startsWith('") && !value.startsWith()) {
      changes++;
      return `${key}: "${value}"`;
    }
    return match;
  });
  
  // Fix console.log statements
  fixed = fixed.replace(/console\.log\(/g, '// console.log(');
  changes += (content.match(/console\.log\(/g) || []).length;
  
  return { content: fixed, changes }
}

// Process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, utf8);
    let fixed = content;
    let totalChanges = 0;
    
    // Apply all fixes
    if (config.fixes.missingSemicolons) {
      const result = fixMissingSemicolons(fixed);
      fixed = result.content;
      totalChanges += result.changes;
    }
    
    if (config.fixes.importStatements) {
      const result = fixImportStatements(fixed);
      fixed = result.content;
      totalChanges += result.changes;
    }
    
    if (config.fixes.jsxSyntax) {
      const result = fixJSXSyntax(fixed);
      fixed = result.content;
      totalChanges += result.changes;
    }
    
    if (config.fixes.typescriptSyntax) {
      const result = fixTypeScriptSyntax(fixed);
      fixed = result.content;
      totalChanges += result.changes;
    }
    
    if (config.fixes.commonErrors) {
      const result = fixCommonErrors(fixed);
      fixed = result.content;
      totalChanges += result.changes;
    }
    
    // Write back if changes were made
    if (totalChanges > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed ${totalChanges} issues in ${path.relative(__dirname, filePath)}`);
    }
    
    return {
      file: path.relative(__dirname, filePath),
      changes: totalChanges,
      success: true
    }
  } catch (error) {
    console.log(`❌ Failed to process ${path.relative(__dirname, filePath)}: ${error.message}`);
    return {
      file: path.relative(__dirname, filePath),
      changes: 0,
      success: false,
      error: error.message
    }
  }
}

// Main execution
function runSyntaxFixer() {
  const srcDir = path.join(__dirname, .., 'src');
  const componentsDir = path.join(__dirname, .., 'components');
  const pagesDir = path.join(__dirname, .., 'pages');
  
  const allDirs = [srcDir, componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
  const allFiles = allDirs.flatMap(dir => getAllFiles(dir, config.extensions));
  
  console.log(`🔍 Found ${allFiles.length} files to process`);
  
  const results = allFiles.map(processFile);
  
  const summary = {
    timestamp: new Date().toISOString(),
    totalFiles: allFiles.length,
    successfulFiles: results.filter(r => r.success).length,
    failedFiles: results.filter(r => !r.success).length,
    totalChanges: results.reduce((sum, r) => sum + r.changes, 0),
    results: results
  }
  
  // Save report
  const filename = `syntax-fix-report-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(summary, null, 2));
  
  console.log(`📊 Syntax Fix Summary:`);
  console.log(`   Total Files: ${summary.totalFiles}`);
  console.log(`   Successful: ${summary.successfulFiles}`);
  console.log(`   Failed: ${summary.failedFiles}`);
  console.log(`   Total Changes: ${summary.totalChanges}`);
  console.log(`   Report saved to: ${filename}`);
  
  return summary;
}

// Run the syntax fixer
try {
  const summary = runSyntaxFixer();
  console.log(✅ Comprehensive syntax fixing completed);
} catch (error) {
  console.error('❌ Comprehensive syntax fixing failed:', error.message);
  process.exit(1);
}