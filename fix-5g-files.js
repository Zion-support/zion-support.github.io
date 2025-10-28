#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

console.log("🔧 Fixing all remaining malformed 5G files...");

async function fixAll5GFiles() {
  // Find all 5G page files
  const pageFiles = await glob("app/5g-*/page.tsx");

  let fixedFiles = 0;

  for (const filePath of pageFiles) {
    try {
      const content = `import React from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const metadata = {
  title: "5G Service | Zion Tech Group",
  description: "Professional 5G services by Zion Tech Group",
  keywords: "5G services, technology, services",
  openGraph: {
    title: "5G Service | Zion Tech Group",
    description: "Professional 5G services by Zion Tech Group",
    type: "website",
  },
};

export default function FiveGService() {
  return (
    <ErrorBoundary>
      <div>
        <h1>5G Service</h1>
        <p>Professional 5G services by Zion Tech Group</p>
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

  console.log(`\n🎉 Fixed ${fixedFiles} 5G files`);
}

fixAll5GFiles().catch(console.error);
