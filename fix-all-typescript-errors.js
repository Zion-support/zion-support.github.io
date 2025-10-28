import fs from 'fs';
import path from 'path';

function fixAllTypeScriptErrors(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixAllTypeScriptErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove unused ReactNode imports
        if (content.includes("import { ReactNode } from 'react'") && !content.includes('ReactNode')) {
          content = content.replace(/import \{ ReactNode \} from 'react';\n?/g, '');
          modified = true;
        }
        
        // Remove unused memo imports
        if (content.includes("import { memo } from 'react'") && !content.includes('memo(')) {
          content = content.replace(/import \{ memo \} from 'react';\n?/g, '');
          modified = true;
        }
        
        // Remove unused Navigation imports
        if (content.includes("import Navigation from") && !content.includes('<Navigation')) {
          content = content.replace(/import Navigation from[^;]+;\n?/g, '');
          modified = true;
        }
        
        // Remove unused variables in destructuring assignments
        content = content.replace(/const\s*\{([^}]*)\}\s*=/g, (match, destructured) => {
          const vars = destructured.split(',').map(v => v.trim());
          const usedVars = vars.filter(v => content.includes(v) && !v.includes('='));
          if (usedVars.length === 0) {
            return match.replace(destructured, '');
          }
          return match.replace(destructured, usedVars.join(', '));
        });
        
        // Remove unused variables in function parameters
        content = content.replace(/\(([^)]*)\)\s*=>\s*\{[^}]*\}/g, (match, params) => {
          const vars = params.split(',').map(v => v.trim());
          const usedVars = vars.filter(v => content.includes(v) && !v.includes('='));
          if (usedVars.length === 0) {
            return match.replace(params, '');
          }
          return match.replace(params, usedVars.join(', '));
        });
        
        // Remove unused variables in for loops
        content = content.replace(/for\s*\(\s*let\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*[^;]+;\s*[^;]+;\s*[^)]+\)\s*\{[^}]*\}/g, (match, param) => {
          if (!match.includes(param)) {
            return match.replace(new RegExp(`let\\s+${param}\\s*=`, 'g'), 'let _ =');
          }
          return match;
        });
        
        // Remove unused variables in catch blocks
        content = content.replace(/catch\s*\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*\{[^}]*\}/g, (match, param) => {
          if (!match.includes(param)) {
            return match.replace(new RegExp(`\\(\\s*${param}\\s*\\)`, 'g'), '(_)');
          }
          return match;
        });
        
        // Remove unused variables in destructuring with specific patterns
        content = content.replace(/const\s*\{[^}]*,\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\s*=/g, (match, param) => {
          if (!match.includes(param)) {
            return match.replace(new RegExp(`,\\s*${param}`, 'g'), '');
          }
          return match;
        });
        
        // Remove unused variables in function parameters with specific patterns
        content = content.replace(/\([^)]*,\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>\s*\{[^}]*\}/g, (match, param) => {
          if (!match.includes(param)) {
            return match.replace(new RegExp(`,\\s*${param}`, 'g'), '');
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed TypeScript errors in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the app directory
fixAllTypeScriptErrors('./app');
console.log('All TypeScript error fixing completed!');