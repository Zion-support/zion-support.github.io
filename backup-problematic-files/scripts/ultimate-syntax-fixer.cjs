#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Ultimate Syntax Fixer...')
console.log('======')
const filesToFix = ['pages/api/health.ts']
  'components/LoadingSpinner.tsx'
  'pages/docs/api-quick-start.tsx'
  'pages/docs/api-reference.tsx'
  'pages/docs/authentication.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/\}\s*\}\s*$/gm, '}')
      console.log('    Fixed extra closing braces')
    content = content.replace(/"([^"]*?)\"\s*"\}/g, '"$1"
    content = content.replace(/style=\{\{\s*"display": \s*'gridTemplateColumns',\s*'([^']*)'\s*"gap": \s*'([^']*)'\s*\}\}/g, 'style={{ "display": \'grid\', "gridTemplateColumns": \'$1\', "gap"}
    content = content.replace(/\}\"\s*\}\"\}/g, '}')
      if (p1.includes('"') && p2.includes('')
    content = content.replace(/href=\{\"\$\{([^}]*?)\}\/docs\/authentication\"\s*\/\>\>\s*<\/div\>/g, 'href={"$1/docs/authentication"}
    content = content.replace(/\{"([^"]*?)\"\s*"\}/g, '{"$1"}
    content = content.replace(/"([^"]*?)"\s*"([^"]*?)"/g, '"$1$2"
    content = content.replace(/(\w+):\s*'([^']*?)',\s*(\w+):\s*'([^']*?)'/g, '$"1": \'$2\',\n    $"3"
    content = content.replace(/\{"([^"]*?)\n([^"]*?)\"\}/g, '{"$1$2"}
