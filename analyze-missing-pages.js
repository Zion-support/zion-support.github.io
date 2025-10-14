#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Read the footer component to extract all links
const footerContent = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8')
// Extract all href values from the footer
const hrefMatches = footerContent.match(/href:\s*'([^']+)'/g)
const footerLinks = hrefMatches ? hrefMatches.map(match =>
                {
  const result = match.match(/href:\s*'([^']+)'/)
  return result ? result[1] : null
}).filter(Boolean) : []
// Read the navigation component to extract all links
const navContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8')
const navMatches = navContent.match(/to="([^"]+)"/g)
const navLinks = navMatches ? navMatches.map(match =>
                {
  const result = match.match(/to="([^"]+)"/)
  return result ? result[1] : null
}).filter(Boolean) : []
// Combine all links
const allLinks = [...new Set([...footerLinks, ...navLinks])]
// Get all existing page files
const appDir = '/workspace/app'
const existingPages = []
function scanDirectory(dir) {
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      scanDirectory(fullPath)
    } else if (item === 'page.tsx') {
      // Extract the route from the path
      const route = fullPath.replace('/workspace/app', '').replace('/page.tsx', '') || '/'
      existingPages.push(route)
    }
  }
}

scanDirectory(appDir)
// Check for missing pages
const missingPages = []
const existingPagesSet = new Set(existingPages)
for (const link of allLinks) {
  if (!existingPagesSet.has(link)) {
    missingPages.push(link)
  }
}

console.log('=== MISSING PAGES ANALYSIS ===')
console.log(`Total links found: ${allLinks.length}`)
console.log(`Existing pages: ${existingPages.length}`)
console.log(`Missing pages: ${missingPages.length}`)
console.log('\n=== MISSING PAGES ===')
missingPages.forEach(page => console.log(`- ${page}`))
console.log('\n=== EXISTING PAGES ===')
existingPages.sort().forEach(page => console.log(`✓ ${page}`))
// Write missing pages to a file
fs.writeFileSync('/workspace/missing-pages.json', JSON.stringify({
  totalLinks: allLinks.length,
  existingPages: existingPages.length,
  missingPages: missingPages.length,
  missingPagesList: missingPages,
  allLinks: allLinks,
  existingPagesList: existingPages
}, null, 2))
console.log('\n=== ANALYSIS COMPLETE ===')
console.log('Results saved to missing-pages.json');