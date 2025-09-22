const fs = require('fs');
const path = require('path');

// List of files with conflicts
const conflictedFiles = [
  'components/Footer.tsx',
  'components/Layout.tsx', 
  'components/layout/MainLayout.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/api-docs.tsx',
  'pages/compliance.tsx',
  'pages/docs.tsx',
  'pages/guides.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/partners.tsx',
  'pages/security.tsx',
  'pages/sitemap.tsx',
  'pages/support.tsx',
  'pages/tutorials.tsx'
];

function resolveConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version (our changes)
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======.*?\n?/g, '');
  content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD|=======|>>>>>>> [a-f0-9]+/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Resolved conflicts in ${filePath}`);
}

// Resolve conflicts in all files
conflictedFiles.forEach(resolveConflicts);

// Remove the clean-conflicts.js file that was causing issues
if (fs.existsSync('clean-conflicts.js')) {
  fs.unlinkSync('clean-conflicts.js');
  console.log('Removed clean-conflicts.js');
}

console.log('All conflicts resolved!');