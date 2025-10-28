#!/usr/bin/env node
/**
 * Latest Comprehensive Merge - Handles all new branches and PRs
 * This script will systematically merge all new branches found
 */

import { execSync } from 'child_process';
import fs from 'fs';

// Step 1: Ensure we're on main and up to date
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
} catch (error) {
  console.error('Error checking out main:', error);
  process.exit(1);
}

// Step 2: Get all new branches that need merging
const branches = execSync('git branch -r', { encoding: 'utf8' })
  .split('\n')
  .filter(branch => branch.trim() && !branch.includes('main') && !branch.includes('HEAD'));

console.log('Found branches:', branches);

// Step 3: Process each branch
branches.forEach(branch => {
  const branchName = branch.trim().replace('origin/', '');
  console.log(`Processing branch: ${branchName}`);
  
  try {
    // Checkout and merge branch
    execSync(`git checkout ${branchName}`, { stdio: 'inherit' });
    execSync('git checkout main', { stdio: 'inherit' });
    execSync(`git merge ${branchName}`, { stdio: 'inherit' });
    console.log(`Successfully merged ${branchName}`);
  } catch (error) {
    console.error(`Error merging ${branchName}:`, error);
  }
});

console.log('Merge process completed');