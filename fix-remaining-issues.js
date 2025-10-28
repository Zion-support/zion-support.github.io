#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing imports and undefined variables
    if (content.includes('ErrorBoundary') && !content.includes("import ErrorBoundary")) {
      // Add ErrorBoundary import
      const importMatch = content.match(/import.*from.*['"]/);
      if (importMatch) {
        const insertPos = content.lastIndexOf(importMatch[0]) + importMatch[0].length;
        content = content.slice(0, insertPos) + '\nimport ErrorBoundary from "../components/ErrorBoundary"' + content.slice(insertPos);
        modified = true;
      }
    }

    // Fix undefined function names
    const functionNameMatch = content.match(/export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{[\s\S]*?<(\w+)Page/);
    if (functionNameMatch) {
      const functionName = functionNameMatch[1];
      if (!content.includes(`function ${functionName}Page()`)) {
        // Add the missing function
        const beforeExport = content.split('export default function Wrapped')[0];
        const afterExport = content.split('export default function Wrapped')[1];
        
        const newFunction = `function ${functionName}Page() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${functionName.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${functionName.replace(/([A-Z])/g, ' $1').toLowerCase().trim()} services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

`;
        
        content = beforeExport + newFunction + 'export default function Wrapped' + afterExport;
        modified = true;
      }
    }

    // Fix any type warnings
    content = content.replace(/props: any/g, 'props: { [key: string]: unknown }');
    content = content.replace(/props: \{ \[key: string\]: unknown \}/g, 'props: { [key: string]: unknown }');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all problematic files
function findProblematicFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('ErrorBoundary') || content.includes('props: any') || content.includes('export default function Wrapped')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main function
function main() {
  console.log('Finding files with issues...');
  const problematicFiles = findProblematicFiles('./app');
  
  if (problematicFiles.length === 0) {
    console.log('No problematic files found.');
    return;
  }
  
  console.log(`Found ${problematicFiles.length} files with issues:`);
  problematicFiles.forEach(file => console.log(`- ${file}`));
  
  console.log('\nFixing issues...');
  
  let fixedCount = 0;
  for (const file of problematicFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed issues in ${fixedCount} files.`);
}

// Run the script
main();