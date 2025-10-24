const fs = require('fs');
const path = require('path');

// Function to fix unterminated strings
function fixUnterminatedStrings(content) {
  let fixed = content;

  // Fix lines ending with quotes and semicolons
  fixed = fixed.replace(/";"$/gm, '"');
  fixed = fixed.replace(/';"$/gm, "'");
  fixed = fixed.replace(/";$/gm, '"');
  fixed = fixed.replace(/';$/gm, "'");
  
  // Fix specific patterns
  fixed = fixed.replace(/<div className="([^"]*)"$/gm, '<div className="$1"');
  fixed = fixed.replace(/<p className="([^"]*)"$/gm, '<p className="$1"');
  fixed = fixed.replace(/<h1 className="([^"]*)"$/gm, '<h1 className="$1"');
  fixed = fixed.replace(/<h2 className="([^"]*)"$/gm, '<h2 className="$1"');
  fixed = fixed.replace(/<h3 className="([^"]*)"$/gm, '<h3 className="$1"');
  
  // Fix closing tags
  fixed = fixed.replace(/<\/Link>"$/gm, '</Link>');
  fixed = fixed.replace(/<\/div>"$/gm, '</div>');
  fixed = fixed.replace(/<\/p>"$/gm, '</p>');
  fixed = fixed.replace(/<\/h1>"$/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>"$/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>"$/gm, '</h3>');
  
  // Fix self-closing tags
  fixed = fixed.replace(/<meta[^>]*"$/gm, (match) => match.replace(/"$/, ' />'));
  fixed = fixed.replace(/<link[^>]*"$/gm, (match) => match.replace(/"$/, ' />'));
  
  // Fix ArrowRight component
  fixed = fixed.replace(/<ArrowRight[^>]*"$/gm, '<ArrowRight className="w-5 h-5 ml-2" />');
  
  // Fix specific patterns
  fixed = fixed.replace(/Contact Us<\/Link>"$/gm, 'Contact Us</Link>');
  fixed = fixed.replace(/Learn More<\/Link>"$/gm, 'Learn More</Link>');
  fixed = fixed.replace(/Get Started<\/Link>"$/gm, 'Get Started</Link>');

  // Fix missing semicolons in import statements
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*$/gm, (match, imports, module) => {
    return `import { ${imports} } from '${module}';`;
  });

  // Fix missing semicolons in export statements
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*$/gm, 'export default $1;');

  // Fix missing semicolons in const declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');

  // Fix missing semicolons in function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{/g, 'function $1() {');

  // Fix missing semicolons in return statements
  fixed = fixed.replace(/return\s*\(\s*<>\s*$/gm, 'return (<>');

  // Fix missing semicolons in JSX
  fixed = fixed.replace(/<div\s*className="([^"]*)"\s*$/gm, '<div className="$1"');
  fixed = fixed.replace(/<p\s*className="([^"]*)"\s*$/gm, '<p className="$1"');
  fixed = fixed.replace(/<h1\s*className="([^"]*)"\s*$/gm, '<h1 className="$1"');
  fixed = fixed.replace(/<h2\s*className="([^"]*)"\s*$/gm, '<h2 className="$1"');
  fixed = fixed.replace(/<h3\s*className="([^"]*)"\s*$/gm, '<h3 className="$1"');

  // Fix missing semicolons in closing tags
  fixed = fixed.replace(/<\/div>\s*$/gm, '</div>');
  fixed = fixed.replace(/<\/p>\s*$/gm, '</p>');
  fixed = fixed.replace(/<\/h1>\s*$/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>\s*$/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>\s*$/gm, '</h3>');

  // Fix missing semicolons in Link components
  fixed = fixed.replace(/<Link\s*href="([^"]*)"\s*className="([^"]*)"\s*$/gm, '<Link href="$1" className="$2"');
  fixed = fixed.replace(/<\/Link>\s*$/gm, '</Link>');

  // Fix missing semicolons in ArrowRight components
  fixed = fixed.replace(/<ArrowRight\s*className="([^"]*)"\s*$/gm, '<ArrowRight className="$1" />');

  // Fix missing semicolons in meta tags
  fixed = fixed.replace(/<meta\s*name="([^"]*)"\s*content="([^"]*)"\s*$/gm, '<meta name="$1" content="$2" />');
  fixed = fixed.replace(/<meta\s*property="([^"]*)"\s*content="([^"]*)"\s*$/gm, '<meta property="$1" content="$2" />');

  // Fix missing semicolons in title tags
  fixed = fixed.replace(/<title>([^<]*)\s*$/gm, '<title>$1</title>');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixUnterminatedStrings(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting unterminated string fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);