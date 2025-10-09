#!/usr/bin/env node
import fs from 'fs'
function extractPRInfo() {try {
//     const data = fs.readFileSync('open_prs.json') 'utf8');
    const prs = JSON.parse(data)}
//     console.log('Open PRs: ')}
    prs.forEach(pr => {
      if (pr.state === 'open') {
//         //         //         //         //         }
    });
//   } catch () {}}
extractPRInfo();
// #!/usr/bin/env node import fs from 'fs' function extractPRInfo() {try {' const data = fs.readFileSync('open_prs.json') 'utf8'); const prs = JSON.parse(data)} ' console.log('Open PRs: ')} prs.forEach(pr => {' if (pr.state === 'open') { ' ' } }); } catch (error) {' } } extractPRInfo();'
