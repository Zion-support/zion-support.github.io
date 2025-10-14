import fs from 'fs';
import { glob } from 'glob';

// Function to fix missing div closing tags
function fixMissingDivTags(content) {
  let fixed = content;
  
  // Count opening and closing div tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    
    // Add missing closing div tags at the end of the component
    const lines = fixed.split('\n');
    const lastLineIndex = lines.length - 1;
    
    // Find the last closing tag before the export
    let insertIndex = lastLineIndex;
    for (let i = lastLineIndex; i >= 0; i--) {
      if (lines[i].includes('export default') || lines[i].includes('}')) {
        insertIndex = i;
        break;
      }
    }
    
    // Insert missing closing div tags
    for (let i = 0; i < missingDivs; i++) {
      lines.splice(insertIndex, 0, '      </div>');
    }
    
    fixed = lines.join('\n');
  }
  
  return fixed;
}

// Function to fix specific structural issues
function fixStructuralIssues(content) {
  let fixed = content;
  
  // Fix common patterns where divs are not properly closed
  const patterns = [
    // Fix 404 page structure
    {
      pattern: /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">[\s\S]*?<\/div>/g,
      replacement: `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
    },
    // Fix 5G edge computing page structure
    {
      pattern: /<div className="bg-green-50 border border-green-200 rounded-lg p-6">[\s\S]*?<div className="bg-purple-50 border border-purple-200 rounded-lg p-6">[\s\S]*?<\/div>/g,
      replacement: `<div className="bg-green-50 border border-green-200 rounded-lg p-6">
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
    }
  ];
  
  patterns.forEach(({ pattern, replacement }) => {
    fixed = fixed.replace(pattern, replacement);
  });
  
  return fixed;
}

// Function to fix App.tsx structure
function fixAppTsx(content) {
  let fixed = content;
  
  // Fix App.tsx structure
  if (content.includes('App.tsx') || content.includes('function App()')) {
    fixed = fixed.replace(
      /<Router>\s*<div className="App">[\s\S]*?<\/div>\s*<\/div>\s*<\/Router>/g,
      `<Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>`
    );
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
      fixed = fixMissingDivTags(fixed);
      fixed = fixStructuralIssues(fixed);
      fixed = fixAppTsx(fixed);
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