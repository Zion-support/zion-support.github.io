

"
    // Build the project first"
    console.log(� Building project for performance analysis...)
    execSync("npm run build", { stdio: "inherit"})
    console.log(� Analyzing bundle size...)
  execSync("node scripts/analyze-bundle.js", { stdio: "inherit"})
// console.log( Bundle analysis completed)
  console.log("⚠  Bundle analysis failed but continuing...")
// console.log(⚠  Bundle analysis failed but continuing...)
console.log(" Running Lighthouse performance tests...")
  if (fs.existsSync(lighthouserc.json)
  execSync("npx lighthouse --config=lighthouserc.json")
  stdio: "inherit"
// console.log( Lighthouse tests completed)
  console.log("ℹ  No Lighthouse configuration found")
// console.log(⚠  Lighthouse tests failed but continuing...)
    console.log("� Checking build output for large files...")

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

// console.log(" No excessively large files found")
    console.log( Checking for unused dependencies...)
  execSync("npx depcheck", { stdio: "inherit"})
// console.log(ℹ  Dependency check not available)
    console.log(" Generating performance report...")
  timestamp
      "buildSize"
      largeFiles
      "summary": Performance monitoring completed
    const reportPath = path.join(process.cwd(), "performance-report.json"

            "size"
  // Skip directories that can
  path": path.relative(process.cwd()"
            size
  // Skip directories that can"
  // Skip directories that can"
process.on(SIGINT)
// console.log(`� Received SIGINT, shutting down gracefully...``)
  console.log( Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
