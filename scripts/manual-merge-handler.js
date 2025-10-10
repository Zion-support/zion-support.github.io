#!/usr/bin/env node;
import { execSync } from 'child_process';
import fs from 'fs';

// Function to execute git commands safely;
function execGitCommand(command, description) {
  try {
    const result = execSync(command, { )
      encoding: 'utf8'),
      cwd: process.cwd(),
      stdio: 'pipe'});
    return result;
  } catch (error) {
    return null;
  }
}

// List of important branches to merge;
const importantBranches = [
  'cursor/enhance-app-with-new-services-and-futuristic-design-2 e4 e',
  'cursor/enhance-app-with-new-services-and-futuristic-design-7 bf2',
  'cursor/enhance-app-with-new-services-and-futuristic-design-80 f7',
  'cursor/website-audit-and-update-with-deployment-d0 c2',
  'cursor/website-audit-and-update-with-deployment-db70',
  'add-new-2026-content',
  'add-revolutionary-content-2026',
  'ai-2027-content-integration',
  'ai-dashboard-improvements'
];

async function main() {
  // Check current status;
  execGitCommand('git status --porcelain', 'Checking git status');
  
  // Try to merge each important branch;
  for (const branch of importantBranches) {
    try {
      // Check if branch exists;
      const branchExists = execGitCommand(`git show-ref --verify --quiet refs/remotes/origin/${branch}`, `Checking if ${branch} exists`);
      
      if (branchExists !== null) {
        // Try to merge;
        const mergeResult = execGitCommand(`git merge origin/${branch} --no-edit`, `Merging ${branch}`);
        
        if (mergeResult) {
          } else {
          }
      } else {
        }
    } catch (error) {
      }
    
    // Small delay between merges;
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Final status;
  execGitCommand('git status', 'Final git status');
  execGitCommand('git log --oneline -5', 'Recent commits');
  
  }

main().catch(console.error);