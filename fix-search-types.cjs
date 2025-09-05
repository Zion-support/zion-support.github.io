#!/usr/bin/env node

const fs = require('fs'
console.log(' Fixing SearchBar type properties...'
const content = fs.readFileSync('components/SearchBar.tsx', 'utf8'
// Add type property to all search results that don'
  '{\n    "title": "$1",\n    "description": "$2",\n    "url": "$3",\n    "type": "service",\n    "category": "$4"
  '{\n    "title": "$1",\n    "description": "$2",\n    "url": "$3",\n    "type": "page"