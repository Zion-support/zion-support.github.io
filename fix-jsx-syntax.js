import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Function to fix common JSX syntax errors,
function fixJSXSyntax(content, filename) {
  let fixed = content;
  // Fix unclosed JSX tags,
fixed = fixed.replace(/<h1([^>]*)>([^<]*)<\/div>/g, '<h1$1>$2</h1>');
  fixed = fixed.replace(/<p([^>]*)>([^<]*)<\/div>/g, '<p$1>$2</p>');
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<\/h1>/g, '<div$1>$2</div>');
  // Fix malformed JSX structure - remove orphaned closing tags,
fixed = fixed.replace(/\s*<\/>\s*<\/>\s*/g, '\n    </>\n  ');
  // Fix missing closing tags for common elements,
fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<\/>\s*<\/>\s*<div([^>]*)>/g, '<div$1>\n        <div$2>');
  // Fix semicolons after JSX elements,
content = content.replace(/>\s*;\s*\n/g, '>\n');
  content = content.replace(/>\s*;\s*$/gm, '>')
  // Fix semicolons after closing JSX tags,
content = content.replace(/<\/[^>]+>\s*\s*\n/g, '</$1>1284\n')
  content = content.replace(/<\/[^>]+>\s*\s*$/gm, '</$1>1347');
  // Fix component structure - ensure proper JSX return,
if (fixed.includes('return (') && !fixed.includes('return (')) {
    fixed = fixed.replace(/return \(\s*<>/g, 'return (\n    <>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
  }
  // Fix missing container div,
if (fixed.includes('<div className="container mx-auto px-4 py-16" />') && !fixed.includes('min-h-screen')) {
    fixed = fixed.replace(
      /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div className="container mx-auto px-4 py-16"><\/div>\s*<\/>/g
      ""
    </>""
    const properStructure = "";)
export default ${pageName.replace(/\s+/g, '')}Page;""
      console.log(`Fixed: ${filePath}""
    console.error(`Error fixing ${filePath}:""
  console.log(`Found ${pageFiles.length} page files to check..."")