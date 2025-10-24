const fs = require('fs');
const path = require('path');

// Function to fix all JSX syntax errors
function fixAllJSXErrors(content) {
  let fixed = content;

  // Fix malformed Head tags with title and meta - pattern 1
  fixed = fixed.replace(/<Head>title>([^<]*)<\/title>meta name="([^"]*)" content="([^"]*)" \/>/g, 
    '<Head>\n        <title>$1</title>\n        <meta name="$2" content="$3" />');
  
  // Fix malformed Head tags with title and meta - pattern 2 (with variables)
  fixed = fixed.replace(/<Head>title>\{([^}]*)\}<\/title>meta name="([^"]*)" content=\{([^}]*)\} \/>/g, 
    '<Head>\n        <title>{$1}</title>\n        <meta name="$2" content={$3} />');
  
  // Fix malformed closing Head tag followed by div
  fixed = fixed.replace(/<\/Head>\s*<div className="([^"]*)"\s*>/g, 
    '</Head>\n      <div className="$1">');
  
  // Fix malformed JSX elements with missing spaces
  fixed = fixed.replace(/(\w+)><(\w+)/g, '$1> <$2');
  fixed = fixed.replace(/(\w+)><\/(\w+)/g, '$1></$2');
  
  // Fix missing opening tags
  fixed = fixed.replace(/(<div className="[^"]*">)/g, (match) => {
    if (!match.includes('<div')) {
      return '<div ' + match;
    }
    return match;
  });
  
  // Fix malformed closing tags
  fixed = fixed.replace(/(\w+)>\s*<\/(\w+)>/g, '$1></$2>');
  
  // Fix missing spaces in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*)"(\w+)/g, '$1="$2" $3');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<Head>/g, '<>\n      <Head>');
  fixed = fixed.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/(\w+)\s*}\s*$/g, '$1}');
  
  return fixed;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixAllJSXErrors(content);
        
        if (content !== fixed) {
          fs.writeFileSync(filePath, fixed);
          console.log(`Fixed JSX: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
</div>
      </div>}

// Process app directory
console.log('Fixing all JSX syntax errors in app directory...');
processFiles('./app');

// Process src directory
console.log('Fixing all JSX syntax errors in src directory...');
processFiles('./src');

// Process components directory
console.log('Fixing all JSX syntax errors in components directory...');
processFiles('./components');

console.log('All JSX syntax fixes completed!');
      </Head>
      </div>
      </div>
      </div>
      </Head>
      </Head>
      </Head>
      </Head>