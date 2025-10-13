const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Function to fix common syntax errors in TSX files
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix missing const features = [ declaration
    if (
      content.includes("export default function") &&
      content.includes("{") &&
      !content.includes("const features = [")
    ) {
      content = content.replace(
        /(export default function \w+\(\) \{\s*)\{/,
        "$1const features = [\n    {",
      );
      modified = true;
    }

    // Fix missing closing bracket and semicolon
    if (
      content.includes("  )\n}\n\nexport default") &&
      !content.includes("  );\n};\n\nexport default")
    ) {
      content = content.replace(
        /  \)\n\}\n\nexport default (\w+)/,
        "  );\n};\n\nexport default $1;",
      );
      modified = true;
    }

    // Fix missing semicolon in export
    if (
      content.includes("export default") &&
      !content.includes("export default")?.includes(";")
    ) {
      content = content.replace(/(export default \w+)(?!;)/, "$1;");
      modified = true;
    }

    // Remove unused CheckCircle imports
    if (
      content.includes("import {CheckCircle} from 'lucide-react'") &&
      !content.includes("<CheckCircle")
    ) {
      content = content.replace(
        /import \{CheckCircle\} from 'lucide-react'\n?/g,
        "",
      );
      modified = true;
    }

    // Remove unused Helmet imports
    if (
      content.includes("import {Helmet} from 'react-helmet-async'") &&
      !content.includes("<Helmet")
    ) {
      content = content.replace(
        /import \{Helmet\} from 'react-helmet-async'\n?/g,
        "",
      );
      modified = true;
    }

    // Remove other unused imports
    const unusedImports = ["BarChart", "Zap", "ArrowRight"];
    unusedImports.forEach((importName) => {
      if (
        content.includes(`{${importName}}`) &&
        !content.includes(`<${importName}`) &&
        !content.includes(`${importName} className`)
      ) {
        content = content.replace(new RegExp(`,\\s*${importName}`, "g"), "");
        content = content.replace(new RegExp(`${importName},\\s*`, "g"), "");
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX files in app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith(".tsx") && item === "page.tsx") {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
console.log("Starting comprehensive error fix...");

const appDir = path.join(__dirname, "app");
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixTsxFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run linter to check remaining issues
console.log("\nRunning linter to check remaining issues...");
try {
  execSync("npm run lint", { stdio: "inherit" });
  console.log("All linting issues resolved!");
} catch (error) {
  console.log("Some linting issues remain, but many have been fixed.");
}
