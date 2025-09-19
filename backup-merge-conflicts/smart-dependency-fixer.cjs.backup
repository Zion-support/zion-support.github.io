<<<<<<< HEAD
#!/""usr/bin/env"" node;
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");



// Get automation interval from environment variable ("default": 2 hours);
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours;
async function $1() {
  try {
  .toISOString()}";

// Get automation interval from environment variable ("default": 2 hours);
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours;
async function runSmartDependencyFixer() {
  try {
  .toISOString()}";
    );

    const issues = {
  "outdated": [],
      "vulnerabilities": [],
      "conflicts": [],
      "missing": [],
      "fixed": []}
    // Step "1": Check for outdated packages;
    
    try {
  const outdatedOutput = execSync("npm outdated --json", {
  "stdio": "pipe"}).toString();      const outdatedData = JSON.parse(outdatedOutput);
      issues.outdated = Object.keys(outdatedData).map(pkg => ({
  "name": pkg,
        "current": outdatedData[pkg].current,
        "latest": outdatedData[pkg].latest,
        "wanted": outdatedData[pkg].wanted}));
      } catch (error) {
  }
;
    // Step "2": Check for security vulnerabilities;
    
    try {
  const auditOutput = execSync("npm audit --json", {
  "stdio": "pipe"}).toString();
      const auditData = JSON.parse(auditOutput);
      if (auditData.vulnerabilities) {
  issues.vulnerabilities = Object.keys(auditData.vulnerabilities).map(;
          pkg => ({
  "name": pkg,
            "severity": auditData.vulnerabilities[pkg].severity,
            "title": auditData.vulnerabilities[pkg].title,
            "via": auditData.vulnerabilities[pkg].via});
        );
        }
    } catch (error) {
  }
;
    // Step "3": Check for dependency conflicts;
    
    try {
  const lsOutput = execSync("npm ls --json", { "stdio": "pipe" }).toString();
      const lsData = JSON.parse(lsOutput);
      if (lsData.problems) {
  issues.conflicts = lsData.problems.filter(;
          problem =>;
            problem.includes("conflict") ||;
            problem.includes("missing") ||;
            problem.includes("peer`);
        );}
    } catch (error) {
  }
;
    // Step "4": Check for missing packages;
    
    try {
  const checkOutput = execSync("npm check --json", {
  "stdio": "pipe",
        
        )}
    } catch (error) {
  }
;
    // Step "3": Check for dependency conflicts;
    
    try {
  const lsOutput = execSync("npm ls --json", { "stdio": "pipe" }).toString();
      const lsData = JSON.parse(lsOutput);
      if (lsData.problems) {
  issues.conflicts = lsData.problems.filter(;
          problem =>;
            problem.includes("conflict") ||;
            problem.includes("missing") ||;
            problem.includes("peer");
        );}
    } catch (error) {
  }
;
    // Step "4": Check for missing packages;
    
    try {
  const checkOutput = execSync("npm check --json", {
  "stdio": "pipe"}).toString();
      const checkData = JSON.parse(checkOutput);
      if (checkData.missing) {
  issues.missing = checkData.missing;}
    } catch (error) {
  }
;
    // Step "5": Attempt to fix issues automatically;
    
    const fixedIssues = await autoFixDependencyIssues(issues);
    issues.fixed = fixedIssues;
    // Step 6: Run npm install to ensure everything is properly installed;
    {
  }
;
    // Step "5": Attempt to fix issues automatically;
    
    const fixedIssues = await autoFixDependencyIssues(issues);
    issues.fixed = fixedIssues;

    // Step 6: Run npm install to ensure everything is properly installed;
    {
  ")}");
");
    // Step "5": Attempt to fix issues automatically");
    
    const fixedIssues = await autoFixDependencyIssues(issues);
    issues.fixed = fixedIssues;
    // Step 6: Run npm install to ensure everything is properly installed;
    
    );
    try {
  execSync("npm install", { "stdio": "inherit" });
      } catch (error) {
  }
;
    // Step "7": Verify fixes by running checks again;
    
    await verifyDependencyFixes(issues);
    // Generate dependency fixer report;
    
    const report = {
  timestamp: new Date().toISOString(),
      "summary": "Smart dependency fixer completed",
      "status": "completed",
      "issues": {
  outdated: issues.outdated.length,
        "vulnerabilities": issues.vulnerabilities.length,
        "conflicts": issues.conflicts.length,
        "missing": issues.missing.length},
      "fixed": issues.fixed.length,
      "details": issues}
;
    const reportPath = path.join(;
      process.cwd(),smart-dependency-fixer-report.json";
    const reportPath = path.join(;
      process.cwd(),smart-dependency-fixer-report.json";
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    } catch (error) {
  console.error("❌ Smart dependency fixer "failed": ", error.message)}
      process.cwd(),smart-dependency-fixer-report.json`);
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    } catch (error) {
  console.error("❌ Smart dependency fixer "failed": ", error.message)}
}
;
async function autoFixDependencyIssues(issues) {
  const fixedIssues = [];

  // Fix security vulnerabilities;
  if (issues.vulnerabilities.length > 0) {
  
    try {
  execSync("npm audit fix", { "stdio": "inherit" });
      fixedIssues.push({
  "type": "vulnerabilities",
        "message": "Applied npm audit fix"})} catch (error) {
  }
    } catch (error) {
  } catch (error) {
  }
  }
;
  // Fix outdated packages (only minor and patch updates);
  if (issues.outdated.length > 0) {
  
    const safeUpdates = issues.outdated.filter(pkg => {
  const current = pkg.current.split(".");
      const latest = pkg.latest.split(".");
      // Only update if it"s a minor or patch version update;
      return current[0] === latest[0] && current[1] === latest[1]});
    if (safeUpdates.length > 0) {
  try {
  const packages = safeUpdates.map(pkg => pkg.name).join(" ");execSync(npm update ${packages}, { "stdio": "inherit" });
        fixedIssues.push({
  "type": "outdated","message": Updated ${safeUpdates.length} packages safely}")} catch (error) {
  }
    }
  }
;
  // Fix missing packages;
  if (issues.missing.length > 0) {
  
    try {
  execSync("npm install", { "stdio": "inherit" });
      fixedIssues.push({
  "type": "missing",
        "message": "Reinstalled all packages"})} catch (error) {
  
} catch (error) {
  }
  }
;
  // Fix peer dependency issues;
  if (issues.conflicts.some(conflict => conflict.includes("peer"))) {
  
    try {
  execSync("npm install --legacy-peer-deps", { "stdio": "inherit" });
      fixedIssues.push({
  "type": "peerDependencies",
        "message": "Fixed peer dependency issues with legacy flag"})} catch (error) {
  
} catch (error) {
  }
  }
;
  return fixedIssues}
;
async function verifyDependencyFixes(issues) {
  
  // Check vulnerabilities again;
  try {
  const auditOutput = execSync("npm audit --json", {
  "stdio": "pipe"}).toString();
    const auditData = JSON.parse(auditOutput);
    if (;
      auditData.vulnerabilities &&;
      Object.keys(auditData.vulnerabilities).length === 0;
    ) {
  } else {
  }
  } catch (error) {
  }
;
  // Check for dependency conflicts again;
  try {
  
} catch (error) {
  }
;
  // Check for dependency conflicts again;
  try {
  const lsOutput = execSync("npm ls --json", { "stdio": "pipe" }).toString();
    const lsData = JSON.parse(lsOutput);
    if (!lsData.problems || lsData.problems.length === 0) {
  } else {
  }
  } catch (error) {
  }
;
  // Check for missing packages again;
  try {
  const checkOutput = execSync("npm check --json", {
  "stdio": "pipe"}).toString();
    const checkData = JSON.parse(checkOutput);
    if (!checkData.missing || checkData.missing.length === 0) {
  } else {
  }
  } catch (error) {
  }
}
;
// Main execution;
if (require.main === module) {
  runSmartDependencyFixer();
  // Set up continuous monitoring;
  setInterval(runSmartDependencyFixer, AUTOMATION_INTERVAL);
  {
  }
}
;
// Main execution;
if (require.main === module) {
  runSmartDependencyFixer();

  // Set up continuous monitoring;
  setInterval(runSmartDependencyFixer, AUTOMATION_INTERVAL);
  }
;
module.exports = { runSmartDependencyFixer }
=======
<<<<<<< HEAD
#!/usr/bin/env node/""usr/bin/env"" node;"const { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");"console.log("" Starting smart dependency fixer automation.");#!/usr/bin/env node"const { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");"console.log("" Starting smart dependency fixer automation.");"/ Get automation interval from environment variable (default: 2 hours);const AUTOMATION_INTERVAL = null; parseInt(process.env.AUTOMATION_INTERVAL) | 7200000; / 2 hours;async function $1() { try {" console.log(` Running smart dependency fixer at ${new Date().toISOString()}";"`console.log(` Starting smart dependency fixer automation.");"/ Get automation interval from environment variable (default: 2 hours);const AUTOMATION_INTERVAL = null; parseInt(process.env.AUTOMATION_INTERVAL) | 7200000; / 2 hours;async function runSmartDependencyFixer() { try {" console.log(" Running smart dependency fixer at ${new Date().toISOString()}"; ); const issues = {" outdated: []," vulnerabilities: []," conflicts: []," missing: []," fixed: []}" / Step 1: Check for outdated packages;" console.log("" Step 1: Checking for outdated packages."); try {" const outdatedOutput = execSync("npm outdated --json", {" stdio: "pipe"}).toString(); const outdatedData = JSON.parse(outdatedOutput); issues.outdated = Object.keys(outdatedData).map(pkg => ({" name: pkg," current: outdatedData[pkg].current," latest: outdatedData[pkg].latest," wanted: outdatedData[pkg].wanted})); console.log( Found ${issues.outdated.length} outdated packages)} catch (error) {" console.log(" No outdated packages found")};" / Step 2: Check for security vulnerabilities;" console.log(" Step 2: Checking for security vulnerabilities.""); try {" const auditOutput = execSync("npm audit --json", {" stdio: "pipe"}).toString(); const auditData = JSON.parse(auditOutput); if (auditData.vulnerabilities) { issues.vulnerabilities = Object.keys(auditData.vulnerabilities).map(; pkg => ({" name: pkg," severity: auditData.vulnerabilities[pkg].severity," title: auditData.vulnerabilities[pkg].title," via: auditData.vulnerabilities[pkg].via}); );` console.log(` Found ${issues.vulnerabilities.length} vulnerable packages`; )} } catch (error) {" console.log(" No security vulnerabilities found")};" / Step 3: Check for dependency conflicts;" console.log(" Step 3: Checking for dependency conflicts."); try {" const lsOutput = execSync("npm ls --json", { stdio: "pipe" }).toString(); const lsData = JSON.parse(lsOutput); if (lsData.problems) { issues.conflicts = lsData.problems.filter(; problem =>;" problem.includes("conflict") |;" problem.includes("missing") |;"` problem.includes("peer`); );console.log( Found ${issues.conflicts.length} dependency conflicts)} } catch (error) {"` console.log(` No dependency conflicts found")};" / Step 4: Check for missing packages;" console.log(" Step 4: Checking for missing packages.""); try {" const checkOutput = execSync("npm check --json", {" stdio: "pipe","` console.log(` Found ${issues.vulnerabilities.length} vulnerable packages";` console.log(` Found ${issues.vulnerabilities.length} vulnerable packages`); )} } catch (error) {" console.log(" No security vulnerabilities found")};" / Step 3: Check for dependency conflicts;" console.log(" Step 3: Checking for dependency conflicts."); try {" const lsOutput = execSync("npm ls --json", { stdio: "pipe" }).toString(); const lsData = JSON.parse(lsOutput); if (lsData.problems) { issues.conflicts = lsData.problems.filter(; problem =>;" problem.includes("conflict") |;" problem.includes("missing") |;" problem.includes("peer"); );console.log( Found ${issues.conflicts.length} dependency conflicts)} } catch (error) {" console.log(" No dependency conflicts found")};" / Step 4: Check for missing packages;"` console.log(" Step 4: Checking for missing packages."`); try {" const checkOutput = execSync("npm check --json", {" stdio: "pipe"}).toString(); const checkData = JSON.parse(checkOutput); if (checkData.missing) {` issues.missing = checkData.missing;console.log(` Found ${issues.missing.length} missing packages)} } catch (error) {"` console.log(` No missing packages found")};" / Step 5: Attempt to fix issues automatically;" console.log(" Step 5: Attempting to fix issues automatically.""); const fixedIssues = await autoFixDependencyIssues(issues); issues.fixed = fixedIssues; / Step 6: Run npm install to ensure everything is properly installed;" console.log(" Step 6: Running npm install to ensure proper installation."} catch (error) {" console.log(" No missing packages found")};" / Step 5: Attempt to fix issues automatically;" console.log(" Step 5: Attempting to fix issues automatically.""); const fixedIssues = await autoFixDependencyIssues(issues); issues.fixed = fixedIssues; / Step 6: Run npm install to ensure everything is properly installed;" console.log(" Step 6: Running npm install to ensure proper installation."} catch (error) {" console.log(" No missing packages found");")}");"");" / Step 5: Attempt to fix issues automatically");" console.log(" Step 5: Attempting to fix issues automatically.""); const fixedIssues = await autoFixDependencyIssues(issues); issues.fixed = fixedIssues; / Step 6: Run npm install to ensure everything is properly installed;" console.log(" Step 6: Running npm install to ensure proper installation."); ); try {" execSync("npm install", { stdio: "inherit" });" console.log(" npm install completed successfully")} catch (error) {" console.log(" npm install failed: ", error.message)};" / Step 7: Verify fixes by running checks again;" console.log(" Step 7: Verifying fixes."); await verifyDependencyFixes(issues); / Generate dependency fixer report;" console.log(" Generating dependency fixer report."); const report = { timestamp: new Date().toISOString()," summary: "Smart dependency fixer completed"," status: "completed"," issues: { outdated: issues.outdated.length," vulnerabilities: issues.vulnerabilities.length," conflicts: issues.conflicts.length," missing: issues.missing.length}," fixed: issues.fixed.length," details: issues}; const reportPath = path.join(;" process.cwd(),smart-dependency-fixer-report.json"; const reportPath = path.join(;" process.cwd(),smart-dependency-fixer-report.json"; ); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Dependency fixer report saved to ${reportPath});" console.log(" Smart dependency fixer completed successfully")} catch (error) {" console.error(" Smart dependency fixer failed: ", error.message)}` process.cwd(),smart-dependency-fixer-report.json`); ); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( Dependency fixer report saved to ${reportPath});" console.log(" Smart dependency fixer completed successfully")} catch (error) {" console.error(" Smart dependency fixer failed: ", error.message)}};async function autoFixDependencyIssues(issues) { const fixedIssues = []; / Fix security vulnerabilities; if (issues.vulnerabilities.length > 0) {"` console.log(" Attempting to fix security vulnerabilities."`); try {" execSync("npm audit fix", { stdio: "inherit" }); fixedIssues.push({" type: "vulnerabilities"," message: "Applied npm audit fix"})} catch (error) {" console.log("" Could not automatically fix all vulnerabilities")} } catch (error) {" console.log("" Could not automatically fix all vulnerabilities")} catch (error) {" console.log(" Could not automatically fix all vulnerabilities")} }; / Fix outdated packages (only minor and patch updates); if (issues.outdated.length > 0) {" console.log(" Attempting to update outdated packages."); const safeUpdates = issues.outdated.filter(pkg => {" const current = pkg.current.split(".");" const latest = pkg.latest.split(".");" / Only update if it"s a minor or patch version update; return current[0] === latest[0] && current[1] === latest[1]}); if (safeUpdates.length > 0) { try {" const packages = safeUpdates.map(pkg => pkg.name).join(" ");execSync(npm update ${packages}, { stdio: "inherit" }); fixedIssues.push({" type: "outdated",message: Updated ${safeUpdates.length} packages safely}")} catch (error) {" console.log(" Could not update all outdated packages")} } }; / Fix missing packages; if (issues.missing.length > 0) {" console.log(" Attempting to install missing packages."); try {" execSync("npm install", { stdio: "inherit" }); fixedIssues.push({" type: "missing"," message: "Reinstalled all packages"})} catch (error) {} catch (error) {" console.log(" Could not install missing packages")} }; / Fix peer dependency issues;" if (issues.conflicts.some(conflict => conflict.includes("peer"))) {" console.log(" Attempting to fix peer dependency issues."); try {" execSync("npm install --legacy-peer-deps", { stdio: "inherit" }); fixedIssues.push({" type: "peerDependencies"," message: "Fixed peer dependency issues with legacy flag"})} catch (error) {} catch (error) {" console.log(" Could not fix peer dependency issues")} }; return fixedIssues};async function verifyDependencyFixes(issues) {" console.log(" Verifying that dependency issues have been resolved."); / Check vulnerabilities again; try {" const auditOutput = execSync("npm audit --json", {" stdio: "pipe"}).toString(); const auditData = JSON.parse(auditOutput); if (; auditData.vulnerabilities &&; Object.keys(auditData.vulnerabilities).length === 0; ) {" console.log(" Security vulnerabilities resolved")} else {" console.log(" Some security vulnerabilities remain")} } catch (error) {" console.log(" No security vulnerabilities found")}; / Check for dependency conflicts again; try {} catch (error) {" console.log(" No security vulnerabilities found")}; / Check for dependency conflicts again; try {" const lsOutput = execSync("npm ls --json", { stdio: "pipe" }).toString(); const lsData = JSON.parse(lsOutput); if (!lsData.problems | lsData.problems.length === 0) {" console.log(" Dependency conflicts resolved")} else {" console.log(" Some dependency conflicts remain")} } catch (error) {" console.log(" No dependency conflicts found")}; / Check for missing packages again; try {" const checkOutput = execSync("npm check --json", {" stdio: "pipe"}).toString(); const checkData = JSON.parse(checkOutput); if (!checkData.missing | checkData.missing.length === 0) {" console.log(" Missing packages resolved")} else {" console.log(" Some missing packages remain")} } catch (error) {" console.log(" No missing packages found")}};/ Main execution;if (require.main === module) { runSmartDependencyFixer(); / Set up continuous monitoring; setInterval(runSmartDependencyFixer, AUTOMATION_INTERVAL);` console.log( Smart dependency fixer will run every ${AUTOMATION_INTERVAL / 3600000} hours`} catch (error) {" console.log(" No missing packages found")}};/ Main execution;if (require.main === module) { runSmartDependencyFixer(); / Set up continuous monitoring; setInterval(runSmartDependencyFixer, AUTOMATION_INTERVAL); console.log( Smart dependency fixer will run every ${AUTOMATION_INTERVAL / 3600000} hours"; )};module.exports = { runSmartDependencyFixer }""`"`
=======
#!/""usr/bin/env""
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log(""� Starting smart dependency fixer automation...")
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log(""� Starting smart dependency fixer automation...")
// Get automation interval from environment variable ("default")
  console.log(`� Running smart dependency fixer at ${new Date().toISOString()}
console.log(`� Starting smart dependency fixer automation...``)
// Get automation interval from environment variable ("default")
  console.log("� Running smart dependency fixer at ${new Date().toISOString()}"
  "outdated"
      "vulnerabilities"
      "conflicts"
      "missing"
      "fixed"
    // Step "1"
    console.log("" Step 1: Checking for outdated packages...")
  const outdatedOutput = execSync("npm outdated --json")
  "stdio": "pipe"
  "name"
        "current"
        "latest"
        "wanted"
  console.log(" No outdated packages found")
    // Step "2"
    console.log(" Step 2: Checking for security vulnerabilities..."")
  const auditOutput = execSync("npm audit --json")
  "stdio": "pipe"
  "name"
            "severity"
            "title"
            "via"
  console.log(" No security vulnerabilities found")
    // Step "3"
    console.log(" Step 3: Checking for dependency conflicts...")
  const lsOutput = execSync("npm ls --json", { "stdio": "pipe"})
            problem.includes("conflict")
            problem.includes("missing")
            problem.includes(")
  console.log(` No dependency conflicts found``)
    // Step "4"
    console.log(" Step 4: Checking for missing packages..."")
  const checkOutput = execSync("npm check --json")
  "stdio": "pipe"
// console.log(` Found ${issues.vulnerabilities.length} vulnerable packages``)
  console.log(" No security vulnerabilities found")
    // Step "3"
    console.log(" Step 3: Checking for dependency conflicts...")
  const lsOutput = execSync("npm ls --json", { "stdio": "pipe"})
            problem.includes("conflict")
            problem.includes("missing")
            problem.includes("peer")
  console.log(" No dependency conflicts found")
    // Step "4"
    console.log(" Step 4: Checking for missing packages...")
  const checkOutput = execSync("npm check --json")
  "stdio": "pipe"
  console.log(` No missing packages found``)
    // Step "5"
// console.log(" Step 5: Attempting to fix issues automatically..."")
    console.log(" Step 6: Running npm install to ensure proper installation...")
  console.log(" No missing packages found")
    // Step "5"
// console.log(" Step 5: Attempting to fix issues automatically..."")
    console.log(" Step 6: Running npm install to ensure proper installation...")
  console.log(" No missing packages found");")}"
"
    // Step "5": Attempt to fix issues automatically"
// console.log(" Step 5: Attempting to fix issues automatically..."")
    console.log(" Step 6: Running npm install to ensure proper installation...")
  execSync("npm install", { "stdio": "inherit"})
// console.log(" npm install completed successfully")
  console.log("⚠  npm install "failed": ")
    // Step "7"
// console.log(" Step 7: Verifying fixes...")
    console.log(" Generating dependency fixer report...")
      "summary": "Smart dependency fixer completed"
      "status": "completed"
      "issues"
        "vulnerabilities"
        "conflicts"
        "missing"
      "fixed"
      "details"
      process.cwd(),smart-dependency-fixer-report.json"
      process.cwd(),smart-dependency-fixer-report.json"
    console.log(" Smart dependency fixer completed successfully")
  console.error(" Smart dependency fixer "failed": ")
    console.log(" Smart dependency fixer completed successfully")
  console.error(" Smart dependency fixer "failed": ")
  console.log(" Attempting to fix security vulnerabilities...")
  execSync("npm audit fix", { "stdio": "inherit"})
  "type": "vulnerabilities"
        "message": "Applied npm audit fix"
// console.log(""⚠  Could not automatically fix all vulnerabilities")
  console.log(""⚠  Could not automatically fix all vulnerabilities")
// console.log("⚠  Could not automatically fix all vulnerabilities")
  console.log(" Attempting to update outdated packages...")
  const current = pkg.current.split(".")
      const latest = pkg.latest.split(".")
      // Only update if it"
  const packages = safeUpdates.map(pkg => pkg.name).join(" ");execSync(npm update ${packages}, { "stdio": "inherit"})
  "type": "outdated","message": Updated ${safeUpdates.length} packages safely}"
// console.log("⚠  Could not update all outdated packages")
  console.log(" Attempting to install missing packages...")
  execSync("npm install", { "stdio": "inherit"})
  "type": "missing"
        "message": "Reinstalled all packages"
  console.log("⚠  Could not install missing packages")
  if (issues.conflicts.some(conflict => conflict.includes("peer")
  console.log(" Attempting to fix peer dependency issues...")
  execSync("npm install --legacy-peer-deps", { "stdio": "inherit"})
  "type": "peerDependencies"
        "message": "Fixed peer dependency issues with legacy flag"
// console.log("⚠  Could not fix peer dependency issues")
  console.log(" Verifying that dependency issues have been resolved...")
  const auditOutput = execSync("npm audit --json")
  "stdio": "pipe"
// console.log(" Security vulnerabilities resolved")
  console.log("⚠  Some security vulnerabilities remain")
// console.log(" No security vulnerabilities found")
  console.log(" No security vulnerabilities found")
  const lsOutput = execSync("npm ls --json", { "stdio": "pipe"})
// console.log(" Dependency conflicts resolved")
  console.log("⚠  Some dependency conflicts remain")
  console.log(" No dependency conflicts found")
  const checkOutput = execSync("npm check --json")
  "stdio": "pipe"
// console.log(" Missing packages resolved")
  console.log("⚠  Some missing packages remain")
// console.log(" No missing packages found")
  console.log(" No missing packages found")
>>>>>>> main
>>>>>>> main
