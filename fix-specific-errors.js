#!/usr/bin/env node

import fs from 'fs';

// Files that need specific fixes based on the build errors
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add missing imports
    if (!content.includes("import ErrorBoundary")) {
      const importMatch = content.match(/import.*from.*['"]/);
      if (importMatch) {
        const insertPos = content.lastIndexOf(importMatch[0]) + importMatch[0].length;
        content = content.slice(0, insertPos) + '\nimport ErrorBoundary from "../components/ErrorBoundary"' + content.slice(insertPos);
        modified = true;
      }
    }

    if (!content.includes("import Navigation")) {
      const importMatch = content.match(/import.*from.*['"]/);
      if (importMatch) {
        const insertPos = content.lastIndexOf(importMatch[0]) + importMatch[0].length;
        content = content.slice(0, insertPos) + '\nimport Navigation from "../components/Navigation"' + content.slice(insertPos);
        modified = true;
      }
    }

    if (!content.includes("import Footer")) {
      const importMatch = content.match(/import.*from.*['"]/);
      if (importMatch) {
        const insertPos = content.lastIndexOf(importMatch[0]) + importMatch[0].length;
        content = content.slice(0, insertPos) + '\nimport Footer from "../components/Footer"' + content.slice(insertPos);
        modified = true;
      }
    }

    // Fix the function name issue
    const functionNameMatch = content.match(/export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{[\s\S]*?<(\w+)Page/);
    if (functionNameMatch) {
      const functionName = functionNameMatch[1];
      if (!content.includes(`function ${functionName}Page()`)) {
        // Add the missing function before the export
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

// Main function
function main() {
  console.log('Fixing specific files with errors...');
  
  let fixedCount = 0;
  for (const file of filesToFix) {
    if (fs.existsSync(file)) {
      if (fixFile(file)) {
        fixedCount++;
      }
    } else {
      console.log(`File not found: ${file}`);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
}

// Run the script
main();