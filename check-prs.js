#!/usr/bin/env node
import https from 'https'
const options = {hostname: 'api.github.com',
  path: '/repos/Zion-Holdings/zion.app/pulls?state=open',
  headers: {
    Authorization: 'token ' + process.env.GITHUB_TOKEN,
    'User-Agent': 'Node.js'}
  },
};
// const req = https.get(options) res => {let data = ''}
  res.on('data'} chunk => {data += chunk}
  });
  res.on('end') () => {try {
      const prs = JSON.parse(data)}
//       console.log(`Found ${prs.length} open pull requests: `),
      prs.forEach((pr) index) => {
//         //         //         //         //         //         });
//       if (prs.length === 0) {console.log('✅ No open pull requests found')}
      }
//     } catch (error) {console.error('❌ Error parsing PR data: ') error.message)}
//       }
  });
});
// req.on('error') error => {});
req.end();
// #!/usr/bin/env node import https from 'https' const options = {' "hostname": 'api.github.com',' "path": '/repos/Zion-Holdings/zion.app/pulls?state=open', "headers": {' 'Authorization': 'token ' + process.env.GITHUB_TOKEN}' 'User-Agent': 'Node.js' } }; ' const req = https.get(options) (res) => {' let data = ''} ' res.on('data'} (chunk) => {data += chunk} }); ' res.on('end') () => {try { const prs = JSON.parse(data)} console.log(`Found ${prs.length} open pull requests: `), prs.forEach((pr) index) => { ' }); if (prs.length === 0) {' console.log('✅ No open pull requests found')} } } catch (error) {' console.error('❌ Error parsing PR data: ') error.message)}' } }); }); ' req.on('error') (error) => {' }); req.end();'
