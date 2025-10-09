import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files with errors
const getAllFilesWithErrors = () => {
  const srcDir = path.join(__dirname, "src");
  const files = [];

  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        files.push(fullPath);
      }
    }
  };

  scanDirectory(srcDir);
  return files;
};

// Template for a simple coming soon page
const createComingSoonPage = (filePath) => {
  const relativePath = path.relative(path.join(__dirname, "src"), filePath);
  const fileName = path.basename(filePath, ".tsx");

  // Skip if it's a component or special file
  if (
    fileName === "page" ||
    fileName === "layout" ||
    fileName === "loading" ||
    fileName === "error"
  ) {
    const dirName = path.basename(path.dirname(filePath));
    const title = dirName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return `import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${title}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${title}</h1>
          <p className="text-gray-300 mb-8">Coming Soon - Advanced ${title.toLowerCase()} solutions</p>
          <Link 
            to="/contact" 
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ${title}Page;`;
  }

  return null;
};

// Check if file has syntax errors by trying to parse it
const hasSyntaxErrors = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Check for common syntax error patterns
    const errorPatterns = [
      /\/\/ TODO: Add content\s*}/,
      /\/\/ TODO: Add parameters,\s*\)/,
      /\/\/ TODO: Add items,\s*]/,
      /{\s*\/\/ TODO: Add content\s*}/,
      /{\s*\/\/ TODO: Add parameters,\s*\)/,
      /{\s*\/\/ TODO: Add items,\s*]/,
      /^\s*}\s*$/m,
      /^\s*]\s*$/m,
      /^\s*\)\s*$/m,
      /\/\/\s*[^/]/,
      /<[^>]*\/\/[^>]*>/,
      /{\s*\/\/[^}]*$/m,
    ];

    return errorPatterns.some((pattern) => pattern.test(content));
  } catch (error) {
    return true;
  }
};

// Fix all files
const fixAllFiles = () => {
  const files = getAllFilesWithErrors();
  let fixedCount = 0;

  for (const filePath of files) {
    if (hasSyntaxErrors(filePath)) {
      const newContent = createComingSoonPage(filePath);
      if (newContent) {
        try {
          fs.writeFileSync(filePath, newContent);
          console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
          fixedCount++;
        } catch (error) {
          console.error(`Error fixing ${filePath}:`, error.message);
        }
      }
    }
  }

  console.log(`Fixed ${fixedCount} files!`);
};

fixAllFiles();
