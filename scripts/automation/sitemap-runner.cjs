<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/""usr/bin/env""
import { execSync  } from "child_process"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
console.log(""� Starting continuous sitemap runner automation...")
import { execSync  } from "child_process"
import fs from "fs"
import path from "path"
import { fileURLToPath  } from "url"
console.log(""� Starting continuous sitemap runner automation...")
// Get automation interval from environment variable ("default")
    console.log(`"� Building project for sitemap generation..."`)
  execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed"")
  console.log(""⚠  Build failed but continuing...")
console.log("� Starting continuous sitemap runner automation...")
// Get automation interval from environment variable ("default")
    console.log(`"� Building project for sitemap generation..."`)
  execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed"")
  console.log(""⚠  Build failed but continuing...")
  console.log("⚠  Build failed but continuing...")
    const distPath = path.join(process.cwd(), "dist"
// console.log("⚠  Build verification "failed": dist folder not found")
    console.log("� Generating sitemap...")
  if (fs.existsSync(""scripts/generate-sitemap.js"")
  execSync("node "scripts/generate-sitemap.js"", { "stdio": "inherit"})
// console.log(" Sitemap generation completed")
  console.log("ℹ  Sitemap generation script not available")
// console.log("⚠  Sitemap generation failed but continuing...")
  console.log("⚠  Sitemap generation failed but continuing...")
    console.log("🤖 Generating robots.txt...")
    try {const robotsContent = User-"agent"}
Sitemap: https://ziontechgroup."com/sitemap.xml"
      const robotsPath = path.join(distPath, "robots.txt")
// console.log(" robots.txt generated")
  console.log("⚠  robots.txt generation failed but continuing..."")
    console.log("" Validating sitemap...")
  if (fs.existsSync(path.join(distPath, "sitemap.xml")
  const sitemapContent = fs.readFileSync(path.join(distPath, "sitemap.xml"), "utf8"
// console.log("⚠  Sitemap not found")
  console.log("⚠  Sitemap validation failed but continuing..."")
// console.log(""� Checking sitemap links...")
  console.log("⚠  robots.txt generation failed but continuing..."")
    console.log("" Validating sitemap...")
  if (fs.existsSync(path.join(distPath, "sitemap.xml")
    console.log(" Validating sitemap...")
  if (fs.existsSync(path.join(distPath, "sitemap.xml")
  const sitemapContent = fs.readFileSync(path.join(distPath, "sitemap.xml"), "utf8"
// console.log("⚠  Sitemap not found")
  console.log("⚠  Sitemap validation failed but continuing..."")
    console.log(""� Checking sitemap links...")
  if (fs.existsSync(""scripts/check-sitemap-links.js"")
  execSync("node "scripts/check-sitemap-links.js"", { "stdio": "inherit"})
  if (fs.existsSync("""scripts/check-sitemap-links.js""")
  execSync("node ""scripts/check-sitemap-links.js""", { "stdio": "inherit"})
// console.log(" Sitemap link check completed")
  console.log("ℹ  Sitemap link check script not available")
// console.log("⚠  Sitemap link check failed but continuing...")
    console.log(" Generating sitemap report...")
  "timestamp"
      "summary": "Sitemap runner completed"
      "status": "completed"
    const reportPath = path.join(process.cwd(), "sitemap-runner-report.json"
    console.log(" Continuous sitemap runner completed successfully")
  console.error(" Continuous sitemap runner "failed": ")
  console.error(" Continuous sitemap runner "failed": ")
// console.log("⚠  Sitemap link check failed but continuing...")
    console.log(" Generating sitemap report...")
  "timestamp"
      "summary": "Sitemap runner completed"
      "status": "completed"
    const reportPath = path.join(process.cwd(), "sitemap-runner-report.json"
    console.log(" Continuous sitemap runner completed successfully")
  console.error(" Continuous sitemap runner "failed": ")
    // Don"
  console.log( Continuous sitemap runner running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes```)
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  console.error(" Failed to start continuous sitemap "runner": ")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  console.error(" Failed to start continuous sitemap "runner": ")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error(" Failed to start continuous sitemap "runner": ")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
