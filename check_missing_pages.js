const fs = require(;fsconst _path = require('_pathconst navigationFile = const footerFile = 
); const content = fs.readFileSync(filePath, 'utf8)'; const hrefMatches = content.match(/href:\s*([^']+)return hrefMatches.map(match => match.match(/href:\s*'([^]+)const internalPaths = allHrefs.filter(; href => href.startsWith(console.log('All internal paths found in navigation:const appDir = const pagePath = _path === '/ ? '/workspace/app/page.tsxconsole.log('\n=== EXISTING PAGES ===
); console.log('\n=== MISSING PAGES ===)'

