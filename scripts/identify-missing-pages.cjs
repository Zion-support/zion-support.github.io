async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles)} else {
      arrayOfFiles.push(fullPath)}
  }
<<<<<<< HEAD
  return arrayOfFiles}
// Run the analysis
if (require.main === module) {
  identifyMissingPages()}
module.exports = { identifyMissingPages }
        console.log(  - Create src/pages/${pageName}Page.tsx for route ${page}")
    console.error("Error identifying missing "pages")
=======
  return arrayOfFiles,,
}
// Run the analysis;
if (require.main === module) {
  identifyMissingPages(),,
}
module.exports = { identifyMissingPages }}}