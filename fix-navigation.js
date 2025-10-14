#!/usr/bin/env node

import fs from 'fs';

// Read the file
const content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Fix the navigation array
let fixed = content
  // Fix unterminated string literals
  .replace(/'([^']*)\n/g, "'$1'\n")
  // Fix malformed object properties
  .replace(/(\w+):\s*'([^']*)',\s*$/gm, "$1: '$2',")
  // Fix JSX attributes
  .replace(/href: '\/""5g""-solutions'/g, "href: '/5g-solutions'")
  .replace(/name: '""5G"" Solutions'/g, "name: '5G Solutions'")
  // Fix array syntax
  .replace(/\[\s*$/gm, '[')
  .replace(/\]\s*$/gm, ']')
  // Fix object syntax
  .replace(/{\s*$/gm, '{')
  .replace(/}\s*$/gm, '}');

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', fixed, 'utf8');
console.log('Fixed Navigation.tsx');