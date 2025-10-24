const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix JSX syntax errors in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing tags for JSX fragments
    if (content.includes('return (<>\n') && !content.includes('</>')) {
      // Find the last closing div and add the missing fragment closing tag
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeLastDiv = content.substring(0, lastDivIndex);
        const afterLastDiv = content.substring(lastDivIndex);
        
        // Check if there's already a closing fragment
        if (!beforeLastDiv.includes('</>') && !afterLastDiv.includes('</>')) {
          content = beforeLastDiv + afterLastDiv.replace('</div>', '</div>\n    </>');
          modified = true;
        }
      }
    }

    // Fix missing Footer import if Footer is used but not imported
    if (content.includes('<Footer') && !content.includes('import Footer')) {
      const importMatch = content.match(/import.*from.*react.*;\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        content = content.substring(0, insertIndex) + 
                 'import Footer from "@/components/Footer";\n' + 
                 content.substring(insertIndex);
        modified = true;
      }
    }

    // Fix Head import - replace next/head with next/head (it's already correct)
    // But ensure it's properly imported
    if (content.includes('<Head') && !content.includes('import Head')) {
      const importMatch = content.match(/import.*from.*react.*;\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        content = content.substring(0, insertIndex) + 
                 'import Head from "next/head";\n' + 
                 content.substring(insertIndex);
        modified = true;
      }
    }

    // Fix extra closing div tags
    const divCount = (content.match(/<div/g) || []).length;
    const closingDivCount = (content.match(/<\/div>/g) || []).length;
    
    if (closingDivCount > divCount) {
      // Remove extra closing div tags
      const lines = content.split('\n');
      let divBalance = 0;
      const fixedLines = [];
      
      for (const line of lines) {
        if (line.includes('<div')) {
          divBalance++;
        }
        if (line.includes('</div>')) {
          if (divBalance > 0) {
            divBalance--;
            fixedLines.push(line);
          }
          // Skip extra closing div tags
        } else {
          fixedLines.push(line);
        }
      }
      
      content = fixedLines.join('\n');
      modified = true;
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

// Function to recursively find all .tsx files in app directory
function findTSXFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Remove extra semicolons
  content = content.replace(/;\n;/g, ';');
  content = content.replace(/;\n\nexport/g, ';\n\nexport');
  
  // Fix malformed JSX return statements
  content = content.replace(/return \(\n    <div>/g, 'return (\n    <div>');
  
  // Fix unterminated strings and malformed JSX
  content = content.replace(/content="([^]*)"  \/>/g, 'content=$1 />');
  content = content.replace(/\/>/g, '/>');
  content = content.replace(/<\/Head>\n/g, '</Head>\n');
  content = content.replace(/    <\/>/g, '    </>');
  content = content.replace(/  \);"/g, '  );');
  content = content.replace(/}\"'/g, '}');
  
  // Fix malformed JSX structure - ensure proper wrapping
  content = content.replace(/return \(\n    <div>\n      <Head>/g, 'return (\n    <>\n      <Head>');
  content = content.replace(/      <\/Head>\n      <div className="min-h-screen/g, '      </Head">\n      <div className=min-h-screen');
  
  // Ensure proper closing tags
  content = content.replace(/        <\/div>\n      <\/div>\n    <\/div>/g, '        </div>\n      </div>\n    </>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX syntax issues
    if (content.includes('return (') && 
        (content.includes('<div>') || content.includes('<Head>')) &&
        (content.includes('import [^;]+$') || content.includes(';\n;') || content.includes('/>"'))) {
      
      console.log(`Fixing JSX syntax in: ${filePath}`);
      
      const fixed = fixJSXSyntax(content);
      
      fs.writeFileSync(filePath, fixed);
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const processedCount = processDirectory('/workspace/app');
console.log(`\n✓ Processed ${processedCount} files with JSX syntax issues`);

console.log('\nJSX syntax fixes completed!');
>>>>>>> origin/main
