import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
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
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Run ESLint with --fix to automatically remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      console.log(`Fixed unused imports in: ${filePath}`);
    } catch (error) {
      // If ESLint fails, try to manually remove obvious unused imports
      console.log(`ESLint couldn't auto-fix: ${filePath}`);
      
      // Manual fix for common patterns
      let newContent = content;
      
      // Remove unused variable assignments
      newContent = newContent.replace(/const\s+\w+\s*=\s*\[[^\]]*\];\s*$/gm, '');
      newContent = newContent.replace(/const\s+\w+\s*=\s*\{[^}]*\};\s*$/gm, '');
      
      // Remove unused imports
      const lines = newContent.split('\n');
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip lines that are just unused imports
        if (line.trim().startsWith('import') && line.includes('{') && line.includes('}')) {
          const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["']/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const source = importMatch[2];
            
            // Check which imports are actually used
            const usedImports = [];
            for (const imp of imports) {
              const importName = imp.replace(/\s+as\s+\w+/, '').trim();
              if (newContent.includes(importName) && !line.includes(importName)) {
                usedImports.push(imp);
              }
            }
            
            if (usedImports.length === 0) {
              // Skip this import line
              continue;
            } else if (usedImports.length < imports.length) {
              // Keep only used imports
              newLines.push(`import { ${usedImports.join(', ')} } from "${source}";`);
              continue;
            }
          }
        }
        
        newLines.push(line);
      }
      
      newContent = newLines.join('\n');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Manually fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(fixUnusedImports);

console.log('All unused imports fix completed');