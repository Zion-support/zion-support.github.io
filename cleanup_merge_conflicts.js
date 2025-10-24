const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the latest version
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let hasChanges = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictBuffer = [];
        hasChanges = true;
        continue;
      } else if (line.startsWith('=======')) {
        // Clear buffer for the first part, keep second part
        conflictBuffer = [];
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        // Add the conflict buffer (second part) to cleaned lines
        cleanedLines.push(...conflictBuffer);
        conflictBuffer = [];
        continue;
      }
      
      if (inConflict) {
        conflictBuffer.push(line);
      } else {
        cleanedLines.push(line);
      }
    }
    
    if (hasChanges) {
      const cleanedContent = cleanedLines.join('\n');
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const filesWithConflicts = [
  './src/utils/healthCheck.ts',
  './src/utils/securityEnhancer.ts',
  './src/utils/scheduledCleanup.ts',
  './src/utils/dataCleanup.ts',
  './src/utils/enhancedErrorMonitoring.ts',
  './src/utils/dataRecordManager.ts',
  './src/marketing-tools/page.tsx',
  './src/micro-saas/page.tsx',
  './src/micro-saas/page-original.tsx',
  './src/utils/accessibilityChecker.ts',
  './src/utils/analytics.ts',
  './src/nlp/page.tsx',
  './src/services-advertising/page.tsx',
  './src/it-infrastructure/page.tsx',
  './src/sitemap-page.tsx',
  './src/smart-analytics/page.tsx',
  './src/network-infrastructure/page.tsx',
  './src/sitemap.ts',
  './src/setupTests.tsx',
  './src/machine-learning/page.tsx',
  './src/task-manager-pro/page.tsx',
  './src/it-support/page.tsx',
  './src/robotics/page.tsx',
  './src/quantum-ai/page.tsx',
  './src/page-minimal.tsx',
  './src/page-optimized.tsx',
  './src/iot-edge/page.tsx',
  './src/quantum-computing/page.tsx',
  './src/it-services/page.tsx',
  './src/computer-vision/page.tsx',
  './src/hooks/usePerformanceMonitoring.ts',
  './src/hooks/useErrorMonitoring.ts',
  './src/hooks/usePerformance.ts',
  './src/hooks/usePerformanceOptimization.ts',
  './src/expense-tracker/page.tsx',
  './src/devops/page.tsx',
  './src/iot-edge-computing/page.tsx',
  './src/contact/page.tsx',
  './src/cybersecurity/page.tsx',
  './src/database-services/page.tsx',
  './src/blog/ai-2026-enterprise-breakthrough/page.tsx',
  './src/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  './src/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  './src/blog/ai-enterprise-transformation-2025/page.tsx',
  './src/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  './src/compliance/page.tsx',
  './src/case-studies/page.tsx',
  './src/business-intelligence/page.tsx',
  './src/components/Footer.tsx',
  './src/components/MicroSAASCard.tsx',
  './src/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  './src/blog/agent-release-runbooks-v2-2026/page.tsx',
  './src/ai-writing-assistant/page.tsx',
  './src/autonomous-systems/page.tsx',
  './src/blockchain/page.tsx',
  './src/analytics-tools/page.tsx',
  './src/blockchain-web3/page.tsx',
  './src/ai-workflow-automation/page.tsx',
  './src/ai-social-media-manager/page.tsx',
  './src/ai-mobile-app-development/page.tsx',
  './src/ai-scheduler/page.tsx',
  './src/ai-project-manager/page.tsx',
  './src/ai-seo-optimizer/page.tsx',
  './src/ai-marketing/page.tsx',
  './src/ai-services/page.tsx',
  './src/ai-fintech/page.tsx',
  './src/ai-financial-analyzer/page.tsx',
  './src/ai-healthcare/page.tsx',
  './src/ai-email-marketing/page.tsx',
  './src/ai-ecommerce-solutions/page.tsx',
  './src/ai-analytics-dashboard/page.tsx',
  './src/ai-content-generation/page.tsx',
  './src/ai-data-analytics/page.tsx',
  './src/ai-customer-support-bot/page.tsx',
  './src/ai-automation/page.tsx',
  './src/ai-crm/page.tsx',
  './app/utils/testUtils.ts',
  './app/utils/performanceEnhancer.ts',
  './app/utils/monitoring.ts',
  './app/components/utils/accessibilityUtils.ts',
  './app/components/EnhancedAnalytics.tsx',
  './App.tsx'
];

let cleanedCount = 0;
filesWithConflicts.forEach(file => {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      cleanedCount++;
    }
  }
});

console.log(`\nCleaned merge conflicts in ${cleanedCount} files.`);