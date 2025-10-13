const fs = require('fs');

const navigationFile = 'app/components/Navigation.tsx';
const footerFile = 'app/components/Footer.tsx';

function extractHrefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hrefMatches = content.match(/href:\s*'([^']+)'/g) || [];
  return hrefMatches.map(match => match.match(/href:\s*'([^']+)'/)[1]);
}

const allHrefs = [
  ...extractHrefs(navigationFile),
  ...extractHrefs(footerFile)
];

const internalPaths = allHrefs.filter(href => href.startsWith('/') && !href.startsWith('http'));

console.log('All internal paths found in navigation:');
console.log(internalPaths);

const appDir = 'app';
const existingPages = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => `/${dirent.name}`);

console.log('Existing pages:');
console.log(existingPages);

const missingPages = internalPaths.filter(path => !existingPages.includes(path));
console.log('Missing pages:');
console.log(missingPages);