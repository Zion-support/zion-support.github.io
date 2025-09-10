#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

console.log('🔒 Quick Security Enhancement')
console.log('=============================')

// Add security headers
const securityHeaders = `# Security Headers
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
Strict-Transport-Security: max-age=31536000; includeSubDomains`

fs.writeFileSync('public/_headers', securityHeaders)
console.log('✅ Security headers added')

// Add input validation
const validationCode = `export const validators = {
  email: (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email),
  sanitizeInput: (input) => input.replace(/[<>'";]/g, '').trim(),
  validateUrl: (url) => {
    try { new URL(url); return true } catch { return false }
  }
}`

const utilsPath = path.join('src', 'utils')
if (!fs.existsSync(utilsPath)) {
  fs.mkdirSync(utilsPath, { recursive: true })
}
fs.writeFileSync(path.join(utilsPath, 'validation.ts'), validationCode)
console.log('✅ Input validation added')

// Update package.json with security scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
packageJson.scripts = {
  ...packageJson.scripts,
  'security:audit': 'npm audit',
  'security:fix': 'npm audit fix'
}
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
console.log('✅ Security scripts added')

console.log('\n🎉 Quick Security Enhancement Complete!')