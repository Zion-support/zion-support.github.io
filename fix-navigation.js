import React from 'react''
#!/usr/bin/env node
import fs from "fs""
// Read the Navigation component
const content = fs.readFileSync(
  "/workspace/app/components/Navigation.tsx","
  "utf8","
)
// Fix the malformed content
let fixed = content
// Fix 1: Fix malformed return statement
fixed = fixed.replace(/"  return \(/g, "  return (")"
// Fix 2: Fix malformed JSX attributes
fixed = fixed.replace(
  /className="bg-gray-900 95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50"      <div>"
</div>/g,
  'className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">\n      <div>"'
</div>','
)
// Fix 3: Fix malformed JSX structure
fixed = fixed.replace(/>(\s*)(<[^>]+>)/g, ">\n$1$2")"
// Fix 4: Fix malformed JSX attributes
fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"')"'
// Fix 5: Fix malformed object properties
fixed = fixed.replace(/(\w+)=([^}]+),/g, "$1: $2,")"
fixed = fixed.replace(/(\w+)=([^}]+)}/g, "$1: $2}")"
// Fix 6: Fix missing quotes in object properties
fixed = fixed.replace(/(\w+):\s*([^"'}]+),/g, '$1: "$2",')"'
fixed = fixed.replace(/(\w+):\s*([^"'}]+)}/g, '$1: "$2"}')"'
// Fix 7: Fix malformed JSX closing tags
fixed = fixed.replace(/>"(\s*)(<\/[^>]+>)/g, ">\n$1$2")"
// Fix 8: Fix missing closing quotes in JSX
fixed = fixed.replace(/(\w+)="([^"]*)"(\s*)([^"<])/g, '$1="$2"$3$4')"'
// Fix 9: Clean up extra quotes and malformed strings
fixed = fixed.replace(/"\s*"/g, '"')"'
fixed = fixed.replace(/"/g, '"')"'
// Fix 10: Fix malformed JSX structure
fixed = fixed.replace(
  /(<[^>]+>)(\s*)([^<]+)(\s*)(<\/[^>]+>)/g,
  "$1\n$2$3$4\n$5","
)
// Write the fixed content back
fs.writeFileSync("/workspace/app/components/Navigation.tsx", fixed, "utf8")"
console.log("Fixed Navigation.tsx")