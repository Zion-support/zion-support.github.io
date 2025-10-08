#!/usr/bin/env node

const fs = require("fs");

// Function to fix remaining issues
function fixRemainingIssues(content) {
  // Fix any types
  content = content.replace(/:\s*any\b/g, ": unknown");

  // Fix unused variables by prefixing with underscore
  content = content.replace(/\b_addMetaTag\b/g, "_addMetaTag");
  content = content.replace(/\b_updateCanonicalUrl\b/g, "_updateCanonicalUrl");
  content = content.replace(/\b_addStructuredData\b/g, "_addStructuredData");
  content = content.replace(/\b_trackPageView\b/g, "_trackPageView");
  content = content.replace(
    /\b_trackPerformanceMetrics\b/g,
    "_trackPerformanceMetrics",
  );
  content = content.replace(/\b_errorInfo\b/g, "_errorInfo");

  // Remove unused variable assignments
  content = content.replace(/const\s+_addMetaTag\s*=\s*[^;]+;/g, "");
  content = content.replace(/const\s+_updateCanonicalUrl\s*=\s*[^;]+;/g, "");
  content = content.replace(/const\s+_addStructuredData\s*=\s*[^;]+;/g, "");
  content = content.replace(/const\s+_trackPageView\s*=\s*[^;]+;/g, "");
  content = content.replace(
    /const\s+_trackPerformanceMetrics\s*=\s*[^;]+;/g,
    "",
  );
  content = content.replace(/const\s+_errorInfo\s*=\s*[^;]+;/g, "");

  return content;
}

// List of files to fix
const filesToFix = [
  "/workspace/app/components/AdvancedSEOOptimizer.tsx",
  "/workspace/app/components/EnhancedErrorBoundary.tsx",
  "/workspace/app/components/ImprovedErrorBoundary.tsx",
];

let fixedCount = 0;

filesToFix.forEach((filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf8");
      const originalContent = content;

      content = fixRemainingIssues(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);
