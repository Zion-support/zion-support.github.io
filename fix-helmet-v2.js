
const fs = require('fs')
const path = require('path')
// Function to replace react-helmet-async with Next.js Head
function fixHelmetInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Replace import
    content = content.replace(
      /import { Helmet } from "react-helmet-async";/g
      'import Head from "next/head";'
    )
    // Replace Helmet component with Head
    content = content.replace(
      /<Helmet>\s*([\s\S]*?)\s*<\/Helmet>/g
      '<Head>\n        $1\n      </Head>'
    )
    // Fix React.Fragment issues
    content = content.replace(/<<>>/g, '<>')
    content = content.replace(/<\/<>>/g, '</>')
    content = content.replace(/React\.Fragment/g, '<>')
    content = content.replace(/<\/React\.Fragment>/g, '</>')
    fs.writeFileSync(filePath, content)
    // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fixAllFiles(filePath)
    } else if (file.endsWith('.tsx')) {
      fixHelmetInFile(filePath)
    }
  })
}
// Start fixing from the app directory
fixAllFiles('./app')
// eslint-disable-next-line no-console
    console.log('Helmet replacement completed!')