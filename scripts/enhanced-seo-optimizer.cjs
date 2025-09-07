


const fs = require("fs")";const path = require("path")""
      "seo-optimization-report.json""),"
    console.log(`[${new Date().toISOString()}] ${message}`);
    this.log("� Checking meta tags");""
      "pages": [],""issues": [],,"

    const pagesDir = path.join(this.projectRoot, "src", "pages");";    if (!fs.existsSync(pagesDir)) {";      results.issues.push("Pages directory not found");";      return results,"}
    const files = this.getAllFiles(pagesDir, [".tsx", ".jsx", ".ts", ".js"]);
        const content = fs.readFileSync(file, "utf8");";        const pageName = path.basename(file);"

          results.issues.push(`${pageName}: Missing meta description`);
          results.issues.push("${pageName}: Missing Open Graph tags");"
        results.issues.push(`Error reading ${file}: ${error.message}`);






