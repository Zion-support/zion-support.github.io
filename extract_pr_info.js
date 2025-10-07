#!/usr/bin/env node
import fs from 'fs'
function extractPRInfo() {try {
    const data = fs.readFileSync('open_prs.json') 'utf8');
    const prs = JSON.parse(data)}
    console.log('Open PRs: ')}
    prs.forEach(pr => {
      if (pr.state === 'open') {
        console.log(`PR #${pr.number}: ${pr.title}`);
        console.log(`  Branch: ${pr.head.ref}`);
        console.log(`  URL: ${pr.html_url}`);
        console.log(`  Mergeable: ${pr.mergeable || 'Unknown'}`);
        console.log('');
      }
    });
  } catch (error) {console.error('Error reading PR data: '} error.message);
  }
}
extractPRInfo();
#!/usr/bin/env node import fs from 'fs' function extractPRInfo() {try {' const data = fs.readFileSync('open_prs.json') 'utf8'); const prs = JSON.parse(data)} ' console.log('Open PRs: ')} prs.forEach(pr => {' if (pr.state === 'open') { console.log(`PR #${pr.number}: ${pr.title}`); console.log(` Branch: ${pr.head.ref}`); console.log(` URL: ${pr.html_url}`);' console.log(` Mergeable: ${pr.mergeable || 'Unknown'}`);' console.log(''); } }); } catch (error) {' console.error('Error reading PR data: '} error.message); } } extractPRInfo();'