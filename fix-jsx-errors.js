import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix duplicate closing Helmet tags
  fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  
  // Fix malformed JSX fragments - ensure proper opening and closing
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Fix incomplete JSX fragments that are missing content
  fixed = fixed.replace(/<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<\/>/g, (match) => {
    // Extract the Helmet content and wrap it properly
    const helmetMatch = match.match(/<Helmet>([\s\S]*?)<\/Helmet>/);
    if (helmetMatch) {
      return `<>${helmetMatch[0]}</>`;
    }
    return match;
  });
  
  // Fix missing opening div tags before container
  fixed = fixed.replace(/<>\s*<div className="container/g, '<>\n      <div className="min-h-screen bg-white">\n        <div className="container');
  
  // Fix missing closing div tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/>/g, '</div>\n      </div>\n    </>');
  
  // Fix incomplete Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>/g, '<Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name="description" content="Page description" />\n      </Helmet>');
  
  // Fix malformed JSX structure where divs are not properly nested
  fixed = fixed.replace(/<div className="min-h-screen[^>]*>\s*<div className="container[^>]*>\s*<div className="text-center[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/g, 
    '<div className="min-h-screen bg-white">\n        <div className="container mx-auto px-4 py-20">\n          <h1 className="text-4xl font-bold text-gray-900 mb-8">$1</h1>\n          <p className="text-xl text-gray-600">\n            $2\n          </p>\n        </div>\n      </div>');
  
  return fixed;
}

// Function to fix specific page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix the content
    content = fixJSXErrors(content);
    
    // If content changed, write it back
    if (content !== originalContent) {
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
  console.log('Starting JSX error fixes...');

  // Get all page files
  const pageFiles = await glob('app/**/page.tsx');

  let fixedCount = 0;
  pageFiles.forEach(file => {
    if (fixPageFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);