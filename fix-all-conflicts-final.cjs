const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and keep the better version (after )
    content = content.replace(/[\s\S]*?    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    
    // Clean up any remaining markers
    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    
    // Clean up any duplicate content that might have been left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to fix
const filesToFix = [
  './pages/services-advertising.tsx',
  './pages/faq.tsx',
  './pages/docs.tsx',
  './pages/quantum-services.tsx',
  './pages/support.tsx',
  './pages/automation.tsx',
  './pages/resources.tsx',
  './pages/news.tsx',
  './pages/api-docs.tsx',
  './pages/calendar.tsx',
  './pages/ai-powered-devops-platform.tsx',
  './pages/api-documentation.tsx',
  './pages/search.tsx',
  './pages/sitemap.xml.tsx',
  './pages/blockchain-solutions.tsx',
  './pages/guides.tsx',
  './pages/community.tsx',
  './pages/_app.tsx',
  './pages/ai-powered-cybersecurity.tsx'
];

console.log(`Processing ${filesToFix.length} files`);

let fixedCount = 0;
filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('All merge conflicts resolved!');