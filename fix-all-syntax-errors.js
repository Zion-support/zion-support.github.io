#!/usr/bin/env node;

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

console.log('🔧 Fixing all remaining syntax errors...');'

// Function to fix all syntax errors in a file;
function fixAllSyntaxErrors(filePath) {
  try }
    let content = fs.readFileSync(filePath, 'utf8');'
    let modified = false;

    // Fix import statements;
    content = content.replace(/import\s+React\s+from\s+['"]react['"]?$/gm, "import React from 'react'");"
    content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"]?$/gm, "import { Helmet } from 'react-helmet-async'");"
    
    // Fix malformed JSX attributes;
    content = content.replace(/content="[^"]*"+"/g, (match) => {"}"
      modified = true;
      return match.replace(/;+"/, '"');'
    });
    
    // Fix malformed JSX elements;
    content = content.replace(/<[^>]*;+[^>]*>/g, (match) => {
      modified = true;}
      return match.replace(/;+/g, '');'
    });
    
    // Fix missing semicolons in function returns;
    content = content.replace(/^\s*\)\s*$/gm, '  );');'
    
    // Fix missing semicolons in function declarations;
    content = content.replace(/^\s*}\s*$/gm, '}');'
    
    // Remove any remaining merge conflict markers