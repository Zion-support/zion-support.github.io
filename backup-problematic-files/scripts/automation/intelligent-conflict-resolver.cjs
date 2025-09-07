#!/usr/bin/env node;"
#!/usr/bin/env node"
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");"
class $1 {}
  constructor() {}
  this.projectRoot = process.cwd();"
    this.logsDir = path.join(this.projectRoot, "logs");"
    this.ensureLogsDirectory();
    this.setupLogging()};
;
  ensureLogsDirectory() {}
  if (!fs.existsSync(this.logsDir)) {}"
  fs.mkdirSync(this.logsDir, { "recursive": true })};"
  };
  setupLogging() {}"
  this.logFile = path.join(this.logsDir, "intelligent-conflict-resolver.log");"
    this.errorFile = path.join(;)"
      this.logsDir,intelligent-conflict-resolver-error.log";"
    )};
;"
  log(message, level = "INFO") {}"
  const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message};`"
    console.log("logMessage);"
    // Write to log file;"
    fs.appendFileSync(this.logFile, logMessage + "\n");"
    // Write errors to error file;"
    if (level === "ERROR") {}"
  // Write to log file;"
    // Write errors to error file;"
    if (level === "ERROR") {}
  fs.appendFileSync(this.errorFile, logMessage + "\n")};"
  async checkForConflicts() {}"
  this.log("Checking for merge conflicts...");"
    try {}
  // Check git status for conflicts;"
      const status = execSync("git status --porcelain", { "encoding": "utf8" }")
});
      const conflictFiles = status;"
        .split("\n");
        .filter(line => line.startsWith("UU "));"
        .map(line => line.substring(3));
      if (conflictFiles.length === 0) {}"
  this.log("No merge conflicts detected");"
        return []};
<<<<<<< HEAD
      if (conflictFiles.length === 0) {");}""
        this.log("No merge conflicts detected");");""`;
        return [];")}`);"`;
this.log(Found ${conflictFiles.length} files with merge conflicts`);"`;
      return conflictFiles} catch (error) {  this.log(`Failed to check for "conflicts": ${error.message  }`, "ERROR");"
;`;
  async analyzeConflictFile(filePath) {this.log(`Analyzing conflict in ${filePath}`);
=======
;"
      if (conflictFiles.length === 0) {");}
        this.log("No merge conflicts detected");");
        return [];")}`);"
this.log(Found ${conflictFiles.length} files with merge conflicts`);"
      return conflictFiles} catch (error) {  this.log(`Failed to check for "conflicts": ${error.message  }, "ERROR");"
      return []};
  };
;
  async analyzeConflictFile(filePath) {this.log(`Analyzing conflict in ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    try {}"
  const content = fs.readFileSync(filePath, "utf8");"
      const conflictMarkers = this.extractConflictMarkers(content);
      if (conflictMarkers.length === 0) {}"
  return { "type": "no-conflict", "resolvable": false };"
      const analysis = {}
  filePath,"
        "type": this.determineConflictType(conflictMarkers),
        "markers": conflictMarkers,
        "resolvable": this.canAutoResolve(conflictMarkers),
        "recommendations": []};"
      // Generate resolution recommendations;
      if (analysis.resolvable) {}
  analysis.recommendations = this.generateResolutionStrategy(;)
          conflictMarkers,
          filePath;
<<<<<<< HEAD
;"`;
      return analysis} catch (error) {  this.log(`Failed to analyze ${filePath  }: ${error.message}`, "ERROR");""
=======
        )};
;"
      return analysis} catch (error) {  this.log(`Failed to analyze ${filePath  }: ${error.message}, "ERROR");
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return { "type": "error", "resolvable": false, "error": error.message };"
  extractConflictMarkers(content) {}
  const markers = [];"
    const lines = content.split("\n");"
    for (let i = 0; i < lines.length; i++) {}
  const line = lines[i];"
      if (line.startsWith("<<<<<<<")) {}"
  const marker = {}"
  "start": i,
          "startMarker": line,
          "branch": line.substring(7).trim()};"
        // Find the separator;
        for (let j = i + 1; j < lines.length; j++) {}"
  if (lines[j].startsWith()) {}"
  // Find the separator;
<<<<<<< HEAD
=======
        for (let j = i + 1; j < lines.length; j++) {}"
  if (lines[j].startsWith()) {}"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  marker.separator = j;
            break};
        // Find the end marker;
        for (let j = marker.separator + 1; j < lines.length; j++) {}
  marker.end = j;
            marker.endMarker = lines[j];
            marker.otherBranch = lines[j].substring(8).trim();
        if (marker.end) {}
  markers.push(marker)};
    return markers};
  determineConflictType(markers) {}
  const types = markers.map(marker => {})"
  const startContent = this.getConflictContent(marker, "start");
      const endContent = this.getConflictContent(marker, "end");"
      if (this.isPackageJsonConflict(startContent, endContent));"
        return "package-json";
      if (this.isLockFileConflict(startContent, endContent)) return "lock-file";"
      if (this.isConfigFileConflict(startContent, endContent));"
        return "config-file";"
      if (this.isComponentConflict(startContent, endContent));"
        return "component";
      if (this.isImportConflict(startContent, endContent)) return "import";
      if (this.isStyleConflict(startContent, endContent)) return "style";
      return "unknown"}"
});"
    return types[0] || "unknown"};"
  getConflictContent(marker, side) {}"
  if (side === "start") {}
  return marker.startMarker} else if (side === "end") {}"
  return marker.endMarker};"
    return "};"
  isPackageJsonConflict(startContent, endContent) {}
  return (;)"
      startContent.includes("package.json") ||;
      endContent.includes("package.json");"
  isLockFileConflict(startContent, endContent) {}
<<<<<<< HEAD
      startContent.includes("package-lock.json") ||;""
=======
  return (;)"
      startContent.includes("package-lock.json") ||;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      endContent.includes("yarn.lock");"
  isConfigFileConflict(startContent, endContent) {}
<<<<<<< HEAD
      startContent.includes("tsconfig") ||;""
      startContent.includes("vite.config") ||;""
      startContent.includes("webpack.config") ||;""
=======
  return (;)"
      startContent.includes("tsconfig") ||;
      startContent.includes("vite.config") ||;
      startContent.includes("webpack.config") ||;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      startContent.includes("eslint");"
  isComponentConflict(startContent, endContent) {}
<<<<<<< HEAD
      startContent.includes("React") ||;""
      startContent.includes("useState") ||;""
      startContent.includes("useEffect") ||;""
=======
  return (;)"
      startContent.includes("React") ||;
      startContent.includes("useState") ||;
      startContent.includes("useEffect") ||;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      startContent.includes("className");"
  isImportConflict(startContent, endContent) {}"
  return startContent.includes("import ") || startContent.includes("export ")};"
  isStyleConflict(startContent, endContent) {}
<<<<<<< HEAD
      startContent.includes("className") ||;""
      startContent.includes("style=") ||;""
      startContent.includes("css") ||;""
=======
  return (;)"
      startContent.includes("className") ||;
      startContent.includes("style=") ||;
      startContent.includes("css") ||;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      startContent.includes("tailwind");"
  canAutoResolve(markers) {}
  // Can auto-resolve package.json, lock files, and some config conflicts;"
    const autoResolvableTypes = ["package-json", "lock-file", "config-file"];"
    return markers.some(marker => {})
  const type = this.determineConflictType([marker]);
      return autoResolvableTypes.includes(type)})};
  generateResolutionStrategy(markers, filePath) {}
  const strategies = [];
    markers.forEach(marker => {})
      switch (type) {}"
  case "package-json":;
          strategies.push(Merge dependencies from both branches, keeping latest versions";)"
          );
          break;"
        case "lock-file":;
          strategies.push("Regenerate lock file by running npm install");"
<<<<<<< HEAD
        case "config-file":;""
          strategies.push(Merge configuration options, preferring development settings";)"
        case "component":;""
          strategies.push(Manual review required - merge component logic carefully";)"
        case "import":;""
          strategies.push("Consolidate imports, removing duplicates");"
        case "style":;""
          strategies.push("Merge style classes, avoiding conflicts");"
        "default": ;""
=======
          break;"
        case "config-file":;
          strategies.push(Merge configuration options, preferring development settings";)"
          );
          break;"
        case "component":;
          strategies.push(Manual review required - merge component logic carefully";)"
          );
          break;"
        case "import":;
          strategies.push("Consolidate imports, removing duplicates");"
          break;"
        case "style":;
          strategies.push("Merge style classes, avoiding conflicts");"
          break;"
        "default": ;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          strategies.push("Manual review required")};"
    }
    return strategies};
<<<<<<< HEAD
  async autoResolveConflict(filePath, analysis) {this.log(`Attempting to auto-resolve conflict in ${filePath}`);
=======
;
  async autoResolveConflict(filePath, analysis) {this.log(`Attempting to auto-resolve conflict in ${filePath});
    try {}"
  const content = fs.readFileSync(filePath, "utf8");"
    try {}"
  const content = fs.readFileSync(filePath, "utf8");"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      let resolvedContent = content;
      analysis.markers.forEach(marker => {})
  case "package-json":;"
            resolvedContent = this.resolvePackageJsonConflict(;)
              resolvedContent,
              marker;
          case "lock-file":;"
            resolvedContent = this.resolveLockFileConflict(;)
          case "config-file":;"
            resolvedContent = this.resolveConfigFileConflict(;)
<<<<<<< HEAD
            break;"`;
          "default": this.log(`Cannot auto-resolve ${type} conflict in ${filePath}`)};"
      if (resolvedContent !== content) {}`;
  fs.writeFileSync(filePath, resolvedContent);this.log(`Auto-resolved conflict in ${filePath}`);
        return true};
      return false} catch (error) {  this.log(`Failed to auto-resolve ${filePath  }: ${error.message}`, "ERROR");"
=======
              resolvedContent,
              marker;
            );
            break;"
          "default": this.log(`Cannot auto-resolve ${type} conflict in ${filePath})};"
      }
});
      if (resolvedContent !== content) {}
  fs.writeFileSync(filePath, resolvedContent);this.log(`Auto-resolved conflict in ${filePath});
        return true};
;"
      return false} catch (error) {  this.log(`Failed to auto-resolve ${filePath  }: ${error.message}, "ERROR");"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return false};
  resolvePackageJsonConflict(content, marker) {}"
  // Simple "strategy": take the version with more dependencies;
    const startSection = this.getConflictSection(content, marker, "start");
    const endSection = this.getConflictSection(content, marker, "end");"
  const startJson = JSON.parse(startSection);
      const endJson = JSON.parse(endSection);
<<<<<<< HEAD
  // Simple "strategy": take the version with more dependencies;""
=======
  resolvePackageJsonConflict(content, marker) {}"
  // Simple "strategy": take the version with more dependencies;
    const startSection = this.getConflictSection(content, marker, "start");
    const endSection = this.getConflictSection(content, marker, "end");"
    try {}
  const startJson = JSON.parse(startSection);
      const endJson = JSON.parse(endSection);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      // Merge dependencies, preferring higher versions;
      const merged = { ...startJson };
      if (endJson.dependencies) {}
  merged.dependencies = {}
  ...merged.dependencies,
          ...endJson.dependencies};
      if (endJson.devDependencies) {}
  merged.devDependencies = {}
  ...merged.devDependencies,
          ...endJson.devDependencies};
      return content.replace(;)
        this.getConflictRange(content, marker),
<<<<<<< HEAD
        JSON.stringify(merged, null, 2);"`;
      )} catch (error) {  this.log(`Failed to parse package."json": ${error.message  }`, "WARN");"
=======
        JSON.stringify(merged, null, 2);"
      )} catch (error) {  this.log(`Failed to parse package."json": ${error.message  }, "WARN");"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return content};
  resolveLockFileConflict(content, marker) {}
  // For lock files, suggest regeneration;"
    this.log("Lock file conflict detected - recommend running npm install");"
  resolveConfigFileConflict(content, marker) {}
  // For config files, prefer development settings;"
<<<<<<< HEAD
    const endSection = this.getConflictSection(content, marker, "end");""
=======
    const startSection = this.getConflictSection(content, marker, "start");
    const endSection = this.getConflictSection(content, marker, "end");
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    // Simple "strategy": take the section with more configuration options;"
    if (startSection.length > endSection.length) {}
        startSection;
      )} else {}
        endSection;
  getConflictSection(content, marker, side) {}"
<<<<<<< HEAD
  const lines = content.split("\n");""
  return lines.slice(marker.start + 1, marker.separator).join("\n")} else {}""
=======
  const lines = content.split("\n");
    if (side === "start") {}
  return lines.slice(marker.start + 1, marker.separator).join("\n")} else {}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  return lines.slice(marker.separator + 1, marker.end).join("\n")};"
  getConflictRange(content, marker) {}"
<<<<<<< HEAD
=======
  const lines = content.split("\n");
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    return lines.slice(marker.start, marker.end + 1).join("\n")};"
  async generateConflictReport(conflicts) {}"
  this.log("Generating conflict resolution report...");"
  const report = {}"
  "timestamp": new Date().toISOString(),
        "summary": {}"
  totalConflicts: conflicts.length,"
          "autoResolvable": conflicts.filter(c => c.resolvable).length,
          "manualReview": conflicts.filter(c => !c.resolvable).length},
        "conflicts": conflicts,
        "recommendations": this.generateOverallRecommendations(conflicts)};"
      const reportPath = path.join(;)"
        this.projectRoot,conflict-resolution-report.json";"
<<<<<<< HEAD
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));`;
this.log(`Conflict resolution report saved to ${reportPath}`);"`;
      return report} catch (error) {  this.log(`Failed to generate "report": ${error.message  }`, "ERROR");"
=======
  async generateConflictReport(conflicts) {}"
  this.log("Generating conflict resolution report...");"
    try {}
  const report = {}"
  "timestamp": new Date().toISOString(),
        "summary": {}"
  totalConflicts: conflicts.length,"
          "autoResolvable": conflicts.filter(c => c.resolvable).length,
          "manualReview": conflicts.filter(c => !c.resolvable).length},
        "conflicts": conflicts,
        "recommendations": this.generateOverallRecommendations(conflicts)};"
;
      const reportPath = path.join(;)"
        this.projectRoot,conflict-resolution-report.json";"
      );
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
this.log(`Conflict resolution report saved to ${reportPath});"
      return report} catch (error) {  this.log(`Failed to generate "report": ${error.message  }, "ERROR");"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      throw error};
  generateOverallRecommendations(conflicts) {}
  const recommendations = [];
    if (conflicts.length === 0) {}"
  recommendations.push("No conflicts detected - repository is clean");"
      return recommendations};
    const autoResolvable = conflicts.filter(c => c.resolvable);
    const manualReview = conflicts.filter(c => !c.resolvable);
    if (autoResolvable.length > 0) {}`;
  recommendations.push(Auto-resolve ${autoResolvable.length} conflicts using intelligent resolution`;`)
    if (autoResolvable.length > 0) {}"
  recommendations.push(Auto-resolve ${autoResolvable.length} conflicts using intelligent resolution";)"
    if (manualReview.length > 0) {}"`;
  recommendations.push( `Manually review ${manualReview.length} conflicts that require human intervention";`)"
<<<<<<< HEAD
    if (conflicts.some(c => c.type === "lock-file")) {}""
  recommendations.push(Regenerate lock files after resolving package.json conflicts";)"
    if (conflicts.some(c => c.type === "package-json")) {}""
=======
      )};
;"
    if (conflicts.some(c => c.type === "lock-file")) {}
  recommendations.push(Regenerate lock files after resolving package.json conflicts";)"
      )};
;"
    if (conflicts.some(c => c.type === "package-json")) {}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  recommendations.push(Run npm install after resolving package.json conflicts";)"
  async runConflictResolution() {}"
  this.log("Starting intelligent conflict resolution...");"
  // Check for conflicts;
      const conflictFiles = await this.checkForConflicts();
<<<<<<< HEAD
  this.log("No conflicts to resolve");""
=======
      if (conflictFiles.length === 0) {}"
  this.log("No conflicts to resolve");
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        return { "resolved": 0, "total": 0 };"
  // Check for conflicts;
<<<<<<< HEAD
=======
      const conflictFiles = await this.checkForConflicts();
      if (conflictFiles.length === 0) {}"
  this.log("No conflicts to resolve");
        return { "resolved": 0, "total": 0 };"
      };
;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      // Analyze each conflict;
      const conflicts = [];
      let resolvedCount = 0;
      for (const filePath of conflictFiles) {}
  const analysis = await this.analyzeConflictFile(filePath);
        conflicts.push(analysis);
        // Attempt auto-resolution;
  const resolved = await this.autoResolveConflict(filePath, analysis);
          if (resolved) resolvedCount++};
      // Generate report;
      await this.generateConflictReport(conflicts);"`;
      this.log(Conflict resolution "completed": ${resolvedCount}/${conflicts.length} conflicts resolved`;`)"
      // Generate report;
      await this.generateConflictReport(conflicts);"
      this.log(Conflict resolution "completed": ${resolvedCount}/${conflicts.length} conflicts resolved";)"
      );"
<<<<<<< HEAD
      return { "resolved": resolvedCount, "total": conflicts.length };""`;
=======
      return { "resolved": resolvedCount, "total": conflicts.length };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    } catch (error) {  this.log(`Conflict resolution "failed": ${error.message  }", "ERROR");"
  async start() {}"`;
  this.log("Starting intelligent conflict resolver...`);"
  // Run initial conflict resolution;
      await this.runConflictResolution();
      // Set up periodic conflict checking;
      setInterval(;)
        async () => {}
<<<<<<< HEAD
  await this.runConflictResolution()} catch (error) {}"`;
  this.log(Periodic conflict resolution "failed": ${error.message  }`,`)""
=======
  try {}
  await this.runConflictResolution()} catch (error) {}"
  this.log(Periodic conflict resolution "failed": ${error.message  },`)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
              "ERROR";"
        },
        30 * 60 * 1000;
      ); // Every 30 minutes;"
      this.log("Intelligent conflict resolver started successfully");"
      // Keep the process running;
<<<<<<< HEAD
      setInterval(() => {}"`;
  this.log("Conflict resolver heartbeat...")}, 60000); // Every minute} catch (error) {  this.log(`Failed to start conflict "resolver": ${error.message  }`, "ERROR");"
=======
      setInterval(() => {}"
  this.log("Conflict resolver heartbeat...")}, 60000); // Every minute} catch (error) {  this.log(`Failed to start conflict "resolver": ${error.message  }, "ERROR");"
      throw error};
  };
};
;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Main execution;
if (require.main === module) {}
  const resolver = new IntelligentConflictResolver();
  // Handle graceful shutdown;"
  process.on("SIGINT", () => {}
  resolver.log("Shutting down gracefully...");"
    process.exit(0)}
<<<<<<< HEAD
  process.on("SIGTERM", () => {}""
});"`;
  resolver.start().catch(error => {resolver.log(`Fatal "error": ${error.message}`, "ERROR");"
=======
});"
  process.on("SIGTERM", () => {}
  resolver.log("Shutting down gracefully...");"
    process.exit(0)}
});"
  resolver.start().catch(error => {resolver.log(`Fatal "error": ${error.message}, "ERROR");"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Main execution;
  // Handle graceful shutdown;"
<<<<<<< HEAD
=======
  process.on("SIGINT", () => {}
  resolver.log("Shutting down gracefully...");"
    process.exit(0)}
});"
  process.on("SIGTERM", () => {}
  resolver.log("Shutting down gracefully...");"
    process.exit(0)}
});"
  resolver.start().catch(error => {resolver.log(`Fatal "error": ${error.message}, "ERROR");"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    process.exit(1)})};
module.exports = IntelligentConflictResolver;
"`;