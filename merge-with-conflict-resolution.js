#!/usr/bin/env node
import { execSync  } from 'child_process';
import { readFileSync, writeFileSync  } from 'fs';console.log('🔄 Merging branches with automatic conflict resolution...')
function resolveConflicts(filePath) {
    try {
    const content = readFileSync(filePath, 'utf8')
    // Check if file has conflict markers
      return false; // No conflicts
  }

    console.log(`🔧 Resolving conflicts in ${filePath}...`)
    // Split by conflict markers and keep the incoming version (after )
    const lines = content.split('\n')
    const resolvedLines = []
    let skipUntilNextMarker = false
    for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
      if (line.includes('')) {
        skipUntilNextMarker = true
        continue
  }
      
      if (line.includes('')) {
    skipUntilNextMarker = false
        continue
  }
      
    continue
  }
      
      if (!skipUntilNextMarker) {
    resolvedLines.push(line)
  }
    }
    
    // Write the resolved content
    writeFileSync(filePath, resolvedLines.join('\n'))
    console.log(`✅ Resolved conflicts in ${filePath}`)
    return true
  } catch (error) {
    console.log(`❌ Error resolving ${filePath}: ${error.message}`)
    return false
  }
}

function mergeBranch(branchName) {
  try {
    console.log(`\n🔄 Attempting to merge ${branchName}...`)
    // Try to merge the branch
    execSync(`git merge ${branchName} --no-ff -m "feat: Merge enhancements from ${branchName}"`, { stdio: 'pipe' })
    console.log(`✅ Successfully merged ${branchName}`)
    return true
  } catch (error) {
    console.log(`⚠️  Merge conflicts detected in ${branchName}, resolving...`)
    // Check for conflicts
    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    if (conflictFiles.trim()) {
      console.log(`🔧 Resolving conflicts in ${conflictFiles.split('\n').length} files...`)
      const files = conflictFiles.trim().split('\n')
      let resolvedCount = 0
      for (const file of files) {
    if (file.trim()) {
          if (resolveConflicts(file.trim())) {
            resolvedCount++
  }
        }
      }

      console.log(`✅ Resolved conflicts in ${resolvedCount} files`)
      // Add all resolved files
      execSync('git add .', { stdio: 'inherit' })
      // Commit the resolution
      execSync(`git commit -m "feat: Resolve merge conflicts from ${branchName}"`, { stdio: 'inherit' })
      console.log(`✅ Successfully merged ${branchName} with conflict resolution`)
      return true
    } else {
      console.log(`❌ Could not resolve conflicts for ${branchName}`)
      return false
    }
  }
}

try {
  // List of branches to merge (most recent first)
  const branchesToMerge = [
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fcae',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd44',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd72',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-feb1',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-ff2 c'
  ]
  let mergedCount = 0
  let failedCount = 0
  for (const branch of branchesToMerge) {
    try {
      // Check if branch has unique commits
      const uniqueCommits = execSync(`git log --oneline main..${branch}`, { encoding: 'utf8' })
      if (!uniqueCommits.trim()) {
        console.log(`⏭️  Branch ${branch} has no unique commits, skipping...`)
        continue
      }

      console.log(`📝 Unique commits in ${branch}:`)
      console.log(uniqueCommits.split('\n').slice(0, 2).join('\n'))
      if (mergeBranch(branch)) {
    mergedCount++
  } else {
    failedCount++
  }

    } catch (error) {
      console.log(`❌ Error processing ${branch}: ${error.message}`)
      failedCount++
    }
  }

  console.log(`\n📊 Merge Summary: `),
  console.log(`✅ Successfully merged: ${mergedCount} branches`)
  console.log(`❌ Failed to merge: ${failedCount} branches`)
  // Push all changes
  console.log('\n📤 Pushing all changes to origin/main...')
  execSync('git push origin main', { stdio: 'inherit' })
  console.log('🎉 Merge process completed!')
} catch (error) {
    console.error('❌ Error during merge process:', error.message)
  process.exit(1)
  }
