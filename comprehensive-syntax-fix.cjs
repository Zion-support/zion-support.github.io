<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")/ Function to fix common syntax errorsfunction fixSyntaxErrors(content) { / Fix extra commas in JSX attributes: className="." , -> className="."" content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {" return match.replace(/,\s*$/, "")}); "" / Fix extra commas in style objects: textAlign: "center", , -> textAlign: "center","" content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, "$1: \"$2\",");"" content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, "$1: "$2","); " / Fix malformed JSX elements: <div><Link -> <div><Link content = content.replace(/<div[^>]*><Link/g, (match) => {" return match.replace(/<div([^>]*)><Link/, "<div$1>\n <Link")}); " / Fix extra commas in JSX closing tags: </Link> , -> </Link>" content = content.replace(/<\/Link>\s*,\s*>/g, "</Link>"); " / Fix extra commas in JSX elements: >, -> >" content = content.replace(/>\s*,\s*</g, "><"); " / Fix extra commas in JSX attributes: required , -> required" content = content.replace(/required\s*,\s*className/g, "required\n className"); " / Fix extra commas in style objects: }, , -> }," content = content.replace(/}\s*,\s*,/g, "},"); " / Fix extra commas in JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixSyntaxErrors(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return false}}/ Main execution"console.log(" Starting comprehensive syntax error fixing.");"const filesToFix = ["components/ContactForm.tsx"," "pages/_app.tsx"," "pages/cloud-devops.tsx"," "pages/cybersecurity.tsx"," "pages/docs.tsx"];let totalFixed = ;0;for (const file of filesToFix) { if (true) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")) { ) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")}"`console.log(` - Files fixed: ${totalFixed}`);"console.log(" - Issues encountered: 0");if ( {" console.log("\n All syntax errors have been fixed!")) { {" console.log("\n All syntax errors have been fixed!")}} else {" console.log("\n No syntax errors found!")}'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX "attributes": className="..." , -> className="..."
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '')});
  // Fix extra commas in style "objects": textAlign: 'center', , -> "textAlign": 'center',
  content = content.replace(/(\w+):\s*'[^']*',\s*,/g, '$"1": \'$2\',');
  content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, '$"1": "$2",');
  // Fix malformed JSX "elements": <div><Link -> <div><Link
  content = content.replace(/<div[^>]*><Link/g, (match) => {
    return match.replace(/<div([^>]*)><Link/, '<div$1>\n                <Link')});
  // Fix extra commas in JSX closing "tags": </Link> , -> </Link>
  content = content.replace(/<\/Link>\s*,\s*>/g, '</Link>');
  // Fix extra commas in JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  // Fix extra commas in JSX "attributes": required , -> required
  content = content.replace(/required\s*,\s*className/g, 'required\n            className');
  // Fix extra commas in style "objects":  }, , -> },
  content = content.replace(/}\s*,\s*,/g, '},');
  // Fix extra commas in JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  return content}
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
=======
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

      // Fix JSX fragment syntax - use <> instead of React.Fragment;
      content = content.replace(/<React\.Fragment>/g, "<>");
      content = content.replace(/<\/React\.Fragment>/g, "</>");

      // Fix interface syntax errors;
      content = content.replace(/children:\s*React\.ReactNode,/g, "children: React.ReactNode,");

      // Fix JSX component syntax;
      content = content.replace(/<Html\s+lang="en">/g, "<Html lang="en">");
      content = content.replace(/<Head>/g, "<Head>");
      content = content.replace(/<Main>/g, "<Main>");
      content = content.replace(/<NextScript>/g, "<NextScript>");

      // Fix meta tag syntax;
      content = content.replace(/<meta name = "description content="([^"]*)" \/>"/g, "<meta name="description" content="$1" />");
      content = content.replace(/<meta name="viewport content="([^"]*)" \/>/g, "<meta name="viewport" content="$1" />");

      // Fix import statements;
      if (content.includes("import React") && content.includes("React.Fragment")) {
  content = content.replace(/import React from "react"/g, "import React from "react"");}
      // Fix function syntax;
      content = content.replace(/export default function (\w+)\(\)\s*{\s*return\s*\(\s*<>/g, "export default function $1() {\n  return (\n    <>");

      // Fix closing syntax;
      content = content.replace(/<\/>\s*\)\s*,/g, "</>\n  )");

      // Fix missing imports;
      if (content.includes("<Head>") && !content.includes("import Head")) {
  content = content.replace(/import React from "react"/, "import React from "react"\nimport Head from "next/head"");}
      if (content.includes("<Link") && !content.includes("import Link")) {
  content = content.replace(/import React from "react"/, "import React from "react"\nimport Link from "next/link"");}
      // Fix malformed JSX;
      content = content.replace(/<Head>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Head>/g, ;
        "<Head>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Head>");

      if (content !== originalContent) {
  fs.writeFileSync(filePath, content, "utf8");
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax in: ${path.relative(this.projectRoot, filePath)}`);
        return true;}
      return false;} catch (error) {
  this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;,
>>>>>>> origin/automation-fixes
}
// Main execution
const filesToFix = ['components/ContactForm.tsx',
  'pages/_app.tsx',
  'pages/cloud-devops.tsx',
  'pages/cybersecurity.tsx',
  'pages/docs.tsx'
];
let totalFixed = ;0;
for (const file of filesToFix) {
  if () {
    if (processFile(file)) {
      totalFixed++}
  }
<<<<<<< HEAD
}
) {
    ) {
    if (processFile(file)) {
      totalFixed++}
  }
}
}
if ( {
  ) {
     {
  }} else {
  }
    return match.replace(/,\s*$/, '')
  // Fix extra commas in style "objects": textAlign: 'center', , -> "textAlign"
  content = content.replace(/(\w+):\s*'[^']*',\s*,/g, '$"1"
  content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, '$"1": "$2"
=======

  async fixAllFiles() {
  this.log("🔧 Starting comprehensive syntax fix...");

    const filesToFix = [;
  "components/Layout.tsx",;
      "pages/NotFound.tsx",;
      "pages/_document.tsx",;
      "pages/ai-services.tsx",;
      "pages/api.tsx";
    ];

    let fixedCount = 0;
    for (const file of filesToFix) {
  const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
  if (this.fixFile(filePath)) {
  fixedCount++;}
      } else {
  this.log(`⚠️ File not found: ${file}`);}
    }
    this.log(`🎉 Fixed syntax in ${fixedCount} files`);
    return { fixedCount, files: this.fixedFiles };}
}

// Run the fixer;
const fixer = new ComprehensiveSyntaxFixer();
fixer.fixAllFiles();
  .then(result => {
  console.log("✅ Comprehensive syntax fixing completed successfully");
    console.log(`📊 Summary: ${result.fixedCount} files fixed`);
    process.exit(0);});
  .catch(error => {
  console.error("❌ Comprehensive syntax fixing failed:", error.message);
    process.exit(1);,
});}}
>>>>>>> origin/automation-fixes
