const fs = require('fs');
const path = require('path');

// Find all page.tsx files with missing imports
const appDir = './app';
const filesToFix = [];

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath);
    } else if (file === 'page.tsx') {
      const content = fs.readFileSync(filePath, 'utf8');
      // Check for common missing imports
      if (content.includes('CheckCircle') && !content.includes('import.*CheckCircle')) {
        filesToFix.push(filePath);
      }
    }
  }
}

findFiles(appDir);

console.log(`Found ${filesToFix.length} files with missing imports:`);
filesToFix.forEach(file => console.log(file));

// Fix each file
filesToFix.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Get current imports
  const importMatch = content.match(/import.*from.*['"];?\s*\n/);
  if (importMatch) {
    const currentImports = importMatch[0];
    let newImports = currentImports;
    
    // Add missing imports
    const missingImports = [];
    if (content.includes('CheckCircle') && !content.includes('CheckCircle')) {
      missingImports.push('CheckCircle');
    }
    if (content.includes('Star') && !content.includes('Star')) {
      missingImports.push('Star');
    }
    if (content.includes('Cpu') && !content.includes('Cpu')) {
      missingImports.push('Cpu');
    }
    if (content.includes('BarChart3') && !content.includes('BarChart3')) {
      missingImports.push('BarChart3');
    }
    if (content.includes('Zap') && !content.includes('Zap')) {
      missingImports.push('Zap');
    }
    if (content.includes('Shield') && !content.includes('Shield')) {
      missingImports.push('Shield');
    }
    if (content.includes('Users') && !content.includes('Users')) {
      missingImports.push('Users');
    }
    if (content.includes('TrendingUp') && !content.includes('TrendingUp')) {
      missingImports.push('TrendingUp');
    }
    if (content.includes('Bot') && !content.includes('Bot')) {
      missingImports.push('Bot');
    }
    if (content.includes('Database') && !content.includes('Database')) {
      missingImports.push('Database');
    }
    if (content.includes('Settings') && !content.includes('Settings')) {
      missingImports.push('Settings');
    }
    if (content.includes('Target') && !content.includes('Target')) {
      missingImports.push('Target');
    }
    
    if (missingImports.length > 0) {
      // Extract existing imports from lucide-react
      const lucideMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (lucideMatch) {
        const existingImports = lucideMatch[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...existingImports, ...missingImports])];
        newImports = content.replace(
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
          `import { ${allImports.join(', ')} } from 'lucide-react'`
        );
      } else {
        // Add new import line
        const insertPoint = importMatch.index + importMatch[0].length;
        const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
        newImports = content.slice(0, insertPoint) + newImport + content.slice(insertPoint);
      }
      
      content = newImports;
    }
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed imports in: ${filePath}`);
});

console.log('All missing imports fixed!');
