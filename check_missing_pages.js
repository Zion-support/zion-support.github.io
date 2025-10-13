const fs = require('fs')
const path = require('path')
// Extract all href values from navigation files
const navigationFile = '/workspace/app/components/ImprovedNavigation.tsx'
const footerFile = '/workspace/app/components/ImprovedFooter.tsx'
function extractHrefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const hrefMatches = content.match(/href:\s*'([^']+)'/g) || []
  return hrefMatches.map(match => match.match(/href:\s*'([^']+)'/)[1])
}
// Get all hrefs from both files
const navHrefs = extractHrefs(navigationFile)
const footerHrefs = extractHrefs(footerFile)
const allHrefs = [...new Set([...navHrefs, ...footerHrefs])]
// Filter out external links and get only internal paths
const internalPaths = allHrefs.filter(href => href.startsWith('/') && !href.startsWith('http'))
console.log('All internal paths found in navigation:')
console.log(internalPaths)
// Check which pages exist
const appDir = '/workspace/app'
const existingPages = []
function checkPageExists(path) {
  const pagePath = path === '/' ? '/workspace/app/page.tsx' : `${appDir}${path}/page.tsx`
  return fs.existsSync(pagePath)
}
const missingPages = []
const existingPagesList = []
internalPaths.forEach(path => {
  if (checkPageExists(path)) {
    existingPagesList.push(path)
  } else {
    missingPages.push(path)
  }
})
console.log('\n=== EXISTING PAGES ===')
existingPagesList.forEach(page => console.log(`✓ ${page}`))
console.log('\n=== MISSING PAGES ===')
missingPages.forEach(page => console.log(`✗ ${page}`))
console.log(`\nTotal internal paths: ${internalPaths.length}`)
console.log(`Existing pages: ${existingPagesList.length}`)
console.log(`Missing pages: ${missingPages.length}`)