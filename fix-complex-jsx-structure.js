import fs from "fs";
import { glob } from "glob";

async function fixComplexJSXStructure() {
  // Find all problematic files
  const files = await glob("app/**/*.{ts,tsx}", {
//     ignore: ["node_modules/**", "dist/**", ".next/**"],
  });

  let fixedFiles = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, "utf8");
      let originalContent = content;

      // Fix broken JSX structure patterns
      // Fix malformed JSX fragments and elements
      content = content.replace(
        /<>\s*<div([^>]*?)>\s*<Helmet([^>]*?)>\s*<title>([^<]*?)<\/title>\s*<meta([^>]*?)>\s*<\/Helmet>\s*<div([^>]*?)>\s*<h1([^>]*?)>([^<]*?)<\/h1>\s*<p([^>]*?)>([^<]*?)<\/p>\s*<\/div>\s*<\/div>\s*<>/g,
//         "<div$1><Helmet$2><title>$3</title><meta$4></Helmet><div$5><h1$6>$7</h1><p$8>$9</p></div></div>",
      );

      // Fix broken div structures
      content = content.replace(
        /<div([^>]*?)>\s*<div([^>]*?)>\s*<h1([^>]*?)>([^<]*?)<\/h1>\s*<p([^>]*?)>([^<]*?)<\/p>\s*<\/div>\s*<\/div>\s*$/gm,
//         "<div$1><div$2><h1$3>$4</h1><p$5>$6</p></div></div>",
      );

      // Fix malformed className attributes with missing spaces
      content = content.replace(
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g,
        (match, p1, p2, p3, p4) => {
          return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`;
        },
      );

      // Fix broken JSX expressions
      content = content.replace(
        /(\s*)(<[^>]+>\s*<[^>]+>\s*<[^>]+>)\s*$/gm,
//         "$1<div>$2</div>",
      );

      // Fix missing closing tags for common patterns
      content = content.replace(
        /<div([^>]*?)>\s*<h1([^>]*?)>([^<]*?)<\/h1>\s*<p([^>]*?)>([^<]*?)<\/p>\s*$/gm,
//         "<div$1><h1$2>$3</h1><p$4>$5</p></div>",
      );

      // Fix broken map functions
      content = content.replace(
        /\.map\(([^)]*?)\)\s*=>\s*{([^}]*?)}\s*}/g,
        (match, params, body) => {
          return `.map(${params}) => (${body})`;
        },
      );

      // Fix malformed JSX attributes
      content = content.replace(
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g,
        (match, p1, p2, p3, p4) => {
          return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`;
        },
      );

      // Fix missing semicolons
      content = content.replace(/import\s+([^;]+)\s*$/gm, "import $1;");

      // Fix broken JSX structure in return statements
      content = content.replace(
        /return\s*\(\s*<>\s*<div([^>]*?)>\s*<Helmet([^>]*?)>\s*<title>([^<]*?)<\/title>\s*<meta([^>]*?)>\s*<\/Helmet>\s*<div([^>]*?)>\s*<h1([^>]*?)>([^<]*?)<\/h1>\s*<p([^>]*?)>([^<]*?)<\/p>\s*<\/div>\s*<\/div>\s*<>/g,
        "return (<div$1><Helmet$2><title>$3</title><meta$4></Helmet><div$5><h1$6>$7</h1><p$8>$9</p></div></div>)",
      );

      // Clean up any remaining syntax issues
      content = content.replace(/\s+$/gm, "");
      content = content.replace(/\n{3,}/g, "\n\n");

      if (content !== originalContent) {
        fs.writeFileSync(file, content, "utf8");
        fixedFiles++;
      }
    } catch (error) {
      }
  }

  }

fixComplexJSXStructure().catch(console.error);
