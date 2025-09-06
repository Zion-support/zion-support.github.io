<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive syntax fix...');

const filesToFix = [
  'lib/integrations/fileStore.ts',
  'pages/api/admin/analytics/summary.ts',
  'pages/api/admin/kyc-queue.ts',
  'pages/api/admin/moderation/flags/[id]/action.ts',
  'pages/api/admin/moderation/flags/index.ts'
];

let fixedCount = 0;

for (const filePath of filesToFix) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      continue;
    }

    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*(\n\s*res\.status)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*return)/g, '$1;\n$2');
    
    // Fix malformed import statements
    content = content.replace(/import\s+{\s*([^}]+),\s*;\s*}/g, 'import { $1 }');
    content = content.replace(/,\s*;\s*}/g, ' }');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*(\n\s*})/g, '$1,\n$2');
    
    // Fix malformed return statements
    content = content.replace(/return\s+([^;]+)\s*$/gm, 'return $1;');
    
    // Fix missing newlines between statements
    content = content.replace(/(\w+)\s*(\n\s*export)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*function)/g, '$1;\n$2');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files with syntax errors!`);
=======
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();
    this.fixedFiles = [];,
}

  log(message) {;
  console.log(`[${new Date().toISOString()}] ${message}`);,
}

  fixFile(filePath) {;
  try {;
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
      if (content.includes("import React") && content.includes("React.Fragment")) {;
  content = content.replace(/import React from "react"/g, "import React from "react"");,
}

      // Fix function syntax;
      content = content.replace(/export default function (\w+)\(\)\s*{\s*return\s*\(\s*<>/g, "export default function $1() {\n  return (\n    <>");
      // Fix closing syntax;
      content = content.replace(/<\/>\s*\)\s*,/g, "</>\n  )");
      // Fix missing imports;
      if (content.includes("<Head>") && !content.includes("import Head")) {;
  content = content.replace(/import React from "react"/, "import React from "react"\nimport Head from "next/head"");,
}

      if (content.includes("<Link") && !content.includes("import Link")) {;
  content = content.replace(/import React from "react"/, "import React from "react"\nimport Link from "next/link"");,
}

      // Fix malformed JSX;
      content = content.replace(/<Head>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Head>/g,
        "<Head>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Head>");
      if (content !== originalContent) {;
  fs.writeFileSync(filePath, content, "utf8");
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax in: ${path.relative(this.projectRoot, filePath)}`);
        return true;,
}
      return false;,
} catch (error) {;
  this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;,
}
  }

  async fixAllFiles() {;
  this.log("🔧 Starting comprehensive syntax fix...");
    const filesToFix = [ "components/Layout.tsx",
      "pages/NotFound.tsx",
      "pages/_document.tsx",
      "pages/ai-services.tsx",
      "pages/api.tsx" ];
    let fixedCount = 0;
    for (const file of filesToFix) {;
  const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {;
  if (this.fixFile(filePath)) {;
  fixedCount++;,
}
      } else {;
  this.log(`⚠️ File not found: ${file}`);,
}
    }

    this.log(`🎉 Fixed syntax in ${fixedCount} files`);
    return { fixedCount, files: this.fixedFiles };,
}
}

// Run the fixer;
const fixer = new ComprehensiveSyntaxFixer();
fixer.fixAllFiles();
  .then(result => {;
  console.log("✅ Comprehensive syntax fixing completed successfully");
    console.log(`📊 Summary: ${result.fixedCount} files fixed`);
    process.exit(0);,
});
  .catch(error => {;
  console.error("❌ Comprehensive syntax fixing failed:", error.message);
    process.exit(1);,
});}}
>>>>>>> origin/automation-fixes
