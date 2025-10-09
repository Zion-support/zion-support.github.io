'use client';
import React, { lazy } from 'react';
// Fallback component
const EmptyComponent = () => null;
// Lazy load heavy components - these may not exist, so make them optional
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UnifiedBanner = lazy(() =>
  import('./components/NewestContent2025Banner').catch(() =>
    import('./components/EmptyComponent').catch(() => ({ default: EmptyComponent }))
  )
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContentPromotion = lazy(() =>
  import('./components/UltimateBusinessIntelligence2025Banner').catch(() => {
    return { default: EmptyComponent } as { default: React.ComponentType };
  })
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContentShowcase = lazy(() =>
  import('./components/UltimateBusinessIntelligenceShowcase2025').catch(() => ({
    default: EmptyComponent
  }))
);
export default function OptimizedHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOOptimizer />
      <AccessibilityEnhancer>
        <div />
      </AccessibilityEnhancer>
      <PerformanceMonitor />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                AI Enterprise Transformation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  That Delivers Results
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Transform your enterprise with AI-powered solutions that deliver 300% ROI, 
                70% cost reduction, and 90% efficiency gains. Expert AI consulting, 
                autonomous systems, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  Get Your Free AI Assessment
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
                >
                  View Success Stories
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default OptimizedHomePage;
