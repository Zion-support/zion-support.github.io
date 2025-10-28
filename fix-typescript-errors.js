#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix TypeScript errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove unused ErrorBoundary imports
    if (content.includes("import ErrorBoundary from '../components/ErrorBoundary';")) {
      content = content.replace(/import ErrorBoundary from '\.\.\/components\/ErrorBoundary';\n?/g, '');
      modified = true;
    }

    // Fix 2: Remove unused Page variable declarations
    if (content.includes("function Page() {")) {
      content = content.replace(/function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g, '');
      modified = true;
    }

    // Fix 3: Fix PagePage undefined variable - replace with proper component
    if (content.includes('PagePage')) {
      // Find the component name from the file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get the directory name
      const componentName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      content = content.replace(/PagePage/g, componentName);
      modified = true;
    }

    // Fix 4: Remove unused Page variable declarations (alternative pattern)
    if (content.includes("const Page = () => {")) {
      content = content.replace(/const Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g, '');
      modified = true;
    }

    // Fix 5: Clean up any remaining unused imports
    const lines = content.split('\n');
    const cleanedLines = lines.filter(line => {
      // Remove lines that only contain unused imports
      if (line.trim().startsWith('import') && line.includes('ErrorBoundary')) {
        return false;
      }
      return true;
    });
    
    if (cleanedLines.length !== lines.length) {
      content = cleanedLines.join('\n');
      modified = true;
    }

    // Fix 6: Ensure proper default export
    if (content.includes('export default function Wrapped')) {
      // Extract the component name from the path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2];
      const componentName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      // Replace the Wrapped function with a proper component
      const wrappedPattern = /export default function Wrapped\(props: any\) \{\s*return \(\s*(\w+)\(\{\.\.\.props\}\)\s*\);\s*\}/;
      const match = content.match(wrappedPattern);
      
      if (match) {
        const newComponent = `export default function ${componentName}(props: any) {
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
        
        content = content.replace(wrappedPattern, newComponent);
        modified = true;
      }
    }

    // Fix 7: Clean up any empty lines and ensure proper structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^;\s*\n/gm, '');

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
  console.log('Starting TypeScript error fixes...');

  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  let totalCount = pageFiles.length;

  console.log(`Found ${totalCount} page files to process...`);

  pageFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);
  console.log('TypeScript error fixes completed!');
}

main().catch(console.error);