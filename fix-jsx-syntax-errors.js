const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJsxSyntax(content) {
  let fixed = content;
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\(\)\s*\n\s*<>/g, 'return (\n    <>');
  
  // Fix malformed JSX text content patterns like </>text<>
  fixed = fixed.replace(/<\/>([^<]+)<>/g, '$1');
  
  // Fix malformed title tags
  fixed = fixed.replace(/<title>\s*<\/>([^<]+)<>/g, '<title>$1</title>');
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<meta name="([^"]+)", content="([^"]+)" \/>/g, '<meta name="$1" content="$2" />');
  
  // Fix malformed Link components
  fixed = fixed.replace(/<Link;<\/Link>\s*<\/><\/Link>\s*to="([^"]+)"/g, '<Link to="$1"');
  fixed = fixed.replace(/className="([^"]+)"\s*><\/Link>\s*([^<]+);/g, 'className="$1">$2</Link>');
  
  // Fix malformed ArrowRight components
  fixed = fixed.replace(/<ArrowRight className="([^"]+)" \/>/g, '<ArrowRight className="$1" />');
  
  // Fix malformed Helmet structure
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>\s*<title>([^<]+)<>/g, '<Helmet>\n        <title>$1</title>');
  fixed = fixed.replace(/<\/title>\s*<meta name="([^"]+)" content="([^"]+)" \/>\s*<\/><>\s*<\/meta>\s*<\/Helmet>/g, '</title>\n        <meta name="$1" content="$2" />\n      </Helmet>');
  
  // Fix malformed div structures
  fixed = fixed.replace(/<div className="([^"]+)"\s*><>\s*<\/div>/g, '<div className="$1">\n        $2\n      </div>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/>\s*\)\s*<\/div>\s*\);/g, '</>\n    </div>\n  );');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default ([^;]+);\s*const ([^:]+): React\.FC = \(\) => {/g, 'const $2: React.FC = () => {\n  return (');
  
  // Fix malformed closing braces
  fixed = fixed.replace(/}\s*;\s*$/g, '};\n\nexport default $1;');
  
  return fixed;
}

// Function to add missing imports
function addMissingImports(content) {
  let fixed = content;
  
  // Check if Navigation is used but not imported
  if (fixed.includes('<Navigation') && !fixed.includes('import { Navigation }')) {
    fixed = fixed.replace(/import React from 'react';/, `import React from 'react';\nimport { Navigation } from '@/components/Navigation';`);
  }
  
  // Check if ArrowRight is used but not imported
  if (fixed.includes('<ArrowRight') && !fixed.includes('import { ArrowRight }')) {
    fixed = fixed.replace(/import React from 'react';/, `import React from 'react';\nimport { ArrowRight } from 'lucide-react';`);
  }
  
  // Check if CheckCircle is used but not imported
  if (fixed.includes('<CheckCircle') && !fixed.includes('import { CheckCircle }')) {
    fixed = fixed.replace(/import React from 'react';/, `import React from 'react';\nimport { CheckCircle } from 'lucide-react';`);
  }
  
  // Check if Footer is used but not imported
  if (fixed.includes('<Footer') && !fixed.includes('import { Footer }')) {
    fixed = fixed.replace(/import React from 'react';/, `import React from 'react';\nimport { Footer } from '@/components/Footer';`);
  }
  
  // Check if Link is used but not imported
  if (fixed.includes('<Link') && !fixed.includes('import { Link }')) {
    fixed = fixed.replace(/import React from 'react';/, `import React from 'react';\nimport { Link } from 'react-router-dom';`);
  }
  
  // Check if Helmet is used but not imported
  if (fixed.includes('<Helmet') && !fixed.includes('import { Helmet }')) {
    fixed = fixed.replace(/import React from 'react';/, `import React from 'react';\nimport { Helmet } from 'react-helmet-async';`);
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = fixJsxSyntax(content);
    fixed = addMissingImports(fixed);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(processFile);

console.log('JSX syntax fixing completed!');