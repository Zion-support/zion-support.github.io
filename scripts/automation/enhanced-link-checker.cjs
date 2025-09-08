#!/""usr/bin/env""
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
const https = require("https")
const http = require("http")
const { URL } = require("url")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
console.log(""� Starting Enhanced Link Checker Automation...")
  "internal": { total: 0, "working": 0, "broken": 0, "results"}
      "external": { total: 0, "working": 0, "broken": 0, "results"}
      "summary": { total: 0, "working": 0, "broken": 0, "rate": 0 }};    this.reportDir = path.join(process.cwd(), "link-reports"
  fs.mkdirSync(this.reportDir, { "recursive"})
  console.log(""� Building project for link extraction...")
  // Check if we"
      if (fs.existsSync("vite.config.ts") || fs.existsSync("vite.config.js")
  console.log(""� Vite project detected, running build...")
        execSync("npm run build")
  "stdio": "inherit"
          "cwd": process.cwd()}
});        console.log(" Build completed successfully")
        return true} else if (fs.existsSync("next.config.js")
  console.log("⚡ Next.js project detected, running build...")
        execSync("npm run build")
  "stdio": "inherit"
          "cwd"
// console.log(" Build completed successfully")
  console.log("⚠ No recognized build system found, skipping build...")
// console.log(" Build failed, but continuing with link checking...")
      console.log(" This is normal if the project has build issues")
  extractLinksFromHTML(content, baseUrl = ")
<<<<<<< HEAD
const hrefMatches = content.match(/href=[""]([^"]+)["];
const url = match.match(/href=["]([^"]+)["];
      if (url && !url.startsWith("#") && !url.startsWith(""javascript": ")
const srcMatches = content.match(/src=["]([^""]+)[""];
const url = match.match(/src=["]([^"]+)["];
      if (url && !url.startsWith(""data": ") && !url.startsWith("blob:")
      content.match(/(?:url|link)\s*\(["]?([^"]+)["]
const url = match.match(/(?:url|link)\s*\([""]?([^""]+)["];
  if (url.startsWith(""http": //") || url.startsWith("https://")
    if (url.startsWith(")
return "https";
    if (url.startsWith(`/`)) {return "https"`}
=======
    const hrefMatches = content.match(/href=[""]([^"]+)["]
  const url = match.match(/href=["]([^"]+)["]
      if (url && !url.startsWith("#") && !url.startsWith(""javascript": ")
    const srcMatches = content.match(/src=["]([^""]+)[""]
  const url = match.match(/src=["]([^"]+)["]
      if (url && !url.startsWith(""data": ") && !url.startsWith("blob:")
      content.match(/(?:url|link)\s*\(["]?([^"]+)["]
  const url = match.match(/(?:url|link)\s*\([""]?([^""]+)["]
  if (url.startsWith(""http": //") || url.startsWith("https://")
    if (url.startsWith(")
  return "https"
    if (url.startsWith(`/`)) {return "https"`}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (baseUrl && !url.startsWith(`http""`)
  if (url.startsWith(""http": //") || url.startsWith("https://")
    if (url.startsWith("//")
<<<<<<< HEAD
return "https";
    if (url.startsWith("/")) {return "https"}
    if (baseUrl && !url.startsWith("http"")
  console.log("" Extracting links from build output...")
const distDir = path.join(process.cwd(), "dist";
  console.log("" Build output directory not found")
const distDir = path.join(process.cwd(), "dist";
  console.log(" Build output directory not found")
const walkDir = (dir, baseUrl = ");
const filePath = path.join(dir, ");
  walkDir(filePath", baseUrl)} else if (file.endsWith(".html")
const content = fs.readFileSync(filePath, ");
const relativePath = path.relative(distDir, filePath);const fileBaseUrl = "https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"});
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  return "https"
    if (url.startsWith("/")) {return "https"}
    if (baseUrl && !url.startsWith("http"")
  console.log("" Extracting links from build output...")
    const distDir = path.join(process.cwd(), "dist"
  console.log("" Build output directory not found")
    const distDir = path.join(process.cwd(), "dist"
  console.log(" Build output directory not found")
    const walkDir = (dir, baseUrl = ")
  const filePath = path.join(dir, ")
  walkDir(filePath", baseUrl)} else if (file.endsWith(".html")
  const content = fs.readFileSync(filePath, ")
            const relativePath = path.relative(distDir, filePath);const fileBaseUrl = "https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "url"
                "source"
                "type"
  "url"
                "source"
                "type": "html"})})} catch (error) {  console.log(⚠ Could not read "file": ${filePath  }```)
        } else if (file.endsWith(".css")
<<<<<<< HEAD
const content = fs.readFileSync(filePath, "utf8");
              content.match(/url\(["]?([^"]+)["]
const url = match.match(/url\(["]?([^"]+)[""];
              if (url && !url.startsWith(""data")
const normalizedUrl = this.normalizeUrl(url,"https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"});
=======
  const content = fs.readFileSync(filePath, "utf8")
              content.match(/url\(["]?([^"]+)["]
  const url = match.match(/url\(["]?([^"]+)[""]
              if (url && !url.startsWith(""data")
  const normalizedUrl = this.normalizeUrl(url,"https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "url"
                  "source"
                  "type": "css"
  console.log(`⚠ Could not read CSS "file"`)
  resolve({ url, "status": "timeout", "error": "Request timeout"})
<<<<<<< HEAD
const isHttps = urlObj.protocol === ""https": ";
=======
        const isHttps = urlObj.protocol === ""https": "
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "method": "HEAD"
            "timeout"
            "headers": {User-Agent": "Zion-Link-"Checker/1.0""}
              "status"
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              "working"
              "headers"
        req.on("error")
            "status": "error"
            "working"
            "error"
        req.on("timeout")
            "status": "timeout"
            "working"
            "error": "Request timeout"
          "status": "error"
          "working"
          "error"
// console.log("" Checking all extracted links...")
  console.log(" Checking all extracted links...")
  if (link.url.includes("ziontechgroup.com") || link.url.startsWith("/")
// console.log(" Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
<<<<<<< HEAD
  console.log("" Checking internal links...")
// console.log(" Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
  console.log("" Checking internal links...")
=======
  console.log( Checking internal links...")
      await this.checkLinkBatch(internalLinks, "internal)
  console.log( Checking external links...")
      await this.checkLinkBatch(externalLinks, "external)
  console.log( Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
    // Check internal links"
<<<<<<< HEAD
  if($2) {"}
      console.log(")
=======
    if (internalLinks.length > 0) {}
      console.log()
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      await this.checkLinkBatch(internalLinks, "internal")
  console.log(" Checking external links...")
      await this.checkLinkBatch(externalLinks, "external")
  console.log(" Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
    // Check internal links"
    if (internalLinks.length > 0) {"}
      console.log(")
      await this.checkLinkBatch(internalLinks, "internal")
  console.log(" Checking external links...")
      await this.checkLinkBatch(externalLinks, "external")
// console.log( "Progress")
  console.log("� Generating link report...")
  "timestamp"
      "summary"
      "internal"
      "external"
      "brokenLinks"
        "external"
      path.join(this.reportDir, "link-check-report.json")
      path.join(this.reportDir, "LINK_CHECK_REPORT.md")
      path.join(this.reportDir, "link-check-report.csv")
// console.log("� Link report generated successfully")
  console.log("� Generating link report...")
  "timestamp"
      "summary"
      "internal"
      "external"
      "brokenLinks"
        "external"
      path.join(this.reportDir, "link-check-report.json")
      path.join(this.reportDir, "LINK_CHECK_REPORT.md")
      path.join(this.reportDir, "link-check-report.csv")
    console.log("� Link report generated successfully")
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? " - ${link.error} : ```)
        .join("\n")
    : "
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? ` - ${link.error} : ""`)
        "
        .join("\n")
    : "
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? " - ${link.error} : ")
        .join("\n")
    : " No broken internal links found!"
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? " - ${link.error} : ")
        .join("\n")
    : " No broken external links found!"
    : "1.  All internal links are working correctly"
    : "2.  All external links are working correctly"
<<<<<<< HEAD
2. **Automated Fixes**: Implement automated link validation in ""CI/CD""
2. **Automated Fixes**: Implement automated link validation in "CI/CD"
  const allLinks = ["...report.internal.results.map(link => ({ ...link", ""type": "internal" }))", "...report.external.results.map(link => ({ ...link", ""type": "external" }))", "]
const csvHeaders = ["Type", "Source", "URL", "Status", "Working", "Error"];
    const csvRows = allLinks.map(link => ["link.type", "link.source || "unknown"", "link.url", "link.status || "unknown"", "link.working ? "Yes" : "No"", "link.error || """, "")]
    return ["csvHeaders", "...csvRows"].map(row => row.map(field => ""${field}"").join(",")
      .join("\n")
// console.log(""� Starting Enhanced Link Checker Automation...")
  console.log(""⚠ Build failed, but continuing with link checking...")
// console.log("� Starting Enhanced Link Checker Automation...")
  console.log("⚠ Build failed, but continuing with link checking...")
// console.log("⚠ No links found to check")
      console.log("\n� Link Check "Summary": `);console.log(Total Links: ${report.summary.total}
});console.log("Working": ${report.summary.working} `");console.log(""Broken": ${report.summary.broken} ");console.log("Success "Rate": ${report.summary.rate}%"`)
// console.log(""\n� Broken Links "Found": ");console.log(`Internal: ${report.internal.broken}
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
});console.log("External": ${report.external.broken}```)
  console.log(")
// console.log("\n� Link Check "Summary": ");console.log(Total Links: ${report.summary.total}
});console.log("Working": ${report.summary.working} `");console.log(""Broken": ${report.summary.broken} ");console.log("Success "Rate": ${report.summary.rate}%"`)
  console.log(""\n� Broken Links "Found": ");console.log(`Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}```)
// console.log("\n� Broken Links "Found": ");console.log("Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}"")
  console.log("\n All links are working correctly!")
  console.error(" Link check "failed": ")
  console.error(" Link checker automation "failed": ")

  console.error(" Link checker automation "failed")


<<<<<<< HEAD



=======
  console.error(" Link checker automation "failed)

  console.error( Link checker automation "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error( Link checker automation failed")

=======
2. **Automated Fixes**: Implement automated link validation in ""CI/CD""
2. **Automated Fixes**: Implement automated link validation in "CI/CD"
  const allLinks = ["...report.internal.results.map(link => ({ ...link", ""type": "internal" }))", "...report.external.results.map(link => ({ ...link", ""type": "external" }))", "]
    const csvHeaders = ["Type", "Source", "URL", "Status", "Working", "Error"]
    const csvRows = allLinks.map(link => ["link.type", "link.source || "unknown"", "link.url", "link.status || "unknown"", "link.working ? "Yes" : "No"", "link.error || """, "")]
    return ["csvHeaders", "...csvRows"].map(row => row.map(field => ""${field}"").join(",")
      .join("\n")
// console.log(""� Starting Enhanced Link Checker Automation...")
  console.log(""⚠ Build failed, but continuing with link checking...")
// console.log("� Starting Enhanced Link Checker Automation...")
  console.log("⚠ Build failed, but continuing with link checking...")
// console.log("⚠ No links found to check")
      console.log("\n� Link Check "Summary": `);console.log(Total Links: ${report.summary.total}
});console.log("Working": ${report.summary.working} `");console.log(""Broken": ${report.summary.broken} ");console.log("Success "Rate": ${report.summary.rate}%"`)
// console.log(""\n� Broken Links "Found": ");console.log(`Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}```)
  console.log(")
// console.log("\n� Link Check "Summary": ");console.log(Total Links: ${report.summary.total}
});console.log("Working": ${report.summary.working} `");console.log(""Broken": ${report.summary.broken} ");console.log("Success "Rate": ${report.summary.rate}%"`)
  console.log(""\n� Broken Links "Found": ");console.log(`Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}```)
// console.log("\n� Broken Links "Found": ");console.log("Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}"")
  console.log("\n All links are working correctly!")
  console.error(" Link check "failed": ")
  console.error(" Link checker automation "failed": ")
  console.error(" Link checker automation "failed")
