import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
// // import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

// Import new advanced AI components
import AdvancedContentRecommendationEngine from '../components/AdvancedContentRecommendationEngine';
import RealTimePerformanceDashboard from '../components/RealTimePerformanceDashboard';
import IntelligentSearchEngine from '../components/IntelligentSearchEngine';
import AdvancedAIAssistant from '../components/AdvancedAIAssistant';
import BusinessIntelligenceDashboard from '../components/BusinessIntelligenceDashboard';
import AdvancedSecurityMonitor from '../components/AdvancedSecurityMonitor';
import AdvancedAnalyticsEngine from '../components/AdvancedAnalyticsEngine';
import AutomationWorkflowEngine from '../components/AutomationWorkflowEngine';
import EnterpriseDataManagement from '../components/EnterpriseDataManagement';
import APIManagementSystem from '../components/APIManagementSystem';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
const PerformanceMetrics = lazy(() => import('../components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

// Import key promotional components
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner2025 from '../components/ComprehensiveSolutionsBanner2025';
import NewServicesShowcase2025 from '../components/NewServicesShowcase2025';
import EnhancedContentPromotionBanner from '../components/EnhancedContentPromotionBanner';
import NewContent2026Showcase from '../components/NewContent2026Showcase';
import RevolutionaryContent2026Banner from '../components/RevolutionaryContent2026Banner';
import FeaturedContentShowcase2026 from '../components/FeaturedContentShowcase2026';
import EnhancedContentPromotionBanner2026 from '../components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from '../components/ComprehensiveContentShowcase2026';
import RevolutionaryContent2025Banner from '../components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';
import UltimateContent2025PromotionBanner from '../components/UltimateContent2025PromotionBanner';
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';

// Import new 2026 promotional components
import UltimatePromotionBanner2026 from '../components/UltimatePromotionBanner2026';
import UltimateContentShowcase2026 from '../components/UltimateContentShowcase2026';
import SuccessMetricsShowcase2026 from '../components/SuccessMetricsShowcase2026';

// Import new ultimate breakthrough promotional components
import NewContent2025UltimateBreakthroughBanner from './components/NewContent2025UltimateBreakthroughBanner';
import UltimateBreakthroughContentShowcase2025 from './components/UltimateBreakthroughContentShowcase2025';

// Import additional promotional components
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import AI2025UltimateBreakthroughBanner from '../components/AI2025UltimateBreakthroughBanner';

// Import new 2025 breakthrough promotional components
import QuantumAI2025BreakthroughPromotionBanner from '../components/QuantumAI2025BreakthroughPromotionBanner';
import AutonomousBusinessOperationsPromotionBanner from '../components/AutonomousBusinessOperationsPromotionBanner';
import AI1000ROISuccessStoryBanner from '../components/AI1000ROISuccessStoryBanner';

// Import new 2026 AI breakthrough promotional components
import AI2026RevolutionaryBreakthroughUltimatePromotionBanner from '../components/AI2026RevolutionaryBreakthroughUltimatePromotionBanner';
import AI2026GlobalTransformation800ROISuccessBanner from '../components/AI2026GlobalTransformation800ROISuccessBanner';
import AI2026ImplementationFrameworkUltimatePromotionBanner from '../components/AI2026ImplementationFrameworkUltimatePromotionBanner';

// Import new ultimate content promotional components
import RevolutionaryContent2025UltimateBanner from '../components/RevolutionaryContent2025UltimateBanner';

// Import new 2027 breakthrough promotional components
import AI2027BreakthroughPromotionBanner from '../components/AI2027BreakthroughPromotionBanner';
import QuantumComputingShowcase2027 from '../components/QuantumComputingShowcase2027';

// Import new neural interface and autonomous AI promotional components
import NeuralInterfaceRevolutionBanner2025 from '../components/NeuralInterfaceRevolutionBanner2025';
import RevolutionaryContentShowcase2025 from '../components/RevolutionaryContentShowcase2025';

// Import new ultimate content showcase banners
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';

// Import new content components
import NewContentShowcase2025 from '../components/NewContentShowcase2025';
import RevolutionaryTechTrends2025 from '../components/RevolutionaryTechTrends2025';
import UltimateContentDiscoveryWidget from '../components/UltimateContentDiscoveryWidget';
import InteractiveContentPromotionBanner from '../components/InteractiveContentPromotionBanner';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function HomePage() {
  return (
    <div>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* AI 2027 Breakthrough Promotion Banner - NEW FEATURED */}
        <AI2027BreakthroughPromotionBanner />
        
        {/* Revolutionary Content 2025 Ultimate Banner - NEW FEATURED */}
        <RevolutionaryContent2025UltimateBanner />
        
        {/* Ultimate Content Showcase 2025 - NEW FEATURED */}
        <UltimateContentShowcase2025 />
        
        {/* Neural Interface Revolution Banner 2025 - NEW */}
        <NeuralInterfaceRevolutionBanner2025 />
        
        {/* Revolutionary Content Showcase 2025 - NEW */}
        <RevolutionaryContentShowcase2025 />
        
        {/* AI 2026 Revolutionary Breakthrough Ultimate Promotion Banner - NEW */}
        <AI2026RevolutionaryBreakthroughUltimatePromotionBanner />
        
        {/* AI 2026 Global Transformation 800% ROI Success Banner - NEW */}
        <AI2026GlobalTransformation800ROISuccessBanner />
        
        {/* AI 2026 Implementation Framework Ultimate Promotion Banner - NEW */}
        <AI2026ImplementationFrameworkUltimatePromotionBanner />
        
        {/* Interactive Content Promotion Banner */}
        <InteractiveContentPromotionBanner />
        
        {/* New Content 2025 Ultimate Breakthrough Banner - NEW */}
        <NewContent2025UltimateBreakthroughBanner />
        
        {/* New Content 2025 Ultimate Showcase Banner */}
        <NewContent2025UltimateShowcaseBanner />
        
        {/* New Content Showcase 2025 */}
        <NewContentShowcase2025 />
        
        {/* Revolutionary Tech Trends 2025 */}
        <RevolutionaryTechTrends2025 />
        
        {/* Ultimate Content Discovery Widget */}
        <UltimateContentDiscoveryWidget />
        
        {/* AI 2025 Ultimate Breakthrough Banner - NEW */}
        <AI2025UltimateBreakthroughBanner />
        
        {/* Revolutionary Content 2025 Banner */}
        <RevolutionaryContent2025Banner />
        
        {/* AI 2025 Breakthrough Banner */}
        {/* <AI2025BreakthroughBanner /> */}
        
        
        {/* New Content 2025 Showcase Banner */}
        <NewContent2025ShowcaseBanner />
        
        {/* Revolutionary Content 2025 Banner */}
        <RevolutionaryContent2025Banner />
        
        {/* Enhanced Content Promotion Banner */}
        <EnhancedContentPromotionBanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 AI & TECHNOLOGY SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with AI
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
                Expert consulting and implementation services for enterprise success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent automation solutions that streamline operations and boost productivity across your organization.
                </p>
                <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable, secure cloud solutions designed to support your business growth and digital transformation.
                </p>
                <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-4">
                  Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
                </p>
                <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Computing Showcase 2027 - NEW FEATURED */}
        <QuantumComputingShowcase2027 />
        
        {/* Ultimate Content Showcase 2025 - NEW */}
        <UltimateContentShowcase2025 />
        
        {/* Ultimate Breakthrough Content Showcase 2025 - NEW */}
        <UltimateBreakthroughContentShowcase2025 />
        
        {/* New 2025 Breakthrough Content Promotions */}
        <QuantumAI2025BreakthroughPromotionBanner />
        <AutonomousBusinessOperationsPromotionBanner />
        <AI1000ROISuccessStoryBanner />
        
        {/* Content Promotion Banners */}
        <UltimateContentShowcase2025 />
        
        {/* Autonomous Systems Showcase 2025 - NEW */}
        {/* Note: Component will be added in future updates */}
        <RevolutionaryContent2026Banner />
        <FeaturedContentShowcase2026 />
        <EnhancedContentPromotionBanner2026 />
        <ComprehensiveContentShowcase2026 />
        <NewContentPromotionBanner />
        <ComprehensiveSolutionsBanner2025 />
        <NewServicesShowcase2025 />
        <NewContent2026Showcase />
        <InteractiveContentDiscoveryWidget />

        {/* Advanced AI Components */}
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
    </div>
  );
}