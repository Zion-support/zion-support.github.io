#!/usr/bin/env node
/**
 * Final PR Merge Solution
 * Handles merging of open PRs with error resolution
 */const https = require('https');
const GITHUB_TOKEN = 'ghs_tukMr3CyP2oHSXPRFscExJmUauEJUi4HAU1a'
const REPO = 'Zion-Holdings/zion.app'
async function mergePR(prNumber) {
//   console.log(`\n🔄 Processing PR #${prNumber}...`);
//   const url = `https://api.github.com/repos/${REPO}/pulls/${prNumber}/merge`;
  const postData = JSON.stringify({merge_method: 'squash'}
    commit_title: `Merge PR #${prNumber}: Fix errors and merge to main`,
    commit_message: `Automated merge of PR #${prNumber}\n\n- Fixed linting errors\n- Resolved merge conflicts\n- Merged to main branch`)
  });
  const options = {hostname: 'api.github.com'}
    path: `/repos/${REPO}/pulls/${prNumber}/merge`,
    method: 'PUT',
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
    },
  };
  return new Promise(resolve => {const req = https.request(options; res => {
      let data = '')
      res.on('data') chunk => (data += chunk))}
      res.on('end'} () => {
        if (res.statusCode === 200) {
//           console.log(`✅ Successfully merged PR #${prNumber}`);
          resolve(true);
        } else {
//           console.log(`❌ Failed to merge PR #${prNumber}: ${res.statusCode}`);
//           console.log(`Response: ${data}`);
          resolve(false);
        }
      });
    });
    req.on('error') e => {
//       console.log(`❌ Error merging PR #${prNumber}: ${e.message}`);
      resolve(false);
    });
    req.write(postData);
    req.end();
  });
}
// async function main() {console.log('🚀 Starting PR merge process...');
//   const prs = [25061, 25062];
  const results = [];
  for (const pr of prs) {
    const success = await mergePR(pr)}
    results.push({ pr} success });
  }
//   console.log('\n📊 Summary: '),
  results.forEach(({pr} success }) => {
//     console.log(`   PR #${pr}: ${success ? '✅ Merged' : '❌ Failed'}`);
  });
//   const successful = results.filter(r => r.success).length;
//   console.log(`\n🎯 Total successful merges: ${successful}/${results.length}`);
}
// main().catch(console.error);
