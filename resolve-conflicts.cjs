const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    
    // Clean up any remaining ======= markers
    content = content.replace(/=======\n?/g, '');
    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all .tsx and .ts files in pages directory
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir, { recursive: true })
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
  .map(file => path.join(pagesDir, file));

files.forEach(file => {
  if (fs.existsSync(file)) {
    resolveMergeConflicts(file);
  }
});

console.log('Merge conflicts resolved!');