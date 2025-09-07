<<<<<<< HEAD











#!/usr/bin/env node;
<<<<<<< HEAD
///usr/bin/env node
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
#!/usr/bin/env node;
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
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
<<<<<<< HEAD
    content = content.replace(/\{"([^"]*?)\n([^"]*?)\"\}/g, '{"$1$2"}






<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
    content = content.replace(/\{"([^"]*?)\n([^"]*?)\"\}/g, '{"$1$2"}
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
