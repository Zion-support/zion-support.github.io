#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix final JSX syntax errors
function fixFinalJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Fix semicolons in JSX text content
    content = content.replace(/;\s*<\/\s*$/gm, '</button>');
    content = content.replace(/;\s*<\/\s*$/gm, '</div>');
    content = content.replace(/;\s*<\/\s*$/gm, '</span>');
    content = content.replace(/;\s*<\/\s*$/gm, '</section>');
    content = content.replace(/;\s*<\/\s*$/gm, '</main>');
    content = content.replace(/;\s*<\/\s*$/gm, '</article>');
    content = content.replace(/;\s*<\/\s*$/gm, '</header>');
    content = content.replace(/;\s*<\/\s*$/gm, '</footer>');
    content = content.replace(/;\s*<\/\s*$/gm, '</nav>');
    content = content.replace(/;\s*<\/\s*$/gm, '</h1>');
    content = content.replace(/;\s*<\/\s*$/gm, '</h2>');
    content = content.replace(/;\s*<\/\s*$/gm, '</h3>');
    content = content.replace(/;\s*<\/\s*$/gm, '</p>');
    content = content.replace(/;\s*<\/\s*$/gm, '</a>');
    content = content.replace(/;\s*<\/\s*$/gm, '</Link>');
    
    // Fix 2: Fix incomplete JSX tags
    content = content.replace(/<\s*$/gm, '');
    content = content.replace(/\/\s*$/gm, '');
    content = content.replace(/<\/\s*$/gm, '');
    
    // Fix 3: Fix specific patterns
    content = content.replace(/Get Started;\s*$/gm, 'Get Started');
    content = content.replace(/Schedule Demo;\s*$/gm, 'Schedule Demo');
    content = content.replace(/Learn More;\s*$/gm, 'Learn More');
    content = content.replace(/Contact Us;\s*$/gm, 'Contact Us');
    content = content.replace(/Read More;\s*$/gm, 'Read More');
    content = content.replace(/View Details;\s*$/gm, 'View Details');
    content = content.replace(/Get Quote;\s*$/gm, 'Get Quote');
    content = content.replace(/Start Now;\s*$/gm, 'Start Now');
    content = content.replace(/Try Free;\s*$/gm, 'Try Free');
    content = content.replace(/Sign Up;\s*$/gm, 'Sign Up');
    content = content.replace(/Login;\s*$/gm, 'Login');
    content = content.replace(/Download;\s*$/gm, 'Download');
    content = content.replace(/Subscribe;\s*$/gm, 'Subscribe');
    content = content.replace(/Submit;\s*$/gm, 'Submit');
    content = content.replace(/Cancel;\s*$/gm, 'Cancel');
    content = content.replace(/Save;\s*$/gm, 'Save');
    content = content.replace(/Delete;\s*$/gm, 'Delete');
    content = content.replace(/Edit;\s*$/gm, 'Edit');
    content = content.replace(/Update;\s*$/gm, 'Update');
    content = content.replace(/Create;\s*$/gm, 'Create');
    content = content.replace(/Add;\s*$/gm, 'Add');
    content = content.replace(/Remove;\s*$/gm, 'Remove');
    content = content.replace(/Search;\s*$/gm, 'Search');
    content = content.replace(/Filter;\s*$/gm, 'Filter');
    content = content.replace(/Sort;\s*$/gm, 'Sort');
    content = content.replace(/Reset;\s*$/gm, 'Reset');
    content = content.replace(/Clear;\s*$/gm, 'Clear');
    content = content.replace(/Close;\s*$/gm, 'Close');
    content = content.replace(/Open;\s*$/gm, 'Open');
    content = content.replace(/Show;\s*$/gm, 'Show');
    content = content.replace(/Hide;\s*$/gm, 'Hide');
    content = content.replace(/Toggle;\s*$/gm, 'Toggle');
    content = content.replace(/Expand;\s*$/gm, 'Expand');
    content = content.replace(/Collapse;\s*$/gm, 'Collapse');
    content = content.replace(/Minimize;\s*$/gm, 'Minimize');
    content = content.replace(/Maximize;\s*$/gm, 'Maximize');
    content = content.replace(/Restore;\s*$/gm, 'Restore');
    content = content.replace(/Refresh;\s*$/gm, 'Refresh');
    content = content.replace(/Reload;\s*$/gm, 'Reload');
    content = content.replace(/Back;\s*$/gm, 'Back');
    content = content.replace(/Next;\s*$/gm, 'Next');
    content = content.replace(/Previous;\s*$/gm, 'Previous');
    content = content.replace(/Continue;\s*$/gm, 'Continue');
    content = content.replace(/Finish;\s*$/gm, 'Finish');
    content = content.replace(/Complete;\s*$/gm, 'Complete');
    content = content.replace(/Done;\s*$/gm, 'Done');
    content = content.replace(/OK;\s*$/gm, 'OK');
    content = content.replace(/Yes;\s*$/gm, 'Yes');
    content = content.replace(/No;\s*$/gm, 'No');
    content = content.replace(/Maybe;\s*$/gm, 'Maybe');
    content = content.replace(/Help;\s*$/gm, 'Help');
    content = content.replace(/Support;\s*$/gm, 'Support');
    content = content.replace(/FAQ;\s*$/gm, 'FAQ');
    content = content.replace(/About;\s*$/gm, 'About');
    content = content.replace(/Privacy;\s*$/gm, 'Privacy');
    content = content.replace(/Terms;\s*$/gm, 'Terms');
    content = content.replace(/Policy;\s*$/gm, 'Policy');
    content = content.replace(/Legal;\s*$/gm, 'Legal');
    content = content.replace(/Disclaimer;\s*$/gm, 'Disclaimer');
    content = content.replace(/Copyright;\s*$/gm, 'Copyright');
    content = content.replace(/All Rights Reserved;\s*$/gm, 'All Rights Reserved');
    
    // Fix 4: Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed final JSX errors in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with JSX errors
function findFilesWithJsxErrors() {
  try {
    const { execSync } = require('child_process');
    const result = execSync('find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | head -100', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('🔧 Starting final JSX error fixes...\n');

const filesToFix = findFilesWithJsxErrors();
console.log(`Found ${filesToFix.length} JSX files to check:\n`);

let fixedCount = 0;
let totalFiles = filesToFix.length;

filesToFix.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalFiles}] Processing ${filePath}`);
  
  if (fixFinalJsxErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ Final JSX fixes complete!`);
console.log(`📊 Fixed errors in ${fixedCount} out of ${totalFiles} files`);