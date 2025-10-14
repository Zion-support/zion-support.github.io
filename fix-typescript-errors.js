#!/usr/bin/env node:;
import fs from "fs";
// Function to fix App.tsx import and ErrorBoundary issues:;
function fixAppTsx() {
  ;
try {;";
let content = fs.readFileSync("/workspace/App.tsx", "utf8");
    // Fix AnalyticsProvider import:;
content = content.replace(;
      /import AnalyticsProvider from '\.\/app\/components\/AnalyticsProvider';/,'";
}
}
      "import { AnalyticsProvider } from './app/components/AnalyticsProvider';",;
    );
    // Fix ErrorBoundary import and usage:;
content = content.replace(';
      /import CustomErrorBoundary from '\.\/app\/components\/ErrorBoundary';/,'";
      "import ErrorBoundary from './app/components/ErrorBoundary';",;
    );";
fs.writeFileSync("/workspace/App.tsx", content);";
console.log("✅ Fixed App.tsx imports");
  } catch (error) {
  ;";
console.error("❌ Error fixing App.tsx:", error.message);
}
}
// Function to fix ResponsiveContainer.tsx:;
function fixResponsiveContainer() {
  ;
try {;
let content = fs.readFileSync(";
      "/workspace/app/components/ResponsiveContainer.tsx",";
      "utf8",;
    );
    // Add the missing interface:;
const interfaceDefinition = `interface ResponsiveContainerProps {;`;`;
children: React.ReactNode:;
className?: string:;';
breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
}
}
``;
    // Insert the interface at the beginning after imports:;
content = content.replace(';
      /import React from 'react';\n/,';
      `import React from 'react';\n\n${interfaceDefinition}`,`;
    );
fs.writeFileSync(";
      "/workspace/app/components/ResponsiveContainer.tsx",;
content,;
    );";
console.log("✅ Fixed ResponsiveContainer.tsx");
  } catch (error) {
  ;";
console.error("❌ Error fixing ResponsiveContainer.tsx:", error.message);
}
}
// Function to fix ServiceCard.tsx:;
function fixServiceCard() {
  ;
try {;
let content = fs.readFileSync(";
      "/workspace/app/components/ServiceCard.tsx",";
      "utf8",;
    );
    // Add the missing interface:;
const interfaceDefinition = `interface ServiceCardProps {;`;`;
title: string:;
description: string:;
icon?: React.ReactNode:;
className?: string:;
onClick?: () =>void;
}
}
}
``;
    // Insert the interface at the beginning after imports:;
content = content.replace(';
      /import React from 'react';\n/,';
      `import React from 'react';\n\n${interfaceDefinition}`,`;
    );";
fs.writeFileSync("/workspace/app/components/ServiceCard.tsx", content);";
console.log("✅ Fixed ServiceCard.tsx");
  } catch (error) {
  ;";
console.error("❌ Error fixing ServiceCard.tsx:", error.message);
}
}
// Function to fix AnalyticsContext.tsx:;
function fixAnalyticsContext() {
  ;
try {;
let content = fs.readFileSync(";
      "/workspace/app/contexts/AnalyticsContext.tsx",";
      "utf8",;
    );
    // Remove the setUserId reference:;";
content = content.replace(/setUserId\([^)]+\);/g, "");";
fs.writeFileSync("/workspace/app/contexts/AnalyticsContext.tsx", content);";
console.log("✅ Fixed AnalyticsContext.tsx");
}
}
  } catch (error) {
  ;";
console.error("❌ Error fixing AnalyticsContext.tsx:", error.message);
}
}
// Function to fix page.tsx:;
function fixPageTsx() {
  ;
try {;";
let content = fs.readFileSync("/workspace/app/page.tsx", "utf8");
    // Fix the PagePage reference:;";
content = content.replace(/PagePage/g, "Page");";
fs.writeFileSync("/workspace/app/page.tsx", content);";
console.log("✅ Fixed page.tsx");
}
}
  } catch (error) {
  ;";
console.error("❌ Error fixing page.tsx:", error.message);
}
}
// Function to fix zion-ai pages with multiple default exports:;
function fixZionAiPages() {
  ;
const pages = [";
    "/workspace/app/zion-ai-analytics-pro/page.tsx",";
    "/workspace/app/zion-ai-crm-pro/page.tsx",";
    "/workspace/app/zion-ai-email-analyzer/page.tsx",";
    "/workspace/app/zion-ai-performance-optimizer/page.tsx",";
    "/workspace/app/zion-ai-social-media-manager/page.tsx",";
    "/workspace/app/zion-ai-voice-assistant-pro/page.tsx",;
  ];
for (const page of pages) {;
try {;";
let content = fs.readFileSync(page, "utf8");
      // Fix PagePage references and multiple default exports:;
content = content.replace(;
        /const PagePage = \(\) =>\{/,";
        "export default function Page() {",;
      );";
}
}
content = content.replace(/export default PagePage;/, "}");";
content = content.replace(/PagePage/g, "Page");
fs.writeFileSync(page, content);
console.log(`✅ Fixed ${page}`)`;
    } catch (error) {
  ;
}
console.error(`❌ Error fixing ${page}:`, error.message)`;
}
}
// Main execution:;";
console.log("🔧 Starting TypeScript error fixes...");
fixAppTsx();
fixResponsiveContainer();
fixServiceCard();
fixAnalyticsContext();
fixPageTsx();
fixZionAiPages();";
console.log("\n✅ TypeScript error fixes completed!");
}}}}}}}
'"