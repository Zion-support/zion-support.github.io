#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔍 Analyzing PR branches...');

try {
    // Get all PR branches
    const prBranches = execSync('git branch -r | grep -E "origin/pr-" | sed "s/origin\\///"', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(branch => branch.trim());

    console.log(`📊 Found ${prBranches.length} PR branches`);

    // Analyze each PR branch
    const prAnalysis = [];
    
    for (const branch of prBranches.slice(0, 10)) { // Analyze first 10 for now
        console.log(`\n🔍 Analyzing ${branch}...`);
        
        try {
            // Fetch the branch
            execSync(`git fetch origin ${branch}`, { stdio: 'pipe' });
            
            // Check if branch exists
            const branchExists = execSync(`git show-ref --verify --quiet refs/remotes/origin/${branch}; echo $?`, { encoding: 'utf8' }).trim() === '0';
            
            if (!branchExists) {
                console.log(`⚠️  Branch ${branch} does not exist`);
                continue;
            }
            
            // Check merge conflicts
            const mergeTreeOutput = execSync(`git merge-tree $(git merge-base HEAD origin/${branch}) HEAD origin/${branch}`, { encoding: 'utf8', stdio: 'pipe' });
            const hasConflicts = mergeTreeOutput.includes('<<<<<<< HEAD') || mergeTreeOutput.includes('=======') || mergeTreeOutput.includes('>>>>>>>');
            
            // Get commit count
            const commitCount = execSync(`git rev-list --count HEAD..origin/${branch}`, { encoding: 'utf8' }).trim();
            
            // Get last commit message
            const lastCommit = execSync(`git log -1 --pretty=format:"%s" origin/${branch}`, { encoding: 'utf8' }).trim();
            
            prAnalysis.push({
                branch,
                hasConflicts,
                commitCount: parseInt(commitCount),
                lastCommit: lastCommit.substring(0, 80) + (lastCommit.length > 80 ? '...' : ''),
                status: hasConflicts ? 'conflicts' : 'clean'
            });
            
            console.log(`   Status: ${hasConflicts ? '⚠️  Conflicts' : '✅ Clean'}`);
            console.log(`   Commits: ${commitCount}`);
            console.log(`   Last: ${lastCommit.substring(0, 60)}${lastCommit.length > 60 ? '...' : ''}`);
            
        } catch (error) {
            console.log(`❌ Error analyzing ${branch}: ${error.message}`);
            prAnalysis.push({
                branch,
                hasConflicts: true,
                commitCount: 0,
                lastCommit: 'Error analyzing',
                status: 'error'
            });
        }
    }
    
    // Save analysis to file
    fs.writeFileSync('/workspace/pr-analysis.json', JSON.stringify(prAnalysis, null, 2));
    
    // Generate summary
    const summary = {
        total: prAnalysis.length,
        clean: prAnalysis.filter(p => p.status === 'clean').length,
        conflicts: prAnalysis.filter(p => p.status === 'conflicts').length,
        errors: prAnalysis.filter(p => p.status === 'error').length,
        totalCommits: prAnalysis.reduce((sum, p) => sum + p.commitCount, 0)
    };
    
    console.log('\n📊 Analysis Summary:');
    console.log(`   Total PRs analyzed: ${summary.total}`);
    console.log(`   Clean merges: ${summary.clean}`);
    console.log(`   With conflicts: ${summary.conflicts}`);
    console.log(`   Errors: ${summary.errors}`);
    console.log(`   Total commits to merge: ${summary.totalCommits}`);
    
    fs.writeFileSync('/workspace/pr-summary.json', JSON.stringify(summary, null, 2));
    
    console.log('\n✅ Analysis complete! Results saved to pr-analysis.json and pr-summary.json');
    
} catch (error) {
    console.error('❌ Error during PR analysis:', error.message);
    process.exit(1);
}