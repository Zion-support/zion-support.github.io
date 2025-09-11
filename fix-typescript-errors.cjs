#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Common patterns to fix;
const fixes = [
  // Fix malformed type annotations;
  { pattern: /anykeyof/g, replacement: "keyof" },
  { pattern: /any([^,]+)/g, replacement: "$1" },
  { pattern: /any([^:]+):/g, replacement: "$1:" },
  { pattern: /any([^]+);/g, replacement: "$1;" },
  { pattern: /any([^,]+),/g, replacement: "$1," },
  { pattern: /any([^}]+)}/g, replacement: "$1}" },
  { pattern: /any([^)]+)\)/g, replacement: "$1)" },
  // Fix malformed object properties;
  { pattern: /:\s*{;
  /g, replacement: ": {" },
  { pattern: /:\s*{([^}]+);/g, replacement: ": { $1" },
  // Fix malformed function declarations;
  { pattern: /\(\s*\)\s*=>\s*{/g, replacement: "() => {" },
  { pattern: /\(\s*\)\s*=>\s*void;/g, replacement: "() => void;" },
  // Fix malformed JSX;
  { pattern: /<\/([^>]+)>/g, replacement: "</$1>" },
  // Fix malformed imports;
  {;
  pattern: /import:\s*{([^}]+)},\s*from,\s*"([^"]+)"/g,
    replacement: "import { $1  } from "$2";",,,
},
  {;
  pattern: /import:\s*([^,]+),\s*from,\s*"([^"]+)"/g,
    replacement: "import $1 from "$2",,,
},