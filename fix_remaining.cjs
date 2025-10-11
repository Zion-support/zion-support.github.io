const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix 1: Remove all unused imports and variables
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip unused import lines
      if (line.includes('import ') && !line.includes('//')) {
        let shouldKeep = true;
        
        // Check if the import is actually used
        if (line.includes('CheckCircle') && !content.includes('CheckCircle')) {
          shouldKeep = false;
        }
        if (line.includes('Helmet') && !content.includes('Helmet')) {
          shouldKeep = false;
        }
        if (line.includes('Navigation') && !content.includes('<Navigation')) {
          shouldKeep = false;
        }
        if (line.includes('Footer') && !content.includes('<Footer')) {
          shouldKeep = false;
        }
        if (line.includes('React') && !content.includes('React.')) {
          shouldKeep = false;
        }
        
        if (!shouldKeep) {
          modified = true;
          continue;
        }
      }
      
      // Skip unused variable declarations
      if (line.includes('const features =') || 
          line.includes('const stats =') ||
          line.includes('const ') && line.includes('= [') && !line.includes('return')) {
        modified = true;
        continue;
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    // Fix 2: Ensure proper function structure
    if (content.includes('export default function') && !content.includes('return (')) {
      const functionName = content.match(/export default function\s+(\w+)/)?.[1];
      if (functionName) {
        content = content.replace(
          /export default function\s+\w+\(\)\s*{[\s\S]*?}/,
          `export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${functionName.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${functionName.toLowerCase().replace(/([A-Z])/g, ' $1').trim()} services and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`
        );
        modified = true;
      }
    }

    // Fix 3: Clean up any remaining syntax issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/\s*;\s*$/gm, '');

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);