#!/""usr/bin/env"" node;
/**;
 * AI Code Reviewer - PM2 Automation;
 * Intelligently analyzes code quality and suggests improvements;
 */;
#!/"usr/bin/env" node;
/**;
 * AI Code Reviewer - PM2 Automation;
 * Intelligently analyzes code quality and suggests improvements;
 */;
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.logFile = path.join(this.projectRoot, "logs", "ai-code-reviewer.log")
    this.reviewsLog = path.join(this.projectRoot, "logs", "ai-reviews.json")
    this.learningData = path.join(
      this.projectRoot,logs",
      "ai-learning-data.json";
    )
    this.ensureLogsDirectory()
    this.loadLearningData(),
}
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile)
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true }),
}
  }
  loadLearningData() {
  if (fs.existsSync(this.learningData)) {
  try {
  this.learningDataObj = JSON.parse(
          fs.readFileSync(this.learningData, `utf8`)
        ),
} catch (error) {
  this.learningDataObj = {
  patterns: {  },
          suggestions: {},
          performance: {},

  loadLearningData() {
  if (fs.existsSync(this.learningData)) {
  try {
  this.learningDataObj = JSON.parse(
          fs.readFileSync(this.learningData, "utf8")
        ),
} catch (error) {
  this.learningDataObj = {
  patterns: {},
          suggestions: {},
          performance: {},,
}
      }
    } else {
  this.learningDataObj = { patterns: {}, suggestions: {}, performance: {} }
    }
  }
  saveLearningData() {
  fs.writeFileSync(
      this.learningData,
      JSON.stringify(this.learningDataObj, null, 2)
    ),
}
  log(message, level = `INFO`) {
  const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    fs.appendFileSync(this.logFile, logEntry)console.log(`[${level}] ${message}`),
}
  async analyzeCodeQuality() {
  this.log(`🤖 Starting AI-powered code quality analysis...`)
    const reviews = []
    const suggestions = []
    const performance = {}
    try {
  async analyzeCodeQuality() {
  this.log("🤖 Starting AI-powered code quality analysis...")

    const reviews = []
    const suggestions = []
    const performance = {}    try {
  // 1. Analyze TypeScript files for patterns;
      const tsAnalysis = await this.analyzeTypeScriptFiles();
      reviews.push(...tsAnalysis.reviews);
      suggestions.push(...tsAnalysis.suggestions);
      // 2. Analyze React components for best practices;
      const reactAnalysis = await this.analyzeReactComponents()
      reviews.push(...reactAnalysis.reviews)
      suggestions.push(...reactAnalysis.suggestions)
      // 3. Analyze performance patterns;
      // 3. Analyze performance patterns;
      const perfAnalysis = await this.analyzePerformancePatterns()
      Object.assign(performance, perfAnalysis)
      // 4. Analyze security patterns;
      const securityAnalysis = await this.analyzeSecurityPatterns();
      reviews.push(...securityAnalysis.reviews);
      suggestions.push(...securityAnalysis.suggestions);
      // 5. Generate intelligent suggestions;
    try {
  // Find all TypeScript files;
      const tsFiles = this.findFilesByExtension(".ts", ".tsx")

      for (const file of tsFiles.slice(0, 50)) {
  // Limit to prevent overwhelming;
        const content = fs.readFileSync(file, "utf8")
        const analysis = this.analyzeTypeScriptFile(content, file)

        if (analysis.issues.length > 0) {
  reviews.push(...analysis.issues),
}
        if (analysis.suggestions.length > 0) {
  suggestions.push(...analysis.suggestions),
}
      }
    } catch (error) {  this.log(`TypeScript analysis failed: ${error.message  }`, `ERROR`),
}
    return { reviews, suggestions }
  }
  analyzeTypeScriptFile(content, filePath) {
  const issues = []
    const suggestions = []
    // Analyze for common TypeScript anti-patterns;
    const lines = content.split(`\n`)    lines.forEach((line, index) => {
  const lineNum = index + 1;
      // Check for any types;
      if (line.includes(": any") && !line.includes("// eslint-disable")) {
  issues.push({
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
        !line.includes("//")
      ) {
  // Analyze for common TypeScript anti-patterns;
    const lines = content.split("\n")

    lines.forEach((line, index) => {
  const lineNum = index + 1;

      // Check for any types;
      if (line.includes(": any") && !line.includes("// eslint-disable")) {
  issues.push({
  type: "TYPESCRIPT_ANTI_PATTERN",
          severity: "MEDIUM",
          message: "Avoid using any" type - consider proper typing",
          file: filePath,
          line: lineNum,
          code: line.trim(),
          suggestion: "Replace "any" with proper TypeScript types",,
}),
}      // Check for unused imports;
      if (;
        line.includes("import") &&;
        line.includes("from") &&;
      // Check for long functions;
      if (line.includes("function") || line.includes("=>")) {
  const functionStart = index;
        let functionLength = 0;
        for (let i = index; i < lines.length; i++) {
  if (lines[i].includes("{")) functionLength++;
          if (lines[i].includes("}")) break;
}
        if (functionLength > 20) {
  suggestions.push({
  type: "CODE_STRUCTURE",
            severity: "LOW",
            message: "Consider breaking down long function",
            file: filePath,
            line: lineNum,
            code: line.trim(),
            suggestion: Extract smaller, focused functions for better maintainability",,
}),
}
      }
    })

    return { issues, suggestions }
  }
  async analyzeReactComponents() {
  const reviews = []
    const suggestions = []
    try {
  const reactFiles = this.findFilesByExtension(".tsx", `.jsx`)
      for (const file of reactFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, `utf8`)

    try {
  const reactFiles = this.findFilesByExtension(".tsx", ".jsx")

      for (const file of reactFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8")
        const analysis = this.analyzeReactComponent(content, file)

        reviews.push(...analysis.reviews)
        suggestions.push(...analysis.suggestions),
}
    } catch (error) {  this.log(`React analysis failed: ${error.message  }`, `ERROR`),
}
    return { reviews, suggestions }
  }
  analyzeReactComponent(content, filePath) {
  const reviews = []
    const suggestions = []
    // Check for React best practices;
    if (content.includes(`useState`) && content.includes("useEffect")) {  // Check for missing dependency arrays;
      const useEffectRegex =;
        /useEffect\s*\(\s*\(\)\s*=>\s*{[^}]*}\s*,\s*\[\s*\]/g;
      if (useEffectRegex.test(content)) {
  suggestions.push({
    // Check for prop drilling;
    if (content.includes("props.") && content.split("props.").length > 5) {
  suggestions.push({
  type: "REACT_ARCHITECTURE",
        severity: "LOW",
        message: Consider using Context or state management for deep prop drilling",
        file: filePath,
        suggestion: `Implement React Context or Redux for better state management`,      }),
}
    return { reviews, suggestions }
  }
  async analyzePerformancePatterns() {
  const performance = {
  bundleSize: {},
      renderOptimization: {},
      memoryUsage: {},,
}
    try {
  // Analyze bundle size;
      if (fs.existsSync(`dist`)) {
  const bundleStats = this.analyzeBundleSize()
        performance.bundleSize = bundleStats;
}

    try {
  // Analyze bundle size;
      if (fs.existsSync("dist")) {
  const bundleStats = this.analyzeBundleSize()
        performance.bundleSize = bundleStats;
}
      // Check for performance anti-patterns in code;
      const perfIssues = this.findPerformanceIssues()
      performance.renderOptimization = perfIssues;
} catch (error) {  this.log(`Performance analysis failed: ${error.message  }`, `ERROR`),
}
    return performance;
}
  analyzeBundleSize() {
  const stats = {}
    try {
  const distPath = path.join(this.projectRoot, `dist`)
      if (fs.existsSync(distPath)) {
  const files = this.getAllFiles(distPath)
        let totalSize = 0;

        files.forEach(file => {
  const stats = fs.statSync(file)
          totalSize += stats.size;
})

        stats.totalSize = totalSize;
        stats.totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2)
        if (totalSize > 5 * 1024 * 1024) {
  // 5MB;
          stats.warning =Bundle size is large - consider code splitting and optimization`;

        if (totalSize > 5 * 1024 * 1024) {
  // 5MB;
          stats.warning =Bundle size is large - consider code splitting and optimization";
}
      }
    } catch (error) {  this.log(`Bundle size analysis failed: ${error.message  }`, `ERROR`),
}
    return stats;
}
  findPerformanceIssues() {
  const issues = []
    try {
  const tsFiles = this.findFilesByExtension(`.ts", ".tsx")
      for (const file of tsFiles.slice(0, 20)) {
  const content = fs.readFileSync(file, "utf8")
        // Check for expensive operations in render;
        if (content.includes("map(") && content.includes("filter(")) {
  issues.push({
  type: "PERFORMANCE_ANTI_PATTERN`,
            message: Multiple array operations in render - consider memoization`,
            file: file,
            suggestion: `Use useMemo or useCallback to optimize expensive calculations`,          }),
}
      }
    } catch (error) {  this.log(`Performance issue detection failed: ${error.message  }`, `ERROR`),
}
    return issues;
}
  async analyzeSecurityPatterns() {
  const reviews = []
    const suggestions = []
    try {
  const tsFiles = this.findFilesByExtension(`.ts`, ".tsx")
      for (const file of tsFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8")
        // Check for XSS vulnerabilities;
        if (content.includes("dangerouslySetInnerHTML")) {
  reviews.push({
  type: "SECURITY_RISK",
            severity: "HIGH",
            message: "dangerouslySetInnerHTML usage detected",
            file: file,
            suggestion: "Sanitize HTML content and consider safer alternatives"}),
}
        // Check for hardcoded secrets;
        if (;
          content.includes("api_key") ||;
          content.includes("password") ||;
          content.includes("secret")
        ) {
  suggestions.push({
  type: "SECURITY_BEST_PRACTICE",
            severity: "MEDIUM",
            message: `Consider using environment variables for sensitive data`,
            file: file,
            suggestion: `Move sensitive data to environment variables`,

    try {
  const tsFiles = this.findFilesByExtension(".ts", ".tsx")

      for (const file of tsFiles.slice(0, 30)) {
  const content = fs.readFileSync(file, "utf8")

        // Check for XSS vulnerabilities;
        if (content.includes("dangerouslySetInnerHTML")) {
  reviews.push({
  type: "SECURITY_RISK",
            severity: "HIGH",
            message: "dangerouslySetInnerHTML usage detected",
            file: file,
            suggestion: "Sanitize HTML content and consider safer alternatives",,
}),
}        // Check for hardcoded secrets;
        if (
          content.includes("api_key") ||;
          content.includes("password") ||;
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
          content.includes("secret")
        ) {
  suggestions.push({
  type: "SECURITY_BEST_PRACTICE",
            severity: "MEDIUM",
            message: "Consider using environment variables for sensitive data",
            file: file,
            suggestion: "Move sensitive data to environment variables",,
}),
}
      }
    } catch (error) {  this.log(`Security analysis failed: ${error.message  }`, `ERROR`),
}
    return { reviews, suggestions }
  }
  async generateAISuggestions(reviews, performance) {
  const suggestions = []
    // Generate intelligent suggestions based on patterns;
    const issueTypes = reviews.reduce((acc, review) => {
  acc[review.type] = (acc[review.type] || 0) + 1;
      return acc;
}, {})
    // Suggest refactoring for common patterns;
    if (issueTypes.TYPESCRIPT_ANTI_PATTERN > 5) {
  suggestions.push({;
  type: `AI_SUGGESTION`,;
        severity: "MEDIUM",;
        message: "High number of TypeScript anti-patterns detected",;
        suggestion: Consider running a TypeScript refactoring session to improve code quality"});}

    if (issueTypes.REACT_BEST_PRACTICE > 3) {
  suggestions.push({
  type: "AI_SUGGESTION",
        severity: "LOW",
        message: "Multiple React best practice violations",
        suggestion: Review React component architecture and consider implementing a component library",,
}),
}
    // Performance suggestions;
    if (performance.bundleSize && performance.bundleSize.warning) {
  suggestions.push({
  type: "AI_SUGGESTION",
        severity: "MEDIUM",
        message: "Bundle size optimization needed",
        suggestion: Implement code splitting, lazy loading, and tree shaking to reduce bundle size",      }),
}
    return suggestions;
}
  async updateLearningData(reviews, suggestions, performance) {
  async updateLearningData(reviews, suggestions, performance) {
  // Update learning data with new patterns;
    const timestamp = new Date().toISOString()

    if (!this.learningDataObj.patterns[timestamp]) {
  this.learningDataObj.patterns[timestamp] = {
  reviews: reviews.length,
        suggestions: suggestions.length,
        performance: performance,,
}    }
    // Keep only last 30 days of data;
    this.saveLearningData(),
}
  async generateReviewReport(reviews, suggestions, performance) {
  const report = {
  timestamp: new Date().toISOString(),
      summary: {
  totalIssues: reviews.length,
        totalSuggestions: suggestions.length,
        criticalIssues: reviews.filter(r => r.severity === "CRITICAL").length,
        highIssues: reviews.filter(r => r.severity === "HIGH").length,
        mediumIssues: reviews.filter(r => r.severity === "MEDIUM`).length,
        lowIssues: reviews.filter(r => r.severity === `LOW`).length},
      reviews: reviews.slice(0, 20), // Limit for readability;
      suggestions: suggestions.slice(0, 20),
      performance: performance,
      recommendations: this.generateRecommendations(        reviews,
        suggestions,
        performance;
      ),
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

  async generateReviewReport(reviews, suggestions, performance) {
  const report = {
  timestamp: new Date().toISOString(),
      summary: {
  totalIssues: reviews.length,
        totalSuggestions: suggestions.length,
        criticalIssues: reviews.filter(r => r.severity === "CRITICAL").length,
        highIssues: reviews.filter(r => r.severity === "HIGH").length,
        mediumIssues: reviews.filter(r => r.severity === "MEDIUM").length,
        lowIssues: reviews.filter(r => r.severity === "LOW").length,,
},
      reviews: reviews.slice(0, 20), // Limit for readability;
      suggestions: suggestions.slice(0, 20),
      performance: performance,
      recommendations: this.generateRecommendations(
        reviews,
        suggestions,
        performance;
      ),,
}
    const reportPath = path.join(
      this.projectRoot,logs", `ai-review-report-${Date.now()}.json`;
    )
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
this.log(`📊 AI Review Report generated: ${reportPath}`)
    return report;
}
  generateRecommendations(reviews, suggestions, performance) {
  const recommendations = []
    if (reviews.filter(r => r.severity === `CRITICAL`).length > 0) {
  recommendations.push(🔴 Critical issues detected - immediate attention required`;
      ),
}
    if (reviews.filter(r => r.severity === `HIGH").length > 5) {
  recommendations.push(🟠 High priority issues detected - schedule refactoring session";

    if (reviews.filter(r => r.severity === "CRITICAL").length > 0) {
  recommendations.push(🔴 Critical issues detected - immediate attention required";
      ),
}
    if (reviews.filter(r => r.severity === "HIGH").length > 5) {
  recommendations.push(🟠 High priority issues detected - schedule refactoring session";
      );}

    if (performance.bundleSize && performance.bundleSize.warning) {
  recommendations.push("📦 Bundle size optimization recommended");}

    if (suggestions.length > 10) {
  recommendations.push("💡 Multiple improvement opportunities available"),
}
    return recommendations;
}
  async autoApplySafeFixes(suggestions) {
  const appliedFixes = []    try {
  // Only apply safe, low-risk fixes;
      const safeSuggestions = suggestions.filter(;
        s =>;
          s.severity === "LOW" &&;
    const findFiles = dir => {
  const items = fs.readdirSync(dir)

      for (const item of items) {
  const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)

        if (          stat.isDirectory() &&;
          !item.startsWith(".") &&;
          item !== "node_modules";
        ) {
    const findFiles = directory => {
  const items = fs.readdirSync(directory)

      for (const item of items) {
  const fullPath = path.join(directory, item)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
  findFiles(fullPath),
} else if (stat.isFile()) {
  files.push(fullPath),
}
      }
    }
    findFiles(dir)
    return files;
}
  async run() {
  this.log(`🚀 AI Code Reviewer starting...`)
    try {
  const result = await this.analyzeCodeQuality()
this.log(`✅ AI Code Review completed successfully`)
      this.log(📊 Found ${result.reviews.length} issues and ${result.suggestions.length} suggestions`;
      )

      return result;
} catch (error) {
  this.log(`❌ AI Code Review failed: ${error.message  }`, `ERROR`),
} catch (error) {
  this.log(`❌ AI Code Review failed: ${error.message}`, "ERROR")
      throw error;
}  }
}

// Run if called directly;
if (require.main === module) {
  const reviewer = new AICodeReviewer()
  reviewer.run().catch(console.error),
}
module.exports = AICodeReviewer}}}}}}}}}}}}}}}}}}}}}))))))