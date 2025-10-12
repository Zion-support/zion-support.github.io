import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all .tsx files in the app directory
function getAllTSXFiles() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(path.relative(__dirname, fullPath));
      }
    }
  }
  
  walkDir(appDir);
  return files;
}

function fixMalformedJSX(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the file has the malformed JSX pattern
    if (content.includes('return (') && 
        content.includes('<title>') && 
        !content.includes('<>') && 
        !content.includes('<div') &&
        !content.includes('return <')) {
      
      // Extract the component name from the function declaration
      const functionMatch = content.match(/export default function (\w+)\(\)/);
      const componentName = functionMatch ? functionMatch[1] : 'Component';
      
      // Extract the title from the existing content
      const titleMatch = content.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : `${componentName} - Zion Tech Group`;
      
      // Extract the h1 text
      const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      const h1Text = h1Match ? h1Match[1] : componentName;
      
      // Create a proper JSX structure
      const fixedContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${h1Text}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ${h1Text.toLowerCase().replace(/\s+/g, '')} services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

      fs.writeFileSync(fullPath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Scanning for malformed JSX files...');
const allFiles = getAllTSXFiles();
console.log(`Found ${allFiles.length} TSX files`);

let fixedCount = 0;
allFiles.forEach(file => {
  if (fixMalformedJSX(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${allFiles.length} files`);
console.log('JSX fixes completed!');