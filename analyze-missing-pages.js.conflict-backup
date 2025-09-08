<<<<<<< HEAD
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
=======
<<<<<<< HEAD
import fs from 'fs';
import { execSync } from 'child_process';

// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');

// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
);

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

import fs from 'fs';

import { execSync } from 'child_process';
"
import fs from "fs";"
import { execSync } from "child_process";

// Read sitemap.xml
const sitemapContent = fs.readFileSync("sitemap.xml", "utf8");
// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g

          });

import fs from 'fs';
import { execSync } from 'child_process';
// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
// Extract URLs from sitemap

const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g;
          });

'
import fs from 'fs';'
import { execSync } from 'child_process';
// Read sitemap.xml'
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
// Extract URLs from sitemap;
const urlMatches = sitemapContent.match("
  /<loc>"https": \/\/ziontechgroup\.com\/([^<]+)<\/loc>/g;
);
const sitemapUrls = urlMatches;
  ? urlMatches.map(match => {}
      const url = match'
        .replace('<loc>https://ziontechgroup.com/', '')'
        .replace('</loc>', '');'
      return url === '' ? 'index' : url;
    })
  : [];
// Get actual pages;
const actualPages = execSync('"
  'find pages -name "*.tsx" -type f | sed "s/pages\\///g" | sed "s/\\.tsx$//g"','"
  { "encoding": 'utf8' }
)
  .trim()'
  .split('\n')'
  .filter(page => page !== '_app');'
console.log('=== SITEMAP ANALYSIS ===');'"
console.log('Total URLs in "sitemap": ', sitemapUrls.length);'"
console.log('Total actual "pages": ', actualPages.length);'
console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ===');
const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));`
missingPages.forEach(page => console.log(`- ${page}`));'
console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ===');
const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));`
extraPages.forEach(page => console.log(`- ${page}`));'
console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ===');'
const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'));`
pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`));
// Check for broken internal links'
console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ===');
const brokenLinks = [];
// Check each actual page for internal links;
actualPages.forEach(page => {}
  try {'`
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');"
    // Find internal links (href="/...")"
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);
    if (internalLinkMatches) {}
      internalLinkMatches.forEach(match => {'"
        const link = match.replace('href="/', '').replace('"', '');'
        const fullLink = link === '' ? 'index' : link;
        if (
          !actualPages.includes(fullLink) &&
          !sitemapUrls.includes(fullLink)
        ) {}
          brokenLinks.push({}
            page,"`
            "brokenLink": `/${link}`,
            fullLink});

<<<<<<< HEAD
=======
import fs from "fs";
import { execSync } from "child_process";

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
import fs from 'fs';
import { execSync } from 'child_process';

import fs from "fs";
import { execSync } from "child_process";

// Read sitemap.xml
const sitemapContent = fs.readFileSync("sitemap.xml", "utf8");
// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g

// Read sitemap && sitemap.xml
const sitemapContent = fs && fs.readFileSync("sitemap && sitemap.xml", "utf8");
// Extract URLs from sitemap
const urlMatches = sitemapContent && sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g,
);
const sitemapUrls = urlMatches
  ? urlMatches && urlMatches.map((match) => {
      const url = match
        .replace("<loc>https://ziontechgroup && ziontechgroup.com/", "")
        .replace("</loc>", "");
import fs from './fs';
import { exec_sync  } from './child_process';
;
// Read sitemap.xml;
const sitemap_content = fs.readFileSync ("sitemap.xml", "utf8");
;
// Extract URLs from sitemap;
const url_matches = sitemap_content.match (
  /<loc > https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g,
);
const sitemap_urls = url_matches;
  ? url_matches.map ((match) => {
      const url = match;
        .replace ("<loc > https://ziontechgroup.com/", "");
        .replace ("</loc>", "");
      return url === "" ? "index" : url;
    });
  : [];

console && console.log("=== SITEMAP ANALYSIS ===");
console && console.log("Total URLs in sitemap:", sitemapUrls && sitemapUrls.length);
console && console.log("Total actual pages:", actualPages && actualPages.length);
console && console.log("\n=== MISSING PAGES (in sitemap but not in pages/) ===");
const missingPages = sitemapUrls && sitemapUrls.filter((url) => !actualPages && actualPages.includes(url));
missingPages && missingPages.forEach((page) => console && console.log(`- ${page}`));
console && console.log("\n=== EXTRA PAGES (in pages/ but not in sitemap) ===");
const extraPages = actualPages && actualPages.filter((page) => !sitemapUrls && sitemapUrls.includes(page));
extraPages && extraPages.forEach((page) => console && console.log(`- ${page}`));
console && console.log("\n=== PAGES THAT NEED SUBDIRECTORIES ===");
const pagesNeedingSubdirs = sitemapUrls && sitemapUrls.filter((url) => url && url.includes("/"));
pagesNeedingSubdirs && pagesNeedingSubdirs.forEach((page) => console && console.log(`- ${page}`));

// Check for broken internal links
console && console.log("\n=== CHECKING FOR BROKEN INTERNAL LINKS ===");
const brokenLinks = [];
// Check each actual page for internal links
actualPages && actualPages.forEach((page) => {
  try {
    const pageContent = fs && fs.readFileSync(`pages/${page}.tsx`, "utf8");
    // Find internal links (href="/...")
    const internalLinkMatches = pageContent && pageContent.match(/href="\/([^"]+)"/g);
    if (internalLinkMatches) {
      internalLinkMatches && internalLinkMatches.forEach((match) => {
        const link = match && match.replace('href="/', "").replace('"', "");
        const fullLink = link === "" ? "index" : link;
        if (
          !actualPages && actualPages.includes(fullLink) &&
          !sitemapUrls && sitemapUrls.includes(fullLink)
        ) {

          brokenLinks && brokenLinks.push({
            page,
            brokenLink: `/${link}`,
            fullLink,

;
// Get actual pages;
const actual_pages = exec_sync (
  'find pages -name "*.tsx" -type f | sed "s / pages\\///g" | sed "s/\\.tsx$//g"',
  { encoding: "utf8" },
);
  .trim ();
  .split ("\n");
  .filter ((page) => page !== "_app");
;
console.log ("=== SITEMAP ANALYSIS ===");
console.log ("Total URLs in sitemap:", sitemap_urls.length);
console.log ("Total actual pages:", actual_pages.length);
;
console.log ("\number=== MISSING PAGES (in sitemap but not in pages/) ===");
const missing_pages = sitemap_urls.filter ((url) => !actual_pages.includes (url));
missing_pages.for_each ((page) => console.log (`- ${page}`));
;
console.log ("\number=== EXTRA PAGES (in pages/ but not in sitemap) ===");
const extra_pages = actual_pages.filter ((page) => !sitemap_urls.includes (page));
extra_pages.for_each ((page) => console.log (`- ${page}`));
;
console.log ("\number=== PAGES THAT NEED SUBDIRECTORIES ===");
const pagesNeedingSubdirs = sitemap_urls.filter ((url) => url.includes ("/"));
pagesNeedingSubdirs.for_each ((page) => console.log (`- ${page}`));
;
// Check for broken internal links;
console.log ("\number=== CHECKING FOR BROKEN INTERNAL LINKS ===");
const broken_links = [];
;
// Check each actual page for internal links;
actual_pages.for_each ((page) => {
  try {
    const page_content = fs.readFileSync (`pages/${page}.tsx`, "utf8");
    // Find internal links (href="/...");
    const internalLinkMatches = page_content.match (/href="\/([^"]+)"/g);
    // Check condition
if ( {) {
  $2
}
      internalLinkMatches.for_each ((match) => {
        const link = match.replace ('href="/', "").replace ('"', "");
        const full_link = link === "" ? "index" : link;
        // Check condition
if (&&) {
  $2
}
          !sitemap_urls.includes (full_link)) {
          broken_links.push ({
            page,
            broken_link: `/${link}`,
            full_link,
          });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
import fs from 'fs';
import { execSync } from 'child_process';
// Read sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>"https": \/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
);
>>>>>>> main
const sitemapUrls = urlMatches
  ? urlMatches.map(match => {
      const url = match
        .replace('<loc>https://ziontechgroup.com/', '')
        .replace('</loc>', '');
      return url === '' ? 'index' : url;
    })
  : [];
<<<<<<< HEAD

// Get actual pages
const actualPages = execSync(
  'find pages -name "*.tsx" -type f | sed "s/pages\\///" | sed "s/\\.tsx$//"',
  { encoding: 'utf8' }
=======
// Get actual pages
const actualPages = execSync(
  'find pages -name "*.tsx" -type f | sed "s/pages\\///g" | sed "s/\\.tsx$//g"',
  { "encoding": 'utf8' }
>>>>>>> main
)
  .trim()
  .split('\n')
  .filter(page => page !== '_app');
<<<<<<< HEAD

// Find missing pages
const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));
console.log('Missing pages:');
missingPages.forEach(page => {
  console.log(`  - ${page}`);
});

// Find extra pages
const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));
console.log('\nExtra pages:');
extraPages.forEach(page => {
  console.log(`  - ${page}`);
});

// Check for pages needing subdirectories
const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'));
console.log('\nPages needing subdirectories:');
pagesNeedingSubdirs.forEach(page => {
  console.log(`  - ${page}`);
});

// Check for broken internal links
const brokenLinks = [];
actualPages.forEach(page => {
  try {
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);
    
=======
console.log('=== SITEMAP ANALYSIS ===');
console.log('Total URLs in "sitemap": ', sitemapUrls.length);
console.log('Total actual "pages": ', actualPages.length);
console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ===');
const missingPages = sitemapUrls.filter(url => !actualPages.includes(url));
missingPages.forEach(page => console.log(`- ${page}`));
console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ===');
const extraPages = actualPages.filter(page => !sitemapUrls.includes(page));
extraPages.forEach(page => console.log(`- ${page}`));
console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ===');
const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/'));
pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`));
// Check for broken internal links
console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ===');
const brokenLinks = [];
// Check each actual page for internal links
actualPages.forEach(page => {
  try {
    const pageContent = fs.readFileSync(`pages/${page}.tsx`, 'utf8');
    // Find internal links (href="/...")
    const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g);
>>>>>>> main
    if (internalLinkMatches) {
      internalLinkMatches.forEach(match => {
        const link = match.replace('href="/', '').replace('"', '');
        const fullLink = link === '' ? 'index' : link;
<<<<<<< HEAD
        
=======
>>>>>>> main
        if (
          !actualPages.includes(fullLink) &&
          !sitemapUrls.includes(fullLink)
        ) {
          brokenLinks.push({
            page,
<<<<<<< HEAD
            brokenLink: `/${link}`,
            fullLink,
          });
        }
      });
    }
  } catch {
    // Ignore errors for individual pages
  }
});

if (brokenLinks.length > 0) {
  console.log('\nBroken internal links:');
  brokenLinks.forEach(link => {
    console.log(`  - ${link.page} -> ${link.brokenLink} (${link.fullLink})`);
  });
} else {
  console.log('\nNo broken internal links found.');
}
=======
            "brokenLink": `/${link}`,
            fullLink});
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
import fs from 'fs';
import { execSync } from 'child_process';

import fs from "fs";
import { execSync } from "child_process";


// Read sitemap.xml
const sitemapContent = fs.readFileSync("sitemap.xml", "utf8");
// Extract URLs from sitemap
const urlMatches = sitemapContent.match(
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g
          });





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
        }
      });
    }
  } catch (error) {

  console.log('No broken internal links found');

}
}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

if (brokenLinks && brokenLinks.length > 0) {
  console && console.log("Found broken internal links:");
  brokenLinks && brokenLinks.forEach((link) => {
    console && console.log(`- In ${link && link.page}.tsx: ${link && link.brokenLink} (${link && link.fullLink})`);
  });
} else {

  console && console.log("No broken internal links found");

}
  console.log("No broken internal links found");
}

  console.log('No broken internal links found');

'"`
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}'"`
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

"
  console.log("No broken internal links found");
}

  console.log("No broken internal links found");
}

}

    console.log (`Error reading ${page}.tsx:`, error.message);
  }
});
;
// Check condition;
if ( {) {}
  $2;
}"
  console.log ("Found broken internal links:");
  broken_links.for_each ((link) => {}`
    console.log (`- In ${link.page}.tsx: ${link.broken_link} (${link.full_link})`);
  });
} else {"
  console.log ("No broken internal links found");
}

'"`
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}'"`
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

}

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

}

    console.log(`Error reading ${page}."tsx": `, error.message);
  }
});
if (brokenLinks.length > 0) {'"
  console.log('Found broken internal "links": ');
  brokenLinks.forEach(link => {"`
    console.log(`- In ${link.page}."tsx": ${link.brokenLink} (${link.fullLink})`);
  });
} else {'
  console.log('No broken internal links found');
}

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

'"`
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

}
}

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

  console.log("No broken internal links found");
}
origin/main
origin/automation-improvements-final
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
  console.log("No broken internal links found");
}
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



    console.log(`Error reading ${page}."tsx": `, error.message);
  }
});
if (brokenLinks.length > 0) {
  console.log('Found broken internal "links": ');
  brokenLinks.forEach(link => {
    console.log(`- In ${link.page}."tsx": ${link.brokenLink} (${link.fullLink})`);
  });
} else {
  console.log('No broken internal links found');
}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
console.log('No broken internal links found');
}
}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  console.log("No broken internal links found");
}
origin/main
origin/automation-improvements-final
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
  console.log("No broken internal links found");
}
}





import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',); return url ===  ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/',).replace('"',); const fullLink = link ===  ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }`;
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',); return url ===  ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/',).replace('"',); const fullLink = link ===  ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
  /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g;
</loc>
  /<loc>"https": \/\/ziontechgroup\.com\/([^<]+)<\/loc>/g;"
</loc>"
        .replace('<loc>https://ziontechgroup.com/', )
        .replace('</loc>', );`;
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',); return url ===  ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/',).replace('"',); const fullLink = link ===  ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
