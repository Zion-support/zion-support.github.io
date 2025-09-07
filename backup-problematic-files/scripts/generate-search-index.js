<<<<<<< HEAD

=======
#!/usr/bin/env node;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
/**;
 * Generate Search Index;
 * Creates a search index for the website content;
 */;
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs'),;
const path = require('path'),;
const PAGES_DIR = path.join(__dirname, '..pages'),;
const OUTPUT_DIR = path.join(__dirname, '..public', 'search'),;
<<<<<<< HEAD
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Content types to index;
const CONTENT_TYPES = {;
  'pages':{;
    path:PAGES_DIR,;
<<<<<<< HEAD

=======
    extensions:['.tsx.ts', '.jsx.js'],;
    exclude:['_app_document', 'api'];
  },;
  'blog':{;
    path:path.join(PAGES_DIR, 'blog'),;
    exclude:[];
  }
function extractTextFromJSX(content) {;
  // Simple text extraction from JSX/TSX content;
  return content;
    .replace(/<[^>]*>/g, ' ') // Remove HTML/JSX tags;
    .replace(/import.*?from.*?['"`][^'"`]*['"`],?/g, ) // Remove imports;
    .replace(/export.*?function.*?{/g, ) // Remove function declarations;
    .replace(/[{}()]/g, ' ') // Remove brackets;
    .replace(/\s+/g, ' ') // Normalize whitespace;
    .trim(),;
function generateSearchIndex() {;
  const searchIndex = {;
    pages:[],;
    blog:[],;
    generated:new Date().toISOString();
  // Process each content type;
  Object.entries(CONTENT_TYPES).forEach(([type, config]) => {;
    if (!fs.existsSync(config.path)) return,;
    const files = fs.readdirSync(config.path, { recursive:true }),;
    files.forEach(file => {;)
      if (typeof file === 'string') {;
        const filePath = path.join(config.path, file),;
        const stats = fs.statSync(filePath),;
        if (stats.isFile()) {;
          const ext = path.extname(file),;
          if (config.extensions.includes(ext)) {;
            const fileName = path.basename(file, ext),;
            // Skip excluded files;
            if (config.exclude.some(excluded => fileName.startsWith(excluded))) {;
              return,;
            try {;
              const content = fs.readFileSync(filePath, 'utf8'),;
              const text = extractTextFromJSX(content),;
              const entry = {;`;
                id:`${type}-${fileName}`,;
                title:fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),;
                content:text.substring(0, 500), // Limit content length;`;
                url:`/${type === 'pages' ?  :type + '/'}${fileName}`,;
                type:type,;
                lastModified:stats.mtime.toISOString();
              searchIndex[type].push(entry),;
            } catch (error) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            }
          }
        }
      }
<<<<<<< HEAD

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
  // Ensure output directory exists;
  if (!fs.existsSync(OUTPUT_DIR)) {;
    fs.mkdirSync(OUTPUT_DIR, { recursive:true }),;
  // Write search index;
  const indexPath = path.join(OUTPUT_DIR, 'index.json'),;
  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),;
  ;`;
  // // // console.log(` Search index generated at:${indexPath}`),;`;
  // // // console.log(` Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`),;
if (require.main === module) {;
  generateSearchIndex(),;
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
module.exports = { generateSearchIndex },
=======
module.exports = { generateSearchIndex },`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
