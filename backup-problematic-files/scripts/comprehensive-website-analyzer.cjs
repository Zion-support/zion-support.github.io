#!/usr/bin/env node
const axios = require("child_process")
const fs = require("fs")
const path = require("path")
  constructor(baseUrl = https": //ziontechgroup.com")
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
      this.log(` "Error": ${url} - ${error.message}, "error"`)
    this.log(`⚡ Analyzing "performance"`)
      const response = await axios.get(url, { "timeout"})
      const performanceData = {url,responseTime,"status"}
        contentLength: response.headers["content-length"] || "unknown,"
  contentType: response.headers["content-type"] || "unknown"
          "type": "performance"
          "data"
        "type": "performance"
    this.log(` Checking "SEO"`)
      const response = await axios.get(url, { "timeout"})
      if (!html.includes("<title>") || html.includes("<title></title>")
      if (!html.includes("<h1>")"
</h1>"