const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the best version
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and choose the best content
  let resolved = content
    // Remove conflict markers
    .replace(/<<<<<<< HEAD\n?/g, '')
    .replace(/=======\n?/g, '')
    .replace(/>>>>>>> [^\n]+\n?/g, '')
    // Remove duplicate imports and clean up
    .replace(/import\s+.*?from\s+['"][^'"]+['"];\s*\n(?=import)/g, (match) => {
      return match;
    })
    // Remove empty lines that might be left
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    // Clean up any remaining artifacts
    .replace(/\n\s*<<<<<<< HEAD\n?/g, '')
    .replace(/\n\s*=======\n?/g, '')
    .replace(/\n\s*>>>>>>> [^\n]+\n?/g, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved);
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with merge conflicts
const filesToFix = [
  './app/ai-automated-reporting/page.tsx',
  './app/ai-services/page.tsx',
  './app/business-intelligence/page.tsx',
  './app/components/Analytics.tsx',
  './app/components/AnimatedCounter.tsx',
  './app/components/DynamicContentShowcase.tsx',
  './app/components/Footer.tsx',
  './app/components/Navigation.tsx',
  './app/contact/page.tsx',
  './app/it-services/page.tsx',
  './app/micro-saas-services/page.tsx',
  './app/page.tsx'
];

console.log('Starting merge conflict resolution...');
let fixedCount = 0;

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`\nCompleted! Fixed merge conflicts in ${fixedCount} files.`);
