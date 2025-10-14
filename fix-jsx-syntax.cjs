const fs = require("fs");
const path = require("path");

// List of files with errors
const filesToFix = [
  "app/ai-data-analytics-pro/page.tsx",
  "app/ai-financial-analysis/page.tsx",
  "app/ai-hr-recruitment-pro/page.tsx",
  "app/ai-image-recognition-pro/page.tsx",
  "app/ai-supply-chain-optimizer/page.tsx",
  "app/ai-translation-service/page.tsx",
  "app/cloud-infrastructure-management/page.tsx",
];

// Fix each file
filesToFix.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Fix malformed Link tags - remove the extra } and > characters
    content = content.replace(
      /className="[^"]*w-5 h-5">\s*}\s*>\s*([^<]*)\s*<\/Link>/g,
      'className="[^"]*">$1</Link>',
    );

    // Fix the specific pattern with w-5 h-5 and extra characters
    content = content.replace(
      /className="([^"]*)w-5 h-5">\s*}\s*>\s*([^<]*)\s*<\/Link>/g,
      'className="$1">$2</Link>',
    );

    // Fix any remaining malformed patterns
    content = content.replace(/>\s*}\s*>/g, ">");
    content = content.replace(/>\s*}\s*$/gm, ">");

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log("All files fixed!");
