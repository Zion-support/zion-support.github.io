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

// Common missing imports
const commonImports = [
  'Zap', 'FileText', 'Users', 'Clock', 'Shield', 'BarChart3', 'Calculator',
  'Target', 'CheckCircle', 'Globe', 'Sparkles', 'Star', 'Box', 'ArrowRight'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Skip if it's not a React component file
    if (!content.includes('export default function') || !content.includes('return;')) {
      return;
    }

    console.log(`Fixing ${filePath}...`);

    // Extract the function name
    const functionMatch = content.match(/export default function (\w+)/);
    if (!functionMatch) return;
    
    const functionName = functionMatch[1];
    
    // Find the orphaned objects after the return;
    const returnIndex = content.indexOf('return;');
    if (returnIndex === -1) return;
    
    // Extract everything after return; until the next const/let/var declaration
    const afterReturn = content.substring(returnIndex + 7);
    const nextDeclarationMatch = afterReturn.match(/\n\s*(const|let|var)\s+/);
    const nextDeclarationIndex = nextDeclarationMatch ? nextDeclarationMatch.index : afterReturn.length;
    
    const orphanedContent = afterReturn.substring(0, nextDeclarationIndex).trim();
    
    // Check if there are orphaned objects that should be features
    if (orphanedContent.includes('title:') && orphanedContent.includes('description:')) {
      // This looks like features array items
      const featuresArray = `const features = [${orphanedContent}];`;
      
      // Remove the orphaned content and add the features array
      content = content.substring(0, returnIndex + 7) + 
                '\n  ' + featuresArray + '\n\n' + 
                content.substring(returnIndex + 7 + nextDeclarationIndex);
    }
    
    // Fix the return statement to return proper JSX
    const jsxReturn = `return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${functionName.replace(/([A-Z])/g, ' $1').trim()} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${functionName.replace(/([A-Z])/g, ' $1').trim()} solutions powered by AI" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            {functionName.replace(/([A-Z])/g, ' $1').trim()}
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
  );`;
    
    content = content.replace(/return;/, jsxReturn);
    
    // Add missing imports if they're used in the content
    const existingImports = content.match(/import.*from ['"]lucide-react['"];?/);
    if (existingImports) {
      const importLine = existingImports[0];
      const currentImports = importLine.match(/\{([^}]+)\}/);
      if (currentImports) {
        const imports = currentImports[1].split(',').map(imp => imp.trim());
        const usedImports = commonImports.filter(imp => content.includes(`<${imp}`));
        const newImports = [...new Set([...imports, ...usedImports])];
        const newImportLine = `import { ${newImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importLine, newImportLine);
      }
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix page files...');
filesToFix.forEach(fixFile);
console.log('Finished fixing page files.');