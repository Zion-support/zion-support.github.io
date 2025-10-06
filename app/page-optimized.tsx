import React from 'react';
import dynamic from 'next/dynamic';
import { UnifiedBanner, bannerConfigurations } from './components/UnifiedBannerSystem';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load heavy components
const UnifiedContentPromotion = dynamic(() => import('../components/UnifiedContentPromotion'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const InteractiveAIROICalculator = dynamic(() => import('../components/InteractiveAIROICalculator'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
});

const ContentShowcase = dynamic(() => import('../components/ContentShowcase'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />
});

const InteractiveContentShowcase2026 = dynamic(() => import('../components/InteractiveContentShowcase2026'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />
});

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
};

export default function OptimizedHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Enterprise with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our proven AI transformation methodology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Your Free AI Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Banner System */}
      <LazyWrapper>
        <UnifiedBanner configurations={bannerConfigurations} />
      </LazyWrapper>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your AI ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the potential return on investment for your AI transformation project
            </p>
          </div>
          <LazyWrapper>
            <InteractiveAIROICalculator />
          </LazyWrapper>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest AI Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our comprehensive collection of AI guides, case studies, and implementation resources
            </p>
          </div>
          <LazyWrapper>
            <ContentShowcase />
          </LazyWrapper>
        </div>
      </section>

      {/* Interactive Content Showcase 2026 */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 2026: The Future is Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge AI technologies and strategies that will define the next decade
            </p>
          </div>
          <LazyWrapper>
            <InteractiveContentShowcase2026 />
          </LazyWrapper>
        </div>
      </section>

      {/* Unified Content Promotion */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazyWrapper>
            <UnifiedContentPromotion />
          </LazyWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of successful enterprises that have already transformed their operations with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}