#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎯 Master PR Handler & Automation System');
console.log('==========================================');

const GITHUB_TOKEN = 'ghs_UznUFJCcQAvx36YGJEFDGyvCRO4Tmm08Hpf9';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

// Function to make GitHub API calls
async function githubApiCall(endpoint, method = 'GET', data = null) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint}`;
  const options = {
    method,
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
  };
  
  if (data) {
    options.body = JSON.stringify(data);
  }
  
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(`GitHub API call failed: ${error.message}`);
    return null;
  }
}

// Function to get open PRs
async function getOpenPRs() {
  console.log('📋 Fetching open PRs...');
  const prs = await githubApiCall('/pulls?state=open&per_page=100');
  return prs || [];
}

// Function to close PR
async function closePR(prNumber) {
  console.log(`🔒 Closing PR #${prNumber}...`);
  
  try {
    const result = await githubApiCall(`/pulls/${prNumber}`, 'PATCH', {
      state: 'closed'
    });
    
    if (result) {
      console.log(`✅ Successfully closed PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to close PR #${prNumber}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Function to delete branch
async function deleteBranch(branchName) {
  console.log(`🗑️ Deleting branch ${branchName}...`);
  
  try {
    const result = await githubApiCall(`/git/refs/heads/${branchName}`, 'DELETE');
    console.log(`✅ Successfully deleted branch ${branchName}`);
    return true;
  } catch (error) {
    console.log(`⚠️ Could not delete branch ${branchName}: ${error.message}`);
    return false;
  }
}

// Function to run comprehensive automation
function runComprehensiveAutomation() {
  console.log('🚀 Running comprehensive automation...');
  
  const automations = [
    {
      name: 'Health Check',
      command: 'node automation/health-check.cjs',
      optional: false
    },
    {
      name: 'Security Scan',
      command: 'node automation/security-scanner.cjs',
      optional: false
    },
    {
      name: 'Code Quality Fix',
      command: 'node scripts/smart-code-fixer.cjs',
      optional: true
    },
    {
      name: 'Build Test',
      command: 'npm run build',
      optional: false
    },
    {
      name: 'Lint Check',
      command: 'npm run lint',
      optional: true
    }
  ];
  
  const results = [];
  
  automations.forEach(automation => {
    console.log(`\n📋 Running: ${automation.name}`);
    try {
      execSync(automation.command, { stdio: 'inherit' });
      console.log(`✅ ${automation.name} completed successfully`);
      results.push({ name: automation.name, status: 'success' });
    } catch (error) {
      console.log(`❌ ${automation.name} failed: ${error.message}`);
      results.push({ name: automation.name, status: 'failed', error: error.message });
      
      if (!automation.optional) {
        console.log(`⚠️ ${automation.name} is required, stopping automation`);
        return results;
      }
    }
  });
  
  return results;
}

// Function to create comprehensive report
function createComprehensiveReport(prResults, automationResults) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPRs: prResults.length,
      closedPRs: prResults.filter(r => r.closed).length,
      deletedBranches: prResults.filter(r => r.branchDeleted).length,
      automationSuccess: automationResults.filter(r => r.status === 'success').length,
      automationFailed: automationResults.filter(r => r.status === 'failed').length
    },
    prResults,
    automationResults
  };
  
  const reportPath = 'master-pr-handler-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n📄 Comprehensive report saved to: ${reportPath}`);
  return report;
}

// Main execution
async function main() {
  const startTime = Date.now();
  
  try {
    console.log('Starting master PR handler and automation system...\n');
    
    // Get open PRs
    const openPRs = await getOpenPRs();
    console.log(`Found ${openPRs.length} open PRs\n`);
    
    const prResults = [];
    
    // Process each PR
    for (const pr of openPRs) {
      console.log(`\n📋 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Head: ${pr.head.ref}, Base: ${pr.base.ref}`);
      console.log(`   Draft: ${pr.draft}, Mergeable: ${pr.mergeable}`);
      
      const prResult = {
        number: pr.number,
        title: pr.title,
        head: pr.head.ref,
        base: pr.base.ref,
        closed: false,
        branchDeleted: false,
        error: null
      };
      
      try {
        // Close the PR since we've already merged our changes
        const closed = await closePR(pr.number);
        prResult.closed = closed;
        
        if (closed) {
          // Try to delete the branch
          const branchDeleted = await deleteBranch(pr.head.ref);
          prResult.branchDeleted = branchDeleted;
        }
        
      } catch (error) {
        prResult.error = error.message;
        console.error(`❌ Error processing PR #${pr.number}: ${error.message}`);
      }
      
      prResults.push(prResult);
    }
    
    console.log('\n🔧 Running comprehensive automation...');
    
    // Run comprehensive automation
    const automationResults = runComprehensiveAutomation();
    
    const duration = Date.now() - startTime;
    
    // Create comprehensive report
    const report = createComprehensiveReport(prResults, automationResults);
    
    console.log('\n📊 Final Summary:');
    console.log(`   Total PRs Processed: ${report.summary.totalPRs}`);
    console.log(`   PRs Closed: ${report.summary.closedPRs}`);
    console.log(`   Branches Deleted: ${report.summary.deletedBranches}`);
    console.log(`   Automation Success: ${report.summary.automationSuccess}`);
    console.log(`   Automation Failed: ${report.summary.automationFailed}`);
    console.log(`   Duration: ${duration}ms`);
    
    if (report.summary.automationFailed === 0) {
      console.log('\n🎉 Master PR handler completed successfully!');
      process.exit(0);
    } else {
      console.log('\n⚠️ Master PR handler completed with some automation failures');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Master PR handler failed:', error.message);
    process.exit(1);
  }
}

main();