const fs = require('fs');
const path = require('path');

// Get all TypeScript and JSX files
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix unused imports by analyzing actual usage
function fixUnusedImports(content, filePath) {
  let lines = content.split('\n');
  let modified = false;
  
  // Find import lines with lucide-react
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('from "lucide-react"') || line.includes("from 'lucide-react'")) {
      // Extract the import statement
      const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = [];
        
        // Check which imports are actually used in the file
        for (const imp of imports) {
          const cleanImp = imp.replace(/\s+as\s+\w+/, ''); // Remove 'as' aliases
          const aliasMatch = imp.match(/(\w+)\s+as\s+(\w+)/);
          const actualName = aliasMatch ? aliasMatch[2] : cleanImp;
          
          // Check if the import is used in the file (excluding the import line itself)
          const fileContent = content.replace(line, '');
          if (fileContent.includes(`<${actualName}`) || fileContent.includes(`{${actualName}`) || fileContent.includes(`${actualName}.`)) {
            usedImports.push(imp);
          }
        }
        
        if (usedImports.length !== imports.length) {
          if (usedImports.length === 0) {
            // Remove the entire import line
            lines[i] = '';
          } else {
            // Update the import line with only used imports
            lines[i] = `import { ${usedImports.join(', ')} } from "lucide-react";`;
          }
          modified = true;
        }
      }
    }
  }
  
  return { content: lines.join('\n'), modified };
}

// Fix unescaped entities more carefully - only in JSX text content
function fixUnescapedEntities(content) {
  let modified = false;
  
  // Fix apostrophes in JSX text content (not in strings or attributes)
  // Look for patterns like: >text with 'apostrophe'< or >text with 'apostrophe' and more text<
  content = content.replace(/(?<=>)([^<]*?)'([^<]*?)(?=<)/g, (match, before, after) => {
    // Only replace if it's not already escaped and not in a string literal
    if (!before.includes('&apos;') && !before.includes('&#39;') && !before.includes('&lsquo;') && !before.includes('&rsquo;')) {
      return before + '&apos;' + after;
    }
    return match;
  });
  
  // Fix quotes in JSX text content
  content = content.replace(/(?<=>)([^<]*?)"([^<]*?)(?=<)/g, (match, before, after) => {
    // Only replace if it's not already escaped and not in a string literal
    if (!before.includes('&quot;') && !before.includes('&#34;') && !before.includes('&ldquo;') && !before.includes('&rdquo;')) {
      return before + '&quot;' + after;
    }
    return match;
  });
  
  return { content, modified: true };
}

// Fix unused variables
function fixUnusedVariables(content) {
  let modified = false;
  
  // Remove unused error variables in catch blocks
  const originalContent = content;
  content = content.replace(/catch\s*\(\s*error\s*\)\s*{/g, 'catch {');
  modified = content !== originalContent;
  
  return { content, modified };
}

// Main function
function fixAllLintIssues() {
  console.log('🔍 Finding all TypeScript/JSX files...');
  const files = getAllFiles('/workspace/app');
  
  console.log(`📁 Found ${files.length} files to process`);
  
  let totalModified = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Apply all fixes
      const unusedImportsResult = fixUnusedImports(newContent, file);
      if (unusedImportsResult.modified) {
        newContent = unusedImportsResult.content;
        modified = true;
      }
      
      const entitiesResult = fixUnescapedEntities(newContent);
      if (entitiesResult.modified) {
        newContent = entitiesResult.content;
        modified = true;
      }
      
      const variablesResult = fixUnusedVariables(newContent);
      if (variablesResult.modified) {
        newContent = variablesResult.content;
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, newContent, 'utf8');
        totalModified++;
        console.log(`✅ Fixed: ${path.relative('/workspace', file)}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n🎉 Fixed ${totalModified} files`);
  return totalModified;
}

// Run the fix
if (require.main === module) {
  fixAllLintIssues();
}

module.exports = { fixAllLintIssues };