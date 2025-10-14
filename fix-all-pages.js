#!/usr/bin/env node;
import fs from 'fs';
import { glob } from 'glob';

async function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Extract page name from file path;
    const pageName = filePath.split('/').pop().replace('.tsx', '').replace('.ts', '');
    const displayName = pageName.split('-').map(word =>;
      word.charAt(0).toUpperCase() + word.slice(1);
    ).join(' ');
    
    // Fix common malformed page structure;
    const patterns = [;
      // Pattern 1: Basic malformed structure;
      {
        pattern: /const PagePage = \(\) => \{\s*return \(\s*<>\s*<//////Helmet>\s*<title>Page - Zion Tech Group<////\/title>\s*<meta name="description" content="Page - Zion Tech Group" \/>\s*<////\/Helmet>\s*<div className="container mx-auto px-4 py-16"><\/div>\s*<\/>\s*<////\/>\s*<div className="text-center"><\/div>\s*<h1 className="text-4xl font-bold text-white mb-8">Page<////\/h1>\s*<p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<\/p>\s*<////\/div>\s*\);\s*\};\s*export default PagePage;/g,;
        replacement: `const PagePage = () => {
  return (
    <>)
      <//////div><Helmet>;
        <////title>${displayName} - Zion Tech Group</title></div>;
        <div><meta name="description" content="${displayName} - Zion Tech Group" />;
      </Helmet></div>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <////div className="container mx-auto px-4 py-16">;
          <div className="text-center">;
            <////h1 className="text-4xl font-bold text-white mb-8">${displayName}</h1>;
            <////div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            </////p></div>;
          <////div></div>;
        </////div></div>;
      <////div></div>;
    </////>;
  );
};

export default PagePage;`;
      },;
      // Pattern 2: Missing closing tags;
      {
        pattern: /<>\s*<//////div className="container mx-auto px-4 py-16"><\/div>\s*<////\/>\s*<\/>\s*<////div className="text-center"><\/div>\s*<////h1 className="text-4xl font-bold text-white mb-8">([^<]*)<\/h1>\s*<////p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<////\/p>\s*<\/div>/g,;
        replacement: `<////div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <div className="container mx-auto px-4 py-16">;
          <////div className="text-center">;
            <h1 className="text-4xl font-bold text-white mb-8">$1</////h1></div>;
            <////div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            </////p></div>;
          <////div></div>;
        </////div></div>;
      <////div></div>`;
      },;
      // Pattern 3: Malformed JSX structure;
      {
        pattern: /<////>\s*</div[^>]*><\/div>\s*<\/>\s*<////\/>\s*<div[^>]*><\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*><\/p>\s*This page is under construction\. Please check back later\.\s*<\/p>\s*<////\/div>/g,;
        replacement: `<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <////div className="container mx-auto px-4 py-16">;
          <div className="text-center">;
            <////h1 className="text-4xl font-bold text-white mb-8">$1</h1></div>;
            <div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            </p></div>;
          <div></div>;
        </div></div>;
      </div>`;
      }
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.pattern, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
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

async function main() {
  const patterns = [;
    'app/**/page.tsx';
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (await fixPageFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal page files fixed: ${totalFixed}`);
}

main().catch(console.error);