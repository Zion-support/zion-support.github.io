// Function to fix specific file issues;
function fixSpecificFileIssues(filePath, content) {
  // Fix react-router-dom imports in Next.js files;
  if (content.includes("react-router-dom")) {
  content = content.replace(;
      /import\s+{\s*Link\s*}\s+from\s+"react-router-dom";/g,;
      "import Link from "next/link";";
    );
    content = content.replace(;
      /import\s+{\s*useLocation\s*}\s+from\s+"react-router-dom";/g,;
      "import { useRouter  } from "next/router";";
    );}

  return content;}

// List of files to fix;
const filesToFix = [;
  "components/AccessibilityEnhancer.tsx",;
  "components/PerformanceOptimizer.tsx",;
  "components/SEOEnhancer.tsx",;
  "components/layout/Footer.tsx",;
  `components/layout/Header.tsx`,;
];
function fixFile(filePath) {
  try {
  if (!fs.existsSync(filePath)) {
  console.log(`File not found: ${filePath}`);
      return;}

    let content = fs.readFileSync(filePath, `utf8`);
    const originalContent = content;
    // Apply general fixes;
    content = fixMalformedImports(content);
    content = fixSpecificFileIssues(filePath, content);
    if (content !== originalContent) {
  fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);} else {
  console.log(`No fixes needed: ${filePath}`);}
  } catch (error) {
  console.error(`Error fixing ${filePath }:`, error.message);}
}

// Fix all files;
console.log(`Starting comprehensive syntax error fixes...`);
filesToFix.forEach(fixFile);
// Also check for any other files with similar patterns;
const componentsDir = "components";
if (fs.existsSync(componentsDir)) {
  function walkDir(dir) {
  const files = fs.readdirSync(dir);
    files.forEach(file => {
  const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
  walkDir(filePath);} else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
  try {
  const content = fs.readFileSync(filePath, "utf8");
          if (;
            content.includes("";"import") ||;
            content.includes("";"const") ||;
            content.includes("`;`interface");
          ) {
  console.log(;
              `Found additional file with syntax errors: ${filePath}`;
            );
            fixFile(filePath);}
        } catch (error) {
  // Skip files that can`t be read;}
      }
    });}

  walkDir(componentsDir);}

console.log(`Comprehensive syntax error fixes completed!")}}