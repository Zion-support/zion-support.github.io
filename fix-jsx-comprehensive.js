#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all .tsx files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

console.log(`Found ${files.length} .tsx files to check`);

let fixedCount = 0;

files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;
    
    // Skip if file is too broken to fix automatically
    if (content.length < 100) {
      return;
    }
    
    // Fix common patterns
    
    // 1. Fix missing return statement and opening div
    if (content.includes('const PagePage: React.FC = () => {') && !content.includes('return (') && content.includes('{/* Hero Section */}')) {
      content = content.replace('const PagePage: React.FC = () => {', 'const PagePage: React.FC = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    }
    
    // 2. Fix missing return statement without hero section
    if (content.includes('const PagePage: React.FC = () => {') && !content.includes('return (') && !content.includes('{/* Hero Section */}')) {
      content = content.replace('const PagePage: React.FC = () => {', 'const PagePage: React.FC = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    }
    
    // 3. Fix missing opening div for return statement
    if (content.includes('return (') && !content.includes('<div') && !content.includes('min-h-screen')) {
      content = content.replace('return (', 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    }
    
    // 4. Fix missing closing div and parenthesis
    if (content.includes('export default') && !content.includes('</div>') && content.includes('return (')) {
      content = content.replace('export default', '</div>\n  );\n};\n\nexport default');
    }
    
    // 5. Fix missing Helmet component
    if (content.includes('return (') && !content.includes('<Helmet>') && !content.includes('SEOOptimizer')) {
      content = content.replace('return (', 'return (\n    <>\n      <Helmet>\n        <title>Page | Zion Tech Group</title>\n        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />\n        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />\n      </Helmet>');
    }
    
    // 6. Fix missing closing Helmet
    if (content.includes('<Helmet>') && !content.includes('</Helmet>')) {
      content = content.replace('<Helmet>', '<Helmet>\n        <title>Page | Zion Tech Group</title>\n        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />\n        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />\n      </Helmet>');
    }
    
    // 7. Fix missing closing fragment
    if (content.includes('<Helmet>') && !content.includes('</>') && content.includes('export default')) {
      content = content.replace('export default', '</>\n  );\n};\n\nexport default');
    }
    
    // 8. Fix missing h1 tag in hero section
    if (content.includes('{/* Hero Section */}') && !content.includes('<h1') && content.includes('Page')) {
      content = content.replace('{/* Hero Section */}', '{/* Hero Section */}\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n              Page\n            </h1>');
    }
    
    // 9. Fix missing section wrapper
    if (content.includes('{/* Hero Section */}') && !content.includes('<section')) {
      content = content.replace('{/* Hero Section */}', '<section className="py-20 px-4">\n        <div className="max-w-7xl mx-auto text-center">\n          {/* Hero Section */}');
    }
    
    // 10. Fix missing closing section
    if (content.includes('</div>') && content.includes('{/* Hero Section */}') && !content.includes('</section>')) {
      content = content.replace('</div>', '</div>\n        </div>\n      </section>');
    }
    
    // 11. Fix standalone expressions that should be JSX
    if (content.includes('Expected an assignment or function call and instead saw an expression')) {
      // This is a linting error, not something we can fix in the content
      return;
    }
    
    // 12. Fix missing closing tags
    if (content.includes('Expected corresponding JSX closing tag')) {
      // Try to add missing closing tags
      const openDivs = (content.match(/<div/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
      if (openDivs > closeDivs) {
        const missingDivs = openDivs - closeDivs;
        for (let i = 0; i < missingDivs; i++) {
          content = content.replace('export default', '</div>\nexport default');
        }
      }
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);