const fs = require("fs");
const path = require("path");

class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.fixedFiles = [];}

  log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);}

  fixFile(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
      let originalContent = content;

      // Fix specific syntax issues found in the build errors;

      // Fix JSX fragment syntax;
      content = content.replace(/<>/g, "<React.Fragment>");
      content = content.replace(/<\/>/g, "</React.Fragment>");

      // Fix JSX component syntax issues;
      content = content.replace(/<Layout,/g, "<Layout");
      content = content.replace(/<Link,/g, "<Link");

      // Fix import issues;
      content = content.replace(/import\s+{\s*Html,\s*Head,\s*Main,\s*NextScript\s*}\s*from\s*"next\/document"/g, ;
        "import { Html, Head, Main, NextScript  } from "next/document";");

      // Fix React import if missing;
      if (content.includes("React.Fragment") && !content.includes("import React")) {
  content = "import React from "react"\n" + content;}
      // Fix Head import if missing;
      if (content.includes("<Head>") && !content.includes("import Head")) {
  content = content.replace(/import React from "react"/, "import React from "react"\nimport Head from "next/head"");}
      // Fix Link import if missing;
      if (content.includes("<Link") && !content.includes("import Link")) {
  content = content.replace(/import React from "react"/, "import React from "react"\nimport Link from "next/link"");}
      // Fix syntax errors in API file;
      if (filePath.includes("api.tsx")) {
  content = content.replace(/response:\s*"Array of services",/g, "response: "Array of services"");}
      // Fix missing closing tags and syntax;
      content = content.replace(/<Navigation\s*\/>/g, "<Navigation />");
      content = content.replace(/<Footer\s*\/>/g, "<Footer />");

      if (content !== originalContent) {
  fs.writeFileSync(filePath, content, "utf8");
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax in: ${path.relative(this.projectRoot, filePath)}`);
        return true;}
      return false;} catch (error) {
  this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;}
  }

  async fixMainAppFiles() {
  this.log("🔧 Starting main app syntax fix...");

    const mainFiles = [;
  "pages/NotFound.tsx",;
      "pages/_document.tsx", ;
      "pages/about.tsx",;
      "pages/ai-services.tsx",;
      "pages/api.tsx";
    ];

    let fixedCount = 0;
    for (const file of mainFiles) {
  const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
  if (this.fixFile(filePath)) {
  fixedCount++;}
      } else {
  this.log(`⚠️ File not found: ${file}`);}
    }
    this.log(`🎉 Fixed syntax in ${fixedCount} main app files`);
    return { fixedCount, files: this.fixedFiles };}
}

// Run the fixer;
const fixer = new MainAppSyntaxFixer();
fixer.fixMainAppFiles();
  .then(result => {
  console.log("✅ Main app syntax fixing completed successfully");
    console.log(`📊 Summary: ${result.fixedCount} files fixed`);
    process.exit(0);});
  .catch(error => {
  console.error("❌ Main app syntax fixing failed:", error.message);
    process.exit(1);});