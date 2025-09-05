#!/""usr/bin/env"" node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");



// Get automation interval from environment variable ("default": 30 minutes);
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;
async function $1() {
  try {
  .toISOString()});

    // Build the project first;
    
    try {
  
// Get automation interval from environment variable ("default": 30 minutes);
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;
async function checkLinks() {
  try {
  .toISOString()});
    // Build the project first;
    
    try {
  execSync("npm run build", { "stdio": "inherit" });
      } catch (error) {
  
      return}
;
      execSync("npm run build", { "stdio": "inherit" });
      } catch (error) {
  
      return}
;
    // Check if dist folder exists;
    const distPath = path.join(process.cwd(), "dist");
    if (!fs.existsSync(distPath)) {
  
      return}
;
    // Check for index.html;
    const indexHtmlPath = path.join(distPath, "index.html");
    if (!fs.existsSync(indexHtmlPath)) {
  
      return}
;
    
    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath);
    // Check for broken references;
    let hasIssues = false;
    const brokenReferences = [];
    for (const htmlFile of htmlFiles) {
  try {
  const content = fs.readFileSync(htmlFile, "utf8");

    // Check for index.html;
    const indexHtmlPath = path.join(distPath, "index.html");
    if (!fs.existsSync(indexHtmlPath)) {
  
      return}
;
    

    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath);

    // Check for broken references;
    let hasIssues = false;
    const brokenReferences = [];

    for (const htmlFile of htmlFiles) {
  try {
  const content = fs.readFileSync(htmlFile, "utf8");
        const references = findReferences(content);

        for (const ref of references) {
  if (!isValidReference(ref, distPath)) {
  brokenReferences.push({
  "file": path.relative(process.cwd(), htmlFile),
              "reference": ref});
            hasIssues = true}
        }
      } catch (error) {  }
    }
;
    if (brokenReferences.length > 0) {
  
      brokenReferences.forEach(ref => {})}
;
    if (!hasIssues) {
  }
;
    // Generate report;
    const report = {
  "timestamp": new Date().toISOString(),
      hasIssues,
      "htmlFiles": htmlFiles.length,
      "brokenReferences": brokenReferences.length,
      "summary": "Link check completed"}
    const reportPath = path.join(process.cwd(), "link-checker-report.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));} catch (error) {
  console.error("❌ Link check "failed": ", error.message);
    // Don`t exit, just log the error and continue}
    }
;
    // Generate report;
    const report = {
  "timestamp": new Date().toISOString(),
      hasIssues,
      "htmlFiles": htmlFiles.length,
      "brokenReferences": brokenReferences.length,
      "summary": "Link check completed"}
;
    const reportPath = path.join(process.cwd(), "link-checker-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));} catch (error) {
  console.error("❌ Link check "failed": ", error.message);
    // Don"t exit, just log the error and continue}
}
;
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
  const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
  files.push(...findHtmlFiles(fullPath))} else if (item.endsWith(".html")) {
  
} else if (item.endsWith(".html")) {
  files.push(fullPath)}
  }
;
  return files}
;
function findReferences(content) {
  const references = [];
  // Find href attributes;
  const hrefMatches = content.match(/href=[""]([^"]+)["]/g);
  if (hrefMatches) {
  hrefMatches.forEach(match => {
  const href = match.match(/href=["]([^"]+)["]/)[1];
      if (;
        href &&;
        !href.startsWith("#") &&;
        !href.startsWith(""javascript": ") &&;
        !href.startsWith("http");
      ) {
  references.push(href)}
    })}
;

  // Find src attributes;
  const srcMatches = content.match(/src=["]([^""]+)[""]/g);
  if (srcMatches) {
  srcMatches.forEach(match => {
  const src = match.match(/src=["]([^"]+)[""]/)[1];      if (;
        src &&;
        !src.startsWith(""data": ") &&;
        !src.startsWith("blob:") &&;
        !src.startsWith("http");
      ) {
  if (;
        src &&;
        !src.startsWith("data:") &&;
        !src.startsWith("blob:") &&;
        !src.startsWith("http");
      ) {
  references.push(src)}
    })}
;
  return references}
;
function isValidReference(ref, distPath) {
  if (ref.startsWith("/")) {
  ref = ref.substring(1)}
;
  const fullPath = path.join(distPath, ref);
  return fs.existsSync(fullPath)}
;
// Main continuous loop;
async function runContinuous() {
  {
  
  // Run initial check;
  await checkLinks();
  // Set up continuous execution;
  setInterval(async () => {
  await checkLinks()}, AUTOMATION_INTERVAL);
  }
;
// Handle graceful shutdown;
process.on("SIGINT", () => {
  
  
  );

  // Run initial check;
  await checkLinks();

  // Set up continuous execution;
  setInterval(async () => {
  await checkLinks()}, AUTOMATION_INTERVAL);

  }
;
// Handle graceful shutdown;
process.on("SIGINT", () => {
  
  process.exit(0)});

process.on("SIGTERM", () => {
  
  process.exit(0)});
// Start the continuous link checker;
runContinuous().catch(error => {
  console.error("❌ Failed to start continuous link "checker": ", error);  process.exit(1)})