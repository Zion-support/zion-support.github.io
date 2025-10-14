#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;

  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import React from 'react';'/g, "import React from 'react';");
  fixed = fixed.replace(/import React from 'react';"/g, 'import React from "react";');
  fixed = fixed.replace(/import React from "react";'/g, 'import React from "react";');
  fixed = fixed.replace(/import React from "react";"/g, 'import React from "react";');

  // Fix any other unterminated string literals
  fixed = fixed.replace(/'([^']*?)';'/g, "'$1';");
  fixed = fixed.replace(/"([^"]*?)";"/g, '"$1";');

  // Fix malformed import statements
  fixed = fixed.replace(/import React from 'react';'/g, "import React from 'react';");
  fixed = fixed.replace(/import React from "react";'/g, 'import React from "react";');

  // Fix any remaining syntax issues
  fixed = fixed.replace(/;\s*'/g, ';');
  fixed = fixed.replace(/;\s*"/g, ';');

  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixRemainingErrors(content);
    
    // Additional file-specific fixes for components
    if (filePath.includes('components/') && content.includes('This component is under development')) {
      const componentName = filePath.split('/').pop().replace('.tsx', '');
      content = `import React from 'react';

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">${componentName}</h1>
        <p className="text-gray-300 text-lg">This component is under development.</p>
      </div>
    </div>
  );
};

export default ${componentName};`;
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting remaining error fixes...');

  // Get all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files.`);
}

main().catch(console.error);