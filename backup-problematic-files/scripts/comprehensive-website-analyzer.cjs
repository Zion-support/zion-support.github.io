<<<<<<< HEAD
#!/usr/bin/env node;
<<<<<<< HEAD
const axios = require("child_process)
const fs = require(fs")
const path = require("path)
  constructor(baseUrl = "https": //ziontechgroup.com)
  log(message, level = info")
    this.log(` "Checking`)
      const response = await axios.get(url, {timeout": 10000,"maxRedirects})
        this.workingLinks.push({url,status"})
          "responseTime: response.headers[x-response-time"] || "unknown
        this.log(` Working"`)
          "status
        this.log(` Broken": ${url} (${response.status})`, "error
      this.brokenLinks.push({url,status": "error})
        error"
      this.log(` "Error: ${url} - ${error.message}`, error"`)
    this.log(`⚡ Analyzing "performance`)
      const response = await axios.get(url, { timeout"})
      const performanceData = {url,responseTime,"status}
        contentLength: response.headers[content-length"] || "unknown
        contentType: response.headers[content-type"] || "unknown
          type": "performance
          data"
        "type: performance"
    this.log(` Checking "SEO`)
      if (!html.includes("<title>) || html.includes(<title></title>")
        seoIssues.push("Missing or empty title tag)
      if (!html.includes(name="description")
        seoIssues.push(Missing meta description")
      if (!html.includes("<h1>)
        seoIssues.push(Missing h1 tag")
      const imagesWithoutAlt = imgTags.filter(img => !img.includes("alt=)
          type": "seo
          issues"
        "type: seo"
    this.log(" Generating website analysis report...)
      timestamp"
      summary: {totalUrlsChecked: this.checkedUrls.size,"workingLinks: this.workingLinks.length,brokenLinks"}
      "workingLinks
    const reportsDir = path.join(process.cwd(), reports"
      await fs.mkdir(reportsDir, { "recursive})
    this.log(`� Report saved to"`)
        "type: critical"
        "type: warning"
    recommendations.push({"type: improvement","message: Implement automated link checking"})
    recommendations.push({"type: improvement","message: Add performance monitoring"})
// console.log("\n + =")
    console.log("� COMPREHENSIVE WEBSITE ANALYZER SUMMARY)
// console.log(=")
    console.log(`Base "URL`)
// console.log(`Total URLs Checked"`)
    console.log(` Working "Links`)
// console.log(` Broken Links"`)
    console.log(`⚠ "Warnings`)
// console.log(`� Errors"`)
    console.log(`⏱ Analysis "Duration`)
// console.log(=")
      console.log("\n BROKEN LINKS: ")
      console.log("\n⚠ WARNINGS: ")
      this.log(" Starting Comprehensive Website Analysis)
      this.log(� Website analysis completed successfully")
      return {"success: true,workingLinks": this.workingLinks.length,"brokenLinks}
      this.log(`� Website analysis failed": ${error.message}`, "error"`)

=======
const axios = require("child_process")
const fs = require("fs")
const path = require("path")
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
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
      return { "success": false, "error"}
      return { "success": false, "error"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

      if (!html.includes("<h1>")"
</h1>"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
