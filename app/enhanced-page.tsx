import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '../components/EnhancedErrorBoundary';
import EnhancedSEO from '../components/EnhancedSEO';
import EnhancedLoadingSpinner from '../components/EnhancedLoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';

// Lazy load all components for better performance
const AI2026RevolutionaryBreakthroughUltimatePromotionBanner = lazy(() => 
  import('../components/AI2026RevolutionaryBreakthroughUltimatePromotionBanner')
);

const AI2026GlobalTransformation800ROISuccessBanner = lazy(() => 
  import('../components/AI2026GlobalTransformation800ROISuccessBanner')
);

const AI2026ImplementationFrameworkUltimatePromotionBanner = lazy(() => 
  import('../components/AI2026ImplementationFrameworkUltimatePromotionBanner')
);

const RevolutionaryContent2026Banner = lazy(() => 
  import('../components/RevolutionaryContent2026Banner')
);

const FeaturedContentShowcase2026 = lazy(() => 
  import('../components/FeaturedContentShowcase2026')
);

const NewContent2025UltimateShowcaseBanner = lazy(() => 
  import('../components/NewContent2025UltimateShowcaseBanner')
);

const RevolutionaryContent2025Showcase = lazy(() => 
  import('../components/RevolutionaryContent2025Showcase')
);

const UltimateContentDiscoveryWidget2025 = lazy(() => 
  import('../components/UltimateContentDiscoveryWidget2025')
);

const InteractiveAICalculator = lazy(() => 
  import('../components/InteractiveAICalculator')
);

const ROICalculator = lazy(() => 
  import('../components/ROICalculator')
);

const StructuredData = lazy(() => 
  import('../components/StructuredData')
);

const PerformanceMetrics = lazy(() => 
  import('../components/PerformanceMetrics')
);

const TechnologyStack = lazy(() => 
  import('../components/TechnologyStack')
);

// Component wrapper for lazy loading with error boundary
const LazyComponentWrapper: React.FC<{ children: React.ReactNode; fallback?: React.ReactNode }> = ({ 
  children, 
  fallback = <EnhancedLoadingSpinner variant="skeleton" message="Loading component..." /> 
}) => (
  <ErrorBoundary>
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export default function EnhancedHomePage() {
  return (
    <ErrorBoundary>
      <EnhancedSEO
        title="AI 2026 Revolutionary Breakthrough Technologies | Zion Tech Group"
        description="Discover cutting-edge AI technologies including Quantum-Neural Fusion AI, Synthetic Intelligence, and Consciousness-Level AI systems. Get 10,000% ROI with our AI 2026 Implementation Master Framework."
        keywords="AI 2026, artificial intelligence, quantum computing, neural networks, synthetic intelligence, consciousness AI, business automation, ROI calculator, AI implementation, breakthrough technologies"
        type="website"
        tags={["AI", "Artificial Intelligence", "Quantum Computing", "Business Automation", "ROI Calculator"]}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Performance Monitor - only show in development */}
        {process.env.NODE_ENV === 'development' && (
          <PerformanceMonitor showMetrics={true} />
        )}

        {/* AI 2026 Revolutionary Breakthrough Ultimate Promotion Banner */}
        <LazyComponentWrapper>
          <AI2026RevolutionaryBreakthroughUltimatePromotionBanner />
        </LazyComponentWrapper>

        {/* AI 2026 Global Transformation 800% ROI Success Banner */}
        <LazyComponentWrapper>
          <AI2026GlobalTransformation800ROISuccessBanner />
        </LazyComponentWrapper>

        {/* AI 2026 Implementation Framework Ultimate Promotion Banner */}
        <LazyComponentWrapper>
          <AI2026ImplementationFrameworkUltimatePromotionBanner />
        </LazyComponentWrapper>

        {/* Interactive AI ROI Calculator */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
          <LazyComponentWrapper fallback={<EnhancedLoadingSpinner variant="dots" message="Loading AI Calculator..." size="lg" />}>
            <InteractiveAICalculator />
          </LazyComponentWrapper>
        </section>

        {/* Revolutionary Content 2026 Banner */}
        <LazyComponentWrapper>
          <RevolutionaryContent2026Banner />
        </LazyComponentWrapper>

        {/* Featured Content Showcase 2026 */}
        <LazyComponentWrapper>
          <FeaturedContentShowcase2026 />
        </LazyComponentWrapper>

        {/* New Content 2025 Ultimate Showcase Banner */}
        <LazyComponentWrapper>
          <NewContent2025UltimateShowcaseBanner />
        </LazyComponentWrapper>

        {/* Revolutionary Content 2025 Showcase */}
        <LazyComponentWrapper>
          <RevolutionaryContent2025Showcase />
        </LazyComponentWrapper>

        {/* Ultimate Content Discovery Widget 2025 */}
        <LazyComponentWrapper>
          <UltimateContentDiscoveryWidget2025 />
        </LazyComponentWrapper>

        {/* Additional Performance Components - Lazy loaded */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Performance & Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <LazyComponentWrapper fallback={<EnhancedLoadingSpinner variant="pulse" message="Loading ROI Calculator..." />}>
                <ROICalculator />
              </LazyComponentWrapper>
              
              <LazyComponentWrapper fallback={<EnhancedLoadingSpinner variant="pulse" message="Loading Performance Metrics..." />}>
                <PerformanceMetrics />
              </LazyComponentWrapper>
            </div>
          </div>
        </section>

        {/* Technology Stack - Lazy loaded */}
        <LazyComponentWrapper fallback={<EnhancedLoadingSpinner variant="skeleton" message="Loading Technology Stack..." />}>
          <TechnologyStack />
        </LazyComponentWrapper>

        {/* Structured Data - Lazy loaded */}
        <LazyComponentWrapper>
          <StructuredData />
        </LazyComponentWrapper>
      </div>
    </ErrorBoundary>
  );
}