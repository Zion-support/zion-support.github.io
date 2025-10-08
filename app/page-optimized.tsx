import React from 'react';
import { lazy } from 'react';
import SEOOptimizer from './components/SEOOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Fallback component
const EmptyComponent = () => null;

// Lazy load heavy components - these may not exist, so make them optional
const UnifiedBanner = lazy(() => import('./components/NewestContent2025Banner').catch(() => import('./components/EmptyComponent').catch(() => ({ default: EmptyComponent }))));

const ContentPromotion = lazy(() => import('./components/UltimateBusinessIntelligence2025Banner').catch(() => ({ default: EmptyComponent })));

const ContentShowcase = lazy(() => import('./components/UltimateBusinessIntelligenceShowcase2025').catch(() => ({ default: EmptyComponent })));

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function OptimizedHomePage() {
  return (
    <AccessibilityEnhancer>
      <div className="min-h-screen bg-white">
        <SEOOptimizer  />
        <PerformanceMonitor  />
        
        {/* Unified Banner System */}
        <UnifiedBanner  />
        
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

          {/* Content Showcase */}
          <ContentShowcase  />
          
          {/* Content Promotion */}
          <ContentPromotion  />
        </main>
      </div>
    </AccessibilityEnhancer>
  );
}