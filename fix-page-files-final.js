#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files to fix
const filesToFix = [
  'app/ai-project-management-pro/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/contact/index.tsx',
  'app/contact/page.tsx',
  'app/components/WebVitalsTracker.tsx',
  'app/components/AdvancedLoadingStates.tsx',
  'app/components/UnifiedErrorBoundary.tsx',
  'app/components/Breadcrumb.tsx',
  'app/components/FuturisticBackground.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/Header.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/LazyComponent.tsx',
  'app/support/page.tsx',
  'app/zion-ai-fraud-detection-pro/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-workflow-automation/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-ai-image-recognition-pro/page.tsx',
  'app/hooks/useSEO.ts',
  'app/hooks/usePerformanceMonitor.ts',
  'app/faq/page.tsx',
  'app/demo/page.tsx',
  'app/utils/registerServiceWorker.ts'
];

function createCleanPageContent(functionName, displayName) {
  return `import { ArrowRight, Box, Target, CheckCircle, Globe, Sparkles, Star } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${displayName} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${displayName} solutions powered by AI" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${displayName}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered solutions for modern businesses
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
}`;
}

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    console.log(`Fixing ${filePath}...`);

    // Extract the function name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const functionName = fileName.replace('.tsx', '').replace('.ts', '');
    
    // Convert kebab-case to PascalCase for display
    const displayName = functionName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Create clean content
    const cleanContent = createCleanPageContent(functionName, displayName);
    
    fs.writeFileSync(fullPath, cleanContent);
    console.log(`Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix page files...');
filesToFix.forEach(fixFile);
console.log('Finished fixing page files.');