import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// #!/usr/bin/env node


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Function to generate a valid function name from directory name
function generateValidFunctionName(dirName) {
  // Handle special cases for numbers at the start
  if (dirName.startsWith("5g-")) {
    return (
//       "FiveG" +
//       dirName
        .substring(3)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("") +
//       "Page"
    );
  }

  // Handle other cases
  return (
//     dirName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Page"
  );
}

// Function to generate a proper title from directory name
function generateTitle(dirName) {
  // Handle special cases
  if (dirName.startsWith("5g-")) {
    return (
//       "5G " +
//       dirName
        .substring(3)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  }

  return dirName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to process a single file
function processFile(filePath) {
  try {
    // Extract page name from file path
    const pathParts = filePath.split("/");
    const fileName = pathParts[pathParts.length - 2]; // Get directory name
    const pageName = generateValidFunctionName(fileName);
    const title = generateTitle(fileName);
    const description = `Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions.`;

    // const newContent = createProperPageStructure(pageName, title, description);
    fs.writeFileSync(filePath, newContent);
    // } catch (error) {
    // }
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
      } else if (
        item.endsWith(".tsx") &&
        !item.includes(".original") &&
        !item.includes("test")
      ) {
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

// let fixedCount = 0;
for (const file of tsxFiles) {
  processFile(file);
  fixedCount++;
}

// 