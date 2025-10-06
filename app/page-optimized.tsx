import React from 'react';
import dynamic from 'next/dynamic';
import { UnifiedBanner, bannerConfigurations } from './components/UnifiedBannerSystem';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load heavy components
const UnifiedContentPromotion = dynamic(() => import('../components/UnifiedContentPromotion'), {
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
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI Enterprise Transformation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['https://ziontechgroup.com/og-image.jpg']
  }
};

export default function OptimizedHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Unified Banner System */}
      <UnifiedBanner configurations={bannerConfigurations} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Achieve 300% ROI with our proven AI solutions. Transform your business with autonomous systems, 
              intelligent automation, and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-600">Efficiency Gains</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your enterprise operations and drive measurable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic AI consulting to identify opportunities, develop roadmaps, and implement solutions that drive real business value.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6">
                Deploy intelligent autonomous systems that operate 24/7, making decisions and optimizing processes without human intervention.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-6">
                Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
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
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already achieved remarkable results with our AI solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Download ROI Calculator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}