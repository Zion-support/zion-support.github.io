const fs = require('fs');
const path = require('path');

// Function to fix specific JSX issues
function fixJsxIssues(content) {
  let fixed = content;
  
  // Fix malformed JSX structure with title tags outside of Helmet
  fixed = fixed.replace(/<>\s*<title>([^<]+)\s*<\/title>/g, '<>\n      <Helmet>\n        <title>$1</title>');
  
  // Fix malformed JSX structure with h1 tags
  fixed = fixed.replace(/<title>([^<]+)\s*<\/title>\s*<h1([^>]*)>/g, '<title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Helmet>\n      \n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1$2>');
  
  // Fix malformed JSX structure with p tags
  fixed = fixed.replace(/<h1([^>]*)>([^<]+)\s*<\/h1>\s*<p([^>]*)>/g, '<h1$1>$2</h1>\n          <p$3>');
  
  // Fix malformed JSX structure with Link tags
  fixed = fixed.replace(/<p([^>]*)>([^<]+)\s*<\/p>\s*<Link([^>]*)>/g, '<p$1>$2</p>\n          <Link$3>');
  
  // Fix malformed JSX structure with ArrowRight
  fixed = fixed.replace(/<Link([^>]*)>([^<]+)<\/Link>\s*<>\s*<ArrowRight([^>]*)\s*\/>\s*<\/ArrowRight>/g, '<Link$1>$2<ArrowRight$3 /></Link>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/Link>\s*<\/>\s*<\/div>\s*<\/>\s*<\/div>\s*<\/>\s*\);/g, '</Link>\n        </div>\n      </div>\n    </>');
  
  // Fix malformed Layout components
  fixed = fixed.replace(/<Layout\s*title="([^"]+)"\s*description="([^"]+)"\s*keywords="([^"]+)"\s*>/g, '<Layout\n      title="$1"\n      description="$2"\n      keywords="$3"\n    >');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/>\s*<\/div>\s*<\/>\s*\);/g, '</>\n    </div>\n  );');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default ([^;]+);\s*const ([^:]+): React\.FC = \(\) => {/g, 'const $2: React.FC = () => {');
  
  // Fix malformed closing braces
  fixed = fixed.replace(/}\s*;\s*$/g, '};\n\nexport default $1;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxIssues(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(processFile);

console.log('Final JSX fixing completed!');