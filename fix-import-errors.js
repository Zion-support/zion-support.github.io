#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed import statements - the main issue
    content = content
      // Fix imports with missing quotes
      .replace(/import\s+([^;]+)\s+from\s+['']([^';]+)[';];?/g, "import $1 from '$2';")
      .replace(/import\s+([^;]+)\s+from\s+['']([^';]+)[';];?/g, "import $1 from '$2';")
      
      // Fix specific common import patterns
      .replace(/import\s+react\s+from\s+['']react[';];?/g, "import React from 'react';")
      .replace(/import\s+React\s+from\s+['']react[';];?/g, "import React from 'react';")
      .replace(/import\s+Helmet\s+from\s+['']react-helmet-async[';];?/g, "import { Helmet } from 'react-helmet-async';")
      .replace(/import\s+ResponsiveContainer\s+from\s+['']\.\.\/components\/ResponsiveContainer[';];?/g, "import ResponsiveContainer from '../components/ResponsiveContainer';")
      .replace(/import\s+Link\s+from\s+['']react-router-dom[';];?/g, "import { Link } from 'react-router-dom';")
      .replace(/import\s+useState\s+from\s+['']react[';];?/g, "import { useState } from 'react';")
      .replace(/import\s+useEffect\s+from\s+['']react[';];?/g, "import { useEffect } from 'react';")
      .replace(/import\s+useCallback\s+from\s+['']react[';];?/g, "import { useCallback } from 'react';")
      .replace(/import\s+useMemo\s+from\s+['']react[';];?/g, "import { useMemo } from 'react';");
    
    // Fix missing default values in function parameters
    content = content
      .replace(/className\s*=\s*\{\s*\}\s*\)/g, 'className = '; })")
      .replace(/className\s*=\s*\{\s*\}\s*\)/g, 'className = '; })");
    
    // Fix malformed JSX fragments
    content = content
      .replace(/<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, "<><div /></>")
      .replace(/<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, "<><div /></>");
    
    // Fix malformed JSX closing tags
    content = content
      .replace(/<Helmet><\/Helmet>/g, "<Helmet />")
      .replace(/<title>([^<]+)<\/title>/g, "<title>$1</title>")
      .replace(/<meta\s+name="([^"]+)"\s+content="([^"]+)"\s*\/>/g, '<meta name="$1" content="$2" />');
    
    // Fix extra quotes in JSX
    content = content
      .replace(/"'/g, ';)
      .replace(/''/g, ';)
      .replace(/";"/g, ";")
      .replace(/';'/g, ";");
    
    // Fix malformed function declarations
    content = content
      .replace(/const\s+([^=]+)=\s*\([^)]*\)\s*=>\s*{[\s]*};[\s]*};/g, "const $1 = () => {\n  return null;\n};");
    
    // Fix interface names that start with numbers
    content = content
      .replace(/interface\s+404\s*{/g, "interface NotFoundProps {")
      .replace(/const\s+404:/g, "const NotFound:");
    
    // Fix unterminated string literals
    content = content
      .replace(/import\s+([^;]+);['"]/g, "import $1;")
      .replace(/import\s+([^;]+);['"]/g, "import $1;");
    
    // Fix malformed JSX expressions
    content = content
      .replace(/{`([^`]+)`}/g, "{`$1`}");
    
    // Fix extra quotes in JSX text
    content = content
      .replace(/<h1[^>]*>([^<]+)<\/h1>/g, "<h1>$1</h1>")
      .replace(/<p[^>]*>([^<]+)<\/p>/g, "<p>$1</p>");
    
    // Fix malformed closing tags
    content = content
      .replace(/<\/div>[\s]*""[\s]*<\/div>/g, "</div></div>")
      .replace(/<\/section>[\s]*""[\s]*<\/section>/g, "</section></section>");
    
    // Fix extra quotes in attribute values
    content = content
      .replace(/="([^']+)';/g, '='$1';)
      .replace(/='([^']+)';/g, "='$1';);
    
    // Fix malformed object literals
    content = content
      .replace(/{[\s]*}/g, "{}");
    
    // Fix extra whitespace and newlines
    content = content
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/[\s]+$/gm, "");
    
    // Fix specific patterns found in the files
    content = content
      .replace(/import\s+react\s+from\s+['']react[';];?/g, "import React from 'react';")
      .replace(/import\s+React\s+from\s+['']react[';];?/g, "import React from 'react';")
      .replace(/import\s+Helmet\s+from\s+['']react-helmet-async[';];?/g, "import { Helmet } from 'react-helmet-async';")
      .replace(/import\s+ResponsiveContainer\s+from\s+['']\.\.\/components\/ResponsiveContainer[';];?/g, "import ResponsiveContainer from '../components/ResponsiveContainer';");
    
    // Fix malformed JSX fragments with missing closing tags
    content = content
      .replace(/<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, "<><div /></>")
      .replace(/<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, "<><div /></>");
    
    // Fix malformed function returns
    content = content
      .replace(/return\s*\([\s]*<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>[\s]*\);[\s]*};/g, "return (\n    <>\n      <div />\n    </>\n  );\n};");
    
    // Fix missing semicolons
    content = content
      .replace(/export\s+default\s+([^;]+)$/gm, "export default $1;");
    
    // Fix malformed JSX attributes
    content = content
      .replace(/className=\{`([^`]+)`\}/g, "className={`$1`}");
    
    // Fix unterminated template literals
    content = content
      .replace(/`([^']*)$/gm, ';$1';);
    
    // Fix extra quotes in JSX
    content = content
      .replace(/"'/g, ';)
      .replace(/''/g, ';);
    
    // Fix malformed JSX closing tags
    content = content
      .replace(/<Helmet><\/Helmet>/g, "<Helmet />");
    
    // Fix extra semicolons
    content = content
      .replace(/;/g, ";");
    
    // Fix malformed template literals
    content = content
      .replace(/`([^']*)$/gm, ';$1';);
    
    // Fix extra quotes in JSX attributes
    content = content
      .replace(/="([^']+)';/g, '='$1';)
      .replace(/='([^']+)';/g, "='$1';);
    
    // Clean up extra whitespace
    content = content
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/[\s]+$/gm, "");
    
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

async function main() {
  
  console.log('Starting import error fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**