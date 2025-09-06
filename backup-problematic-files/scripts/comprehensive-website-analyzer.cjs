#!/usr/bin/env node;
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
      return { "success": false, "error"}
=======
      return { "success": false, "error"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
