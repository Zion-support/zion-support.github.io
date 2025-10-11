const fs = require('fs');
const path = require('path');

// Function to fix specific issues in TSX files
function fixTSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused imports
    const unusedImports = ['CheckCircle', 'Helmet', 'Navigation', 'Footer'];
    for (const importName of unusedImports) {
      if (content.includes(`'${importName}' is defined but never used`) || 
          (content.includes(importName) && !content.includes(`<${importName}`) && !content.includes(`${importName}.`))) {
        
        // Remove from import statements
        content = content.replace(new RegExp(`,\\s*${importName}`, 'g'), '');
        content = content.replace(new RegExp(`${importName},\\s*`, 'g'), '');
        content = content.replace(new RegExp(`{\\s*${importName}\\s*}`, 'g'), '{}');
        content = content.replace(new RegExp(`{\\s*${importName}\\s*,`, 'g'), '{');
        content = content.replace(new RegExp(`,\\s*${importName}\\s*}`, 'g'), '}');
        
        // Clean up empty import statements
        content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
        content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');
        
        modified = true;
      }
    }

    // Fix missing variable declarations and syntax errors
    if (content.includes('Expected an assignment or function call')) {
      // Look for object literals that should be in arrays
      const lines = content.split('\n');
      let inComponent = false;
      let braceCount = 0;
      let needsDeclaration = false;
      let currentLine = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('const') && line.includes('= () => {')) {
          inComponent = true;
          braceCount = 1;
          currentLine = i;
          continue;
        }
        
        if (inComponent) {
          if (line.includes('{')) braceCount++;
          if (line.includes('}')) braceCount--;
          
          // Check for object literals without proper declaration
          if (line.trim().startsWith('{') && !line.includes('const') && !line.includes('let') && !line.includes('var') && !line.includes('=')) {
            needsDeclaration = true;
            break;
          }
          
          if (braceCount === 0) {
            inComponent = false;
          }
        }
      }
      
      if (needsDeclaration) {
        // Add proper variable declaration
        const componentMatch = content.match(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/);
        if (componentMatch) {
          const componentName = componentMatch[1];
          content = content.replace(
            new RegExp(`const\\s+${componentName}\\s*=\\s*\\(\\)\\s*=>\\s*{\\s*\\n\\s*{`),
            `const ${componentName} = () => {\n  const features = [\n    {`
          );
          modified = true;
        }
      }
    }

    // Fix missing semicolons and brackets
    content = content.replace(/\s*]\s*\n\s*{/g, '  ];\n  const services = [\n    {');
    content = content.replace(/\s*]\s*\n\s*'[^']*',/g, '  ];\n  const standards = [\n    \'');
    content = content.replace(/\s*]\s*\n\s*{\s*icon:/g, '  ];\n  const benefits = [\n    {\n      icon:');

    // Fix parsing errors with semicolons
    content = content.replace(/(\w+)\s*\n\s*{/g, '$1;\n  const services = [\n    {');
    content = content.replace(/(\w+)\s*\n\s*'[^']*',/g, '$1;\n  const standards = [\n    \'');

    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');

    // Fix missing closing brackets and semicolons
    if (content.includes('const features = [') && !content.includes('];')) {
      content = content.replace(/(\s*}\s*)\n\s*const services = \[/, '$1\n  ];\n  const services = [');
    }

    // Fix unused variables
    if (content.includes('is assigned a value but never used')) {
      // Add usage of the variable or remove it
      if (content.includes('const features = [')) {
        // Add a simple usage
        content = content.replace(
          /const features = \[[\s\S]*?\];/,
          (match) => match + '\n  // Features array defined'
        );
      }
    }

    // Clean up empty lines and fix formatting
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/{\s*\n\s*}/g, '{}');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixTSXFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Run the fix
console.log('Starting comprehensive fix of TSX files...');
const fixedCount = fixAllTSXFiles('./app');
console.log(`Fixed ${fixedCount} files.`);