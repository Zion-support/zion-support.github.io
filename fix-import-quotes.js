#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unterminated string literals in imports
function fixImportQuotes(content) {
  let fixed = content;
  let changes = 0;

  // Fix unterminated import statements
  fixed = fixed.replace(/import React from 'react;/g, "import React from 'react';");
  fixed = fixed.replace(/import React from 'react\s*$/gm, "import React from 'react';");
  fixed = fixed.replace(/import React from 'react\n/g, "import React from 'react';\n");
  
  // Fix other common unterminated imports
  fixed = fixed.replace(/import \{ ([^}]+) \} from 'lucide-react;/g, "import { $1 } from 'lucide-react';");
  fixed = fixed.replace(/import \{ ([^}]+) \} from 'lucide-react\s*$/gm, "import { $1 } from 'lucide-react';");
  fixed = fixed.replace(/import \{ ([^}]+) \} from 'lucide-react\n/g, "import { $1 } from 'lucide-react';\n");
  
  // Fix Link import
  fixed = fixed.replace(/import \{ Link \} from 'react-router-dom;/g, "import { Link } from 'react-router-dom';");
  fixed = fixed.replace(/import \{ Link \} from 'react-router-dom\s*$/gm, "import { Link } from 'react-router-dom';");
  fixed = fixed.replace(/import \{ Link \} from 'react-router-dom\n/g, "import { Link } from 'react-router-dom';\n");
  
  // Fix EnhancedSEO import
  fixed = fixed.replace(/import EnhancedSEO from '\.\.\/components\/EnhancedSEO;/g, "import EnhancedSEO from '../components/EnhancedSEO';");
  fixed = fixed.replace(/import EnhancedSEO from '\.\.\/components\/EnhancedSEO\s*$/gm, "import EnhancedSEO from '../components/EnhancedSEO';");
  fixed = fixed.replace(/import EnhancedSEO from '\.\.\/components\/EnhancedSEO\n/g, "import EnhancedSEO from '../components/EnhancedSEO';\n");

  // Fix any other unterminated string literals in the first line
  fixed = fixed.replace(/^import [^']*'[^']*$/gm, (match) => {
    if (!match.endsWith("';")) {
      return match + "';";
    }
    return match;
  });

  // Fix missing closing quotes in function parameters
  fixed = fixed.replace(/className = \s*\)/g, "className = ''");
  fixed = fixed.replace(/className = \s*$/gm, "className = ''");

  // Count changes
  if (fixed !== content) {
    changes = 1;
  }

  return { content: fixed, changes };
}

// Function to process all TSX files
async function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  let totalFiles = 0;
  let totalChanges = 0;

  console.log(`Found ${files.length} TSX files to process...`);

  files.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const { content: fixed, changes } = fixImportQuotes(content);
      
      if (changes > 0) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        totalChanges++;
      }
      
      totalFiles++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`\nProcessed ${totalFiles} files, fixed ${totalChanges} files.`);
}

// Run the fix
processFiles().catch(console.error);