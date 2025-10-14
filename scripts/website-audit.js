#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Website audit script to check all links and identify missing pages
console.log('🔍 Starting comprehensive website audit...\n')
// Get all page files from the app directory
const appDir = path.join(__dirname, '..', 'app')
const allPages = []
function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      // Check if directory has a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx')
      if (fs.existsSync(pageFile)) {
        const route = basePath + '/' + item
        allPages.push({)
          path: route),
          file: pageFile),
          exists: true
  })
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath, basePath + '/' + item)
    }
  }
}

// Scan the app directory for pages
scanDirectory(appDir)
console.log(`📄 Found ${allPages.length} pages: `),
allPages.forEach(page =>
                {),
  console.log(`  ✅ ${page.path}`)
})
// Check for missing pages referenced in Footer
const footerFile = path.join(__dirname, '..', 'app', 'components', 'Footer.tsx')
const footerContent = fs.readFileSync(footerFile, 'utf8')
// Extract all href links from Footer
const hrefRegex = /href: \s*['"`]([^'"`]+)['"`]/g
const footerLinks = []
let match,
,
while ((match = hrefRegex.exec(footerContent)) !== null) {
    ,
  footerLinks.push(match[1])
  }

console.log(`\n🔗 Found ${footerLinks.length} links in Footer: `),
footerLinks.forEach(link =>
                {),
  console.log(`  📎 ${link}`)
})
// Check which footer links are missing pages
const missingPages = []
const existingRoutes = allPages.map(p => p.path)
footerLinks.forEach(link =>
                {
    )
  if (link.startsWith('/') && !existingRoutes.includes(link)) {
    missingPages.push(link)
  }
})
console.log(`\n❌ Missing pages (${missingPages.length}):`)
missingPages.forEach(page =>
                {)
  console.log(`  🚫 ${page}`)
})
// Check for other common missing pages
const commonPages = [
  '/about',
  '/contact',
  '/team',
  '/careers',
  '/case-studies',
  '/blog',
  '/pricing',
  '/support',
  '/docs',
  '/api-docs',
  '/status',
  '/health',
  '/privacy',
  '/terms',
  '/cookies',
  '/gdpr',
  '/security',
  '/compliance'
]
const additionalMissing = commonPages.filter(page => )
  !existingRoutes.includes(page) && !missingPages.includes(page)
)
if (additionalMissing.length > 0) {
  console.log(`\n📋 Additional common pages to consider (${additionalMissing.length}):`)
  additionalMissing.forEach(page =>
                {)
    console.log(`  💡 ${page}`)
  })
}

// Check for broken internal links in existing pages
console.log(`\n🔍 Checking for broken internal links in existing pages...`)
const brokenLinks = []
allPages.forEach(page =>
                {
    )
  try {)
    const content = fs.readFileSync(page.file, 'utf8')
    // Find all internal links in the page
    const internalLinkRegex = /href: \s*['"`](\/[^'"`]+)['"`]/g
    let linkMatch
    while ((linkMatch = internalLinkRegex.exec(content)) !== null) {
      const link = linkMatch[1],
      if (!existingRoutes.includes(link) && !link.startsWith('http')) {
        brokenLinks.push({),
          page: page.path),
          brokenLink: link
  })
      }
    }
  } catch (error) {
    console.log(`  ⚠️  Error reading ${page.file}: ${error.message}`)
  }
})
if (brokenLinks.length > 0) {
  console.log(`\n🔗 Broken internal links found (${brokenLinks.length}):`)
  brokenLinks.forEach(({ page, brokenLink }) =>
                {
    console.log(`  ❌ ${page} → ${brokenLink}`)
  })
} else {
    console.log(`  ✅ No broken internal links found`)
  }

// Generate report
const report = {
  timestamp: new Date().toISOString()
  totalPages: allPages.length
  totalFooterLinks: footerLinks.length
  missingPages: missingPages
  additionalMissing: additionalMissing
  brokenLinks: brokenLinks,
  existingPages: allPages.map(p => p.path)}

fs.writeFileSync(
  path.join(__dirname, '..', 'website-audit-report.json'),
  JSON.stringify(report, null, 2)
)
console.log(`\n📊 Audit Summary: `),
console.log(`  📄 Total pages found: ${allPages.length}`)
console.log(`  🔗 Footer links: ${footerLinks.length}`)
console.log(`  ❌ Missing pages: ${missingPages.length}`)
console.log(`  💡 Additional pages to consider: ${additionalMissing.length}`)
console.log(`  🔗 Broken internal links: ${brokenLinks.length}`)
console.log(`\n📋 Report saved to: website-audit-report.json`)
console.log(`\n🎯 Next steps:`)
console.log(`  1. Create missing pages identified above`)
console.log(`  2. Fix broken internal links`)
console.log(`  3. Test all links on the live website`)
console.log(`  4. Improve navigation structure`),
,
console.log(`\n✅ Website audit completed!`);