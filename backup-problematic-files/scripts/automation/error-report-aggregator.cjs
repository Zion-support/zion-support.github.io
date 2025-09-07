#!/usr/bin/env node;"
#!/usr/bin/env node"
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");"
class $1 {}
  constructor() {}
  this.projectRoot = process.cwd();"
    this.logFile = path.join(this.projectRoot, "error-reports", "error-report-aggregator-report.json");"
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now()};
;"
  log(message, type = "info") {}"
  const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message})};
;
  async ensureDirectoryExists(dirPath) {}
  if (!fs.existsSync(dirPath)) {}"
  fs.mkdirSync(dirPath, { "recursive": true })};"
  };
  async aggregateReports() {}"
  this.log("Aggregating error reports...");
    const reportsDir = path.join(this.projectRoot, "error-reports");"
    if (!fs.existsSync(reportsDir)) {}

    if (!fs.existsSync(reportsDir)) {}"
  this.log("No error reports directory found", "warn");"
      return};
    const reportFiles = fs.readdirSync(reportsDir).filter(file => file.endsWith(".json"));"
    const reports = {};
    for (const file of reportFiles) {}
  try {}"
  const reportPath = path.join(reportsDir, "file);
        const reportContent = fs.readFileSync(reportPath", "utf8");"
        const report = JSON.parse(reportContent);
        reports[file] = report;

    return reports};
  async generateSummary() {}"
  this.log("Generating summary...");"
    const reports = await this.aggregateReports();
    const summary = {}"
  "timestamp": new Date().toISOString(),
      "duration": Date.now() - this.startTime,
      "totalReports": Object.keys(reports || {}).length,
      "totalErrors": this.errorsFound.length,
      "totalFixes": this.fixesApplied.length,
      "errorCategories": this.categorizeErrors(),
      "fixCategories": this.categorizeFixes(),
      "reports": reports || {},
      "summary": {}"
  overallSuccess: this.errorsFound.length === 0,"
        "criticalErrors": this.errorsFound.filter(e => e.includes("critical") || e.includes("security")).length,
        "autoFixed": this.fixesApplied.filter(f => f.includes("Auto-fixed") || f.includes("Fixed")).length,
        "manualReviewNeeded": this.errorsFound.filter(e => e.includes("manual") || e.includes("review")).length};"
    await this.ensureDirectoryExists(path.dirname(this.logFile));

  categorizeErrors() {}
  const categories = {}"
  "typescript": 0,
      "eslint": 0,
      "build": 0,
      "dependency": 0,
      "console": 0,
      "other": 0};"
    for (const error of this.errorsFound) {}"
  if (error.includes("TypeScript") || error.includes("type")) {}"

  categories.dependency++} else if (error.includes("console") || error.includes("Console")) {}"
  categories.console++} else {}
  categories.other++};
    return categories};
  categorizeFixes() {}

    for (const fix of this.fixesApplied) {}"
  if (fix.includes("Auto-fixed") || fix.includes("Fixed")) {}
  categories.autoFixed++} else if (fix.includes("manual") || fix.includes("review")) {}
  categories.manualReview++} else if (fix.includes("config") || fix.includes("Config")) {}"
  categories.configuration++} else {}
  async run() {}"
  this.log("Starting error report aggregation process...");"
    try {}

      await this.generateSummary()};
// Run the error report aggregator;
const aggregator = new ErrorReportAggregator();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
aggregator.run().catch(console.error);
aggregator.run().catch(console.error);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
aggregator.run().catch(console.error);
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
