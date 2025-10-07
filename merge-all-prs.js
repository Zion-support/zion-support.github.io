#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// Function to get all open PRs
async function getAllOpenPRs() {
  try {
    const response = await fetch(
      'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100'
    );
    const prs = await response.json();
    return prs;
  } catch (error) {
    console.error('Error fetching PRs:', error);
    return [];
  }
}

// Function to check if PR is mergeable
async function isPRMergeable(prNumber) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`
    );
    const pr = await response.json();
    return {
      mergeable: pr.mergeable,
      mergeable_state: pr.mergeable_state,
      draft: pr.draft,
      head: pr.head.ref,
      title: pr.title,
    };
  } catch (error) {
    console.error(`Error checking PR ${prNumber}:`, error);
    return {
      mergeable: false,
      mergeable_state: 'unknown',
      draft: true,
      head: '',
      title: '',
    };
  }
}

// Function to merge a PR
async function mergePR(prNumber, branchName) {
  try {
    console.log(`\n🔄 Attempting to merge PR #${prNumber} (${branchName})...`);

    // Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    // Try to merge
    try {
      execSync(`git merge origin/${branchName} --no-commit`, {
        stdio: 'inherit',
      });
      execSync(`git commit -m "Merge PR #${prNumber}: ${branchName}"`, {
        stdio: 'inherit',
      });
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } catch (mergeError) {
      console.log(
        `⚠️  Merge conflict in PR #${prNumber}, attempting to resolve...`
      );

      // Check for conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
        console.log(`❌ Cannot auto-resolve conflicts in PR #${prNumber}`);
        // Abort the merge
        execSync('git merge --abort', { stdio: 'inherit' });
        return false;
      } else {
        // No conflicts, commit the merge
        execSync(`git commit -m "Merge PR #${prNumber}: ${branchName}"`, {
          stdio: 'inherit',
        });
        console.log(
          `✅ Successfully merged PR #${prNumber} after conflict resolution`
        );
        return true;
      }
    }
  } catch (error) {
    console.error(`❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting comprehensive PR merge process...\n');

  // Get all open PRs
  const prs = await getAllOpenPRs();
  console.log(`📋 Found ${prs.length} open PRs`);

  const mergeablePRs = [];
  const failedPRs = [];

  // Check each PR for mergeability
  for (const pr of prs) {
    console.log(`\n🔍 Checking PR #${pr.number}: ${pr.title}`);
    const prInfo = await isPRMergeable(pr.number);

    if (
      prInfo.mergeable &&
      prInfo.mergeable_state === 'clean' &&
      !prInfo.draft
    ) {
      mergeablePRs.push({
        number: pr.number,
        title: prInfo.title,
        branch: prInfo.head,
      });
      console.log(`✅ PR #${pr.number} is mergeable`);
    } else {
      console.log(
        `⚠️  PR #${pr.number} is not mergeable (mergeable: ${prInfo.mergeable}, state: ${prInfo.mergeable_state}, draft: ${prInfo.draft})`
      );
    }
  }

  console.log(`\n📊 Summary: ${mergeablePRs.length} PRs are mergeable`);

  // Merge all mergeable PRs
  for (const pr of mergeablePRs) {
    const success = await mergePR(pr.number, pr.branch);
    if (!success) {
      failedPRs.push(pr);
    }
  }

  // Final summary
  console.log('\n🎯 Merge Process Complete!');
  console.log(
    `✅ Successfully merged: ${mergeablePRs.length - failedPRs.length} PRs`
  );
  console.log(`❌ Failed to merge: ${failedPRs.length} PRs`);

  if (failedPRs.length > 0) {
    console.log('\n❌ Failed PRs:');
    failedPRs.forEach(pr => {
      console.log(`  - PR #${pr.number}: ${pr.title} (${pr.branch})`);
    });
  }

  // Push all changes
  try {
    console.log('\n🚀 Pushing all changes to main...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed all changes to main');
  } catch (error) {
    console.error('❌ Error pushing to main:', error.message);
  }
}

main().catch(console.error);
