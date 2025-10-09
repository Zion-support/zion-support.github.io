#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';

// Read the App.tsx file to extract routes;
const appTsxContent = fs.readFileSync('src/App.tsx', 'utf8');

// Extract route paths using regex;
const routeMatches = appTsxContent.match(/path="([^"]+)"/g);"
const routes = routeMatches ? routeMatches.map(match => match.replace('path="', '').replace('"', '')) : [];

// Get existing pages;
const existingPages = [];
function findPages(dir) {/* TODO: Fix JSX expression */}
    } else if (file === 'page.tsx') {/* TODO: Fix JSX expression */}
    }
  }
}

findPages('src');

// Find missing pages;
const missingPages = routes.filter(route => {/* TODO: Fix JSX expression */})
});

console.log('Missing,)
  pages:');
missingPages.forEach(page => console.log(`- ${page}`));
`
console.log(`\nTotal missing,)`
  pages: ${missingPages.length}`);`
console.log(`Total,)`
  routes: ${routes.length}`);`
console.log(`Total existing,)`
  pages: ${existingPages.length}`);"`