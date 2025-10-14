const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix JSX parsing errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed paragraph tags with broken content
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*"\s*>\$[0-9]+<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<p className="text-white text-lg mb-8">${cleanText}</p>`;
  });
  
  // Fix malformed paragraph tags
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<p className="text-white text-lg mb-8">${cleanText}</p>`;
  });
  
  // Fix malformed h3 tags with extra spaces
  fixed = fixed.replace(/<h3 className="[^"]*"\s*>\s*([^<]+)\s*<\/h3>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<h3 className="text-lg font-semibold mb-2">${cleanText}</h3>`;
  });
  
  // Fix malformed p tags with extra spaces
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<p className="text-gray-600">${cleanText}</p>`;
  });
  
  // Remove duplicate content sections
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inDuplicateSection = false;
  let duplicateCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for duplicate sections
    if (line.includes('Custom Implementation') && duplicateCount > 0) {
      inDuplicateSection = true;
      continue;
    }
    
    if (line.includes('24/7 Support') && duplicateCount > 0) {
      inDuplicateSection = true;
      continue;
    }
    
    if (line.includes('Expert Solutions') && duplicateCount > 0) {
      inDuplicateSection = true;
      continue;
    }
    
    // Count occurrences
    if (line.includes('Custom Implementation') || line.includes('24/7 Support') || line.includes('Expert Solutions')) {
      duplicateCount++;
    }
    
    // Check if we're exiting the duplicate section
    if (inDuplicateSection && line.includes('</div>') && line.trim() === '</div>') {
      inDuplicateSection = false;
      continue;
    }
    
    if (!inDuplicateSection) {
      cleanedLines.push(line);
    }
  }
  
  // Fix missing closing tags for JSX fragments
  const openFragments = (cleanedLines.join('\n').match(/<>/g) || []).length;
  const closeFragments = (cleanedLines.join('\n').match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missing = openFragments - closeFragments;
    for (let i = 0; i < missing; i++) {
      cleanedLines.push('    </>');
    }
  }
  
  return cleanedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting JSX error fixes...');
  
  // Get all page.tsx files
  const files = await glob('app/**/page.tsx', { cwd: __dirname });
  
  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(__dirname, file);
    if (processFile(fullPath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);