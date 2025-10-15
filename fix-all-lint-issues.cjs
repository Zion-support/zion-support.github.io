const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Common unused imports to remove
const commonUnusedImports = [
  'BarChart3', 'DollarSign', 'Settings', 'Zap', 'Users', 'Lock', 'FileText', 
  'Shield', 'Mail', 'TrendingUp', 'Activity', 'PieChart', 'LineChart',
  'BarChart', 'Calendar', 'Clock', 'Database', 'Globe', 'Home', 'Layers',
  'MapPin', 'Monitor', 'Phone', 'Search', 'Star', 'Target', 'Wifi'
];

// Fix unused imports
function fixUnusedImports(content) {
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
          if (content.includes(cleanImp) && !content.includes(`import.*${cleanImp}`)) {
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

// Fix unescaped entities
function fixUnescapedEntities(content) {
  let modified = false;
  
  // Fix apostrophes
  content = content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&#39;)'(?![^<]*>)/g, '&apos;');
  modified = content !== content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&#39;)'(?![^<]*>)/g, '&apos;');
  
  // Fix quotes
  content = content.replace(/(?<!&)(?<!&#)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&#34;)"(?![^<]*>)/g, '&quot;');
  modified = modified || content !== content.replace(/(?<!&)(?<!&#)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&#34;)"(?![^<]*>)/g, '&quot;');
  
  return { content, modified };
}

// Fix unused variables
function fixUnusedVariables(content) {
  let modified = false;
  
  // Remove unused error variables in catch blocks
  content = content.replace(/catch\s*\(\s*error\s*\)\s*{/g, 'catch {');
  modified = content !== content.replace(/catch\s*\(\s*error\s*\)\s*{/g, 'catch {');
  
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