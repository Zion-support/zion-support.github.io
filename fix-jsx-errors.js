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
    
    // Fix common JSX syntax errors
    
    // 1. Fix missing opening div tag
    if (content.includes('return (') && !content.includes('<div') && content.includes('{/* Hero Section */}')) {
      content = content.replace('return (', 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    }
    
    // 2. Fix missing closing div tag at the end
    if (content.includes('</section>') && !content.includes('</div>') && content.includes('export default')) {
      content = content.replace('export default', '</div>\n  );\n};\n\nexport default');
    }
    
    // 3. Fix missing return statement
    if (content.includes('const PagePage: React.FC = () => {') && !content.includes('return (') && content.includes('{/* Hero Section */}')) {
      content = content.replace('const PagePage: React.FC = () => {', 'const PagePage: React.FC = () => {\n  return (');
    }
    
    // 4. Fix missing opening section tag
    if (content.includes('{/* Hero Section */}') && !content.includes('<section')) {
      content = content.replace('{/* Hero Section */}', '<section className="py-20 px-4">\n        <div className="max-w-7xl mx-auto text-center">\n          {/* Hero Section */}');
    }
    
    // 5. Fix missing closing section tag
    if (content.includes('</div>') && content.includes('{/* Hero Section */}') && !content.includes('</section>')) {
      content = content.replace('</div>', '</div>\n        </div>\n      </section>');
    }
    
    // 6. Fix missing h1 tag
    if (content.includes('{/* Hero Section */}') && !content.includes('<h1') && content.includes('Page')) {
      content = content.replace('{/* Hero Section */}', '{/* Hero Section */}\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n              Page\n            </h1>');
    }
    
    // 7. Fix missing Helmet closing tag
    if (content.includes('<Helmet>') && !content.includes('</Helmet>')) {
      content = content.replace('<Helmet>', '<Helmet>\n        <title>Page | Zion Tech Group</title>\n        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />\n        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />\n      </Helmet>');
    }
    
    // 8. Fix missing opening div for main container
    if (content.includes('return (') && !content.includes('min-h-screen') && content.includes('{/* Hero Section */}')) {
      content = content.replace('return (', 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
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