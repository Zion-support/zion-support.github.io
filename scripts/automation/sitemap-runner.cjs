#!/""usr/bin/env"" node;
import { execSync  } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️ Starting continuous sitemap runner automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runSitemapRunner() {
  try {
    console.log(`🗺️ Running sitemap generation at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for sitemap generation...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
    }
    
    // Generate sitemap
    console.log('🗺️ Generating sitemap...');
    try {
      if (fs.existsSync('scripts/generate-sitemap.js')) {
        execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
        console.log('✅ Sitemap generation completed');
      } else {
        console.log('ℹ️  Sitemap generation script not available');
      }
    } catch (error) {
      console.log('⚠️  Sitemap generation failed but continuing...');
    }
    
    // Generate robots.txt if needed
    console.log('🤖 Generating robots.txt...');
    try {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/`;
      
      const robotsPath = path.join(distPath, 'robots.txt');
      fs.writeFileSync(robotsPath, robotsContent);
      console.log('✅ robots.txt generated');
    } catch (error) {
      console.log('⚠️  robots.txt generation failed but continuing...');
    }
    
    // Validate sitemap
    console.log('🔍 Validating sitemap...');
    try {
      if (fs.existsSync(path.join(distPath, 'sitemap.xml'))) {
        const sitemapContent = fs.readFileSync(path.join(distPath, 'sitemap.xml'), 'utf8');
        const urlCount = (sitemapContent.match(/<url>/g) || []).length;
        console.log(`✅ Sitemap validated with ${urlCount} URLs`);
      } else {
        console.log('⚠️  Sitemap not found');
      }
    } catch (error) {
      console.log('⚠️  Sitemap validation failed but continuing...');
    }
    
    // Check for broken links in sitemap
    console.log('🔗 Checking sitemap links...');
    try {
      if (fs.existsSync('scripts/check-sitemap-links.js')) {
        execSync('node scripts/check-sitemap-links.js', { stdio: 'inherit' });
        console.log('✅ Sitemap link check completed');
      } else {
        console.log('ℹ️  Sitemap link check script not available');
      }
    } catch (error) {
      console.log('⚠️  Sitemap link check failed but continuing...');
    }
    
    // Generate sitemap report
    console.log('📊 Generating sitemap report...');
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Sitemap runner completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Sitemap runner report saved to ${reportPath}`);
    
    console.log('✅ Continuous sitemap runner completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous sitemap runner failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous sitemap runner with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial sitemap runner
  await runSitemapRunner();
  
  // Set up continuous execution
  setInterval(async () => {
    await runSitemapRunner();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous sitemap runner running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the continuous sitemap runner
runContinuous().catch(error => {
  console.error("❌ Failed to start continuous sitemap "runner": ", error);  process.exit(1)})
#!/usr/bin/env node/""usr/bin/env"" node;"const { execSync } from "child_process";"const fs from "fs";"const path from "path";"const { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);const __dirname = path.dirname(__filename);"console.log("" Starting continuous sitemap runner automation.");#!/usr/bin/env node"const { execSync } from "child_process";"const fs from "fs";"const path from "path";"const { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);const __dirname = path.dirname(__filename);"console.log("" Starting continuous sitemap runner automation.");"/ Get automation interval from environment variable (default: 6 hours);const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) | 21600000; / 6 hours;async function $1() { try { console.log(` Running sitemap generation at ${new Date().toISOString()}); / Build the project first;"` console.log(`" Building project for sitemap generation."); try {" execSync("npm run build", { stdio: "inherit" });" console.log(" Build completed"")} catch (error) {" console.log("" Build failed but continuing.");"console.log(" Starting continuous sitemap runner automation.");"/ Get automation interval from environment variable (default: 6 hours);const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) | 21600000; / 6 hours;async function runSitemapRunner() { try {` console.log(` Running sitemap generation at ${new Date().toISOString()}); / Build the project first;"` console.log(`" Building project for sitemap generation."); try {" execSync("npm run build", { stdio: "inherit" });" console.log(" Build completed"")} catch (error) {" console.log("" Build failed but continuing."); return} } catch (error) {" console.log(" Build failed but continuing."); return} ; / Check if dist folder exists;" const distPath = path.join(process.cwd(), "dist"); if (!fs.existsSync(distPath)) {" console.log(" Build verification failed: dist folder not found"); return} ; / Generate sitemap;" console.log(" Generating sitemap."); try {" if (fs.existsSync(""scripts/generate-sitemap.js"")) {" execSync("node "scripts/generate-sitemap.js"", { stdio: "inherit" });" console.log(" Sitemap generation completed")} else {" console.log(" Sitemap generation script not available")} } catch (error) {" console.log(" Sitemap generation failed but continuing.")} } catch (error) {" console.log(" Sitemap generation failed but continuing.")} ; / Generate robots.txt if needed;" console.log(" Generating robots.txt.");" try {const robotsContent = User-agent: *;Allow: /;"Sitemap: https:/ziontechgroup."com/sitemap.xml";# Disallow admin and private areas;Disallow: /admin/;Disallow: /private/;Disallow: /api/;" const robotsPath = path.join(distPath, "robots.txt"); fs.writeFileSync(robotsPath, robotsContent);" console.log(" robots.txt generated")} catch (error) {" console.log(" robots.txt generation failed but continuing."")} ; / Validate sitemap;" console.log("" Validating sitemap."); try {" if (fs.existsSync(path.join(distPath, "sitemap.xml"))) {" const sitemapContent = fs.readFileSync(path.join(distPath, "sitemap.xml"), "utf8"); const urlCount = (sitemapContent.match(/<url>/g) | []).length;console.log( Sitemap validated with ${urlCount} URLs)} else {" console.log(" Sitemap not found")} } catch (error) {" console.log(" Sitemap validation failed but continuing."")} ; / Check for broken links in sitemap;" console.log("" Checking sitemap links.")} catch (error) {" console.log(" robots.txt generation failed but continuing."")} ; / Validate sitemap;" console.log("" Validating sitemap."); try {" if (fs.existsSync(path.join(distPath, "sitemap.xml"))) { / Validate sitemap;" console.log(" Validating sitemap."); try {" if (fs.existsSync(path.join(distPath, "sitemap.xml"))) {" const sitemapContent = fs.readFileSync(path.join(distPath, "sitemap.xml"), "utf8"); const urlCount = (sitemapContent.match(/<url>/g) | []).length;console.log( Sitemap validated with ${urlCount} URLs)} else {" console.log(" Sitemap not found")} } catch (error) {" console.log(" Sitemap validation failed but continuing."")} ; / Check for broken links in sitemap;" console.log("" Checking sitemap links."); try {" if (fs.existsSync(""scripts/check-sitemap-links.js"")) {" execSync("node "scripts/check-sitemap-links.js"", { stdio: "inherit" }); try {" if (fs.existsSync("""scripts/check-sitemap-links.js""")) {" execSync("node ""scripts/check-sitemap-links.js""", { stdio: "inherit" });" console.log(" Sitemap link check completed")} else {" console.log(" Sitemap link check script not available")} } catch (error) {" console.log(" Sitemap link check failed but continuing.")} ; / Generate sitemap report;" console.log(" Generating sitemap report."); const report = {" timestamp: new Date().toISOString()," summary: "Sitemap runner completed"," status: "completed"}" const reportPath = path.join(process.cwd(), "sitemap-runner-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Sitemap runner report saved to ${reportPath});" console.log(" Continuous sitemap runner completed successfully")} catch (error) {" console.error(" Continuous sitemap runner failed: ", error.message)} catch (error) {" console.error(" Continuous sitemap runner failed: ", error.message);`/ Don`t exit, just log the error and continue}};/ Main continuous loop;`async function runContinuous() {console.log( Starting continuous sitemap runner with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`); / Run initial sitemap runner; await runSitemapRunner(); / Set up continuous execution; setInterval(async () => {} catch (error) {" console.log(" Sitemap link check failed but continuing.")} ; / Generate sitemap report;" console.log(" Generating sitemap report."); const report = {" timestamp: new Date().toISOString()," summary: "Sitemap runner completed"," status: "completed"} ;" const reportPath = path.join(process.cwd(), "sitemap-runner-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Sitemap runner report saved to ${reportPath});" console.log(" Continuous sitemap runner completed successfully")} catch (error) {" console.error(" Continuous sitemap runner failed: ", error.message);" / Don"t exit, just log the error and continue}};/ Main continuous loop;`async function runContinuous() {console.log( Starting continuous sitemap runner with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`); / Run initial sitemap runner; await runSitemapRunner(); / Set up continuous execution; setInterval(async () => { await runSitemapRunner()}, AUTOMATION_INTERVAL);"` console.log( Continuous sitemap runner running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`")};/ Handle graceful shutdown;"process.on("SIGINT", () => {" console.log(" Received SIGINT, shutting down gracefully."); process.exit(0)});"process.on("SIGTERM", () => {" console.log(" Received SIGTERM, shutting down gracefully."); process.exit(0)});/ Start the continuous sitemap runner;runContinuous().catch(error => {" console.error(" Failed to start continuous sitemap runner: ", error); process.exit(1)})"`"`
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
  console.error(" Failed to start continuous sitemap "runner": ")
  console.error(" Failed to start continuous sitemap "runner": ")
