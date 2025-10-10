const fs = require('fs');
// Read the Footer component;
const footerContent = fs.readFileSync('app/components/Footer.tsx', 'utf8');
// Extract all href values from the Footer;
const footerLinks = [];
const hrefMatches = footerContent.match(/href: \s*'([^']+)'/g)
if (hrefMatches) {
    hrefMatches.forEach(match => {)
    const href = match.match(/href:\s*'([^']+)'/)[1],
    if (href.startsWith('/')) {,
<<<<<<< HEAD
      footerLinks.push(href.substring(1)); // Remove leading slash
  }
  });
}

=======
      footerLinks.push(href.substring(1)); // Remove leading slash};
  })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Read the Navigation component;
const navContent = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
// Extract all path values from the Navigation;
const navLinks = [];
const pathMatches = navContent.match(/path: \s*'([^']+)'/g)
if (pathMatches) {
    pathMatches.forEach(match => {)
    const path = match.match(/path:\s*'([^']+)'/)[1],
    if (path.startsWith('/')) {,
<<<<<<< HEAD
      navLinks.push(path.substring(1)); // Remove leading slash
  }
  });
}

// Get all existing pages;
const existingPages = [];
const { execSync } = require('child_process');
try {
  const result = execSync('find app -name "page.tsx" | sed "s|app/||" | sed "s|/page.tsx||"', { encoding: 'utf8' });
  existingPages.push(...result.trim().split('\n').filter(Boolean));
} catch (error) {
    console.error('Error getting existing pages:', error.message)
  }

=======
      navLinks.push(path.substring(1)); // Remove leading slash};
  })};
// Get all existing pages;
const existingPages = [];
const { execSync } = require('child_process');
try {;
const result = execSync('find app -name "page.tsx" | sed "s|app/||" | sed "s|/page.tsx||"', { encoding: 'utf8' });
  existingPages.push(...result.trim().split('\n').filter(Boolean))} catch (error) {
  // console.error removed for production
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Combine all links;
const allLinks = [...new Set([...footerLinks, ...navLinks])].sort();
const existingPagesSet = new Set(existingPages);
// Find missing pages;
const missingPages = allLinks.filter(link => !existingPagesSet.has(link));
<<<<<<< HEAD

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total links found: ${allLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);

if (missingPages.length > 0) {
  console.log('\n=== MISSING PAGES ===');
  missingPages.forEach(page => console.log(`- ${page}`));
} else {
    console.log('\n✅ All navigation and footer links have corresponding pages!')
  }

=======
// console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
if (missingPages.length > 0) {
  // console.log removed for production
missingPages.forEach(page => // console.log removed for production
)} else {
  // console.log removed for production
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Check for pages that exist but aren't linked;
const unlinkedPages = existingPages.filter(page => !allLinks.includes(page));
console.log(`\n=== UNLINKED PAGES (${unlinkedPages.length}) ===`);
if (unlinkedPages.length > 0) {
  unlinkedPages.slice(0, 20).forEach(page => console.log(`- ${page}`));
  if (unlinkedPages.length > 20) {
<<<<<<< HEAD
    console.log(`... and ${unlinkedPages.length - 20} more`);
  }
}
=======
    // console.log removed for production
};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
