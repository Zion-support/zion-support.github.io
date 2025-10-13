import fs from "fs";
import path from "path";
import { glob } from "glob";

async function fixRemainingErrors() {
  console.log("🔧 Fixing remaining TypeScript and JSX errors...");

  // Find all problematic files
  const files = await glob("app/**/*.{ts,tsx}", {
    ignore: ["node_modules/**", "dist/**", ".next/**"],
  });

  let fixedFiles = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, "utf8");
      let originalContent = content;

      // Fix common JSX structure issues
      // Fix malformed className attributes
      content = content.replace(
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g,
        (match, p1, p2, p3, p4) => {
          return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`;
        },
      );

      // Fix missing spaces in className
      content = content.replace(
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g,
        (match, p1, p2, p3, p4) => {
          return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`;
        },
      );

      // Fix self-closing tags that should be containers
      content = content.replace(
        /<(\w+)([^>]*?)\s*\/\s*>\s*<\/\1>/g,
        "<$1$2></$1>",
      );

      // Fix missing closing tags for common elements
      content = content.replace(/<div([^>]*?)>\s*$/gm, "<div$1></div>");
      content = content.replace(
        /<section([^>]*?)>\s*$/gm,
        "<section$1></section>",
      );
      content = content.replace(/<h1([^>]*?)>\s*$/gm, "<h1$1></h1>");
      content = content.replace(/<h2([^>]*?)>\s*$/gm, "<h2$1></h2>");
      content = content.replace(/<h3([^>]*?)>\s*$/gm, "<h3$1></h3>");
      content = content.replace(/<p([^>]*?)>\s*$/gm, "<p$1></p>");

      // Fix JSX expressions that need parent elements
      content = content.replace(
        /(\s*)(<[^>]+>\s*<[^>]+>\s*<[^>]+>)/gm,
        "$1<div>$2</div>",
      );

      // Fix missing semicolons in import statements
      content = content.replace(/import\s+([^;]+)\s*$/gm, "import $1;");

      // Fix malformed JSX attributes
      content = content.replace(
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g,
        (match, p1, p2, p3, p4) => {
          return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`;
        },
      );

      // Fix broken JSX structure in map functions
      content = content.replace(
        /\.map\(([^)]*?)\)\s*=>\s*{([^}]*?)}\s*}/g,
        (match, params, body) => {
          return `.map(${params}) => (${body})`;
        },
      );

      // Fix missing closing braces
      content = content.replace(
        /(\s*)(<[^>]+>\s*<[^>]+>\s*<[^>]+>)\s*$/gm,
        "$1$2</div>",
      );

      // Clean up any remaining syntax issues
      content = content.replace(/\s+$/gm, "");
      content = content.replace(/\n{3,}/g, "\n\n");

      if (content !== originalContent) {
        fs.writeFileSync(file, content, "utf8");
        console.log(`✅ Fixed: ${file}`);
        fixedFiles++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n🎉 Fixed remaining errors in ${fixedFiles} files`);
}

fixRemainingErrors().catch(console.error);
