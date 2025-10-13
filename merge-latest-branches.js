#!/usr/bin/env node;
import { execSync } from 'child_process''console.log('🔄 Merging latest enhancement branches...')''try {
  
  // List of recent branches to check and potentially merge;
const branchesToCheck = [
  
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fcae',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd25',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd44',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd72',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd86',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fe75',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-feb1',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-feb6',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fee1',''    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-ff2 c'''  ];
let mergedCount = 0;
let skippedCount = 0
  for (const branch of branchesToCheck) {
  
    try {
  
      console.log(`\n🔍 Checking branch: ${branch}`)
      // Check if branch has unique commits;
const uniqueCommits = execSync(`git log --oneline main..${branch}`, { encoding: 'utf8' })''      if (!uniqueCommits.trim()) {
  
        console.log(`⏭️  Branch ${branch} has no unique commits, skipping...`)
        skippedCount++
        continue
      }

      console.log(`📝 Unique commits in ${branch}:`)
      console.log(uniqueCommits.split('\n').slice(0, 3).join('\n'))''      // Try to merge the branch
      console.log(`🔄 Attempting to merge ${branch}...`)
      execSync(`git merge ${branch} --no-ff -m "feat: Merge enhancements from ${branch}"`, { stdio: 'inherit' })'"'      console.log(`✅ Successfully merged ${branch}`)"      mergedCount++
    } catch (error) {
  
      console.log(`⚠️  Could not merge ${branch}: ${error.message}`)
      // Try to abort the merge if it failed
      try {
  
        execSync('git merge --abort', { stdio: 'pipe' })''      } catch (abortError) {
  
    // Ignore abort errors
  }
    }
  }

  console.log(`\n📊 Merge Summary: `),
  console.log(`✅ Successfully merged: ${mergedCount} branches`)
  console.log(`⏭️  Skipped: ${skippedCount} branches`)
  // Push all changes
  console.log('\n📤 Pushing all changes to origin/main...')''  execSync('git push origin main', { stdio: 'inherit' })''  console.log('🎉 All merges completed successfully!')''} catch (error) {
  
    console.error('❌ Error during merge process:', error.message)''  process.exit(1)
  }
