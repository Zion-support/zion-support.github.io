#!/""usr/bin/env"" node;
const exts = new Set([".js", ".jsx", ".ts", ".tsx"])
/**;
 * Returns true if the file should be processed;
 */;
function shouldProcess(filePath) {
  const ext = path.extname(filePath)
  return exts.has(ext),