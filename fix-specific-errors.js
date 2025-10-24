const fs = require('fs');

// Fix contact page
const contactContent = fs.readFileSync('./app/contact/page.tsx', 'utf8');
const fixedContact = contactContent.replace(
  /url="https:\/\/ziontechgroup\.com\/contact\n/g,
  'url="https://ziontechgroup.com/contact"\n'
);
fs.writeFileSync('./app/contact/page.tsx', fixedContact);
console.log('Fixed contact page');

// Fix page.tsx
const pageContent = fs.readFileSync('./app/page.tsx', 'utf8');
const fixedPage = pageContent
  .replace(/url="https:\/\/ zion\.app\n/g, 'url="https://zion.app"\n')
  .replace(/"@context": "https:\/\/ schema\.org",@type": "WebSite",/g, '"@context": "https://schema.org",\n          "@type": "WebSite",')
  .replace(/"url": "https:\/\/ zion\.app",potentialAction": {/g, '"url": "https://zion.app",\n          "potentialAction": {');
fs.writeFileSync('./app/page.tsx', fixedPage);
console.log('Fixed page.tsx');

console.log('Fixed specific errors');