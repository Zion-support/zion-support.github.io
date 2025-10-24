const fs = require('fs');
const path = require('path');

// Function to fix all JSX issues comprehensively
function fixAllJSX(content) {
  let fixed = content;
  
  // Fix semicolons in JSX attributes
  fixed = fixed.replace(/href="([^"]*);/g, 'href="$1"');
  fixed = fixed.replace(/className="([^"]*);/g, 'className="$1"');
  fixed = fixed.replace(/src="([^"]*);/g, 'src="$1"');
  fixed = fixed.replace(/alt="([^"]*);/g, 'alt="$1"');
  fixed = fixed.replace(/title="([^"]*);/g, 'title="$1"');
  fixed = fixed.replace(/name="([^"]*);/g, 'name="$1"');
  fixed = fixed.replace(/content="([^"]*);/g, 'content="$1"');
  fixed = fixed.replace(/property="([^"]*);/g, 'property="$1"');
  
  // Fix semicolons after JSX element names
  fixed = fixed.replace(/<Link;/g, '<Link');
  fixed = fixed.replace(/<div;/g, '<div');
  fixed = fixed.replace(/<span;/g, '<span');
  fixed = fixed.replace(/<p;/g, '<p');
  fixed = fixed.replace(/<h[1-6];/g, (match) => match.replace(';', ''));
  fixed = fixed.replace(/<a;/g, '<a');
  fixed = fixed.replace(/<button;/g, '<button');
  fixed = fixed.replace(/<img;/g, '<img');
  fixed = fixed.replace(/<meta;/g, '<meta');
  fixed = fixed.replace(/<title;/g, '<title');
  fixed = fixed.replace(/<Head;/g, '<Head');
  fixed = fixed.replace(/<Footer;/g, '<Footer');
  fixed = fixed.replace(/<ArrowRight;/g, '<ArrowRight');
  
  // Fix broken JSX structure - ensure proper nesting
  fixed = fixed.replace(
    /<div>\s*<Head>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/Head>\s*<div([^>]*)><\/div>\s*<div([^>]*)><\/div>\s*<h1([^>]*)>([^<]*)<\/h1>\s*<p([^>]*)>([^<]*)<\/p>\s*<Link([^>]*)>\s*([^<]*)\s*<ArrowRight([^>]*)\s*\/>\s*<\/Link>\s*<Footer\s*\/>\s*<\/div>/g,
    '<div>\n      <Head>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>\n      <div$2>\n        <div$3>\n          <h1$4>$5</h1>\n          <p$6>$7</p>\n          <Link$8>\n            $9\n            <ArrowRight$10 />\n          </Link>\n        </div>\n      </div>\n      <Footer />\n    </div>'
  );
  
  // Fix broken paragraph tags
  fixed = fixed.replace(/<p([^>]*)><\/p>\s*([^<]+)<\/p>/g, '<p$1>$2</p>');
  
  // Fix self-closing tags
  fixed = fixed.replace(/<ArrowRight([^>]*)\s*\/>/g, '<ArrowRight$1 />');
  fixed = fixed.replace(/<Footer\s*\/>/g, '<Footer />');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  
  // Fix JSX expressions that need proper structure
  fixed = fixed.replace(
    /return\s*\(\s*<div>\s*([\s\S]*?)\s*<\/div>\s*\)/g,
    (match, content) => {
      // Ensure proper indentation and structure
      const lines = content.split('\n');
      const indentedLines = lines.map(line => {
        if (line.trim()) {
          return '      ' + line;
        }
        return line;
      });
      return `return (\n    <div>\n${indentedLines.join('\n')}\n    </div>\n  )`;
    }
  );
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllJSX(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed all JSX issues in: ${filePath}`);
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
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
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
console.log('Starting final comprehensive JSX fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed all JSX issues in ${fixedCount} files`);