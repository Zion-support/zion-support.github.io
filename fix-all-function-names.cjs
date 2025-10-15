const fs = require("fs");
const path = require("path");

// Find all page files and fix function names
function fixAllFunctionNames(dir) {
  const fixedFiles = [];

  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith(".tsx") && file === "page.tsx") {
        try {
          const content = fs.readFileSync(filePath, "utf8");

          // Extract the directory name to create a proper function name
          const relativePath = path.relative("/workspace/app", filePath);
          const pageName = path.basename(path.dirname(relativePath));

          // Create a valid function name by replacing hyphens and numbers
          let functionName =
            pageName
              .replace(/^5g/, "FiveG")
              .replace(/^6g/, "SixG")
              .replace(/^7g/, "SevenG")
              .replace(/^8g/, "EightG")
              .replace(/^9g/, "NineG")
              .replace(/^ai-/, "Ai")
              .replace(/^ad-/, "Ad")
              .replace(/^advanced-/, "Advanced")
              .replace(/^case-/, "Case")
              .replace(/^cloud-/, "Cloud")
              .replace(/^cyber-/, "Cyber")
              .replace(/^data-/, "Data")
              .replace(/^digital-/, "Digital")
              .replace(/^email-/, "Email")
              .replace(/^enterprise-/, "Enterprise")
              .replace(/^financial-/, "Financial")
              .replace(/^healthcare-/, "Healthcare")
              .replace(/^it-/, "It")
              .replace(/^machine-/, "Machine")
              .replace(/^mobile-/, "Mobile")
              .replace(/^network-/, "Network")
              .replace(/^performance-/, "Performance")
              .replace(/^privacy-/, "Privacy")
              .replace(/^process-/, "Process")
              .replace(/^project-/, "Project")
              .replace(/^quality-/, "Quality")
              .replace(/^security-/, "Security")
              .replace(/^smart-/, "Smart")
              .replace(/^social-/, "Social")
              .replace(/^supply-/, "Supply")
              .replace(/^web-/, "Web")
              .replace(/-/g, "")
              .replace(/([a-z])([A-Z])/g, "$1$2")
              .replace(/^([a-z])/, (match) => match.toUpperCase()) + "Page";

          // Handle special cases
          if (functionName === "Page") {
            functionName = "HomePage";
          }

          // Replace the function name in the content
          const updatedContent = content.replace(
            /export default function [^(]+\(\)/,
            `export default function ${functionName}()`,
          );

          if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent);
            fixedFiles.push(filePath);
            console.log("Fixed: " + filePath + " -> " + functionName);
          }
        } catch (e) {
          console.log("Error processing: " + filePath + ": " + e.message);
        }
      }
    });
  }

  scanDirectory(dir);
  return fixedFiles;
}

// Fix all function names
const fixedFiles = fixAllFunctionNames("/workspace/app");

console.log("Fixed " + fixedFiles.length + " function names");
