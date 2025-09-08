const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

const openPRs = [12265, 12263];

// Validate that GitHub token is provided
if (!GITHUB_TOKEN) {
  console.error('❌ Error: GITHUB_TOKEN environment variable is required');
  process.exit(1);
}

function makeRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Node.js'
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function mergePR(prNumber) {
  console.log(`Merging PR #${prNumber}...`);
  
  const mergeData = {
    commit_title: `Merge PR #${prNumber}`,
    commit_message: `Resolved merge conflicts and merged PR #${prNumber}`,
    merge_method: 'merge'
  };

  try {
    const response = await makeRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      'PUT',
      mergeData
    );

    if (response.status === 200) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}: ${response.status}`);
      console.log(JSON.stringify(response.data, null, 2));
      return false;
    }
  } catch (error) {
    console.log(`❌ Error merging PR #${prNumber}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('Starting PR merge process...');
  
  for (const prNumber of openPRs) {
    await mergePR(prNumber);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('PR merge process completed!');
}

main().catch(console.error);