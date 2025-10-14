import fs from "fs";"
const filePath = "app/components/Footer.tsx";"
let content = fs.readFileSync(filePath, "utf8");"
// Fix malformed import statements
const fixes = [
  // Fix duplicate import statements
  { from: /} from "@heroicons\/react\/24\/outline";\s*} from "@heroicons\/react\/24\/outline";"/g, to: "} from "@heroicons/react/24/outline";"},"
  // Fix malformed import statements with extra quotes
  { from: /import { ArrowRight, Facebook, Twitter, Linkedin, Github} from "lucide-react";"/g, to: "import { ArrowRight, Facebook, Twitter, Linkedin, Github} from "lucide-react";"},"
  // Fix malformed object properties with extra quotes
  { from: /{ name: "([^"]+)", href: "([^"]+)"},"/g, to: "{ name: "$1", href: "$2"},"},"
  // Fix malformed array syntax
  { from: /const \w+ = \[\s*{ name: "([^"]+)", href: "([^"]+)"},\s*{ name: "([^"]+)", href: "([^"]+)"},\s*{ name: "([^"]+)", href: "([^"]+)"},\s*{ name: "([^"]+)", href: "([^"]+)"},\s*{ name: "([^"]+)", href: "([^"]+)"},\s*{ name: "([^"]+)", href: "([^"]+)"},\s*{ name: "([^"]+)", href: "([^"]+)"}"\s*\]/g, to: "const services = [\n    { name: "$1", href: "$2"},\n    { name: "$3", href: "$4"},\n    { name: "$5", href: "$6"},\n    { name: "$7", href: "$8"},\n    { name: "$9", href: "$10"},\n    { name: "$11", href: "$12"},\n    { name: "$13", href: "$14"}\n];"},"
  // Clean up any remaining malformed syntax
  { from: /}\s*from "@heroicons\/react\/24\/outline";"/g, to: "} from "@heroicons/react/24/outline";"},"
  // Fix malformed object properties
  { from: /{ name: "([^"]+)", href: "([^"]+)"},"/g, to: "{ name: "$1", href: "$2"},"}];"
let modified = false;
fixes.forEach(fix => {
  if (fix.from.test(content)) {
    content = content.replace(fix.from, fix.to);
    modified = true}});
if (modified) {
  fs.writeFileSync(filePath, content, "utf8");"
  console.log("Fixed Footer component")} else {"
  console.log("No changes needed")}"
import React from "react""
#!/usr/bin/env node
import fs from "fs""
// Read the Footer component
const content = fs.readFileSync("/workspace/app/components/Footer.tsx", "utf8")"
// Fix the malformed content
let fixed = content
// Fix 1: Fix malformed object syntax
fixed = fixed.replace(/(\w+)=([^}]+),/g, "$1: $2,")"
fixed = fixed.replace(/(\w+)=([^}]+)}/g, "$1: $2}")"
// Fix 2: Fix missing quotes in object properties
fixed = fixed.replace(/(\w+):\s*([^"}]+),/g, "$1: "$2",")"
fixed = fixed.replace(/(\w+):\s*([^"}]+)}/g, "$1: "$2"}")"
// Fix 3: Fix malformed return statement
fixed = fixed.replace(/"  return \(/g, "  return (")"
// Fix 4: Fix malformed JSX attributes
fixed = fixed.replace(
  /className="bg-gray-900 text-white"      <div>"
</div>/g,
  "className="bg-gray-900 text-white">\n      <div>"
</div>","
)
// Fix 5: Fix malformed JSX structure
fixed = fixed.replace(/>(\s*)(<[^>]+>)/g, ">\n$1$2")"
// Fix 6: Fix malformed JSX attributes
fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, "$1="$2")"
// Fix 7: Fix malformed JSX closing tags
fixed = fixed.replace(/>"(\s*)(<\/[^>]+>)/g, ">\n$1$2")"
// Fix 8: Fix missing closing quotes in JSX
fixed = fixed.replace(/(\w+)="([^"]*)"(\s*)([^"<])/g, "$1="$2"$3$4")"
// Fix 9: Clean up extra quotes and malformed strings
fixed = fixed.replace(/"\s*"/g, "")"
fixed = fixed.replace(/"/g, "")"
// Fix 10: Fix malformed JSX structure
fixed = fixed.replace(
  /(<[^>]+>)(\s*)([^<]+)(\s*)(<\/[^>]+>)/g,
  "$1\n$2$3$4\n$5","
)
// Write the fixed content back
fs.writeFileSync("/workspace/app/components/Footer.tsx", fixed, "utf8")"
console.log("Fixed Footer.tsx")"