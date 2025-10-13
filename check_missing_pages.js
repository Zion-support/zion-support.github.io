const fs = require('fs'';
const _path = require('_path'';
const navigationFile = '';
const footerFile = '';
  const content = fs.readFileSync(filePath, 'utf8'';
  const hrefMatches = content.match(/href:\s*'([^']+)'';
  return hrefMatches.map(match => match.match(/href:\s*'([^']+)'';
const internalPaths = allHrefs.filter(href => href.startsWith('';
console.log('All internal paths found in navigation: '',
const appDir = '';
  const pagePath = _path === '/' ? '/workspace/app/page.tsx'';
console.log('\n=== EXISTING PAGES ==='';
console.log('\n=== MISSING PAGES ==='';)
)
)
)
)
)
)
)
)
)
)
