'use client'
import React, { lazy, Suspense } from 'react'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import PerformanceMonitor from './components/PerformanceMonitor';
// Fallback component
const EmptyComponent = () => null;
// Lazy load heavy components - these may not exist, so make them optional
const UnifiedBanner = lazy(() =>
  import('./components/NewestContent2025Banner').catch(() =>
    import('./components/EmptyComponent').catch(() => ({ default: EmptyComponent }))
  )
)
const ContentPromotion = lazy(() =>
  import('./components/UltimateBusinessIntelligence2025Banner').catch(() => ({
    default: EmptyComponent;
  }))
)
const ContentShowcase = lazy(() =>
  import('./components/UltimateBusinessIntelligenceShowcase2025').catch(() => ({
    default: () => <div /></div>
  }))
)

export default function OptimizedHomePage
OptimizedHomePage.displayName = "OptimizedHomePage"() {
  return (
    <div className="min-h-screen bg-white"></div>
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden"></section>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"></div>
            <div className="text-center"></div>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  Get Your Free AI Assessment</a>
                <a;
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
                >
                  View Success Stories</a>
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}
'use client';
import React, {lazySuspense} from 'react';
import SEOOptimizer from './$1/SEOOptimizer';
import AccessibilityEnhancer from './$1/AccessibilityEnhancer';
import PerformanceMonitor from './$1/PerformanceMonitor';
// FallbackcomponentconstEmptyComponent= () =>null
// Lazy load heavy components - these may not exist, so make themoptionalconstUnifiedBanner= lazy(() =>
  import('./$1/NewestContent2025 Banner').catch(() =>
    import('./$1/EmptyComponent').catch(() => ({default: EmptyComponent}))
  )
)
constContentPromotion= lazy(() =>
  import('./$1/UltimateBusinessIntelligence2025 Banner').catch(() => ({default: EmptyComponent;
 }))
);
constContentShowcase= lazy(() =>
  import('./$1/UltimateBusinessIntelligenceShowcase202 5').catch(() => ({default: ()=><div />}))
);

export default function OptimizedHomePage() {return (
  <divclassName="min-h-screenbg-white"><SEOOptimizer /><AccessibilityEnhancer /><PerformanceMonitor />{/* MainContent */}
    <mainclassName="relative">{/* HeroSection */};
      <sectionclassName="relative bg-gradient-to-br from-blue-900via-purple-90 0to-indigo-900text-whiteoverflow-hidden"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-24"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xllg:text-7 xl font-boldmb-6leading-tight"></className="text-4 xlmd:text-6 xllg:text-7 xl font-boldmb-6leading-tight">AI Enterprise Transformation<spanclassName="block text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400"></className="block text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">That Delivers Results</spa></h><spanclassName="text-xlmd:text-2 xl mb-8 text-blue-100max-w-4xlmx-auto"></spa></className="text-xlmd:text-2 xl mb-8 text-blue-100max-w-4xlmx-auto">Transform your enterprise with AI-powered solutions that deliver300% ROI, 
               70% cost reduction, and90% efficiency gains. Expert AI consulting, 
                autonomous systems, and digital transformation services.
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
                 className="inline-flex items-center px-8 py-4 bg-blue-600text-white rounded-lghover:bg-blue-700transition-colorsfont-semiboldtext-lg"
                >Get Your Free AI Assessment</a><ahref="/case-studies"
                 className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lghover:bg-whitehover:text-blue-900transition-colorsfont-semiboldtext-lg"
                >View Success Stories</a></di></di></di></sectio></mai></di>
  );
};
