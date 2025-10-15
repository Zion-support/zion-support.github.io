const fs = require("fs");
const path = require("path");

// List of files to fix
const filesToFix = [
  "app/accessibility/page.tsx",
  "app/ai-accounting-assistant/page.tsx",
  "app/ai-agricultural-intelligence-pro/page.tsx",
  "app/ai-analytics/page.tsx",
  "app/ai-api-management/page.tsx",
  "app/ai-automated-testing/page.tsx",
  "app/ai-autonomous-systems/page.tsx",
  "app/ai-blockchain-analytics/page.tsx",
  "app/ai-blockchain-solutions/page.tsx",
  "app/ai-business-intelligence/page.tsx",
  "app/ai-chatbot-enterprise/page.tsx",
  "app/ai-climate-prediction-engine/page.tsx",
  "app/ai-cloud-infrastructure/page.tsx",
  "app/ai-code-assistant/page.tsx",
  "app/ai-code-generation/page.tsx",
  "app/ai-code-security-auditor/page.tsx",
  "app/ai-computer-vision/page.tsx",
  "app/ai-content-delivery-network/page.tsx",
  "app/ai-content-generation-pro/page.tsx",
  "app/ai-content-moderation/page.tsx",
  "app/ai-content-studio/page.tsx",
  "app/ai-content-writer/page.tsx",
  "app/ai-conversation-analytics/page.tsx",
  "app/ai-conversational-ai/page.tsx",
  "app/ai-crm-assistant/page.tsx",
  "app/ai-crm/page.tsx",
  "app/ai-customer-churn/page.tsx",
  "app/ai-customer-service/page.tsx",
  "app/ai-customer-support-chatbot/page.tsx",
  "app/ai-customer-support/page.tsx",
  "app/ai-cyber-defense-matrix/page.tsx",
  "app/ai-cybersecurity-monitor/page.tsx",
  "app/ai-cybersecurity-suite/page.tsx",
  "app/ai-cybersecurity/page.tsx",
  "app/ai-data-analytics/page.tsx",
  "app/ai-data-visualization/page.tsx",
  "app/ai-design-studio/page.tsx",
  "app/ai-document-intelligence/page.tsx",
  "app/ai-document-processing/page.tsx",
  "app/ai-document-processor/page.tsx",
  "app/ai-document-scanner/page.tsx",
  "app/ai-ecommerce-assistant/page.tsx",
  "app/ai-ecommerce-optimizer/page.tsx",
  "app/ai-ecommerce-solutions/page.tsx",
  "app/ai-edge-computing/page.tsx",
  "app/ai-education/page.tsx",
  "app/ai-email-marketing-automation/page.tsx",
  "app/ai-email-marketing/page.tsx",
  "app/ai-energy-grid-management-pro/page.tsx",
  "app/ai-energy/page.tsx",
  "app/ai-enterprise-solutions/page.tsx",
  "app/ai-fashion-design/page.tsx",
  "app/ai-financial-advisor/page.tsx",
  "app/ai-financial-analyzer/page.tsx",
  "app/ai-financial-crime-detection-pro/page.tsx",
  "app/ai-financial-forecasting/page.tsx",
  "app/ai-financial-planner/page.tsx",
  "app/ai-financial-services/page.tsx",
  "app/ai-fintech/page.tsx",
  "app/ai-fitness-coach/page.tsx",
  "app/ai-fraud-detection/page.tsx",
  "app/ai-health-tracker/page.tsx",
  "app/ai-healthcare-diagnostics/page.tsx",
  "app/ai-healthcare-solutions/page.tsx",
  "app/ai-healthcare/page.tsx",
  "app/ai-holographic-workspace/page.tsx",
  "app/ai-hr-assistant/page.tsx",
  "app/ai-hr-solutions/page.tsx",
  "app/ai-hr/page.tsx",
  "app/ai-image-recognition/page.tsx",
  "app/ai-infrastructure-monitoring/page.tsx",
  "app/ai-insurance/page.tsx",
  "app/ai-integration-services/page.tsx",
  "app/ai-inventory-management/page.tsx",
  "app/ai-inventory-manager/page.tsx",
  "app/ai-investment-optimizer/page.tsx",
  "app/ai-invoice-generator/page.tsx",
  "app/ai-iot-analytics/page.tsx",
  "app/ai-knowledge-management/page.tsx",
  "app/ai-lead-generation/page.tsx",
  "app/ai-lead-scoring/page.tsx",
  "app/ai-learning-platform/page.tsx",
  "app/ai-legal-assistant/page.tsx",
  "app/ai-legal-research-pro/page.tsx",
  "app/ai-legal/page.tsx",
  "app/ai-load-testing/page.tsx",
  "app/ai-logo-designer/page.tsx",
  "app/ai-manufacturing/page.tsx",
  "app/ai-marketing/page.tsx",
  "app/ai-mental-health-companion/page.tsx",
  "app/ai-ml-platform/page.tsx",
  "app/ai-ml/page.tsx",
  "app/ai-mobile-app-development/page.tsx",
  "app/ai-music-composition/page.tsx",
  "app/ai-neural-interface/page.tsx",
  "app/ai-neural-memory-assistant/page.tsx",
  "app/ai-nlp/page.tsx",
  "app/ai-ops/page.tsx",
  "app/ai-predictive-analytics/page.tsx",
  "app/ai-predictive-maintenance/page.tsx",
  "app/ai-predictive-modeling/page.tsx",
  "app/ai-project-management/page.tsx",
  "app/ai-quality-assurance/page.tsx",
  "app/ai-quantum-computing-simulator/page.tsx",
  "app/ai-quantum-computing/page.tsx",
  "app/ai-quantum-financial-oracle/page.tsx",
  "app/ai-quantum-optimization/page.tsx",
  "app/ai-quantum-task-optimizer/page.tsx",
  "app/ai-real-estate/page.tsx",
  "app/ai-recommendation-engine/page.tsx",
  "app/ai-recruitment-assistant/page.tsx",
  "app/ai-robotics/page.tsx",
  "app/ai-sales-automation/page.tsx",
  "app/ai-scheduler/page.tsx",
  "app/ai-security-monitor/page.tsx",
  "app/ai-sentiment-analysis/page.tsx",
  "app/ai-sentiment-analyzer/page.tsx",
  "app/ai-seo-optimizer/page.tsx",
  "app/ai-smart-calendar/page.tsx",
  "app/ai-smart-contract-auditor/page.tsx",
  "app/ai-smart-home-controller/page.tsx",
  "app/ai-social-media-manager/page.tsx",
  "app/ai-social-media-scheduler/page.tsx",
  "app/ai-solutions/page.tsx",
  "app/ai-space-mission-optimizer/page.tsx",
  "app/ai-space-technology-pro/page.tsx",
  "app/ai-space-technology/page.tsx",
  "app/ai-speech-synthesis/page.tsx",
  "app/ai-stock-portfolio-manager/page.tsx",
  "app/ai-supply-chain-ai/page.tsx",
  "app/ai-supply-chain-optimization-pro/page.tsx",
  "app/ai-supply-chain/page.tsx",
  "app/ai-telepathic-interface/page.tsx",
  "app/ai-time-tracker/page.tsx",
  "app/ai-transportation/page.tsx",
  "app/ai-video-analysis/page.tsx",
  "app/ai-video-editor/page.tsx",
  "app/ai-video-generation/page.tsx",
  "app/ai-video-generator/page.tsx",
  "app/ai-vision/page.tsx",
  "app/ai-voice-cloning-studio/page.tsx",
  "app/ai-voice-cloning/page.tsx",
  "app/ai-voice-processing/page.tsx",
  "app/ai-voice-solutions/page.tsx",
  "app/ai-voice-synthesis/page.tsx",
  "app/ai-workflow-automation/page.tsx",
  "app/ai-writing-assistant/page.tsx",
  "app/analytics-tools/page.tsx",
  "app/api-development-advanced/page.tsx",
  "app/api-development/page.tsx",
  "app/api-docs/page.tsx",
  "app/api/page.tsx",
  "app/ar-vr-platform/page.tsx",
  "app/ar-vr-solutions/page.tsx",
  "app/autonomous-systems/page.tsx",
  "app/backup-recovery/page.tsx",
  "app/blockchain-development/page.tsx",
  "app/blockchain-integration-services/page.tsx",
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Remove merge conflict markers
    content = content.replace(
      /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g,
      "",
    );

    // Fix the common pattern: missing function declaration and stray array
    if (
      content.includes("  ];") &&
      content.includes('    <div className="min-h-screen')
    ) {
      // Extract the page name from the path
      const pageName = path
        .basename(path.dirname(filePath))
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .replace(/\s/g, "");

      // Replace the pattern
      content = content.replace(
        /  \];\s*\n\s*<div className="min-h-screen/g,
        `export default function ${pageName}Page() {\n  return (\n    <div className="min-h-screen`,
      );

      // Add closing brace if missing
      if (
        !content.includes("export default") ||
        content.split("export default").length === 1
      ) {
        // Find the last closing div and add the function closing
        const lastDivIndex = content.lastIndexOf("    </div>");
        if (lastDivIndex !== -1) {
          content = content.substring(0, lastDivIndex + 9) + "\n  );\n}";
        }
      }
    }

    // Remove any remaining merge conflict markers
    content = content.replace(
      /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g,
      "",
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPageFile);

console.log("Page fixing completed!");
