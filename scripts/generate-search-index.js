<<<<<<< HEAD


#!/usr/bin/env node;
=======





#!/usr/bin/env node;



>>>>>>> origin/main

#!/usr/bin/env node;
;

#!/usr/bin/env node;
;
<<<<<<< HEAD
=======




>>>>>>> origin/main

#!/usr/bin/env node;
/**;
 * Generate Search Index;
 * Creates a search index for the website content;
 */;
<<<<<<< HEAD

const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..pages');
const OUTPUT_DIR = path.join(__dirname, '..public', 'search');  }
    exclude:[];
=======
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..pages');
const OUTPUT_DIR = path.join(__dirname, '..public', 'search');
;
const fs = require('fs'),;
const path = require('path'),;
;
const PAGES_DIR = path.join(__dirname, '..pages'),;
const OUTPUT_DIR = path.join(__dirname, '..public', 'search'),;
;
// Content types to index;
const CONTENT_TYPES = {'pages':{;
    path:PAGES_DIR;
    extensions:['.tsx.ts', '.jsx.js'];
    exclude:['_app_document', 'api'];
// Content types to index;
const CONTENT_TYPES = {;
  'pages':{;
    path:PAGES_DIR,;
    extensions:['.tsx && tsx.ts', '.jsx && jsx.js'],;
    exclude:['_app_document', 'api'];
  },;
  'blog':{;
    path:path && path.join(PAGES_DIR, 'blog'),;
    extensions:['.tsx && tsx.ts', '.jsx && jsx.js'],;
    exclude:[];
  }

  }

    exclude:[];
>>>>>>> origin/main
  }
  'blog':{path:path.join(PAGES_DIR, 'blog');
    extensions:['.tsx.ts', '.jsx.js'];
    exclude:[];
<<<<<<< HEAD
=======
const fs = require('fs'),;
>>>>>>> origin/main
const path = require('path'),;
const PAGES_DIR = path.join(__dirname, '..pages'),;
const OUTPUT_DIR = path.join(__dirname, '..publicsearch'),;
// Content types to index;
const CONTENT_TYPES = {;
  'pages': {;
    path: PAGES_DIR,;
    extensions: ['.tsx.ts.jsx.js'],;
    exclude: ['_app_documentapi'];
  },;
  'blog': {;
    path: path.join(PAGES_DIR, 'blog'),;
    extensions: ['.tsx.ts.jsx.js'],;
<<<<<<< HEAD
    exclude: [];  }
},
  }
},
=======
    exclude: [];


  }
},
  }
},
  }
},

>>>>>>> origin/main
  }
}
function extractTextFromJSX(content) {
  // Simple text extraction from JSX/TSX content
  return content
    .replace(/<[^>]*>/g, ' ') // Remove HTML/JSX tags
    .replace(/import.*?from.*?['"`][^'"`]*['"`],?/g, '') // Remove imports
    .replace(/export.*?function.*?{/g, '') // Remove function declarations
    .replace(/[{}()]/g, ' ') // Remove brackets
    .replace(/\s+/g, ' ') // Normalize whitespace
<<<<<<< HEAD
    .trim()}
=======
    .trim()
},;
function extractTextFromJSX(content) {;
  // Simple text extraction from JSX/TSX content;
  return content;
    .replace(/<[^>]*>/g, ' ') // Remove HTML/JSX tags;
    .replace(/import.*?from.*?['"`][^'"`]*['"`],?/g, '') // Remove imports;
    .replace(/export.*?function.*?{/g, '') // Remove function declarations;
    .replace(/[{}()]/g, ' ') // Remove brackets;
    .replace(/\s+/g, ' ') // Normalize whitespace;
    .trim();


}
>>>>>>> origin/main
function generateSearchIndex() {
  const searchIndex = {

    pages: []
    blog: []
    generated: new Date().toISOString()
  }
  // Process each content type

            // Skip excluded files
            if (config.exclude.some(excluded => fileName.startsWith(excluded))) {
<<<<<<< HEAD
=======

>>>>>>> origin/main
            // Skip excluded files
            if (config.exclude.some(excluded => fileName.startsWith(excluded))) {
              return
            }
<<<<<<< HEAD
            try {            }
          }
        }
      }

=======
            try {

              const content = fs.readFileSync(filePath, 'utf8')
              const text = extractTextFromJSX(content)

              const entry = {
                id: `${type}-${fileName}`
                title: fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                content: text.substring(0, 500), // Limit content length
                url: `/${type === 'pages' ? '' : type + '/'}${fileName}`
                type: type
                lastModified: stats.mtime.toISOString()
              }
              searchIndex[type].push(entry)
            } catch (error) {
    extensions:['.tsx.ts', '.jsx.js'],;
    exclude:['_app_document', 'api'];
  },;
  'blog':{;
    path:path.join(PAGES_DIR, 'blog'),;
    extensions:['.tsx.ts', '.jsx.js'],;
    exclude:[];
  }
},;
;
function extractTextFromJSX(content) {;
  // Simple text extraction from JSX/TSX content;
  return content;
    .replace(/<[^>]*>/g, ' ') // Remove HTML/JSX tags;
    .replace(/import.*?from.*?['"`][^'"`]*['"`],?/g, '') // Remove imports;
    .replace(/export.*?function.*?{/g, '') // Remove function declarations;
    .replace(/[{}()]/g, ' ') // Remove brackets;
    .replace(/\s+/g, ' ') // Normalize whitespace;
    .trim(),;
}
;
function generateSearchIndex() {;
  const searchIndex = {;
    pages:[],;
    blog:[],;
    generated:new Date().toISOString();
  },;
;
  // Process each content type;
  Object.entries(CONTENT_TYPES).forEach(([type, config]) => {;
    if (!fs.existsSync(config.path)) return,;
;
    const files = fs.readdirSync(config.path, { recursive:true }),;
    ;
    files.forEach(file => {;
      if (typeof file === 'string') {;
        const filePath = path.join(config.path, file),;
        const stats = fs.statSync(filePath),;
        ;
        if (stats.isFile()) {;
          const ext = path.extname(file),;
          if (config.extensions.includes(ext)) {;
            const fileName = path.basename(file, ext),;
            ;
            // Skip excluded files;
            if (config.exclude.some(excluded => fileName.startsWith(excluded))) {;
              return,;
            }
;
            try {;
              const content = fs.readFileSync(filePath, 'utf8'),;
              const text = extractTextFromJSX(content),;
              ;
              const entry = {;
                id:`${type}-${fileName}`,;
                title:fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),;
                content:text.substring(0, 500), // Limit content length;
                url:`/${type === 'pages' ? '' :type + '/'}${fileName}`,;
                type:type,;
                lastModified:stats.mtime.toISOString();
              },;
;
              searchIndex[type].push(entry),;
            } catch (error) {;
              console.warn(`⚠️  Could not process ${filePath} `, error.message),;
              console.warn(`⚠️  Could not process ${filePath}:`, error.message)
            }
          }
        }
      }
    });
>>>>>>> origin/main
  }),;
  // Ensure output directory exists;
  if (!fs.existsSync(OUTPUT_DIR)) {;
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
<<<<<<< HEAD

  })

  // Ensure output directory exists#!/usr/bin/env node,"}),"})
=======



  })

  // Ensure output directory exists

  const indexPath = path && path.join(OUTPUT_DIR, 'index && index.json'),
  fs && fs.writeFileSync(indexPath, JSON && JSON.stringify(searchIndex, null, 2)),
  
  console && console.log(`✅ Search index generated at: ${indexPath}`),
  console && console.log(`📊 Indexed ${searchIndex && searchIndex.pages.length} pages and ${searchIndex && searchIndex.blog.length} blog posts`)
}

if (require && require.main === module) {
  generateSearchIndex()
}

module && module.exports = { generateSearchIndex },
#!/usr/bin/env node,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) ,"}),"}) function walk(dir,filelist = []) {,"}),"}) const files = fs && fs.readdirSync(dir,{ withFileTypes: true }),"}),"}) for (const entry of files) {,"}),"}) const full = path && path.join(dir,entry && entry.name),"}),"}) if (entry && entry.isDirectory()) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) filelist = walk(full,filelist),"}),"}) } else if (/\.(md|tsx?|jsx?)$/i && i.test(entry && entry.name)) {,"}),"}) filelist && filelist.push(full),"}),"}) }"}),"}) }"}),"}) return filelist,"}),"}) }"}),"}) ,"}),"}) function main() {,"}),"}) const repoRoot = process && process.cwd(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const index = [],"}),"}) for (const dir of srcDirs) {,"}),"}) if (!fs && fs.existsSync(dir)) continue,"}),"}) for (const file of walk(dir)) {,"}),"}) try {,"}),"}) const rel = path && path.relative(repoRoot,file),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) index && index.push({ file: rel,title }),"}),"}) } catch {}"}),"}) }"}),"}) }"}),"}) const outDir = path && path.join(repoRoot,,"}),"}) 'public'),"}),"}) if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir,{ recursive: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) `),"}),"}) }"}),"}) ,"}),"}) main(),"}),"}) ,"}),"}) filelist ; const repoRoot = process && process.cwd(); const srcDirs = [ path && path.join(repoRoot,'pages') path && path.join(repoRoot,'src') path && path.join(repoRoot,'components') ]; const index = []; for (const dir of srcDirs) { if (!fs && fs.existsSync(dir)) continue; for (const file of walk(dir)) {; try {; const rel = path && path.relative(repoRoot,file); const content = fs && fs.readFileSync(file,'utf8'); const titleMatch = content && content.match( /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/ ); const title = titleMatch ? titleMatch[1] || titleMatch[2] : path && path.basename(file); index && index.push({ file: rel,title })} catch {} } } const outDir = path && path.join(repoRoot,';public'); if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir,{ recursive: true }); const outPath = path && path.join(outDir,'search-index && index.json'); fs && fs.writeFileSync( outPath JSON && JSON.stringify( { generatedAt: new Date().toISOString(),items: index } null 2 ) ); `)} main();

  // // // console.log(`✅ Search index generated at: ${indexPath}`),
  // // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)
;
  // Write search index;
  const indexPath = path.join(OUTPUT_DIR, 'index.json'),;
  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),;
  // // // console.log(`✅ Search index generated at: ${indexPath}`),;
  // // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`);
  console.log(`✅ Search index generated at: ${indexPath}`),
  console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)
  const indexPath = path && path.join(OUTPUT_DIR, 'index && index.json'),
  fs && fs.writeFileSync(indexPath, JSON && JSON.stringify(searchIndex, null, 2)),
  
  console && console.log(`✅ Search index generated at: ${indexPath}`),
  console && console.log(`📊 Indexed ${searchIndex && searchIndex.pages.length} pages and ${searchIndex && searchIndex.blog.length} blog posts`)
}
if (require.main === module) {
  generateSearchIndex()
}
#!/usr/bin/env node,"}),"})
>>>>>>> origin/main
import fs from,"}),"})
  'fs',"}),"})
import path from,"}),"})
  'path',"}),"})
,"}),"})
function walk(dir, filelist = []) {,"}),"})
  const files = fs.readdirSync(dir, { "withFileTypes": true }),"}),"})
  for (const entry of files) {,"}),"})
    const full = path.join(dir, entry.name),"}),"})
    if (entry.isDirectory()) {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      filelist = walk(full, filelist),"}),"})
    } else if (/\.(md|tsx?|jsx?)$/i && i.test(entry && entry.name)) {,"}),"})
<<<<<<< HEAD
      filelist && filelist.push(full),"}),"})    }"}),"})
=======
      filelist && filelist.push(full),"}),"})
    }"}),"})
>>>>>>> origin/main
  }"}),"})
  return filelist,"}),"})
}"}),"})
,"}),"})
function main() {,"}),"})
  const repoRoot = process.cwd(),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
  const index = [],"}),"})
  for (const dir of srcDirs) {,"}),"})
    if (!fs.existsSync(dir)) continue,"}),"})
    for (const file of walk(dir)) {,"}),"})
      try {,"}),"})
        const rel = path.relative(repoRoot, file),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        index.push({ "file": rel, title }),"}),"})
      } catch {}"}),"})
    }"}),"})
  }"}),"})
  const outDir = path.join(repoRoot,,"}),"})
  'public'),"}),"})
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { "recursive": true }),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
<<<<<<< HEAD
  console && console.log(`✅ Search index "generated": ${outPath} (${index && index.length} items)`),"}),"})}"}),"})
=======
  console && console.log(`✅ Search index "generated": ${outPath} (${index && index.length} items)`),"}),"})
}"}),"})
>>>>>>> origin/main
,"}),"})
main(),"}),"})
,"}),"})
  return filelist}
function main() {const repoRoot = process.cwd();
  return filelist};
function main() {;
  const repoRoot = process.cwd();
  const srcDirs = [path.join(repoRoot, 'pages')
    path.join(repoRoot, 'src')
<<<<<<< HEAD
    path.join(repoRoot, 'components')      null
      2
    )
  );
  console && console.log(`✅ Search index "generated": ${outPath} (${index && index.length} items)`)}
main();  const indexPath = path.join(OUTPUT_DIR, 'index.json'),
  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),
  
=======
    path.join(repoRoot, 'components')

      filelist ;
  const repoRoot = process && process.cwd();
  const srcDirs = [path && path.join(repoRoot, 'pages')
    path && path.join(repoRoot, 'src')
    path && path.join(repoRoot, 'components')

  ];
  const index = [];
  for (const dir of srcDirs) {
    if (!fs && fs.existsSync(dir)) continue;
    for (const file of walk(dir)) {;
      try {;
        const rel = path && path.relative(repoRoot, file);
        const content = fs && fs.readFileSync(file, 'utf8');
        const titleMatch = content && content.match(
          /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/
        );
        const title = titleMatch

          ? titleMatch[1] || titleMatch[2]
          : path && path.basename(file);
        index && index.push({ "file": rel, title })} catch {}

    }
  }
  return filelist}
function main() {;
  const repoRoot = process.cwd();
  const srcDirs = [path.join(repoRoot, 'pages')
    path.join(repoRoot, 'src')
    path.join(repoRoot, 'components')
  ];
  const index = [];
  for (const dir of srcDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of walk(dir)) {;
      try {;
        const rel = path.relative(repoRoot, file);
        const content = fs.readFileSync(file, 'utf8');
        const titleMatch = content.match(
          /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/
        );
        const title = titleMatch
          ? titleMatch[1] || titleMatch[2]
          : path.basename(file);
        index.push({ "file": rel, title })} catch {}
    }
  }
  return filelist;
}

function main() {
  const repoRoot = process.cwd();
const srcDirs = [path.join(repoRoot,
  'pages'), path.join(repoRoot,
  'src'), path.join(repoRoot,
  'components')];const index = [];
  for (const dir of srcDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of walk(dir)) {
      try {
        const rel = path.relative(repoRoot, file);
const content = fs.readFileSync(file,
  'utf8');
        const titleMatch = content.match(/export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/);
        const title = titleMatch ? (titleMatch[1] || titleMatch[2]) : path.basename(file);index.push({ file: rel, title });
      } catch {}
    }
  }
  const outDir = path.join(repoRoot,
  'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir,
  'search-index.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), items: index }, null, 2));console.log(`✅ Search index generated: ${outPath} (${index.length} items)`);
}

const rel = path.relative(repoRoot, file);

const content = fs.readFileSync(file, 'utf8');'

const titleMatch = content.match(;
          /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/
        );

const title = titleMatch;
          ? titleMatch[1] |titleMatch[2]
          : path.basename(file);
        index.push({ "file": rel, title })} catch {}"
    }
  }

const outDir = path.join(repoRoot, ';public');'
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { "recursive": true });"

const outPath = path.join(outDir, 'search-index.json');'
  fs.writeFileSync(
    outPath,
JSON.stringify(
      { "generatedAt": new Date().toISOString(), "items": index }"
      null,
2
    )
  );
  console.log(`✅ Search index "generated": ${outPath} (${index.length} items)`)}
main();

#!/usr/bin/env node,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) ,"}),"}) function walk(dir,filelist = []) {,"}),"}) const files = fs.readdirSync(dir,{ withFileTypes: true }),"}),"}) for (const entry of files) {,"}),"}) const full = path.join(dir,entry.name),"}),"}) if (entry.isDirectory()) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) filelist = walk(full,filelist),"}),"}) } else if (/\.(md|tsx?|jsx?)$/i.test(entry.name)) {,"}),"}) filelist.push(full),"}),"}) }"}),"}) }"}),"}) return filelist,"}),"}) }"}),"}) ,"}),"}) function main() {,"}),"}) const repoRoot = process.cwd(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const index = [],"}),"}) for (const dir of srcDirs) {,"}),"}) if (!fs.existsSync(dir)) continue,"}),"}) for (const file of walk(dir)) {,"}),"}) try {,"}),"}) const rel = path.relative(repoRoot,file),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) index.push({ file: rel,title }),"}),"}) } catch {}"}),"}) }"}),"}) }"}),"}) const outDir = path.join(repoRoot,,"}),"}) 'public'),"}),"}) if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{ recursive: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`✅ Search index generated: ${outPath} (${index.length} items)`),"}),"}) }"}),"}) ,"}),"}) main(),"}),"}) ,"}),"}) filelist.push(full)} } return filelist} function main() {const repoRoot = process.cwd(); const srcDirs = [ path.join(repoRoot,'pages') path.join(repoRoot,'src') path.join(repoRoot,'components') ]; const index = []; for (const dir of srcDirs) { if (!fs.existsSync(dir)) continue; for (const file of walk(dir)) {; try {; const rel = path.relative(repoRoot,file); const content = fs.readFileSync(file,'utf8'); const titleMatch = content.match( /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/ ); const title = titleMatch ? titleMatch[1] |titleMatch[2] : path.basename(file); index.push({ file: rel,title })} catch {} } } const outDir = path.join(repoRoot,';public'); if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{ recursive: true }); const outPath = path.join(outDir,'search-index.json'); fs.writeFileSync( outPath JSON.stringify( { generatedAt: new Date().toISOString(),items: index } null 2 ) ); console.log(`✅ Search index generated: ${outPath} (${index.length} items)`)} main();
module.exports = { generateSearchIndex }

;
module.exports = { generateSearchIndex },;
module.exports = { generateSearchIndex },
  // // // console.log(`✅ Search index generated at: ${indexPath}`),
  // // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)
;
>>>>>>> origin/main
  // Write search index;
  const indexPath = path.join(OUTPUT_DIR, 'index.json'),;
  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),;
  // // // console.log(`✅ Search index generated at: ${indexPath}`),;
  // // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`);
}
;
if (require.main === module) {;
  generateSearchIndex();
}
;
module.exports = { generateSearchIndex },;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/main
