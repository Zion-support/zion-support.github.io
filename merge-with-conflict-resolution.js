import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
#!/usr/bin/env node;
console.log('🔄 Merging branches with automatic conflict resolution...')
    
      return false; // No conflicts}

    console.log(`🔧 Resolving conflicts in ${filePath}...`)
    // Split by conflict markers and keep the incoming version (after )
    
    for (let i = 0; i;
        continue}
      
        resolvedLines.push(line)}
    
    // Write the resolved content;
    writeFileSync(filePath, resolvedLines.join('\n'))
    console.log(`✅ Resolved conflicts in ${filePath}`)
    console.log(`❌ Error resolving ${filePath}: ${error.message}`)
    return false}

    console.log(`\n🔄 Attempting to merge ${branchName}...`)
    // Try to merge the branch;
    execSync(`git merge ${branchName} --no-ff -m "feat: Merge enhancements from ${branchName}"`, { stdio: 'pipe' })
    console.log(`✅ Successfully merged ${branchName}`)
    console.log(`⚠️  Merge conflicts detected in ${branchName}, resolving...`)
    // Check for conflicts;
