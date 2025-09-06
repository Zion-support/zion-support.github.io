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
    console.log (`Error reading ${page}.tsx:`, error.message);
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