import fs from 'fs';
import { glob } from 'glob';

// Function to fix malformed className attributes
function fixClassNameAttributes(content) {
  let fixed = content;
  
  // Fix className attributes that are missing spaces
  fixed = fixed.replace(/className="([^"]*)([a-zA-Z])([a-zA-Z])/g, (match, prefix, char1, char2) => {
    // Check if this looks like a malformed className
    if (char1 === 'm' && char2 === 'b') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'p' && char2 === 'y') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 't' && char2 === 'o') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'm' && char2 === 'x') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'w' && char2 === 'h') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'g' && char2 === 'r') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'l' && char2 === 'g') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'm' && char2 === 'd') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 's' && char2 === 'm') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === 'x' && char2 === 'l') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === '3' && char2 === 'x') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === '4' && char2 === 'x') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === '5' && char2 === 'x') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    if (char1 === '6' && char2 === 'x') {
      return match.replace(char1 + char2, ' ' + char1 + char2);
    }
    return match;
  });
  
  // Fix specific common patterns
  const patterns = [
    { from: 'bg-gradient-to-br from-slate-900 via-purple-900to-slate-900', to: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' },
    { from: 'container mx-auto px-4py-16', to: 'container mx-auto px-4 py-16' },
    { from: 'text-4xl font-bold text-whitemb-8', to: 'text-4xl font-bold text-white mb-8' },
    { from: 'text-xl text-gray-300mb-8', to: 'text-xl text-gray-300 mb-8' },
    { from: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8mt-12', to: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12' },
    { from: 'bg-blue-50 border border-blue-200 rounded-lgp-6', to: 'bg-blue-50 border border-blue-200 rounded-lg p-6' },
    { from: 'text-lg font-semibold text-blue-900mb-2', to: 'text-lg font-semibold text-blue-900 mb-2' },
    { from: 'bg-green-50 border border-green-200 rounded-lgp-6', to: 'bg-green-50 border border-green-200 rounded-lg p-6' },
    { from: 'text-lg font-semibold text-green-900mb-2', to: 'text-lg font-semibold text-green-900 mb-2' },
    { from: 'bg-purple-50 border border-purple-200 rounded-lgp-6', to: 'bg-purple-50 border border-purple-200 rounded-lg p-6' },
    { from: 'text-lg font-semibold text-purple-900mb-2', to: 'text-lg font-semibold text-purple-900 mb-2' },
    { from: 'min-h-screenbg-gray-50', to: 'min-h-screen bg-gray-50' },
    { from: 'text-4xl font-bold text-gray-900mb-6', to: 'text-4xl font-bold text-gray-900 mb-6' },
    { from: 'text-xl text-gray-600 max-w-3xlmx-auto', to: 'text-xl text-gray-600 max-w-3xl mx-auto' }
  ];
  
  patterns.forEach(({ from, to }) => {
    fixed = fixed.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
  });
  
  return fixed;
}

// Function to fix malformed JSX structure
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags
  const lines = fixed.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix h3 tags that are missing closing tags
    if (line.includes('<h3') && !line.includes('</h3>') && !line.includes('/>')) {
      // Check if the next line has content that should be inside the h3
      if (i + 1 < lines.length && lines[i + 1].trim() && !lines[i + 1].includes('<')) {
        // Add closing h3 tag
        line = line.trim() + '</h3>';
      }
    }
    
    // Fix p tags that are missing closing tags
    if (line.includes('<p') && !line.includes('</p>') && !line.includes('/>')) {
      // Check if the next line has content that should be inside the p
      if (i + 1 < lines.length && lines[i + 1].trim() && !lines[i + 1].includes('<')) {
        // Add closing p tag
        line = line.trim() + '</p>';
      }
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix import statements
function fixImportStatements(content) {
  let fixed = content;
  
  // Fix malformed import statements with &apos;
  fixed = fixed.replace(/from &apos;([^&]+)&apos;/g, "from '$1'");
  
  // Fix other malformed imports
  fixed = fixed.replace(/import\s+{\s*}\s+from\s+['"][^'"]*['"];?/g, '');
  
  return fixed;
}

// Function to fix specific file issues
function fixSpecificFileIssues(filePath, content) {
  let fixed = content;
  
  // Fix 5G edge computing page
  if (filePath.includes('5g-edge-computing/page.tsx')) {
    fixed = fixed.replace(
      /<div className="bg-green-50 border border-green-200 rounded-lgp-6">[\s\S]*?<div className="bg-purple-50 border border-purple-200 rounded-lgp-6">[\s\S]*?<\/div>/g,
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
  
  // Fix App.tsx
  if (filePath.includes('App.tsx')) {
    fixed = fixed.replace(
      /import { BrowserRouter as Router, Routes, Route } from &apos;react-router-dom&apos;;/g,
      "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';"
    );
    fixed = fixed.replace(
      /import { HelmetProvider } from &apos;react-helmet-async&apos;;/g,
      "import { HelmetProvider } from 'react-helmet-async';"
    );
    fixed = fixed.replace(
      /import HomePage from &apos;\.\/page&apos;;/g,
      "import HomePage from './page';"
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
      fixed = fixClassNameAttributes(fixed);
      fixed = fixJSXStructure(fixed);
      fixed = fixImportStatements(fixed);
      fixed = fixSpecificFileIssues(filePath, fixed);
      
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