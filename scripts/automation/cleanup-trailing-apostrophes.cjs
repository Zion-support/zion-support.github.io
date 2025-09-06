<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/""usr/bin/env"" node;
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);
/**;
 * Returns true if the file should be processed;
 */;
function shouldProcess(filePath) {}
  const ext = path.extname(filePath);
  return exts.has(ext)};
;
/**;
 * Clean content by removing stray trailing apostrophes introduced at EOL;
 */;
function cleanContent(content) {}
  // Line-level fixes;
  const lines = content.split(/\r?\n/).map(line =>;)
    line;
      // Remove a single trailing apostrophe after common closing tokens;
      .replace(/([)}\]>])\s*"\s*$/u, "$1");
      .replace(/>\s*"\s*$/u, ">");
      .replace(/^"\s*$/u, "");
  );
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  let out = lines.join("\n");
  // In-line fixes across the whole file;
  out = out;
    // Comma followed by stray apostrophe (e.g., "Shield,");
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*["", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  // In-line fixes across the whole file;
  out = out;
    // Comma followed by stray apostrophe (e.g., Shield,"");
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
    .replace(/>\s*"\s*</g, "><");
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return out};
;
function walk(dir, files = []) {}
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
  if (entry.name === "node_modules" || entry.name.startsWith(".git"));
      continue;
    const p = path.join(dir, "entry.name);
    if (entry.isDirectory()) {}
  walk(p", files)} else if (shouldProcess(p)) {}
  files.push(p)};
  };
  return files};
;
function $1() {}
  const root = process.cwd();
  const files = walk(root);
  let changed = 0;
  for (const f of files) {}
  try {}
  const original = fs.readFileSync(f, "utf8");
      const updated = cleanContent(original);
      if (updated !== original) {}
  fs.writeFileSync(f, updated, "utf8');
        changed += 1};
    } catch (e) {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

  

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
} catch (e) {}
  // ignore file-level errors} catch (e) {}
  // ignore file-level errors};
  };
  console.log(`Cleaned ${changed} files.`)};
;
if (require.main === module) {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  main()};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  main()};
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  main()};
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

  main()};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
