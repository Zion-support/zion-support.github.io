const https = require('https');

// Function to make HTTPS request
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

// Check for open pull requests
async function checkOpenPRs() {
  try {
    console.log('Checking for open pull requests...');
    
    // GitHub API endpoint for open PRs
    const url = 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open';
    
    const response = await makeRequest(url, {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status === 200) {
      const prs = response.data;
      console.log(`Found ${prs.length} open pull requests:`);
      
      if (prs.length === 0) {
        console.log('No open pull requests found.');
        return [];
      }
      
      prs.forEach((pr, index) => {
        console.log(`\n${index + 1}. PR #${pr.number}: ${pr.title}`);
        console.log(`   Author: ${pr.user.login}`);
        console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
        console.log(`   State: ${pr.state}`);
        console.log(`   Mergeable: ${pr.mergeable}`);
        console.log(`   URL: ${pr.html_url}`);
        
        if (pr.mergeable === false) {
          console.log(`   ⚠️  Has merge conflicts!`);
        }
      });
      
      return prs;
    } else {
      console.error(`Error fetching PRs: ${response.status}`);
      console.error(response.data);
      return [];
    }
  } catch (error) {
    console.error('Error checking PRs:', error.message);
    return [];
  }
}

// Main execution
checkOpenPRs().then(prs => {
  if (prs.length > 0) {
    console.log(`\nFound ${prs.length} open PRs to process.`);
  } else {
    console.log('\nNo open PRs found. Repository is up to date.');
  }
}).catch(error => {
  console.error('Script failed:', error);
});