<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import { execSync } from 'child_process';
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import fs from "fs";
import { execSync } from "child_process";



<<<<<<< HEAD

import fs from "fs";
import { execSync } from "child_process";



=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import fs from 'fs';
import { execSync } from 'child_process';


import fs from "fs";
import { execSync } from "child_process";
<<<<<<< HEAD
import fs from "fs";
import { execSync } from "child_process";
origin/main
origin/automation-improvements-final
=======
=======
import fs from "fs";
import { execSync } from "child_process";

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app');    ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => ); ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => );  const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => );  const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { } }); if (brokenLinks.length > 0) {  brokenLinks.forEach(link => { `)})} else { }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import fs from 'fs';
import { execSync } from 'child_process';

import fs from "fs";
import { execSync } from "child_process";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

>>>>>>> origin/automation-improvements-final
=======
<<<<<<< HEAD
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        }
      });
    }
  } catch {
    // Ignore errors for individual pages
  }
});
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
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
        }
      });
    }
  } catch (error) {



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
if (brokenLinks && brokenLinks.length > 0) {
  console && console.log("Found broken internal links:");
  brokenLinks && brokenLinks.forEach((link) => {
    console && console.log(`- In ${link && link.page}.tsx: ${link && link.brokenLink} (${link && link.fullLink})`);
  });
} else {
<<<<<<< HEAD
  console && console.log("No broken internal links found");

}
  console.log("No broken internal links found");
}
  console.log('No broken internal links found');
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
}
  console.log('No broken internal links found');
}
}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

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
=======
  console.log("No broken internal links found");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
<<<<<<< HEAD
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}

'"`

    console.log(`Error reading ${page}."tsx": `, error.message);
=======
=======
    console.log (`Error reading ${page}.tsx:`, error.message);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
});
;
// Check condition
if ( {) {
  $2
}
  console.log ("Found broken internal links:");
  broken_links.for_each ((link) => {
    console.log (`- In ${link.page}.tsx: ${link.broken_link} (${link.full_link})`);
  });
} else {
  console.log ("No broken internal links found");
}
=======
=======
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
import fs from 'fs'; import { execSync } from 'child_process'; const sitemapContent = fs.readFileSync('sitemap.xml','utf8'); const urlMatches = sitemapContent.match( /<loc>https:\/\/ziontechgroup\.com\/([^<]+)<\/loc>/g ); const sitemapUrls = urlMatches ? urlMatches.map(match => { const url = match .replace('<loc>https: .replace('</loc>',''); return url === '' ? 'index' : url}) : []; const actualPages = execSync( 'find pages -name "*.tsx" -type f | sed "s/pages\\ { encoding: 'utf8' } ) .trim() .split('\n') .filter(page => page !== '_app'); console.log('=== SITEMAP ANALYSIS ==='); console.log('Total URLs in sitemap:',sitemapUrls.length); console.log('Total actual pages:',actualPages.length); console.log('\n=== MISSING PAGES (in sitemap but not in pages/) ==='); const missingPages = sitemapUrls.filter(url => !actualPages.includes(url)); missingPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== EXTRA PAGES (in pages/ but not in sitemap) ==='); const extraPages = actualPages.filter(page => !sitemapUrls.includes(page)); extraPages.forEach(page => console.log(`- ${page}`)); console.log('\n=== PAGES THAT NEED SUBDIRECTORIES ==='); const pagesNeedingSubdirs = sitemapUrls.filter(url => url.includes('/')); pagesNeedingSubdirs.forEach(page => console.log(`- ${page}`)); console.log('\n=== CHECKING FOR BROKEN INTERNAL LINKS ==='); const brokenLinks = []; actualPages.forEach(page => { try { const pageContent = fs.readFileSync(`pages/${page}.tsx`,'utf8'); const internalLinkMatches = pageContent.match(/href="\/([^"]+)"/g); if (internalLinkMatches) { internalLinkMatches.forEach(match => { const link = match.replace('href="/','').replace('"',''); const fullLink = link === '' ? 'index' : link; if ( !actualPages.includes(fullLink) && !sitemapUrls.includes(fullLink) ) { brokenLinks.push({ page,brokenLink: `/${link}`,fullLink,})} })} } catch (error) { console.log(`Error reading ${page}.tsx:`,error.message)} }); if (brokenLinks.length > 0) { console.log('Found broken internal links:'); brokenLinks.forEach(link => { console.log(`- In ${link.page}.tsx: ${link.brokenLink} (${link.fullLink})`)})} else { console.log('No broken internal links found')}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  console.log("No broken internal links found");
}
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
}
