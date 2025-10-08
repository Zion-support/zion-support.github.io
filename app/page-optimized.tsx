import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOOptimizer from './components/SEOOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Fallback component
const EmptyComponent = () => null;

// Lazy load heavy components - these may not exist, so make them optional
const UnifiedBanner = lazy(() => import('./components/NewestContent2025Banner').catch(() => ({ default: EmptyComponent })));

const ContentPromotion = lazy(() => import('./components/UltimateBusinessIntelligence2025Banner').catch(() => ({ default: EmptyComponent })));

const ContentShowcase = lazy(() => import('./components/UltimateBusinessIntelligenceShowcase2025').catch(() => ({ default: EmptyComponent })));

export default function OptimizedHomePage() {
  return (

    <>

      <Helmet>

        <title>Zion Tech Group</title>

        <meta name="description" content="Advanced AI and IT Solutions" />

      </Helmet>

      <AccessibilityEnhancer>
      <div className="min-h-screen bg-white">
        <SEOOptimizer />
        <PerformanceMonitor />
        
        {/* Unified Banner System */}
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>}>
          <UnifiedBanner />
        </Suspense>
        
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
                  <Link to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    Get Your Free AI Assessment
                  </Link>
                  <Link to="/case-studies"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
                  >
                    View Success Stories
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Content Showcase */}
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>}>
            <ContentShowcase />
          </Suspense>
          
          {/* Content Promotion */}
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>}>
            <ContentPromotion />
          </Suspense>
        </main>
      </div>
    </AccessibilityEnhancer>
    </>
  );
}