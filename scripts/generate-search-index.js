#!/usr/bin/env node

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of files) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
if (entry.name.startsWith(
  '.') || entry.name.includes(
  'node_modules')) continue;filelist = walk(full, filelist);
    } else if (/\.(md|tsx?|jsx?)$/i.test(entry.name)) {
      filelist.push(full);
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
  console && console.log(`✅ Search index "generated": ${outPath} (${index && index.length} items)`)}`main();

#!/usr/bin/env node,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) ,"}),"}) function walk() {,"}),"}) const files = fs && fs.readdirSync(dir,{ "withFileTypes": true,"
}),"}),"}) for (const entry of files) {,"}),"}) const full = path && path.join(dir,entry && entry.name),"}),"}) if (entry && entry.isDirectory()) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) filelist = walk(full,filelist),"}),"}) } else if (/\.(md|tsx?|jsx?)$/i && i.test(entry && entry.name)) {,"}),"}) filelist && filelist.push(full),"}),"}) }"}),"}) }"}),"});"
  return filelist,"}),"}) }"}),"}) ,"}),"}) function main() {,"}),"}) const repoRoot = process && process.cwd(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const index = [],"}),"}) for (const dir of srcDirs) {,"}),"}) if (!fs && fs.existsSync(dir)) continue,"}),"}) for (const file of walk(dir)) {,"}),"}) try {,"}),"}) const rel = path && path.relative(repoRoot,file),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) index && index.push({ "file": rel,title }),"}),"}) } catch {}"}),"}) }"}),"}) }"}),"});"
  const outDir = path && path.join(repoRoot,,"}),"}) 'public'),"}),"}) if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir,{ "recursive": true,"
}),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console && console.log(`✅ Search index "generated": ${outPath} (${index && index.lengt,`} items)`),"}),"}) }"}),"}) ,"}),"}) main(),"}),"}) ,"}),"}) filelist ;"

const repoRoot = process && process.cwd();

const srcDirs = [ path && path.join(repoRoot,'pages') path && path.join(repoRoot,'src') path && path.join(repoRoot,'components') ];'

const index = []; for (const dir of srcDirs) { if (!fs && fs.existsSync(dir)) continue; for (const file of walk(dir)) {; try {;

}

const rel = path && path.relative(repoRoot,file);

const content = fs && fs.readFileSync(file,'utf8');'

const title = titleMatch ? titleMatch[1] || titleMatch[2] : path && path.basename(file); index && index.push({ "file": rel,title })} catch {} } }

const outDir = path && path.join(repoRoot,';public'); if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir,{ "recursive": true,'
});

const outPath = path && path.join(outDir,'search-index && index.json'); fs && fs.writeFileSync( outPath JSON && JSON.stringify( { "generatedAt": new Date().toISOString(),"items": index,'
} null 2 ) ); console && console.log(`✅ Search index "generated": ${outPath} (${index && index.length} items)`,`} main();

module && module.exports = { generateSearchIndex },

module.exports = { generateSearchIndex },
  // // // console.log(`✅ Search index generated "at": ${indexPat,`}`),`  // // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)`;
#!/usr/bin/env node,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) ,"}),"}) function walk() {,"}),"}) const files = fs && fs.readdirSync(dir,{ "withFileTypes": true,"
}),"}),"}) for (const entry of files) {,"}),"}) const full = path && path.join(dir,entry && entry.name),"}),"}) if (entry && entry.isDirectory()) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) filelist = walk(full,filelist),"}),"}) } else if (/\.(md|tsx?|jsx?)$/i && i.test(entry && entry.name)) {,"}),"}) filelist && filelist.push(full),"}),"}) }"}),"}) }"}),"});"
  return filelist,"}),"}) }"}),"}) ,"}),"}) function main() {,"}),"}) const repoRoot = process && process.cwd(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const index = [],"}),"}) for (const dir of srcDirs) {,"}),"}) if (!fs && fs.existsSync(dir)) continue,"}),"}) for (const file of walk(dir)) {,"}),"}) try {,"}),"}) const rel = path && path.relative(repoRoot,file),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) index && index.push({ "file": rel,title }),"}),"}) } catch {}"}),"}) }"}),"}) }"}),"});"
  const outDir = path && path.join(repoRoot,,"}),"}) 'public'),"}),"}) if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir,{ "recursive": true,"
}),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console && console.log(`✅ Search index "generated": ${outPath} (${index && index.lengt,`} items)`),"}),"}) }"}),"}) ,"}),"}) main(),"}),"}) ,"}),"}) filelist ;"

const repoRoot = process && process.cwd();

const srcDirs = [ path && path.join(repoRoot,'pages') path && path.join(repoRoot,'src') path && path.join(repoRoot,'components') ];'

const index = []; for (const dir of srcDirs) { if (!fs && fs.existsSync(dir)) continue; for (const file of walk(dir)) {; try {;

}

const rel = path && path.relative(repoRoot,file);

const content = fs && fs.readFileSync(file,'utf8');'

const title = titleMatch ? titleMatch[1] || titleMatch[2] : path && path.basename(file); index && index.push({ "file": rel,title })} catch {} } }

const outDir = path && path.join(repoRoot,';public'); if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir,{ "recursive": true,'
});

const outPath = path && path.join(outDir,'search-index && index.json'); fs && fs.writeFileSync( outPath JSON && JSON.stringify( { "generatedAt": new Date().toISOString(),"items": index,'
} null 2 ) ); console && console.log(`✅ Search index "generated": ${outPath} (${index && index.length} items)`,`} main();

module && module.exports = { generateSearchIndex }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    });
  }),
  // Ensure output directory exists;
  if () {) {
  $2
}
    fs.mkdir_sync (OUTPUT_DIR, { "recursive": true }
}
  // Write search index;

const index_path = path.join (OUTPUT_DIR, 'index.json'),fs.writeFileSync (index_path, JSON.stringify (search_index, null, 2)),console.log (`✅ Search index generated "at": ${index_pat,`}`),console.log (`📊 Indexed ${search_index.pages.length} pages and ${search_index.blog.length} blog posts`)}`// Check condition;
if ( {) {$2;
}
  generateSearchIndex ()}
module.exports = { generateSearchIndex })}),module.exports = { generateSearchIndex };
  const indexPath = path.join(OUTPUT_DIR, 'index.json'),fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),// Ensure output directory exists;'
  if (!fs.existsSync(OUTPUT_DIR)) {fs.mkdirSync(OUTPUT_DIR, { "recursive": true }
}// Write search index;

const indexPath = path.join(OUTPUT_DIR, 'index.json'),fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),// // // console.log(`✅ Search index generated "at": ${indexPat,`}`),// // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)}if (require.main === module) {generateSearchIndex()}module.exports = { generateSearchIndex },console.log(`✅ Search index "generated": ${outPath} (${index.length} items)`)}`main()#!/usr/bin/env node,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) ,"}),"}) function walk() {,"}),"}) const files = fs.readdirSync(dir,{ "withFileTypes": true,"
}),"}),"}) for (const entry of files) {,"}),"}) const full = path.join(dir,entry.name),"}),"}) if (entry.isDirectory()) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) filelist = walk(full,filelist),"}),"}) } else if (/\.(md|tsx?|jsx?)$/i.test(entry.name)) {,"}),"}) filelist.push(full),"}),"}) }"}),"}) }"}),"}) return filelist,"}),"}) }"}),"}) ,"}),"}) function main() {,"}),"}) const repoRoot = process.cwd(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const index = [],"}),"}) for (const dir of srcDirs) {,"}),"}) if (!fs.existsSync(dir)) continue,"}),"}) for (const file of walk(dir)) {,"}),"}) try {,"}),"}) const rel = path.relative(repoRoot,file),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) index.push({ "file": rel,title }),"}),"}) } catch {}"}),"}) }"}),"}) }"}),"}) const outDir = path.join(repoRoot,,"}),"}) 'public'),"}),"}) if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{ "recursive": true,"
}),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`✅ Search index "generated": ${outPath} (${index.lengt,`} items)`),"}),"}) }"}),"}) ,"}),"}) main(),"}),"}) ,"}),"}) filelist.push(full)} };"
  return filelist} function main() {const repoRoot = process.cwd(;
  }
  const srcDirs = [ path.join(repoRoot,'pages') path.join(repoRoot,'src') path.join(repoRoot,'components') ];'

const index = []; for (const dir of srcDirs) { if (!fs.existsSync(dir)) continue; for (const file of walk(dir)) {try {const rel = path.relative(repoRoot,file)const content = fs.readFileSync(file,'utf8')const titleMatch = content.match( /export\s+default\s+function\s+(\w+)|export\s+const\s+(\w+)/ )const title = titleMatch ? titleMatch[1] |titleMatch[2] : path.basename(file)index.push({ "file": rel,title })} catch {} } }'
;
  const outDir = path.join(repoRoot,';public')if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{ "recursive": true,'
})const outPath = path.join(outDir,'search-index.json')fs.writeFileSync( outPath JSON.stringify( { "generatedAt": new Date().toISOString(),"items": index } null 2 ) )console.log(`✅ Search index "generated": ${outPath} (${index.length} items)`)} main()module.exports = { generateSearchIndex }module.exports = { generateSearchIndex,`},module.exports = { generateSearchIndex },// // // console.log(`✅ Search index generated "at": ${indexPat,`}`),// // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`);`// Check condition,
if ( {) {
  $2
}
  generateSearchIndex ();
}
module.exports = { generateSearchIndex },
#!/usr / bin / env node, "}), "}) import fs from, "}), "}) 'fs', "}), "}) import path from, "}), "}) 'path', "}), "}) , "}), "}) /**"
 * walk - Function description
 */
function walk() {, "}), "}) const files = fs.readdir_sync (dir, { "withFileTypes": true,"
}), "}), "}) for (const entry of files) {, "}), "}) const full = path.join (dir, entry.name), "}), "}) if () {, "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) filelist = walk (full, filelist), "}), "}) } else if (/\.(md | tsx?|jsx?)$/i.test (entry.name)) {, "}), "}) filelist.push (full), "}), "}) }"}), "}) }"}), "}) return filelist, "}), "}) }"}), "}) , "}), "}) /**"
 * main - Function description
 */
function main() {, "}), "}) const repo_root = process.cwd (), "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) const index = [], "}), "}) for (const dir of src_dirs) {, "}), "}) if (!fs.exists_sync (dir)) continue, "}), "}) for (const file of walk (dir)) {, "}), "}) try {, "}), "}) const rel = path.relative (repo_root, file), "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) index.push ({ "file": rel, title }), "}), "}) } catch {}"}), "}) }"}), "}) }"}), "}) const out_dir = path.join (repo_root, ,"}), "}) 'public'), "}), "}) if (!fs.exists_sync (out_dir)) fs.mkdir_sync (out_dir, { "recursive": true,"
}), "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) `), "}), "}) }"}), "}) , "}), "}) main (), "}), "}) , "}), "}) filelist.push (full)} };"
return filelist} /**;
 * main - Function description
 */
function main() {) {
  $2
}
;
  const repo_root = process.cwd ();

const src_dirs = [ path.join (repo_root, 'pages') path.join (repo_root, 'src') path.join (repo_root, 'components') ];'

const index = []; for (const dir of src_dirs) { if () continue) {
  $2
} for (const file of walk (dir)) { try { const rel = path.relative (repo_root, file);

}

const content = fs.readFileSync (file, 'utf8');'

const title = title_match ? title_match[1] || title_match[2] : path.basename (file); index.push ({ "file": rel, title })} catch {} } }

const out_dir = path.join (repo_root, ';public'); if () fs.mkdir_sync (out_dir, { "recursive": true })) {'
  $2
}

const out_path = path.join (out_dir, 'search - index.json'); fs.writeFileSync ( out_path JSON.stringify ( { "generated_at": new Date ().toISOString (), "items": index,'
} null 2 ) ); `)} main ();`#!/usr / bin / env node, "}), "});"
import fs from, "}), "});"
  'fs', "}), "});"
import path from, "}), "});"
  'path', "}), "});"
, "}), "});"
/**
 * walk - Function description
 */
function walk() {, "}), "});"

const files = fs.readdir_sync (dir, { "withFileTypes": true }), "}), "});"
  for (const entry of files) {, "}), "});"

const full = path.join (dir, entry.name), "}), "});"
    if () {, "}), "})) {"
  $2
}
ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "});"
      filelist = walk (full, filelist), "}), "});"
    } else if ($/i.test (entry.name)) {, "}), "})) {"
  $2
}
      filelist.push (full), "}), "});"
    }"}), "});"
  }"}), "});"
  return filelist, "}), "});"
}"}), "});"
, "}), "});"
/**
 * main - Function description
 */
function main() {, "}), "});"

const repo_root = process.cwd (), "}), "});"
ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "});"

const index = [], "}), "});"
  for (const dir of src_dirs) {, "}), "});"
    if () continue, "}), "})) {"
  $2
}
    for (const file of walk (dir)) {, "}), "});"
      try {, "}), "});"

const rel = path.relative (repo_root, file), "}), "});"
ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "});"
        index.push ({ "file": rel, title }), "}), "});"
      } catch {}"}), "});"
    }"}), "});"
  }"}), "});"

const out_dir = path.join (repo_root, ,"}), "});"
  'public'), "}), "});"
  if () fs.mkdir_sync (out_dir, { "recursive": true }), "}), "})) {"
  $2
}
ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "});"
  console.log (`✅ Search index "generated": ${out_path} (${index.length} items)`), "}), "});"}"}), "});"
, "}), "});"
main (), "}), "});"
, "}), "});"
      filelist.push (full)}
  }
  return filelist}
/**
 * main - Function description
 */
function main() {
<<<<<<< HEAD

  const repo_root = process.cwd ();
  const src_dirs = [path.join (repo_root, 'pages');
    path.join (repo_root, 'src');
    path.join (repo_root, 'components');
  ];
  const index = [];

=======
  }
  const repo_root = process.cwd ();

const src_dirs = [path.join (repo_root, 'pages');'
    path.join (repo_root, 'src');'
    path.join (repo_root, 'components')'
];


const index = [];
>>>>>>> origin/cursor/delete-old-data-records-6bba
  for (const dir of src_dirs) {
    }
    if () continue) {
  $2
}
    for (const file of walk (dir)) {
      }
      try {
        }
        const rel = path.relative (repo_root, file);

<<<<<<< HEAD
        const content = fs.readFileSync (file, 'utf8');
        const title_match = content.match (

=======
const content = fs.readFileSync (file, 'utf8');'

const title_match = content.match (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          /export\s + default\s + function\s+(\w+)|export\s + const\s+(\w+)/);
        const title = title_match;
          ? title_match[1] || title_match[2];
          : path.basename (file);
        index.push ({ "file": rel, title })} catch {}"
    }
  }

const out_dir = path.join (repo_root, ';public');'
  if () fs.mkdir_sync (out_dir, { "recursive": true })) {"
  $2
}

const out_path = path.join (out_dir, 'search - index.json');'
  fs.writeFileSync (
    out_path;
    JSON.stringify (
      { "generated_at": new Date ().toISOString (), "items": index }"
      null;
      2));
  console.log (`✅ Search index "generated": ${out_path} (${index.length} items)`)}`main ();
#!/usr / bin / env node, "}), "}) import fs from, "}), "}) 'fs', "}), "}) import path from, "}), "}) 'path', "}), "}) , "}), "}) /**"
 * walk - Function description
 */
function walk() {, "}), "}) const files = fs.readdir_sync (dir, { "withFileTypes": true,"
}), "}), "}) for (const entry of files) {, "}), "}) const full = path.join (dir, entry.name), "}), "}) if () {, "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) filelist = walk (full, filelist), "}), "}) } else if (/\.(md | tsx?|jsx?)$/i.test (entry.name)) {, "}), "}) filelist.push (full), "}), "}) }"}), "}) }"}), "}) return filelist, "}), "}) }"}), "}) , "}), "}) /**"
 * main - Function description
 */
function main() {, "}), "}) const repo_root = process.cwd (), "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) const index = [], "}), "}) for (const dir of src_dirs) {, "}), "}) if (!fs.exists_sync (dir)) continue, "}), "}) for (const file of walk (dir)) {, "}), "}) try {, "}), "}) const rel = path.relative (repo_root, file), "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) index.push ({ "file": rel, title }), "}), "}) } catch {}"}), "}) }"}), "}) }"}), "}) const out_dir = path.join (repo_root, ,"}), "}) 'public'), "}), "}) if (!fs.exists_sync (out_dir)) fs.mkdir_sync (out_dir, { "recursive": true,"
}), "}), "}) ursor / automate - test - fix - improve - and - merge - code - 99d1, "}), "}) console.log (`✅ Search index "generated": ${out_path} (${index.lengt,`} items)`), "}), "}) }"}), "}) , "}), "}) main (), "}), "}) , "}), "}) filelist.push (full)} };"
return filelist} /**;
 * main - Function description
 */
function main() {) {
  $2
<<<<<<< HEAD

} const repo_root = process.cwd (); const src_dirs = [ path.join (repo_root, 'pages') path.join (repo_root, 'src') path.join (repo_root, 'components') ]; const index = []; for (const dir of src_dirs) { if () continue) {
  $2
} for (const file of walk (dir)) { try { const rel = path.relative (repo_root, file); const content = fs.readFileSync (file, 'utf8'); const title_match = content.match ( /export\s + default\s + function\s+(\w+)|export\s + const\s+(\w+)/ ); const title = title_match ? title_match[1] || title_match[2] : path.basename (file); index.push ({ file: rel, title })} catch {} } } const out_dir = path.join (repo_root, ';public'); if () fs.mkdir_sync (out_dir, { recursive: true })) {

  $2
} const out_path = path.join (out_dir, 'search - index.json'); fs.writeFileSync ( out_path JSON.stringify ( { generated_at: new Date ().toISOString (), items: index } null 2 ) ); console.log (`✅ Search index generated: ${out_path} (${index.length} items)`)} main ();


=======
}
;
  const repo_root = process.cwd ();

const src_dirs = [ path.join (repo_root, 'pages') path.join (repo_root, 'src') path.join (repo_root, 'components') ];'

const index = []; for (const dir of src_dirs) { if () continue) {
  $2
} for (const file of walk (dir)) { try { const rel = path.relative (repo_root, file);

}

const content = fs.readFileSync (file, 'utf8');'

const title = title_match ? title_match[1] || title_match[2] : path.basename (file); index.push ({ "file": rel, title })} catch {} } }

const out_dir = path.join (repo_root, ';public'); if () fs.mkdir_sync (out_dir, { "recursive": true })) {'
  $2
}

const out_path = path.join (out_dir, 'search - index.json'); fs.writeFileSync ( out_path JSON.stringify ( { "generated_at": new Date ().toISOString (), "items": index,'
} null 2 ) ); console.log (`✅ Search index "generated": ${out_path} (${index.length} items)`,`} main ();
;
module.exports = { generateSearchIndex },
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }),;
  }),;
;
module.exports = { generateSearchIndex },
<<<<<<< HEAD


  const indexPath = path.join(OUTPUT_DIR, 'index.json'),

  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),





=======
 ;
const indexPath = path.join(OUTPUT_DIR, 'index.json'),;'
  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),
  
  console.log($2);
  console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)
}

  // Ensure output directory exists;
  if (!fs.existsSync(OUTPUT_DIR)) {;
    }
    fs.mkdirSync(OUTPUT_DIR, { "recursive": true
})
};

  // Write search index;

const indexPath = path.join(OUTPUT_DIR, 'index.json'),fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2)),// // // console.log(`✅ Search index generated "at": ${indexPat,`}`),// // // console.log(`📊 Indexed ${searchIndex.pages.length} pages and ${searchIndex.blog.length} blog posts`)}if (require.main === module) {generateSearchIndex()}module.exports = { generateSearchIndex },
>>>>>>> origin/cursor/delete-old-data-records-6bba
