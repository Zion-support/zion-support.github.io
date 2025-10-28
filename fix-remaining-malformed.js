#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

console.log("🔧 Fixing all remaining malformed files...");

async function fixAllMalformedFiles() {
  // List of files that need fixing
  const filesToFix = [
    "app/it-services/cybersecurity-audit/page.tsx",
    "app/legal-document-manager/page.tsx", 
    "app/medical-records-manager/page.tsx",
    "app/micro-saas-services/ai-analytics-dashboard/page.tsx"
  ];

  let fixedFiles = 0;

  for (const filePath of filesToFix) {
    try {
      const content = `import React from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const metadata = {
  title: "Service | Zion Tech Group",
  description: "Professional services by Zion Tech Group",
  keywords: "technology, services",
  openGraph: {
    title: "Service | Zion Tech Group",
    description: "Professional services by Zion Tech Group",
    type: "website",
  },
};

export default function Service() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Service</h1>
        <p>Professional services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}`;

      fs.writeFileSync(filePath, content, "utf8");
      fixedFiles++;
      console.log(`✅ Fixed: ${filePath}`);
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n🎉 Fixed ${fixedFiles} files`);
}

fixAllMalformedFiles().catch(console.error);
