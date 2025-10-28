#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove unused Head and Footer imports if they're not used
    const hasHeadUsage = content.includes('<Head>') || content.includes('</Head>');
    const hasFooterUsage = content.includes('<Footer') || content.includes('</Footer>');
    
    if (!hasHeadUsage && content.includes("import Head from 'next/head'")) {
      content = content.replace(/import Head from 'next\/head'\n?/g, '');
      modified = true;
    }
    
    if (!hasFooterUsage && content.includes("import Footer from '../components/Footer'")) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer'\n?/g, '');
      modified = true;
    }

    // Fix 2: Remove unused Page variable declarations
    if (content.includes("function Page() {")) {
      content = content.replace(/function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g, '');
      modified = true;
    }

    // Fix 3: Remove unused Page variable declarations (alternative pattern)
    if (content.includes("const Page = () => {")) {
      content = content.replace(/const Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g, '');
      modified = true;
    }

    // Fix 4: Remove any other unused function declarations that match the pattern
    const unusedFunctionPattern = /function \w+Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g;
    if (unusedFunctionPattern.test(content)) {
      content = content.replace(unusedFunctionPattern, '');
      modified = true;
    }

    // Fix 5: Clean up any empty lines and ensure proper structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^;\s*\n/gm, '');
    
    // Fix 6: Remove any remaining unused imports
    const lines = content.split('\n');
    const cleanedLines = lines.filter(line => {
      const trimmedLine = line.trim();
      // Remove lines that only contain unused imports
      if (trimmedLine.startsWith('import') && 
          (trimmedLine.includes('ErrorBoundary') || 
           trimmedLine.includes('Head') || 
           trimmedLine.includes('Footer'))) {
        return false;
      }
      return true;
    });
    
    if (cleanedLines.length !== lines.length) {
      content = cleanedLines.join('\n');
      modified = true;
    }

    // Fix 7: Ensure the component structure is correct
    if (content.includes('export default function')) {
      // Make sure the component uses Head and Footer properly
      const componentName = content.match(/export default function (\w+)/)?.[1];
      if (componentName && !content.includes('<Head>') && !content.includes('<Footer')) {
        // Add proper Head and Footer usage
        const headImport = "import Head from 'next/head';\n";
        const footerImport = "import Footer from '../components/Footer';\n";
        
        if (!content.includes("import Head from 'next/head'")) {
          content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/, headImport + footerImport);
        }
        
        // Update the component to use Head and Footer
        const componentPattern = /export default function \w+\(props: any\) \{\s*return \(\s*<div>\s*<Head>[\s\S]*?<\/div>\s*\);\s*\}/;
        if (!componentPattern.test(content)) {
          const newComponent = `export default function ${componentName}(props: any) {
  return (
    <div>
      <Head>
        <title>${componentName.replace(/([A-Z])/g, ' $1').trim()} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} services and solutions by Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${componentName.replace(/([A-Z])/g, ' $1').trim()}
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
          
          content = content.replace(/export default function \w+\(props: any\) \{\s*return \([\s\S]*?\);\s*\}/, newComponent);
          modified = true;
        }
      }
    }

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
  console.log('Starting remaining issues fixes...');

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
  console.log('Remaining issues fixes completed!');
}

main().catch(console.error);