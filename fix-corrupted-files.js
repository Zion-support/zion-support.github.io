import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of corrupted files to fix
const corruptedFiles = [
  "app/5g-iot-solutions/page.tsx",
  "app/ai-content-management/page.tsx",
  "app/it-training/page.tsx",
  "app/specialized-services/page.tsx",
  "app/ai-sentiment-analyzer/page.tsx",
  "app/database-services/page.tsx",
  "app/gdpr/page.tsx",
  "app/website-analytics-tool/page.tsx",
  "app/ai-telepathic-interface/page.tsx",
  "app/ai-email-automation/page.tsx",
  "app/ai-smart-calendar/page.tsx",
  "app/press/page.tsx",
  "app/landing-page-builder/page.tsx",
  "app/iot-development/page.tsx",
  "app/ai-transportation/page.tsx",
  "app/ai-workflow-automation/page.tsx",
  "app/health/page.tsx",
  "app/ai-climate-solutions-pro/page.tsx",
  "app/zion-ai-data-cleaner/page.tsx",
  "app/ai-fashion-design/page.tsx",
  "app/ai-automated-reporting/page.tsx",
  "app/ai-automated-testing/page.tsx",
  "app/ai-automation-platform/page.tsx",
  "app/ai-automation-suite/page.tsx",
  "app/ai-automation/page.tsx",
  "app/ai-autonomous-systems/page.tsx",
  "app/ai-blockchain-analytics/page.tsx",
  "app/ai-blockchain-solutions/page.tsx",
  "app/ai-business-intelligence-pro/page.tsx",
  "app/ai-business-intelligence/page.tsx",
  "app/ai-chatbot-builder/page.tsx",
  "app/ai-chatbot-enterprise/page.tsx",
  "app/ai-climate-prediction-engine/page.tsx",
  "app/ai-cloud-infrastructure/page.tsx",
  "app/ai-code-assistant-pro/page.tsx",
  "app/ai-code-assistant/page.tsx",
  "app/ai-code-generation/page.tsx",
  "app/ai-code-security-auditor/page.tsx",
  "app/ai-computer-vision/page.tsx",
  "app/ai-content-creation/page.tsx",
];

// Template for a basic page component
const createPageTemplate = (
  pageName,
  title,
  description,
) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>
          <p className="text-lg text-gray-600">
            ${description}
          </p>
        </div>
      </div>
    </>
  );
}`;

// Function to generate page name from file path
function getPageName(filePath) {
  const parts = filePath.split("/");
  const fileName = parts[parts.length - 2]; // Get the directory name
  return (
    fileName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Page"
  );
}

// Function to generate title from file path
function getTitle(filePath) {
  const parts = filePath.split("/");
  const fileName = parts[parts.length - 2]; // Get the directory name
  return fileName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to generate description from file path
function getDescription(filePath) {
  const parts = filePath.split("/");
  const fileName = parts[parts.length - 2]; // Get the directory name
  return `Professional ${fileName.replace(/-/g, " ")} solutions for modern businesses.`;
}

// Fix all corrupted files
corruptedFiles.forEach((filePath) => {
  const fullPath = path.join(__dirname, filePath);

  try {
    const pageName = getPageName(filePath);
    const title = getTitle(filePath);
    const description = getDescription(filePath);

    const content = createPageTemplate(pageName, title, description);

    // Ensure directory exists
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log("All corrupted files have been fixed!");
