import fs from 'fs';
import { glob } from 'glob';

// Function to fix incomplete Helmet tags and other JSX issues
function fixRemainingJSX(content, filePath) {
  let fixed = content;
  
  // Fix incomplete Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>/g, (match) => {
    const pageName = filePath.split('/').pop().replace('.tsx', '').replace('page', '');
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return `<Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services and solutions from Zion Tech Group" />
      </Helmet>`;
  });
  
  // Fix incomplete JSX structure with missing opening tags
  fixed = fixed.replace(/<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<\/div>\s*<\/div>\s*<\/>/g, (match) => {
    const helmetMatch = match.match(/<Helmet>[\s\S]*?<\/Helmet>/);
    const helmetContent = helmetMatch ? helmetMatch[0] : '';
    
    return `<>${helmetContent}
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Page Title</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </>`;
  });
  
  // Fix missing opening tags before Helmet
  fixed = fixed.replace(/<>\s*<Helmet>/g, '<>\n      <Helmet>');
  
  // Fix missing content after Helmet
  fixed = fixed.replace(/<\/Helmet>\s*<\/>/g, `</Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Page Title</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </>`);
  
  return fixed;
}

// Function to fix specific page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix the content
    content = fixRemainingJSX(content, filePath);
    
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
  console.log('Starting remaining JSX error fixes...');

  // Get all page files that might have issues
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