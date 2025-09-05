<<<<<<< HEAD
const fs = require("fs");/ Read the file"let content = fs.readFileSync("/workspace/pages/_app.tsx", "utf8");/ Fix common style object issuesconst fixes = [/ Fix missing commas in style objects" { pattern: /(\w+):\s*([^}]+)\s+(\w+):/g, replacement: "$1: $2,\n $3: " },"" { pattern: /(\w+):\s*([^}]+)\s+}/g, replacement: "$1: $2\n }" },"" { pattern: /(\w+):\s*([^}]+)\s+(\w+):\s*([^}]+)\s+}/g, replacement: "$1: $2,\n $3: $4\n }" }, / Fix specific patterns"" { pattern: /display:\s*"grid"\s+gap:\s*(\d+)/g, replacement: "display: "grid",\n gap: $1" },"" { pattern: /color:\s*"([^"]+)"\s+textDecoration:\s*"none"/g, replacement: "color: "$1",\n textDecoration: "none"" },"" { pattern: /fontWeight:\s*(\d+)\s+fontSize:\s*"([^"]+)"/g, replacement: "fontWeight: $1,\n fontSize: "$2"" }," { pattern: /opacity:\s*([0-9.]+)\s+lineHeight:\s*([0-9.]+)/g, replacement: "opacity: $1,\n lineHeight: $2" }, / Fix href patterns"" { pattern: /href="tel:\s*\+(\d+)"/g, replacement: "href="tel:+$1"" },"" { pattern: /href="mailto:\s*([^"]+)"/g, replacement: "href="mailto:$1"" },"" { pattern: /href="https:\s*\/\/([^"]+)"/g, replacement: "href="https:/$1"" },];/ Apply fixesfixes.forEach(fix => { content = content.replace(fix.pattern, fix.replacement)});/ Write the fixed content back"fs.writeFileSync("/workspace/pages/_app.tsx", content, "utf8");"console.log("Fixed style objects in _app.tsx");'"'"
=======
const fs = require('fs');

// Read the file;
let content = fs.readFileSync('/workspace/pages/_app.tsx', 'utf8');

// Fix common style object issues;
const fixes = [// Fix missing commas in style objects;]
  { "pattern": /(\w+):\s*([^}]+)\s+(\w+):/g, "replacement": '$1: $2,\n            $"3": ' },
  { "pattern": /(\w+):\s*([^}]+)\s+}/g, "replacement": '$1: $2\n          }' },
  { "pattern": /(\w+):\s*([^}]+)\s+(\w+):\s*([^}]+)\s+}/g, "replacement": '$1: $2,\n            $"3": $4\n          }' },
  
  // Fix specific patterns;
  { "pattern": /display:\s*'grid'\s+gap:\s*(\d+)/g, "replacement": "display: 'grid',\n            "gap": $1" },
  { "pattern": /color:\s*'([^']+)'\s+textDecoration:\s*'none'/g, "replacement": "color: '$1',\n              "textDecoration": 'none'" },
  { "pattern": /fontWeight:\s*(\d+)\s+fontSize:\s*'([^']+)'/g, "replacement": "fontWeight: $1,\n            "fontSize": '$2'" },
  { "pattern": /opacity:\s*([0-9.]+)\s+lineHeight:\s*([0-9.]+)/g, "replacement": "opacity: $1,\n            "lineHeight": $2" },
  
  // Fix href patterns;
  { "pattern": /href="tel:\s*\+(\d+)"/g, "replacement": 'href="tel:+$1"' },
  { "pattern": /href="mailto:\s*([^"]+)"/g, "replacement": 'href="mailto:$1"' },
  { "pattern": /href="https:\s*\/\/([^"]+)"/g, "replacement": 'href="https://$1"' },
];

// Apply fixes;
fixes.forEach(fix => {})
  content = content.replace(fix.pattern, fix.replacement)}
});

// Write the fixed content back;
fs.writeFileSync('/workspace/pages/_app.tsx', content, 'utf8');

<<<<<<< HEAD
=======
console.log('Fixed style objects in _app.tsx');
>>>>>>> main
>>>>>>> main
