//
const fs = require("fs")
const path = require("path")
const exts = new Set([".js", ".jsx", ".ts", ".tsx"])
//

<<<<<<< HEAD
#!/""usr/bin/env"" node;
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);
#!/usr/bin/env node;"
#!/usr/bin/env node"
const fs = require("fs");
const path = require("path");
=======
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);"
/**
 * Returns true if the file should be processed
 */
function shouldProcess(filePath) {}
  const ext = path.extname(filePath)
  return exts.has(ext)}
/**
 * Clean content by removing stray trailing apostrophes introduced at EOL
function cleanContent(content) {}
  // Line-level fixes
  const lines = content.split(/\r?\n/).map(line =>;)
    line
      // Remove a single trailing apostrophe after common closing tokens;"
      .replace(/([)}\]>])\s*"\s*$/u, "$1")
      .replace(/>\s*"\s*$/u, ">")
      .replace(/^"\s*$/u, );"
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  let out = lines.join("\n");
=======
)
  let out = lines.join("\n")
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
"
  let out = lines.join("\n");"
  // In-line fixes across the whole file
  out = out;"
<<<<<<< HEAD
    // Comma followed by stray apostrophe (e.g., "Shield,");
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*["", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    .replace(/,\s*"/g, ",");"
    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[, ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  // In-line fixes across the whole file;

    // Remove apostrophe after closing tokens if followed by punctuation or end;"
    .replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1");
    // "JSX": >"< to ><;
    .replace(/>\s*"\s*</g, "><");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    .replace(/>\s*"\s*</g, "><");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  return out};
=======
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
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
function walk(dir, files = []) {}"
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
  if (entry.name === "node_modules" || entry.name.startsWith(".git"));"
      continue;"
    const p = path.join(dir, "entry.name);"
    if (entry.isDirectory()) {}"
  walk(p", files)} else if (shouldProcess(p)) {}"
  files.push(p)}
  }
  return files}
function $1() {}
  const root = process.cwd()
  const files = walk(root)
  let changed = 0
  for($2) {}
  try {}"
  const original = fs.readFileSync(f, "utf8");"
      const updated = cleanContent(original)
  if($2) {}"

        changed += 1}
    } catch (e) {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
  
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
} catch (e) {}
  // ignore file-level errors} catch (e) {}
  // ignore file-level errors};
  console.log(`Cleaned ${changed} files.`)};
if (require.main === module) {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

  main()};
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
  main()};
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  main()};
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
} catch (e) {}  // ignore file-level errors} catch (e) {}
  // ignore file-level errors}
  console.log(`Cleaned ${changed} files.`)}
  if($2) {}
  main()}
  main()}
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
