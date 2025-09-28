#!/usr/bin/env node

import https from 'https';

const TOKEN = 'ghs_ARoJSTvAacep8FvSbjlT0M4kz3PRL70w75Bt';
const REPO = 'Zion-Holdings/zion.app';
const PRS = ['23646', '23639', '23635'];

async function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, {
            method: options.method || 'GET',
            headers: {
                'Authorization': `token ${TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Node.js',
                ...options.headers
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch {
                    resolve(data);
                }
            });
        });
        
        req.on('error', reject);
        
        if (options.body) {
            req.write(options.body);
        }
        
        req.end();
    });
}

async function mergePR(prNumber) {
    console.log(`🔄 Processing PR #${prNumber}...`);
    
    try {
        // First check if PR is mergeable
        const prInfo = await makeRequest(`https://api.github.com/repos/${REPO}/pulls/${prNumber}`);
        console.log(`PR #${prNumber} mergeable status: ${prInfo.mergeable}`);
        
        if (prInfo.mergeable === true) {
            // Merge the PR
            const mergeData = {
                commit_title: `Merge PR #${prNumber} - Fix Netlify build`,
                commit_message: `Automated merge of PR #${prNumber} to resolve Netlify build issues`,
                merge_method: 'merge'
            };
            
            const mergeResult = await makeRequest(`https://api.github.com/repos/${REPO}/pulls/${prNumber}/merge`, {
                method: 'PUT',
                body: JSON.stringify(mergeData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (mergeResult.merged) {
                console.log(`✅ Successfully merged PR #${prNumber}`);
                return true;
            } else {
                console.log(`❌ Failed to merge PR #${prNumber}: ${mergeResult.message}`);
                return false;
            }
        } else {
            console.log(`⚠️  PR #${prNumber} is not mergeable, skipping...`);
            return false;
        }
    } catch (error) {
        console.error(`❌ Error processing PR #${prNumber}:`, error.message);
        return false;
    }
}

async function main() {
    console.log('🚀 Starting PR merge process using GitHub API...');
    
    let successful = 0;
    let failed = 0;
    
    for (const pr of PRS) {
        const result = await mergePR(pr);
        if (result) {
            successful++;
        } else {
            failed++;
        }
        console.log(''); // Empty line for readability
    }
    
    console.log('📊 Merge Summary:');
    console.log(`   ✅ Successful: ${successful}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log('🎉 PR merge process completed!');
}

main().catch(console.error);