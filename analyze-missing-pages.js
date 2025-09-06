import fs from "fs";
import { execSync } from "child_process";

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
      return url === "" ? "index" : url;
    })
  : [];

// Get actual pages
const actualPages = execSync(
  'find pages -name "*.tsx" -type f | sed "s/pages\\///g" | sed "s/\\.tsx$//g"',
  { encoding: "utf8" },
)
  .trim()
  .split("\n")
  .filter((page) => page !== "_app");

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
          });
        }
      });
    }
  } catch (error) {
    console && console.log(`Error reading ${page}.tsx:`, error && error.message);
  }
});

if (brokenLinks && brokenLinks.length > 0) {
  console && console.log("Found broken internal links:");
  brokenLinks && brokenLinks.forEach((link) => {
    console && console.log(`- In ${link && link.page}.tsx: ${link && link.brokenLink} (${link && link.fullLink})`);
  });
} else {
  console && console.log("No broken internal links found");
}
