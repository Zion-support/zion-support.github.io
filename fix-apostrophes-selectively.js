#!/usr/bin/env node

import fs from 'fs';


// Fix about/page.tsx - only replace apostrophes in text content, not in imports
const aboutPagePath = 'app/about/page.tsx';
if (fs.existsSync(aboutPagePath)) {
  let content = fs.readFileSync(aboutPagePath, 'utf8');
  // Only replace apostrophes in JSX text content, not in import statements
  content = content.replace(/(?<!import.*from\s*['"])'([^'"]*?)'(?![^'"]*['"])/g, '&apos;$1&apos;');
  fs.writeFileSync(aboutPagePath, content);
  }

// Fix not-found.tsx - only replace apostrophes in text content
const notFoundPath = 'app/not-found.tsx';
if (fs.existsSync(notFoundPath)) {
  let content = fs.readFileSync(notFoundPath, 'utf8');
  // Only replace apostrophes in JSX text content, not in import statements
  content = content.replace(/(?<!import.*from\s*['"])'([^'"]*?)'(?![^'"]*['"])/g, '&apos;$1&apos;');
  fs.writeFileSync(notFoundPath, content);
  }

// Fix page.tsx - only replace apostrophes in text content
const pagePath = 'app/page.tsx';
if (fs.existsSync(pagePath)) {
  let content = fs.readFileSync(pagePath, 'utf8');
  // Only replace apostrophes in JSX text content, not in import statements
  content = content.replace(/(?<!import.*from\s*['"])'([^'"]*?)'(?![^'"]*['"])/g, '&apos;$1&apos;');
  fs.writeFileSync(pagePath, content);
  }

