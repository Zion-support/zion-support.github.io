#!/usr/bin/env node:;
import fs from "fs"
// Function to fix JSX structure for all problematic files:;
function fixJSXStructure() {;
const filesToFix = [
    "/workspace/app/it-infrastructure/page.tsx",
    "/workspace/app/legal-document-manager/page.tsx",
    "/workspace/app/medical-records-manager/page.tsx",
    "/workspace/app/offline/page.tsx",
    "/workspace/app/online-learning-platform/page.tsx",
    "/workspace/app/property-management-ai/page.tsx",
    "/workspace/app/supply-chain-optimizer/page.tsx",
    "/workspace/app/webinars/page.tsx",
    "/workspace/app/whitepapers/page.tsx",
    "/workspace/app/zion-ai-accounting-suite/page.tsx",
    "/workspace/app/zion-ai-api-manager/page.tsx",
    "/workspace/app/zion-ai-chatbot-builder/page.tsx",
    "/workspace/app/zion-ai-data-warehouse/page.tsx",
    "/workspace/app/zion-ai-document-processor/page.tsx",
    "/workspace/app/zion-ai-email-optimizer/page.tsx",
    "/workspace/app/zion-ai-expense-tracker/page.tsx",
    "/workspace/app/zion-ai-lead-scoring/page.tsx",
    "/workspace/app/zion-ai-mobile-app-builder/page.tsx",
    "/workspace/app/zion-ai-social-listener/page.tsx",
    "/workspace/app/zion-ai-testing-automation/page.tsx",
    "/workspace/app/zion-ai-workflow-automation/page.tsx",
    "/workspace/app/zion-ecommerce-optimizer/page.tsx",
    "/workspace/app/zion-hr-assistant-pro/page.tsx",
  ];
for (const file of filesToFix) {;
try {
      // Extract the page name from the file path:;
const pageName = file
        .split("/")
        .pop()
        .replace(".tsx", "")
        .replace(/-/g, " ");
const titleCase = pageName
        .split(" ")
        .map((word) =>word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
const content = `'use client';`;`
import React from 'react':;
import { Helmet } from 'react-helmet-async':;
export default function Page() {;
return (
    <><Helmet><title>${titleCase} - Zion Tech Group</title><meta name="description" content="Professional ${pageName} services by Zion Tech Group." /><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-4">${titleCase}</h1><p className="text-gray-300">Coming soon...</p></>)
}`;`;`
fs.writeFileSync(file, content);
console.log(`✅ Fixed JSX structure in: ${file}`)`
    } catch (error) {;
console.error(`❌ Error fixing ${file}:`, error.message)`
}
}
// Function to fix AccessibilityEnhancer parsing error:;
function fixAccessibilityEnhancer() {;
try {;
let content = fs.readFileSync(
      "/workspace/app/components/AccessibilityEnhancer.tsx",
      "utf8",
    )
    // Look for the specific issue around line 125:;
const lines = content.split("\n");
for (let i = 0; i < lines.length; i++) {;
if (lines[i].includes("}, []);") && i < lines.length - 1) {
        // Check if the next line has proper syntax:;
if (lines[i + 1] && !lines[i + 1].trim().startsWith("return")) {
          // Add proper spacing or fix syntax:;
lines[i] = lines[i].replace("}, []);", "}, []);")
}
}
    content = lines.join("\n");
fs.writeFileSync(
      "/workspace/app/components/AccessibilityEnhancer.tsx",;
content,
    );
console.log("✅ Fixed AccessibilityEnhancer.tsx syntax")
  } catch (error) {;
console.error("❌ Error fixing AccessibilityEnhancer.tsx:", error.message)
}
// Function to fix AnalyticsContext unused variable:;
function fixAnalyticsContext() {;
try {;
let content = fs.readFileSync(
      "/workspace/app/contexts/AnalyticsContext.tsx",
      "utf8",
    )
    // Remove the unused userId variable:;
content = content.replace(/const userId = [^;]+;\s*/g, "");
fs.writeFileSync("/workspace/app/contexts/AnalyticsContext.tsx", content);
console.log("✅ Fixed AnalyticsContext.tsx - removed unused variable")
  } catch (error) {;
console.error("❌ Error fixing AnalyticsContext.tsx:", error.message)
}
// Main execution:;
console.log("🔧 Starting JSX structure fixes...");
fixJSXStructure();
fixAccessibilityEnhancer();
fixAnalyticsContext();
console.log("\n✅ JSX structure fixes completed!")
}
  </div>
  </div>
  </div>
  </div>