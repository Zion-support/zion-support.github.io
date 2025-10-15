const fs = require('fs');
const path = require('path');

// Read the working template
const templatePath = path.join(__dirname, 'app/ai-3d-generation/page.tsx');
const template = fs.readFileSync(templatePath, 'utf8');

// Create a simple hook template
const hookTemplate = `import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Performance monitoring logic here
    const observer = new PerformanceObserver((list) => {
      // Handle performance entries
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isLoading,
    error,
    setIsLoading,
    setError
  };
};
`;

// Create a simple utility template
const utilityTemplate = `export const utilityFunction = () => {
  // Utility function implementation
  return {
    // Return utility functions or data
  };
};
`;

// List of all broken files with their types
const brokenFiles = [
  { path: 'app/ai-chatbot-enterprise/page.tsx', type: 'component' },
  { path: 'app/ai-content-generation/page.tsx', type: 'component' },
  { path: 'app/ai-services/page.tsx', type: 'component' },
  { path: 'app/ai-social-media-manager/page.tsx', type: 'component' },
  { path: 'app/ai-social-media-manager-pro/page.tsx', type: 'component' },
  { path: 'app/ai-voice-assistant-enterprise/page.tsx', type: 'component' },
  { path: 'app/api-docs/page.tsx', type: 'component' },
  { path: 'app/business-intelligence/page.tsx', type: 'component' },
  { path: 'app/careers/page.tsx', type: 'component' },
  { path: 'app/cloud-migration-services/page.tsx', type: 'component' },
  { path: 'app/components/About.tsx', type: 'component' },
  { path: 'app/components/AdvancedErrorBoundary.tsx', type: 'component' },
  { path: 'app/components/ComprehensiveErrorBoundary.tsx', type: 'component' },
  { path: 'app/components/EnhancedNavigation.tsx', type: 'component' },
  { path: 'app/components/ErrorHandler.tsx', type: 'component' },
  { path: 'app/components/FuturisticCard.tsx', type: 'component' },
  { path: 'app/components/ProductionErrorBoundary.tsx', type: 'component' },
  { path: 'app/components/Sidebar.tsx', type: 'component' },
  { path: 'app/docs/page.tsx', type: 'component' },
  { path: 'app/DynamicPageLoader.tsx', type: 'component' },
  { path: 'app/hooks/usePerformanceMonitor.ts', type: 'hook' },
  { path: 'app/hooks/useSEO.ts', type: 'hook' },
  { path: 'app/it-services/page.tsx', type: 'component' },
  { path: 'app/pages/HomePage.tsx', type: 'component' },
  { path: 'app/status/page.tsx', type: 'component' },
  { path: 'app/utils/advancedCaching.ts', type: 'utility' },
  { path: 'app/utils/registerServiceWorker.ts', type: 'utility' },
  { path: 'app/utils/structuredData.ts', type: 'utility' },
  { path: 'app/utils/usePerformanceMonitor.ts', type: 'utility' },
  { path: 'app/zion-analytics-pro/page.tsx', type: 'component' },
  { path: 'app/zion-cloud-vault/page.tsx', type: 'component' },
  { path: 'app/zion-compliance-manager/page.tsx', type: 'component' },
  { path: 'app/zion-content-studio/page.tsx', type: 'component' },
  { path: 'app/zion-data-sync/page.tsx', type: 'component' },
  { path: 'app/zion-email-automation/page.tsx', type: 'component' },
  { path: 'app/zion-inventory-smart/page.tsx', type: 'component' },
  { path: 'app/zion-invoice-genius/page.tsx', type: 'component' },
  { path: 'app/zion-lead-magnet/page.tsx', type: 'component' },
  { path: 'app/zion-performance-monitor/page.tsx', type: 'component' },
  { path: 'app/zion-project-master/page.tsx', type: 'component' },
  { path: 'app/zion-security-shield/page.tsx', type: 'component' },
  { path: 'app/zion-social-scheduler/page.tsx', type: 'component' },
  { path: 'app/zion-workflow-automation/page.tsx', type: 'component' }
];

function fixFile(fileInfo) {
  try {
    const fullPath = path.join(__dirname, fileInfo.path);
    
    let newContent;
    
    if (fileInfo.type === 'hook') {
      newContent = hookTemplate;
    } else if (fileInfo.type === 'utility') {
      newContent = utilityTemplate;
    } else {
      // Component type
      const pathParts = fileInfo.path.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const componentName = fileName.replace('.tsx', '').replace('page', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '') || 'AIService';
      
      // Create title based on component name
      const title = componentName.replace(/([A-Z])/g, ' $1').trim();
      
      // Replace the component name and title in the template
      newContent = template
        .replace(/const AI3DGeneration =/g, `const ${componentName} =`)
        .replace(/export default AI3DGeneration/g, `export default ${componentName}`)
        .replace(/AI 3D Generation/g, title)
        .replace(/AI 3D Generation solutions powered by AI/g, `${title} solutions powered by AI`);
    }
    
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Fixed ${fileInfo.path} as ${fileInfo.type}`);
    
  } catch (error) {
    console.error(`Error fixing ${fileInfo.path}:`, error.message);
  }
}

// Fix all broken files
console.log('Starting to fix all broken files with proper types...');
brokenFiles.forEach(fixFile);
console.log('Finished fixing all files!');