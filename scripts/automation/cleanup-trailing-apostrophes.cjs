#!/""usr/bin/env"" node;
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");

const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);
#!/usr/bin/env node;"
<<<<<<< HEAD
=======
#!/usr/bin/env node
const exts = new Set([.js", ".jsx, .ts", ".tsx]);
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);
=======
#!/usr/bin/env node;"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
#!/usr/bin/env node"
const fs = require("fs");
const path = require("path");
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);"
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
/**;
 * Returns true if the file should be processed;
 */;
function shouldProcess(filePath) {}
<<<<<<< HEAD
  const ext = path.extname(filePath)
  return exts.has(ext)}
/**
 * Clean content by removing stray trailing apostrophes introduced at EOL
=======
  const ext = path.extname(filePath);
  return exts.has(ext)};
;
/**;
 * Clean content by removing stray trailing apostrophes introduced at EOL;
>>>>>>> merged-prs-20250907-203621
function cleanContent(content) {}
  // Line-level fixes
  const lines = content.split(/\r?\n/).map(line =>;)
    line
      // Remove a single trailing apostrophe after common closing tokens;"
<<<<<<< HEAD
      .replace(/([)}\]>])\s*"\s*$/u, "$1");
      .replace(/>\s*"\s*$/u, ">");
      .replace(/^"\s*$/u, );"
=======
<<<<<<< HEAD
      .replace(/([)}\]>])\s*"\s*$/u, "$1")
      .replace(/>\s*"\s*$/u, ">")
      .replace(/^"\s*$/u, );"
  );

  let out = lines.join("\n");
"
  let out = lines.join("\n");"
  // In-line fixes across the whole file;
  out = out;"
    // Comma followed by stray apostrophe (e.g., "Shield,");
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*["", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;

  // In-line fixes across the whole file;
  out = out;"
    // Comma followed by stray apostrophe (e.g., "Shield,");
<<<<<<< HEAD

    .replace(/,\s*"/g, ",");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;"


  // In-line fixes across the whole file;

    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
    .replace(/>\s*"\s*</g, "><");

  return out};
=======
=======
    .replace(/>\s*\s*</g, ><");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> merged-prs-20250907-203621


<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  return out}
function walk(dir, files = []) {}
  for (const entry of fs.readdirSync(dir, { withFileTypes": true })) {}
  if (entry.name === "node_modules || entry.name.startsWith(.git"));"
      continue;
    const p = path.join(dir, entry.name);"
=======
<<<<<<< HEAD
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*["", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    .replace(/,\s*"/g, ",");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> merged-prs-20250907-203621
  // In-line fixes across the whole file;

    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
<<<<<<< HEAD
    .replace(/>\s*"\s*</g, "><");
    .replace(/>\s*"\s*</g, "><");"


=======
<<<<<<< HEAD
    .replace(/>\s*"\s*</g, "><");
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    .replace(/>\s*"\s*</g, "><");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> merged-prs-20250907-203621
  return out};
    // Comma followed by stray apostrophe (e.g., "Shield,")
    .replace(/,\s*"/g, ",")
    // Remove apostrophe after closing tokens if followed by punctuation or end
    .replace(/([)}>])\s*"\s*(?=\s*["", ")}\]"]|\s*$)/g, "$1")
    // "JSX": >"< to ><
    .replace(/,\s*"/g, ",");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, "$1")
    // "JSX": >"< to ><;"

  // In-line fixes across the whole file
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
.replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1")
    // "JSX": >"< to ><
    .replace(/>\s*"\s*</g, "><")
    .replace(/>\s*"\s*</g, "><");"

  return out}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
function walk(dir, files = []) {}"
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
  if (entry.name === "node_modules" || entry.name.startsWith(".git"));"
      continue;"
    const p = path.join(dir, "entry.name);"
<<<<<<< HEAD
    if (entry.isDirectory()) {}"
  walk(p", files)} else if (shouldProcess(p)) {}"
  files.push(p)};
  };
  return files};
=======
>>>>>>> origin/chore/fix-lint-and-merge
    if (entry.isDirectory()) {}"
<<<<<<< HEAD
  walk(p", files)} else if (shouldProcess(p)) {}"
=======
  walk(p, files)} else if (shouldProcess(p)) {}
>>>>>>> merged-prs-20250907-203621
  files.push(p)}
  }
  return files}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
function $1() {}
  const root = process.cwd()
  const files = walk(root)
  let changed = 0
  for($2) {}
  try {}"
<<<<<<< HEAD
  const original = fs.readFileSync(f, "utf8");"
=======
<<<<<<< HEAD
  const original = fs.readFileSync(f, "utf8");"
      const updated = cleanContent(original)
  if($2) {}"

        changed += 1}
    } catch (e) {}

  
  

=======
  const original = fs.readFileSync(f, "utf8);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const updated = cleanContent(original);
      if (updated !== original) {}"

        changed += 1};
    } catch (e) {}
  
} catch (e) {}
=======
<<<<<<< HEAD

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> origin/chore/fix-lint-and-merge
} catch (e) {}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> merged-prs-20250907-203621
  // ignore file-level errors} catch (e) {}
  // ignore file-level errors};
  console.log(`Cleaned ${changed} files.`)};
if (require.main === module) {}
  main()};
