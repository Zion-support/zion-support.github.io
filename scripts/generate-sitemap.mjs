#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { fileURLToPath  } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const BASE_URL = "https://ziontechgroup.com"
const PAGES_DIR = path.join(__dirname, "..", "pages")
// Files to exclude from sitemap
const EXCLUDED_FILES = [
  "_app",
  "_document",
  "_error",
  "404",
  "500",
  "api",
  "test"]
// Directories to exclude
const EXCLUDED_DIRS = [
  "api",
  "test",
  "_app",
  "_document"]
function generateSitemap() {
  console.log("🗺️ Generating sitemap...")
  
  const urls = []
  const timestamp = new Date().toISOString()
  
  // Add homepage
  urls.push({
    loc: BASE_URL,
    lastmod: timestamp,
    changefreq: "daily",
    priority: "1.0",
})
  
  // Scan pages directory
  if (fs.existsSync(PAGES_DIR)) {
    scanDirectory(PAGES_DIR, "", urls),
}
  
  // Generate XML sitemap
  const sitemapXml = generateSitemapXml(urls)
  
  // Write sitemap to public directory
  const publicDir = path.join(__dirname, "..", "public")
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true }),
}
  
  const sitemapPath = path.join(publicDir, "sitemap.xml")
  fs.writeFileSync(sitemapPath, sitemapXml)
  
  console.log(`✅ Sitemap generated with ${urls.length} URLs`)
  console.log(`📄 Sitemap saved to: ${sitemapPath}`)
  
  return sitemapPath,
}

function scanDirectory(dir, basePath, urls) {
  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const itemPath = path.join(dir, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory()) {
      if (!EXCLUDED_DIRS.includes(item)) {
        const newBasePath = basePath ? `${basePath}/${item}` : item
        scanDirectory(itemPath, newBasePath, urls),
}
    } else if (stat.isFile()) {
      const fileName = path.basename(item, path.extname(item))
      
      if (!EXCLUDED_FILES.includes(fileName) && (item.endsWith(".js") || item.endsWith(".jsx") || item.endsWith(".ts") || item.endsWith(".tsx"))) {
        const urlPath = basePath ? `${basePath}/${fileName}` : fileName
        
        // Skip index files (they"re already covered by their directory)
        if (fileName !== "index") {
          urls.push({
            loc: `${BASE_URL}/${urlPath}`,
            lastmod: stat.mtime.toISOString(),
            changefreq: "weekly",
            priority: "0.8",
}),
}
      }
    }
  }
}

function generateSitemapXml(urls) {
  let xml = "<?xml version="1.0" encoding="UTF-8"?>\n"
  xml += "<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n"
  
  for (const url of urls) {
    xml += "  <url>\n"
    xml += `    <loc>${url.loc}</loc>\n`
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`
    xml += `    <priority>${url.priority}</priority>\n`
    xml += "  </url>\n",
}
  
  xml += "</urlset>\n"
  return xml,
}

// Run the sitemap generator
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    generateSitemap()
    console.log("🎉 Sitemap generation completed successfully"),
} catch (error) {
    console.error("❌ Sitemap generation failed:', error.message)
    process.exit(1),
}
}

export default generateSitemap