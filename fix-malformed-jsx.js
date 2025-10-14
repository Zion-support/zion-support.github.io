import fs from 'fs';
import { glob } from 'glob';

// Function to fix malformed JSX structure
function fixMalformedJSX(content) {
  let fixed = content;
  
  // Fix malformed p tags with broken className
  fixed = fixed.replace(/<p className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/p>/g, '<p className="$1 $2">$3</p>');
  
  // Fix malformed p tags with broken content
  fixed = fixed.replace(/<p className="([^"]*)"\s*>\s*([^<]+)\s*<\/p>/g, '<p className="$1">$2</p>');
  
  // Fix malformed p tags with broken className and content
  fixed = fixed.replace(/<p className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/p>/g, '<p className="$1 $2">$3</p>');
  
  // Fix malformed h3 tags with broken content
  fixed = fixed.replace(/<h3 className="([^"]*)"\s*>\s*<\/h3>\s*([^<]+)\s*<\/h3>/g, '<h3 className="$1">$2</h3>');
  
  // Fix malformed h3 tags with broken className
  fixed = fixed.replace(/<h3 className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/h3>/g, '<h3 className="$1 $2">$3</h3>');
  
  // Fix malformed div tags with broken className
  fixed = fixed.replace(/<div className="([^"]*)\s*([^"]*)"\s*>\s*([^<]+)\s*<\/div>/g, '<div className="$1 $2">$3</div>');
  
  // Fix malformed Link tags with broken className
  fixed = fixed.replace(/<Link\s+([^>]*?)\s*>\s*([^<]*?)\s*<\/Link>/g, (match, attrs, content) => {
    // Fix className attributes
    attrs = attrs.replace(/className="([^"]*)\s*([^"]*)"/g, 'className="$1 $2"');
    return `<Link ${attrs}>${content}</Link>`;
  });
  
  return fixed;
}

// Function to fix specific patterns
function fixSpecificPatterns(content) {
  let fixed = content;
  
  // Fix 404 page specific issues
  fixed = fixed.replace(
    /<p className="Professional 404 solutions and services\s*"\s*>\s*\$2\s*<\/p>/g,
    '<p className="text-xl text-gray-300 mb-8">\n              Professional 404 solutions and services\n            </p>'
  );
  
  // Fix 5G consulting page specific issues
  fixed = fixed.replace(
    /<p className="Expert guidance for your 5G transformation journey\s*"\s*>\s*\$2\s*<\/p>/g,
    '<p className="text-xl text-gray-600 max-w-3xl mx-auto">\n            Expert guidance for your 5G transformation journey\n          </p>'
  );
  
  // Fix malformed h3 tags
  fixed = fixed.replace(
    /<h3 className="text-xl font-semibold text-gray-900 mb-4"\s*>\s*<\/h3>\s*([^<]+)\s*<\/h3>/g,
    '<h3 className="text-xl font-semibold text-gray-900 mb-4">\n                $1\n              </h3>'
  );
  
  // Fix malformed p tags in service descriptions
  fixed = fixed.replace(
    /<p className="\{service\.description\}\s*"\s*>\s*\$2\s*<\/p>/g,
    '<p className="text-gray-600 mb-4">\n                {service.description}\n              </p>'
  );
  
  // Fix malformed Link tags
  fixed = fixed.replace(
    /className="inline-flex items-center text-blue-600 hover: text-blue-800font-medium"/g,
    'className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"'
  );
  
  // Fix malformed div tags
  fixed = fixed.replace(
    /className="bg-white rounded-lg shadow-lgp-6"/g,
    'className="bg-white rounded-lg shadow-lg p-6"'
  );
  
  return fixed;
}

// Function to fix missing closing tags
function fixMissingClosingTags(content) {
  let fixed = content;
  
  // Count opening and closing tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  // Fix missing div tags
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
  
  // Fix missing fragment tags
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
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFiles(filePath, content) {
  let fixed = content;
  
  // Fix 404 page
  if (filePath.includes('404/page.tsx')) {
    fixed = fixed.replace(
      /<p className="Professional 404 solutions and services\s*"\s*>\s*\$2\s*<\/p>/g,
      '<p className="text-xl text-gray-300 mb-8">\n              Professional 404 solutions and services\n            </p>'
    );
  }
  
  // Fix 5G consulting page
  if (filePath.includes('5g-consulting/page.tsx')) {
    fixed = fixed.replace(
      /<p className="Expert guidance for your 5G transformation journey\s*"\s*>\s*\$2\s*<\/p>/g,
      '<p className="text-xl text-gray-600 max-w-3xl mx-auto">\n            Expert guidance for your 5G transformation journey\n          </p>'
    );
  }
  
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
      let fixed = content;
      
      // Apply all fixes
      fixed = fixMalformedJSX(fixed);
      fixed = fixSpecificPatterns(fixed);
      fixed = fixMissingClosingTags(fixed);
      fixed = fixSpecificFiles(filePath, fixed);
      
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