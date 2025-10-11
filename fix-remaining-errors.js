#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  let fixed = content;
  
  // Fix empty React.Fragment tags
  fixed = fixed.replace(/<React\.Fragment><\/React\.Fragment>/g, '');
  fixed = fixed.replace(/<React\.Fragment>\s*<\/React\.Fragment>/g, '');
  
  // Fix JSX expressions that need single parent
  const returnMatch = fixed.match(/return\s*\(\s*([\s\S]*?)\s*\)\s*;?\s*}/);
  if (returnMatch) {
    const returnContent = returnMatch[1].trim();
    const lines = returnContent.split('\n');
    
    // Check if there are multiple top-level elements
    let topLevelElements = 0;
    let inJSX = false;
    let braceCount = 0;
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.includes('//')) {
        if (braceCount === 0) {
          topLevelElements++;
        }
        inJSX = true;
      }
      if (trimmed.includes('{')) {
        braceCount += (line.match(/\{/g) || []).length;
      }
      if (trimmed.includes('}')) {
        braceCount -= (line.match(/\}/g) || []).length;
      }
    }
    
    // If multiple top-level elements, wrap in fragment
    if (topLevelElements > 1 && !returnContent.includes('<>') && !returnContent.includes('<React.Fragment>')) {
      fixed = fixed.replace(returnMatch[0], `return (\n    <>\n${returnContent}\n    </>\n  );`);
    }
  }
  
  // Fix missing closing tags
  const openTags = [];
  const lines = fixed.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track opening tags
    const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?>(?!\s*<\/\1>)/g);
    if (openTagMatch) {
      openTagMatch.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1];
        if (!['img', 'br', 'hr', 'input', 'meta', 'link', 'Helmet'].includes(tagName)) {
          openTags.push(tagName);
        }
      });
    }
    
    // Track closing tags
    const closeTagMatch = line.match(/<\/(\w+)>/g);
    if (closeTagMatch) {
      closeTagMatch.forEach(tag => {
        const tagName = tag.match(/<\/(\w+)>/)[1];
        const index = openTags.lastIndexOf(tagName);
        if (index !== -1) {
          openTags.splice(index, 1);
        }
      });
    }
    
    fixedLines.push(line);
    
    // Add missing closing tags at the end
    if (i === lines.length - 1 && openTags.length > 0) {
      for (let j = openTags.length - 1; j >= 0; j--) {
        fixedLines.push('  '.repeat(j + 1) + `</${openTags[j]}>`);
      }
    }
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix missing imports
  if (fixed.includes('Globe') && !fixed.includes("import { Globe }")) {
    fixed = fixed.replace(
      /import { ([^}]+) } from 'lucide-react'/,
      (match, imports) => {
        if (!imports.includes('Globe')) {
          return `import { ${imports}, Globe } from 'lucide-react'`;
        }
        return match;
      }
    );
  }
  
  // Fix malformed JSX
  fixed = fixed.replace(/\{\s*([^}]*?)\s*\}/g, (match, content) => {
    if (content.trim() && !content.includes('{') && !content.includes('}')) {
      return `{${content.trim()}}`;
    }
    return match;
  });
  
  // Fix missing semicolons in JSX
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, word) => {
    if (['return', 'const', 'let', 'var', 'function', 'if', 'else', 'for', 'while'].includes(word)) {
      return match;
    }
    if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('<')) {
      return match + ';';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if not a React component file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) {
      return;
    }
    
    // Fix specific errors
    const fixed = fixSpecificErrors(content);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
async function main() {
  console.log('Starting remaining error fixes...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx',
    '*.tsx'
  ];
  
  let allFiles = [];
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  
  console.log(`Found ${allFiles.length} files to process`);
  
  // Process each file
  allFiles.forEach(processFile);
  
  console.log('Remaining error fixes completed!');
}

// Run the main function
main().catch(console.error);

export { fixSpecificErrors, processFile };
import path from 'path';
import { glob } from 'glob';

// Function to fix specific parsing errors
function fixParsingErrors(content) {
  let fixed = content;

  // Fix empty object in arrays
  fixed = fixed.replace(/{\s*},\s*{/g, '},\n    {');
  fixed = fixed.replace(/{\s*},/g, '}');
  fixed = fixed.replace(/,\s*{\s*}/g, '');

  // Fix missing properties in objects
  fixed = fixed.replace(/{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*icon:\s*(\w+),/g, 
    '{\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',');

  // Fix malformed JSX expressions
  fixed = fixed.replace(/{\s*}\s*}/g, '}');
  fixed = fixed.replace(/{\s*}\s*\)/g, ')');
  fixed = fixed.replace(/{\s*}\s*,/g, ',');

  // Fix missing closing parentheses
  fixed = fixed.replace(/\(\s*{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\]\s*}\s*\)/g, 
    '(\n    {\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',\n      benefits: [$4]\n    }\n  )');

  // Fix orphaned closing tags
  fixed = fixed.replace(/^\s*<\/[^>]+>\s*$/gm, '');
  
  // Fix missing opening tags
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>/g, '$1</div>');
  fixed = fixed.replace(/(\s*)<\/section>\s*<\/section>/g, '$1</section>');

  // Fix const declaration issues
  fixed = fixed.replace(/^\s*const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [\n    // Features will be added here\n  ];');

  // Fix missing return statement
  if (fixed.includes('const') && fixed.includes('React.FC') && !fixed.includes('return (')) {
    fixed = fixed.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{)/, '$1\n  return (');
  }

  // Fix component structure
  if (fixed.includes('return (') && !fixed.includes('<div className=')) {
    fixed = fixed.replace(/return\s*\(\s*/, 'return (\n    <div className="min-h-screen bg-gray-50">\n      ');
    fixed = fixed.replace(/(\s*)\s*\)\s*;?\s*$/, '\n    </div>\n  );');
  }

  return fixed;
}

// Function to fix specific file issues
function fixSpecificFile(filePath, content) {
  let fixed = content;

  // Fix specific patterns for different files
  if (filePath.includes('5g-implementation')) {
    // Fix the specific syntax error
    fixed = fixed.replace(/description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer\.',\s*},/, 
      'description: \'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.\',\n      benefits: [\'High-speed data transfer\', \'Seamless connectivity\', \'Enhanced user experience\', \'Future-proof technology\']\n    },');
  }

  if (filePath.includes('ai-3d-generation')) {
    // Fix empty object in features array
    fixed = fixed.replace(/const features = \[\s*{\s*},\s*{/g, 'const features = [\n    {');
  }

  if (filePath.includes('ai-analytics')) {
    // Fix const declaration issue
    fixed = fixed.replace(/^\s*const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [\n    // Features will be added here\n  ];');
  }

  return fixed;
}

// Main function to process files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TSX files with remaining errors...');
  const files = await glob(pattern);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = fixParsingErrors(content);
      fixed = fixSpecificFile(file, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run the script
main().catch(console.error);
