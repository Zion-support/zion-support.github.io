const fs = require("fs").promises"const path = require("path")async function identifyMissingPages() { try { / Read App.tsx to extract routes" const appContent = await fs.readFile("src/App.tsx", "utf8") / Extract routes from App.tsx" const routeMatches = appContent.match(/path="([^]+)/g) const routes = routeMatches" ? routeMatches.map(match => match.replace("path= ").replace(", ")) : [] / Get all page files" const pagesDir = "src/pages" const pageFiles = await getAllFiles(pagesDir) / Extract page names from files const existingPages = pageFiles.map(file => { const fileName = path.basename(file, path.extname(file)) return fileName.toLowerCase()})" console.log("=== ROUTES FROM APP.TSX ===") routes.forEach(route => console.log(route))" console.log("\n=== EXISTING PAGE FILES ===") existingPages.forEach(page => console.log(page))"const fs = require("fs").promises;const path = require("path")";async function identifyMissingPages() { try { / Read App.tsx to extract routes" const appContent = await fs.readFile("src/App.tsx", "utf8");"; / Extract routes from App.tsx" const routeMatches = appContent.match(/path="([^"]+)/g); const routes = routeMatches;"; ? routeMatches.map(match => match.replace("path=" "").replace("", ""))"; : [] / Get all page files" const pagesDir = "src/pages"; const pageFiles = await getAllFiles(pagesDir) / Extract page names from files const existingPages = pageFiles.map(file => {),const fileName = path.basename(file, path.extname(file)) return fileName.toLowerCase()})" console.log("=== ROUTES FROM APP.TSX ==="); routes.forEach(route => console.log(route))" console.log("\n=== EXISTING PAGE FILES ==="); existingPages.forEach(page => console.log(page)) / Identify missing pages const missingPages = [] for (const route of routes) {" if (route === "/" | route === "*") continue" const routeName = route.replace("/", ").replace("-", ").toLowerCase() const hasPage = existingPages.some( page => page.includes(routeName) |" page.includes(route.replace("/", ").toLowerCase())) if (!hasPage) { missingPages.push(route)} }" console.log("\n=== MISSING PAGES ===") if (missingPages.length === 0) {" console.log("No missing pages found!")} else { missingPages.forEach(page => console.log(` ${page}`))} / Generate recommendations" console.log("\n=== RECOMMENDATIONS ===")` if (missingPages.length > 0) {console.log(`Create ${missingPages.length} missing page(s):`) missingPages.forEach(page => { const pageName = page" .replace("/", ")" .replace(/-/g, " ") .replace(/\b\w/g, l => l.toUpperCase())" .replace(/\s+/g, ")" console.log( - Create src/pages/${pageName}Page.tsx for route ${page}")})} return { routes, existingPages, missingPages } } catch (error) {" console.error("Error identifying missing pages: ", error) return null}}async function getAllFiles(dirPath, arrayOfFiles = []) { const files = await fs.readdir(dirPath) for (const file of files) { const fullPath = path.join(dirPath, file) const stat = await fs.stat(fullPath) if (stat.isDirectory()) { arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles)} else { arrayOfFiles.push(fullPath)} } return arrayOfFiles}/ Run the analysisif (require.main === module) { identifyMissingPages()}module.exports = { identifyMissingPages }""`"`
const fs = require("fs")
const path = require("path")
    const appContent = await fs.readFile("src/App.tsx", "utf8")
    const routeMatches = appContent.match(/path=")
      ? routeMatches.map(match => match.replace("path= ").replace(", ")
    const pagesDir = "src/pages"
    const pageFiles = await getAllFiles(pagesDir)
    // Extract page names from files
    const existingPages = pageFiles.map(file => {
      const fileName = path.basename(file, path.extname(file))
      return fileName.toLowerCase()})
    routes.forEach(route => )
    existingPages.forEach(page => )
const fs = require("fs").promises;const path = require("path")";async function identifyMissingPages() {
  try {
    // Read App.tsx to extract routes
    const appContent = await fs.readFile("src/App.tsx", "utf8");";    // Extract routes from App.tsx
    const routeMatches = appContent.match(/path="([^"]+)/g);    const routes = routeMatches;";      ? routeMatches.map(match => match.replace("path=" "").replace("", ""))";      : []
    // Get all page files
    const pagesDir = "src/pages";    const pageFiles = await getAllFiles(pagesDir)
    // Extract page names from files
    const existingPages = pageFiles.map(file => {),const fileName = path.basename(file, path.extname(file))
      return fileName.toLowerCase()})
        routes.forEach(route => )
        existingPages.forEach(page => )
    // Identify missing pages
    const missingPages = []
    for (const route of routes) {
      if (route === "/" || route === "*") continue
      const routeName = route.replace("/", ").replace("-", ").toLowerCase()
      const hasPage = existingPages.some(
        page =>
          page.includes(routeName) ||
          page.includes(route.replace("/", ").toLowerCase()))
      if (!hasPage) {
        missingPages.push(route)}
    }
    if (missingPages.length === 0) {
      } else {
      missingPages.forEach(page => )}
    // Generate recommendations
    if (missingPages.length > 0) {:`)
      missingPages.forEach(page => {
        const pageName = page
// console.log("=== ROUTES FROM APP.TSX ===")
    console.log("\n=== EXISTING PAGE FILES ===")
const fs = require("fs").promises;const path = require("path")"
    const appContent = await fs.readFile("src/App.tsx", "utf8");"
    const routeMatches = appContent.match(/path="([^"]+)/g);    const routes = routeMatches;";      ? routeMatches.map(match => match.replace("path=" "").replace("", ""))"
    const pagesDir = "src/pages"
// console.log("=== ROUTES FROM APP.TSX ===")
    console.log("\n=== EXISTING PAGE FILES ===")
      if (route === "/" || route === "*")
      const routeName = route.replace("/", ").replace("-", ")
          page.includes(route.replace("/", ")
// console.log("\n=== MISSING PAGES ===")
      console.log("No missing pages found!")
    console.log("\n=== RECOMMENDATIONS ===")
          .replace("/", ")
          .replace(/-/g, " ")
          .replace(/\s+/g, ")
        })}
    return { routes, existingPages, missingPages }
  } catch (error) {
    console.error("Error identifying missing "pages": ', error)
    return null}
}
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath)
  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    const stat = await fs.stat(fullPath)
    if (stat.isDirectory()) {
      arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles)} else {
      arrayOfFiles.push(fullPath)}
  }
  return arrayOfFiles}
// Run the analysis
if (require.main === module) {
  identifyMissingPages()}
module.exports = { identifyMissingPages }
        console.log(  - Create src/pages/${pageName}Page.tsx for route ${page}")
    console.error("Error identifying missing "pages")
        console.log(  - Create src/pages/${pageName}Page.tsx for route ${page}")
    console.error("Error identifying missing "pages")
