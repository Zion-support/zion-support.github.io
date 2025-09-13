import React from 'react';
import { Metadata } from 'next';
import AdvancedAutomationSolutionsShowcase2025 from '../../components/AdvancedAutomationSolutionsShowcase2025';
import AdvancedAutomationSolutionsPromotionBanner2025 from '../../components/AdvancedAutomationSolutionsPromotionBanner2025';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import EnhancedErrorBoundary from '../../components/EnhancedErrorBoundary';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Advanced Automation Solutions 2025 - Revolutionary Business Automation',
  description: 'Transform your business with advanced automation solutions. Achieve 2,500% efficiency gains, 85% cost reduction, and 99.9% accuracy with our comprehensive automation platform.',
  keywords: [
    'automation solutions 2025',
    'business automation',
    'process automation',
    'intelligent automation',
    'robotic process automation',
    'cognitive automation',
    'workflow automation',
    'AI automation',
    'digital transformation',
    'operational excellence'
  ],
  openGraph: {
    title: 'Advanced Automation Solutions 2025 - Revolutionary Business Automation',
    description: 'Transform your business with advanced automation solutions. Achieve 2,500% efficiency gains and 85% cost reduction.',
    type: 'website',
    url: 'https://zion.tech/automation-solutions',
    images: [
      {
        url: '/og-automation-solutions-2025.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Automation Solutions 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Automation Solutions 2025',
    description: 'Transform your business with advanced automation solutions. Achieve 2,500% efficiency gains and 85% cost reduction.',
    images: ['/og-automation-solutions-2025.png'],
  },
  alternates: {
    canonical: 'https://zion.tech/automation-solutions',
  },
};

const AutomationSolutionsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <SEO 
              title="Advanced Automation Solutions 2025 - Revolutionary Business Automation"
              description="Transform your business with advanced automation solutions. Achieve 2,500% efficiency gains, 85% cost reduction, and 99.9% accuracy with our comprehensive automation platform."
              keywords="automation solutions 2025, business automation, process automation, intelligent automation, robotic process automation, cognitive automation, workflow automation, AI automation, digital transformation, operational excellence"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
              {/* Hero Section */}
              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      Advanced Automation
                      <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        Solutions 2025
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                      Revolutionary automation technologies transforming business operations with unprecedented 
                      efficiency gains, cost reductions, and operational excellence.
                    </p>
                  </div>
                </div>
              </section>

              {/* Promotion Banner */}
              <Suspense fallback={<LoadingSpinner />}>
                <AdvancedAutomationSolutionsPromotionBanner2025 />
              </Suspense>

              {/* Main Content Showcase */}
              <Suspense fallback={<LoadingSpinner />}>
                <AdvancedAutomationSolutionsShowcase2025 />
              </Suspense>

              {/* Additional Content Sections */}
              <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      Transform Your Business Today
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                      Our comprehensive automation platform delivers measurable results across all business functions, 
                      from operations to customer experience.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">📈</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">2,500% Efficiency</h3>
                      <p className="text-gray-300">
                        Achieve unprecedented efficiency gains with our intelligent automation solutions.
                      </p>
                    </div>

                    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">85% Cost Reduction</h3>
                      <p className="text-gray-300">
                        Dramatically reduce operational costs while improving quality and speed.
                      </p>
                    </div>

                    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">99.9% Accuracy</h3>
                      <p className="text-gray-300">
                        Eliminate human error with intelligent automation that learns and adapts.
                      </p>
                    </div>

                    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">10,000x Speed</h3>
                      <p className="text-gray-300">
                        Process tasks 10,000 times faster than traditional manual methods.
                      </p>
                    </div>

                    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">24/7 Operation</h3>
                      <p className="text-gray-300">
                        Run your business around the clock with autonomous automation systems.
                      </p>
                    </div>

                    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                      <p className="text-gray-300">
                        Leverage advanced AI to make intelligent decisions and optimize processes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </EnhancedErrorBoundary>
    </ErrorBoundary>
  );
};

export default AutomationSolutionsPage;