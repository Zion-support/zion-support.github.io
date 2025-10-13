const fs = require('fs');
const { execSync } = require('child_process');

console.log('Fixing all unused imports...');

// Get all TypeScript/JavaScript files
const files = execSync('find app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Get ESLint output for this file
    let eslintOutput = '';
    try {
      eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { encoding: 'utf8', stdio: 'pipe' }).trim();
    } catch (e) {
      // File might have syntax errors, skip
      return;
    }
    
    if (!eslintOutput) return;
    
    try {
      const eslintResults = JSON.parse(eslintOutput);
      const unusedVars = new Set();
      
      eslintResults.forEach(result => {
        result.messages.forEach(message => {
          if (message.ruleId === '@typescript-eslint/no-unused-vars' && message.message.includes('is defined but never used')) {
            const varName = message.message.match(/'([^']+)' is defined but never used/)?.[1];
            if (varName) {
              unusedVars.add(varName);
            }
          }
        });
      });
      
      if (unusedVars.size > 0) {
        console.log(`Processing ${filePath}: removing ${unusedVars.size} unused imports`);
        
        // Process import lines
        const newLines = lines.map(line => {
          // Skip non-import lines
          if (!line.trim().startsWith('import ')) return line;
          
          // Handle single-line imports
          if (line.includes('from "lucide-react"') || line.includes('from \'lucide-react\'')) {
            // Extract the import part
            const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
            if (importMatch) {
              const imports = importMatch[1]
                .split(',')
                .map(imp => imp.trim())
                .filter(imp => !unusedVars.has(imp));
              
              if (imports.length === 0) {
                return ''; // Remove the entire import line
              } else {
                return line.replace(importMatch[0], `import { ${imports.join(', ')} } from "lucide-react"`);
              }
            }
          }
          
          // Handle other imports
          if (line.includes('from "react-router-dom"') || line.includes('from \'react-router-dom\'')) {
            if (unusedVars.has('Link')) {
              return ''; // Remove the entire import line
            }
          }
          
          if (line.includes('from "react-helmet-async"') || line.includes('from \'react-helmet-async\'')) {
            if (unusedVars.has('Helmet')) {
              return ''; // Remove the entire import line
            }
          }
          
          return line;
        }).filter(line => line !== '');
        
        // Write the fixed content back
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log(`✓ Fixed ${filePath}`);
        fixedCount++;
      }
    } catch (e) {
      console.log(`⚠ Could not parse ESLint output for ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠ Error processing ${filePath}: ${error.message}`);
  }
});

console.log(`Done! Fixed ${fixedCount} files`);