const fs = require('fs');
const path = require('path');

function fixFinalIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix 1: Fix malformed Link components
    content = content.replace(/<Link href="([^"]*)" Us\s*>\s*<ArrowRight \/>\s*<\/Link>/g, '<Link href="$1" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            Contact Us\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    // Fix 2: Remove duplicate default exports
    content = content.replace(/export default function \w+\(\) \{[^}]+\};\s*\n\s*export default \w+;/g, 'export default function $1() {\n  return (\n    <div>\n      <Head>\n        <title>$2 - Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1 className="text-4xl font-bold text-white mb-6">\n            $2\n          </h1>\n          <p className="text-lg text-gray-300 mb-8">\n            $3 services Transform your business with our expert solutions. services coming soon.\n          </p>\n          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            Contact Us\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>\n        </div>\n      </div>\n      <Footer />\n    </div>\n  );\n}');

    // Fix 3: Fix malformed Link components with missing closing tags
    content = content.replace(/<Link href="([^"]*)" Us\s*>\s*<ArrowRight \/>\s*<\/Link>/g, '<Link href="$1" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            Contact Us\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    // Fix 4: Remove duplicate export statements at the end
    content = content.replace(/\n\s*export default \w+;\s*$/g, '');

    // Fix 5: Fix malformed Link components with extra text
    content = content.replace(/<Link href="([^"]*)" Us\s*>\s*<ArrowRight \/>\s*<\/Link>/g, '<Link href="$1" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            Contact Us\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    // Fix 6: Fix malformed Link components with missing className
    content = content.replace(/<Link href="([^"]*)" Us\s*>\s*<ArrowRight \/>\s*<\/Link>/g, '<Link href="$1" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            Contact Us\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
console.log('Starting final issue fixes...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFinalIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);