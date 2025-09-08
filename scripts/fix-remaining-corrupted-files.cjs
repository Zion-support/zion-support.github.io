#!/usr/bin/env node;
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Fixing Remaining Corrupted Files...')
console.log('===')
const corruptedFiles = ['pages/docs/integration-examples.tsx']
  'pages/docs/sdk.tsx
  'pages/enterprise.tsx
  'pages/help.tsx
const fs = require('fs');
const path = require('path');
// console.log(' Fixing Remaining Corrupted Files...')
console.log('===')
const corruptedFiles = ['pages/docs/integration-examples.tsx'];
  'pages/docs/sdk.tsx'
  'pages/enterprise.tsx'
  'pages/help.tsx'
  'pages/login.tsx'
let content = '';
=======
const fs = require('fs')
const path = require('path')
// console.log(' Fixing Remaining Corrupted Files...')
console.log('===')
const corruptedFiles = ['pages/docs/integration-examples.tsx']
  'pages/docs/sdk.tsx
  'pages/enterprise.tsx
  'pages/help.tsx
  'pages/login.tsx
    let content = 
    if (filePath === 'pages/docs/integration-examples.tsx')
      content = """
    "email"""
    "password"""

      content = "
    "email"
    "password"
