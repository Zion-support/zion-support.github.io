import https from 'https';

// GitHub API token and repository info
const token = 'ghs_1p4lcqrpBjJ6F2MrwojlqhiwI6pDXo4CoAGZ';
const owner = 'Zion-Holdings';
const repo = 'zion.app';
// Function to get all open PRs
async function getOpenPRs() {
    try {
        console.log('📋 Fetching open PRs...');
        const response = await makeGitHubRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
        
        if (response.status !== 200) {
            console.error('❌ Failed to fetch PRs:', response.data);
            return [];
        }
        
        return response.data;
    } catch (error) {
        console.error('❌ Error fetching PRs:', error.message);
        return [];
    }
}

// Function to make GitHub API requests
function makeGitHubRequest(path, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.github.com',
            port: 443,
            path: path,
            method: method,
            headers: {
                'Authorization': `token ${token}`,
                'User-Agent': 'Node.js',
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            const jsonData = JSON.stringify(data);
            options.headers['Content-Length'] = Buffer.byteLength(jsonData);
        }

        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(responseData);
                    resolve({ status: res.statusCode, data: parsedData });
                } catch (e) {
                    resolve({ status: res.statusCode, data: responseData });
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
}

async function mergePR(prNumber) {
    try {
        console.log(`🔄 Attempting to merge PR #${prNumber}...`);
        
        // First, check the PR status
        console.log('📋 Checking PR status...');
        const prResponse = await makeGitHubRequest(`/repos/${owner}/${repo}/pulls/${prNumber}`);
        
        if (prResponse.status !== 200) {
            console.error('❌ Failed to fetch PR:', prResponse.data);
            return false;
        }

        const pr = prResponse.data;
        console.log(`📝 PR Title: ${pr.title}`);
        console.log(`🔀 Mergeable: ${pr.mergeable}`);
        console.log(`📊 Mergeable State: ${pr.mergeable_state}`);

        if (pr.mergeable === false) {
            console.log('⚠️  PR has conflicts and cannot be merged automatically');
            return false;
        }

        if (pr.state !== 'open') {
            console.log(`⚠️  PR is not open (state: ${pr.state})`);
            return false;
        }

        // Attempt to merge the PR
        console.log('🚀 Merging PR...');
        const mergeData = {
            commit_title: `Merge PR #${prNumber}: ${pr.title}`,
            commit_message: `Merged PR #${prNumber}: ${pr.title}\n\nThis PR was automatically merged to resolve conflicts and integrate changes.`,
            merge_method: 'merge'
        };

        const mergeResponse = await makeGitHubRequest(
            `/repos/${owner}/${repo}/pulls/${prNumber}/merge`,
            'PUT',
            mergeData
        );

        if (mergeResponse.status === 200) {
            console.log('✅ PR merged successfully!');
            console.log(`🔗 Merge commit SHA: ${mergeResponse.data.sha}`);
            return true;
        } else {
            console.error('❌ Failed to merge PR:', mergeResponse.data);
            return false;
        }

    } catch (error) {
        console.error('❌ Error during merge process:', error.message);
        return false;
    }
}

async function mergeAllOpenPRs() {
    try {
        const openPRs = await getOpenPRs();
        
        if (openPRs.length === 0) {
            console.log('📭 No open PRs found');
            return;
        }
        
        console.log(`📊 Found ${openPRs.length} open PRs`);
        
        let mergedCount = 0;
        let failedCount = 0;
        
        for (const pr of openPRs) {
            console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
            const success = await mergePR(pr.number);
            
            if (success) {
                mergedCount++;
            } else {
                failedCount++;
            }
            
            // Add a small delay between merges
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        console.log(`\n📊 Merge Summary:`);
        console.log(`✅ Successfully merged: ${mergedCount}`);
        console.log(`❌ Failed to merge: ${failedCount}`);
        
    } catch (error) {
        console.error('❌ Error during merge process:', error.message);
    }
}

// Run the merge all PRs
mergeAllOpenPRs();