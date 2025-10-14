import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX parsing errors
function fixJSXErrors(content) {
  // Fix malformed JSX elements
  let fixed = content;
  
  // Fix malformed paragraph tags
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<p className="text-white text-lg mb-8">${cleanText}</p>`;
  });
  
  // Fix malformed JSX with broken quotes and content
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*"\s*>\$[0-9]+<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<p className="text-white text-lg mb-8">${cleanText}</p>`;
  });
  
  // Fix malformed JSX elements with extra spaces and quotes
  fixed = fixed.replace(/<h3 className="[^"]*"\s*>\s*([^<]+)\s*<\/h3>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<h3 className="text-lg font-semibold mb-2">${cleanText}</h3>`;
  });
  
  fixed = fixed.replace(/<p className="[^"]*"\s*>\s*([^<]+)\s*<\/p>/g, (match, text) => {
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return `<p className="text-gray-600">${cleanText}</p>`;
  });
  
  // Fix missing closing tags for JSX fragments
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    // Add missing closing fragment tags
    const missing = openFragments - closeFragments;
    for (let i = 0; i < missing; i++) {
      fixed += '\n    </>';
    }
  }
  
  // Fix malformed JSX structure - remove duplicate content
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inDuplicateSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we're entering a duplicate section
    if (line.includes('Custom Implementation') && cleanedLines.some(l => l.includes('Custom Implementation'))) {
      inDuplicateSection = true;
      continue;
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
console.log('Starting JSX error fixes...');

// Get all page.tsx files
const files = await glob('app/**/page.tsx', { cwd: import.meta.url.replace('file://', '') });

let fixedCount = 0;
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);