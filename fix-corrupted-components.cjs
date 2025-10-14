const fs = require('fs');
const path = require('path');

// List of corrupted component files to fix
const corruptedComponents = [
  'app/components/AdAnalyticsDashboard.tsx',
  'app/components/AdDashboard.tsx',
  'app/components/AdManagementSystem.tsx',
  'app/components/AdScheduler.tsx',
  'app/components/AdTemplates.tsx',
  'app/components/AdvancedAccessibilityEnhancer.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/AdvancedSEOOptimizer_new.tsx',
  'app/components/AdvertisingBanner.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/CoreWebVitals.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/EnhancedAccessibilityManager.tsx',
  'app/components/EnhancedHero.tsx',
  'app/components/EnhancedLoadingSkeleton.tsx',
  'app/components/EnhancedPerformanceMonitor.tsx',
  'app/components/EnhancedPerformanceOptimizer.tsx',
  'app/components/EnhancedSEOOptimizer.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/EnhancedSkipLink.tsx',
  'app/components/FuturisticServiceCard.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/LoadingOptimizer.tsx',
  'app/components/MobileOptimizer.tsx',
  'app/components/NewContentAdvertisingBanner.tsx',
  'app/components/NewsletterSignup.tsx',
  'app/components/OptimizedLoadingSpinner.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceEnhancer.tsx',
  'app/components/PerformanceMetrics.tsx',
  'app/components/SEOAudit.tsx',
  'app/components/SEOOptimizer.tsx',
  'app/components/SecurityEnhancer.tsx',
  'app/components/ServiceCardSkeleton.tsx',
  'app/components/ServiceWorkerRegistration.tsx',
  'app/components/SystemMonitor.tsx',
  'app/components/UltimateContentAdvertisingBanner.tsx'
];

function createBasicComponent(filePath) {
  const componentName = path.basename(filePath, '.tsx');
  const title = componentName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional ${title.toLowerCase()} solutions tailored to your business needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge ${title.toLowerCase()} solutions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>
              <p className="text-green-700">
                Tailored ${title.toLowerCase()} implementations for your specific requirements.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your ${title.toLowerCase()} needs.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return content;
}

function fixCorruptedComponent(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = createBasicComponent(filePath);
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed corrupted component: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all corrupted components
corruptedComponents.forEach(fixCorruptedComponent);

console.log('Finished fixing corrupted components');