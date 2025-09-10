#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();,
}

  log(message) {;
  console.log(`[${new Date().toISOString()}] ${message}`);,
}

  fixPricingGuidePage() {;
  const filePath = path.join(this.projectRoot, "pages/pricing-guide.tsx");
    if (!fs.existsSync(filePath)) return false;
    let content = fs.readFileSync(filePath, "utf8");
    // Fix the specific JSX issue by rewriting the problematic section;
    content = content.replace(;
      /<h3 className="text-2xl font-bold text-white mb-2">\s*\{factor\.factor\}<\/h3>\s*<p className="text-gray-300">\s*\{factor\.description\}<\/p>/g,
      `<h3 className="text-2xl font-bold text-white mb-2">;
                        {factor.factor}
                      </h3>
                      <p className='text-gray-300'>
                        {factor.description}
                      </p>`
    );
    fs.writeFileSync(filePath, content, "utf8");
    this.log("✅ Fixed pricing-guide.tsx");
    return true;,
}

  fixSitemapPage() {;
  const filePath = path.join(this.projectRoot, "pages/sitemap.tsx");
    if (!fs.existsSync(filePath)) return false;
    let content = fs.readFileSync(filePath, "utf8");
    // Fix the JSX structure issue;
    content = content.replace(;
      /<\/motion\.div>\s*<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">\s*\{siteStructure\.map/g,
      `</motion.div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {siteStructure.map`;
    );
    fs.writeFileSync(filePath, content, "utf8");
    this.log("✅ Fixed sitemap.tsx");
    return true;,
}

  fixScriptSyntaxErrors() {;
  const scripts = [ "scripts/performance-monitor.js",
      "scripts/health-checker.js",
      "scripts/link-checker.js",
      "scripts/seo-optimizer.js",
    ];
    let fixedCount = 0;