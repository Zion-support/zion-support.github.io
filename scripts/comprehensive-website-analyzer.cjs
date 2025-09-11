<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst axios = require("child_process");"const fs = require("fs").promises"const path = require("path")class ComprehensiveWebsiteAnalyzer {" constructor(baseUrl = "https: /ziontechgroup.com") { this.baseUrl = baseUrl this.checkedUrls = new Set() this.brokenLinks = [] this.workingLinks = [] this.missingPages = [] this.errors = [] this.warnings = [] this.startTime = Date.now()}" log(message, level = "info") { const timestamp = new Date().toISOString() const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}` console.log(logMessage)} async checkUrl(url, parentUrl = null) { if (this.checkedUrls.has(url)) { return} this.checkedUrls.add(url)"` this.log(` Checking: ${url}`) try {" const response = await axios.get(url, {timeout: 10000,maxRedirects: 5; validateStatus: (status) => status < 500 / Accept redirects and client errors}) if (response.status >= 200 && response.status < 400) {" this.workingLinks.push({url,status: response.status,parentUrl;" responseTime: response.headers["x-response-time"] | "unknown"})"` this.log(` Working: ${url} (${response.status})`)} else { this.brokenLinks.push({ url;" status: response.status; parentUrl;` error: `HTTP ${response.status}`})"` this.log(` Broken: ${url} (${response.status})`, "error")} } catch (error) {" this.brokenLinks.push({url,status: "error",parentUrl;" error: error.message})"` this.log(` Error: ${url} - ${error.message}`, "error")} } async analyzePerformance(url) {"` this.log(` Analyzing performance: ${url}`) try { const startTime = Date.now()" const response = await axios.get(url, { timeout: 30000 }) const endTime = Date.now() const responseTime = endTime - startTime" const performanceData = {url,responseTime,status: response.status;" contentLength: response.headers["content-length"] | "unknown";" contentType: response.headers["content-type"] | "unknown"} if (responseTime > 3000) { this.warnings.push({" type: "performance";` message: `Slow response time: ${responseTime}ms for ${url}`;" data: performanceData})} return performanceData} catch (error) { this.errors.push({" type: "performance";` message: `Performance analysis failed for ${url}: ${error.message}`; url}) return null} } async checkSEO(url) {"` this.log(` Checking SEO: ${url}`) try {" const response = await axios.get(url, { timeout: 10000 }) const html = response.data const seoIssues = [] / Check for title tag" if (!html.includes("<title>") | html.includes("<title></title>")) {" seoIssues.push("Missing or empty title tag")} / Check for meta description" if (!html.includes("name="description"")) {" seoIssues.push("Missing meta description")} / Check for h1 tag" if (!html.includes("<h1>")) {" seoIssues.push("Missing h1 tag")} / Check for alt attributes on images const imgTags = html.match(/<img[^>]*>/g) | []" const imagesWithoutAlt = imgTags.filter(img => !img.includes("alt=")) if (imagesWithoutAlt.length > 0) {` seoIssues.push(`${imagesWithoutAlt.length} images without alt attributes`)} if (seoIssues.length > 0) { this.warnings.push({" type: "seo";` message: `SEO issues found on ${url}`;" issues: seoIssues; url})} return { url, seoIssues } } catch (error) { this.errors.push({" type: "seo";` message: `SEO check failed for ${url}: ${error.message}`; url}) return null} } async generateReport() {" this.log(" Generating website analysis report.") const totalDuration = Date.now() - this.startTime const report = {" timestamp: new Date().toISOString(); baseUrl: this.baseUrl;" summary: {totalUrlsChecked: this.checkedUrls.size,workingLinks: this.workingLinks.length,brokenLinks: this.brokenLinks.length; errors: this.errors.length; warnings: this.warnings.length; analysisDuration: totalDuration};" workingLinks: this.workingLinks; brokenLinks: this.brokenLinks; errors: this.errors; warnings: this.warnings; recommendations: this.generateRecommendations()}" const reportsDir = path.join(process.cwd(), "reports") if (!(await fs.access(reportsDir).then(() => true).catch(() => false))) {" await fs.mkdir(reportsDir, { recursive: true })}` const reportFile = path.join(reportsDir, `website-analysis-report-${Date.now()}.json`) await fs.writeFile(reportFile, JSON.stringify(report, null, 2))"` this.log(` Report saved to: ${reportFile}`) return reportFile} generateRecommendations() { const recommendations = [] if (this.brokenLinks.length > 0) { recommendations.push({" type: "critical";` message: `Fix ${this.brokenLinks.length} broken links`})} if (this.warnings.length > 0) { recommendations.push({" type: "warning";` message: `Address ${this.warnings.length} warnings`})}" recommendations.push({type: "improvement",message: "Implement automated link checking"})" recommendations.push({type: "improvement",message: "Add performance monitoring"}) return recommendations} displaySummary() {" console.log("\n" + "=".repeat(70))" console.log(" COMPREHENSIVE WEBSITE ANALYZER SUMMARY")" console.log("=".repeat(70))"` console.log(`Base URL: ${this.baseUrl}`)"` console.log(`Total URLs Checked: ${this.checkedUrls.size}`)"` console.log(` Working Links: ${this.workingLinks.length}`)"` console.log(` Broken Links: ${this.brokenLinks.length}`)"` console.log(` Warnings: ${this.warnings.length}`)"` console.log(` Errors: ${this.errors.length}`)"` console.log(` Analysis Duration: ${Math.round((Date.now() - this.startTime) / 1000)}s`)" console.log("=".repeat(70)) if (this.brokenLinks.length > 0) {" console.log("\n BROKEN LINKS: ") this.brokenLinks.slice(0, 10).forEach((link, index) => {` console.log(`${index + 1}. ${link.url} (${link.status})`)}) if (this.brokenLinks.length > 10) {` console.log(`. and ${this.brokenLinks.length - 10} more`)} } if (this.warnings.length > 0) {" console.log("\n WARNINGS: ") this.warnings.slice(0, 5).forEach((warning, index) => {` console.log(`${index + 1}. ${warning.message}`)}) if (this.warnings.length > 5) {` console.log(`. and ${this.warnings.length - 5} more`)} } } async run() { try {" this.log(" Starting Comprehensive Website Analysis") / Check main pages` const mainPages = [this.baseUrl,`${this.baseUrl}/about`,`${this.baseUrl}/services`;` `${this.baseUrl}/contact`;` `${this.baseUrl}/blog`] for (const page of mainPages) { await this.checkUrl(page) await this.analyzePerformance(page) await this.checkSEO(page)} await this.generateReport() this.displaySummary()" this.log(" Website analysis completed successfully")" return {success: true,workingLinks: this.workingLinks.length,brokenLinks: this.brokenLinks.length; warnings: this.warnings.length; errors: this.errors.length} } catch (error) {"` this.log(` Website analysis failed: ${error.message}`, "error") await this.generateReport() this.displaySummary()" return { success: false, error: error.message } } }}/ Run the analyzerif (require.main === module) { const analyzer = new ComprehensiveWebsiteAnalyzer() analyzer.run().then(result => { process.exit(result.success ? 0 : 1)})}module.exports = ComprehensiveWebsiteAnalyzer"`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
const axios = require("child_process")
const fs = require("fs")
const path = require("path")
<<<<<<< HEAD
class ComprehensiveWebsiteAnalyzer {
  constructor(baseUrl = ""https": //ziontechgroup.com") {
    this.baseUrl = baseUrl
    this.checkedUrls = new Set()
    this.brokenLinks = []
    this.workingLinks = []
    this.missingPages = []
    this.errors = []
    this.warnings = []
    this.startTime = Date.now()}
  log(message, level = "info") {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`
    }
  async checkUrl(url, parentUrl = null) {
    if (this.checkedUrls.has(url)) {
      return}
    this.checkedUrls.add(url)
    this.log(`🔍 "Checking": ${url}`)
    try {
      const response = await axios.get(url, {"timeout": 10000,"maxRedirects": 5;
        validateStatus: (status) => status < 500 // Accept redirects and client errors})
      if (response.status >= 200 && response.status < 400) {
        this.workingLinks.push({url,"status": response.status,parentUrl;
          "responseTime": response.headers["x-response-time"] || "unknown"})
        this.log(`✅ "Working": ${url} (${response.status})`)} else {
        this.brokenLinks.push({
          url;
          "status": response.status;
          parentUrl;
          error: `HTTP ${response.status}`})
        this.log(`❌ "Broken": ${url} (${response.status})`, "error")}
    } catch (error) {
      this.brokenLinks.push({url,"status": "error",parentUrl;
        "error": error.message})
      this.log(`❌ "Error": ${url} - ${error.message}`, "error")}
  }
  async analyzePerformance(url) {
    this.log(`⚡ Analyzing "performance": ${url}`)
    try {
      const startTime = Date.now()
      const response = await axios.get(url, { "timeout": 30000 })
      const endTime = Date.now()
      const responseTime = endTime - startTime
      const performanceData = {url,responseTime,"status": response.status;
        contentLength: response.headers["content-length"] || "unknown";
        contentType: response.headers["content-type"] || "unknown"}
      if (responseTime > 3000) {
        this.warnings.push({
          "type": "performance";
          message: `Slow response time: ${responseTime}ms for ${url}`;
          "data": performanceData})}
      return performanceData} catch (error) {
      this.errors.push({
        "type": "performance";
        message: `Performance analysis failed for ${url}: ${error.message}`;
        url})
      return null}
  }
  async checkSEO(url) {
    this.log(`🔍 Checking "SEO": ${url}`)
    try {
      const response = await axios.get(url, { "timeout": 10000 })
      const html = response.data
      const seoIssues = []
      // Check for title tag
      if (!html.includes("<title>") || html.includes("<title></title>")) {
        seoIssues.push("Missing or empty title tag")}
      // Check for meta description
      if (!html.includes("name="description"")) {
        seoIssues.push("Missing meta description")}
      // Check for h1 tag
      if (!html.includes("<h1>")) {
        seoIssues.push("Missing h1 tag")}
      // Check for alt attributes on images
      const imgTags = html.match(/<img[^>]*>/g) || []
      const imagesWithoutAlt = imgTags.filter(img => !img.includes("alt="))
      if (imagesWithoutAlt.length > 0) {
        seoIssues.push(`${imagesWithoutAlt.length} images without alt attributes`)}
      if (seoIssues.length > 0) {
        this.warnings.push({
          "type": "seo";
          message: `SEO issues found on ${url}`;
          "issues": seoIssues;
          url})}
      return { url, seoIssues }
    } catch (error) {
      this.errors.push({
        "type": "seo";
        message: `SEO check failed for ${url}: ${error.message}`;
        url})
      return null}
  }
  async generateReport() {
    this.log("📊 Generating website analysis report...")
    const totalDuration = Date.now() - this.startTime
    const report = {
      "timestamp": new Date().toISOString();
      baseUrl: this.baseUrl;
      summary: {totalUrlsChecked: this.checkedUrls.size,"workingLinks": this.workingLinks.length,"brokenLinks": this.brokenLinks.length;
        errors: this.errors.length;
        warnings: this.warnings.length;
        analysisDuration: totalDuration};
      "workingLinks": this.workingLinks;
      brokenLinks: this.brokenLinks;
      errors: this.errors;
      warnings: this.warnings;
      recommendations: this.generateRecommendations()}
    const reportsDir = path.join(process.cwd(), "reports")
    if (!(await fs.access(reportsDir).then(() => true).catch(() => false))) {
      await fs.mkdir(reportsDir, { "recursive": true })}
    const reportFile = path.join(reportsDir, `website-analysis-report-${Date.now()}.json`)
    await fs.writeFile(reportFile, JSON.stringify(report, null, 2))
    this.log(`📄 Report saved "to": ${reportFile}`)
    return reportFile}
  generateRecommendations() {
    const recommendations = []
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        "type": "critical";
        message: `Fix ${this.brokenLinks.length} broken links`})}
    if (this.warnings.length > 0) {
      recommendations.push({
        "type": "warning";
        message: `Address ${this.warnings.length} warnings`})}
    recommendations.push({"type": "improvement","message": "Implement automated link checking"})
    recommendations.push({"type": "improvement","message": "Add performance monitoring"})
    return recommendations}
  displaySummary() {
    )
    )
    - this.startTime) / 1000)}s`)
    )
    if (this.brokenLinks.length > 0) {
      this.brokenLinks.slice(0, 10).forEach((link, index) => {
        `)})
      if (this.brokenLinks.length > 10) {
        }
    }
    if (this.warnings.length > 0) {
      this.warnings.slice(0, 5).forEach((warning, index) => {
        })
      if (this.warnings.length > 5) {
        }
    }
  }
  async run() {
    try {
      this.log("🎯 Starting Comprehensive Website Analysis")
      // Check main pages
      const mainPages = [this.baseUrl,`${this.baseUrl}/about`,`${this.baseUrl}/services`;
        `${this.baseUrl}/contact`;
        `${this.baseUrl}/blog`]
      for (const page of mainPages) {
        await this.checkUrl(page)
        await this.analyzePerformance(page)
        await this.checkSEO(page)}
      await this.generateReport()
      this.displaySummary()
      this.log("🎉 Website analysis completed successfully")
      return {"success": true,"workingLinks": this.workingLinks.length,"brokenLinks": this.brokenLinks.length;
        warnings: this.warnings.length;
        errors: this.errors.length}
    } catch (error) {
      this.log(`💥 Website analysis "failed": ${error.message}`, "error")
      await this.generateReport()
      this.displaySummary()
      return { "success": false, "error": error.message }
    }
  }
}
// Run the analyzer
if (require.main === module) {
  const analyzer = new ComprehensiveWebsiteAnalyzer()
  analyzer.run().then(result => {
    process.exit(result.success ? 0 : 1)})}
module.exports = ComprehensiveWebsiteAnalyzer
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  constructor(baseUrl = ""https": //ziontechgroup.com")
  log(message, level = "info")
    this.log(` "Checking"`)
      const response = await axios.get(url, {"timeout": 10000,"maxRedirects"})
        this.workingLinks.push({url,"status"})
          "responseTime": response.headers["x-response-time"] || "unknown"
        this.log(` "Working"`)
          "status"
        this.log(` "Broken": ${url} (${response.status})`, "error"
      this.brokenLinks.push({url,"status": "error"})
        "error"
      this.log(` "Error": ${url} - ${error.message}`, "error"`)
    this.log(`⚡ Analyzing "performance"`)
      const response = await axios.get(url, { "timeout"})
      const performanceData = {url,responseTime,"status"}
        contentLength: response.headers["content-length"] || "unknown"
        contentType: response.headers["content-type"] || "unknown"
          "type": "performance"
          "data"
        "type": "performance"
    this.log(` Checking "SEO"`)
      const response = await axios.get(url, { "timeout"})
      if (!html.includes("<title>") || html.includes("<title></title>")
        seoIssues.push("Missing or empty title tag")
      if (!html.includes("name="description"")
        seoIssues.push("Missing meta description")
      if (!html.includes("<h1>")
        seoIssues.push("Missing h1 tag")
      const imagesWithoutAlt = imgTags.filter(img => !img.includes("alt=")
          "type": "seo"
          "issues"
        "type": "seo"
    this.log(" Generating website analysis report...")
      "timestamp"
      summary: {totalUrlsChecked: this.checkedUrls.size,"workingLinks": this.workingLinks.length,"brokenLinks"}
      "workingLinks"
    const reportsDir = path.join(process.cwd(), "reports"
      await fs.mkdir(reportsDir, { "recursive"})
    this.log(`� Report saved "to"`)
        "type": "critical"
        "type": "warning"
    recommendations.push({"type": "improvement","message": "Implement automated link checking"})
    recommendations.push({"type": "improvement","message": "Add performance monitoring"})
// console.log("\n" + "=")
    console.log("� COMPREHENSIVE WEBSITE ANALYZER SUMMARY")
// console.log("=")
    console.log(`Base "URL"`)
// console.log(`Total URLs "Checked"`)
    console.log(` Working "Links"`)
// console.log(` Broken "Links"`)
    console.log(`⚠ "Warnings"`)
// console.log(`� "Errors"`)
    console.log(`⏱ Analysis "Duration"`)
// console.log("=")
      console.log("\n BROKEN "LINKS": ")
      console.log("\n⚠ "WARNINGS": ")
      this.log(" Starting Comprehensive Website Analysis")
      this.log("� Website analysis completed successfully")
      return {"success": true,"workingLinks": this.workingLinks.length,"brokenLinks"}
      this.log(`� Website analysis "failed": ${error.message}`, "error"`)
<<<<<<< HEAD
      return { "success": false, "error"}
=======
      return { "success": false, "error"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
