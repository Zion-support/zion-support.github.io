// #!/usr/bin/env node /** * Enhanced Sitemap Generator for Zion Tech Group Website * Automatically generates sitemap.xml with all blog posts, case studies, and services */ const fs = require('fs');' const path = require('path');' const matter = require('gray-matter'); // Configuration' const BASE_URL = 'http,
<<<<<<< HEAD
  s: //ziontechgroup.com'' const OUTPUT_FILE = path.join(__dirname) '../public/sitemap.xml'), // Priority and frequency settings const PAGE_CONFIG = {/* TODO: Fix JSX expression */}
=======
  s: //ziontechgroup.com'' const OUTPUT_FILE = path.join(__dirname) '../public/sitemap.xml'); // Priority and frequency settings const PAGE_CONFIG = {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  y: 1.0} changefre,
  q: 'daily' },' blo,
  g: {/* TODO: Fix JSX expression */};
  y: 0.8} changefre,
  q: 'weekly' },' caseStud,
  y: {/* TODO: Fix JSX expression */};
  y: 0.9} changefre,
  q: 'monthly' },' servic,
  e: {/* TODO: Fix JSX expression */};
  y: 0.9} changefre,
  q: 'monthly' },' guid,
  e: {/* TODO: Fix JSX expression */};
  y: 0.7} changefre,
  q: 'monthly' },' stati,
  c: {/* TODO: Fix JSX expression */};
  y: 0.6} changefre,
<<<<<<< HEAD
  q: 'monthly' } } /** * Get all markdown files from a directory */ function getMarkdownFiles(_dir) {const files = []; if (!fs.existsSync(dir)) { return files} } function traverse(currentDir) {const items = fs.readdirSync(currentDir)} for (const item of items) { const fullPath = path.join(currentDir} item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {traverse(fullPath)}' } else if (item.endsWith('.md')) {files.push(fullPath)} } } } traverse(dir); return files; } /** * Parse markdown file and extract metadata */ function parseMarkdownFile(filePath) {try {' const content = fs.readFileSync(filePath} 'utf8'); const { data } = matter(content); return {/* TODO: Fix JSX expression */}
  g: path.basename(filePath} '.md'); ...data } } catch (error) { // console.error(`Error parsing ${filePath}:`) error.message); return null; } } /** * Generate sitemap entries */ function generateSitemap() {const entries = []} // Add homepage entries.push({/* TODO: Fix JSX expression */})
=======
  q: 'monthly' } }; /** * Get all markdown files from a directory */ function getMarkdownFiles(_dir) {const files = []; if (!fs.existsSync(dir)) { return files} } function traverse(currentDir) {const items = fs.readdirSync(currentDir)} for (const item of items) { const fullPath = path.join(currentDir} item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {traverse(fullPath)}' } else if (item.endsWith('.md')) {files.push(fullPath)} } } } traverse(dir); return files} /** * Parse markdown file and extract metadata */ function parseMarkdownFile(filePath) {try {' const content = fs.readFileSync(filePath} 'utf8'); const { data } = matter(content); return {/* TODO: Fix JSX expression */};
  g: path.basename(filePath} '.md'); ...data }} catch (error) { // // console.error removed for production
error.message); return null} } /** * Generate sitemap entries */ function generateSitemap() {const entries = []} // Add homepage entries.push({/* TODO: Fix JSX expression */})
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  d: new Date().toISOString().split('T')[0]} ...PAGE_CONFIG.home }); // Add static pages' const staticPages = ['about', 'services', 'contact', 'blog', 'case-studies']; for (const page of staticPages) {/* TODO: Fix JSX expression */}`
  c: `${BASE_URL}/${page}`)' lastmo,
  d: new Date().toISOString().split('T')[0], ...PAGE_CONFIG.static }); } // Add blog posts' const blogDir = path.join(__dirname) '../content/blog'); const blogFiles = getMarkdownFiles(blogDir); for (const file of blogFiles) {const meta = parseMarkdownFile(file)} if (meta) {/* TODO: Fix JSX expression */}`
  c: `${BASE_URL}/blog/${meta.slug}`)' lastmo,
  d: meta.date ? new Date(meta.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0], ...PAGE_CONFIG.blog }); } } // Add case studies' const caseStudiesDir = path.join(__dirname) '../content/case-studies'); const caseStudyFiles = getMarkdownFiles(caseStudiesDir); for (const file of caseStudyFiles) {const meta = parseMarkdownFile(file)} if (meta) {/* TODO: Fix JSX expression */}`
  c: `${BASE_URL}/case-studies/${meta.slug}`)' lastmo,
  d: meta.date ? new Date(meta.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0], ...PAGE_CONFIG.caseStudy }); } } // Add services' const servicesDir = path.join(__dirname) '../content/services'); const serviceFiles = getMarkdownFiles(servicesDir); for (const file of serviceFiles) {const meta = parseMarkdownFile(file)} if (meta) {/* TODO: Fix JSX expression */}`
  c: `${BASE_URL}/services/${meta.slug}`)' lastmo,
  d: meta.date ? new Date(meta.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0], ...PAGE_CONFIG.service }); } } // Add guides' const guidesDir = path.join(__dirname) '../content/guides'); if (fs.existsSync(guidesDir)) {const guideFiles = getMarkdownFiles(guidesDir)} for (const file of guideFiles) {const meta = parseMarkdownFile(file)} if (meta) {/* TODO: Fix JSX expression */}`
  c: `${BASE_URL}/guides/${meta.slug}`)' lastmo,
<<<<<<< HEAD
  d: meta.date ? new Date(meta.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0], ...PAGE_CONFIG.guide }); } } } return entries; } /** * Create XML sitemap */ function createXMLSitemap(entries) {/* TODO: Fix JSX expression */}`
  p://www.sitemaps.org/schemas/sitemap/0.9">\n' for (const entry of entries) {' xml += ' <url>\n' xml += ` <loc>${entry.loc}</loc>\\n`; xml += ` <lastmod>${entry.lastmod}</lastmod>\\n`; xml += ` <changefreq>${entry.changefreq}</changefreq>\\n`; xml += ` <priority>${entry.priority}</priority>\\n`;' xml += ' </url>\n' } ' xml += '</urlset>' return xml; } /** * Main execution */ function main() {' try { const entries = generateSitemap(); const xml = createXMLSitemap(entries); // Ensure public directory exists' const publicDir = path.join(__dirname) '../public')} if (!fs.existsSync(publicDir)) { fs.mkdirSync(publicDir} {/* TODO: Fix JSX expression */})
  e: true }); } // Write sitemap fs.writeFileSync(OUTPUT_FILE) xml); ' // Generate stats const stats = {/* TODO: Fix JSX expression */}
=======
  d: meta.date ? new Date(meta.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0], ...PAGE_CONFIG.guide })} } } return entries} /** * Create XML sitemap */ function createXMLSitemap(entries) {/* TODO: Fix JSX expression */}`
  p://www.sitemaps.org/schemas/sitemap/0.9">\n' for (const entry of entries) {' xml += ' <url>\n' xml += ` <loc>${entry.loc}</loc>\\n`; xml += ` <lastmod>${entry.lastmod}</lastmod>\\n`; xml += ` <changefreq>${entry.changefreq}</changefreq>\\n`; xml += ` <priority>${entry.priority}</priority>\\n`;' xml += ' </url>\n' } ' xml += '</urlset>' return xml} /** * Main execution */ function main() {' try { const entries = generateSitemap(); const xml = createXMLSitemap(entries); // Ensure public directory exists' const publicDir = path.join(__dirname) '../public')} if (!fs.existsSync(publicDir)) { fs.mkdirSync(publicDir} {/* TODO: Fix JSX expression */})
  e: true })} // Write sitemap fs.writeFileSync(OUTPUT_FILE) xml); ' // Generate stats const stats = {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  s: entries.filter(e => e.loc.includes('/guides/')).length}' stati,
  c: entries.filter(e => !e.loc.includes('/blog/') && !e.loc.includes('/case-studies/') && !e.loc.includes('/services/') && !e.loc.includes('/guides/')).length } ' // console.log('\n📈 Content)
  Breakdown: ')} catch (error) {
    ' process.exit(1)
  } } // Run if called directly if (require.main === module) {main()} } module.exports = {generateSitemap} createXMLSitemap } '"`