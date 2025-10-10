#!/usr/bin/env node

const fs = require('fs');

// Read the file
const content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix the specific pattern where </article> is used instead of </div> for emoji divs
let fixed = content.replace(
  /<div className="text-[^"]*">[^<]*<\/article>/g,
  (match) => {
    return match.replace('</article>', '</div>');
  }
);

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', fixed, 'utf8');

console.log('Fixed JSX tag mismatches in page.tsx');