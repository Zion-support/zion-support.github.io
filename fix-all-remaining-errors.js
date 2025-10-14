import fs from 'fs';
import { glob } from 'glob';

// Function to fix all remaining JSX errors
function fixAllRemainingErrors(content) {
  let fixed = content;
  
  // Fix missing JSX fragment closing tags
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missingFragments = openFragments - closeFragments;
    const lines = fixed.split('\n');
    let insertIndex = lines.length - 1;
    
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].includes('export default') || lines[i].includes('}')) {
        insertIndex = i;
        break;
      }
    }
    
    for (let i = 0; i < missingFragments; i++) {
      lines.splice(insertIndex, 0, '    </>');
    }
    
    fixed = lines.join('\n');
  }
  
  // Fix missing div closing tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    const lines = fixed.split('\n');
    let insertIndex = lines.length - 1;
    
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].includes('export default') || lines[i].includes('}')) {
        insertIndex = i;
        break;
      }
    }
    
    for (let i = 0; i < missingDivs; i++) {
      lines.splice(insertIndex, 0, '      </div>');
    }
    
    fixed = lines.join('\n');
  }
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<p className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/p>/g, '<p className="$1 $2">$3</p>');
  fixed = fixed.replace(/<h3 className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/h3>/g, '<h3 className="$1 $2">$3</h3>');
  fixed = fixed.replace(/<div className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/div>/g, '<div className="$1 $2">$3</div>');
  
  // Fix malformed Link tags
  fixed = fixed.replace(/<Link\s+([^>]*?)\s*>\s*([^<]*?)\s*<\/Link>/g, (match, attrs, content) => {
    attrs = attrs.replace(/className="([^"]*)\s*([^"]*)"/g, 'className="$1 $2"');
    return `<Link ${attrs}>${content}</Link>`;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(
    /<p className="Professional 404 solutions and services\s*"\s*>\s*\$2\s*<\/p>/g,
    '<p className="text-xl text-gray-300 mb-8">\n              Professional 404 solutions and services\n            </p>'
  );
  
  fixed = fixed.replace(
    /<p className="Expert guidance for your 5G transformation journey\s*"\s*>\s*\$2\s*<\/p>/g,
    '<p className="text-xl text-gray-600 max-w-3xl mx-auto">\n            Expert guidance for your 5G transformation journey\n          </p>'
  );
  
  fixed = fixed.replace(
    /<h3 className="text-xl font-semibold text-gray-900 mb-4"\s*>\s*<\/h3>\s*([^<]+)\s*<\/h3>/g,
    '<h3 className="text-xl font-semibold text-gray-900 mb-4">\n                $1\n              </h3>'
  );
  
  fixed = fixed.replace(
    /<p className="\{service\.description\}\s*"\s*>\s*\$2\s*<\/p>/g,
    '<p className="text-gray-600 mb-4">\n                {service.description}\n              </p>'
  );
  
  fixed = fixed.replace(
    /className="inline-flex items-center text-blue-600 hover: text-blue-800font-medium"/g,
    'className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"'
  );
  
  fixed = fixed.replace(
    /className="bg-white rounded-lg shadow-lgp-6"/g,
    'className="bg-white rounded-lg shadow-lg p-6"'
  );
  
  // Fix malformed object properties
  fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
  fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  
  return fixed;
}

// Main function to process all files
async function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixAllRemainingErrors(content);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
processFiles().catch(console.error);