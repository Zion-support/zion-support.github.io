import fs from 'fs';
import path from 'path';

async function fixRemainingErrors() {
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
        fixedFiles++;
      }
    } catch (error) {
      }
  }

  }

// Fix remaining type issues in a file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix malformed import statements
  if (content.includes(';import')) {
    content = content.replace(/;import/g, ';\nimport');
    modified = true;
  }
  
  // Fix variable type annotations
  const typeFixes = [
    { pattern: /const benefits = \[\];/g, replacement: 'const benefits: string[] = [];' },
    { pattern: /const features = \[\];/g, replacement: 'const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];' },
    { pattern: /const stats = \[\];/g, replacement: 'const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];' },
    { pattern: /const capabilities = \[\];/g, replacement: 'const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];' },
    { pattern: /const testimonials = \[\];/g, replacement: 'const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];' },
    { pattern: /const applications = \[\];/g, replacement: 'const applications: string[] = [];' }
  ];
  
  for (const fix of typeFixes) {
    if (fix.pattern.test(content)) {
      content = content.replace(fix.pattern, fix.replacement);
      modified = true;
    }
  }
  
  // Fix ReactNode issues - replace object usage with property access
  content = content.replace(/\{feature\}/g, '{feature.title}');
  content = content.replace(/\{benefit\}/g, '{benefit}');
  content = content.replace(/\{capability\}/g, '{capability.title}');
  content = content.replace(/\{stat\}/g, '{stat.value}');
  
  // Fix duplicate property names in object literals
  content = content.replace(/(\w+):\s*[^,}]+,\s*\1:/g, '$1:');
  
  // Fix missing avatar property in testimonials
  if (content.includes('testimonials') && !content.includes('avatar:')) {
    content = content.replace(
      /{\s*name:\s*"[^"]*",\s*role:\s*"[^"]*",\s*company:\s*"[^"]*",\s*content:\s*"[^"]*",\s*rating:\s*\d+\s*}/g,
      (match) => {
        return match.replace('rating:', 'avatar: "/placeholder-avatar.jpg", rating:');
      }
    );
    modified = true;
  }
  
  // Fix missing React import
  if (content.includes('React.ReactNode') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
console.log('Starting remaining error fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  try {
    fixFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('Remaining error fixes completed!');