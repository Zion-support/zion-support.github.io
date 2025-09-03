#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class JSXSyntaxFixer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;,
}
;
  log(message) {;
    console.log(`[${new Date().toISOString()}] ${message}`);,
}
;
  fixJSXSyntax(content) {;
    let fixed = content;
    // Fix missing colons in JSX attributes;
    fixed = fixed.replace(/className=/g, "className=");
    fixed = fixed.replace(/href=/g, "href=");
    fixed = fixed.replace(/src=/g, "src=");
    fixed = fixed.replace(/alt=/g, "alt=");
    fixed = fixed.replace(/title=/g, "title=");
    fixed = fixed.replace(/name=/g, "name=");
    fixed = fixed.replace(/content=/g, "content=");
    fixed = fixed.replace(/value=/g, "value=");
    fixed = fixed.replace(/key=/g, "key=");
    fixed = fixed.replace(/method=/g, "method=");
    fixed = fixed.replace(/endpoint=/g, "endpoint=");
    fixed = fixed.replace(/description=/g, "description=");
    fixed = fixed.replace(/parameters=/g, "parameters=");
    fixed = fixed.replace(/response=/g, "response=");
    fixed = fixed.replace(/icon=/g, "icon=");
    fixed = fixed.replace(/features=/g, "features=");
    // Fix missing quotes around attribute values;
    fixed = fixed.replace(/className=([^""\s>]+)(?=\s|>)/g, "className="$1"");
    fixed = fixed.replace(/href=([^""\s>]+)(?=\s|>)/g, "href="$1"");
    fixed = fixed.replace(/src=([^""\s>]+)(?=\s|>)/g, "src="$1"");
    fixed = fixed.replace(/alt=([^""\s>]+)(?=\s|>)/g, "alt="$1"");
    fixed = fixed.replace(/title=([^""\s>]+)(?=\s|>)/g, "title="$1"");
    fixed = fixed.replace(/name=([^""\s>]+)(?=\s|>)/g, "name="$1"");
    fixed = fixed.replace(/content=([^""\s>]+)(?=\s|>)/g, "content="$1"");
    fixed = fixed.replace(/value=([^""\s>]+)(?=\s|>)/g, "value="$1"");
    fixed = fixed.replace(/key=([^""\s>]+)(?=\s|>)/g, "key="$1"");
    fixed = fixed.replace(/method=([^""\s>]+)(?=\s|>)/g, "method="$1"");
    fixed = fixed.replace(/endpoint=([^""\s>]+)(?=\s|>)/g, "endpoint="$1"");
    fixed = fixed.replace(/description=([^""\s>]+)(?=\s|>)/g, "description="$1"");
    fixed = fixed.replace(/parameters=([^""\s>]+)(?=\s|>)/g, "parameters="$1"");
    fixed = fixed.replace(/response=([^""\s>]+)(?=\s|>)/g, "response="$1"");
    fixed = fixed.replace(/icon=([^""\s>]+)(?=\s|>)/g, "icon="$1"");
    fixed = fixed.replace(/features=([^""\s>]+)(?=\s|>)/g, "features="$1"");
    // Fix malformed JSX closing tags;
    fixed = fixed.replace(/<([^>]+)>\s*<\/\1>/g, "<$1></$1>");
    // Fix missing spaces in JSX;
    fixed = fixed.replace(/></g, "> </");
    fixed = fixed.replace(/></g, "> <");
    return fixed;,
}
;
  async fixFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath, "utf8");
      const fixedContent = this.fixJSXSyntax(content);
      if (fixedContent !== content) {;
        fs.writeFileSync(filePath, fixedContent);
        this.log(`✅ Fixed JSX syntax in: ${filePath}`);
        return true;,
}
      return false;,
} catch (error) {;
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;,
}
  }
;
  async fixAllJSXFiles() {;
    this.log("🚀 Starting JSX syntax fixing...");
    const jsxFiles = [];
    const walkDir = (dir) => {;
      const files = fs.readdirSync(dir);
      for (const file of files) {;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") {;
          walkDir(filePath);,
} else if (stat.isFile() && (file.endsWith(".tsx") || file.endsWith(".jsx"))) {;
          jsxFiles.push(filePath);,
}
      }
    }
    walkDir(this.projectRoot);
    for (const file of jsxFiles) {;
      if (await this.fixFile(file)) {;
        this.fixedFiles++;,
}
    }
    ;
    this.log(`🎉 Fixed JSX syntax in ${this.fixedFiles} files`);,
}
}
;
if (require.main === module) {;
  const fixer = new JSXSyntaxFixer();
  fixer.fixAllJSXFiles();
    .then(() => {;
      console.log("✅ JSX syntax fixing completed");
      process.exit(0);,
});
    .catch((error) => {;
      console.error("❌ JSX syntax fixing failed:", error.message);
      process.exit(1);,
});,
}
;
module.exports = JSXSyntaxFixer