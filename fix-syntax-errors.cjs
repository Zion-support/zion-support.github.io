const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
console.log('🔧 Fixing syntax errors in the codebase...');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        replacement: ''
      },
      // Fix malformed function declarations
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {
        pattern: /^[\s\n]*\}[\w\s]*\([\s\S]*?\)\s*\{[\s\S]*?\}[\s\S]*$/,
        replacement: `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default async function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ message: 'API endpoint' });\n}`
      // Fix files with just return statements;
        pattern: /^[\s\n]*return[\s\S]*$/,`;
      // Fix malformed object literals;
        pattern: /^[\s\n]*\{[\s\S]*\}\s*$/,`;
    ];

    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
        break; // Only apply one fix per file;

    if (modified) {
      fs.writeFileSync(filePath, content);`;
      console.log(`Fixed: ${filePath}`);
      return true;


<<<<<<< HEAD
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixApiFiles(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;

<<<<<<< HEAD
    // Fix merge conflict markers
      modified = true;
    }

    // Fix unterminated string literals
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix unterminated strings
      if (line.includes('"') && !line.match(/".*"/)) {
        if (line.includes('"') && !line.includes('\\"')) {
          lines[i] = line.replace(/"([^"]*)$/, '"$1"');
=======
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix missing closing brace in metadata and missing function declaration
    if (content.includes('export const metadata = {') && !content.includes('export default function')) {
      // Find the metadata object and add missing closing brace and function declaration
      const metadataMatch = content.match(/export const metadata = \{[\s\S]*?keywords: "[^"]*"/);
      if (metadataMatch) {
        const beforeMetadata = content.substring(0, content.indexOf('export const metadata = {'));
        const afterMetadata = content.substring(content.indexOf('export const metadata = {'));
        // Extract the metadata content
        const metadataContent = afterMetadata.match(/export const metadata = \{[\s\S]*?keywords: "[^"]*"/)[0];
        // Find where the JSX starts (look for <div)
        const jsxStart = afterMetadata.search(/^\s*<div/);
        if (jsxStart !== -1) {
          const jsxContent = afterMetadata.substring(jsxStart);
          // Get the function name from the file path
          const fileName = path.basename(filePath, '.tsx');
          const functionName = fileName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('') + 'Page';
          // Reconstruct the file
          content = beforeMetadata + 
            metadataContent + '};\n\n' +
            `export default function ${functionName}() {\n` +
            '  return (\n' +
            jsxContent.replace(/^\s*/, '    ') + '\n' +
            '  );\n' +
            '}';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          modified = true;
        }

<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      }
    }
    // Remove stray commit hashes
    content = content.replace(/[a-f0-9]{40}/g, '');
    // Remove any remaining merge conflict markers
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    if (modified) {

      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath});
      return true;
    }
<<<<<<< HEAD
  } catch (error) {
    console.log(`  ❌ Error fixing ${filePath}: ${error.message}`);
  }
<<<<<<< HEAD
  return false;
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;

  } catch (error) {

    console.error(`Error fixing ${filePath}:`, error.message);
  return false;


function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  files.forEach(file => {

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {

      if (fixSyntaxErrors(filePath)) {
        console.log(`Fixed syntax errors in: ${filePath}`);
        fixedCount++;

<<<<<<< HEAD
console.log(`\n✅ Fixed ${fixedCount} files out of ${totalFiles}`);
console.log('🎯 Syntax error fixing complete!');
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

