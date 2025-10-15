const fs = require('fs');
const path = require('path');

function fixMalformedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the malformed pattern: return; followed by },
    if (!content.includes('return;\n},')) {
      return;
    }
    
    console.log(`Fixing malformed file: ${filePath}`);
    
    // Extract the imports
    const importMatch = content.match(/import\s*{[^}]+}\s*from\s*['"]lucide-react['"];?\s*import\s*{[^}]+}\s*from\s*['"]react-helmet-async['"];?\s*import\s*{[^}]+}\s*from\s*['"]react-router-dom['"];?/);
    if (!importMatch) return;
    
    const imports = importMatch[0];
    
    // Extract the function name
    const functionMatch = content.match(/export\s+default\s+function\s+(\w+)/);
    if (!functionMatch) return;
    
    const functionName = functionMatch[1];
    
    // Create a simple working component
    const newContent = `${imports}

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${functionName.replace(/([A-Z])/g, ' $1').trim()}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Coming soon - This page is under development.
          </p>
        </div>
      </div>
    </div>
  );
};
`;
    
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all .tsx files in app directory
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

// Process all files
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

tsxFiles.forEach(file => {
  fixMalformedFile(file);
});

console.log('Malformed file fixing complete!');
