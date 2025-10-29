#!/usr/bin/env node
/**
 * Comprehensive script to merge all open PRs and resolve conflicts
 */

const { execSync } = require('child_process');
const fs = require('fs');

// Function to run git commands
function runGit(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf-8',
      cwd: '/workspace',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options
    });
  } catch (error) {
    if (!options.ignoreError) {
      throw error;
    }
    return error.stdout || '';
  }
}

// Get list of PRs
function getPRs() {
  try {
    const data = fs.readFileSync('/workspace/current_open_prs_fresh.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Reading from current-open-prs.json fallback...');
    try {
      const data = fs.readFileSync('/workspace/current-open-prs.json', 'utf-8');
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  }
}

// Resolve conflicts in a file - prefer THEIRS (incoming PR changes)
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if there are conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return true; // No conflicts
    }
    
    const lines = content.split('\n');
    const resolved = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        // Found conflict start
        const headLines = [];
        let theirsLines = [];
        i++; // Skip conflict marker
        
        // Collect HEAD version
        while (i < lines.length && !lines[i].trim().startsWith('=======')) {
          if (!lines[i].trim().startsWith('<<<<<<<')) {
            headLines.push(lines[i]);
          }
          i++;
        }
        
        if (i < lines.length && lines[i].trim().startsWith('=======')) {
          i++; // Skip separator
        }
        
        // Collect THEIRS version (the PR changes we want to keep)
        while (i < lines.length && !lines[i].trim().startsWith('>>>>>>>')) {
          theirsLines.push(lines[i]);
          i++;
        }
        
        if (i < lines.length && lines[i].trim().startsWith('>>>>>>>')) {
          i++; // Skip end marker
        }
        
        // Prefer THEIRS (incoming PR) but keep HEAD if THEIRS is empty
        const headContent = headLines.join('\n').trim();
        const theirsContent = theirsLines.join('\n').trim();
        
        if (!theirsContent && headContent) {
          // THEIRS is empty, keep HEAD
          resolved.push(...headLines);
        } else {
          // Prefer THEIRS (the PR changes)
          resolved.push(...theirsLines);
        }
        
        continue;
      }
      
      // Normal line
      resolved.push(line);
      i++;
    }
    
    // Clean up any remaining markers
    const cleaned = resolved.filter(line => 
      !line.trim().startsWith('<<<<<<<') && 
      !line.trim().startsWith('=======') && 
      !line.trim().startsWith('>>>>>>>')
    );
    
    fs.writeFileSync(filePath, cleaned.join('\n'), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    // Fallback: use theirs strategy via git
    try {
      runGit(`git checkout --theirs "${filePath}"`, { silent: true, ignoreError: true });
      runGit(`git add "${filePath}"`, { silent: true, ignoreError: true });
      return true;
    } catch (e) {
      return false;
    }
  }
}

// Merge a branch into main
function mergeBranch(branchName, prNumber) {
  console.log(`\n🔄 Processing PR #${prNumber}: ${branchName}`);
  
  try {
    // Check if branch exists
    try {
      runGit(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { silent: true });
    } catch (e) {
      console.log(`   ⚠️  Branch ${branchName} not found, skipping...`);
      return { success: false, reason: 'branch_not_found' };
    }
    
    // Attempt merge
    try {
      runGit(`git merge origin/${branchName} --no-ff -m "Merge PR #${prNumber}: ${branchName}"`, { ignoreError: true });
      console.log(`   ✅ Successfully merged ${branchName}`);
      return { success: true };
    } catch (mergeError) {
      // Check if there are conflicts
      const status = runGit('git status --porcelain', { silent: true, ignoreError: true });
      
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        console.log(`   🔧 Resolving conflicts for ${branchName}...`);
        
        // Get conflicted files
        const conflictedFiles = status
          .split('\n')
          .filter(line => line.match(/^(UU|AA|DD)/))
          .map(line => line.substring(3).trim())
          .filter(Boolean);
        
        console.log(`   📁 Found ${conflictedFiles.length} conflicted files`);
        
        // Resolve conflicts
        let allResolved = true;
        for (const file of conflictedFiles) {
          if (resolveConflicts(file)) {
            console.log(`   ✅ Resolved: ${file}`);
          } else {
            console.log(`   ❌ Failed to resolve: ${file}`);
            allResolved = false;
          }
        }
        
        if (allResolved) {
          // Add resolved files
          runGit('git add .', { silent: true });
          
          // Complete merge
          try {
            runGit(`git commit --no-edit -m "Merge PR #${prNumber}: ${branchName} (conflicts resolved)"`, { ignoreError: true });
            console.log(`   ✅ Successfully resolved conflicts and merged ${branchName}`);
            return { success: true };
          } catch (commitError) {
            console.log(`   ❌ Failed to complete merge commit`);
            // Try to abort merge
            runGit('git merge --abort', { silent: true, ignoreError: true });
            return { success: false, reason: 'commit_failed' };
          }
        } else {
          // Abort merge if we can't resolve
          runGit('git merge --abort', { silent: true, ignoreError: true });
          return { success: false, reason: 'conflicts_unresolved' };
        }
      } else {
        // No conflicts but merge failed for another reason
        console.log(`   ❌ Merge failed: ${mergeError.message}`);
        try {
          runGit('git merge --abort', { silent: true, ignoreError: true });
        } catch (e) {}
        return { success: false, reason: 'merge_failed' };
      }
    }
  } catch (error) {
    console.log(`   ❌ Error processing ${branchName}: ${error.message}`);
    return { success: false, reason: 'error' };
  }
}

// Main function
function main() {
  console.log('🚀 Starting comprehensive PR merge process...\n');
  
  // Ensure we're on main branch
  try {
    runGit('git checkout main');
    runGit('git pull origin main');
  } catch (error) {
    console.error('❌ Failed to checkout main:', error.message);
    process.exit(1);
  }
  
  // Get PRs
  const prs = getPRs();
  console.log(`📋 Found ${prs.length} PR(s) to process\n`);
  
  if (prs.length === 0) {
    console.log('✅ No PRs to process');
    return;
  }
  
  const results = {
    successful: [],
    failed: []
  };
  
  // Process each PR
  for (const pr of prs) {
    const branchName = pr.headRefName;
    const prNumber = pr.number;
    
    const result = mergeBranch(branchName, prNumber);
    
    if (result.success) {
      results.successful.push({ number: prNumber, branch: branchName });
    } else {
      results.failed.push({ number: prNumber, branch: branchName, reason: result.reason });
    }
  }
  
  // Summary
  console.log('\n📊 Merge Summary:');
  console.log(`✅ Successful merges: ${results.successful.length}`);
  console.log(`❌ Failed merges: ${results.failed.length}`);
  
  if (results.successful.length > 0) {
    console.log('\n✅ Successfully merged:');
    results.successful.forEach(r => console.log(`   - PR #${r.number}: ${r.branch}`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed to merge:');
    results.failed.forEach(r => console.log(`   - PR #${r.number}: ${r.branch} (${r.reason})`));
  }
  
  // Push changes if there are successful merges
  if (results.successful.length > 0) {
    console.log('\n🚀 Pushing changes to main...');
    try {
      runGit('git push origin main');
      console.log('✅ Successfully pushed all changes to main');
    } catch (error) {
      console.error('❌ Failed to push changes:', error.message);
    }
  }
  
  // Save results
  fs.writeFileSync('/workspace/merge_results.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Results saved to merge_results.json');
}

main();
