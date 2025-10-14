<<<<<<< HEAD
import fs from 'fs';
;
const filePath = 'app/ai-automation-platform/page.tsx';
=======
import fs from 'fs':;
const filePath = 'app/ai-automation-platform/page.tsx':;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
let content = fs.readFileSync(filePath, 'utf8');

// Fix all the malformed object properties with extra quotes;
const fixes = [
  // Fix benefits array
  { from: /"70% process efficiency gain",\s*"Automated decision making",\s*"Real-time monitoring",\s*"Cost reduction",\s*"Scalable automation"/g, to: '"70% process efficiency gain",\n    "Automated decision making",\n    "Real-time monitoring",\n    "Cost reduction",\n    "Scalable automation"' }
  
  // Fix any remaining malformed quotes in object properties
  { from: /"([^"]+),\s*"([^"]+),\s*"([^"]+),\s*"([^"]+),\s*"([^"]+)/g, to: '"$1",\n    "$2",\n    "$3",\n    "$4",\n    "$5"' }
  
  // Fix malformed JSX with extra quotes
  { from: /<([^>]+) \/>,\s*"([^"]+)/g, to: '<$1 />,\n      color: "$2"' }
  
  // Fix malformed closing brackets
  { from: /}\s*\]\s*const benefits/g, to: '}\n  ];\n\n  const benefits' },
  
  // Fix malformed array syntax
  { from: /const benefits = \[\s*"([^"]+),\s*"([^"]+),\s*"([^"]+),\s*"([^"]+),\s*"([^"]+)\s*\]/g, to: 'const benefits = [\n    "$1",\n    "$2",\n    "$3",\n    "$4",\n    "$5"\n  ]' }
];
<<<<<<< HEAD

let modified = false;
fixes.forEach(fix => {)
  if (fix.from.test(content)) {
    content = content.replace(fix.from, fix.to);
    modified = true;
=======
;
let modified = false:;
fixes.forEach(fix => {;
if (fix.from.test(content)) {;
content = content.replace(fix.from, fix.to);
    modified = true:
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
  }
});
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed ai-automation-platform page');
<<<<<<< HEAD
} else {
  console.log('No changes needed');
}
=======
} else {;
console.log('No changes needed');
}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
