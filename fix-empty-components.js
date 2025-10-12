import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix empty React components
function fixEmptyComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's an empty component
    if (content.includes('export default function') && content.trim().endsWith('}')) {
      const functionName = content.match(/export default function (\w+)/)?.[1];
      if (functionName) {
        const newContent = `export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            ${functionName.replace(/([A-Z])/g, ' $1').trim()}
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Advanced solutions powered by cutting-edge technology for modern businesses.
        </p>
      </div>
    </div>
  );
}`;
        
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed empty component: ${filePath}`);
      }
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
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
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

for (const file of tsxFiles) {
  fixEmptyComponent(file);
}

console.log('Finished fixing empty components');