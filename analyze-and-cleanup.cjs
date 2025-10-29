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

// Function to analyze PRs and provide recommendations
async function analyzePRs() {
  try {
    console.log('🔍 Analyzing all open pull requests...');
    
    const url = 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100';
    const response = await makeRequest(url, {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status !== 200) {
      console.error('Failed to fetch PRs:', response.status);
      return;
    }
    
    const prs = response.data;
    console.log(`Found ${prs.length} open pull requests`);
    
    // Categorize PRs
    const mainPRs = prs.filter(pr => pr.base.ref === 'main');
    const backupPRs = prs.filter(pr => pr.base.ref.includes('aggressive-merge-backup'));
    const otherPRs = prs.filter(pr => pr.base.ref !== 'main' && !pr.base.ref.includes('aggressive-merge-backup'));
    
    console.log('\n📊 PR Analysis:');
    console.log(`   Main branch PRs: ${mainPRs.length}`);
    console.log(`   Backup branch PRs: ${backupPRs.length}`);
    console.log(`   Other branch PRs: ${otherPRs.length}`);
    
    // Analyze main PRs
    console.log('\n🎯 Main Branch PRs Analysis:');
    let mergeableCount = 0;
    let conflictCount = 0;
    let unknownCount = 0;
    
    for (const pr of mainPRs) {
      const prInfo = await checkPRMergeable(pr.number);
      if (prInfo) {
        if (prInfo.mergeable === true) {
          mergeableCount++;
          console.log(`   ✅ PR #${pr.number}: ${pr.title} - MERGEABLE`);
        } else if (prInfo.mergeable === false) {
          conflictCount++;
          console.log(`   ❌ PR #${pr.number}: ${pr.title} - HAS CONFLICTS (${prInfo.mergeable_state})`);
        } else {
          unknownCount++;
          console.log(`   ❓ PR #${pr.number}: ${pr.title} - UNKNOWN STATUS`);
        }
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('\n📈 Main PRs Summary:');
    console.log(`   Mergeable: ${mergeableCount}`);
    console.log(`   Has Conflicts: ${conflictCount}`);
    console.log(`   Unknown Status: ${unknownCount}`);
    
    // Analyze backup PRs
    console.log('\n🗂️  Backup Branch PRs Analysis:');
    console.log('   These PRs target old backup branches and should be closed:');
    backupPRs.forEach((pr, index) => {
      console.log(`   ${index + 1}. PR #${pr.number}: ${pr.title} -> ${pr.base.ref}`);
    });
    
    // Generate recommendations
    console.log('\n💡 Recommendations:');
    console.log('   1. Close all backup branch PRs (they are outdated)');
    console.log('   2. For main branch PRs with conflicts:');
    console.log('      - If they contain important fixes, resolve conflicts manually');
    console.log('      - If they are outdated, close them');
    console.log('   3. Merge any mergeable main branch PRs');
    console.log('   4. Consider creating a new clean branch for future work');
    
    // Generate cleanup script
    console.log('\n🔧 Suggested Actions:');
    console.log('   Since the main branch is already working and building successfully,');
    console.log('   the best approach is to:');
    console.log('   1. Keep the current main branch as is');
    console.log('   2. Close all old PRs that have conflicts');
    console.log('   3. Focus on new improvements going forward');
    
  } catch (error) {
    console.error('Error analyzing PRs:', error.message);
  }
}

// Function to check if PR is mergeable
async function checkPRMergeable(prNumber) {
  try {
    const url = `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`;
    
    const response = await makeRequest(url, {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status === 200) {
      const pr = response.data;
      return {
        mergeable: pr.mergeable,
        mergeable_state: pr.mergeable_state,
        state: pr.state,
        head: pr.head.ref,
        base: pr.base.ref,
        created_at: pr.created_at,
        updated_at: pr.updated_at
      };
    }
    return null;
  } catch (error) {
    console.error(`Error checking PR #${prNumber}:`, error.message);
    return null;
  }
}

// Main execution
analyzePRs();