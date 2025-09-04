#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

console.log('🔄 Starting Open PR Merger...');

class OpenPRMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.mergedPRs = [];
    this.failedPRs = [];
    this.mergeReport = {
      timestamp: new Date().toISOString(),
      mergedPRs: [],
      failedPRs: [],
      summary: {
        totalPRs: 0,
        successfulMerges: 0,
        failedMerges: 0
      }
    }}

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString(;);
    console.log(`[${timestamp}] [${level}] ${message}`);}

  async mergeOpenPRs() {
    this.log('🔍 Processing open PRs...');
    
    try {
      // Read the open PRs file
      const openPRsData = JSON.parse(fs.readFileSync('open_prs.json', 'utf8';););
      this.mergeReport.summary.totalPRs = openPRsData.length
      
      this.log(`Found ${openPRsData.length} open PRs to process`);
      
      // Process first 5 PRs to avoid overwhelming the system
      const prsToProcess = openPRsData.slice(0, 5;);
      
      for (const pr of prsToProcess) {
        try {
          await this.mergePR(pr)} catch (error) {
          this.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`, 'ERROR');
          this.failedPRs.push({ number: pr.number, title: pr.title, error: error.message });
          this.mergeReport.failedPRs.push({ number: pr.number, title: pr.title, error: error.message })}
      }
      
      // Generate final report
      this.generateMergeReport()} catch (error) {
      this.log(`❌ Error in PR merging: ${error.message}`, 'ERROR')}
  }

  async mergePR(pr) {
    this.log(`🔄 Processing PR #${pr.number}: ${pr.title}`);
    
    try {
      // Get the PR branch name
      const branchName = pr.head.re;f;
      const fullBranchName = `${pr.head.user.login}:${branchName;};`;
      
      this.log(`📋 PR Details:`);
      this.log(`   - Number: ${pr.number}`);
      this.log(`   - Title: ${pr.title}`);
      this.log(`   - Branch: ${fullBranchName}`);
      this.log(`   - State: ${pr.state}`);
      this.log(`   - URL: ${pr.html_url}`);
      
      // Fetch the PR branch
      execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
      
      // Try to merge the PR
      try {
        execSync(`git merge origin/${branchName} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`, { 
          stdio: 'pipe',
          timeout: 30000 // 30 second timeout
        });
        
        this.log(`✅ Successfully merged PR #${pr.number}`);
        this.mergedPRs.push({
          number: pr.number,
          title: pr.title,
          branch: branchName,
          url: pr.html_url
        });
        this.mergeReport.mergedPRs.push({
          number: pr.number,
          title: pr.title,
          branch: branchName,
          url: pr.html_url
        });
        this.mergeReport.summary.successfulMerges++} catch (mergeError) {
        // Check if it's a conflict
        if () {
          this.log(`⚠️ Merge conflict detected in PR #${pr.number}`)) {
    ) {
          this.log(`⚠️ Merge conflict detected in PR #${pr.number}`);
  }
          await this.resolvePRConflicts(pr, branchName)} else {
          throw mergeError}
      }
      
    } catch (error) {
      // Reset any failed merge
      try {
        execSync('git merge --abort', { stdio: 'pipe' })} catch (resetError) {
        // Ignore reset errors
      }
      throw error}
  }

  async resolvePRConflicts(pr, branchName) {
    this.log(`🔧 Resolving conflicts for PR #${pr.number}`);
    
    try {
      // Get list of conflicted files
      const conflictedFiles = this.getConflictedFiles(;);
      
      for (const file of conflictedFiles) {
        await this.resolveFileConflicts(file)}
      
      // Add resolved files
      execSync('git add .', { stdio: 'pipe' });
      
      // Complete the merge
      execSync(`git commit -m "Resolve merge conflicts for PR #${pr.number}: ${pr.title}"`, { stdio: 'pipe' });
      
      this.log(`✅ Resolved conflicts for PR #${pr.number}`);
      this.mergedPRs.push({
        number: pr.number,
        title: pr.title,
        branch: branchName,
        url: pr.html_url,
        conflictsResolved: true
      });
      this.mergeReport.mergedPRs.push({
        number: pr.number,
        title: pr.title,
        branch: branchName,
        url: pr.html_url,
        conflictsResolved: true
      });
      this.mergeReport.summary.successfulMerges++} catch (error) {
      this.log(`❌ Failed to resolve conflicts for PR #${pr.number}: ${error.message}`, 'ERROR');
      throw error}
  }

  getConflictedFiles() {
    try {
      const output = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' ;};);
      return output.split('\n').filter(line => line.trim());} catch (error) {
      return [];}
  }

  async resolveFileConflicts(filePath) {
    this.log(`🔧 Resolving conflicts in file: ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8';);
      const resolvedContent = this.resolveFileContent(content;);
      fs.writeFileSync(filePath, resolvedContent);
      
      this.log(`✅ Resolved conflicts in: ${filePath}`)} catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
      throw error}
  }

  resolveFileContent(content) {
    // Remove conflict markers and keep the latest version
    let resolved = conte;n;t;
    
    // Remove conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolved = resolved.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict artifacts
    resolved = resolved.replace(/^[=]{7,}$/gm, '');
    resolved = resolved.replace(/^[<]{7,} [^\n]+$/gm, '');
    resolved = resolved.replace(/^[>]{7,} [^\n]+$/gm, '');
    
    // Remove empty lines
    resolved = resolved.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    return resolved;}

  generateMergeReport() {
    this.mergeReport.timestamp = new Date().toISOString();
    this.mergeReport.summary.failedMerges = this.failedPRs.length
    
    // Save report
    fs.writeFileSync('open-pr-merge-report.json', JSON.stringify(this.mergeReport, null, 2));
    
    console.log('\n📊 Open PR Merge Summary:');
    console.log(`   - Total PRs processed: ${this.mergeReport.summary.totalPRs}`);
    console.log(`   - Successful merges: ${this.mergeReport.summary.successfulMerges}`);
    console.log(`   - Failed merges: ${this.mergeReport.summary.failedMerges}`);
    
    if ( {
      console.log('\n✅ Successfully merged PRs:')) {
     {
      console.log('\n✅ Successfully merged PRs:');
  }
      this.mergeReport.mergedPRs.forEach(pr => {
        console.log(`   - PR #${pr.number}: ${pr.title}`);
        if ( {
          console.log(`     (Conflicts resolved)) {
     {
          console.log(`     (Conflicts resolved);
  }`)}
      })}
    
    if ( {
      console.log('\n❌ Failed to merge PRs:')) {
     {
      console.log('\n❌ Failed to merge PRs:');
  }
      this.mergeReport.failedPRs.forEach(pr => {
        console.log(`   - PR #${pr.number}: ${pr.title} - ${pr.error}`);})}
  }
}

// Run the PR merger
const merger = new OpenPRMerger;(;);
merger.mergeOpenPRs().then(() => {
  console.log('\n✅ Open PR merging completed!');}).catch(error => {
  console.error('❌ Open PR merging failed:', error)});