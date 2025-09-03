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