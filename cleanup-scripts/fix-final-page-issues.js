#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final page issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Extract the component name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2];
    let componentName = fileName.split('-').map(word => {
      if (/^\d/.test(word)) {
        return 'Tech' + word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');

    if (componentName.startsWith('5g')) {
      componentName = 'FiveG' + componentName.slice(2);
    }
    if (componentName.startsWith('3d')) {
      componentName = 'ThreeD' + componentName.slice(2);
    }

    // Remove the unused Page function
    const pageFunctionPattern = /function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g;
    if (pageFunctionPattern.test(content)) {
      content = content.replace(pageFunctionPattern, '');
      modified = true;
    }

    // Fix the recursive component definition
    const recursivePattern = /export default function \w+\(props: any\) \{\s*return \(\s*<\w+ \{\.\.\.props\} \/>\s*\);\s*\}/;
    if (recursivePattern.test(content)) {
      const newComponent = `export default function ${componentName}() {
  return (
    <div>
      <Head>
        <title>${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="Professional ${fileName.replace(/-/g, ' ')} services and solutions by Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}`;
      
      content = content.replace(recursivePattern, newComponent);
      modified = true;
    }

    // Clean up any empty lines and ensure proper structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^;\s*\n/gm, '');
    content = content.replace(/\n\s*$/g, '\n');

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

// Main execution
async function main() {
  console.log('Starting final page issues fixes...');

  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  const totalCount = pageFiles.length;

  console.log(`Found ${totalCount} page files to process...`);

  pageFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);
  console.log('Final page issues fixes completed!');
}

main().catch(console.error);