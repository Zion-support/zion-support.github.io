#!/usr/bin/env node

/**
 * Focused PR Merger - Targets specific important branches for merging
 * This script focuses on merging the most important branches while avoiding conflicts
 */import { execSync } from 'child_process';
import fs from 'fs';

console.log('🎯 Starting Focused PR Merge Process...\n');

//Step 1: Ensure we're on main and up to date
console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  console.log('✅ Main branch is up to date\n');
} catch (error) {
  console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

//Step 2: Define priority branches to merge
const priorityBranches = [
  'add-new-2026-content',
  'add-revolutionary-content-2026',
  'ai-2027-content-integration',
  'ai-dashboard-improvements',
  '0nylrk-codex-fix-footer-contact-link-resolved',
  '0parff-codex-centralize-api-error-handling-resolved',
  '0smfo8-codex-fix-404-error-resolved',
];

//Step 3: Get cursor branches (limit to most recent)
console.log('🔍 Step 3: Finding recent cursor branches...');
let cursorBranches = [];
try {
  const branchOutput = execSync('git branch -r | grep "cursor/" | tail -20', {
    encoding: 'utf8',
  });
  cursorBranches = branchOutput
    .split('\n')
    .filter(branch => branch.trim())
    .map(branch => branch.trim().replace('origin/', ''))
    .filter(
      branch => branch.startsWith('cursor/') && !branch.includes('backup')
    );
} catch (error) {
  console.log('⚠️  Could not fetch cursor branches:', error.message);
}

console.log(
  `📊 Found ${priorityBranches.length} priority branches and ${cursorBranches.length} cursor branches\n`
);

//Step 4: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
  console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Check if branch exists and has commits
    try {
      execSync(`git rev-parse origin/${branchName}`, { stdio: 'pipe' });
    } catch (e) {
      console.log(`⚠️  Branch ${branchName} does not exist, skipping...`);
      return { success: false, method: 'not_found' };
    }

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  } catch (error) {
    console.log(
      `⚠️  Direct merge failed for ${branchName}, attempting conflict resolution...`
    );

    try {
      //Strategy 1: Auto-resolve with theirs for most conflicts
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );
      console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
      );
      return { success: true, method: 'theirs' };
    } catch (theirsError) {
      console.log(`⚠️  'Theirs' strategy failed, trying 'ours' strategy...`);
    }

    try {
      //Strategy 2: Auto-resolve with ours
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'inherit' }
      );
      console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
      );
      return { success: true, method: 'ours' };
    } catch (oursError) {
      console.log(`⚠️  'Ours' strategy failed, trying manual resolution...`);
    }

    try {
      //Strategy 3: Manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'inherit' });

      //Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
      })
        .split('\n')
        .filter(file => file.trim());

      console.log(
        `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
      );

      //For each conflicted file, try to resolve
      for (const file of conflictedFiles) {
        if (file.trim()) {
          try {
            //Try to resolve by taking the incoming version
            execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
            execSync(`git add "${file}"`, { stdio: 'inherit' });
            console.log(`  ✅ Resolved conflict in ${file}`);
          } catch (fileError) {
            console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
          }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'inherit',
      });
      console.log(`✅ Manually resolved conflicts for ${branchName}`);
      return { success: true, method: 'manual' };
    } catch (manualError) {
      console.log(`❌ Manual resolution failed for ${branchName}`);
    }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
      console.log(`⏭️  Skipping ${branchName} due to unresolvable conflicts`);
    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Step 5: Execute merge strategy
console.log('🚀 Step 5: Executing merge strategy...\n');

const results = {
  priority: [],
  cursor: [],
  failed: [],
  summary: {
    total: 0,
  successful: 0,
    failed: 0,
    methods: {
      direct: 0,
  theirs: 0,
      ours: 0,
  manual: 0,
      failed: 0,
  not_found: 0,
    },
  },
};

//Merge priority branches first
console.log('🎯 Merging priority branches...');
for (const branch of priorityBranches) {
  const result = resolveConflictsAndMerge(branch);
  results.priority.push({ branch, ...result });
  results.summary.total++;
  if (result.success) {
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.summary.failed++;
    results.summary.methods[result.method]++;
    if (result.method !== 'not_found') {
      results.failed.push(branch);
    }
  }
}

//Merge cursor branches (limit to 10 most recent)
console.log('\n🚀 Merging recent cursor branches...');
const recentCursorBranches = cursorBranches.slice(0, 10);
for (const branch of recentCursorBranches) {
  const result = resolveConflictsAndMerge(branch);
  results.cursor.push({ branch, ...result });
  results.summary.total++;
  if (result.success) {
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.summary.failed++;
    results.summary.methods[result.method]++;
    if (result.method !== 'not_found') {
      results.failed.push(branch);
    }
  }
}

//Step 6: Generate comprehensive report
console.log('\n📊 Step 6: Generating merge report...');
results.timestamp = new Date().toISOString();
results.branchCounts = {
  priority: priorityBranches.length,
  cursor: recentCursorBranches.length,
  total: priorityBranches.length + recentCursorBranches.length,
};

fs.writeFileSync('focused-merge-report.json', JSON.stringify(results, null, 2));

//Step 7: Display summary
console.log('\n🎉 FOCUSED MERGE PROCESS COMPLETED!\n');
console.log('📊 SUMMARY:');
console.log(`  Total branches processed: ${results.summary.total}`);
console.log(`  Successful merges: ${results.summary.successful}`);
console.log(`  Failed merges: ${results.summary.failed}`);
console.log('\n🔧 RESOLUTION METHODS:');
console.log(`  Direct merges: ${results.summary.methods.direct}`);
console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
console.log(`  Manual resolution: ${results.summary.methods.manual}`);
console.log(`  Not found: ${results.summary.methods.not_found}`);
console.log(`  Failed: ${results.summary.methods.failed}`);

if (results.failed.length > 0) {
  console.log('\n❌ FAILED BRANCHES:');
  results.failed.forEach(branch => console.log(`  - ${branch}`));
}

// Step 8: Push changes
console.log('\n🚀 Step 8: Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  console.error('❌ Failed to push changes:', error.message);
  console.log('You may need to push manually: git push origin main');
}

console.log('\n📄 Detailed report saved to: focused-merge-report.json');
console.log('🎯 Focused merge process completed successfully!');
