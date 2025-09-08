const fs = require('fs');
const path = require('path');

console.log('🔧 Starting batch merge conflict resolution...\n');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`📝 Resolving: ${filePath}`);
    
    // Keep incoming changes (after =======)
    let resolved = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======\n?/, '')
      .replace(/>>>>>>> [^\n]+/g, '')
      .replace(/=======\n?[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining markers
    resolved = resolved
      .replace(/<<<<<<< [^\n]+/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, resolved);
    return true;
  } catch (error) {
    console.error(`❌ Error with ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files with conflicts
const { execSync } = require('child_process');
let conflictedFiles = [];

try {
  const result = execSync('grep -r "<<<<<<< HEAD" . --include="*.js" --include="*.ts" --include="*.tsx" --include="*.jsx" --include="*.json" --include="*.md" --include="*.sh" --include="*.cjs" --include="*.xml" -l', { encoding: 'utf8' });
  conflictedFiles = result.trim().split('\n').filter(f => f && !f.includes('node_modules'));
} catch (error) {
  console.log('Using fallback method to find conflicted files...');
  // Fallback: manually check some key files
  conflictedFiles = [
    'tailwind.config.ts',
    'vite.config.ts',
    'package.json',
    'sitemap.xml',
    'public/sitemap.xml',
    'dist/sitemap.xml'
  ];
}

console.log(`Found ${conflictedFiles.length} files with conflicts\n`);

let resolved = 0;
let errors = 0;

for (const file of conflictedFiles) {
  if (fs.existsSync(file)) {
    if (resolveConflicts(file)) {
      resolved++;
    } else {
      errors++;
    }
  }
}

console.log(`\n📊 Results:`);
console.log(`✅ Resolved: ${resolved} files`);
console.log(`❌ Errors: ${errors} files`);

if (resolved > 0) {
  console.log('\n🎉 Batch conflict resolution completed!');
} else {
  console.log('\n⚠️  No conflicts were resolved.');
}