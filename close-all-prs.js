import { execSync } from 'child_process';

// Function to get all open PRs
function getAllOpenPRs() {
  try {
    const response = execSync('curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100', { encoding: 'utf8' });
    const prs = JSON.parse(response);
    return prs.map(pr => pr.number);
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

// Function to close a PR
function closePR(prNumber) {
  try {
    console.log(`🔒 Closing PR #${prNumber}...`);
    
    const closeCommand = `curl -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_7M77zj772W4JsZvwwr6IjBhY5m4nnh0h6pZL" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber} -d '{"state":"closed"}'`;
    
    execSync(closeCommand, { encoding: 'utf8' });
    console.log(`✅ Successfully closed PR #${prNumber}`);
    return true;
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting aggressive PR closure process...\n');
  
  let totalClosed = 0;
  let attempts = 0;
  const maxAttempts = 10;
  
  while (attempts < maxAttempts) {
    attempts++;
    console.log(`\n📋 Attempt ${attempts}: Getting open PRs...`);
    
    const prs = getAllOpenPRs();
    console.log(`Found ${prs.length} open PRs`);
    
    if (prs.length === 0) {
      console.log('✅ No more open PRs!');
      break;
    }
    
    let closedThisRound = 0;
    
    // Close all PRs in parallel
    for (const prNumber of prs) {
      if (closePR(prNumber)) {
        closedThisRound++;
        totalClosed++;
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`\n📊 Round ${attempts} Summary:`);
    console.log(`   🔒 Closed this round: ${closedThisRound}`);
    console.log(`   📝 Total closed: ${totalClosed}`);
    
    if (closedThisRound === 0) {
      console.log('⚠️  No PRs were closed this round, stopping...');
      break;
    }
    
    // Wait a bit before next round
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`\n🎉 Final Summary:`);
  console.log(`   🔒 Total PRs closed: ${totalClosed}`);
  console.log(`   🔄 Rounds completed: ${attempts}`);
}

main().catch(console.error);