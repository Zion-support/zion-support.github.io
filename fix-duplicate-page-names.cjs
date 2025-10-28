const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if there are duplicate Page declarations
    const pageFunctionMatches = content.match(/function Page\(\)/g);
    const exportPageMatches = content.match(/export default function Page\(\)/g);
    
    if (pageFunctionMatches && pageFunctionMatches.length > 0 && exportPageMatches && exportPageMatches.length > 0) {
      // Extract the page name from the file path
      const pathParts = filePath.split('/');
      const pageName = pathParts[pathParts.length - 2]; // Get the directory name
      const displayName = pageName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Create a unique component name
      const componentName = displayName.replace(/\s+/g, '') + 'Page';
      
      // Replace the first function Page() with the unique name
      let fixedContent = content.replace(
        /function Page\(\) \{[^}]*\}/s,
        `function ${componentName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">${displayName}</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-white">
            <p className="text-lg mb-6">
              Discover our comprehensive ${displayName.toLowerCase()} solutions designed to help your business 
              achieve unprecedented growth and efficiency.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced AI-powered solutions</li>
                  <li>• Real-time analytics and insights</li>
                  <li>• Scalable cloud infrastructure</li>
                  <li>• 24/7 expert support</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Increased productivity</li>
                  <li>• Cost optimization</li>
                  <li>• Enhanced security</li>
                  <li>• Future-proof technology</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
      );
      
      // Update the reference in the export function
      fixedContent = fixedContent.replace(
        /<Page \/>/g,
        `<${componentName} />`
      );
      
      fs.writeFileSync(filePath, fixedContent);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
  const pageFiles = [];
  
  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (file === 'page.tsx') {
        pageFiles.push(filePath);
      }
    }
  }
  
  traverse(dir);
  return pageFiles;
}

// Main execution
console.log('Starting duplicate Page name fixes...');

const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;
let totalCount = pageFiles.length;

console.log(`Found ${totalCount} page files to check...`);

for (const filePath of pageFiles) {
  if (fixPageFile(filePath)) {
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalCount} page files.`);
console.log('Duplicate Page name fixes completed!');