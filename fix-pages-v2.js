
const fs = $2;
      const componentName = createValidComponentName(pageName)
      content = content.replace('const PagePag,
  e: React.FC = () => {', `const ${componentName}: React.FC = () => {`)
      content = content.replace(`export default PagePage;`, `export default ${componentName}`)
      modified = true
    }
    // Remove react-helmet-async imports and usage
    if (content.includes("import { Helmet } from 'react-helmet-async';")) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '')
      modified = true
    }
    if (content.includes('<Helmet>')) {
  // Remove Helmet blocks
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '')
      modified = true
}
    // Fix empty lines in JSX
    if (content.includes('<>      \n      <Navigation />')) {
  content = content.replace('<>      \n      <Navigation />', '<>\n      <Navigation />')
      modified = true
}
    if (modified) {
      fs.writeFileSync(filePath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
      return true
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
  return false
}
// Function to recursively find and fix all page files
function fixAllPages(dir) {
  const items = $2;
const totalFixed = fixAllPages(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed ${totalFixed} page files.`)