<<<<<<< HEAD
#!/""usr/bin/env"" node;
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");


=======
<<<<<<< HEAD

#!/"usr/bin/env" node;
#!/usr/bin/env node;
const fs = require("fs);
const path = require(path");

=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
const exts = new Set([".js, .jsx", ".ts, .tsx"]);
#!/usr/bin/env node;"
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
#!/usr/bin/env node"
const fs = require("fs");
const path = require("path");
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
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
  return exts.has(ext)}
/**;
 * Clean content by removing stray trailing apostrophes introduced at EOL;
>>>>>>> merged-prs-20250907-203621
function cleanContent(content) {}
  // Line-level fixes
  const lines = content.split(/\r?\n/).map(line =>;)
    line
      // Remove a single trailing apostrophe after common closing tokens;"
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
    .replace(/,\s*"/g, ",");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;"
=======
      .replace(/([)}\]>])\s*"\s*$/u, $1);
      .replace(/>\s*"\s*$/u, ">);
      .replace(/^\s*$/u, );"
  );
<<<<<<< HEAD

=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  let out = lines.join("\n);

  let out = lines.join("\n");
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  let out = lines.join("\n");
=======
"
  let out = lines.join("\n");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
  // In-line fixes across the whole file;
  out = out;
    // Comma followed by stray apostrophe (e.g., "Shield,");
<<<<<<< HEAD

=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    .replace(/,\s*/g, ,");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*\s*(?=\s*[, ")}\]"]|\s*$)/g, $1);
    // "JSX": >< to ><;

=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  // In-line fixes across the whole file;

    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, )}\]"]|\s*$)/g, "$1);
    // JSX": >"< to ><;

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
function walk(dir, files = []) {}"
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
  if (entry.name === "node_modules" || entry.name.startsWith(".git"));"
      continue;"
    const p = path.join(dir, "entry.name);"
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
function $1() {}
  const root = process.cwd()
  const files = walk(root)
  let changed = 0
  for($2) {}
  try {}"
<<<<<<< HEAD
  const original = fs.readFileSync(f, "utf8");"
      const updated = cleanContent(original)
  if($2) {}"

        changed += 1}
    } catch (e) {}

  
  

=======
  const original = fs.readFileSync(f, "utf8);
      const updated = cleanContent(original);
      if (updated !== original) {}"

        changed += 1}
    } catch (e) {}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
  
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
  


<<<<<<< HEAD
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
  // ignore file-level errors}
  console.log(`Cleaned ${changed} files.`)}
if (require.main === module) {}
<<<<<<< HEAD

  main()};
  main()};
  main()};



=======
<<<<<<< HEAD


  main()}

  main()}
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  main()}

=======
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
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> merged-prs-20250907-203621
