import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

// Import working components only
import UltimateAutomationRevolution2025Banner from '../components/UltimateAutomationRevolution2025Banner';
import UltimateAutomationRevolution2025Showcase from '../components/UltimateAutomationRevolution2025Showcase';

// Lazy load other components
const InteractiveTechTrends2026 = lazy(() => import('../components/InteractiveTechTrends2026'));
const UltimateAIAssistant2026 = lazy(() => import('../components/UltimateAIAssistant2026'));
const AdvancedPerformanceMonitor2026 = lazy(() => import('../components/AdvancedPerformanceMonitor2026'));
const ContentPromotionBanner = lazy(() => import('../components/ContentPromotionBanner'));
const NewContentBanner = lazy(() => import('../components/NewContentBanner'));
const AccessibilityEnhancer = lazy(() => import('../components/AccessibilityEnhancer'));

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough"
        description="Discover the revolutionary AI automation strategies that delivered 50,000% ROI for Fortune 500 companies. Complete implementation guide with real case studies and proven frameworks."
        keywords="AI automation, 50000% ROI, Fortune 500 success, AI implementation, automation strategy, business intelligence, AI transformation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Ultimate Automation Revolution 2025 Banner - TOP PRIORITY */}
        <UltimateAutomationRevolution2025Banner />
        
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025: The Ultimate Automation Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the revolutionary AI automation strategies that delivered 50,000% ROI for Fortune 500 companies. 
              Complete implementation guide with real case studies and proven frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Read the Complete Guide
              </Link>
              <Link 
                href="/fortune-500-ultimate-automation-50000-roi-success-story"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Success Story
              </Link>
            </div>
          </section>

          {/* Ultimate Automation Revolution 2025 Showcase */}
          <UltimateAutomationRevolution2025Showcase />

          {/* Content Promotion Banners */}
          <section className="py-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Content Promotion Banners
            </h2>
            <Suspense fallback={<LoadingSpinner />}>
              <ContentPromotionBanner />
            </Suspense>
          </section>

          {/* New Content Banner */}
          <section className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <NewContentBanner />
            </Suspense>
          </section>

          {/* Interactive Tech Trends 2026 */}
          <section className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <InteractiveTechTrends2026 />
            </Suspense>
          </section>

          {/* Ultimate AI Assistant 2026 */}
          <section className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <UltimateAIAssistant2026 />
            </Suspense>
          </section>

          {/* Advanced Performance Monitor 2026 */}
          <section className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <AdvancedPerformanceMonitor2026 />
            </Suspense>
          </section>

          {/* Accessibility Enhancer */}
          <Suspense fallback={<LoadingSpinner />}>
            <AccessibilityEnhancer />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}