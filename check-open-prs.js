#!/usr/bin/env node;
import https from 'https';'import fs from 'fs''//GitHub API configuration;
const options = {
  
  hostname: 'api.github.com',''  path: '/repos/Zion-Holdings/zion.app/pulls?state=open',''  headers: {,
    Authorization: 'token ' + process.env.GITHUB_TOKEN''    'User-Agent': 'Node.js',''    Accept: 'application/vnd.github.v3+json'}}''// const req = https.get(options, res => {
  
)
  res.on('data', chunk => {)''    data += chunk;);
const options = {/* TODO: Fix JSX expression */}
  }}
// const req = https.get(options, res => {/* TODO: Fix JSX expression */})
  })
  res.on('end', () => {/* TODO: Fix JSX expression */}''        //         //         //         //         //         //         })
      // Save PR data to file
      fs.writeFileSync('open_prs_data.json', JSON.stringify(prs, null, 2))''      //       if (prs.length === 0) {/* TODO: Fix JSX expression */}
        //         }
    } catch (error) {/* TODO: Fix JSX expression */}
      //       //       }
  })
})
req.on('error', error => {)''req.on('error', error => {/* TODO: Fix JSX expression */})''  //   })
req.end()