const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive conflict resolution...');

// Function to resolve modify/delete conflicts by accepting deletion
function resolveModifyDeleteConflicts() {
  try {
    console.log('📁 Resolving modify/delete conflicts by accepting deletions...');
    
    // Get list of conflicted files
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = gitStatus
      .split('\n')
      .filter(line => line.includes('CONFLICT (modify/delete)'))
      .map(line => line.split(' ').pop())
      .filter(file => file);

    console.log(`Found ${conflictedFiles.length} modify/delete conflicts`);

    // Remove all conflicted files (accept deletion)
    conflictedFiles.forEach(file => {
      try {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
          console.log(`✅ Deleted: ${file}`);
        }
      } catch (error) {
        console.log(`❌ Error deleting ${file}: ${error.message}`);
      }
    });

    return conflictedFiles.length;
  } catch (error) {
    console.log(`❌ Error resolving modify/delete conflicts: ${error.message}`);
    return 0;
  }
}

// Function to resolve content conflicts by keeping HEAD version
function resolveContentConflicts() {
  try {
    console.log('📝 Resolving content conflicts by keeping HEAD version...');
    
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = gitStatus
      .split('\n')
      .filter(line => line.includes('CONFLICT (content)'))
      .map(line => line.split(' ').pop())
      .filter(file => file);

    console.log(`Found ${conflictedFiles.length} content conflicts`);

    let resolvedCount = 0;
    conflictedFiles.forEach(file => {
      try {
        if (fs.existsSync(file)) {
          let content = fs.readFileSync(file, 'utf8');
          const originalContent = content;

          // Remove merge conflict markers and keep HEAD version
          content = content.replace(/[\s\S]*?            const headMatch = match.match(/([\s\S]*?)            return headMatch ? headMatch[1].trim() : '';
          });

          // Handle conflicts without proper closing markers
          content = content.replace(/[\s\S]*?            const headMatch = match.match(/([\s\S]*?)            return headMatch ? headMatch[1].trim() : '';
          });

          // Remove any remaining conflict markers
          content = content.replace(/[\s\S]*?          content = content.replace(/
          // Handle incomplete conflicts
          content = content.replace(/[\s\S]*?            const headMatch = match.match(/([\s\S]*?)            return headMatch ? headMatch[1].trim() : '';
          });

          // Clean up extra whitespace
          content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

          if (content !== originalContent) {
            fs.writeFileSync(file, content);
            console.log(`✅ Resolved: ${file}`);
            resolvedCount++;
          }
        }
      } catch (error) {
        console.log(`❌ Error resolving ${file}: ${error.message}`);
      }
    });

    return resolvedCount;
  } catch (error) {
    console.log(`❌ Error resolving content conflicts: ${error.message}`);
    return 0;
  }

// Main execution
async function main() {
  try {
    console.log('🚀 Starting conflict resolution process...');
    
    // Resolve modify/delete conflicts
    const modifyDeleteCount = resolveModifyDeleteConflicts();
    
    // Resolve content conflicts
    const contentCount = resolveContentConflicts();
    
    console.log(`\n📊 Resolution Summary:`);
    console.log(`   - Modify/Delete conflicts resolved: ${modifyDeleteCount}`);
    console.log(`   - Content conflicts resolved: ${contentCount}`);
    console.log(`   - Total conflicts resolved: ${modifyDeleteCount + contentCount}`);
    
    // Check if there are any remaining conflicts
    const remainingConflicts = execSync('git status --porcelain | grep -c "UU\\|AA\\|DD"', { encoding: 'utf8' }).trim();
    
    if (remainingConflicts === '0') {
      console.log('\n✅ All conflicts resolved successfully!');
      console.log('📝 Ready to commit changes...');
    } else {
      console.log(`\n⚠️  ${remainingConflicts} conflicts still remain. Manual resolution may be needed.`);
    }
    
  } catch (error) {
    console.log(`❌ Error in main process: ${error.message}`);
  }
}

main();