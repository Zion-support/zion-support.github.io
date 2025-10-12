import fs from 'fs';

// Read existing pages;

// Navigation links from Navigation.tsx;

// Footer links from Footer.tsx;

// App.tsx routes;

// Combine all links and remove duplicates;

// Find missing pages;
  
  return !existingPages.includes(path);
});

// Find broken links (pages that exist but have, no, route)
  
  return !allLinks.includes(link) && page !== 'page.tsx';
});

console.log('=== MISSING PAGES ===');
 console.log(page));

console.log('\n=== BROKEN LINKS (Pages exist but, no, route) ===');
 console.log(page));

console.log('\n=== SUMMARY ===');
console.log(`Total links referenced: ${allLinks.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Broken links: ${brokenLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);

// Write results to files;
fs.writeFileSync('/workspace/missing_pages.txt', missingPages.join('\n'));
fs.writeFileSync('/workspace/broken_links.txt', brokenLinks.join('\n'));