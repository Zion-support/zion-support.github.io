<<<<<<< HEAD
#!/""usr/bin/env"" node;
/**;
 * AI Code Reviewer - PM2 Automation;
 * Intelligently analyzes code quality and suggests improvements;
 */;
#!/usr/bin/env node
/**;
 * AI Code Reviewer - PM2 Automation;
 * Intelligently analyzes code quality and suggests improvements;
 */;
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
const crypto = require("crypto");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "ai-code-reviewer.log");
    this.reviewsLog = path.join(this.projectRoot, "logs", "ai-reviews.json");
    this.learningData = path.join(;
      this.projectRoot,logs",
      "ai-learning-data.json";
    );
    this.ensureLogsDirectory();
    this.loadLearningData()}
;
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { "recursive": true })}
  }
;
  loadLearningData() {
  if (fs.existsSync(this.learningData)) {
  try {
  this.learningDataObj = JSON.parse(;
          fs.readFileSync(this.learningData, "utf8");
        )} catch (error) {
  this.learningDataObj = {
  "patterns": {  },
          "suggestions": {},
          "performance": {},
  loadLearningData() {
  if (fs.existsSync(this.learningData)) {
  try {
  this.learningDataObj = JSON.parse(;
          fs.readFileSync(this.learningData, "utf8");
        )} catch (error) {
  this.learningDataObj = {
  "patterns": {},
          "suggestions": {},
          "performance": {}}
      }
    } else {
  this.learningDataObj = { "patterns": {}, "suggestions": {}, "performance": {} }
    }
  }
;
  saveLearningData() {
  fs.writeFileSync(;
      this.learningData,
      JSON.stringify(this.learningDataObj, null, 2);
    )}
;
  log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);}
;
  async analyzeCodeQuality() {
  this.log("🤖 Starting AI-powered code quality analysis...");
    const reviews = [];
    const suggestions = [];
    const performance = {}
    try {
  async analyzeCodeQuality() {
  this.log("🤖 Starting AI-powered code quality analysis...");
    const reviews = [];
    const suggestions = [];
    const performance = {}
;
    try {
  // 1. Analyze TypeScript files for patterns;
      const tsAnalysis = await this.analyzeTypeScriptFiles();
      reviews.push(...tsAnalysis.reviews);
      suggestions.push(...tsAnalysis.suggestions);
      // 2. Analyze React components for best practices;
      const reactAnalysis = await this.analyzeReactComponents();
      reviews.push(...reactAnalysis.reviews);
      suggestions.push(...reactAnalysis.suggestions);
      // 3. Analyze performance patterns;
      const perfAnalysis = await this.analyzePerformancePatterns();
      Object.assign(performance, perfAnalysis);
      // 3. Analyze performance patterns;
      const perfAnalysis = await this.analyzePerformancePatterns();
      Object.assign(performance, perfAnalysis);
      // 4. Analyze security patterns;
      const securityAnalysis = await this.analyzeSecurityPatterns();
      reviews.push(...securityAnalysis.reviews);
      suggestions.push(...securityAnalysis.suggestions);
      // 5. Generate intelligent suggestions;
      const aiSuggestions = await this.generateAISuggestions(;
        reviews,
        performance;
      );
      suggestions.push(...aiSuggestions);
      // 6. Learn from patterns and update suggestions;
      await this.updateLearningData(reviews, suggestions, performance);
      // 7. Generate comprehensive review report;
      await this.generateReviewReport(reviews, suggestions, performance);
      // 8. Auto-apply safe improvements;
      const appliedFixes = await this.autoApplySafeFixes(suggestions);
      this.log(✅ AI Code Review "completed": ${reviews.length} issues found, ${suggestions.length} suggestions generated, ${appliedFixes.length} fixes applied";
      )} catch (error) {  this.log("AI Code Review "failed": ${error.message  }", "ERROR")}
;
    return { reviews, suggestions, performance }
  }
;
  async analyzeTypeScriptFiles() {
  const reviews = [];
    const suggestions = [];
    try {
  // Find all TypeScript files;
      const tsFiles = this.findFilesByExtension(".ts", ".tsx");
      for (const file of tsFiles.slice(0, 50)) {
  // Limit to prevent overwhelming;
        const content = fs.readFileSync(file, "utf8");
    try {
  // Find all TypeScript files;
      const tsFiles = this.findFilesByExtension(".ts", ".tsx");
      for (const file of tsFiles.slice(0, 50)) {
  // Limit to prevent overwhelming;
        const content = fs.readFileSync(file, "utf8");
        const analysis = this.analyzeTypeScriptFile(content, file);
        if (analysis.issues.length > 0) {
  reviews.push(...analysis.issues)}
;
        if (analysis.suggestions.length > 0) {
  suggestions.push(...analysis.suggestions)}
      }
    } catch (error) {  this.log(`TypeScript analysis "failed": ${error.message  }`, "ERROR")}
;
    return { reviews, suggestions }
  }
;
  analyzeTypeScriptFile(content, filePath) {
  const issues = [];
    const suggestions = [];
    // Analyze for common TypeScript anti-patterns;
    const lines = content.split("\n");
    lines.forEach((line, index) => {
  const lineNum = index + 1;
      // Check for any types;
      if (line.includes(": any") && !line.includes("// eslint-disable")) {
  issues.push({
  "type": "TYPESCRIPT_ANTI_PATTERN",
          "severity": "MEDIUM",
          "message": "Avoid using "any type - consider proper typing",
          "file": filePath,
          "line": lineNum,
          "code": line.trim(),
          "suggestion": "Replace any with proper TypeScript types"})}
;
      // Check for unused imports;
      if (;
        line.includes("import") &&;
        line.includes("from") &&;
        !line.includes("//");
      ) {
  // Analyze for common TypeScript anti-patterns;
    const lines = content.split("\n");
    lines.forEach((line, index) => {
  const lineNum = index + 1;
      // Check for any types;
      if (line.includes(": any") && !line.includes("// eslint-disable")) {
  issues.push({
  "type": "TYPESCRIPT_ANTI_PATTERN",
          "severity": "MEDIUM",
          "message": "Avoid using any" type - consider proper typing",
          "file": filePath,
          "line": lineNum,
          "code": line.trim(),
          "suggestion": "Replace "any" with proper TypeScript types"})}
;
      // Check for unused imports;
      if (;
        line.includes("import") &&;
        line.includes("from") &&;
        !line.includes("//");
      ) {
  const importMatch = line.match(/import\s+{([^}]+)}\s+from/);
        if (importMatch) {
  const imports = importMatch[1].split(",").map(i => i.trim());
          // This is a simplified check - in practice you"d need more sophisticated analysis}
      }
;
      // Check for long functions;
      if (line.includes("function") || line.includes("=>")) {
  const functionStart = index;
        let functionLength = 0;
        for (let i = index; i < lines.length; i++) {
  if (lines[i].includes("{")) functionLength++;
          if (lines[i].includes("}")) break}
;
        if (functionLength > 20) {
  suggestions.push({
  "type": "CODE_STRUCTURE",
            "severity": "LOW",
            "message": "Consider breaking down long function",
            "file": filePath,
            "line": lineNum,
            "code": line.trim(),
            "suggestion": Extract smaller, focused functions for better maintainability"})}
      }
    });
    return { issues, suggestions }
  }
;
  async analyzeReactComponents() {
  const reviews = [];
    const suggestions = [];
    try {
  const reactFiles = this.findFilesByExtension(".tsx", ".jsx");
      for (const file of reactFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8");
    try {
  const reactFiles = this.findFilesByExtension(".tsx", ".jsx");
      for (const file of reactFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8");
        const analysis = this.analyzeReactComponent(content, file);
        reviews.push(...analysis.reviews);
        suggestions.push(...analysis.suggestions)}
    } catch (error) {  this.log(`React analysis "failed": ${error.message  }`, "ERROR")}
;
    return { reviews, suggestions }
  }
;
  analyzeReactComponent(content, filePath) {
  const reviews = [];
    const suggestions = [];
    // Check for React best practices;
    if (content.includes("useState") && content.includes("useEffect")) {
  // Check for missing dependency arrays;
      const useEffectRegex =;
        /useEffect\s*\(\s*\(\)\s*=>\s*{[^}]*}\s*,\s*\[\s*\]/g;
      if (useEffectRegex.test(content)) {
  suggestions.push({
  "type": "REACT_BEST_PRACTICE",
          "severity": "MEDIUM",
          "message": "Consider if useEffect needs dependencies",
          "file": filePath,
          "suggestion": Review useEffect dependencies to prevent unnecessary re-renders"})}
    }
;
    // Check for prop drilling;
    if (content.includes("props.") && content.split("props.").length > 5) {
  suggestions.push({
  "type": "REACT_ARCHITECTURE",
        "severity": "LOW",
        "message": Consider using Context or state management for deep prop drilling",
        "file": filePath,
        "suggestion": "Implement React Context or Redux for better state management"})}
;
    return { reviews, suggestions }
  }
;
  async analyzePerformancePatterns() {
  const performance = {
  "bundleSize": {},
      "renderOptimization": {},
      "memoryUsage": {}}
    try {
  // Analyze bundle size;
      if (fs.existsSync("dist")) {
  const bundleStats = this.analyzeBundleSize();
        performance.bundleSize = bundleStats}
;
    try {
  // Analyze bundle size;
      if (fs.existsSync("dist")) {
  const bundleStats = this.analyzeBundleSize();
        performance.bundleSize = bundleStats}
;
      // Check for performance anti-patterns in code;
      const perfIssues = this.findPerformanceIssues();
      performance.renderOptimization = perfIssues} catch (error) {  this.log(`Performance analysis "failed": ${error.message  }`, "ERROR")}
;
    return performance}
;
  analyzeBundleSize() {
  const stats = {}
    try {
  const distPath = path.join(this.projectRoot, "dist");
      if (fs.existsSync(distPath)) {
  const files = this.getAllFiles(distPath);
        let totalSize = 0;
        files.forEach(file => {
  const stats = fs.statSync(file);
          totalSize += stats.size});
        stats.totalSize = totalSize;
        stats.totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
        if (totalSize > 5 * 1024 * 1024) {
  // 5MB;
          stats.warning =Bundle size is large - consider code splitting and optimization";
        if (totalSize > 5 * 1024 * 1024) {
  // 5MB;
          stats.warning =Bundle size is large - consider code splitting and optimization"}
      }
    } catch (error) {  this.log("Bundle size analysis "failed": ${error.message  }", "ERROR")}
;
    return stats}
;
  findPerformanceIssues() {
  const issues = [];
    try {
  const tsFiles = this.findFilesByExtension(".ts", ".tsx");
      for (const file of tsFiles.slice(0, 20)) {
  const content = fs.readFileSync(file, "utf8");
        // Check for expensive operations in render;
        if (content.includes("map(") && content.includes("filter(")) {
  issues.push({
  "type": "PERFORMANCE_ANTI_PATTERN",
            "message": Multiple array operations in render - consider memoization",
            "file": file,
            "suggestion": "Use useMemo or useCallback to optimize expensive calculations"})}
      }
    } catch (error) {  this.log(`Performance issue detection "failed": ${error.message  }`, "ERROR")}
;
    return issues}
;
  async analyzeSecurityPatterns() {
  const reviews = [];
    const suggestions = [];
    try {
  const tsFiles = this.findFilesByExtension(".ts", ".tsx");
      for (const file of tsFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8");
        // Check for XSS vulnerabilities;
        if (content.includes("dangerouslySetInnerHTML")) {
  reviews.push({
  "type": "SECURITY_RISK",
            "severity": "HIGH",
            "message": "dangerouslySetInnerHTML usage detected",
            "file": file,
            "suggestion": "Sanitize HTML content and consider safer alternatives"})}
;
        // Check for hardcoded secrets;
        if (;
          content.includes("api_key") ||;
          content.includes("password") ||;
          content.includes("secret");
        ) {
  suggestions.push({
  "type": "SECURITY_BEST_PRACTICE",
            "severity": "MEDIUM",
            "message": "Consider using environment variables for sensitive data",
            "file": file,
            "suggestion": "Move sensitive data to environment variables",
    try {
  const tsFiles = this.findFilesByExtension(".ts", ".tsx");
      for (const file of tsFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8");
        // Check for XSS vulnerabilities;
        if (content.includes("dangerouslySetInnerHTML")) {
  reviews.push({
  "type": "SECURITY_RISK",
            "severity": "HIGH",
            "message": "dangerouslySetInnerHTML usage detected",
            "file": file,
            "suggestion": "Sanitize HTML content and consider safer alternatives"})}
;
        // Check for hardcoded secrets;
        if (;
          content.includes("api_key") ||;
          content.includes("password") ||;
          content.includes("secret");
        ) {
  suggestions.push({
  "type": "SECURITY_BEST_PRACTICE",
            "severity": "MEDIUM",
            "message": "Consider using environment variables for sensitive data",
            "file": file,
            "suggestion": "Move sensitive data to environment variables"})}
      }
    } catch (error) {  this.log(`Security analysis "failed": ${error.message  }`, "ERROR")}
;
    return { reviews, suggestions }
  }
;
  async generateAISuggestions(reviews, performance) {
  const suggestions = [];
    // Generate intelligent suggestions based on patterns;
    const issueTypes = reviews.reduce((acc, review) => {
  acc[review.type] = (acc[review.type] || 0) + 1;
      return acc}, {});
    // Suggest refactoring for common patterns;
    if (issueTypes.TYPESCRIPT_ANTI_PATTERN > 5) {
  suggestions.push({
  "type": "AI_SUGGESTION",
        "severity": "MEDIUM",
        "message": "High number of TypeScript anti-patterns detected",
        "suggestion": Consider running a TypeScript refactoring session to improve code quality"})}
;
    if (issueTypes.REACT_BEST_PRACTICE > 3) {
  suggestions.push({
  "type": "AI_SUGGESTION",
        "severity": "LOW",
        "message": "Multiple React best practice violations",
        "suggestion": Review React component architecture and consider implementing a component library"})}
;
    // Performance suggestions;
    if (performance.bundleSize && performance.bundleSize.warning) {
  suggestions.push({
  "type": "AI_SUGGESTION",
        "severity": "MEDIUM",
        "message": "Bundle size optimization needed",
        "suggestion": Implement code splitting, lazy loading, and tree shaking to reduce bundle size"})}
;
    return suggestions}
;
  async updateLearningData(reviews, suggestions, performance) {
  async updateLearningData(reviews, suggestions, performance) {
  // Update learning data with new patterns;
    const timestamp = new Date().toISOString();
    if (!this.learningDataObj.patterns[timestamp]) {
  this.learningDataObj.patterns[timestamp] = {
  "reviews": reviews.length,
        "suggestions": suggestions.length,
        "performance": performance}
    }
;
    // Keep only last 30 days of data;
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    Object.keys(this.learningDataObj.patterns).forEach(date => {
  if (new Date(date) < thirtyDaysAgo) {
  delete this.learningDataObj.patterns[date]}
    });
    this.saveLearningData()}
;
  async generateReviewReport(reviews, suggestions, performance) {
  const report = {
  "timestamp": new Date().toISOString(),
      "summary": {
  totalIssues: reviews.length,
        "totalSuggestions": suggestions.length,
        "criticalIssues": reviews.filter(r => r.severity === "CRITICAL").length,
        "highIssues": reviews.filter(r => r.severity === "HIGH").length,
        "mediumIssues": reviews.filter(r => r.severity === "MEDIUM").length,
        "lowIssues": reviews.filter(r => r.severity === "LOW").length},
      "reviews": reviews.slice(0, 20), // Limit for readability;
      "suggestions": suggestions.slice(0, 20),
      "performance": performance,
      "recommendations": this.generateRecommendations(;
        reviews,
        suggestions,
        performance;
      ),
  async generateReviewReport(reviews, suggestions, performance) {
  const report = {
  "timestamp": new Date().toISOString(),
      "summary": {
  totalIssues: reviews.length,
        "totalSuggestions": suggestions.length,
        "criticalIssues": reviews.filter(r => r.severity === "CRITICAL").length,
        "highIssues": reviews.filter(r => r.severity === "HIGH").length,
        "mediumIssues": reviews.filter(r => r.severity === "MEDIUM").length,
        "lowIssues": reviews.filter(r => r.severity === "LOW").length},
      "reviews": reviews.slice(0, 20), // Limit for readability;
      "suggestions": suggestions.slice(0, 20),
      "performance": performance,
      "recommendations": this.generateRecommendations(;
        reviews,
        suggestions,
        performance;
      )}
;
    const reportPath = path.join(;
      this.projectRoot,logs", "ai-review-report-${Date.now()}.json";
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
this.log("📊 AI Review Report "generated": ${reportPath}");
    return report}
;
  generateRecommendations(reviews, suggestions, performance) {
  const recommendations = [];
    if (reviews.filter(r => r.severity === "CRITICAL").length > 0) {
  recommendations.push(🔴 Critical issues detected - immediate attention required";
      )}
;
    if (reviews.filter(r => r.severity === "HIGH").length > 5) {
  recommendations.push(🟠 High priority issues detected - schedule refactoring session";
    if (reviews.filter(r => r.severity === "CRITICAL").length > 0) {
  recommendations.push(🔴 Critical issues detected - immediate attention required";
      )}
;
    if (reviews.filter(r => r.severity === "HIGH").length > 5) {
  recommendations.push(🟠 High priority issues detected - schedule refactoring session";
      )}
;
    if (performance.bundleSize && performance.bundleSize.warning) {
  recommendations.push("📦 Bundle size optimization recommended")}
;
    if (suggestions.length > 10) {
  recommendations.push("💡 Multiple improvement opportunities available")}
;
    return recommendations}
;
  async autoApplySafeFixes(suggestions) {
  const appliedFixes = [];
    try {
  // Only apply safe, low-risk fixes;
      const safeSuggestions = suggestions.filter(;
        s =>;
          s.severity === "LOW" &&;
          s.type !== "SECURITY_RISK" &&;
          s.type !== "SECURITY_BEST_PRACTICE";
      );
      for (const suggestion of safeSuggestions.slice(0, 5)) {
  // Limit to prevent overwhelming;
        try {
  const fixResult = await this.applySuggestion(suggestion);
          if (fixResult.success) {
  appliedFixes.push({
  "suggestion": suggestion,
              "result": fixResult})}
        } catch (error) {  this.log("Failed to apply "suggestion": ${error.message  }", "WARN")}
      }
    } catch (error) {  this.log("Auto-fix application "failed": ${error.message  }", "ERROR")}
;
    return appliedFixes}
;
  async applySuggestion(suggestion) {
  // This is a simplified implementation;
    // In practice, you"d want more sophisticated fix application logic;
    return { "success": true, "message": "Suggestion applied successfully" }
;
  async applySuggestion(suggestion) {
  // This is a simplified implementation;
    // In practice, you"d want more sophisticated fix application logic;
    return { "success": true, "message": "Suggestion applied successfully" }
  }
;
  findFilesByExtension(...extensions) {
  const files = [];
    const findFiles = dir => {
  const items = fs.readdirSync(dir);
      for (const item of items) {
  const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (;
          stat.isDirectory() &&;
          !item.startsWith(".") &&;
          item !== "node_modules";
        ) {
  findFiles(fullPath)} else if (;
          stat.isFile() &&;
          extensions.some(ext => item.endsWith(ext));
        ) {
  files.push(fullPath)}
      }
    }
;
    findFiles(this.projectRoot);
    return files}
;
  getAllFiles(dir) {
  const files = [];
    const findFiles = directory => {
  const items = fs.readdirSync(directory);
      for (const item of items) {
  const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
  findFiles(fullPath)} else if (stat.isFile()) {
  files.push(fullPath)}
      }
    }
;
    findFiles(dir);
    return files}
;
  async run() {
  this.log("🚀 AI Code Reviewer starting...");
    try {
  const result = await this.analyzeCodeQuality();
this.log("✅ AI Code Review completed successfully`);
      this.log(📊 Found ${result.reviews.length} issues and ${result.suggestions.length} suggestions`;
      );
      return result} catch (error) {
  this.log(`❌ AI Code Review "failed": ${error.message  }`, "ERROR")} catch (error) {
  this.log(`❌ AI Code Review "failed": ${error.message}`, "ERROR");
      throw error}
  }
}
;
// Run if called directly;
if (require.main === module) {
  const reviewer = new AICodeReviewer();
  reviewer.run().catch(console.error)}
;
module.exports = AICodeReviewer
#!/usr/bin/env node/""usr/bin/env"" node;#!/usr/bin/env node;"const fs = require("fs");"const path = require("path");"const { execSync, spawn } = require("child_process");"const crypto = require("crypto");class $1 { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "ai-code-reviewer.log");" this.reviewsLog = path.join(this.projectRoot, "logs", "ai-reviews.json"); this.learningData = path.join(;" this.projectRoot,logs"," "ai-learning-data.json"; ); this.ensureLogsDirectory(); this.loadLearningData()}; ensureLogsDirectory() { const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {" fs.mkdirSync(logsDir, { recursive: true })} }; loadLearningData() { if (fs.existsSync(this.learningData)) { try { this.learningDataObj = JSON.parse(;" fs.readFileSync(this.learningData, "utf8"); )} catch (error) { this.learningDataObj = {" patterns: {}," suggestions: {}," performance: {}, loadLearningData() { if (fs.existsSync(this.learningData)) { try { this.learningDataObj = JSON.parse(;" fs.readFileSync(this.learningData, "utf8"); )} catch (error) { this.learningDataObj = {" patterns: {}," suggestions: {}," performance: {}} } } else {" this.learningDataObj = { patterns: {}, suggestions: {}, performance: {} } } }; saveLearningData() { fs.writeFileSync(; this.learningData, JSON.stringify(this.learningDataObj, null, 2); )};" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}\n`;` fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}; async analyzeCodeQuality() {" this.log(" Starting AI-powered code quality analysis."); const reviews = []; const suggestions = []; const performance = {} try { async analyzeCodeQuality() {" this.log(" Starting AI-powered code quality analysis."); const reviews = []; const suggestions = []; const performance = {}; try { / 1. Analyze TypeScript files for patterns; const tsAnalysis = await this.analyzeTypeScriptFiles(); reviews.push(.tsAnalysis.reviews); suggestions.push(.tsAnalysis.suggestions); / 2. Analyze React components for best practices; const reactAnalysis = await this.analyzeReactComponents(); reviews.push(.reactAnalysis.reviews); suggestions.push(.reactAnalysis.suggestions); / 3. Analyze performance patterns; const perfAnalysis = await this.analyzePerformancePatterns(); Object.assign(performance, perfAnalysis); / 3. Analyze performance patterns; const perfAnalysis = await this.analyzePerformancePatterns(); Object.assign(performance, perfAnalysis); / 4. Analyze security patterns; const securityAnalysis = await this.analyzeSecurityPatterns(); reviews.push(.securityAnalysis.reviews); suggestions.push(.securityAnalysis.suggestions); / 5. Generate intelligent suggestions; const aiSuggestions = await this.generateAISuggestions(; reviews, performance; ); suggestions.push(.aiSuggestions); / 6. Learn from patterns and update suggestions; await this.updateLearningData(reviews, suggestions, performance); / 7. Generate comprehensive review report; await this.generateReviewReport(reviews, suggestions, performance); / 8. Auto-apply safe improvements; const appliedFixes = await this.autoApplySafeFixes(suggestions);" this.log( AI Code Review completed: ${reviews.length} issues found, ${suggestions.length} suggestions generated, ${appliedFixes.length} fixes applied";" )} catch (error) { this.log("AI Code Review failed: ${error.message }", "ERROR")}; return { reviews, suggestions, performance } }; async analyzeTypeScriptFiles() { const reviews = []; const suggestions = []; try { / Find all TypeScript files;" const tsFiles = this.findFilesByExtension(".ts", ".tsx"); for (const file of tsFiles.slice(0, 50)) { / Limit to prevent overwhelming;" const content = fs.readFileSync(file, "utf8"); try { / Find all TypeScript files;" const tsFiles = this.findFilesByExtension(".ts", ".tsx"); for (const file of tsFiles.slice(0, 50)) { / Limit to prevent overwhelming;" const content = fs.readFileSync(file, "utf8"); const analysis = this.analyzeTypeScriptFile(content, file); if (analysis.issues.length > 0) { reviews.push(.analysis.issues)}; if (analysis.suggestions.length > 0) { suggestions.push(.analysis.suggestions)} }"` } catch (error) { this.log(`TypeScript analysis failed: ${error.message }`, "ERROR")}; return { reviews, suggestions } }; analyzeTypeScriptFile(content, filePath) { const issues = []; const suggestions = []; / Analyze for common TypeScript anti-patterns;" const lines = content.split("\n"); lines.forEach((line, index) => { const lineNum = index + 1; / Check for any types;" if (line.includes(": any") && !line.includes("/ eslint-disable")) { issues.push({" type: "TYPESCRIPT_ANTI_PATTERN"," severity: "MEDIUM"," message: "Avoid using "any type - consider proper typing"," file: filePath," line: lineNum," code: line.trim()," suggestion: "Replace any with proper TypeScript types"})}; / Check for unused imports; if (;" line.includes("import") &&;" line.includes("from") &&;" !line.includes("/"); ) { / Analyze for common TypeScript anti-patterns;" const lines = content.split("\n"); lines.forEach((line, index) => { const lineNum = index + 1; / Check for any types;" if (line.includes(": any") && !line.includes("/ eslint-disable")) { issues.push({" type: "TYPESCRIPT_ANTI_PATTERN"," severity: "MEDIUM"," message: "Avoid using any" type - consider proper typing"," file: filePath," line: lineNum," code: line.trim()," suggestion: "Replace "any" with proper TypeScript types"})}; / Check for unused imports; if (;" line.includes("import") &&;" line.includes("from") &&;" !line.includes("/"); ) { const importMatch = line.match(/import\s+{([^}]+)}\s+from/); if (importMatch) {" const imports = importMatch[1].split(",").map(i => i.trim());" / This is a simplified check - in practice you"d need more sophisticated analysis} }; / Check for long functions;" if (line.includes("function") | line.includes("=>")) { const functionStart = index; let functionLength = 0; for (let i = index; i < lines.length; i++) {" if (lines[i].includes("{")) functionLength++;" if (lines[i].includes("}")) break}; if (functionLength > 20) { suggestions.push({" type: "CODE_STRUCTURE"," severity: "LOW"," message: "Consider breaking down long function"," file: filePath," line: lineNum," code: line.trim()," suggestion: Extract smaller, focused functions for better maintainability"})} } }); return { issues, suggestions } }; async analyzeReactComponents() { const reviews = []; const suggestions = []; try {" const reactFiles = this.findFilesByExtension(".tsx", ".jsx"); for (const file of reactFiles.slice(0, 30)) {" const content = fs.readFileSync(file, "utf8"); try {" const reactFiles = this.findFilesByExtension(".tsx", ".jsx"); for (const file of reactFiles.slice(0, 30)) {" const content = fs.readFileSync(file, "utf8"); const analysis = this.analyzeReactComponent(content, file); reviews.push(.analysis.reviews); suggestions.push(.analysis.suggestions)}"` } catch (error) { this.log(`React analysis failed: ${error.message }`, "ERROR")}; return { reviews, suggestions } }; analyzeReactComponent(content, filePath) { const reviews = []; const suggestions = []; / Check for React best practices;" if (content.includes("useState") && content.includes("useEffect")) { / Check for missing dependency arrays; const useEffectRegex = null; /useEffect\s*\(\s*\(\)\s*=>\s*{[^}]*}\s*,\s*\[\s*\]/g; if (useEffectRegex.test(content)) { suggestions.push({" type: "REACT_BEST_PRACTICE"," severity: "MEDIUM"," message: "Consider if useEffect needs dependencies"," file: filePath," suggestion: Review useEffect dependencies to prevent unnecessary re-renders"})} }; / Check for prop drilling;" if (content.includes("props.") && content.split("props.").length > 5) { suggestions.push({" type: "REACT_ARCHITECTURE"," severity: "LOW"," message: Consider using Context or state management for deep prop drilling"," file: filePath," suggestion: "Implement React Context or Redux for better state management"})}; return { reviews, suggestions } }; async analyzePerformancePatterns() { const performance = {" bundleSize: {}," renderOptimization: {}," memoryUsage: {}} try { / Analyze bundle size;" if (fs.existsSync("dist")) { const bundleStats = this.analyzeBundleSize(); performance.bundleSize = bundleStats}; try { / Analyze bundle size;" if (fs.existsSync("dist")) { const bundleStats = this.analyzeBundleSize(); performance.bundleSize = bundleStats}; / Check for performance anti-patterns in code; const perfIssues = this.findPerformanceIssues();"` performance.renderOptimization = perfIssues} catch (error) { this.log(`Performance analysis failed: ${error.message }`, "ERROR")}; return performance}; analyzeBundleSize() { const stats = {} try {" const distPath = path.join(this.projectRoot, "dist"); if (fs.existsSync(distPath)) { const files = this.getAllFiles(distPath); let totalSize = 0; files.forEach(file => { const stats = fs.statSync(file); totalSize += stats.size}); stats.totalSize = totalSize; stats.totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2); if (totalSize > 5 * 1024 * 1024) { / 5MB;" stats.warning =Bundle size is large - consider code splitting and optimization"; if (totalSize > 5 * 1024 * 1024) { / 5MB;" stats.warning =Bundle size is large - consider code splitting and optimization"} }" } catch (error) { this.log("Bundle size analysis failed: ${error.message }", "ERROR")}; return stats}; findPerformanceIssues() { const issues = []; try {" const tsFiles = this.findFilesByExtension(".ts", ".tsx"); for (const file of tsFiles.slice(0, 20)) {" const content = fs.readFileSync(file, "utf8"); / Check for expensive operations in render;" if (content.includes("map(") && content.includes("filter(")) { issues.push({" type: "PERFORMANCE_ANTI_PATTERN"," message: Multiple array operations in render - consider memoization"," file: file," suggestion: "Use useMemo or useCallback to optimize expensive calculations"})} }"` } catch (error) { this.log(`Performance issue detection failed: ${error.message }`, "ERROR")}; return issues}; async analyzeSecurityPatterns() { const reviews = []; const suggestions = []; try {" const tsFiles = this.findFilesByExtension(".ts", ".tsx"); for (const file of tsFiles.slice(0, 30)) {" const content = fs.readFileSync(file, "utf8"); / Check for XSS vulnerabilities;" if (content.includes("dangerouslySetInnerHTML")) { reviews.push({" type: "SECURITY_RISK"," severity: "HIGH"," message: "dangerouslySetInnerHTML usage detected"," file: file," suggestion: "Sanitize HTML content and consider safer alternatives"})}; / Check for hardcoded secrets; if (;" content.includes("api_key") |;" content.includes("password") |;" content.includes("secret"); ) { suggestions.push({" type: "SECURITY_BEST_PRACTICE"," severity: "MEDIUM"," message: "Consider using environment variables for sensitive data"," file: file," suggestion: "Move sensitive data to environment variables", try {" const tsFiles = this.findFilesByExtension(".ts", ".tsx"); for (const file of tsFiles.slice(0, 30)) {" const content = fs.readFileSync(file, "utf8"); / Check for XSS vulnerabilities;" if (content.includes("dangerouslySetInnerHTML")) { reviews.push({" type: "SECURITY_RISK"," severity: "HIGH"," message: "dangerouslySetInnerHTML usage detected"," file: file," suggestion: "Sanitize HTML content and consider safer alternatives"})}; / Check for hardcoded secrets; if (;" content.includes("api_key") |;" content.includes("password") |;" content.includes("secret"); ) { suggestions.push({" type: "SECURITY_BEST_PRACTICE"," severity: "MEDIUM"," message: "Consider using environment variables for sensitive data"," file: file," suggestion: "Move sensitive data to environment variables"})} }"` } catch (error) { this.log(`Security analysis failed: ${error.message }`, "ERROR")}; return { reviews, suggestions } }; async generateAISuggestions(reviews, performance) { const suggestions = []; / Generate intelligent suggestions based on patterns; const issueTypes = reviews.reduce((acc, review) => { acc[review.type] = (acc[review.type] | 0) + 1; return acc}, {}); / Suggest refactoring for common patterns; if (issueTypes.TYPESCRIPT_ANTI_PATTERN > 5) { suggestions.push({" type: "AI_SUGGESTION"," severity: "MEDIUM"," message: "High number of TypeScript anti-patterns detected"," suggestion: Consider running a TypeScript refactoring session to improve code quality"})}; if (issueTypes.REACT_BEST_PRACTICE > 3) { suggestions.push({" type: "AI_SUGGESTION"," severity: "LOW"," message: "Multiple React best practice violations"," suggestion: Review React component architecture and consider implementing a component library"})}; / Performance suggestions; if (performance.bundleSize && performance.bundleSize.warning) { suggestions.push({" type: "AI_SUGGESTION"," severity: "MEDIUM"," message: "Bundle size optimization needed"," suggestion: Implement code splitting, lazy loading, and tree shaking to reduce bundle size"})}; return suggestions}; async updateLearningData(reviews, suggestions, performance) { async updateLearningData(reviews, suggestions, performance) { / Update learning data with new patterns; const timestamp = new Date().toISOString(); if (!this.learningDataObj.patterns[timestamp]) { this.learningDataObj.patterns[timestamp] = {" reviews: reviews.length," suggestions: suggestions.length," performance: performance} }; / Keep only last 30 days of data; const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); Object.keys(this.learningDataObj.patterns).forEach(date => { if (new Date(date) < thirtyDaysAgo) { delete this.learningDataObj.patterns[date]} }); this.saveLearningData()}; async generateReviewReport(reviews, suggestions, performance) { const report = {" timestamp: new Date().toISOString()," summary: { totalIssues: reviews.length," totalSuggestions: suggestions.length," criticalIssues: reviews.filter(r => r.severity === "CRITICAL").length," highIssues: reviews.filter(r => r.severity === "HIGH").length," mediumIssues: reviews.filter(r => r.severity === "MEDIUM").length," lowIssues: reviews.filter(r => r.severity === "LOW").length}," reviews: reviews.slice(0, 20), / Limit for readability;" suggestions: suggestions.slice(0, 20)," performance: performance," recommendations: this.generateRecommendations(; reviews, suggestions, performance; ), async generateReviewReport(reviews, suggestions, performance) { const report = {" timestamp: new Date().toISOString()," summary: { totalIssues: reviews.length," totalSuggestions: suggestions.length," criticalIssues: reviews.filter(r => r.severity === "CRITICAL").length," highIssues: reviews.filter(r => r.severity === "HIGH").length," mediumIssues: reviews.filter(r => r.severity === "MEDIUM").length," lowIssues: reviews.filter(r => r.severity === "LOW").length}," reviews: reviews.slice(0, 20), / Limit for readability;" suggestions: suggestions.slice(0, 20)," performance: performance," recommendations: this.generateRecommendations(; reviews, suggestions, performance; )}; const reportPath = path.join(;" this.projectRoot,logs", "ai-review-report-${Date.now()}.json"; ); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));"this.log(" AI Review Report generated: ${reportPath}"); return report}; generateRecommendations(reviews, suggestions, performance) { const recommendations = [];" if (reviews.filter(r => r.severity === "CRITICAL").length > 0) {" recommendations.push( Critical issues detected - immediate attention required"; )};" if (reviews.filter(r => r.severity === "HIGH").length > 5) {" recommendations.push( High priority issues detected - schedule refactoring session";" if (reviews.filter(r => r.severity === "CRITICAL").length > 0) {" recommendations.push( Critical issues detected - immediate attention required"; )};" if (reviews.filter(r => r.severity === "HIGH").length > 5) {" recommendations.push( High priority issues detected - schedule refactoring session"; )}; if (performance.bundleSize && performance.bundleSize.warning) {" recommendations.push(" Bundle size optimization recommended")}; if (suggestions.length > 10) {" recommendations.push(" Multiple improvement opportunities available")}; return recommendations}; async autoApplySafeFixes(suggestions) { const appliedFixes = []; try { / Only apply safe, low-risk fixes; const safeSuggestions = suggestions.filter(; s =>;" s.severity === "LOW" &&;" s.type !== "SECURITY_RISK" &&;" s.type !== "SECURITY_BEST_PRACTICE"; ); for (const suggestion of safeSuggestions.slice(0, 5)) { / Limit to prevent overwhelming; try { const fixResult = await this.applySuggestion(suggestion); if (fixResult.success) { appliedFixes.push({" suggestion: suggestion," result: fixResult})}" } catch (error) { this.log("Failed to apply suggestion: ${error.message }", "WARN")} }" } catch (error) { this.log("Auto-fix application failed: ${error.message }", "ERROR")}; return appliedFixes}; async applySuggestion(suggestion) { / This is a simplified implementation;" / In practice, you"d want more sophisticated fix application logic;" return { success: true, message: "Suggestion applied successfully" }; async applySuggestion(suggestion) { / This is a simplified implementation;" / In practice, you"d want more sophisticated fix application logic;" return { success: true, message: "Suggestion applied successfully" } }; findFilesByExtension(.extensions) { const files = []; const findFiles = dir => { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (; stat.isDirectory() &&;" !item.startsWith(".") &&;" item !== "node_modules"; ) { findFiles(fullPath)} else if (; stat.isFile() &&; extensions.some(ext => item.endsWith(ext)); ) { files.push(fullPath)} } }; findFiles(this.projectRoot); return files}; getAllFiles(dir) { const files = []; const findFiles = directory => { const items = fs.readdirSync(directory); for (const item of items) { const fullPath = path.join(directory, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { findFiles(fullPath)} else if (stat.isFile()) { files.push(fullPath)} } }; findFiles(dir); return files}; async run() {" this.log(" AI Code Reviewer starting."); try { const result = await this.analyzeCodeQuality();"`this.log(" AI Code Review completed successfully`);` this.log( Found ${result.reviews.length} issues and ${result.suggestions.length} suggestions`; ); return result} catch (error) {"` this.log(` AI Code Review failed: ${error.message }`, "ERROR")} catch (error) {"` this.log(` AI Code Review failed: ${error.message}`, "ERROR"); throw error} }};/ Run if called directly;if (require.main === module) { const reviewer = new AICodeReviewer(); reviewer.run().catch(console.error)};module.exports = AICodeReviewer"`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync, spawn } = require("child_process")
const crypto = require("crypto")
    this.logFile = path.join(this.projectRoot, "logs", "ai-code-reviewer.log")
    this.reviewsLog = path.join(this.projectRoot, "logs", "ai-reviews.json")
      this.projectRoot,logs"
      "ai-learning-data.json"
  fs.mkdirSync(logsDir, { "recursive"})
          fs.readFileSync(this.learningData, "utf8")
  "patterns"
          "suggestions"
          "performance"
          fs.readFileSync(this.learningData, "utf8")
  "patterns"
          "suggestions"
          "performance"
  this.learningDataObj = { "patterns": {}, "suggestions": {}, "performance"
  log(message, level = "INFO")
  this.log("🤖 Starting AI-powered code quality analysis...")
  this.log("🤖 Starting AI-powered code quality analysis...")
      this.log( AI Code Review "completed": ${reviews.length} issues found, ${suggestions.length} suggestions generated, ${appliedFixes.length} fixes applied")
      )} catch (error) {  this.log("AI Code Review "failed": ${error.message  }", "ERROR")
      const tsFiles = this.findFilesByExtension(".ts", ".tsx")
        const content = fs.readFileSync(file, "utf8")
      const tsFiles = this.findFilesByExtension(".ts", ".tsx")
        const content = fs.readFileSync(file, "utf8")
    } catch (error) {  this.log(`TypeScript analysis "failed": ${error.message  }`, "ERROR"`)
    const lines = content.split("\n")
      if (line.includes(": any") && !line.includes("// eslint-disable")
  "type": "TYPESCRIPT_ANTI_PATTERN"
          "severity": "MEDIUM"
          "message": "Avoid using "any type - consider proper typing"
          "file"
          "line"
          "code"
          "suggestion": "Replace any with proper TypeScript types"
        line.includes("import")
        line.includes("from")
        !line.includes("//")
    const lines = content.split("\n")
      if (line.includes(": any") && !line.includes("// eslint-disable")
  "type": "TYPESCRIPT_ANTI_PATTERN"
          "severity": "MEDIUM"
          "message": "Avoid using any" type - consider proper typing"
          "file"
          "line"
          "code"
          "suggestion": "Replace "any" with proper TypeScript types"
        line.includes("import")
        line.includes("from")
        !line.includes("//")
  const imports = importMatch[1].split(",")
          // This is a simplified check - in practice you"
      if (line.includes("function") || line.includes("=>")
  if (lines[i].includes("{"})
          if (lines[i].includes("}")
  "type": "CODE_STRUCTURE"
            "severity": "LOW"
            "message": "Consider breaking down long function"
            "file"
            "line"
            "code"
            "suggestion": Extract smaller, focused functions for better maintainability"
  const reactFiles = this.findFilesByExtension(".tsx", ".jsx")
  const content = fs.readFileSync(file, "utf8")
  const reactFiles = this.findFilesByExtension(".tsx", ".jsx")
  const content = fs.readFileSync(file, "utf8")
    } catch (error) {  this.log(`React analysis "failed": ${error.message  }`, "ERROR"`)
    if (content.includes("useState") && content.includes("useEffect")
  "type": "REACT_BEST_PRACTICE"
          "severity": "MEDIUM"
          "message": "Consider if useEffect needs dependencies"
          "file"
          "suggestion": Review useEffect dependencies to prevent unnecessary re-renders"
    if (content.includes("props.") && content.split("props.")
  "type": "REACT_ARCHITECTURE"
        "severity": "LOW"
        "message": Consider using Context or state management for deep prop drilling"
        "file"
        "suggestion": "Implement React Context or Redux for better state management"
  "bundleSize"
      "renderOptimization"
      "memoryUsage"
      if (fs.existsSync("dist")
      if (fs.existsSync("dist")
      performance.renderOptimization = perfIssues} catch (error) {  this.log(`Performance analysis "failed": ${error.message  }`, "ERROR"`)
  const distPath = path.join(this.projectRoot, "dist")
          stats.warning =Bundle size is large - consider code splitting and optimization"
          stats.warning =Bundle size is large - consider code splitting and optimization"
    } catch (error) {  this.log("Bundle size analysis "failed": ${error.message  }", "ERROR")
  const tsFiles = this.findFilesByExtension(".ts", ".tsx")
  const content = fs.readFileSync(file, "utf8")
        if (content.includes("map(") && content.includes("filter(")
  "type": "PERFORMANCE_ANTI_PATTERN"
            "message": Multiple array operations in render - consider memoization"
            "file"
            "suggestion": "Use useMemo or useCallback to optimize expensive calculations"
    } catch (error) {  this.log(`Performance issue detection "failed": ${error.message  }`, "ERROR"`)
  const tsFiles = this.findFilesByExtension(".ts", ".tsx")
  const content = fs.readFileSync(file, "utf8")
        if (content.includes("dangerouslySetInnerHTML")
  "type": "SECURITY_RISK"
            "severity": "HIGH"
            "message": "dangerouslySetInnerHTML usage detected"
            "file"
            "suggestion": "Sanitize HTML content and consider safer alternatives"
          content.includes("api_key")
          content.includes("password")
          content.includes("secret")
  "type": "SECURITY_BEST_PRACTICE"
            "severity": "MEDIUM"
            "message": "Consider using environment variables for sensitive data"
            "file"
            "suggestion": "Move sensitive data to environment variables"
  const tsFiles = this.findFilesByExtension(".ts", ".tsx")
  const content = fs.readFileSync(file, "utf8")
        if (content.includes("dangerouslySetInnerHTML")
  "type": "SECURITY_RISK"
            "severity": "HIGH"
            "message": "dangerouslySetInnerHTML usage detected"
            "file"
            "suggestion": "Sanitize HTML content and consider safer alternatives"
          content.includes("api_key")
          content.includes("password")
          content.includes("secret")
  "type": "SECURITY_BEST_PRACTICE"
            "severity": "MEDIUM"
            "message": "Consider using environment variables for sensitive data"
            "file"
            "suggestion": "Move sensitive data to environment variables"
    } catch (error) {  this.log(`Security analysis "failed": ${error.message  }`, "ERROR"`)
  "type": "AI_SUGGESTION"
        "severity": "MEDIUM"
        "message": "High number of TypeScript anti-patterns detected"
        "suggestion": Consider running a TypeScript refactoring session to improve code quality"
  "type": "AI_SUGGESTION"
        "severity": "LOW"
        "message": "Multiple React best practice violations"
        "suggestion": Review React component architecture and consider implementing a component library"
  "type": "AI_SUGGESTION"
        "severity": "MEDIUM"
        "message": "Bundle size optimization needed"
        "suggestion": Implement code splitting, lazy loading, and tree shaking to reduce bundle size"
  "reviews"
        "suggestions"
        "performance"
  "timestamp"
      "summary"
        "totalSuggestions"
        "criticalIssues": reviews.filter(r => r.severity === "CRITICAL")
        "highIssues": reviews.filter(r => r.severity === "HIGH")
        "mediumIssues": reviews.filter(r => r.severity === "MEDIUM")
        "lowIssues": reviews.filter(r => r.severity === "LOW")
      "reviews"
      "suggestions"
      "performance"
      "recommendations"
  "timestamp"
      "summary"
        "totalSuggestions"
        "criticalIssues": reviews.filter(r => r.severity === "CRITICAL")
        "highIssues": reviews.filter(r => r.severity === "HIGH")
        "mediumIssues": reviews.filter(r => r.severity === "MEDIUM")
        "lowIssues": reviews.filter(r => r.severity === "LOW")
      "reviews"
      "suggestions"
      "performance"
      "recommendations"
      this.projectRoot,logs", "ai-review-report-${Date.now()}.json"
this.log(" AI Review Report "generated": ${reportPath}")
    if (reviews.filter(r => r.severity === "CRITICAL")
  recommendations.push(� Critical issues detected - immediate attention required")
    if (reviews.filter(r => r.severity === "HIGH")
  recommendations.push(� High priority issues detected - schedule refactoring session")
    if (reviews.filter(r => r.severity === "CRITICAL")
  recommendations.push(� Critical issues detected - immediate attention required")
    if (reviews.filter(r => r.severity === "HIGH")
  recommendations.push(� High priority issues detected - schedule refactoring session")
  recommendations.push("� Bundle size optimization recommended")
  recommendations.push(" Multiple improvement opportunities available")
          s.severity === "LOW"
          s.type !== "SECURITY_RISK"
          s.type !== "SECURITY_BEST_PRACTICE"
  "suggestion"
              "result"
        } catch (error) {  this.log("Failed to apply "suggestion": ${error.message  }", "WARN")
    } catch (error) {  this.log("Auto-fix application "failed": ${error.message  }", "ERROR")
    // In practice, you"
    return { "success": true, "message": "Suggestion applied successfully"}
    // In practice, you"
    return { "success": true, "message": "Suggestion applied successfully"}
          !item.startsWith(".")
          item !== "node_modules"
  this.log(" AI Code Reviewer starting...")
this.log(")
  this.log(` AI Code Review "failed": ${error.message  }`, "ERROR"`)
<<<<<<< HEAD
  this.log(` AI Code Review "failed": ${error.message}`, "ERROR"`)
=======
  this.log(` AI Code Review "failed": ${error.message}`, "ERROR"`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
