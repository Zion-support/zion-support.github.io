const fs = require('fs');
const path = require('path');

// List of files that need import cleanup
const filesToClean = [
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/api-docs/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/components/About.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/EnhancedNavigation.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/FuturisticCard.tsx',
  'app/components/ProductionErrorBoundary.tsx',
  'app/components/Sidebar.tsx',
  'app/docs/page.tsx',
  'app/DynamicPageLoader.tsx',
  'app/it-services/page.tsx',
  'app/pages/HomePage.tsx',
  'app/status/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-workflow-automation/page.tsx'
];

function cleanImports(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports - only keep the ones that are actually used
    const usedImports = [
      'Helmet',
      'ArrowRight',
      'CheckCircle',
      'Star',
      'Shield',
      'Brain',
      'BarChart',
      'MessageSquare',
      'Globe',
      'Zap',
      'Clock'
    ];
    
    // Create a clean import statement with only used imports
    const cleanImport = `import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Shield, Brain, BarChart, MessageSquare, Globe, Zap, Clock } from 'lucide-react';`;
    
    // Replace the import section
    content = content.replace(
      /import React from 'react';\nimport { Helmet } from 'react-helmet-async';\nimport { [^}]+ } from 'lucide-react';/,
      cleanImport
    );
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Cleaned imports for ${filePath}`);
    
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Clean all files
console.log('Starting to clean up unused imports...');
filesToClean.forEach(cleanImports);
console.log('Finished cleaning imports!');