<<<<<<< HEAD
#!/usr/bin/env node
=======
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = false;

    // Remove merge conflict markers
    const conflictPatterns = [
      /<<<<<<< HEAD\n/g,
      /=======\n/g,
      />>>>>>> [^\n]+\n/g
    ];

    conflictPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        changesMade = true;
      }
    });

    // Fix common syntax issues that might arise from merge conflicts
    const syntaxFixes = [
      // Fix import/export issues
      { from: /from 'next' export/g, to: "from 'next'; export" },
      { from: /from 'react' import/g, to: "from 'react'; import" },
      { from: /from 'react',/g, to: "from 'react';" },
      
      // Fix interface and type issues
      { from: /interface LayoutProps {,/g, to: "interface LayoutProps {" },
      { from: /children: ReactNode,/g, to: "children: ReactNode;" },
      { from: /children: React\.ReactNode,/g, to: "children: React.ReactNode;" },
      
      // Fix string literal issues
      { from: /title = "Zion Tech Group,/g, to: 'title = "Zion Tech Group",' },
      { from: /keywords = technology, AI, cloud, micro SaaS"/g, to: 'keywords = "technology, AI, cloud, micro SaaS"' },
      
      // Fix object and array syntax
      { from: /};,/g, to: '};' },
      { from: /}\)/g, to: '})' },
      { from: /}\]/g, to: '}]' },
      { from: /}\}/g, to: '}}' },
      
      // Fix extra closing braces (multiple newlines)
      { from: /}\n\n+}/g, to: '}\n}' },
      
      // Fix common API route issues
      { from: /export default async function \(req, res\)/g, to: 'export default async function handler(req, res)' },
      { from: /export default function \(req, res\)/g, to: 'export default function handler(req, res)' },
      
      // Fix missing semicolons
      { from: /(\w+)\n(export|import|const|let|var|function|class)/g, to: '$1;\n$2' },
      
      // Fix duplicate imports
      { from: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];\s*import\s+{\s*\1\s*}\s+from\s+['"]\2['"];/g, to: 'import { $1 } from "$2";' },
      
      // Fix missing return statements in API routes
      { from: /res\.json\(\{([^}]+)\}\);\s*$/gm, to: 'return res.json({$1});' },
      
      // Fix TypeScript issues
      { from: /: any\[\]/g, to: ': any[]' },
      { from: /: string\[\]/g, to: ': string[]' },
      { from: /: number\[\]/g, to: ': number[]' },
      
      // Fix async/await issues
      { from: /async\s+function\s+(\w+)\s*\([^)]*\)\s*{\s*$/gm, to: 'async function $1(req, res) {\n  try {' },
      
      // Fix missing error handling
      { from: /}\s*$/gm, to: '  } catch (error) {\n    console.error("Error:", error);\n    return res.status(500).json({ error: "Internal server error" });\n  }\n}' },
    ];

    syntaxFixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        changesMade = true;
      }
    });

    // Clean up extra whitespace and newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.replace(/\s+$/gm, '');
    
    if (changesMade || content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all files with merge conflicts
function getConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error getting conflicted files:', error.message);
    return [];
  }
}

// Function to handle deleted files
function handleDeletedFiles() {
  try {
    const result = execSync('git status --porcelain | grep "^DU\\|^UD"', { encoding: 'utf8' });
    const lines = result.trim().split('\n').filter(line => line.length > 0);
    
    lines.forEach(line => {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 2) {
        const status = parts[0];
        const file = parts[1];
        
        if (status === 'DU' || status === 'UD') {
          // File was deleted in one branch, modified in another
          if (fs.existsSync(file)) {
            console.log(`📁 Keeping modified file: ${file}`);
            execSync(`git add "${file}"`);
          } else {
            console.log(`🗑️ File was deleted: ${file}`);
            execSync(`git rm "${file}"`);
          }
        }
      }
    });
  } catch (error) {
    // No deleted files to handle
  }
}

// Main resolution process
function resolveAllConflicts() {
  console.log('🔍 Finding files with merge conflicts...');
  
  const conflictedFiles = getConflictedFiles();
  console.log(`Found ${conflictedFiles.length} files with conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return true;
  }

  let resolvedCount = 0;
  let totalFiles = conflictedFiles.length;

  // Handle deleted files first
  handleDeletedFiles();

  // Resolve conflicts in each file
  conflictedFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (resolveMergeConflicts(filePath)) {
        resolvedCount++;
      }
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`   Total files: ${totalFiles}`);
  console.log(`   Resolved: ${resolvedCount}`);
  console.log(`   Remaining: ${totalFiles - resolvedCount}`);

  return resolvedCount === totalFiles;
}

// Function to add resolved files to git
function addResolvedFiles() {
  try {
    console.log('📝 Adding resolved files to git...');
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ All resolved files added to git');
    return true;
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
    return false;
  }
}

// Function to commit the merge
function commitMerge() {
  try {
    console.log('💾 Committing merge resolution...');
    execSync('git commit -m "Resolve merge conflicts automatically - comprehensive fix"', { stdio: 'inherit' });
    console.log('✅ Merge conflicts resolved and committed');
    return true;
  } catch (error) {
    console.error('❌ Error committing merge:', error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🚀 Starting comprehensive merge conflict resolution...\n');
  
  const allResolved = resolveAllConflicts();
  
  if (allResolved) {
    console.log('\n🎉 All merge conflicts resolved!');
    
    if (addResolvedFiles()) {
      if (commitMerge()) {
        console.log('\n✅ Merge completed successfully!');
        console.log('🔄 Ready to push changes to main branch');
        return true;
      }
    }
  } else {
    console.log('\n⚠️ Some conflicts may need manual resolution');
    console.log('Run "git status" to see remaining conflicts');
  }
  
  return false;
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { resolveAllConflicts, resolveMergeConflicts };
=======
// If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${file}`);
      resolvedCount++;
    } else {
      console.log(`⚠️ No changes needed for: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error resolving ${file}:`, error.message);
    errorCount++;
  }
});
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting automatic merge conflict resolution...');

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with incoming changes
    // Remove and
    content = content.replace(/[\s\S]*?
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    // Add the file to git
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);

console.log('🎉 Merge conflict resolution completed!');
console.log('Files resolved:', conflictFiles.length);

// Check if there are any remaining conflicts
const remainingConflicts = execSync('git status --porcelain', { encoding: 'utf8' })
  .split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));

if (remainingConflicts.length === 0) {
  console.log('✅ All conflicts resolved successfully!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
}
=======
console.log('\n🎉 Merge conflict resolution completed!');
>>>>>>> main
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
