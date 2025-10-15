const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, "")
    .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> main/g, "")
    .replace(/=======[\s\S]*?>>>>>>> main/g, "")
    .replace(/<<<<<<< HEAD[\s\S]*?=======/g, "")
    .replace(/<<<<<<< HEAD/g, "")
    .replace(/=======/g, "")
    .replace(/>>>>>>> main/g, "")
    .replace(/>>>>>>> [a-zA-Z0-9_-]+/g, "");
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/'([^']*?)$/gm, (match, str) => {
    if (str.includes("\\")) return match;
    return `'${str}'`;
  });

  content = content.replace(/"([^"]*?)$/gm, (match, str) => {
    if (str.includes("\\")) return match;
    return `"${str}"`;
  });

  // Fix missing semicolons after import statements
  content = content.replace(
    /import\s+.*?from\s+['"][^'"]*['"]\s*$/gm,
    (match) => {
      if (!match.endsWith(";")) {
        return match + ";";
      }
      return match;
    },
  );

  // Fix missing closing tags
  content = content.replace(/<Helmet[^>]*>(?![\s\S]*<\/Helmet>)/g, (match) => {
    return match + "</Helmet>";
  });

  // Fix missing closing braces
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    content += "}".repeat(openBraces - closeBraces);
  }

  return content;
}

// Function to fix specific file patterns
function fixFileContent(filePath, content) {
  // Clean merge conflicts first
  content = cleanMergeConflicts(content);

  // Fix syntax errors
  content = fixSyntaxErrors(content);

  // Remove empty lines at the beginning
  content = content.replace(/^\s*\n+/, "");

  // Ensure file ends with newline
  if (!content.endsWith("\n")) {
    content += "\n";
  }

  return content;
}

// Main function to process all files
async function fixAllErrors() {
  console.log("🔧 Starting comprehensive error fixing...");

  // Get all TypeScript and JavaScript files
  const patterns = [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "api/**/*.{ts,tsx}",
    "__tests__/**/*.{ts,tsx}",
    "*.{ts,tsx}",
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = glob.sync(pattern, {
      ignore: [
        "node_modules/**",
        "dist/**",
        ".next/**",
        "backup*/**",
        "app-broken/**",
        "app-disabled/**",
        "corrupted-src-backup/**",
      ],
    });

    for (const filePath of files) {
      try {
        totalFiles++;
        const content = fs.readFileSync(filePath, "utf8");
        const fixedContent = fixFileContent(filePath, content);

        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, "utf8");
          fixedFiles++;
          console.log(`✅ Fixed: ${filePath}`);
        }
      } catch (error) {
        console.log(`❌ Error processing ${filePath}: ${error.message}`);
      }
    }
  }

  console.log(`\n🎉 Error fixing completed!`);
  console.log(`📊 Processed: ${totalFiles} files`);
  console.log(`🔧 Fixed: ${fixedFiles} files`);
}

// Run the fix
fixAllErrors().catch(console.error);
