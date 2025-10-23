const fs = require('fs');
const path = require('path');

// Function to fix JSX attributes
function fixJSXAttributes(content) {
  let fixed = content;
  
  // Fix corrupted JSX attributes
  fixed = fixed.replace(/class Nam e=/g, 'className=');
  fixed = fixed.replace(/htmllang=/g, 'html lang=');
  fixed = fixed.replace(/<htmllang=/g, '<html lang=');
  fixed = fixed.replace(/<\/bod>/g, '</body>');
  fixed = fixed.replace(/<bod>/g, '<body>');
  
  // Fix corrupted className values
  fixed = fixed.replace(/className=\"([^"]*)\s+([^"]*)\"/g, 'className="$1$2"');
  fixed = fixed.replace(/className=\"([^"]*)\s+(\d+)\s+([^"]*)\"/g, 'className="$1$2$3"');
  
  // Fix corrupted JSX elements
  fixed = fixed.replace(/<(\w+)\s+(\w+)=/g, '<$1 $2=');
  fixed = fixed.replace(/<(\w+)\s+(\w+)\s+(\w+)=/g, '<$1 $2$3=');
  
  // Fix corrupted closing tags
  fixed = fixed.replace(/<\/(\w+)\s+(\w+)>/g, '</$1>');
  fixed = fixed.replace(/<\/(\w+)\s+(\w+)\s+(\w+)>/g, '</$1>');
  
  // Fix corrupted self-closing tags
  fixed = fixed.replace(/<(\w+)\s+(\w+)\s*\/>/g, '<$1 $2 />');
  fixed = fixed.replace(/<(\w+)\s+(\w+)\s+(\w+)\s*\/>/g, '<$1 $2$3 />');
  
  // Fix corrupted attribute values
  fixed = fixed.replace(/=\"([^"]*)\s+([^"]*)\"/g, '="$1$2"');
  fixed = fixed.replace(/=\"([^"]*)\s+(\d+)\s+([^"]*)\"/g, '="$1$2$3"');
  
  // Fix corrupted string literals in JSX
  fixed = fixed.replace(/\"([^"]*)\s+([^"]*)\"/g, '"$1$2"');
  fixed = fixed.replace(/\"([^"]*)\s+(\d+)\s+([^"]*)\"/g, '"$1$2$3"');
  
  // Fix corrupted template literals in JSX
  fixed = fixed.replace(/`([^`]*)\s+([^`]*)`/g, '`$1$2`');
  fixed = fixed.replace(/`([^`]*)\s+(\d+)\s+([^`]*)`/g, '`$1$2$3`');
  
  // Fix corrupted JSX expressions
  fixed = fixed.replace(/\{\s*([^}]*)\s+([^}]*)\s*\}/g, '{$1$2}');
  fixed = fixed.replace(/\{\s*([^}]*)\s+(\d+)\s+([^}]*)\s*\}/g, '{$1$2$3}');
  
  // Fix corrupted JSX comments
  fixed = fixed.replace(/\/\*\s*([^*]*)\s+([^*]*)\s*\*\//g, '/* $1$2 */');
  fixed = fixed.replace(/\/\*\s*([^*]*)\s+(\d+)\s+([^*]*)\s*\*\//g, '/* $1$2$3 */');
  
  // Fix corrupted JSX fragments
  fixed = fixed.replace(/<>\s*([^<]*)\s+([^<]*)\s*<\/>/g, '<>$1$2</>');
  fixed = fixed.replace(/<>\s*([^<]*)\s+(\d+)\s+([^<]*)\s*<\/>/g, '<>$1$2$3</>');
  
  // Fix corrupted JSX props
  fixed = fixed.replace(/(\w+)\s+(\w+)\s*=/g, '$1$2=');
  fixed = fixed.replace(/(\w+)\s+(\w+)\s+(\w+)\s*=/g, '$1$2$3=');
  
  // Fix corrupted JSX children
  fixed = fixed.replace(/>\s*([^<]*)\s+([^<]*)\s*</g, '>$1$2<');
  fixed = fixed.replace(/>\s*([^<]*)\s+(\d+)\s+([^<]*)\s*</g, '>$1$2$3<');
  
  // Fix corrupted JSX text content
  fixed = fixed.replace(/>\s*([^<]*)\s+([^<]*)\s*</g, '>$1$2<');
  fixed = fixed.replace(/>\s*([^<]*)\s+(\d+)\s+([^<]*)\s*</g, '>$1$2$3<');
  
  // Fix corrupted JSX conditional rendering
  fixed = fixed.replace(/\{\s*([^}]*)\s+&&\s+([^}]*)\s*\}/g, '{$1 && $2}');
  fixed = fixed.replace(/\{\s*([^}]*)\s+\?\s+([^}]*)\s*:\s+([^}]*)\s*\}/g, '{$1 ? $2 : $3}');
  
  // Fix corrupted JSX map functions
  fixed = fixed.replace(/\.map\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.map($1 => $2)');
  fixed = fixed.replace(/\.map\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.map($1 => $2 => $3)');
  
  // Fix corrupted JSX filter functions
  fixed = fixed.replace(/\.filter\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.filter($1 => $2)');
  fixed = fixed.replace(/\.filter\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.filter($1 => $2 => $3)');
  
  // Fix corrupted JSX reduce functions
  fixed = fixed.replace(/\.reduce\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.reduce($1 => $2)');
  fixed = fixed.replace(/\.reduce\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.reduce($1 => $2 => $3)');
  
  // Fix corrupted JSX forEach functions
  fixed = fixed.replace(/\.forEach\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.forEach($1 => $2)');
  fixed = fixed.replace(/\.forEach\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.forEach($1 => $2 => $3)');
  
  // Fix corrupted JSX find functions
  fixed = fixed.replace(/\.find\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.find($1 => $2)');
  fixed = fixed.replace(/\.find\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.find($1 => $2 => $3)');
  
  // Fix corrupted JSX some functions
  fixed = fixed.replace(/\.some\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.some($1 => $2)');
  fixed = fixed.replace(/\.some\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.some($1 => $2 => $3)');
  
  // Fix corrupted JSX every functions
  fixed = fixed.replace(/\.every\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.every($1 => $2)');
  fixed = fixed.replace(/\.every\s*\(\s*([^)]*)\s+=>\s+([^)]*)\s+=>\s+([^)]*)\s*\)/g, '.every($1 => $2 => $3)');
  
  return fixed;
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to fix prefer-const issues
function fixPreferConst(content) {
  return content.replace(/let\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*never\s+reassigned/g, (match, varName) => {
    return match.replace(/let/, 'const');
  });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix JSX attributes
    const contentWithJSX = fixJSXAttributes(content);
    if (contentWithJSX !== content) {
      content = contentWithJSX;
      modified = true;
    }
    
    // Remove console statements
    const contentWithoutConsole = removeConsoleStatements(content);
    if (contentWithoutConsole !== content) {
      content = contentWithoutConsole;
      modified = true;
    }
    
    // Fix prefer-const issues
    const contentWithConst = fixPreferConst(content);
    if (contentWithConst !== content) {
      content = contentWithConst;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

let totalFixed = 0;

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findTsxFiles(srcDir);
  console.log(`Processing ${srcFiles.length} files in src directory...`);
  
  for (const file of srcFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findTsxFiles(appDir);
  console.log(`Processing ${appFiles.length} files in app directory...`);
  
  for (const file of appFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);