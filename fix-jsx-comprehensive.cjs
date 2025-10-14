const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix comprehensive JSX errors
function fixJSXComprehensive(content) {
  let fixed = content;
  
  // Remove malformed paragraph tags with $2 content
  fixed = fixed.replace(/<p className="[^"]*">\$2<\/p>/g, '');
  
  // Fix malformed paragraph tags
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    if (cleanText.includes('Professional') || cleanText.includes('solutions and services')) {
      return `<p className="text-white text-lg mb-8">${cleanText}</p>`;
    }
    return `<p className="text-gray-600">${cleanText}</p>`;
  });
  
  // Fix malformed h3 tags
  fixed = fixed.replace(/<h3 className="[^"]*"\s*>\s*([^<]+)\s*<\/h3>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<h3 className="text-lg font-semibold mb-2">${cleanText}</h3>`;
  });
  
  // Remove duplicate and malformed div structures
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inDuplicateSection = false;
  let divCount = 0;
  let inGrid = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track div opening and closing
    if (line.includes('<div className="grid')) {
      inGrid = true;
      divCount++;
    } else if (line.includes('</div>') && inGrid) {
      divCount--;
      if (divCount === 0) {
        inGrid = false;
      }
    }
    
    // Check for duplicate sections
    if (line.includes('Custom Implementation') && cleanedLines.some(l => l.includes('Custom Implementation'))) {
      inDuplicateSection = true;
      continue;
    }
    
    if (line.includes('24/7 Support') && cleanedLines.some(l => l.includes('24/7 Support'))) {
      inDuplicateSection = true;
      continue;
    }
    
    if (line.includes('Expert Solutions') && cleanedLines.some(l => l.includes('Expert Solutions'))) {
      inDuplicateSection = true;
      continue;
    }
    
    // Check if we're exiting the duplicate section
    if (inDuplicateSection && line.includes('</div>') && line.trim() === '</div>') {
      inDuplicateSection = false;
      continue;
    }
    
    // Skip malformed lines
    if (line.includes('</p>') && line.includes('</p>') && line.split('</p>').length > 2) {
      continue;
    }
    
    // Skip lines with just closing tags without proper structure
    if (line.trim() === '</div>' && !inGrid && divCount <= 0) {
      continue;
    }
    
    if (!inDuplicateSection) {
      cleanedLines.push(line);
    }
  }
  
  // Fix missing closing tags
  let result = cleanedLines.join('\n');
  
  // Count opening and closing divs
  const openDivs = (result.match(/<div/g) || []).length;
  const closeDivs = (result.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missing = openDivs - closeDivs;
    for (let i = 0; i < missing; i++) {
      result += '\n      </div>';
    }
  }
  
  // Fix missing closing tags for JSX fragments
  const openFragments = (result.match(/<>/g) || []).length;
  const closeFragments = (result.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missing = openFragments - closeFragments;
    for (let i = 0; i < missing; i++) {
      result += '\n    </>';
    }
  }
  
  // Remove content after export statement
  const exportMatch = result.match(/export default \w+;/);
  if (exportMatch) {
    const exportIndex = result.indexOf(exportMatch[0]);
    result = result.substring(0, exportIndex + exportMatch[0].length);
  }
  
  // Clean up extra whitespace and empty lines
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return result;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXComprehensive(content);
    
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
  console.log('Starting comprehensive JSX fixes...');
  
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