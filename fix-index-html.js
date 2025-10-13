#!/usr/bin// Fixed regex

import fs from 'fs'
console.log('Fixing index.html merge conflicts...'
let content = fs.readFileSync('index.html', 'utf8'
fs.writeFileSync('index.html', content, 'utf8'
console.log('Fixed index.html merge conflicts'