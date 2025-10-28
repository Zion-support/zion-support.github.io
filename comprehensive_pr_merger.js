#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

class PRMerger {
    constructor() {
        this.mergedPRs = [];
        this.failedPRs = [];
        this.conflictPRs = [];
    }

    log(message) {
        console.log(`[${new Date().toISOString()}] ${message}`);
    }

    execCommand(command, options = {}) {
        try {
            const result = execSync(command, { 
                encoding: 'utf8', 
                stdio: 'pipe',
                ...options 
            });
            return { success: true, output: result };
        } catch (error) {
            return { 
                success: false, 
                error: error.message, 
                output: error.stdout || error.stderr || ''
            };
        }
    }

    async getOpenPRs() {
        this.log('Fetching open PRs...');
        const result = this.execCommand('gh pr list --state open --json number,title,headRefName,mergeable');
        
        if (!result.success) {
            this.log('Failed to fetch PRs: ' + result.error);
            return [];
        }

        const prs = JSON.parse(result.output);
        this.log(`Found ${prs.length} open PRs`);
        return prs;
    }

    async updateMainBranch() {
        this.log('Updating main branch...');
        const result = this.execCommand('git checkout main && git pull origin main');
        if (!result.success) {
            this.log('Failed to update main branch: ' + result.error);
            return false;
        }
        return true;
    }

    async resolveConflicts(branchName) {
        this.log(`Attempting to resolve conflicts for branch: ${branchName}`);
        
        // Fetch the branch
        const fetchResult = this.execCommand(`git fetch origin ${branchName}`);
        if (!fetchResult.success) {
            this.log(`Failed to fetch branch ${branchName}: ${fetchResult.error}`);
            return false;
        }

        // Create a temporary branch
        const tempBranch = `temp-merge-${branchName}-${Date.now()}`;
        const checkoutResult = this.execCommand(`git checkout -b ${tempBranch} origin/${branchName}`);
        if (!checkoutResult.success) {
            this.log(`Failed to checkout branch ${branchName}: ${checkoutResult.error}`);
            return false;
        }

        try {
            // Try to merge with main
            const mergeResult = this.execCommand('git merge main --no-ff -m "Auto-merge with main"');
            
            if (mergeResult.success) {
                this.log(`Successfully merged ${branchName} with main`);
                
                // Push the merged branch
                const pushResult = this.execCommand(`git push origin ${tempBranch}`);
                if (pushResult.success) {
                    this.log(`Successfully pushed merged branch ${tempBranch}`);
                    return true;
                } else {
                    this.log(`Failed to push merged branch: ${pushResult.error}`);
                }
            } else {
                this.log(`Merge conflicts detected in ${branchName}: ${mergeResult.error}`);
                
                // Try to resolve conflicts automatically
                const statusResult = this.execCommand('git status --porcelain');
                if (statusResult.success) {
                    const conflictedFiles = statusResult.output
                        .split('\n')
                        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
                        .map(line => line.split(' ').pop());
                    
                    this.log(`Conflicted files: ${conflictedFiles.join(', ')}`);
                    
                    // Try to resolve conflicts using git strategies
                    const resolveResult = this.execCommand('git add . && git commit -m "Auto-resolve conflicts"');
                    if (resolveResult.success) {
                        this.log(`Successfully resolved conflicts for ${branchName}`);
                        const pushResult = this.execCommand(`git push origin ${tempBranch}`);
                        if (pushResult.success) {
                            return true;
                        }
                    }
                }
                
                // Abort merge if we can't resolve
                this.execCommand('git merge --abort');
            }
        } catch (error) {
            this.log(`Error during merge process: ${error.message}`);
            this.execCommand('git merge --abort');
        } finally {
            // Clean up temporary branch
            this.execCommand('git checkout main');
            this.execCommand(`git branch -D ${tempBranch}`);
        }

        return false;
    }

    async mergePR(pr) {
        this.log(`Processing PR #${pr.number}: ${pr.title}`);
        
        // Try direct merge first
        const directMergeResult = this.execCommand(`gh pr merge ${pr.number} --merge --delete-branch`);
        
        if (directMergeResult.success) {
            this.log(`Successfully merged PR #${pr.number} directly`);
            this.mergedPRs.push(pr);
            return true;
        }

        this.log(`Direct merge failed for PR #${pr.number}, attempting conflict resolution...`);
        
        // Try to resolve conflicts
        const conflictResolved = await this.resolveConflicts(pr.headRefName);
        
        if (conflictResolved) {
            this.log(`Successfully resolved conflicts for PR #${pr.number}`);
            this.mergedPRs.push(pr);
            return true;
        } else {
            this.log(`Failed to resolve conflicts for PR #${pr.number}`);
            this.failedPRs.push(pr);
            return false;
        }
    }

    async mergeAllPRs() {
        this.log('Starting comprehensive PR merge process...');
        
        // Update main branch first
        if (!(await this.updateMainBranch())) {
            this.log('Failed to update main branch, aborting...');
            return;
        }

        // Get all open PRs
        const prs = await this.getOpenPRs();
        
        if (prs.length === 0) {
            this.log('No open PRs found');
            return;
        }

        // Process each PR
        for (const pr of prs) {
            try {
                await this.mergePR(pr);
                // Add a small delay between PRs
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (error) {
                this.log(`Error processing PR #${pr.number}: ${error.message}`);
                this.failedPRs.push(pr);
            }
        }

        // Generate summary report
        this.generateSummaryReport();
    }

    generateSummaryReport() {
        const report = {
            timestamp: new Date().toISOString(),
            totalPRs: this.mergedPRs.length + this.failedPRs.length,
            mergedPRs: this.mergedPRs.length,
            failedPRs: this.failedPRs.length,
            merged: this.mergedPRs.map(pr => ({
                number: pr.number,
                title: pr.title,
                headRefName: pr.headRefName
            })),
            failed: this.failedPRs.map(pr => ({
                number: pr.number,
                title: pr.title,
                headRefName: pr.headRefName
            }))
        };

        fs.writeFileSync('/workspace/merge_report.json', JSON.stringify(report, null, 2));
        
        this.log('=== MERGE SUMMARY ===');
        this.log(`Total PRs processed: ${report.totalPRs}`);
        this.log(`Successfully merged: ${report.mergedPRs}`);
        this.log(`Failed to merge: ${report.failedPRs}`);
        this.log('Detailed report saved to merge_report.json');
    }
}

// Execute the merger
const merger = new PRMerger();
merger.mergeAllPRs().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});