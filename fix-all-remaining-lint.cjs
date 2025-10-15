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

// Fix unused imports
function fixUnusedImports(content) {
  let lines = content.split('\n');
  let modified = false;
  
  // Find import lines with lucide-react
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('from "lucide-react"') || line.includes("from 'lucide-react'")) {
      const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = [];
        
        for (const imp of imports) {
          const cleanImp = imp.replace(/\s+as\s+\w+/, '');
          const aliasMatch = imp.match(/(\w+)\s+as\s+(\w+)/);
          const actualName = aliasMatch ? aliasMatch[2] : cleanImp;
          
          const fileContent = content.replace(line, '');
          if (fileContent.includes(`<${actualName}`) || fileContent.includes(`{${actualName}`) || fileContent.includes(`${actualName}.`)) {
            usedImports.push(imp);
          }
        }
        
        if (usedImports.length !== imports.length) {
          if (usedImports.length === 0) {
            lines[i] = '';
          } else {
            lines[i] = `import { ${usedImports.join(', ')} } from "lucide-react";`;
          }
          modified = true;
        }
      }
    }
  }
  
  return { content: lines.join('\n'), modified };
}

// Fix unused React imports
function fixUnusedReactImports(content) {
  let modified = false;
  
  // Remove unused React imports
  if (content.includes('import React') && !content.includes('<React.') && !content.includes('React.')) {
    content = content.replace(/import React[^;]*;\n?/g, '');
    modified = true;
  }
  
  // Remove unused React hooks
  const unusedHooks = ['useState', 'useEffect', 'useRef', 'useCallback', 'useMemo'];
  for (const hook of unusedHooks) {
    if (content.includes(`import { ${hook}`) && !content.includes(hook)) {
      content = content.replace(new RegExp(`import\\s*\\{[^}]*\\b${hook}\\b[^}]*\\}\\s*from\\s*["']react["'];?\\n?`, 'g'), '');
      modified = true;
    }
  }
  
  return { content, modified };
}

// Fix unescaped entities - only in JSX text content
function fixUnescapedEntities(content) {
  let modified = false;
  
  // Fix apostrophes in JSX text content only
  const apostropheRegex = /(?<=>)([^<]*?)'([^<]*?)(?=<)/g;
  content = content.replace(apostropheRegex, (match, before, after) => {
    if (!before.includes('&apos;') && !before.includes('&#39;') && !before.includes('&lsquo;') && !before.includes('&rsquo;') &&
        !before.includes('"') && !after.includes('"') && !before.includes("'") && !after.includes("'")) {
      return before + '&apos;' + after;
    }
    return match;
  });
  
  // Fix quotes in JSX text content only
  const quoteRegex = /(?<=>)([^<]*?)"([^<]*?)(?=<)/g;
  content = content.replace(quoteRegex, (match, before, after) => {
    if (!before.includes('&quot;') && !before.includes('&#34;') && !before.includes('&ldquo;') && !before.includes('&rdquo;') &&
        !before.includes("'") && !after.includes("'") && !before.includes('"') && !after.includes('"')) {
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
  
  // Remove unused variable declarations
  content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*(?=\n[^=]*$)/g, (match, varName) => {
    // Check if the variable is used anywhere in the file
    const fileContent = content.replace(match, '');
    if (!fileContent.includes(varName)) {
      return '';
    }
    return match;
  });
  
  return { content, modified };
}

// Fix missing imports
function fixMissingImports(content) {
  let modified = false;
  
  // Add missing Shield import if used but not imported
  if (content.includes('<Shield') && !content.includes('import') && !content.includes('Shield')) {
    const importMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      if (!imports.includes('Shield')) {
        imports.push('Shield');
        content = content.replace(importMatch[0], `import { ${imports.join(', ')} } from "lucide-react";`);
        modified = true;
      }
    }
  }
  
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
      const unusedImportsResult = fixUnusedImports(newContent);
      if (unusedImportsResult.modified) {
        newContent = unusedImportsResult.content;
        modified = true;
      }
      
      const reactImportsResult = fixUnusedReactImports(newContent);
      if (reactImportsResult.modified) {
        newContent = reactImportsResult.content;
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
      
      const missingImportsResult = fixMissingImports(newContent);
      if (missingImportsResult.modified) {
        newContent = missingImportsResult.content;
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