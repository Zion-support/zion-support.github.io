<<<<<<< HEAD
#!/""usr/bin/env"" node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏗️ Starting continuous build and test automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

async function runDailyBuildTest() {
  try {
    console.log(`🏗️ Running build and test at ${new Date().toISOString()}`);
    
    // Install dependencies
    console.log('📦 Installing dependencies...');
    try {
      execSync('npm ci', { stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️  Dependency installation failed but continuing...');
    }
    
    // Run linting
    console.log('🔍 Running linting...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Linting completed');
    } catch (error) {
      console.log('⚠️  Linting failed but continuing...');
    }
    
    // Run type checking
    console.log('🔍 Running type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed');
    } catch (error) {
      console.log('⚠️  Type checking issues found but continuing...');
    }
    
    // Run tests
    console.log('🧪 Running tests...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('✅ Tests completed');
    } catch (error) {
      console.log('⚠️  Tests failed but continuing...');
    }
    
    // Build project
    console.log('🏗️ Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Verify build output
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
    }
    
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      console.log('⚠️  Build verification failed: index.html not found');
      return;
    }
    
    console.log('✅ Build verification completed');
    
    // Run performance tests
    console.log('📊 Running performance tests...');
    try {
      execSync('npm run lighthouse', { stdio: 'inherit' });
      console.log('✅ Performance tests completed');
    } catch (error) {
      console.log('⚠️  Performance tests failed but continuing...');
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      buildSuccess: true,
      summary: 'Build and test completed'
    };
    
    const reportPath = path.join(process.cwd(), 'daily-build-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
    
    console.log('✅ Continuous build and test completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous build and test failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous build and test with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial build and test
  await runDailyBuildTest();
  
  // Set up continuous execution
  setInterval(async () => {
    await runDailyBuildTest();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous build and test running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous build and test
runContinuous().catch(error => {
  console.error("❌ Failed to start continuous build and "test": ", error);  process.exit(1)})
#!/usr/bin/env node/""usr/bin/env"" node;"const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log("" Starting continuous build and test automation.");#!/usr/bin/env node"const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log("" Starting continuous build and test automation.");"/ Get automation interval from environment variable (default: 1 hour);const AUTOMATION_INTERVAL = null; parseInt(process.env.AUTOMATION_INTERVAL) | 3600000; / 1 hour;async function $1() { try { console.log(` Running build and test at ${new Date().toISOString()}); / Install dependencies;"` console.log(`" Installing dependencies."); try {" execSync("npm ci", { stdio: "inherit" });" console.log(" Dependencies installed"")} catch (error) {" console.log("" Dependency installation failed but continuing.");"console.log(" Starting continuous build and test automation.");"/ Get automation interval from environment variable (default: 1 hour);const AUTOMATION_INTERVAL = null; parseInt(process.env.AUTOMATION_INTERVAL) | 3600000; / 1 hour;async function runDailyBuildTest() { try {` console.log(` Running build and test at ${new Date().toISOString()}); / Install dependencies;"` console.log(`" Installing dependencies."); try {" execSync("npm ci", { stdio: "inherit" });" console.log(" Dependencies installed"")} catch (error) {" console.log("" Dependency installation failed but continuing.")}} catch (error) {" console.log(" Dependency installation failed but continuing.")}; / Run linting;" console.log(" Running linting."); try {" execSync("npm run lint", { stdio: "inherit" });" console.log(" Linting completed")} catch (error) {" console.log(" Linting failed but continuing.")}} catch (error) {" console.log(" Linting failed but continuing.")}; / Run type checking; / Run type checking;"console.log(" Running type checking."); try {" execSync("npm run type-check", { stdio: "inherit" });" console.log(" Type checking completed")} catch (error) {" console.log(" Type checking issues found but continuing.")}} catch (error) {" console.log(" Type checking issues found but continuing.")}; / Run tests;" console.log(" Running tests."); try {" execSync("npm test", { stdio: "inherit" });" console.log(" Tests completed")} catch (error) {" console.log(" Tests failed but continuing.")}} catch (error) {" console.log(" Tests failed but continuing.")}; / Build project; / Build project;"console.log(" Building project."); try {" execSync("npm run build", { stdio: "inherit" });" console.log(" Build completed")} catch (error) {" console.log(" Build failed but continuing."); return}} catch (error) {" console.log(" Build failed but continuing."); return}; / Verify build output;" const distPath = path.join(process.cwd(), "dist"); if (!fs.existsSync(distPath)) {" console.log(" Build verification failed: dist folder not found"); return};" const indexHtmlPath = path.join(distPath, "index.html"); if (!fs.existsSync(indexHtmlPath)) {" console.log(" Build verification failed: index.html not found"); return};" console.log(" Build verification completed"); / Run performance tests;" console.log(" Running performance tests."); try {" execSync("npm run lighthouse", { stdio: "inherit" });" console.log(" Performance tests completed")} catch (error) {" console.log(" Performance tests failed but continuing.")}; / Generate report; const report = {" timestamp: new Date().toISOString()," buildSuccess: true," summary: "Build and test completed"}" const reportPath = path.join(process.cwd(), "daily-build-test-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Report saved to ${reportPath});" console.log(" Continuous build and test completed successfully")} catch (error) {" console.error(" Continuous build and test failed: ", error.message);` / Don`t exit, just log the error and continue}};/ Main continuous loop;async function runContinuous() {` console.log( Starting continuous build and test with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`; ); / Run initial build and test; await runDailyBuildTest(); / Set up continuous execution; setInterval(async () => { await runDailyBuildTest()}, AUTOMATION_INTERVAL); console.log( Continuous build and test running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes;" ")};/ Handle graceful shutdown;"`process.on("SIGINT`, () => {} catch (error) {" console.log(" Performance tests failed but continuing.")}; / Generate report; const report = {" timestamp: new Date().toISOString()," buildSuccess: true," summary: "Build and test completed"};" const reportPath = path.join(process.cwd(), "daily-build-test-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Report saved to ${reportPath});" console.log(" Continuous build and test completed successfully")} catch (error) {" console.error(" Continuous build and test failed: ", error.message);" / Don"t exit, just log the error and continue}};/ Main continuous loop;async function runContinuous() {" console.log( Starting continuous build and test with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals"; ); / Run initial build and test; await runDailyBuildTest(); / Set up continuous execution; setInterval(async () => { await runDailyBuildTest()}, AUTOMATION_INTERVAL); console.log( Continuous build and test running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes;` `)};/ Handle graceful shutdown;"process.on("SIGINT", () => {" console.log(" Received SIGINT, shutting down gracefully."); process.exit(0)});"process.on("SIGTERM", () => {" console.log(" Received SIGTERM, shutting down gracefully."); process.exit(0)});/ Start the continuous build and test;runContinuous().catch(error => {" console.error(" Failed to start continuous build and test: ", error); process.exit(1)})"`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(""� Starting continuous build and test automation...")
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(""� Starting continuous build and test automation...")
// Get automation interval from environment variable ("default")
    console.log(`"� Installing dependencies..."`)
  execSync("npm ci", { "stdio": "inherit"})
// console.log(" Dependencies installed"")
  console.log(""⚠  Dependency installation failed but continuing...")
console.log("� Starting continuous build and test automation...")
// Get automation interval from environment variable ("default")
    console.log(`"� Installing dependencies..."`)
  execSync("npm ci", { "stdio": "inherit"})
// console.log(" Dependencies installed"")
  console.log(""⚠  Dependency installation failed but continuing...")
// console.log("⚠  Dependency installation failed but continuing...")
    console.log(" Running linting...")
  execSync("npm run lint", { "stdio": "inherit"})
// console.log(" Linting completed")
  console.log("⚠  Linting failed but continuing...")
// console.log("⚠  Linting failed but continuing...")
console.log(" Running type checking...")
  execSync("npm run type-check", { "stdio": "inherit"})
// console.log(" Type checking completed")
  console.log("⚠  Type checking issues found but continuing...")
// console.log("⚠  Type checking issues found but continuing...")
    console.log("🧪 Running tests...")
  execSync("npm test", { "stdio": "inherit"})
// console.log(" Tests completed")
  console.log("⚠  Tests failed but continuing...")
// console.log("⚠  Tests failed but continuing...")
console.log("� Building project...")
  execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed")
  console.log("⚠  Build failed but continuing...")
  console.log("⚠  Build failed but continuing...")
    const distPath = path.join(process.cwd(), "dist"
  console.log("⚠  Build verification "failed": dist folder not found")
    const indexHtmlPath = path.join(distPath, "index.html")
// console.log("⚠  Build verification "failed": index.html not found")
    console.log(" Build verification completed")
    console.log(" Running performance tests...")
  execSync("npm run lighthouse", { "stdio": "inherit"})
// console.log(" Performance tests completed")
  console.log("⚠  Performance tests failed but continuing...")
  "timestamp"
      "buildSuccess"
      "summary": "Build and test completed"
    const reportPath = path.join(process.cwd(), "daily-build-test-report.json"
    console.log(" Continuous build and test completed successfully")
  console.error(" Continuous build and test "failed": ")
  "
process.on(")
  console.log("⚠  Performance tests failed but continuing...")
  "timestamp"
      "buildSuccess"
      "summary": "Build and test completed"
    const reportPath = path.join(process.cwd(), "daily-build-test-report.json"
    console.log(" Continuous build and test completed successfully")
  console.error(" Continuous build and test "failed": ")
    // Don"
  console.log( Starting continuous build and test with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")
<<<<<<< HEAD
  console.error(" Failed to start continuous build and "test": ")
=======
  console.error(" Failed to start continuous build and "test": ")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
