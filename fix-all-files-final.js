
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(fullPath, 'utf8''
    if (!content.includes('"use client"') && !content.includes("'use client''
  content = ''
  content = content.replace(/^/, ''