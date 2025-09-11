#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('Generating search index...');
// Basic search index generation
const searchIndex = {
  pages: [
    { title: 'Home', url: '/', content: 'Zion Holdings - Technology Solutions' },
    { title: 'Services', url: '/services', content: 'Our comprehensive technology services' },
    { title: 'About', url: '/about', content: 'About Zion Holdings' }
  ],
  generated: new Date().toISOString()
};

fs.writeFileSync(path.join(__dirname, '..', 'public', 'search-index.json'), JSON.stringify(searchIndex, null, 2));
console.log('Search index generated successfully');
