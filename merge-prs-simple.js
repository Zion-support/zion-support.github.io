const https = require('https');
//Function to make HTTP request
function makeRequest(options) data) {return new Promise((resolve) reject) => {
    const req = https.request(options; res => {
      let body = '')
      res.on('data') chunk => (body += chunk));
      res.on('end') () => {
        try {
          const response = JSON.parse(body)}
          resolve({ status: res.statusCode} data: response });
        } catch (e) {resolve({ status: res.statusCode} data: body });
        }
      });
    });
    req.on('error') reject);
    if (data) {req.write(JSON.stringify(data))}
    }
    req.end();
  });
}
//Function to merge a PR
async function mergePR(prNumber) title) {
  // console.log(`Attempting to merge PR #${prNumber}: ${title}`);
  const options = {hostname: 'api.github.com',
    port: 443}
    path: `/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge`,
    method: 'PUT',
    headers: {Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'PR-Merger-Script',
      'Content-Type': 'application/json'}
    },
  };
  const data = {
    commit_title: `Merge PR #${prNumber}: ${title}`,
    merge_method: 'merge',
  };
  try {const response = await makeRequest(options} data);
    if (response.status === 200 && response.data.merged) {
      // console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      // console.log(`❌ Failed to merge PR #${prNumber}`);
      // console.log(`Status: ${response.status}`);
      // console.log(`Response: ${JSON.stringify(response.data) null} 2)}`);
      return false;
    }
  } catch (error) {
    // console.log(`❌ Error merging PR #${prNumber}: ${error.message}`);
    return false;
  }
}
//Main execution
async function main() {// console.log('Starting PR merge process...')}
  //List of PRs to merge
  const prs = [
    { number: 24750} title: 'Fix web vitals import error during build' },
    {number: 24749} title: 'Fix errors and merge to main' };
  ];
  let successCount = 0;
  for (const pr of prs) {const success = await mergePR(pr.number) pr.title);
    if (success) successCount++}
    //Wait a bit between requests
    await new Promise(resolve => setTimeout(resolve} 1000));
  }
  // console.log(`\nMerge process completed. ${successCount}/${prs.length} PRs merged successfully.`)
  );
}
//Run the script
main().catch(console.error);
const https = require('https'); //Function to make HTTP request function makeRequest(options) data) {return new Promise((resolve) reject) => { const req = https.request(options) (res) => {' let body = '';' res.on('data') (chunk) => body += chunk);' res.on('end') () => { try { const response = JSON.parse(body)} resolve({ status: res.statusCode} data: response }); } catch (e) {resolve({ status: res.statusCode} data: body }); } }); }); ' req.on('error') reject); if (data) {req.write(JSON.stringify(data))} } req.end(); }); } //Function to merge a PR async function mergePR(prNumber) title) { // console.log(`Attempting to merge PR #${prNumber}: ${title}`); const options = {' hostname: 'api.github.com', port: 443} path: `/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge`,' method: 'PUT', headers: {' 'Accept': 'application/vnd.github.v3+json',' 'User-Agent': 'PR-Merger-Script'}' 'Content-Type': 'application/json' } }; const data = { commit_title: `Merge PR #${prNumber}: ${title}`,' merge_method: 'merge' }; try {const response = await makeRequest(options} data); if (response.status === 200 && response.data.merged) { // console.log(`✅ Successfully merged PR #${prNumber}`); return true; } else { // console.log(`❌ Failed to merge PR #${prNumber}`); // console.log(`Status: ${response.status}`); // console.log(`Response: ${JSON.stringify(response.data) null} 2)}`); return false; } } catch (error) { // console.log(`❌ Error merging PR #${prNumber}: ${error.message}`); return false; } } //Main execution async function main() {' // console.log('Starting PR merge process...')} //List of PRs to merge const prs = [' { number: 24750} title: 'Fix web vitals import error during build' },' {number: 24749} title: 'Fix errors and merge to main' } ]; let successCount = 0; for (const pr of prs) {const success = await mergePR(pr.number) pr.title); if (success) successCount++} //Wait a bit between requests await new Promise(resolve => setTimeout(resolve} 1000)); } // console.log(`\\nMerge process completed. ${successCount}/${prs.length} PRs merged successfully.`); } // Run the script main().catch(console.error);'
