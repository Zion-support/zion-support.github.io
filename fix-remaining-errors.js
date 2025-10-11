#!/usr/bin/env node

import fs from 'fs';
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