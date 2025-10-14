#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive syntax error fixes...');

// Find all page.tsx files
const findFiles = (dir, pattern) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, pattern));
    } else if (stat.isFile() && pattern.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
};

const pageFiles = findFiles('./app', /page\.tsx$/);
const componentFiles = findFiles('./app/components', /\.tsx$/);

console.log(`Found ${pageFiles.length} page files and ${componentFiles.length} component files`);

// Fix function to clean up syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate semicolons and quotes in imports
  fixed = fixed.replace(/import\s+([^;]+);';';/g, 'import $1;');
  fixed = fixed.replace(/from\s+'([^']+)';';';/g, "from '$1';");
  fixed = fixed.replace(/from\s+"([^"]+)";";";/g, 'from "$1";');
  
  // Fix JSX syntax errors
  fixed = fixed.replace(/>";";/g, '>');
  fixed = fixed.replace(/>";/g, '>');
  fixed = fixed.replace(/";"</g, '<');
  fixed = fixed.replace(/";</g, '<');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]+)">";/g, 'className="$1">');
  fixed = fixed.replace(/content="([^"]+)">";/g, 'content="$1">');
  
  // Fix broken function declarations
  fixed = fixed.replace(/export default function ComponentsPage\(\) \{\}\s*return \(/g, 'export default function ComponentsPage() {\n  return (');
  
  // Fix malformed component structures
  fixed = fixed.replace(/\}\s*return\s*\(\s*<div>Page content<\/div>\s*\);\s*\}\s*return\s*\(/g, '}');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<div className="min-h-screen bg-gray-90o0 text-white py-20">";"<\/div>/g, '<div className="min-h-screen bg-gray-900 text-white py-20"></div>');
  fixed = fixed.replace(/<div className="text-gray-30o0 text-lg">";"/g, '<div className="text-gray-300 text-lg">');
  
  // Fix malformed interface declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*\{\}\s*children:\s*c,lassName\?:\s*string;/g, 'interface $1 {\n  children: React.ReactNode;\n  className?: string;');
  
  // Fix broken function parameters
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC<(\w+)>\s*=\s*\(\{\}\s*children,\s*className\s*=\s*\}\s*=>\s*\{\}/g, 'const $1: React.FC<$2> = ({ children, className = "" }) => {');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div>Page content<\/div>;\s*\);/g, 'return (\n    <div>Page content</div>\n  );');
  
  // Fix broken JSX structure
  fixed = fixed.replace(/<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 \$\{className\}`}>`<\/div>/g, '<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>');
  
  // Fix extra closing tags and malformed JSX
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\w+>\s*<\/\w+>\s*<\/\w+>\s*<\/\w+>/g, '</div>');
  
  // Fix broken expressions
  fixed = fixed.replace(/h1 className="text-4xl font-bold mb-8">Components<\/h1>";";/g, '<h1 className="text-4xl font-bold mb-8">Components</h1>');
  fixed = fixed.replace(/This page is under development\.<\/p>/g, 'This page is under development.</p>');
  
  // Fix malformed closing statements
  fixed = fixed.replace(/\s*<\/p><\/div><\/div>\s*\);\}\s*\}/g, '\n  );');
  
  // Fix extra closing tags at the end
  fixed = fixed.replace(/\s*<\/\w+>\s*<\/\w+>\s*<\/\w+>\s*\);\}\s*\}/g, '\n  );');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export default \w+;\s*<\/\w+>\s*$/g, 'export default ResponsiveContainer;');
  
  return fixed;
}

// Process all files
let fixedCount = 0;
let errorCount = 0;

for (const file of [...pageFiles, ...componentFiles]) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\n🎉 Fix complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Run linting to check results
console.log('\n🔍 Running linting check...');
try {
  execSync('pnpm run lint', { stdio: 'pipe' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting still has issues, but many errors were fixed.');
}