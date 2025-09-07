<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Fixing String Quote Issues...')
console.log('====')
const filesToFix = ['pages/api/docs.ts']
  'pages/api/health.ts
  'components/ContactForm.tsx
  'components/ErrorBoundary.tsx
  'pages/docs/api-quick-start.tsx
    "pattern"""
    "replacement"""
    "replacement": '"$1${$2}$3"""
    "replacement": '"$1\\\\\n  $2"""
=======
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
// console.log(' Fixing String Quote Issues...)
console.log('===)
const filesToFix = [pages/api/docs.ts]
  'pages/api/health.ts'
  'components/ContactForm.tsx'
  'components/ErrorBoundary.tsx'
  'pages/docs/api-quick-start.tsx'
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "replacement": "$1${$2}$3"
    "replacement": "$1\\\\\n  $2"
    "replacement": "$1\\\\\n  $2"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
