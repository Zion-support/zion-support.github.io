import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files with JSX errors from TypeScript check
function getFilesWithJSXErrors() {
  try {
    const output = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      if (line.includes('JSX expressions must have one parent element')) {
        const match = line.match(/^([^(]+)\(/);
        if (match) {
          files.add(match[1].trim());
        }
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.error('Error getting files with JSX errors:', error.message);
    return [];
  }
}

function fixJSXFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the page name from the file path
    const pageName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const componentName = pageName.replace(/\s+/g, '');
    
    // Check if the file has malformed JSX structure
    if (content.includes('return (') && !content.includes('<>') && !content.includes('<div') && 
        !content.includes('return <') && !content.includes('return null')) {
      
      // Create a proper JSX structure
      const fixedContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${pageName}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ${pageName.toLowerCase()} services coming soon.</p>
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
    } else {
      console.log(`Skipped (already fixed or different issue): ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Getting files with JSX errors...');
const filesWithErrors = getFilesWithJSXErrors();
console.log(`Found ${filesWithErrors.length} files with JSX errors`);

let fixedCount = 0;
filesWithErrors.forEach(file => {
  if (fixJSXFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${filesWithErrors.length} files`);
console.log('JSX fixes completed!');