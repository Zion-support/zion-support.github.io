#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to properly format and fix JSX files
function fixJSXFormatting(content) {
  let fixed = content;

  // First, let's fix the most common issues
  fixed = fixed.replace(/import\s+React,\s*{Suspense\s+}from\s+'react';/g, "import React, { Suspense } from 'react';");
  fixed = fixed.replace(/import\s+{Helmet\s+}from\s+'react-helmet-async';/g, "import { Helmet } from 'react-helmet-async';");
  fixed = fixed.replace(/const\s+Not\s+Found\s+Page:\s+React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const NotFoundPage: React.FC = () => {');
  fixed = fixed.replace(/export\s+default\s+Not\s+Found\s+Page;/g, 'export default NotFoundPage;');
  
  // Fix malformed component names
  fixed = fixed.replace(/constFiveG(\w+)Page\s*=\s*\(\)\s*=>\s*{/g, 'const FiveG$1Page = () => {');
  fixed = fixed.replace(/constFiveG(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const FiveG$1 = () => {');
  fixed = fixed.replace(/exportdefault\s+FiveG(\w+)Page;/g, 'export default FiveG$1Page;');
  fixed = fixed.replace(/exportdefault\s+FiveG(\w+);/g, 'export default FiveG$1;');
  fixed = fixed.replace(/exportdefault\s+Five\s+G(\w+)\s+Page;/g, 'export default FiveG$1Page;');
  fixed = fixed.replace(/exportdefault\s+Five\s+G(\w+);/g, 'export default FiveG$1;');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/class\s+Name=/g, 'className=');
  fixed = fixed.replace(/class\s+Name\s*=/g, 'className=');
  
  // Fix malformed className values
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, p1, p2) => {
    return `className="${p1} ${p2}"`;
  });
  
  // Fix specific malformed class names
  fixed = fixed.replace(/min\s+h\s+screen/g, 'min-h-screen');
  fixed = fixed.replace(/bg-gradient-to-br\s+from-slate-90000\s+via-purple-90000\s+to-slate-90000/g, 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/container\s+mx\s+auto/g, 'container mx-auto');
  fixed = fixed.replace(/text\s+center/g, 'text-center');
  fixed = fixed.replace(/text\s+4\s+xlfont-bold/g, 'text-4xl font-bold');
  fixed = fixed.replace(/text\s+xltext\s+gray-300/g, 'text-xl text-gray-300');
  fixed = fixed.replace(/grid\s+md:grid\s+cols\s+2-lg:grid-cols-3/g, 'grid md:grid-cols-2 lg:grid-cols-3');
  fixed = fixed.replace(/bg\s+blue\s+50-border\s+border-blue-200/g, 'bg-blue-50 border border-blue-200');
  fixed = fixed.replace(/text\s+lgfont\s+semibold/g, 'text-lg font-semibold');
  fixed = fixed.replace(/text\s+blue\s+700/g, 'text-blue-700');
  fixed = fixed.replace(/bg\s+green\s+50-border\s+border-green-200/g, 'bg-green-50 border border-green-200');
  fixed = fixed.replace(/text\s+green\s+700/g, 'text-green-700');
  fixed = fixed.replace(/bg\s+purple\s+50-border\s+border-purple-200/g, 'bg-purple-50 border border-purple-200');
  fixed = fixed.replace(/text\s+purple\s+700/g, 'text-purple-700');
  
  // Fix malformed JSX tags
  fixed = fixed.replace(/<h\s+1\s+/g, '<h1 ');
  fixed = fixed.replace(/<h\s+2\s+/g, '<h2 ');
  fixed = fixed.replace(/<h\s+3\s+/g, '<h3 ');
  fixed = fixed.replace(/<\/h\s+1>/g, '</h1>');
  fixed = fixed.replace(/<\/h\s+2>/g, '</h2>');
  fixed = fixed.replace(/<\/h\s+3>/g, '</h3>');
  
  // Fix malformed text content
  fixed = fixed.replace(/Ourteamof\s+expertsdeliverscutting-edge\s+solutions\./g, 'Our team of experts delivers cutting-edge solutions.');
  fixed = fixed.replace(/Tailoredimplementationsfor\s+yourspecificrequirements\./g, 'Tailored implementations for your specific requirements.');
  fixed = fixed.replace(/Round-the-clocksupportfor\s+allyourneeds\./g, 'Round-the-clock support for all your needs.');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/\)\s*},\s*export\s+default/g, ');\n};\n\nexport default');
  
  // Add proper line breaks and indentation
  fixed = fixed.replace(/return\s*\(\s*<>/g, 'return (\n    <>');
  fixed = fixed.replace(/<\/>\s*\)/g, '\n    </>\n  )');
  fixed = fixed.replace(/<Helmet>/g, '\n      <Helmet>');
  fixed = fixed.replace(/<\/Helmet>/g, '\n      </Helmet>');
  fixed = fixed.replace(/<div\s+className="min-h-screen/g, '\n      <div className="min-h-screen');
  fixed = fixed.replace(/<div\s+className="container/g, '\n        <div className="container');
  fixed = fixed.replace(/<div\s+className="text-center/g, '\n          <div className="text-center">');
  fixed = fixed.replace(/<h1\s+className="text-4xl/g, '\n            <h1 className="text-4xl');
  fixed = fixed.replace(/<p\s+className="text-xl/g, '\n            <p className="text-xl');
  fixed = fixed.replace(/<div\s+className="grid/g, '\n            <div className="grid');
  fixed = fixed.replace(/<div\s+className="bg-blue-50/g, '\n              <div className="bg-blue-50');
  fixed = fixed.replace(/<div\s+className="bg-green-50/g, '\n              <div className="bg-green-50');
  fixed = fixed.replace(/<div\s+className="bg-purple-50/g, '\n              <div className="bg-purple-50');
  
  // Fix closing div tags
  fixed = fixed.replace(/<\/div>/g, '\n          </div>');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '\n        </div>\n      </div>\n    </div>');
  
  return fixed;
}

// Function to fix specific 5G page patterns
function fixFiveGPage(content, filePath) {
  let fixed = content;
  
  if (filePath.includes('5g-')) {
    // Fix malformed imports
    fixed = fixed.replace(/import\s+React\s+from\s+'react';/g, "import React from 'react';");
    fixed = fixed.replace(/import\s+{([^}]+)}\s+from\s+'lucide-react';/g, (match, imports) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from 'lucide-react';`;
    });
    fixed = fixed.replace(/import\s+{Link}\s+from\s+'react-router-dom';/g, "import { Link } from 'react-router-dom';");
    fixed = fixed.replace(/import\s+EnhancedSEO\s+from\s+'\.\.\/components\/EnhancedSEO';/g, "import EnhancedSEO from '../components/EnhancedSEO';");
    
    // Fix malformed function declarations
    fixed = fixed.replace(/constFiveG(\w+)Page\s*=\s*\(\)\s*=>\s*{/g, 'const FiveG$1Page = () => {');
    fixed = fixed.replace(/constFiveG(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const FiveG$1 = () => {');
    
    // Fix malformed export statements
    fixed = fixed.replace(/exportdefault\s+FiveG(\w+)Page;/g, 'export default FiveG$1Page;');
    fixed = fixed.replace(/exportdefault\s+FiveG(\w+);/g, 'export default FiveG$1;');
    fixed = fixed.replace(/exportdefault\s+Five\s+G(\w+)\s+Page;/g, 'export default FiveG$1Page;');
    fixed = fixed.replace(/exportdefault\s+Five\s+G(\w+);/g, 'export default FiveG$1;');
    
    // Fix malformed JSX
    fixed = fixed.replace(/<Enhanced\s+SEO/g, '<EnhancedSEO');
    fixed = fixed.replace(/<\/Enhanced\s+SEO>/g, '</EnhancedSEO>');
    fixed = fixed.replace(/<Linkt\s+/g, '<Link ');
    fixed = fixed.replace(/<\/Linkt>/g, '</Link>');
    fixed = fixed.replace(/<divke\s+/g, '<div ');
    fixed = fixed.replace(/<\/divke>/g, '</div>');
    
    // Fix malformed className attributes
    fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, p1, p2) => {
      return `className="${p1} ${p2}"`;
    });
    
    // Fix specific malformed class names
    fixed = fixed.replace(/min\s+h\s+screen/g, 'min-h-screen');
    fixed = fixed.replace(/container\s+mx\s+auto/g, 'container mx-auto');
    fixed = fixed.replace(/text\s+center/g, 'text-center');
    fixed = fixed.replace(/text\s+4\s+xl/g, 'text-4xl');
    fixed = fixed.replace(/text\s+xl/g, 'text-xl');
    fixed = fixed.replace(/font\s+bold/g, 'font-bold');
    fixed = fixed.replace(/font\s+semibold/g, 'font-semibold');
    fixed = fixed.replace(/text\s+gray\s+900/g, 'text-gray-900');
    fixed = fixed.replace(/text\s+gray\s+600/g, 'text-gray-600');
    fixed = fixed.replace(/text\s+gray\s+300/g, 'text-gray-300');
    fixed = fixed.replace(/bg\s+white/g, 'bg-white');
    fixed = fixed.replace(/rounded\s+lg/g, 'rounded-lg');
    fixed = fixed.replace(/shadow\s+lg/g, 'shadow-lg');
    fixed = fixed.replace(/p\s+6/g, 'p-6');
    fixed = fixed.replace(/mb\s+4/g, 'mb-4');
    fixed = fixed.replace(/mb\s+6/g, 'mb-6');
    fixed = fixed.replace(/mb\s+8/g, 'mb-8');
    fixed = fixed.replace(/mb\s+12/g, 'mb-12');
    fixed = fixed.replace(/py\s+16/g, 'py-16');
    fixed = fixed.replace(/px\s+4/g, 'px-4');
    fixed = fixed.replace(/gap\s+8/g, 'gap-8');
    fixed = fixed.replace(/grid\s+md:grid-cols-3/g, 'grid md:grid-cols-3');
    fixed = fixed.replace(/grid\s+md:grid-cols-2\s+lg:grid-cols-3/g, 'grid md:grid-cols-2 lg:grid-cols-3');
    fixed = fixed.replace(/inline-flex\s+items-center/g, 'inline-flex items-center');
    fixed = fixed.replace(/text-blue-600\s+hover:text-blue-800/g, 'text-blue-600 hover:text-blue-800');
    fixed = fixed.replace(/bg-blue-600\s+hover:bg-blue-700/g, 'bg-blue-600 hover:bg-blue-700');
    fixed = fixed.replace(/transition-colors/g, 'transition-colors');
    fixed = fixed.replace(/ml\s+2/g, 'ml-2');
    fixed = fixed.replace(/w\s+4\s+h\s+4/g, 'w-4 h-4');
    fixed = fixed.replace(/w\s+5\s+h\s+5/g, 'w-5 h-5');
    fixed = fixed.replace(/py\s+3\s+px\s+6/g, 'py-3 px-6');
    
    // Fix malformed text content
    fixed = fixed.replace(/Expertguidancefor\s+your-5G\s+transformation\s+journey/g, 'Expert guidance for your 5G transformation journey');
    fixed = fixed.replace(/Completesecurityevaluation\s+for-5G\s+network\s+implementation\./g, 'Complete security evaluation for 5G network implementation.');
    fixed = fixed.replace(/Experttrainingfor\s+yourteamon\s+5Gtechnologies\s+andbestpractices\./g, 'Expert training for your team on 5G technologies and best practices.');
    fixed = fixed.replace(/Ourteamof\s+expertsdeliverscutting-edge\s+solutions\./g, 'Our team of experts delivers cutting-edge solutions.');
    fixed = fixed.replace(/Tailoredimplementationsfor\s+yourspecificrequirements\./g, 'Tailored implementations for your specific requirements.');
    fixed = fixed.replace(/Round-the-clocksupportfor\s+allyourneeds\./g, 'Round-the-clock support for all your needs.');
  }
  
  return fixed;
}

// Main function to process files
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} TypeScript files to process...`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixJSXFormatting(content);
      fixed = fixFiveGPage(fixed, filePath);
      
      // Write the fixed content back
      fs.writeFileSync(filePath, fixed, 'utf8');
      
      processedCount++;
      console.log(`✓ Fixed: ${filePath}`);
    } catch (error) {
      console.error(`✗ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`✓ Successfully processed: ${processedCount} files`);
  console.log(`✗ Errors: ${errorCount} files`);
}

// Run the script
main().catch(console.error);