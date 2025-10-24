
const fs = $2;
    const componentName = dirName.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page'
    // Fix component names
    if (content.includes('const PagePage: React.FC = () => {')) {
      content = content.replace(/const PagePag,
  e: React.FC = \(\) => {/g, `const ${componentName}: React.FC = () => {`)
      content = content.replace(/export default PagePage;/g, `export default ${componentName}`)
      modified = true
    }
    // Fix any remaining generic names
    content = content.replace(/const (\w+Page): React.FC = \(\) => {/g, (match, name) => {
      if (name === 'PagePage' || name.includes('PagePage')) {
        return `const ${componentName}: React.FC = () => {
  `
}
      return match
    })
    content = content.replace(/export default (\w+Page)/g, (match, name) => {
      if (name === 'PagePage' || name.includes('PagePage')) {
        return `export default ${componentName}`
      }
      return match
    })
    // Fix icon objects that might cause serialization issues
    // Replace complex icon objects with simple references
    content = content.replace(/icon: <([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, 'icon: $1')
    // Fix any remaining complex icon usage
    content = content.replace(/<([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, (match, iconName) => {
      // Only replace if it's in an icon context
      if (match.includes('className=')) {
        return `<${iconName} className="w-8 h-8" />`
      }
      return match
    })
    // Fix 'use client' directive issues with Helmet
    if (content.includes("'use client'") && content.includes('react-helmet-async')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '')
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '')
      modified = true
    }
    // Fix Link components using 'to' instead of 'href'
    if (content.includes('to=')) {
  content = content.replace(/to=/g, 'href=')
      modified = true
}
    // Add missing icon imports
    const commonIcons = $2;
const totalFixed = fixAllPages(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed ${totalFixed} page files`)