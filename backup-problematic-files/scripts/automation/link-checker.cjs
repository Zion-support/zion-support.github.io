<<<<<<< HEAD
#!/"usr/bin/env"
const fs = require("fs)
const path = require(path")
const { execSync } = require("child_process)
console.log("� Starting continuous link checker automation...")
console.log(� Starting continuous link checker automation...")
// Get automation interval from environment variable ("default)
// console.log(`� Building project..."`)
  console.log("� Starting continuous link checker automation...)
// Get automation interval from environment variable (default")
    console.log(`"� Building project...`)
  execSync(npm run build", { "stdio: inherit"})
// console.log(" Build completed)
=======
<<<<<<< HEAD
#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(""� Starting continuous link checker automation...")
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(""� Starting continuous link checker automation...")
// Get automation interval from environment variable ("default")
// console.log(`"� Building project..."`)
  console.log("� Starting continuous link checker automation...")
// Get automation interval from environment variable ("default")
    console.log(`"� Building project..."`)
  execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed"")
>>>>>>> origin/chore/fix-lint-and-merge
  console.log("⚠  Build failed but continuing...")
      execSync(npm run build, { "stdio": inherit})
// console.log(" Build completed")
  console.log(⚠  Build failed but continuing...")
    const distPath = path.join(process.cwd(), "dist
  console.log(⚠  Dist folder not found, skipping link check")
    const indexHtmlPath = path.join(distPath, "index.html)
// console.log(⚠  index.html not found in build output")
    console.log(" index.html found in build output)
  const content = fs.readFileSync(htmlFile, utf8")
// console.log(⚠  index.html not found in build output")
    console.log(" index.html found in build output)
  "file
              reference"
      } catch (error) {  console.log(⚠  Could not read ${htmlFile  }: ${error.message}")
  console.log("⚠  Broken references "found: )
      brokenReferences.forEach(ref => {console.log("})
  console.log(" No broken references found)
  "timestamp"
      htmlFiles
      "brokenReferences"
      summary: "Link check completed"
    const reportPath = path.join(process.cwd(), 
  console.error( Link check "failed": )
  timestamp"
      "htmlFiles
      brokenReferences"
      "summary: Link check completed"
    const reportPath = path.join(process.cwd(), "link-checker-report.json
  console.error( Link check "failed": )
    // Don
  files.push(...findHtmlFiles(fullPath))} else if (item.endsWith(".html")
} else if (item.endsWith(.html)
  const hrefMatches = content.match(/href=[""]([^]+)[]
  const href = match.match(/href=["]([^"]+)[]
        !href.startsWith(#")
        !href.startsWith("javascript: ")
        !href.startsWith("http)
  const srcMatches = content.match(/src=[]([^""]+)[]
  const src = match.match(/src=["]([^"]+)[]
        !src.startsWith(""data: )
        !src.startsWith("blob:")
        !src.startsWith(http)
        !src.startsWith("data:")
        !src.startsWith(blob:)
        !src.startsWith("http")
  if (ref.startsWith(/)
  console.log(" Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
  
process.on(SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...)
process.on(SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...)
process.on(SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
  console.error(" Failed to start continuous link "checker": ")
  console.error(" Failed to start continuous link "checker": ")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
  console.error(" Failed to start continuous link "checker": ")
=======
  console.error(" Failed to start continuous link "checker": ")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
