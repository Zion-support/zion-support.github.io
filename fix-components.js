const fs = require('fs');
const path = require('path');

// Function to fix component syntax issues
function fixComponentSyntax(content) {
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Fix malformed JSX return statements
  content = content.replace(/return \(<footer/g, 'return (\n    <footer');
  content = content.replace(/return \(<header/g, 'return (\n    <header');
  content = content.replace(/return \(<div/g, 'return (\n    <div');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)" \/>"/g, 'className="$1" />');
  content = content.replace(/\/>"/g, '/>');
  
  // Fix malformed JSX closing tags
  content = content.replace(/    <\/footer>/g, '    </footer>');
  content = content.replace(/    <\/header>/g, '    </header>');
  content = content.replace(/    <\/div>/g, '    </div>');
  
  // Fix unterminated strings
  content = content.replace(/import { MetadataRoute } from 'next";/g, "import { MetadataRoute } from 'next';");
  content = content.replace(/export default function robots\(\): MetadataRoute\.Robots {"/g, 'export default function robots(): MetadataRoute.Robots {');
  content = content.replace(/  return {"/g, '  return {');
  content = content.replace(/    rules: {"/g, '    rules: {');
  content = content.replace(/      userAgent: '\*",\"/g, "      userAgent: '*',");
  content = content.replace(/      allow: '\/",\"/g, "      allow: '/',");
  content = content.replace(/      disallow: \["/g, '      disallow: [');
  content = content.replace(/        '\/api\/",\"/g, "        '/api/',");
  content = content.replace(/        '\/_next\/",\"/g, "        '/_next/',");
  content = content.replace(/        '\/admin\/",\"/g, "        '/admin/',");
  content = content.replace(/        '\/private\/",\"/g, "        '/private/',");
  content = content.replace(/        '\*\.json",\"/g, "        '*.json',");
  content = content.replace(/        '\*\.xml",\"/g, "        '*.xml',");
  content = content.replace(/      \],\"/g, '      ],');
  content = content.replace(/    \},\"/g, '    },');
  content = content.replace(/  \},\"/g, '  },');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      console.log(`Fixing component file: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = fixComponentSyntax(content);
      
      fs.writeFileSync(filePath, fixed);
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`File not found: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to fix
const filesToFix = [
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/Header.tsx',
  '/workspace/app/not-found.tsx',
  '/workspace/app/robots.ts',
  '/workspace/app/sitemap.ts'
];

// Main execution
console.log('Starting component fixes...');
let processedCount = 0;

for (const filePath of filesToFix) {
  if (processFile(filePath)) {
    processedCount++;
  }
}

console.log(`\n✓ Fixed ${processedCount} component files`);
console.log('\nComponent fixes completed!');