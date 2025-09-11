#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Enhanced patterns to fix;
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
  // Fix specific error patterns;
  { pattern: /:\s*null\s*;/g, replacement: ": null;" },
  { pattern: /:\s*null\s*,/g, replacement: ": null," },
  { pattern: /:\s*null\s*}/g, replacement: ": null}" },
  { pattern: /:\s*null\s*\)/g, replacement: ": null)" },
  // Fix malformed type declarations;
  { pattern: /:\s*string\s*;/g, replacement: ": string;" },
  { pattern: /:\s*number\s*;/g, replacement: ": number;" },
  { pattern: /:\s*boolean\s*;/g, replacement: ": boolean;" },
  { pattern: /:\s*any\s*;/g, replacement: ": any;" },
  // Fix malformed interface properties;
  { pattern: /(\w+)\s*:\s*{;
  /g, replacement: "$1: {" },
  { pattern: /(\w+)\s*:\s*string\s*;/g, replacement: "$1: string" },
  { pattern: /(\w+)\s*:\s*number\s*;/g, replacement: "$1: number" },
  { pattern: /(\w+)\s*:\s*boolean\s*;/g, replacement: "$1: boolean" },
  // Fix malformed function parameters;
  { pattern: /\(\s*(\w+)\s*:\s*string\s*\)/g, replacement: "($1: string)" },
  { pattern: /\(\s*(\w+)\s*:\s*number\s*\)/g, replacement: "($1: number)" },
  { pattern: /\(\s*(\w+)\s*:\s*boolean\s*\)/g, replacement: "($1: boolean)" },
  // Fix malformed array types;
  { pattern: /:\s*string\s*\[\s*\]/g, replacement: ": string[]" },
  { pattern: /:\s*number\s*\[\s*\]/g, replacement: ": number[]" },
  { pattern: /:\s*any\s*\[\s*\]/g, replacement: ": any[]" },
  // Fix malformed generic types;
  { pattern: /:\s*Promise\s*<\s*any\s*>/g, replacement: ": Promise<any>" },
  { pattern: /:\s*Partial\s*<\s*(\w+)\s*>/g, replacement: ": Partial<$1>" },
  // Fix malformed JSX attributes;
  { pattern: /className\s*=\s*"([^"]*)"\s*>/g, replacement: "className="$1">" },
  { pattern: /onClick\s*=\s*{([^}]+)}\s*>/g, replacement: "onClick={$1}>" },
  // Fix malformed object literals;
  { pattern: /{\s*(\w+)\s*:\s*([^,}]+)\s*}/g, replacement: "{ $1: $2 }" },
  { pattern: /{\s*(\w+)\s*:\s*([^,}]+)\s*,/g, replacement: "{ $1: $2," },
  // Fix malformed destructuring;
  {;
  pattern: /const\s*{\s*(\w+)\s*}\s*=\s*([^]+);/g,
    replacement: "const { $1 } = $2;",,,
},
  {;
  pattern: /const\s*\[\s*(\w+)\s*\]\s*=\s*([^]+);/g,
    replacement: "const [ $1 ] = $2;",,,
},