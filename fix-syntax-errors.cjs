#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Fix common JSX syntax issues
    content = content
      // Fix missing closing tags - add closing tags for common elements
      .replace(/<main([^>]*)>\s*$/gm, '<main$1></main>')
      .replace(/<section([^>]*)>\s*$/gm, '<section$1></section>')
      .replace(/<div([^>]*)>\s*$/gm, '<div$1></div>')
      .replace(/<header([^>]*)>\s*$/gm, '<header$1></header>')
      .replace(/<footer([^>]*)>\s*$/gm, '<footer$1></footer>')
      .replace(/<article([^>]*)>\s*$/gm, '<article$1></article>')
      .replace(/<aside([^>]*)>\s*$/gm, '<aside$1></aside>')
      .replace(/<nav([^>]*)>\s*$/gm, '<nav$1></nav>')
      
      // Fix object property syntax
      .replace(/(\w+)\s*:\s*([^,}\n]+)(?=\s*[,}])/g, '$1: $2')
      
      // Fix missing commas in arrays and objects
      .replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:')
      .replace(/(\w+)\s*\n\s*(\w+)\s*:/g, '$1,\n    $2:')
      
      // Fix JSX expressions
      .replace(/\{\s*([^}]+)\s*\}/g, '{$1}')
      
      // Fix missing semicolons
      .replace(/(\w+)\s*\n\s*const/g, '$1;\nconst')
      .replace(/(\w+)\s*\n\s*let/g, '$1;\nlet')
      .replace(/(\w+)\s*\n\s*var/g, '$1;\nvar')
      .replace(/(\w+)\s*\n\s*function/g, '$1;\nfunction')
      
      // Fix missing return statements
      .replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{([^}]+)\}/g, 'const $1 = () => {\n  return $2;\n}')
      
      // Fix orphaned JSX fragments
      .replace(/<>\s*$/gm, '<></>')
      .replace(/<>\s*\n\s*$/gm, '<></>')
      
      // Fix missing closing parentheses
      .replace(/\(\s*$/gm, '()')
      .replace(/\(\s*\n\s*$/gm, '()')
      
      // Fix missing closing brackets
      .replace(/\[\s*$/gm, '[]')
      .replace(/\[\s*\n\s*$/gm, '[]')
      
      // Fix missing closing braces
      .replace(/\{\s*$/gm, '{}')
      .replace(/\{\s*\n\s*$/gm, '{}')
      
      // Remove extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '')
      .trim();

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/ai-api-management/page.tsx',
    'app/ai-api-manager/page.tsx',
    'app/ai-automation/page.tsx',
    'app/ai-autonomous-systems/page.tsx',
    'app/ai-blockchain-analytics/page.tsx',
    'app/ai-blockchain-solutions/page.tsx',
    'app/ai-climate-solutions-pro/page.tsx',
    'app/ai-cloud-infrastructure/page.tsx',
    'app/ai-code-assistant/page.tsx',
    'app/ai-computer-vision/page.tsx',
    'app/ai-content-delivery-network/page.tsx',
    'app/ai-content-generation/page.tsx',
    'app/ai-content-studio/page.tsx',
    'app/ai-content-writer/page.tsx',
    'app/ai-crm-assistant/page.tsx',
    'app/ai-customer-service/page.tsx',
    'app/ai-customer-support-chatbot/page.tsx',
    'app/ai-customer-support/page.tsx',
    'app/ai-cybersecurity-monitor/page.tsx',
    'app/ai-cybersecurity-suite/page.tsx',
    'app/ai-cybersecurity/page.tsx',
    'app/ai-data-analytics/page.tsx',
    'app/ai-data-visualization/page.tsx',
    'app/ai-document-processing/page.tsx',
    'app/ai-document-scanner/page.tsx',
    'app/ai-drug-discovery-pro/page.tsx',
    'app/ai-ecommerce-optimizer/page.tsx',
    'app/ai-ecommerce-solutions/page.tsx',
    'app/ai-edge-computing/page.tsx',
    'app/ai-education/page.tsx',
    'app/ai-email-assistant/page.tsx',
    'app/ai-email-marketing-automation/page.tsx',
    'app/ai-energy-grid-management-pro/page.tsx',
    'app/ai-energy/page.tsx',
    'app/ai-expense-tracker/page.tsx',
    'app/ai-financial-analyzer/page.tsx',
    'app/ai-financial-crime-detection-pro/page.tsx',
    'app/ai-fintech/page.tsx',
    'app/ai-fraud-detection/page.tsx',
    'app/ai-healthcare/page.tsx',
    'app/ai-holographic-workspace/page.tsx',
    'app/ai-hr/page.tsx',
    'app/ai-infrastructure-monitoring/page.tsx',
    'app/ai-insurance/page.tsx',
    'app/ai-inventory-management/page.tsx',
    'app/ai-inventory-manager/page.tsx',
    'app/ai-investment-optimizer/page.tsx',
    'app/ai-lead-generation/page.tsx',
    'app/ai-legal-assistant/page.tsx',
    'app/ai-legal-research-pro/page.tsx',
    'app/ai-legal/page.tsx',
    'app/ai-load-testing/page.tsx',
    'app/ai-logo-designer/page.tsx',
    'app/ai-manufacturing/page.tsx',
    'app/ai-marketing/page.tsx',
    'app/ai-mental-health-companion/page.tsx',
    'app/ai-ml-platform/page.tsx',
    'app/ai-ml/page.tsx',
    'app/ai-mobile-app-development/page.tsx',
    'app/ai-neural-memory-assistant/page.tsx',
    'app/ai-nlp/page.tsx',
    'app/ai-ops/page.tsx',
    'app/ai-password-manager/page.tsx',
    'app/ai-predictive-maintenance/page.tsx',
    'app/ai-project-management/page.tsx',
    'app/ai-project-manager/page.tsx',
    'app/ai-quality-assurance/page.tsx',
    'app/ai-quantum-computing/page.tsx',
    'app/ai-quantum-financial-oracle/page.tsx',
    'app/ai-quantum-optimization/page.tsx',
    'app/ai-quantum-task-optimizer/page.tsx',
    'app/ai-real-estate/page.tsx',
    'app/ai-robotics/page.tsx',
    'app/ai-sales-automation/page.tsx',
    'app/ai-sentiment-analyzer/page.tsx',
    'app/ai-smart-calendar/page.tsx',
    'app/ai-smart-home-controller/page.tsx',
    'app/ai-social-media-scheduler/page.tsx',
    'app/ai-solutions/page.tsx',
    'app/ai-space-technology-pro/page.tsx',
    'app/ai-space-technology/page.tsx',
    'app/ai-stock-portfolio-manager/page.tsx',
    'app/ai-supply-chain-optimization-pro/page.tsx',
    'app/ai-supply-chain/page.tsx',
    'app/ai-task-manager/page.tsx',
    'app/ai-telepathic-interface/page.tsx',
    'app/ai-transportation/page.tsx',
    'app/ai-video-editor/page.tsx',
    'app/ai-video-generator/page.tsx',
    'app/ai-vision/page.tsx',
    'app/ai-voice-assistant/page.tsx',
    'app/ai-voice-cloning-studio/page.tsx',
    'app/ai-voice-cloning/page.tsx',
    'app/ai-voice-synthesis/page.tsx',
    'app/ai-website-builder/page.tsx',
    'app/ai-workflow-automation/page.tsx',
    'app/analytics-tools/page.tsx',
    'app/api-docs/page.tsx',
    'app/ar-vr-platform/page.tsx',
    'app/backup-recovery/page.tsx',
    'app/blockchain-integration-services/page.tsx',
    'app/blockchain/page.tsx',
    'app/business-apps/page.tsx',
    'app/business-intelligence/page.tsx',
    'app/cloud-infrastructure/page.tsx',
    'app/cloud-migration-services/page.tsx',
    'app/cloud-migration/page.tsx',
    'app/cloud-security/page.tsx',
    'app/cloud-services/page.tsx',
    'app/community/page.tsx',
    'app/compliance/page.tsx'
  ];

  let fixedCount = 0;

  for (const file of problematicFiles) {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      if (fixSyntaxErrors(fullPath)) {
        console.log(`Fixed syntax errors in: ${file}`);
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');

const fixedCount = fixSpecificFiles();

console.log(`Fixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes completed!');