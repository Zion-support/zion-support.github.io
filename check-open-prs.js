import fs from 'fs';
import https from 'https';
#!/usr/bin/env node




//GitHub API configuration
const options = {
  hostname: 'api.github.com',
  path: '/repos/Zion-Holdings/zion.app/pulls?state=open',
  headers: {
    Authorization: 'token ' + process.env.GITHUB_TOKEN,
    'User-Agent': 'Node.js',
    Accept: 'application/vnd.github.v3+json',
  },
};

// const req = https.get(options, res => {
  let _data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const _prs = JSON.parse(data);
      //       prs.forEach((pr, index) => {
        //         //         //         //         //         //         });

      // Save PR data to file
      fs.writeFileSync('open_prs_data.json', JSON.stringify(prs, null, 2));
      //       if (prs.length === 0) {
        //         }
    } catch (error) {
      //       //       }
  });
});

req.on('error', error => {
  //   });

req.end();
