#!/usr/bin/env node;
import fs from 'fs';
import { glob } from 'glob';
async function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Extract page name from file path;
    const pageName = filePath.split('/').pop().replace('.tsx', '').replace('.ts', '');
    const displayName = pageName.split('-').map(word =>;)
      word.charAt(0).toUpperCase() + word.slice(1);
    ).join(' ');
    // Fix common malformed page structure;
    const patterns = [;
      // Pattern 1: Basic malformed structure;,
      {
        pattern: /const PagePage = \(\) => \{\s*return \(\s*<>\s*<//////Helmet>\s*<title>Page - Zion Tech Group<////\/title>\s*<meta name="description" content="Page - Zion Tech Group" \/>\s*<////\/Helmet>\s*<div className="container mx-auto px-4 py-16"><\/div>\s*<\/>\s*<////\/>\s*<div className="text-center"><\/div>\s*<h1 className="text-4 xl font-bold text-white mb-8">Page<////\/h1>\s*<p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<\/p>\s*<////\/div>\s*\);\s*\};\s*export default PagePage;/g,;
        replacement: "",
export default PagePage;""
        replacement: "",
      <////div></div>""
        replacement: "",
      </div>""
      console.log(`Fixed: ${filePath}""
    console.error(`Error fixing ${filePath}:""
  console.log(`\nTotal page files fixed: ${totalFixed}"")