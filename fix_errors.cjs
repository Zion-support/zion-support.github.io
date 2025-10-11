const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixTSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused CheckCircle imports
    if (content.includes("'CheckCircle' is defined but never used")) {
      // Remove CheckCircle from imports if it's not used
      content = content.replace(/,\s*CheckCircle/g, '');
      content = content.replace(/CheckCircle,\s*/g, '');
      content = content.replace(/{\s*CheckCircle\s*}/g, '{}');
      modified = true;
    }

    // Fix missing variable declarations
    if (content.includes('const') && content.includes('= () => {') && !content.includes('const features = [')) {
      // Look for patterns like "const ComponentName = () => {" followed by object literals
      const lines = content.split('\n');
      let inComponent = false;
      let braceCount = 0;
      let needsFeatures = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('const') && line.includes('= () => {')) {
          inComponent = true;
          braceCount = 1;
          continue;
        }
        
        if (inComponent) {
          if (line.includes('{')) braceCount++;
          if (line.includes('}')) braceCount--;
          
          // If we find object literals without proper variable declaration
          if (line.trim().startsWith('{') && !line.includes('const') && !line.includes('let') && !line.includes('var')) {
            needsFeatures = true;
            break;
          }
          
          if (braceCount === 0) {
            inComponent = false;
          }
        }
      }
      
      if (needsFeatures) {
        // Add proper variable declarations
        content = content.replace(
          /const\s+\w+\s*=\s*\(\)\s*=>\s*{\s*\n\s*{/,
          'const ComponentName = () => {\n  const features = [\n    {'
        );
        modified = true;
      }
    }

    // Fix missing semicolons and brackets
    content = content.replace(/\s*]\s*\n\s*{/g, '  ];\n  const services = [\n    {');
    content = content.replace(/\s*]\s*\n\s*'[^']*',/g, '  ];\n  const standards = [\n    \'');
    content = content.replace(/\s*]\s*\n\s*{\s*icon:/g, '  ];\n  const benefits = [\n    {\n      icon:');

    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');

    // Fix missing closing brackets
    if (content.includes('const features = [') && !content.includes('];')) {
      content = content.replace(/(\s*}\s*)\n\s*const services = \[/, '$1\n  ];\n  const services = [');
    }

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
console.log('Starting to fix TSX files...');
const fixedCount = fixAllTSXFiles('./app');
console.log(`Fixed ${fixedCount} files.`);