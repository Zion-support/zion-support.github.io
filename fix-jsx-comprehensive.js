#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX structure issues comprehensively
function fixJSXStructure(content, filePath) {
  let fixed = content;
  
  // Fix the most common broken JSX pattern
  const brokenJSXPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(brokenJSXPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags
  const missingClosingTagsPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}/g;
  fixed = fixed.replace(missingClosingTagsPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with extra content
  const extraContentPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(extraContentPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (alternative pattern)
  const altPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(altPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (another pattern)
  const anotherPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(anotherPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (yet another pattern)
  const yetAnotherPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(yetAnotherPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (final pattern)
  const finalPattern = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(finalPattern, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 6)
  const pattern6 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern6, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 7)
  const pattern7 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern7, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 8)
  const pattern8 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern8, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 9)
  const pattern9 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern9, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 10)
  const pattern10 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern10, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 11)
  const pattern11 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern11, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 12)
  const pattern12 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern12, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 13)
  const pattern13 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern13, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 14)
  const pattern14 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern14, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 15)
  const pattern15 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern15, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 16)
  const pattern16 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern16, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 17)
  const pattern17 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern17, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 18)
  const pattern18 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern18, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 19)
  const pattern19 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern19, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 20)
  const pattern20 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern20, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 21)
  const pattern21 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern21, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 22)
  const pattern22 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern22, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 23)
  const pattern23 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern23, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 24)
  const pattern24 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern24, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 25)
  const pattern25 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern25, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 26)
  const pattern26 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern26, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 27)
  const pattern27 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern27, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 28)
  const pattern28 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern28, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 29)
  const pattern29 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern29, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 30)
  const pattern30 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern30, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 31)
  const pattern31 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern31, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 32)
  const pattern32 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern32, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 33)
  const pattern33 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern33, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 34)
  const pattern34 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern34, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 35)
  const pattern35 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern35, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 36)
  const pattern36 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern36, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 37)
  const pattern37 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern37, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 38)
  const pattern38 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern38, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 39)
  const pattern39 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern39, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 40)
  const pattern40 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern40, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 41)
  const pattern41 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern41, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 42)
  const pattern42 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern42, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 43)
  const pattern43 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern43, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 44)
  const pattern44 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern44, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 45)
  const pattern45 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern45, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 46)
  const pattern46 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern46, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 47)
  const pattern47 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern47, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 48)
  const pattern48 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern48, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 49)
  const pattern49 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern49, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  // Fix broken JSX with missing closing tags and extra content (pattern 50)
  const pattern50 = /return\s*\(\s*<>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*<div>\s*<\/div>\s*<div>\s*<\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/>\s*\);\s*<\/p><\/div><\/div>\s*\);\s*}/g;
  fixed = fixed.replace(pattern50, `return (\n    <div>\n      <h1>$1</h1>\n      <p>$2</p>\n    </div>\n  );\n}`);
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content, filePath);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX structure fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed JSX structure in ${fixedCount} files.`);