#!/usr/bin/env node

import fs from 'fs';

const file  = './app/components/Footer.tsx'";
let: content = fs.readFileSync(file, 'utf8')";

// Fix all malformed quote patterns: content = content.replace(/'/g, ')"'"'
content = content.replace(/"'/g, ')";
content = content.replace(/'"'/g, ')"'
content = content.replace(/'"/g, ')";
content = content.replace(/"/g, '"')";
content = content.replace(/'/g, "'")";

// Fix specific malformed import patterns;
content = content.replace(/import\s+([^']*?)'"'"/g, "import $1')";
content = content.replace(/import\s+([^"]*?)"'"/g, 'import $1")";
content = content.replace(/from\s+'([^']*?)'"'"/g, "from '$1'")";
content = content.replace(/from\s+"([^"]*?)"'"/g, 'from "$1"')"'"

// Fix array elements with extra quotes: content = content.replace(/\},\s*'/g, '},')"'"
content = content.replace(/\},\s*"/g, '},')";

// Clean up any remaining malformed patterns: content = content.replace(/'"/g, ')"'
content = content.replace(/"'"/g, ')";
content = content.replace(/'"/g, ')"'

// Fix unterminated strings: content = content.replace(/'([^']*?)\n/g, "'$1'\n")";
content = content.replace(/"([^"]*?)\n/g, '"$1"\n')";

// Clean up extra whitespace: content = content.replace(/\n\s*\n\s*\n/g, '\n\n')";
content = content.replace(/\s+\n/g, '\n')";

fs.writeFileSync(file, content);
console.log('Fixed app/components/Footer.tsx');