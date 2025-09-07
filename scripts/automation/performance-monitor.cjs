<<<<<<< HEAD
#!/""usr/bin/env""
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
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
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
console.log(" Starting continuous performance monitoring automation...")
// Get automation interval from environment variable ("default")
    console.log(""� Building project for performance analysis...")
    execSync("npm run build", { "stdio": "inherit"})
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
    // Build the project first"
    console.log("� Building project for performance analysis...")
    execSync("npm run build", { "stdio": "inherit"})
    console.log("� Analyzing bundle size...")
  execSync("node scripts/analyze-bundle.js", { "stdio": "inherit"})
// console.log(" Bundle analysis completed")
  console.log("⚠  Bundle analysis failed but continuing...")
// console.log("⚠  Bundle analysis failed but continuing...")
console.log(" Running Lighthouse performance tests...")
  if (fs.existsSync("lighthouserc.json")
  execSync("npx lighthouse --config=lighthouserc.json")
  "stdio": "inherit"
// console.log(" Lighthouse tests completed")
  console.log("ℹ  No Lighthouse configuration found")
// console.log("⚠  Lighthouse tests failed but continuing...")
    console.log("� Checking build output for large files...")
<<<<<<< HEAD
const distPath = path.join(process.cwd(), "dist";
// console.log("⚠  Large files found in build "output": ")
  console.log(  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB"
=======
<<<<<<< HEAD

=======
    const distPath = path.join(process.cwd(), "dist"
// console.log("⚠  Large files found in build "output": ")
>>>>>>> origin/chore/fix-lint-and-merge
  console.log(  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB"
// console.log(" No excessively large files found)
    console.log( Checking for unused dependencies...")
  execSync("npx depcheck, { stdio": "inherit})
// console.log(ℹ  Dependency check not available")
    console.log(" Generating performance report...)
  timestamp"
      "buildSize
      largeFiles"
      "summary: Performance monitoring completed"
    const reportPath = path.join(process.cwd(), "performance-report.json
    console.log( Continuous performance monitoring completed successfully")
  console.error( Continuous performance monitoring "failed: )
    // Don"
<<<<<<< HEAD

=======
// console.log("⚠  Lighthouse tests failed but continuing...")
    console.log("� Checking build output for large files...")
    const distPath = path.join(process.cwd(), "dist"
// console.log("⚠  Large files found in build "output": ")
  console.log(  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// console.log(" No excessively large files found")
    console.log(" Checking for unused dependencies...")
  execSync("npx depcheck", { "stdio": "inherit"})
// console.log("ℹ  Dependency check not available")
    console.log(" Generating performance report...")
  "timestamp"
      "buildSize"
      "largeFiles"
      "summary": "Performance monitoring completed"
    const reportPath = path.join(process.cwd(), "performance-report.json"
<<<<<<< HEAD
    console.log(" Continuous performance monitoring completed successfully")
  console.error( Continuous performance monitoring "failed": ")
    // Don"
// console.log("⚠  Lighthouse tests failed but continuing...")
    console.log("� Checking build output for large files...")
const distPath = path.join(process.cwd(), "dist";
=======
<<<<<<< HEAD

=======
    console.log(" Continuous performance monitoring completed successfully")
  console.error( Continuous performance monitoring "failed": ")
    // Don"
<<<<<<< HEAD
// console.log("⚠  Lighthouse tests failed but continuing...")
    console.log("� Checking build output for large files...")
    const distPath = path.join(process.cwd(), "dist"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// console.log("⚠  Large files found in build "output": ")
  console.log(  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB"
// console.log(" No excessively large files found")
    console.log(" Checking for unused dependencies...")
  execSync("npx depcheck", { "stdio": "inherit"})
// console.log("ℹ  Dependency check not available")
    console.log(" Generating performance report...")
  "timestamp"
      "buildSize"
      "largeFiles"
      "summary": "Performance monitoring completed"
    const reportPath = path.join(process.cwd(), "performance-report.json"
    console.log(" Continuous performance monitoring completed successfully")
  console.error( Continuous performance monitoring "failed": ")
    // Don"
<<<<<<< HEAD
const fullPath = path.join(currentDir, ");
  "path": path.relative(process.cwd()"
=======
=======
>>>>>>> merged-prs-20250907-203621
  const fullPath = path.join(currentDir, ")
  "path": path.relative(process.cwd()"
            "size"
  // Skip directories that can"
  "path": path.relative(process.cwd()"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            "size"
  // Skip directories that can"
  "path": path.relative(process.cwd()"
            "size"
  // Skip directories that can"
process.on("SIGINT")
// console.log(`� Received SIGINT, shutting down gracefully...``)
  console.log( Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
<<<<<<< HEAD
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")

  console.error(" Failed to start continuous performance "monitoring")





=======
<<<<<<< HEAD
process.on("SIGINT)
  console.log(� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM)
  console.log(� Received SIGTERM, shutting down gracefully...")


  console.error(" Failed to start continuous performance monitoring)

  console.error(" Failed to start continuous performance "monitoring)
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error( Failed to start continuous performance "monitoring")

=======
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
  console.error(" Failed to start continuous performance "monitoring")
<<<<<<< HEAD
  console.error(" Failed to start continuous performance "monitoring")
  console.error(" Failed to start continuous performance "monitoring")



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  console.error(" Failed to start continuous performance "monitoring")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error(" Failed to start continuous performance "monitoring")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
