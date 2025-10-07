import React from 'react';
import dynamic from 'next/dynamic';
import { UnifiedBanner, bannerConfigurations } from './components/UnifiedBannerSystem';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load heavy components
const UnifiedContentPromotion = dynamic(() => import('../components/UnifiedContentPromotion'), {
<<<<<<< HEAD
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const InteractiveAIROICalculator = dynamic(() => import('../components/InteractiveAIROICalculator'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const ContentShowcase = dynamic(() => import('../components/ContentShowcase'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg"></div>
});

const InteractiveContentShowcase2026 = dynamic(() => import('../components/InteractiveContentShowcase2026'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg"></div>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d8e1
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

<<<<<<< HEAD
export default function HomePageOptimized() {
=======
export default function OptimizedHomePage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-d8e1
  return (
    <div className="min-h-screen bg-white">
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
<<<<<<< HEAD
      {/* Unified Banner System */}
      <UnifiedBanner configurations={bannerConfigurations} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Enterprise with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our proven AI transformation methodology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
                Get Free AI Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d8e1
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-600">Efficiency Gains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprises Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI transformation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Strategy & Consulting</h3>
              <p className="text-gray-600">
                Develop comprehensive AI strategies aligned with your business objectives
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Autonomous Systems</h3>
              <p className="text-gray-600">
                Deploy self-managing AI systems that optimize and evolve independently
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics & Insights</h3>
              <p className="text-gray-600">
                Transform raw data into actionable insights with advanced AI analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Components */}
      <LazyWrapper>
        <UnifiedContentPromotion />
        <InteractiveAIROICalculator />
        <ContentShowcase />
        <InteractiveContentShowcase2026 />
      </LazyWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ enterprises that have achieved remarkable results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Download ROI Calculator
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d8e1
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}