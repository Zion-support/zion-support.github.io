import fs from 'fs''
import path from 'path''
import { glob } from 'glob'
// Function to fix common JSX syntax errors
function fixJSXSyntax(content, filename) {
  let fixed = content
  // Fix unclosed JSX tags'
  fixed = fixed.replace(/<h1([^>]*)>([^<]*)<\/div>/g, '<h1$1>$2</h1>')'
  fixed = fixed.replace(/<p([^>]*)>([^<]*)<\/div>/g, '<p$1>$2</p>')'
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<\/h1>/g, '<div$1>$2</div>')
  // Fix malformed JSX structure - remove orphaned closing tags'
  fixed = fixed.replace(/\s*<\/>\s*<\/>\s*/g, '\n    </>\n  ')
  // Fix missing closing tags for common elements'
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<\/>\s*<\/>\s*<div([^>]*)>/g, '<div$1>\n        <div$2>')
  // Fix semicolons after JSX elements'
  content = content.replace(/>\s*;\s*\n/g, '>\n')'
  content = content.replace(/>\s*;\s*$/gm, '>')
  
  // Fix semicolons after closing JSX tags'
  content = content.replace(/<\/[^>]+>\s*\s*\n/g, '</$1>1284\n')'
  content = content.replace(/<\/[^>]+>\s*\s*$/gm, '</$1>1347')
  // Fix component structure - ensure proper JSX return'
  if (fixed.includes('return (') && !fixed.includes('return (')) {'
    fixed = fixed.replace(/return \(\s*<>/g, 'return (\n    <>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">')
  }
  // Fix missing container div'"
  if (fixed.includes('<div className="container mx-auto px-4 py-16"></div>') && !fixed.includes('min-h-screen')) {
    fixed = fixed.replace("
      /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div className="container mx-auto px-4 py-16"><\/div>\s*<\/>/g
      `<>      <Helmet>
        <title>Page - Zion Tech Group</title>"
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-white mb-8">Page</h1>"
            <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
          </div>
        </div>
      </div>
    </>`
    )
  }
  return fixed
}
// Function to fix specific page files
function fixPageFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8')
    const filename = path.basename(filePath)'
    // Skip if it's already properly formatted'
    if (content.includes('min-h-screen') && content.includes('container mx-auto')) {
      return
    }
    let fixed = content
    // Extract page name from filename'
    const pageName = filename.replace('.tsx', '').replace('page', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    // Create a proper page structure"
    const properStructure = `import React from "react""
import { Helmet } from "react-helmet-async"'
const ${pageName.replace(/\s+/g, '')}Page = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>"
        <meta name="description" content="${pageName} - Zion Tech Group" />
      </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-white mb-8">${pageName}</h1>"
            <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
          </div>
        </div>
      </div>
    </>
  )
}'
export default ${pageName.replace(/\s+/g, '')}Page;`
    // Only replace if the file has malformed structure'
    if (content.includes('</>') && content.includes('</>') && content.split('</>').length > 2) {
      fs.writeFileSync(filePath, properStructure)
      console.log(`Fixed: ${filePath}`)
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Main function
async function main() {
  // Find all page.tsx files in the app directory'
  const pageFiles = await glob('app/**/page.tsx')
  console.log(`Found ${pageFiles.length} page files to check...`)
  pageFiles.forEach(fixPageFile)'
  console.log('JSX syntax fixing completed!')
}
main().catch(console.error)'"