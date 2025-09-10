#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
// List of files that need fixing;
const filesToFix = [ "pages/ai-services.tsx",
  "pages/blog.tsx",
  "pages/help.tsx",
  "pages/it-services.tsx",
  "pages/micro-saas.tsx",
  "pages/pricing.tsx",
  "pages/privacy.tsx",
  "pages/services/ai-development.tsx",
  "pages/services/cloud-services.tsx",
  "pages/services/web-development.tsx",
  "pages/terms.tsx",
  "components/ContactForm.tsx",
  "components/TestimonialsSection.tsx" ];
function fixStringLiterals(content) {;
  // Fix corrupted string literals in JavaScript/TypeScript code;
  content = content.replace(/= &apos;([^&]+)&apos;/g, "= "$1"");
  content = content.replace(/&apos;([^&]+)&apos;/g, ""$1"");
  content = content.replace(/= &quot;([^&]+)&quot;/g, "= "$1"");
  content = content.replace(/&quot;([^&]+)&quot;/g, ""$1"");
  return content;,
}

function fixFile(filePath) {;
  try {;
  if (!fs.existsSync(filePath)) {;
  console.log(`File not found: ${filePath}`);
      return false;,
}

    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;
    
    content = fixStringLiterals(content);