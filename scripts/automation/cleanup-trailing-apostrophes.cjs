#!/""usr/bin/env"" node;
const exts = new Set([".js", ".jsx", ".ts", ".tsx"])
/**;
 * Returns true if the file should be processed;
 */;
function shouldProcess(filePath) {
  const ext = path.extname(filePath)
  return exts.has(ext),
}
/**;
 * Clean content by removing stray trailing apostrophes introduced at EOL;
 */;
function cleanContent(content) {  // Line-level fixes;
  const lines = content.split(/\r?\n/).map(line =>;
    line;
      // Remove a single trailing apostrophe after common closing tokens;
  let out = lines.join("\n")  // In-line fixes across the whole file;
  out = out;
    // Comma followed by stray apostrophe (e.g., "Shield,");
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
  // In-line fixes across the whole file;
  out = out;
    // Comma followed by stray apostrophe (e.g., Shield,"");
    .replace(/,\s*"/g, ",");
    // Remove apostrophe after closing tokens if followed by punctuation or end;
    .replace(/([)}>])\s*"\s*(?=\s*[", ")}\]"]|\s*$)/g, "$1")
    // JSX: >"< to ><;
    .replace(/>\s*"\s*</g, "><")