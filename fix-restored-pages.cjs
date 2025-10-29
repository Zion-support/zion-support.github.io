const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate const features declarations
    if (content.includes('const features = [\n    const features = [')) {
      content = content.replace(/const features = \[\s*const features = \[/g, 'const features = [');
      modified = true;
    }
    
    // Fix duplicate benefits declarations
    if (content.includes('benefits: [')) {
      // Remove duplicate benefits lines
      const lines = content.split('\n');
      const fixedLines = [];
      let inBenefits = false;
      let benefitsCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('benefits: [')) {
          benefitsCount++;
          if (benefitsCount === 1) {
            fixedLines.push(line);
            inBenefits = true;
          } else {
            // Skip duplicate benefits
            continue;
          }
        } else if (inBenefits && line.includes(']')) {
          fixedLines.push(line);
          inBenefits = false;
        } else if (!inBenefits || benefitsCount <= 1) {
          fixedLines.push(line);
        }
      }
      
      if (benefitsCount > 1) {
        content = fixedLines.join('\n');
        modified = true;
      }
    }
    
    // Fix duplicate import statements
    const importLines = content.match(/import.*from 'lucide-react';/g);
    if (importLines && importLines.length > 1) {
      // Keep only the first import
      const firstImport = importLines[0];
      content = content.replace(/import.*from 'lucide-react';\s*/g, '');
      content = content.replace(/import React from 'react';\s*/, `import React from 'react';\n${firstImport}\n`);
      modified = true;
    }
    
    // Fix misplaced imports inside functions
    if (content.includes('const ') && content.includes('import ')) {
      const lines = content.split('\n');
      const imports = [];
      const otherLines = [];
      
      for (const line of lines) {
        if (line.trim().startsWith('import ')) {
          imports.push(line);
        } else {
          otherLines.push(line);
        }
      }
      
      if (imports.length > 0) {
        content = imports.join('\n') + '\n' + otherLines.join('\n');
        modified = true;
      }
    }
    
    // Fix JSX syntax errors
    if (content.includes('const features = [\n    {\n      icon: Brain,')) {
      // This is likely a malformed features array
      const fixedContent = content.replace(
        /const features = \[\s*{\s*icon: Brain,/g,
        'const features = [\n    {\n      icon: Brain,'
      );
      if (fixedContent !== content) {
        content = fixedContent;
        modified = true;
      }
    }
    
    // Fix missing closing brackets
    const openBrackets = (content.match(/\{/g) || []).length;
    const closeBrackets = (content.match(/\}/g) || []).length;
    if (openBrackets > closeBrackets) {
      // Add missing closing brackets
      const missing = openBrackets - closeBrackets;
      content += '\n' + '}'.repeat(missing);
      modified = true;
    }
    
    // Fix duplicate component declarations
    if (content.includes('const ') && content.includes('Page: React.FC')) {
      const lines = content.split('\n');
      const componentLines = lines.filter(line => line.includes('const ') && line.includes('Page: React.FC'));
      if (componentLines.length > 1) {
        // Keep only the first component declaration
        const firstComponent = componentLines[0];
        const componentName = firstComponent.match(/const (\w+):/)[1];
        content = content.replace(new RegExp(`const ${componentName}: React.FC = \\(\\) => \\{[^}]*\\}`, 'g'), '');
        content = firstComponent + '\n' + content.replace(firstComponent, '');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} page.tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixPageFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);