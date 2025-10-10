#!/usr/bin/env node
import fs from 'fs';
const filePath = '/workspace/app/case-studies/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');
// Fix the specific pattern: team: 'value'
content = content.replace(/team:\s*team:\s*['"`][^'"`]*['"`]/g, (match) => {
  const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
  return `team: '${value}'`;
});
// Fix duplicate image properties
content = content.replace(/image:\s*\n\s*image:\s*['"`][^'"`]*['"`]/g, (match) => {
  const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
  return `image: '${value}'`;
});
// Fix any remaining malformed properties
content = content.replace(/(\w+):\s*\1:\s*['"`][^'"`]*['"`]/g, (match, prop) => {
  const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
  return `${prop}: '${value}'`;
});
fs.writeFileSync(filePath, content);
console.log('Fixed case-studies page');