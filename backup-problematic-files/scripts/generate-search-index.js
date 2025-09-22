
/**;
 * Generate Search Index;
 * Creates a search index for the website content;
 */;
<<<<<<< HEAD
const fs = require('fs'),;
const path = require('path'),;
const PAGES_DIR = path.join(__dirname, '..pages'),;
const OUTPUT_DIR = path.join(__dirname, '..public', 'search'),;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Content types to index;
const CONTENT_TYPES = {;
  'pages':{;
    path:PAGES_DIR,;

            }
          }
        }
      }

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
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
module.exports = { generateSearchIndex },
