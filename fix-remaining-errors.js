import fs from 'fs';
import { glob } from 'glob';

// Function to fix missing h3 closing tags
function fixMissingH3Tags(content) {
  // Look for h3 tags that are not properly closed
  const h3Pattern = /<h3[^>]*>([^<]*)</g;
  let fixed = content;
  
  // Find all h3 tags and ensure they have closing tags
  const h3Matches = [...content.matchAll(/<h3[^>]*>([^<]*)</g)];
  
  h3Matches.forEach(match => {
    const fullMatch = match[0];
    const content = match[1];
    const expectedClose = fullMatch.replace(/<h3[^>]*>/, `</h3>`);
    
    // Check if the h3 tag is properly closed
    if (!content.includes('</h3>')) {
      // Find the line with this h3 tag and add closing tag
      const lines = fixed.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(fullMatch) && !lines[i].includes('</h3>')) {
          // Add closing h3 tag
          lines[i] = lines[i].replace(fullMatch, fullMatch + '</h3>');
          break;
        }
      }
      fixed = lines.join('\n');
    }
  });
  
  return fixed;
}

// Function to fix specific structural issues
function fixStructuralIssues(content) {
  let fixed = content;
  
  // Fix missing closing tags in common patterns
  const patterns = [
    // Fix h3 tags that are missing closing tags
    {
      pattern: /<h3 className="text-lg font-semibold text-green-900 mb-2">\s*Custom Implementation\s*</g,
      replacement: '<h3 className="text-lg font-semibold text-green-900 mb-2">\n                  Custom Implementation\n                </h3>'
    },
    {
      pattern: /<h3 className="text-lg font-semibold text-purple-900 mb-2">\s*24\/7 Support\s*</g,
      replacement: '<h3 className="text-lg font-semibold text-purple-900 mb-2">\n                  24/7 Support\n                </h3>'
    },
    {
      pattern: /<h3 className="text-lg font-semibold text-blue-900 mb-2">\s*Expert Solutions\s*</g,
      replacement: '<h3 className="text-lg font-semibold text-blue-900 mb-2">\n                  Expert Solutions\n                </h3>'
    }
  ];
  
  patterns.forEach(({ pattern, replacement }) => {
    fixed = fixed.replace(pattern, replacement);
  });
  
  return fixed;
}

// Function to fix import/export issues
function fixImportExportIssues(content) {
  let fixed = content;
  
  // Fix common import issues
  fixed = fixed.replace(/import\s+{\s*}\s+from\s+['"][^'"]*['"];?/g, '');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+([^;]+);\s*$/gm, (match, importStatement) => {
    if (!importStatement.includes('from')) {
      return '';
    }
    return match;
  });
  
  return fixed;
}

// Function to fix JSX fragment issues
function fixJSXFragmentIssues(content) {
  let fixed = content;
  
  // Fix missing closing fragment tags
  const fragmentPattern = /<>\s*$/gm;
  const closingFragmentPattern = /<\/>\s*$/gm;
  
  const openFragments = (fixed.match(fragmentPattern) || []).length;
  const closeFragments = (fixed.match(closingFragmentPattern) || []).length;
  
  if (openFragments > closeFragments) {
    // Add missing closing fragment tags
    const missingFragments = openFragments - closeFragments;
    for (let i = 0; i < missingFragments; i++) {
      fixed += '\n    </>';
    }
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFiles(filePath, content) {
  let fixed = content;
  
  // Fix 404 page
  if (filePath.includes('404/page.tsx')) {
    fixed = fixed.replace(
      /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">[\s\S]*?<\/div>/g,
      `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>`
    );
  }
  
  // Fix 5G edge computing page
  if (filePath.includes('5g-edge-computing/page.tsx')) {
    fixed = fixed.replace(
      /<div className="bg-green-50 border border-green-200 rounded-lg p-6">[\s\S]*?<div className="bg-purple-50 border border-purple-200 rounded-lg p-6">[\s\S]*?<\/div>/g,
      `<div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>`
    );
  }
  
  // Fix 5G performance page
  if (filePath.includes('5g-performance/page.tsx')) {
    fixed = fixed.replace(
      /5gPerformance Services/g,
      '5G Performance Services'
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
      fixed = fixMissingH3Tags(fixed);
      fixed = fixStructuralIssues(fixed);
      fixed = fixImportExportIssues(fixed);
      fixed = fixJSXFragmentIssues(fixed);
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