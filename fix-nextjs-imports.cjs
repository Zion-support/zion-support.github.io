const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Function to fix Next.js imports in a file
function fixNextJsImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix Next.js imports
    const replacements = [
      // Fix next/link imports
      {
        from: /import\s+Link\s+from\s+['"]next\/link['"];?/g,
        to: "import { Link } from 'react-router-dom';",
      },
      // Fix next/image imports
      {
        from: /import\s+Image\s+from\s+['"]next\/image['"];?/g,
        to: "// import Image from 'next/image'; // Replaced with regular img tag",
      },
      // Fix next/dynamic imports
      {
        from: /import\s+dynamic\s+from\s+['"]next\/dynamic['"];?/g,
        to: "// import dynamic from 'next/dynamic'; // Replaced with React.lazy",
      },
      // Fix next/navigation imports
      {
        from: /import\s+{\s*usePathname\s*}\s+from\s+['"]next\/navigation['"];?/g,
        to: "import { useLocation } from 'react-router-dom';",
      },
      {
        from: /import\s+{\s*useRouter\s*}\s+from\s+['"]next\/navigation['"];?/g,
        to: "import { useNavigate } from 'react-router-dom';",
      },
      // Fix next imports
      {
        from: /import\s+{\s*Metadata\s*}\s+from\s+['"]next['"];?/g,
        to: "// import { Metadata } from 'next'; // Removed for Vite",
      },
      {
        from: /import\s+type\s+{\s*Metadata\s*}\s+from\s+['"]next['"];?/g,
        to: "// import type { Metadata } from 'next'; // Removed for Vite",
      },
      // Fix href to to in Link components
      {
        from: /href={['"]([^'"]+)['"]}/g,
        to: "to={'$1'}",
      },
      // Fix usePathname to useLocation
      {
        from: /const\s+pathname\s+=\s+usePathname\(\);?/g,
        to: "const location = useLocation();\n  const pathname = location.pathname;",
      },
      // Fix useRouter to useNavigate
      {
        from: /const\s+router\s+=\s+useRouter\(\);?/g,
        to: "const navigate = useNavigate();",
      },
      // Fix router.push to navigate
      {
        from: /router\.push\(/g,
        to: "navigate(",
      },
      // Fix Image component to img tag
      {
        from: /<Image\s+([^>]*)\/>/g,
        to: "<img $1 />",
      },
      // Fix dynamic imports
      {
        from: /const\s+(\w+)\s+=\s+dynamic\(\(\)\s+=>\s+import\(['"]([^'"]+)['"]\),\s*\{\s*loading:\s*\(\)\s+=>\s+<(\w+)Skeleton\s*\/>,\s*\}\);?/g,
        to: "const $1 = lazy(() => import('$2'));",
      },
      // Remove 'use client' directive
      {
        from: /['"]use client['"];?\s*/g,
        to: "",
      },
    ];

    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files in the app directory
const patterns = ["app/**/*.tsx", "app/**/*.ts", "app/**/*.jsx", "app/**/*.js"];

let totalFixed = 0;

patterns.forEach((pattern) => {
  const files = glob.sync(pattern, { cwd: process.cwd() });

  files.forEach((file) => {
    // Skip certain directories
    if (
      file.includes("node_modules") ||
      file.includes(".next") ||
      file.includes("dist") ||
      file.includes("build")
    ) {
      return;
    }

    if (fixNextJsImports(file)) {
      totalFixed++;
    }
  });
});

console.log(`\nTotal files fixed: ${totalFixed}`);
