import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
// import ErrorBoundary from './ErrorBoundary';
import SEO from './SEO';
import LoadingSpinner from './LoadingSpinner';

// Lazy load heavy components for better performance
const ROICalculator = lazy(() => import('./ROICalculator'));
const StructuredData = lazy(() => import('./StructuredData'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const TechnologyStack = lazy(() => import('./TechnologyStack'));

// Core promotional components (optimized selection)
import NewContent2026PromotionBanner from './NewContent2026PromotionBanner';
import QuantumAI2026BreakthroughBanner from './QuantumAI2026BreakthroughBanner';
import ComprehensiveContentShowcase2026 from './ComprehensiveContentShowcase2026';
import InteractiveContentDiscoveryWidget from './InteractiveContentDiscoveryWidget';

// Advanced AI components (lazy loaded for performance)
const AdvancedContentRecommendationEngine = lazy(() => import('./AdvancedContentRecommendationEngine'));
const RealTimePerformanceDashboard = lazy(() => import('./RealTimePerformanceDashboard'));
const IntelligentSearchEngine = lazy(() => import('./IntelligentSearchEngine'));
const AdvancedAIAssistant = lazy(() => import('./AdvancedAIAssistant'));
const BusinessIntelligenceDashboard = lazy(() => import('./BusinessIntelligenceDashboard'));
const AdvancedSecurityMonitor = lazy(() => import('./AdvancedSecurityMonitor'));
const AdvancedAnalyticsEngine = lazy(() => import('./AdvancedAnalyticsEngine'));
const AutomationWorkflowEngine = lazy(() => import('./AutomationWorkflowEngine'));
const EnterpriseDataManagement = lazy(() => import('./EnterpriseDataManagement'));
const APIManagementSystem = lazy(() => import('./APIManagementSystem'));

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions | 400% ROI Guaranteed',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services with proven 400% ROI results.',
  keywords: [
    'AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 
    'enterprise solutions', 'digital transformation', 'AI ROI', 'quantum AI',
    'AI implementation', 'business automation', 'AI consulting'
  ],
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions. 400% ROI guaranteed.',
    type: 'website',
    url: 'https://zion.app',
    images: [
      {
        url: 'https://zion.app/images/zion-tech-group-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions. 400% ROI guaranteed.',
    images: ['https://zion.app/images/zion-tech-group-twitter.jpg']
  }
};

const HomePageOptimized = () => {
  return (
    <>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions | 400% ROI Guaranteed"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services with proven 400% ROI results."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation, AI ROI, quantum AI, AI implementation, business automation, AI consulting"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* Hero Section - Enhanced with better CTAs */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="block text-yellow-400">AI-Powered Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Achieve <strong>400% ROI in 90 days</strong> with our proven AI automation, 
                cloud infrastructure, and micro SaaS solutions. Join 500+ companies already transforming their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
                >
                  Get 400% ROI Guarantee →
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Success Stories
                </Link>
              </div>
              <div className="mt-8 text-sm opacity-90">
                ✓ Free AI Strategy Consultation ✓ 30-Day Money-Back Guarantee ✓ 24/7 Support
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics - Enhanced with more compelling metrics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Companies Transformed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
                <div className="text-gray-600">Total Savings Generated</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">90</div>
                <div className="text-gray-600">Days to ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced with better descriptions */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Proven Solutions</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Choose from our suite of AI-powered solutions, each designed to deliver measurable results and guaranteed ROI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent automation solutions that streamline operations and boost productivity across your organization. 
                  <strong>Average 340% ROI in 6 months.</strong>
                </p>
                <div className="mb-4 text-sm text-green-600 font-semibold">
                  ✓ Process automation ✓ Workflow optimization ✓ Cost reduction
                </div>
                <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable, secure cloud solutions designed to support your business growth and digital transformation.
                  <strong>Reduce costs by 60% while improving performance.</strong>
                </p>
                <div className="mb-4 text-sm text-green-600 font-semibold">
                  ✓ Scalable architecture ✓ Enhanced security ✓ Cost optimization
                </div>
                <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-4">
                  Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
                  <strong>Generate recurring revenue streams.</strong>
                </p>
                <div className="mb-4 text-sm text-green-600 font-semibold">
                  ✓ Custom development ✓ Revenue generation ✓ Scalable solutions
                </div>
                <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Optimized Content Promotion Banners - Reduced to most effective ones */}
        <div className="space-y-0">
          <NewContent2026PromotionBanner />
          <QuantumAI2026BreakthroughBanner />
          <ComprehensiveContentShowcase2026 />
          <InteractiveContentDiscoveryWidget />
        </div>

        {/* Lazy-loaded Advanced AI Components */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading AI Components..." />}>
          <AdvancedContentRecommendationEngine />
          <RealTimePerformanceDashboard />
          <IntelligentSearchEngine />
          <AdvancedAIAssistant />
          <BusinessIntelligenceDashboard />
          <AdvancedSecurityMonitor />
          <AdvancedAnalyticsEngine />
          <AutomationWorkflowEngine />
          <EnterpriseDataManagement />
          <APIManagementSystem />
        </Suspense>

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ companies that have achieved 400% ROI with our AI solutions. 
              Get your free consultation and ROI projection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/roi-calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." />}>
          <StructuredData 
            type="Organization" 
            data={{
              name: "Zion Tech Group",
              description: "Transforming businesses through cutting-edge technology solutions",
              url: "https://zion.app",
              logo: "https://zion.app/images/zion-tech-group-logo.png",
              sameAs: [
                "https://twitter.com/ZionTechGroup",
                "https://linkedin.com/company/zion-tech-group"
              ]
            }} 
          />
          <StructuredData 
            type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://zion.app",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://zion.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />
        </Suspense>
      </div>
    </>
  );
};

export default HomePageOptimized;