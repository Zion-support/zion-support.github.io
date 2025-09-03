const fs = require("fs");
const path = require("path");

// List of files that may need rewriting
const filesToRewrite = [
  "src/pages/SolutionsPage.tsx",
  "src/pages/AboutPage.tsx",
  "src/pages/ContactPage.tsx",
  "src/pages/BlogPage.tsx",
  "src/pages/NotFoundPage.tsx",
  "src/pages/ComprehensiveServicesPage.tsx",
  "src/pages/PricingPage.tsx",
  "src/pages/Helpdesk.tsx",
  "src/pages/Support.jsx",
  "src/pages/Training.jsx",
  "src/pages/Sitemap.jsx",
  "src/pages/HomePage.tsx",
  "src/pages/ServicesPage.tsx",
  "src/pages/ComprehensiveSitemap.tsx",
];

function createBasicPage(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  let content = "";
  if (filePath.endsWith(".tsx")) {
    content = `import React from "react";
export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">${componentName}</h1>
        </div>
      </div>
    </div>
  );
}
`;
  } else {
    content = `import React from "react";
export default function ${componentName}() {
  return (
    <div>${componentName}</div>
  );
}
`;
  }
  return content;
}

function rewriteIfNeeded(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      const dir = path.dirname(filePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, createBasicPage(filePath));
      return true;
    }
    const content = fs.readFileSync(filePath, "utf8");
    if (content.trim().length === 0) {
      fs.writeFileSync(filePath, createBasicPage(filePath));
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error rewriting ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  let changed = 0;
  for (const file of filesToRewrite) {
    if (rewriteIfNeeded(path.join(process.cwd(), file))) {
      changed += 1;
    }
  }
  console.log(`Aggressive fix completed. Rewrote ${changed} files if needed.`);
}

if (require.main === module) {
  main();
}

