const fs = require("fs");
const path = require("path");

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix malformed function names like "5GDataAnalyticsZionTechGroup"
    const functionNameMatch = content.match(
      /export default function (\d+[A-Za-z]+)/,
    );
    if (functionNameMatch) {
      const malformedName = functionNameMatch[1];
      const properName = malformedName.replace(/^\d+/, "") + "Page";
      content = content.replace(new RegExp(malformedName, "g"), properName);
      modified = true;
    }

    // Fix malformed className attributes
    content = content.replace(
      /className="([^"]*?)\s+([^"]*?)"/g,
      (match, part1, part2) => {
        if (part1.includes("text-") && part2.includes("mb-")) {
          return `className="${part1} ${part2}"`;
        }
        return match;
      },
    );

    // Fix malformed text content
    content = content.replace(
      /text-4 xl font-boldtext-whitemb-6/g,
      "text-4xl font-bold text-white mb-6",
    );
    content = content.replace(
      /text-lgtext-gray-300mb-8/g,
      "text-lg text-gray-300 mb-8",
    );

    // Fix malformed JSX elements
    content = content.replace(
      /<title \/>([^<]+)<\/title>/g,
      "<title>$1</title>",
    );
    content = content.replace(
      /<span className="w-5 h-5ml-2" \/>([^<]+)/g,
      '<h1 className="text-4xl font-bold text-white mb-6">$1</h1>',
    );
    content = content.replace(
      /<p className="w-5 h-5ml-2">([^<]+)/g,
      '<p className="text-lg text-gray-300 mb-8">$1</p>',
    );

    // Fix malformed Link components
    content = content.replace(
      /<Link to="([^"]+)" className="([^"]*?)">([^<]+)<\/Link>/g,
      (match, to, className, text) => {
        if (className.includes("transformhover:scale-105")) {
          className = className.replace(
            "transformhover:scale-105",
            "transform hover:scale-105",
          );
        }
        if (className.includes("from-cyan-500to-purple-500")) {
          className = className.replace(
            "from-cyan-500to-purple-500",
            "from-cyan-500 to-purple-500",
          );
        }
        if (className.includes("shadow-lghover:shadow-cyan-500/25")) {
          className = className.replace(
            "shadow-lghover:shadow-cyan-500/25",
            "shadow-lg hover:shadow-cyan-500/25",
          );
        }
        return `<Link to="${to}" className="${className}">${text}</Link>`;
      },
    );

    // Fix missing closing tags and malformed JSX
    content = content.replace(
      /<h2 className="w-5 h-5ml-2" \/>([^<]+)/g,
      '<h2 className="text-3xl font-bold text-white mb-4">$1</h2>',
    );
    content = content.replace(
      /<p className="w-5 h-5ml-2">([^<]+)/g,
      '<p className="text-lg text-gray-300 mb-8">$1</p>',
    );

    // Fix duplicate 'use client' directives
    content = content.replace(
      /'use client';\s*'use client';/g,
      "'use client';",
    );

    // Fix malformed imports
    content = content.replace(
      /import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3, Brain, Clock, Target } from 'lucide-react';\s*'use client';/g,
      "'use client';\nimport { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3, Clock, Target } from 'lucide-react';",
    );

    // Fix malformed JSX structure
    content = content.replace(
      /<title>([^<]+)<\/title>\s*\{[^}]*\}/g,
      "<title>$1</title>",
    );

    // Fix incomplete function declarations
    if (
      content.includes("export default function") &&
      !content.includes("return (")
    ) {
      const functionMatch = content.match(
        /export default function ([^(]+)\(\)\s*\{/,
      );
      if (functionMatch) {
        const functionName = functionMatch[1].trim();
        const basicTemplate = `
  return (
    <>
      <Helmet>
        <title>${functionName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${functionName.toLowerCase().replace(/([A-Z])/g, " $1")} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${functionName}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ${functionName.toLowerCase().replace(/([A-Z])/g, " $1")} services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

        content = content.replace(
          /export default function ([^(]+)\(\)\s*\{[^}]*\}/s,
          `export default function ${functionName}() {${basicTemplate}`,
        );
        modified = true;
      }
    }

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

// Function to recursively find and fix TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith(".tsx")) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log("Starting syntax error fixes...");
const appDir = path.join(__dirname, "app");
const fixedCount = fixAllTSXFiles(appDir);
console.log(`Fixed ${fixedCount} files.`);

// Also fix the main App.tsx file
const appTsxPath = path.join(__dirname, "App.tsx");
if (fs.existsSync(appTsxPath)) {
  if (fixSyntaxErrors(appTsxPath)) {
    console.log("Fixed: App.tsx");
  }
}

console.log("Syntax error fixes completed.");
