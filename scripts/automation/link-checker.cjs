<<<<<<< HEAD
#!/""usr/bin/env""
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
console.log(""� Starting continuous link checker automation...")
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
console.log(""� Starting continuous link checker automation...")
// Get automation interval from environment variable ("default")
// console.log(`"� Building project..."`)
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(""� Starting continuous link checker automation...")
<<<<<<< HEAD
=======
const fs = require("fs")
const path = require("path")
>>>>>>> merged-prs-20250907-203621
const { execSync } = require("child_process")
console.log(""� Starting continuous link checker automation...")
//
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  console.log("� Starting continuous link checker automation...")
// Get automation interval from environment variable ("default")
    console.log(`"� Building project..."`)
  execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed"")
  console.log("⚠  Build failed but continuing...")
      execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed"")
  console.log("⚠  Build failed but continuing...")
<<<<<<< HEAD
const distPath = path.join(process.cwd(), "dist";
  console.log("⚠  Dist folder not found, skipping link check")
const indexHtmlPath = path.join(distPath, "index.html");
// console.log("⚠  index.html not found in build output")
    console.log(" index.html found in build output")
const content = fs.readFileSync(htmlFile, "utf8");
const indexHtmlPath = path.join(distPath, "index.html");
// console.log("⚠  index.html not found in build output")
    console.log(" index.html found in build output")
const content = fs.readFileSync(htmlFile, "utf8");
=======
    const distPath = path.join(process.cwd(), "dist"
  console.log("⚠  Dist folder not found, skipping link check")
    const indexHtmlPath = path.join(distPath, "index.html")
// console.log("⚠  index.html not found in build output")
    console.log(" index.html found in build output")
  const content = fs.readFileSync(htmlFile, "utf8")
    const indexHtmlPath = path.join(distPath, "index.html")
// console.log("⚠  index.html not found in build output")
    console.log(" index.html found in build output")
  const content = fs.readFileSync(htmlFile, "utf8")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "file"
              "reference"
      } catch (error) {  console.log(⚠  Could not read ${htmlFile  }: ${error.message}"")
  console.log(""⚠  Broken references "found": ")
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      brokenReferences.forEach(ref => {console.log("})
  console.log("" No broken references found")
  "timestamp"
      "htmlFiles"
      "brokenReferences"
<<<<<<< HEAD
      "summary": "Link check completed"
const reportPath = path.join(process.cwd(), ";
=======
<<<<<<< HEAD

=======
      "summary": "Link check completed"
    const reportPath = path.join(process.cwd(), "
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  console.error(" Link check "failed": ")
  "timestamp"
      "htmlFiles"
      "brokenReferences"
      "summary": "Link check completed"
<<<<<<< HEAD
const reportPath = path.join(process.cwd(), "link-checker-report.json";
=======
    const reportPath = path.join(process.cwd(), "link-checker-report.json"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  console.error(" Link check "failed": ")
    // Don"
  files.push(...findHtmlFiles(fullPath))} else if (item.endsWith(".html")
} else if (item.endsWith(".html")
<<<<<<< HEAD
const hrefMatches = content.match(/href=[""]([^"]+)["];
const href = match.match(/href=["]([^"]+)["];
        !href.startsWith("#")
        !href.startsWith(""javascript": ")
        !href.startsWith("http")
const srcMatches = content.match(/src=["]([^""]+)[""];
const src = match.match(/src=["]([^"]+)[""];
        !src.startsWith(""data": ")
=======
  const hrefMatches = content.match(/href=[""]([^"]+)["]
  const href = match.match(/href=["]([^"]+)["]
        !href.startsWith("#")
        !href.startsWith(""javascript": ")
        !href.startsWith("http")
  const srcMatches = content.match(/src=["]([^""]+)[""]
  const src = match.match(/src=["]([^"]+)[""]
        !src.startsWith(""data": ")
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        !src.startsWith("blob:")
        !src.startsWith("http")
        !src.startsWith("data:")
        !src.startsWith("blob:")
        !src.startsWith("http")
  if (ref.startsWith("/")
  console.log(" Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
<<<<<<< HEAD
  "
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")

  console.error(" Failed to start continuous link "checker": ")





=======
<<<<<<< HEAD
  
process.on(SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...)
process.on(SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...)
process.on(SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...)


  console.error( Failed to start continuous link "checker": )

  console.error( Failed to start continuous link "checker": )
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error( Failed to start continuous link "checker": ")

=======
  "
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

=======
  console.error(" Failed to start continuous link "checker": ")
<<<<<<< HEAD
  console.error(" Failed to start continuous link "checker": ")
  console.error(" Failed to start continuous link "checker": ")



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  console.error(" Failed to start continuous link "checker": ")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error(" Failed to start continuous link "checker": ")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
