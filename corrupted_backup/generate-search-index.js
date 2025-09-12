>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/generate-search-index.js
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
  const outDir = path.join(repoRoot, ';public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { "recursive": true });
  const outPath = path.join(outDir, 'search-index.json');
  fs.writeFileSync(
    outPath
    JSON.stringify(
      { "generatedAt": new Date().toISOString(), "items": index }
      null
      2
    )
  );
  console.log(`✅ Search index "generated": ${outPath} (${index.length} items)`)}
main();
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
#!/usr/bin/env node,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) ,"}),"}) function walk(dir,filelist = []) {,"}),"}) const files = fs.readdirSync(dir,{ withFileTypes: true }),"}),"}) for (const entry of files) {,"}),"}) const full = path.join(dir,entry.name),"}),"}) if (entry.isDirectory()) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) filelist = walk(full,filelist),"}),"}) } else if (/\.(md|tsx?|jsx?)$/i.test(entry.name)) {,"}),"}) filelist.push(full),"}),"}) }"}),"}) }"}),"}) return filelist,"}),"}) }"}),"}) ,"}),"}) function main() {,"}),"}) const repoRoot = process.cwd(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const index = [],"}),"}) for (const dir of srcDirs) {,"}),"}) if (!fs.existsSync(dir)) continue,"}),"}) for (const file of walk(dir)) {,"}),"}) try {,"}),"}) const rel = path.relative(repoRoot,file),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) index.push({ file: rel,title }),"}),"}) } catch {}"}),"}) }"}),"}) }"}),"}) const outDir = path.join(repoRoot,,"}),"}) 'public'),"}),"}) if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{ recursive: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`✅ Search index generated: ${outPath} (${index.length} items)`),"}),"}) }"}),"}) ,"}),"}) main(),"}),"}) ,"}),"}) filelist.push(full)} } return filelist} function main() {; const repoRoot = process.cwd(); const srcDirs = [ path.join(repoRoot,'pages') path.join(repoRoot,'src') path.join(repoRoot,'components') ]; const index = []; for (const dir of srcDirs) { if (!fs.existsSync(dir)) continue; for (const file of walk(dir)) {; try {; const rel = path.relative(repoRoot,file); const content = fs.readFileSync(file,'utf8'); const titleMatch = content.match( /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/ ); const title = titleMatch ? titleMatch[1] || titleMatch[2] : path.basename(file); index.push({ file: rel,title })} catch {} } } const outDir = path.join(repoRoot,';public'); if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{ recursive: true }); const outPath = path.join(outDir,'search-index.json'); fs.writeFileSync( outPath JSON.stringify( { generatedAt: new Date().toISOString(),items: index } null 2 ) ); console.log(`✅ Search index generated: ${outPath} (${index.length} items)`)} main();
#!/usr/bin/env node /** * Generate Search Index * Creates a search index for the website content */function extractTextFromJSX (content) {
  //Simple text extraction from JSX/TSX content return content .replace (/export.*?function.*? {
  /g, '') //Remove function declarations .replace (/[ {
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/generate-search-index.js
  
}() ]/g, ' ') //Remove brackets 
}const entry = {
  id: `$ {
  type 
}-$ {
  fileName 
}`;
title: fileName.replace (/-/g, ' ') .replace (/\b\w/g, l => l.toUpperCase () );
content: text.substring (0, 500), //Limit content length url: `/$ {
  type === 'pages'? '': type + '/' 
}$ {
  fileName 
}`;
type: type;
lastModified: stats.mtime.toISOString () 
};
}
}
}
}) 
});
// Ensure output directory exists 
}if (require.main === module) {
  generateSearchIndex () 
}module.exports = {
  generateSearchIndex 
};
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/generate-search-index.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/generate-search-index.js
