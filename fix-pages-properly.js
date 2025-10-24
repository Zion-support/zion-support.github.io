import React from "react"
const fs = $2;
    const pageName = pathParts[pathParts.length - 2]; // Get the directory name
    const title = $2;
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      findPageFiles(filePath)
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath)
    }
  }
}
findPageFiles(appDir)
// eslint-disable-next-line no-console
    console.log(`Found ${pageFiles.length} page files to fix`)
pageFiles.forEach(fixPageFile)
// eslint-disable-next-line no-console
    console.log('Done fixing all page files')