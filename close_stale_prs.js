#!/usr/bin/env node

import { execSync } from 'child_process';


function runCommand(command, description) {
  try {
        const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: '/workspace'
    });
        return { success: true, output };
  } catch (error) {
        return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

async function main() {
      
  const results = {
    closed: [],
    failed: []
  };
  
  for (const pr of openPRs) {
    `);
    
    // Try to close the PR
    const closeResult = runCommand(
      `gh pr close ${pr.number} --comment "Closing stale PR - branch no longer exists"`,
      `Close PR #${pr.number}`
    );
    
    if (closeResult.success) {
            results.closed.push(pr);
    } else {
            results.failed.push({ pr, reason: closeResult.error });
    }
  }
  
  // Generate summary report
        
  if (results.closed.length > 0) {
        results.closed.forEach(pr => `));
  }
  
  if (results.failed.length > 0) {
        results.failed.forEach(({ pr, reason }) => : ${reason}`));
  }
  
  }

main().catch(console.error);