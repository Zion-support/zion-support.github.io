const fs = require("fs");
const path = require("path");

// Function to clean up corrupted TSX/JSX files
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Fix common corruption patterns
    content = content
      // Remove extra semicolons after imports
      .replace(/';';/g, ";")
      .replace(/';';';/g, ";")
      // Fix malformed JSX attributes
      .replace(/";";/g, '"')
      .replace(/";';/g, '"')
      .replace(/';";/g, ";")
      // Fix malformed className attributes
      .replace(/c,lassName/g, "className")
      .replace(/bg-gray-90o0/g, "bg-gray-900")
      .replace(/text-gray-30o0/g, "text-gray-300")
      // Remove stray closing tags and malformed JSX
      .replace(/<\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div>/g, "")
      .replace(/<\/div><\/div><\/div><\/div><\/div><\/div><\/div>/g, "")
      .replace(/<\/div><\/div><\/div><\/div><\/div><\/div>/g, "")
      .replace(/<\/div><\/div><\/div><\/div><\/div>/g, "")
      .replace(/<\/div><\/div><\/div><\/div>/g, "")
      .replace(/<\/div><\/div><\/div>/g, "")
      .replace(/<\/div><\/div>/g, "")
      // Fix malformed function declarations
      .replace(
        /export default function ComponentsPage\(\) \{\}/g,
        "export default function Page() {",
      )
      // Remove duplicate return statements
      .replace(
        /return \(\s*<div>Page content<\/div>\s*\);\s*\}\s*return \(/g,
        "return (",
      )
      // Fix malformed JSX structure
      .replace(
        /<div className="min-h-screen bg-gray-90o0 text-white py-20">";"<\/div>/g,
        "",
      )
      .replace(/<div className="container mx-auto px-4">";"<\/div>/g, "")
      .replace(
        /<h1 className="text-4xl font-bold mb-8">Components<\/h1>";"/g,
        "",
      )
      .replace(/<p className="text-gray-30o0 text-lg">";"/g, "")
      .replace(/This page is under development\.<\/p>/g, "")
      .replace(/<\/p><\/div><\/div>/g, "")
      .replace(/\);\}/g, ");")
      .replace(/\}\s*\);\}/g, "});")
      // Clean up extra closing braces and parentheses
      .replace(/\}\s*\);\}\s*\}/g, "});")
      .replace(/\}\s*\);\}/g, "});")
      // Remove malformed interface declarations
      .replace(
        /interface ResponsiveContainerProps \{\}\s*children:\s*c,lassName\?\: string;\s*\}/g,
        "interface ResponsiveContainerProps {\n  children: React.ReactNode;\n  className?: string;\n}",
      )
      // Fix malformed function parameters
      .replace(
        /const ResponsiveContainer: React\.FC<ResponsiveContainerProps> = \(\{\}\s*children,\s*className = \}\) => \{\}/g,
        "const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({\n  children, \n  className = ''\n}) => {",
      )
      // Remove stray closing tags at the end
      .replace(/<\/ResponsiveContainerProps>\s*$/g, "")
      // Clean up multiple consecutive newlines
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      // Remove empty lines at the end
      .replace(/\n\s*$/g, "\n");

    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all corrupted files
function fixAllCorruptedFiles() {
  const appDir = path.join(__dirname, "app");
  let fixedCount = 0;
  let errorCount = 0;

  function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (
        file.endsWith(".tsx") ||
        file.endsWith(".ts") ||
        file.endsWith(".jsx") ||
        file.endsWith(".js")
      ) {
        if (cleanFile(filePath)) {
          fixedCount++;
        } else {
          errorCount++;
        }
      }
    }
  }

  walkDir(appDir);

  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors in ${errorCount} files`);
}

// Run the fix
fixAllCorruptedFiles();
