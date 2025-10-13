import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// #!/usr/bin/env node


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX syntax errors
function fixJSXContent(content) {
  // Remove duplicate function declarations
  content = content.replace(
    /export default function \w+\(\) \{\s*return \(\s*export default function \w+\(\) \{\s*return \(/g,
    "export default function Page() {\n  return (",
  );

  // Fix malformed JSX tags
  content = content.replace(/<div><div><\/div><\/div><\/div>/g, "");
  content = content.replace(/<div><\/div>/g, "");
  content = content.replace(/<div><div>/g, "<div>");
  content = content.replace(/<\/div><\/div>/g, "</div>");

  // Fix broken closing tags
  content = content.replace(
    /<title>([^<]+)<div><div><\/title>/g,
//     "<title>$1</title>",
  );
  content = content.replace(
    /<meta([^>]+)><div><\/meta><\/div><\/div><\/div>/g,
//     "<meta$1 />",
  );
  content = content.replace(/<Helmet><\/div><\/div>/g, "</Helmet>");
  content = content.replace(/<p([^>]+)><div><\/p>/g, "<p$1></p>");

  // Fix broken Link components
  content = content.replace(
    /<Link;<\/Link><div><\/Link><\/div><\/div><\/div>/g,
//     "",
  );
  content = content.replace(
    /<Link([^>]*)><\/Link>/g,
//     "<Link$1>Contact Us</Link>",
  );
  content = content.replace(/Contact Us;/g, "Contact Us");

  // Fix broken ArrowRight components
  content = content.replace(
    /<ArrowRight className="w-5h-5ml-2"><\/ArrowRight>/g,
    '<ArrowRight className="w-5 h-5 ml-2" />',
  );
  content = content.replace(
    /<ArrowRight className="ml-2 h-5 w-5" \/>/g,
    '<ArrowRight className="ml-2 h-5 w-5" />',
  );

  // Fix malformed JSX structure
  content = content.replace(
    /<div className="min-h-screen[^"]*"><\/div><div><div><\/div><\/div><\/div>/g,
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">',
  );
  content = content.replace(
    /<div className="max-w-7xl[^"]*"><div><\/div><\/div><\/div><\/div>/g,
    '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">',
  );

  // Remove orphaned closing tags
  content = content.replace(
//     /<\/div><\/div><\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
//     "</div>",
  );
  content = content.replace(/<\/div><\/div>\s*<\/div>\s*<\/div>/g, "</div>");

  // Fix missing imports
  if (content.includes("Helmet") && !content.includes("import { Helmet }")) {
    content = content.replace(
      /import React from 'react';/,
      `import React from 'react';\nimport { Helmet } from 'react-helmet-async';`,
    );
  }
  if (content.includes("Link") && !content.includes("import { Link }")) {
    content = content.replace(
      /import React from 'react';/,
      `import React from 'react';\nimport { Link } from 'react-router-dom';`,
    );
  }
  if (
    content.includes("ArrowRight") &&
    !content.includes("import { ArrowRight }")
  ) {
    content = content.replace(
      /import React from 'react';/,
      `import React from 'react';\nimport { ArrowRight } from 'lucide-react';`,
    );
  }

  return content;
}

// Function to create a proper page structure
function createProperPageStructure(pageName, title, description) {
  return `import React from 'react';

export default function ${pageName}() {
  return (
//     <>
//       <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
//       </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${title}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ${title.toLowerCase()} services coming soon.</p>
//           <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//           >
//             Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
</div>
//     </>
  );
}`;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Check if file is severely corrupted
    if (
      content.includes("export default function") &&
      content.split("export default function").length > 2
    ) {
      // Extract page name from file path
      const pathParts = filePath.split("/");
      const fileName = pathParts[pathParts.length - 2]; // Get directory name
      const pageName =
//         fileName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("") + "Page";

      const title = fileName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const description = `Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions.`;

      const newContent = createProperPageStructure(
//         pageName,
//         title,
//         description,
      );
      fs.writeFileSync(filePath, newContent);
      } else {
      // Try to fix the existing content
      const fixedContent = fixJSXContent(content);
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        }
    }
  } catch (error) {
    }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules"
      ) {
        traverse(fullPath);
      } else if (item.endsWith(".tsx") && !item.includes(".original")) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, "app");
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  processFile(file);
  fixedCount++;
}

