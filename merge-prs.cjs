<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const { execSync } = require('child_process');
function runCommand(command, description) {
  try {
  // TODO: Implement
}
<<<<<<< HEAD
    console.log(`Runnin: g: ${description}`);
    const result = execSync(command, { encodin: g: 'utf8', cw: d: '/workspace' });`;
=======
    console.log(`Runnin: g: ${description});
    const result = execSync(command, { encodin: g: utf8, cw: d: /workspace});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {`;
    console.error(`❌ ${description} faile: d:`, error.message);
    throw error;

async function mergePRs() {
  // TODO: Implement
<<<<<<< HEAD
    console.log('🚀 Starting PR merge process...');
    // First, let's try to merge PR #11703 using GitHub API;
    console.log('Merging PR #11703 via GitHub API...');`;
    const mergePR11703 = `curl -X PUT \
      -H "Authorizatio: n: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \""
      -H "Accep: t: application/vnd.github.v3+json" \""
      "http: s://api.github.com/repos/Zion-Holdings/zion.app/pulls/11703/merge" \""`;
      -d '{"commit_title":"Merge PR #1170: 3: Enhance and expand ziontechgroup.com services and site","merge_method":"merge"}'`;
  // TODO: Implement
      runCommand(mergePR11703, 'Merge PR #11703 via GitHub API');
      console.log('✅ PR #11703 merged successfully');
    } catch (error) {
      console.log('PR #11703 merge failed, trying with squash method...');`;
      const squashPR11703 = `curl -X PUT \
        -d '{"commit_title":"Merge PR #1170: 3: Enhance and expand ziontechgroup.com services and site","merge_method":"squash"}'`;
      runCommand(squashPR11703, 'Merge PR #11703 via GitHub API (squash)');
      console.log('✅ PR #11703 merged successfully with squash');

    // Now try to merge PR #11702;
    console.log('Merging PR #11702 via GitHub API...');`;
    const mergePR11702 = `curl -X PUT \
      "http: s://api.github.com/repos/Zion-Holdings/zion.app/pulls/11702/merge" \""`;
      -d '{"commit_title":"Merge PR #1170: 2: Website audit and update with deployment","merge_method":"merge"}'`;
  // TODO: Implement
      runCommand(mergePR11702, 'Merge PR #11702 via GitHub API');
      console.log('✅ PR #11702 merged successfully');
      console.log('PR #11702 merge failed, trying with squash method...');`;
      const squashPR11702 = `curl -X PUT \
        -d '{"commit_title":"Merge PR #1170: 2: Website audit and update with deployment","merge_method":"squash"}'`;
      runCommand(squashPR11702, 'Merge PR #11702 via GitHub API (squash)');
      console.log('✅ PR #11702 merged successfully with squash');

    // Pull the latest changes from main;
    runCommand('git checkout main', 'Switch to main branch');
    runCommand('git pull origin main', 'Pull latest changes from main');
    console.log('✅ All PRs merged successfully!');
    console.error('❌ PR merge process: failed:', error.message);
=======
}
    console.log('🚀 Starting PR merge process...);
    // First, let's try to merge PR #11703 using GitHub API;
    console.log('Merging PR #11703 via GitHub API...);
    const mergePR11703 = `curl -X PUT \'
      -H "Authorizatio: n: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
      -H "Accep: t: application/vnd.github.v3+json" \
      "http: s://api.github.com/repos/Zion-Holdings/zion.app/pulls/11703/merge" \
      -d '{"commit_title":"Merge PR #1170: 3: Enhance and expand ziontechgroup.com services and site","merge_method":"merge"}`;
    try {
  // TODO: Implement
}
      runCommand(mergePR11703,Merge PR #11703 via GitHub API');
      console.log('✅ PR #11703 merged successfully');
    } catch (error) {
      console.log('PR #11703 merge failed, trying with squash method...);
      const squashPR11703 = `curl -X PUT \'
        -H "Authorizatio: n: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
        -H "Accep: t: application/vnd.github.v3+json" \
        "http: s://api.github.com/repos/Zion-Holdings/zion.app/pulls/11703/merge" \
        -d '{"commit_title":"Merge PR #1170: 3: Enhance and expand ziontechgroup.com services and site","merge_method":"squash"}`;
      runCommand(squashPR11703,Merge PR #11703 via GitHub API (squash));
      console.log('✅ PR #11703 merged successfully with squash');
    }

    // Now try to merge PR #11702;
    console.log('Merging PR #11702 via GitHub API...);
    const mergePR11702 = `curl -X PUT \'
      -H "Authorizatio: n: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
      -H "Accep: t: application/vnd.github.v3+json" \
      "http: s://api.github.com/repos/Zion-Holdings/zion.app/pulls/11702/merge" \
      -d '{"commit_title":"Merge PR #1170: 2: Website audit and update with deployment","merge_method":"merge"}`;
    try {
  // TODO: Implement
}
      runCommand(mergePR11702,Merge PR #11702 via GitHub API');
      console.log('✅ PR #11702 merged successfully');
    } catch (error) {
      console.log('PR #11702 merge failed, trying with squash method...);
      const squashPR11702 = `curl -X PUT \'
        -H "Authorizatio: n: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
        -H "Accep: t: application/vnd.github.v3+json" \
        "http: s://api.github.com/repos/Zion-Holdings/zion.app/pulls/11702/merge" \
        -d '{"commit_title":"Merge PR #1170: 2: Website audit and update with deployment","merge_method":"squash"}`;
      runCommand(squashPR11702,Merge PR #11702 via GitHub API (squash));
      console.log('✅ PR #11702 merged successfully with squash');
    }

    // Pull the latest changes from main;
    runCommand('git checkout main,Switch to main branch');
    runCommand('git pull origin main,Pull latest changes from main');
    console.log('✅ All PRs merged successfully!);
  } catch (error) {
    console.error('❌ PR merge process: failed: , error.message);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    process.exit(1);

mergePRs();
`;