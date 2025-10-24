const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/(import[^;]+)(\n)/g, '$1;$2');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+(\w+)\s*=\s*[^;]+(\n)/g, (match, decl, varName, newline) => {
    if (!match.includes(';')) {
      return match.replace(newline, ';' + newline);
    }
    return match;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\}/g, 'const $1: React.FC = () => {');
  fixed = fixed.replace(/const(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*return\s*\(\)\s*;/g, 'const $1: React.FC = () => {');
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*\)\s*;/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*\)\s*<>/g, 'return (<>');
  
  // Fix missing closing parentheses and brackets
  fixed = fixed.replace(/\(\s*\)\s*<>/g, '(<');
  fixed = fixed.replace(/\(\s*\)\s*<\/>/g, '(</>');
  
  // Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*(\w+)/g, 'const $1 = [\n    $2');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*(\w+)/g, 'const $1 = [\n    $2');
  
  // Fix malformed object declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n    {');
  
  // Fix missing closing brackets for arrays
  fixed = fixed.replace(/(\w+)\s*\]\s*(\w+)/g, '$1\n  ];\n  const $2');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/title=&quot;([^&]+)&quot;/g, 'title="$1"');
  fixed = fixed.replace(/description=&quot;([^&]+)&quot;/g, 'description="$1"');
  fixed = fixed.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
  fixed = fixed.replace(/href=&quot;([^&]+)&quot;/g, 'href="$1"');
  fixed = fixed.replace(/id=&quot;([^&]+)&quot;/g, 'id="$1"');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n            </div>\n          </div>');
  
  // Fix missing semicolons after function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*(\n)/g, '$1();$2');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export default (\w+)\s*$/g, 'export default $1;');
  
  // Fix duplicate imports
  const lines = fixed.split('\n');
  const seenImports = new Set();
  const filteredLines = lines.filter(line => {
    if (line.trim().startsWith('import ')) {
      if (seenImports.has(line.trim())) {
        return false;
      }
      seenImports.add(line.trim());
    }
    return true;
  });
  fixed = filteredLines.join('\n');
  
  // Fix malformed function parameters
  fixed = fixed.replace(/\(\{\s*children\s*\}\s*:\s*\{\s*children:\s*React\.ReactNode\s*\}\s*\)/g, '({ children }: { children: React.ReactNode })');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<>\s*<\/div>\s*<\/>/g, '<>\n        </div>\n      </>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process TSX files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        processedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
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
console.log('Starting syntax error fixes...');
const processedCount = processDirectory('/workspace');
console.log(`Processed ${processedCount} files with syntax fixes.`);