const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by accepting the remote version
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Strategy: Accept the remote version (after ======= and before >>>>>>>)
    // This keeps the more complete version from the remote branch
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Handle cases where there's no ======= (just <<<<<<< HEAD and >>>>>>>)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
  }
}

// Find all files with merge conflicts
try {
  const filesWithConflicts = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.css" -o -name "*.xml" -o -name "*.toml" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' });
  
  const files = filesWithConflicts.trim().split('\n').filter(f => f && !f.includes('node_modules') && !f.includes('.git'));
  
  console.log(`Found ${files.length} files with merge conflicts`);
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      resolveConflicts(file);
    }
  });
  
  console.log('All merge conflicts resolved!');
} catch (error) {
  console.error('Error finding files with conflicts:', error.message);
}