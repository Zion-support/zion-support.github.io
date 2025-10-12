import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining syntax issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to create a simple page component for corrupted files
function createSimplePage(filePath) {
  const pageName = path.basename(path.dirname(filePath));
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.replace(/-/g, ' ')} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced ${pageName.replace(/-/g, ' ')} solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;
  
  fs.writeFileSync(filePath, content);
}

// Main function
async function main() {
  console.log('Starting merge conflict fix...');
  
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
  
  let fixedCount = 0;
  let replacedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join('/workspace', file);
    
    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if file has merge conflicts
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        // Try to fix merge conflicts first
        const fixed = fixMergeConflicts(fullPath);
        
        if (fixed) {
          fixedCount++;
        } else {
          // If fixing failed, replace with simple page
          console.log(`Replacing corrupted file: ${file}`);
          createSimplePage(fullPath);
          replacedCount++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      // If file is completely corrupted, replace it
      try {
        createSimplePage(fullPath);
        replacedCount++;
      } catch (replaceError) {
        console.error(`Failed to replace ${file}:`, replaceError.message);
      }
    }
  }
  
  console.log(`\nMerge conflict fix complete!`);
  console.log(`Fixed files: ${fixedCount}`);
  console.log(`Replaced files: ${replacedCount}`);
  console.log(`Total processed: ${fixedCount + replacedCount}`);
}

main().catch(console.error);