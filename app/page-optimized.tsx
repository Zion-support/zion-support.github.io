import React from 'react';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';

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
  },
};

export default function OptimizedHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOOptimizer />
      <AccessibilityEnhancer>
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

          {/* Features Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Transform Your Enterprise with AI
                </h2>
                <p className="text-xl text-gray-600">
                  Proven solutions delivering measurable results
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-4">300% ROI</h3>
                  <p className="text-gray-600">
                    Achieve unprecedented returns on investment through AI-powered automation and optimization.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold mb-4">70% Cost Reduction</h3>
                  <p className="text-gray-600">
                    Dramatically reduce operational costs through intelligent process automation.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4">90% Efficiency Gains</h3>
                  <p className="text-gray-600">
                    Supercharge your operations with AI-driven workflows and decision-making.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-blue-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8">
                Join hundreds of companies already experiencing the power of AI transformation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </section>
        </main>
      </AccessibilityEnhancer>
    </div>
  );
}
