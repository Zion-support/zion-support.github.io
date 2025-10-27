import fs from 'fs';
import path from 'path';

const filesToFix = [
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add function declaration before return statement
    content = content.replace(/^(\s*)(return\s*\()/m, `$1export default function Page() {\n$1  $2`);
    
    // Remove duplicate exports
    content = content.replace(/export default \w+Page;?\s*$/gm, '');
    
    // Fix extra semicolons
    content = content.replace(/<Footer \/>;\s*<\/>;/g, '<Footer />\n    </>');
    content = content.replace(/<\/>;\s*\);/g, '</>\n  );');
    content = content.replace(/};\s*$/gm, '}');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

filesToFix.forEach(fixFile);
console.log('Remaining files fixed');