<<<<<<< HEAD
#!/"usr/bin/env" node;
#!/usr/bin/env node;
const fs = require("fs);
const path = require(path");

const exts = new Set([".js, .jsx", ".ts, .tsx"]);
=======
#!/usr/bin/env node;"
#!/usr/bin/env node"
const fs = require("fs");
const path = require("path");
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);"
>>>>>>> origin/chore/fix-lint-and-merge
/**;
 * Returns true if the file should be processed;
 */;
function shouldProcess(filePath) {}
  const ext = path.extname(filePath);
  return exts.has(ext)}
/**;
 * Clean content by removing stray trailing apostrophes introduced at EOL;
function cleanContent(content) {}
  // Line-level fixes;
  const lines = content.split(/\r?\n/).map(line =>;)
    line;
<<<<<<< HEAD
      // Remove a single trailing apostrophe after common closing tokens;
      .replace(/([)}\]>])\s*"\s*$/u, $1);
      .replace(/>\s*"\s*$/u, ">);
      .replace(/^\s*$/u, "");
  );

  let out = lines.join(\n);
=======
      // Remove a single trailing apostrophe after common closing tokens;"
      .replace(/([)}\]>])\s*"\s*$/u, "$1");
      .replace(/>\s*"\s*$/u, ">");
      .replace(/^"\s*$/u, );"
  );"
  let out = lines.join("\n");"
>>>>>>> origin/chore/fix-lint-and-merge
  // In-line fixes across the whole file;
  out = out;"
    // Comma followed by stray apostrophe (e.g., "Shield,");
<<<<<<< HEAD
    .replace(/,\s*/g, ,");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, $1);
    // "JSX": >< to ><;

  // In-line fixes across the whole file;
  out = out;
    // Comma followed by stray apostrophe (e.g., Shield,");
    .replace(/,\s*"/g, ,);
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*[", )}\]]|\s*$)/g, "$1");
    // JSX: >"< to ><;
    .replace(/>\s*"\s*</g, ><);

  return out}
function walk(dir, files = []) {}
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
  if (entry.name === node_modules || entry.name.startsWith(".git"));
      continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {}
  walk(p, files)} else if (shouldProcess(p)) {}
  files.push(p)}
  }
  return files}
=======
    .replace(/,\s*"/g, ",");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;"
  // In-line fixes across the whole file;

    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
    .replace(/>\s*"\s*</g, "><");"
  return out};
function walk(dir, files = []) {}"
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
  if (entry.name === "node_modules" || entry.name.startsWith(".git"));"
      continue;"
    const p = path.join(dir, "entry.name);"
    if (entry.isDirectory()) {}"
  walk(p", files)} else if (shouldProcess(p)) {}"
  files.push(p)};
  };
  return files};
>>>>>>> origin/chore/fix-lint-and-merge
function $1() {}
  const root = process.cwd();
  const files = walk(root);
  let changed = 0;
  for (const f of files) {}
  try {}"
  const original = fs.readFileSync(f, "utf8");"
      const updated = cleanContent(original);
<<<<<<< HEAD
      if (updated !== original) {}
  fs.writeFileSync(f, updated, "utf8');
        changed += 1}
    } catch (e) {}

=======
      if (updated !== original) {}"

        changed += 1};
    } catch (e) {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
  
  
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
} catch (e) {}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // ignore file-level errors} catch (e) {}
<<<<<<< HEAD
  // ignore file-level errors}
  }
  console.log(`Cleaned ${changed} files.`)}
if (require.main === module) {}

=======
  // ignore file-level errors};
  console.log(`Cleaned ${changed} files.`)};
if (require.main === module) {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
  main()};
  main()};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  main()};
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
