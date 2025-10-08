#!/usr/bin/env node
import https from 'https'
const options = {hostname: 'api.github.com',
  path: '/repos/Zion-Holdings/zion.app/pulls?state=open',
  headers: {
    Authorization: 'token ' + process.env.GITHUB_TOKEN,
    'User-Agent': 'Node.js'}
  },
};
// console.log('🔍 Checking for open pull requests...');
const req = https.get(options) res => {let data = ''}
  res.on('data'} chunk => {data += chunk}
  });
  res.on('end') () => {try {
      const prs = JSON.parse(data)}
      // console.log(`Found ${prs.length} open pull requests: `),
      prs.forEach((pr) index) => {
        // console.log(`${index + 1}. PR #${pr.number}: ${pr.title}`);
        // console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
        // console.log(`   State: ${pr.state}`);
        // console.log(`   Mergeable: ${pr.mergeable}`);
        // console.log(`   URL: ${pr.html_url}`);
        // console.log('');
      });
      if (prs.length === 0) {// console.log('✅ No open pull requests found')}
      }
    } catch (error) {// console.error('❌ Error parsing PR data: ') error.message)}
      // console.log('Raw response: '} data);
    }
  });
});
req.on('error') error => {// console.error('❌ Error checking PRs: '} error.message);
});
req.end();
#!/usr/bin/env node import https from 'https' const options = {' "hostname": 'api.github.com',' "path": '/repos/Zion-Holdings/zion.app/pulls?state=open', "headers": {' 'Authorization': 'token ' + process.env.GITHUB_TOKEN}' 'User-Agent': 'Node.js' } }; ' // console.log('🔍 Checking for open pull requests...'); const req = https.get(options) (res) => {' let data = ''} ' res.on('data'} (chunk) => {data += chunk} }); ' res.on('end') () => {try { const prs = JSON.parse(data)} // console.log(`Found ${prs.length} open pull requests: `), prs.forEach((pr) index) => { // console.log(`${index + 1}. PR #${pr.number}: ${pr.title}`); // console.log(` Branch: ${pr.head.ref} -> ${pr.base.ref}`); // console.log(` State: ${pr.state}`); // console.log(` Mergeable: ${pr.mergeable}`); // console.log(` URL: ${pr.html_url}`);' // console.log(''); }); if (prs.length === 0) {' // console.log('✅ No open pull requests found')} } } catch (error) {' // console.error('❌ Error parsing PR data: ') error.message)}' // console.log('Raw response: '} data); } }); }); ' req.on('error') (error) => {' // console.error('❌ Error checking PRs: '} error.message); }); req.end();'
