const fs = require("fs");
const path = require("path");

// Find all .tsx files in the app directory
const appDir = "./app";
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Check if the file has the pattern with unused imports
    if (
      content.includes(
        "import { CheckCircle, ArrowRight, Star, Zap, Brain, Target, Clock, Users, Globe } from 'lucide-react'",
      )
    ) {
      content = content.replace(
        "import { CheckCircle, ArrowRight, Star, Zap, Brain, Target, Clock, Users, Globe } from 'lucide-react'",
        "import { CheckCircle, Brain, Target } from 'lucide-react'",
      );
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
files.forEach(fixUnusedImports);

console.log("Unused imports fixing completed!");
