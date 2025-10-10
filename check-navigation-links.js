import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
;
const __filename="fileURLToPath(import.meta.url);"
// __dirname removed;
// Read the navigation component to extract all links;
const navContent = "fs.readFileSync('/workspace/src/components/Navigation.tsx', 'utf8');"
// Extract all href values from the navigation;
const hrefMatches = "navContent.match(/href: \s*'([^']+)'/g);"
const navLinks = hrefMatches ? hrefMatches.map(match = "> match.match(/href:\s*'([^']+)'/)[1]) : [];"
,
// Read the footer component to extract all links;
const footerContent = "fs.readFileSync('/workspace/src/components/Footer.tsx', 'utf8');"
// Extract all href values from the footer;
const footerHrefMatches = "footerContent.match(/href: \s*'([^']+)'/g);"
const footerLinks = footerHrefMatches ? footerHrefMatches.map(match = "> match.match(/href:\s*'([^']+)'/)[1]) : [];"
,
// Combine all links;
const allLinks = "[...new Set([...navLinks, ...footerLinks])];"
// Get all existing page files in src directory;
const srcDir = "'/workspace/src';"
const existingPages="[];"
;
function scanDirectory(dir) {;
const items="fs.readdirSync(dir);"
  for (const item of items) {;
const fullPath = "path.join(dir, item);"
    const stat="fs.statSync(fullPath);"
    if (stat.isDirectory()) {}
      scanDirectory(fullPath)} else if (item === 'page.tsx') {}
      // Extract the route from the path;
      const route = "fullPath.replace('/workspace/src', '').replace('/page.tsx', '') || '/';"
      existingPages.push(route)}
  }
}

scanDirectory(srcDir);
// Check for missing pages;
const missingPages="[];"
const existingPagesSet = "new Set(existingPages);"
for (const link of allLinks) {}
  if (!existingPagesSet.has(link)) {}
    missingPages.push(link)}
}

// console.log removed for production;
// console.log removed for production;
// console.log removed for production;
// console.log removed for production;
if (missingPages.length > 0) {}
  // console.log removed for production;
missingPages.forEach(page = "> // console.log removed for production;"
)} else {}
  // console.log removed for production;
}

// console.log removed for production;
allLinks.forEach(link = "> // console.log removed for production;"
);
// Write results to a file;
fs.writeFileSync('/workspace/navigation-analysis.json', JSON.stringify({}
  totalLinks: allLinks.length;)
  existingPages: existingPages.length;)
  missingPages: missingPages.length;)
  missingPagesList: missingPages),
  allLinks: allLinks),
  existingPagesList: existingPages}, null, 2));
// console.log removed for production;
// console.log removed for production;