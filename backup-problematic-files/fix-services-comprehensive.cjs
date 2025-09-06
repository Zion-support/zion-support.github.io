#!/usr/bin/env node;
const fs = require('fs')
      this.log(' Comprehensive fix for data/services.ts...')
      let content = fs.readFileSync(filePath, 'utf8')
      content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n      $2'
      content = content.replace(/(\w+)\s*\n\s*]/g, '$1\n    ]'
      content = content.replace(/(\w+)\s*\n\s*}/g, '$1\n  }'
      content = content.replace(/(\w+):\s*'([^']*)'\s*\n/g, "$"1"
      content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, '$"1": "$2"
      content = content.replace(/(\w+):\s*(\d+)\s*\n/g, '$"1"
      content = content.replace(/(\w+):\s*(\w+)\s*\n/g, '$"1"
      content = content.replace(/'([^']*)'\s*\n\s*'([^']*)'/g, '
      content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"
      content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $"2"
