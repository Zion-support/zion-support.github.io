///usr/bin/env node
/**
 * Fix Service Pages
 * Fixes syntax errors in service pages
 */
const fs = require("fs")
const path = require("path")
function fixServicePage(filePath) {
  try {
    console.log(`Fixing ${filePath}...`)
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    // Remove extra closing braces and semicolons
    content = content.replace(/\s*}\s*\);\s*}\s*$/gm, '\n  );\n}')
    content = content.replace(/\s*}\s*\);\s*}\s*$/gm, '\n  );\n}')
    // Fix malformed JSX
    content = content.replace(/<div className="([^"]*)"\s*>\s*}\s*$/gm, '<div className="$1">')
    content = content.replace(/<div className="([^"]*)"\s*>\s*}\s*$/gm, '<div className="$1">')
    // Fix extra semicolons in JSX
    content = content.replace(/;\s*$/gm, '')
    content = content.replace(/;\s*$/gm, '')
    // Fix malformed closing tags
    content = content.replace(/<\/div>\s*}\s*\);\s*}\s*$/gm, '</div>\n  );\n}')
    // Fix import statements in wrong places
    content = content.replace(/import\s+[^;]+;\s*}\s*$/gm, '}')
    // Fix metadata syntax
    content = content.replace(/,\s*}\s*$/gm, '}')
    content = content.replace(/,\s*}\s*;\s*$/gm, '};')
    // Fix JSX structure
    content = content.replace(/<h1[^>]*>\s*([^<]+);\s*<\/h1>/g, '<h1$1</h1>')
    content = content.replace(/<h2[^>]*>\s*([^<]+);\s*<\/h2>/g, '<h2$1</h2>')
    content = content.replace(/<h3[^>]*>\s*([^<]+);\s*<\/h3>/g, '<h3$1</h3>')
    // Fix anchor tags
    content = content.replace(/<a;\s*href/g, '<a href')
    content = content.replace(/<a;\s*href/g, '<a href')
    // Fix button tags
    content = content.replace(/<button;\s*onClick/g, '<button onClick')
    content = content.replace(/<button;\s*onClick/g, '<button onClick')
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
  if($2) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ Fixed ${filePath}`)
    } else {
      console.log(`No changes needed for ${filePath}`)
  } catch (error) {
    console.log(`❌ Failed to fix ${filePath}: ${error.message}`)
function fixServiceDirectory(dirPath) {
  const files = fs.readdirSync(dirPath)
  for($2) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fixServiceDirectory(filePath)
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      fixServicePage(filePath)
function main() {
  console.log("🔧 Starting service pages fixing...")
  const servicesDir = path.join(process.cwd(), "app", "services")
  if (!fs.existsSync(servicesDir)) {
    console.log("Services directory not found")
    return
  fixServiceDirectory(servicesDir)
  console.log("✅ Service pages fixing completed!")
main()
