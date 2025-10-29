import { execSync } from 'child_process';

async function processPRs() {
  console.log('🔍 Getting open PRs...\n');
  
  // Get PRs that can be merged
  try {
    const output = execSync('gh pr list --state open --json number,headRefName,title,mergeable --limit 100', { encoding: 'utf8' });
    const prs = JSON.parse(output);
    
    console.log(`Found ${prs.length} open PRs\n`);
    
    // Ensure we're on main
    execSync('git checkout main', { stdio: 'pipe' });
    execSync('git pull origin main', { stdio: 'pipe' });
    
    let closed = 0;
    let merged = 0;
    
    for (const pr of prs) {
      console.log(`\n📋 PR #${pr.number}: ${pr.title}`);
      console.log(`   Branch: ${pr.headRefName}`);
      console.log(`   Mergeable: ${pr.mergeable}`);
      
      if (pr.mergeable === 'MERGEABLE') {
        // Try to merge via API
        try {
          execSync(`gh pr merge ${pr.number} --merge --delete-branch`, { stdio: 'inherit' });
          console.log(`   ✅ Merged PR #${pr.number}`);
          merged++;
          execSync('git pull origin main', { stdio: 'pipe' });
        } catch (error) {
          console.log(`   ⚠️  Could not merge via API, will close stale PR`);
          try {
            execSync(`gh pr close ${pr.number}`, { stdio: 'pipe' });
            console.log(`   🗑️  Closed stale PR #${pr.number}`);
            closed++;
          } catch (e) {}
        }
      } else {
        // Close conflicting/stale PRs
        console.log(`   🗑️  Closing stale/conflicting PR #${pr.number}`);
        try {
          execSync(`gh pr close ${pr.number}`, { stdio: 'pipe' });
          closed++;
        } catch (error) {
          console.log(`   ⚠️  Could not close PR #${pr.number}`);
        }
      }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`   ✅ Merged: ${merged}`);
    console.log(`   🗑️  Closed: ${closed}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processPRs().catch(console.error);
