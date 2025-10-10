import fs from 'fs';
import path from 'path';
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)([\s\S]*?)    
    // Clean up any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common JSX issues that might have been caused by merge conflicts
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*>\s*<\/\1>/g, ''); // Remove empty self-closing tags
    content = content.replace(/\s*<([A-Z][a-zA-Z0-9]*)\s*>\s*$/gm, ''); // Remove opening tags without content
    // Fix missing closing tags for common elements
    const openTags = content.match(/<([A-Z][a-zA-Z0-9]*)[^>]*>(?!.*<\/\1>)/g);
    if (openTags) {
      openTags.forEach(tag => {
        const tagName = tag.match(/<([A-Z][a-zA-Z0-9]*)/)[1];
        if (!content.includes(`</${tagName}>`)) {
          // Add closing tag at the end of the component
          content = content.replace(/(\s*)(<\/[A-Z][a-zA-Z0-9]*>\s*)$/, `$1</${tagName}>$2`);
        };
      });
    };
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
function findFilesWithConflicts(dir) {
  const files = [];
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('')) {
            files.push(fullPath);
          };
        } catch (error) {
          // Skip files that can't be read
        };
// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and choose HEAD version
  let resolved = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)  
  // Clean up any remaining conflict markers
  resolved = resolved
    .replace(/<<<<<<< HEAD\n?/g, '')
    .replace(/=======\n?/g, '')
    .replace(/  
  return resolved;
};
// Function to fix common JSX syntax issues
function fixJSXSyntax(content) {
  // Fix unclosed JSX tags by adding proper closing tags
  let fixed = content;
  // Fix common JSX issues
  fixed = fixed
    // Fix missing closing tags for common elements
    .replace(/<div([^>]*)>(?!.*<\/div>)/g, (match, attrs) => {
      // Only add closing tag if there's no corresponding closing tag
      const openDivs = (match.match(/<div/g) || []).length;
      const closeDivs = (match.match(/<\/div>/g) || []).length;
      if (openDivs > closeDivs) {
        return match + '</div>';
      };
      return match;
    })
    // Fix missing closing tags for sections
    .replace(/<section([^>]*)>(?!.*<\/section>)/g, (match, attrs) => {
      const openSections = (match.match(/<section/g) || []).length;
      const closeSections = (match.match(/<\/section>/g) || []).length;
      if (openSections > closeSections) {
        return match + '</section>';
      };
      return match;
    })
    // Fix missing closing tags for main
    .replace(/<main([^>]*)>(?!.*<\/main>)/g, (match, attrs) => {
      const openMain = (match.match(/<main/g) || []).length;
      const closeMain = (match.match(/<\/main>/g) || []).length;
      if (openMain > closeMain) {
        return match + '</main>';
      };
      return match;
    })
    // Fix missing closing tags for article
    .replace(/<article([^>]*)>(?!.*<\/article>)/g, (match, attrs) => {
      const openArticle = (match.match(/<article/g) || []).length;
      const closeArticle = (match.match(/<\/article>/g) || []).length;
      if (openArticle > closeArticle) {
        return match + '</article>';
      };
      return match;
    })
    // Fix missing closing tags for p
    .replace(/<p([^>]*)>(?!.*<\/p>)/g, (match, attrs) => {
      const openP = (match.match(/<p/g) || []).length;
      const closeP = (match.match(/<\/p>/g) || []).length;
      if (openP > closeP) {
        return match + '</p>';
      };
      return match;
    });
  return fixed;
};
// Function to fix TypeScript/JavaScript syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n\s*}/g, '$1;\n}');
  // Fix missing commas in object literals
  fixed = fixed.replace(/([^,}])\n\s*}/g, '$1,\n}');
  // Fix missing closing parentheses
  fixed = fixed.replace(/([^)])\n\s*}/g, '$1)\n}');
  return fixed;
};
// Main function to process files
async function processFiles() {
  console.log('Starting merge conflict resolution...');
  // Find all TypeScript and JavaScript files
  const patterns = [
];
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js',
    'api/**/*.ts'
  ];
  let processedCount = 0;
  let errorCount = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '*.disabled/**',
        '*-disabled/**',
        'backup*/**',
        '**/*.backup',
        '**/*.broken'
      ]
    });
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        // Check if file has merge conflicts
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`Processing merge conflicts in: ${file}`);
          let resolved = resolveMergeConflicts(content);
          resolved = fixJSXSyntax(resolved);
          resolved = fixSyntaxIssues(resolved);
          fs.writeFileSync(file, resolved);
          processedCount++;
        };
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
import { execSync } from 'child_process';
// Function to resolve merge conflicts by keeping HEAD version;
function resolveMergeConflicts(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    };
    // console.log removed for production
// Split content by conflict markers;
const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepHead = true;
    for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepHead = true;
        continue} else if (line.trim() === '=======') {
        keepHead = false;
        continue} else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = true;
        continue};
      if (!inConflict || keepHead) {
        resolvedLines.push(line)};
    };
    ;
const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true} catch (error) {
    // console.error removed for production
return false};
};
// Function to find all TypeScript/JavaScript files with merge conflicts;
function findFilesWithConflicts(dir) {;
const files = [];
  ;
function searchDirectory(currentDir) {;
const items = fs.readdirSync(currentDir);
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {;
const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath)};
        } catch (error) {
          // Skip files that can't be read
        };
      };
    };
  };
traverse(dir);
  return files;
};
// Main execution
const filesWithConflicts = findFilesWithMergeConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  };
};
console.log(`Fixed ${fixedCount} files`);
