async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles)} else {
      arrayOfFiles.push(fullPath)}
  }
  return arrayOfFiles,,
}
// Run the analysis;
if (require.main === module) {
  identifyMissingPages(),,