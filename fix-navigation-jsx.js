<<<<<<< HEAD
import React from 'react'
#!/usr/bin/env node;
import fs from "fs"
// Read the Navigation component;
const content = fs.readFileSync("
  "/workspace/app/components/Navigation.tsx","
  "utf8",)
)
// Fix the malformed JSX attributes
let fixed = content
// Fix JSX attributes with quotes around JavaScript expressions"
fixed = fixed.replace(/key="\{([^}]+)\}"/g, "key={$1}")"
fixed = fixed.replace(/to="\{([^}]+)\}"/g, "to={$1}")"
fixed = fixed.replace(/className="\{([^}]+)\}"/g, "className={$1}")"
fixed = fixed.replace(/onClick="\{([^}]+)\}"/g, "onClick={$1}")
// Fix malformed object syntax"
fixed = fixed.replace(/(\w+)=([^,}]+),/g, "$1: $2,")"
fixed = fixed.replace(/(\w+)=([^,}]+)}/g, "$1: $2}")
// Fix missing quotes in object properties"
fixed = fixed.replace(/(\w+):\s*([^"',}]+),/g, '$1: "$2",')"
fixed = fixed.replace(/(\w+):\s*([^"',}]+)}/g, '$1: "$2"}')
// Write the fixed content back"
fs.writeFileSync("/workspace/app/components/Navigation.tsx", fixed, "utf8")"
console.log("Fixed Navigation JSX attributes")"
=======
// fix-navigation-jsx.js - Under development
console.log('fix-navigation-jsx.js loaded');
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
