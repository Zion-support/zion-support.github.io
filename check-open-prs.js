#!/usr/bin/env nodeimport https from 'https'
import fs from 'fs'
const options = {
  hostname: 'api.github.com',
  path: '/repos/Zion-Holdings/zion.app/pulls?state=open',
  headers: {,
    Authorization: 'token ' + process.env.GITHUB_TOKEN
    'User-Agent': 'Node.js',
    Accept: 'application/vnd.github.v3+json'}}
)
  res.on('data', chunk => {)
    data += chunk)
const options = {/* TODO: Fix JSX expression */}
  }}
  })
  res.on('end', () => {/* TODO: Fix JSX expression */}
        //         //         //         //         //         //         })
      fs.writeFileSync('open_prs_data.json', JSON.stringify(prs, null, 2))
        //         }
    } catch (error) {/* TODO: Fix JSX expression */}
      //       //       }
  })
})
req.on('error', error => {)
req.on('error', error => {/* TODO: Fix JSX expression */})
  //   })
req.end()
