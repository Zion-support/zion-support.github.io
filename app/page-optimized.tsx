import React, { Suspense } from 'react';
// import ErrorBoundary from '../components/ErrorBoundary';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import MobileResponsiveLayout from '../components/MobileResponsiveLayout';
import EnhancedNavigation from '../components/EnhancedNavigation';
import ContentManager from '../components/ContentManager';
import InteractiveFeatures from '../components/InteractiveFeatures';

// Lazy load heavy components
const ROICalculator = React.lazy(() => import('../components/ROICalculator'));
const StructuredData = React.lazy(() => import('../components/StructuredData'));

const HomePage: React.FC = () => {
  const seoData = {
    title: 'AI Innovation Hub 2025 - Revolutionary AI Solutions with 5,000% ROI',
    description: 'Discover the most advanced AI solutions delivering 5,000% to 25,000% ROI. Fortune 500 success stories, implementation guides, and cutting-edge AI technology for enterprise transformation.',
    keywords: [
      'AI Innovation',
      'Artificial Intelligence',
      'ROI Calculator',
      'Business Intelligence',
      'AI Implementation',
      'Enterprise AI',
      'Quantum AI',
      'Autonomous Systems',
      'AI Transformation',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'AI Solutions',
      'AI Consulting',
      'AI Technology',
      'AI Revolution',
      'AI Breakthrough',
      'AI Success Stories',
      'AI Case Studies',
      'AI Resources'
    ],
    canonicalUrl: 'https://zion.app',
    ogImage: '/images/ai-innovation-hub-og.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI Innovation Hub',
      url: 'https://zion.app',
      description: 'Revolutionary AI solutions delivering unprecedented ROI and business transformation',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://zion.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  };

  return (
    <>
      <SEOOptimizer seoData={seoData}>
        <PerformanceOptimizer
          enableMetrics={true}
          enableLazyLoading={true}
          enablePreloading={true}
        >
          <MobileResponsiveLayout
            enableMobileOptimization={true}
            enableTouchGestures={true}
            enableSwipeNavigation={true}
          >
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
              {/* Navigation */}
              <EnhancedNavigation />

              {/* Hero Section */}
              <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Revolutionary AI Solutions
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Delivering 5,000% ROI
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                    Transform your enterprise with cutting-edge AI technology. Join Fortune 500 companies 
                    achieving unprecedented success through our proven AI implementation framework.
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-green-600">5,000%</div>
                      <div className="text-gray-600">Average ROI</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-blue-600">$12.8B+</div>
                      <div className="text-gray-600">Annual Savings</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-purple-600">2,400%</div>
                      <div className="text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-orange-600">99.7%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/calculator"
                      className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Calculate Your ROI
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="/content"
                      className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Explore Content
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>

              {/* Content Hub */}
              <section className="py-20 bg-white">
                <ContentManager
                  showFilters={true}
                  showMetrics={true}
                  maxItems={12}
                />
              </section>

              {/* Features Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Why Choose AI Innovation Hub?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Our comprehensive AI solutions deliver measurable results with proven methodologies 
                      and cutting-edge technology.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Implementation</h3>
                      <p className="text-gray-600">
                        Deploy AI solutions in 6-12 months with our proven framework and expert support.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">📊</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven ROI</h3>
                      <p className="text-gray-600">
                        Achieve 5,000% to 25,000% ROI with our verified success stories and case studies.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">🔧</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                      <p className="text-gray-600">
                        Get 24/7 support from our AI experts and implementation specialists.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
                      <p className="text-gray-600">
                        Tailored AI solutions designed specifically for your business needs and goals.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-Edge Technology</h3>
                      <p className="text-gray-600">
                        Access the latest AI technologies including quantum computing and neural networks.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                      <p className="text-gray-600">
                        Bank-level security and compliance with industry standards and regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Success Stories
                    </h2>
                    <p className="text-xl text-gray-600">
                      See how Fortune 500 companies are transforming with our AI solutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 mb-2">5,000% ROI</div>
                      <p className="text-gray-700 mb-4">
                        "AI Innovation Hub transformed our business intelligence capabilities. 
                        We achieved 5,000% ROI within 18 months."
                      </p>
                      <div className="font-semibold text-gray-900">- Fortune 500 CEO</div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$12.8B Savings</div>
                      <p className="text-gray-700 mb-4">
                        "The AI automation solutions saved us $12.8B annually while improving 
                        efficiency by 2,400%."
                      </p>
                      <div className="font-semibold text-gray-900">- Global Manufacturing CTO</div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-2">25,000% ROI</div>
                      <p className="text-gray-700 mb-4">
                        "Quantum AI integration delivered unprecedented results. Our quantum 
                        neural fusion achieved 25,000% ROI."
                      </p>
                      <div className="font-semibold text-gray-900">- Tech Innovation Director</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Join thousands of companies achieving unprecedented success with AI Innovation Hub.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Get Started Today
                    </a>
                    <a
                      href="/calculator"
                      className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Calculate Your ROI
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">AI Innovation Hub</h3>
                      <p className="text-gray-400">
                        Revolutionary AI solutions delivering unprecedented ROI and business transformation.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Content</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="/blog" className="hover:text-white">Blog</a></li>
                        <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
                        <li><a href="/resources" className="hover:text-white">Resources</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Services</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="/services/business-intelligence" className="hover:text-white">Business Intelligence</a></li>
                        <li><a href="/services/automation" className="hover:text-white">Automation</a></li>
                        <li><a href="/services/quantum-ai" className="hover:text-white">Quantum AI</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 AI Innovation Hub. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </div>

            {/* Interactive Features */}
            <InteractiveFeatures
              enableROICalculator={true}
              enableContentRecommendations={true}
              enableLiveChat={true}
              enableProgressTracking={true}
            />

            {/* Lazy Loaded Components */}
            <Suspense fallback={<div>Loading...</div>}>
              <ROICalculator />
              <StructuredData />
            </Suspense>
          </MobileResponsiveLayout>
        </PerformanceOptimizer>
      </SEOOptimizer>
    </>
  );
};

export default HomePage;