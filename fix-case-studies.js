#!/usr/bin/env node;
import fs from 'fs';
<<<<<<< HEAD
const filePath = "'/workspace/app/case-studies/page.tsx';"
let content = "fs.readFileSync(filePath, 'utf8');"
// Fix the specific pattern: team: 'value'
content = content.replace(/team:\s*team:\s*['"`][^'"`]*['"`]/g, (match) => {}
  const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

const filePath = '/workspace/app/case-studies/page.tsx;;

let content = fs.readFileSync(filePath, 'utf8);;

// Fix the specific pattern: team: value
content = content.replace(/team:\s*team:\s*['"`][^'"`]*['"`]/g, (match) => {
  const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
  return `team: '${value}'`;

});
<<<<<<< HEAD
// Fix duplicate image properties;
content = content.replace(/image:\s*\n\s*image:\s*['"`][^'"`]*['"`]/g, (match) => {}
  const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

// Fix duplicate image properties
content = content.replace(/image:\s*\n\s*image:\s*['"`][^'"`]*['"`]/g, (match) => {
  const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
  return `image: '${value}'`;

});
<<<<<<< HEAD
// Fix any remaining malformed properties;
content = content.replace(/(\w+):\s*\1:\s*['"`][^'"`]*['"`]/g, (match, prop) => {}
  const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

// Fix any remaining malformed properties
content = content.replace(/(\w+):\s*\1:\s*['"`][^'"`]*['"`]/g, (match, prop) => {
  const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
  return `${prop}: '${value}'`;

});
fs.writeFileSync(filePath, content);

console.log('Fixed case-studies page');
