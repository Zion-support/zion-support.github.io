const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all page.tsx files that import Suspense but don't use it
const findFilesWithUnusedSuspense = () => {
  try {
    const result = execSync('find app -name "page.tsx" -exec grep -l "import.*Suspense" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

// Check if Suspense is actually used in the file
const isSuspenseUsed = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Look for Suspense usage (not just import)
    const lines = content.split('\n');
    let hasImport = false;
    let hasUsage = false;
    
    for (const line of lines) {
      if (line.includes('import') && line.includes('Suspense')) {
        hasImport = true;
      }
      if (hasImport && line.includes('<Suspense') && !line.includes('import')) {
        hasUsage = true;
        break;
      }
    }
    
    return hasImport && !hasUsage;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return false;
  }
};

// Remove unused Suspense import
const removeUnusedSuspenseImport = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const updatedLines = lines.filter(line => {
      // Remove lines that import Suspense but don't use it
      if (line.includes('import') && line.includes('Suspense') && !line.includes('<Suspense')) {
        // Check if this line only imports Suspense
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          if (imports.length === 1 && imports[0] === 'Suspense') {
            return false; // Remove this line
          } else {
            // Remove Suspense from the import list
            const newImports = imports.filter(imp => imp !== 'Suspense').join(', ');
            return line.replace(/import\s*{[^}]+}\s*from/, `import { ${newImports} } from`);
          }
        }
        return false; // Remove the line
      }
      return true;
    });
    
    const updatedContent = updatedLines.join('\n');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding files with unused Suspense imports...');
  const files = findFilesWithUnusedSuspense();
  console.log(`Found ${files.length} files with Suspense imports`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    if (isSuspenseUsed(file)) {
      if (removeUnusedSuspenseImport(file)) {
        fixedCount++;
      } else {
        errorCount++;
      }
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('Done!');
};

main();