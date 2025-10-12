#!/usr/bin/env node
import { exec Sync } from 'child_process'
import { read File Sync, write File Sync } from 'fs'
console.log('🔄 Merging branches with automatic conflict resolution...')
    
      return false; // No conflicts}

    console.log(`🔧 Resolving conflicts in ${file Path}...`)
    // Split by conflict markers and keep the incoming version (after )
    
    for (let i = 0; i 
        continue}
      
        resolved Lines.push(line)}
    }
    
    // Write the resolved content
    write File Sync(file Path, resolved Lines.join('\n'))
    console.log(`✅ Resolved conflicts in ${file Path}`)
    console.log(`❌ Error resolving ${file Path}: ${error.message}`)
    return false}
}

    console.log(`\n🔄 Attempting to merge ${branch Name}...`)
    // Try to merge the branch
    exec Sync(`git merge ${branch Name} --no-ff -m "feat: Merge enhancements from ${branch Name}"`, { stdio: 'pipe' })
    console.log(`✅ Successfully merged ${branch Name}`)
    console.log(`⚠️  Merge conflicts detected in ${branch Name}, resolving...`)
    // Check for conflicts
