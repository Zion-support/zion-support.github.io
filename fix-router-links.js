
const fs = $2;
function fixRouterLinksInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Replace import
    content = content.replace(
      /import { Link } from "react-router-dom";/g
      'import Link from "next/link";'
    )
    // Replace to= with href=
    content = content.replace(/to=/g, 'href=')
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
  const files = $2;
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fixAllFiles(filePath)
    } else if (file.endsWith('.tsx')) {
      fixRouterLinksInFile(filePath)
    }
  })
}
// Start fixing from the app directory
fixAllFiles('./app')
// eslint-disable-next-line no-console
    console.log('Router links replacement completed!')