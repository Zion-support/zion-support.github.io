#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files in app directory (excluding disabled dirs)
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', {
  ignore: ['**/node_modules/**', '**/app_disabled/**', '**/*.disabled/**']
});

let fixCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  // Replace next/link imports
  if (content.includes("from 'next/link'") || content.includes('from "next/link"')) {
    content = content.replace(
      /import\s+(\w+)\s+from\s+['"]next\/link['"]/g,
      "import { Link as $1 } from 'react-router-dom'"
    );
    // Also replace Link usage to use 'to' instead of 'href'
    content = content.replace(/href=/g, 'to=');
    modified = true;
  }
  
  // Replace next/dynamic imports
  if (content.includes("from 'next/dynamic'") || content.includes('from "next/dynamic"')) {
    content = content.replace(
      /import\s+dynamic\s+from\s+['"]next\/dynamic['"]/g,
      "import { lazy } from 'react'"
    );
    // Replace dynamic() calls with lazy()
    content = content.replace(
      /dynamic\s*\(\s*\(\s*\)\s*=>\s*import\s*\(([^)]+)\)\s*,\s*\{[^}]*\}\s*\)/g,
      'lazy(() => import($1))'
    );
    content = content.replace(
      /dynamic\s*\(\s*\(\s*\)\s*=>\s*import\s*\(([^)]+)\)\s*\)/g,
      'lazy(() => import($1))'
    );
    modified = true;
  }
  
  // Replace next/image imports
  if (content.includes("from 'next/image'") || content.includes('from "next/image"')) {
    content = content.replace(
      /import\s+Image\s+from\s+['"]next\/image['"]/g,
      "// Image component replaced with standard img tag"
    );
    // Replace <Image with <img and adjust props
    content = content.replace(/<Image\s+/g, '<img ');
    content = content.replace(/priority={[^}]+}/g, "loading='eager'");
    content = content.replace(/priority\s*/g, "loading='eager' ");
    modified = true;
  }
  
  // Replace next/navigation imports
  if (content.includes("from 'next/navigation'") || content.includes('from "next/navigation"')) {
    content = content.replace(
      /import\s+\{([^}]+)\}\s+from\s+['"]next\/navigation['"]/g,
      "import { useLocation, useNavigate } from 'react-router-dom'"
    );
    content = content.replace(/usePathname/g, 'useLocation().pathname');
    content = content.replace(/useRouter/g, 'useNavigate');
    modified = true;
  }
  
  // Remove next Metadata imports and exports
  if (content.includes("from 'next'") || content.includes('from "next"')) {
    content = content.replace(
      /import\s+(?:type\s+)?\{[^}]*Metadata[^}]*\}\s+from\s+['"]next['"]/g,
      "// Metadata removed - using react-helmet-async instead"
    );
    content = content.replace(
      /export\s+const\s+metadata:\s*Metadata\s*=\s*\{[^;]*\};?/gs,
      "// Metadata moved to Helmet component"
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixCount++;
  }
});

console.log(`\nTotal files fixed: ${fixCount}`);