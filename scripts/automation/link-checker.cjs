<<<<<<< HEAD
#!/""usr/bin/env"" node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔗 Starting continuous link checker automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function checkLinks() {
  try {
    console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('📦 Building project...');
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
      console.log('⚠️  Dist folder not found, skipping link check');
      return;
    }
    
    // Check for index.html
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      console.log('⚠️  index.html not found in build output');
      return;
    }
    
    console.log('✅ index.html found in build output');
    
    // Find all HTML files
    const htmlFiles = findHtmlFiles(distPath);
    console.log(`📄 Found ${htmlFiles.length} HTML files to check`);
    
    // Check for broken references
    let hasIssues = false;
    const brokenReferences = [];
    
    for (const htmlFile of htmlFiles) {
      try {
        const content = fs.readFileSync(htmlFile, 'utf8');
        const references = findReferences(content);
        
        for (const ref of references) {
          if (!isValidReference(ref, distPath)) {
            brokenReferences.push({
              file: path.relative(process.cwd(), htmlFile),
              reference: ref
            });
            hasIssues = true;
          }
        }
      } catch (error) {
        console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);
      }
    }
    
    if (brokenReferences.length > 0) {
      console.log('⚠️  Broken references found:');
      brokenReferences.forEach(ref => {
        console.log(`  - ${ref.file}: ${ref.reference}`);
      });
    }
    
    if (!hasIssues) {
      console.log('✅ No broken references found');
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      hasIssues,
      htmlFiles: htmlFiles.length,
      brokenReferences: brokenReferences.length,
      summary: 'Link check completed'
    };
    
    const reportPath = path.join(process.cwd(), 'link-checker-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
    
  } catch (error) {
    console.error('❌ Link check failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function findReferences(content) {
  const references = [];
  
  // Find href attributes
  const hrefMatches = content.match(/href=["']([^"']+)["']/g);
  if (hrefMatches) {
    hrefMatches.forEach(match => {
      const href = match.match(/href=["']([^"']+)["']/)[1];
      if (href && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('http')) {
        references.push(href);
      }
    });
  }
  
  // Find src attributes
  const srcMatches = content.match(/src=["']([^"']+)["']/g);
  if (srcMatches) {
    srcMatches.forEach(match => {
      const src = match.match(/src=["']([^"']+)["']/)[1];
      if (src && !src.startsWith('data:') && !src.startsWith('blob:') && !src.startsWith('http')) {
        references.push(src);
      }
    });
  }
  
  return references;
}

function isValidReference(ref, distPath) {
  if (ref.startsWith('/')) {
    ref = ref.substring(1);
  }
  
  const fullPath = path.join(distPath, ref);
  return fs.existsSync(fullPath);
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial check
  await checkLinks();
  
  // Set up continuous execution
  setInterval(async () => {
    await checkLinks();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the continuous link checker
runContinuous().catch(error => {
  console.error("❌ Failed to start continuous link "checker": ", error);  process.exit(1)})
#!/usr/bin/env node/""usr/bin/env"" node;"const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log("" Starting continuous link checker automation.");#!/usr/bin/env node"const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log("" Starting continuous link checker automation.");"/ Get automation interval from environment variable (default: 30 minutes);const AUTOMATION_INTERVAL = null; parseInt(process.env.AUTOMATION_INTERVAL) | 1800000; / 30 minutes;async function $1() { try { console.log(` Running link check at ${new Date().toISOString()}); / Build the project first;"` console.log(`" Building project."); try {" console.log(" Starting continuous link checker automation.");"/ Get automation interval from environment variable (default: 30 minutes);const AUTOMATION_INTERVAL = null; parseInt(process.env.AUTOMATION_INTERVAL) | 1800000; / 30 minutes;async function checkLinks() { try {` console.log(` Running link check at ${new Date().toISOString()}); / Build the project first;"` console.log(`" Building project."); try {" execSync("npm run build", { stdio: "inherit" });" console.log(" Build completed"")} catch (error) {" console.log(" Build failed but continuing."); return};" execSync("npm run build", { stdio: "inherit" });" console.log(" Build completed"")} catch (error) {" console.log(" Build failed but continuing."); return}; / Check if dist folder exists;" const distPath = path.join(process.cwd(), "dist"); if (!fs.existsSync(distPath)) {" console.log(" Dist folder not found, skipping link check"); return}; / Check for index.html;" const indexHtmlPath = path.join(distPath, "index.html"); if (!fs.existsSync(indexHtmlPath)) {" console.log(" index.html not found in build output"); return};" console.log(" index.html found in build output"); / Find all HTML files; const htmlFiles = findHtmlFiles(distPath);console.log( Found ${htmlFiles.length} HTML files to check); / Check for broken references; let hasIssues = false; const brokenReferences = []; for (const htmlFile of htmlFiles) { try {" const content = fs.readFileSync(htmlFile, "utf8"); / Check for index.html;" const indexHtmlPath = path.join(distPath, "index.html"); if (!fs.existsSync(indexHtmlPath)) {" console.log(" index.html not found in build output"); return};" console.log(" index.html found in build output"); / Find all HTML files; const htmlFiles = findHtmlFiles(distPath);console.log( Found ${htmlFiles.length} HTML files to check); / Check for broken references; let hasIssues = false; const brokenReferences = []; for (const htmlFile of htmlFiles) { try {" const content = fs.readFileSync(htmlFile, "utf8"); const references = findReferences(content); for (const ref of references) { if (!isValidReference(ref, distPath)) { brokenReferences.push({" file: path.relative(process.cwd(), htmlFile)," reference: ref}); hasIssues = true} }" } catch (error) { console.log( Could not read ${htmlFile }: ${error.message}"")} }; if (brokenReferences.length > 0) {" console.log("" Broken references found: ");" brokenReferences.forEach(ref => {console.log(" - ${ref.file}: ${ref.reference})})}; if (!hasIssues) {" console.log("" No broken references found")}; / Generate report; const report = {" timestamp: new Date().toISOString(), hasIssues," htmlFiles: htmlFiles.length," brokenReferences: brokenReferences.length," summary: "Link check completed"}"` const reportPath = path.join(process.cwd(), "link-checker-report.json`);` fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Report saved to ${reportPath}`)} catch (error) {" console.error(" Link check failed: ", error.message);` / Don`t exit, just log the error and continue} }; / Generate report; const report = {" timestamp: new Date().toISOString(), hasIssues," htmlFiles: htmlFiles.length," brokenReferences: brokenReferences.length," summary: "Link check completed"};" const reportPath = path.join(process.cwd(), "link-checker-report.json");` fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Report saved to ${reportPath}`)} catch (error) {" console.error(" Link check failed: ", error.message);" / Don"t exit, just log the error and continue}};function findHtmlFiles(dir) { const files = []; const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {" files.push(.findHtmlFiles(fullPath))} else if (item.endsWith(".html")) { "} else if (item.endsWith(".html")) { files.push(fullPath)} }; return files};function findReferences(content) { const references = []; / Find href attributes;" const hrefMatches = content.match(/href=[""]([^"]+)["]/g); if (hrefMatches) { hrefMatches.forEach(match => {" const href = match.match(/href=["]([^"]+)["]/)[1]; if (; href &&;" !href.startsWith("#") &&;" !href.startsWith("javascript: ") &&;" !href.startsWith("http"); ) { references.push(href)} })}; / Find src attributes;" const srcMatches = content.match(/src=["]([^""]+)[""]/g); if (srcMatches) { srcMatches.forEach(match => {" const src = match.match(/src=["]([^"]+)[""]/)[1]; if (; src &&;" !src.startsWith("data: ") &&;" !src.startsWith("blob:") &&;" !src.startsWith("http"); ) { if (; src &&;" !src.startsWith("data:") &&;" !src.startsWith("blob:") &&;" !src.startsWith("http"); ) { references.push(src)} })}; return references};function isValidReference(ref, distPath) {" if (ref.startsWith("/")) { ref = ref.substring(1)}; const fullPath = path.join(distPath, ref); return fs.existsSync(fullPath)};/ Main continuous loop;async function runContinuous() {" console.log(" Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals";/ Main continuous loop;async function runContinuous() {` console.log(` Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`; ); / Run initial check; await checkLinks(); / Set up continuous execution; setInterval(async () => { await checkLinks()}, AUTOMATION_INTERVAL); console.log( Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes;" ")};/ Handle graceful shutdown;"process.on("SIGINT", () => {" console.log(" Received SIGINT, shutting down gracefully.");` console.log(` Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`); ); / Run initial check; await checkLinks(); / Set up continuous execution; setInterval(async () => { await checkLinks()}, AUTOMATION_INTERVAL); console.log( Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes;` `)};/ Handle graceful shutdown;"process.on("SIGINT", () => {" console.log(" Received SIGINT, shutting down gracefully."); process.exit(0)});"process.on("SIGTERM", () => {" console.log(" Received SIGTERM, shutting down gracefully."); process.exit(0)});/ Start the continuous link checker;runContinuous().catch(error => {" console.error(" Failed to start continuous link checker: ", error); process.exit(1)})"`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
  console.log("⚠  Build failed but continuing...")
      execSync("npm run build", { "stdio": "inherit"})
// console.log(" Build completed"")
  console.log("⚠  Build failed but continuing...")
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
  "file"
              "reference"
      } catch (error) {  console.log(⚠  Could not read ${htmlFile  }: ${error.message}"")
  console.log(""⚠  Broken references "found": ")
      brokenReferences.forEach(ref => {console.log("})
  console.log("" No broken references found")
  "timestamp"
      "htmlFiles"
      "brokenReferences"
      "summary": "Link check completed"
    const reportPath = path.join(process.cwd(), "
  console.error(" Link check "failed": ")
  "timestamp"
      "htmlFiles"
      "brokenReferences"
      "summary": "Link check completed"
    const reportPath = path.join(process.cwd(), "link-checker-report.json"
  console.error(" Link check "failed": ")
    // Don"
  files.push(...findHtmlFiles(fullPath))} else if (item.endsWith(".html")
} else if (item.endsWith(".html")
  const hrefMatches = content.match(/href=[""]([^"]+)["]
  const href = match.match(/href=["]([^"]+)["]
        !href.startsWith("#")
        !href.startsWith(""javascript": ")
        !href.startsWith("http")
  const srcMatches = content.match(/src=["]([^""]+)[""]
  const src = match.match(/src=["]([^"]+)[""]
        !src.startsWith(""data": ")
        !src.startsWith("blob:")
        !src.startsWith("http")
        !src.startsWith("data:")
        !src.startsWith("blob:")
        !src.startsWith("http")
  if (ref.startsWith("/")
  console.log(" Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
  "
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")
<<<<<<< HEAD
  console.error(" Failed to start continuous link "checker": ")
=======
  console.error(" Failed to start continuous link "checker": ")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
