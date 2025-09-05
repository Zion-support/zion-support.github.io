#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
      const content = fs.readFileSync(filePath, 'utf8'
      fixedContent = fixedContent.replace(/(\w+):\s*([^}\n]+)(\n\s*[^}])/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*'([^']+)'(\s+[a-z])/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*([^;\n]+);/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*'([^']+)'(\s*[^}\n])/g, '$"1"