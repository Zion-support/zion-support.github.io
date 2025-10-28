import fs from 'fs';

// Read existing pages;
const existingPages = fs.readFileSync('/workspace/existing_pages.txt', 'utf8').split('\n').filter(Boolean);

// Navigation links from Navigation.tsx;

// Footer links from Footer.tsx;

// App.tsx routes;

// Combine all links and remove duplicates;
const allLinks = [...new Set([...navigationLinks, ...footerLinks, ...appRoutes])];

// Find missing pages;
  const path = link.replace('/', '');
  return !existingPages.includes(path);
});

// Find broken links (pages that exist but have no route)
const brokenLinks = existingPages.filter(page => {
  const link={`/${page}`};
  return !allLinks.includes(link) && page !== 'page.tsx';
});

 );

 ===');
 );


// Write results to files;
fs.writeFileSync('/workspace/missing_pages.txt', missingPages.join('\n'));
fs.writeFileSync('/workspace/broken_links.txt', brokenLinks.join('\n'));