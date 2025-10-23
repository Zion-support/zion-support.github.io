const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed function declarations and return statements
    if (content.includes('const ') && content.includes('React.FC') && content.includes('return (')) {
      // Fix indentation issues
      content = content.replace(/(\s+]\s*;\s*\n\s*)(\s*return\s*\()/g, '$1  $2');
      modified = true;
    }

    // Fix missing function closing braces
    if (content.includes('const ') && content.includes('React.FC') && !content.includes('export default')) {
      // Find the last closing brace and add export
      const lastBraceIndex = content.lastIndexOf('}');
      if (lastBraceIndex > 0) {
        const beforeBrace = content.substring(0, lastBraceIndex);
        const afterBrace = content.substring(lastBraceIndex);
        
        // Extract function name
        const functionMatch = content.match(/const\s+(\w+):\s*React\.FC/);
        if (functionMatch) {
          const functionName = functionMatch[1];
          content = beforeBrace + '};\n\nexport default ' + functionName + ';';
          modified = true;
        }
      }
    }

    // Fix specific indentation issues
    content = content.replace(/(\s+]\s*;\s*\n\s*)(\s*return\s*\()/g, '$1  $2');
    modified = true;

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of specific files that need fixing
const problemFiles = [
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-generation/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-crm/page.tsx',
  'app/ai-crm-assistant/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-customer-support-bot/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-cybersecurity-monitor/page.tsx',
  'app/ai-cybersecurity-suite/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-design-studio/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-document-processor/page.tsx',
  'app/ai-document-scanner/page.tsx',
  'app/ai-drug-discovery-pro/page.tsx',
  'app/ai-ecommerce-optimizer/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-edge-computing/page.tsx',
  'app/ai-education/page.tsx',
  'app/ai-education-tutor/page.tsx',
  'app/ai-email-assistant/page.tsx',
  'app/ai-email-marketing/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-energy/page.tsx',
  'app/ai-energy-grid-management-pro/page.tsx',
  'app/ai-enterprise-solutions/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-fashion-design/page.tsx',
  'app/ai-financial-advisor/page.tsx',
  'app/ai-financial-analyzer/page.tsx',
  'app/ai-financial-crime-detection-pro/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-fitness-coach/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-healthcare-solutions/page.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-hr/page.tsx',
  'app/ai-hr-assistant/page.tsx',
  'app/ai-image-recognition/page.tsx',
  'app/ai-infrastructure/page.tsx',
  'app/ai-infrastructure-monitoring/page.tsx',
  'app/ai-insurance/page.tsx',
  'app/ai-inventory-management/page.tsx',
  'app/ai-inventory-manager/page.tsx',
  'app/ai-investment-optimizer/page.tsx',
  'app/ai-invoice-generator/page.tsx',
  'app/ai-lead-generation/page.tsx',
  'app/ai-legal/page.tsx',
  'app/ai-legal-assistant/page.tsx',
  'app/ai-legal-research-pro/page.tsx',
  'app/ai-load-testing/page.tsx',
  'app/ai-logo-designer/page.tsx',
  'app/ai-manufacturing/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-medical-assistant/page.tsx',
  'app/ai-ml/page.tsx',
  'app/ai-ml-platform/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-music-composition/page.tsx',
  'app/ai-neural-memory-assistant/page.tsx',
  'app/ai-nlp/page.tsx',
  'app/ai-ops/page.tsx',
  'app/ai-password-manager/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-predictive-maintenance/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-project-manager/page.tsx',
  'app/ai-quality-assurance/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-quantum-optimization/page.tsx',
  'app/ai-quantum-task-optimizer/page.tsx',
  'app/ai-real-estate/page.tsx',
  'app/ai-real-estate-analyzer/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-recruitment-assistant/page.tsx',
  'app/ai-robotics/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-scheduler/page.tsx',
  'app/ai-sentiment-analyzer/page.tsx',
  'app/ai-seo-optimizer/page.tsx',
  'app/ai-smart-calendar/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-social-media-scheduler/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-space-technology/page.tsx',
  'app/ai-space-technology-pro/page.tsx',
  'app/ai-stock-portfolio-manager/page.tsx',
  'app/ai-supply-chain/page.tsx',
  'app/ai-supply-chain-optimization-pro/page.tsx',
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-task-manager/page.tsx',
  'app/ai-telepathic-interface/page.tsx',
  'app/ai-time-tracker/page.tsx',
  'app/ai-transportation/page.tsx',
  'app/ai-video-editor/page.tsx',
  'app/ai-video-generation/page.tsx',
  'app/ai-video-generator/page.tsx',
  'app/ai-vision/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-voice-cloning/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/ai-voice-processing/page.tsx',
  'app/ai-voice-synthesis/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-writing-assistant/page.tsx'
];

console.log('Fixing specific problem files...');
let fixedCount = 0;

for (const file of problemFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (fixSpecificErrors(filePath)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);