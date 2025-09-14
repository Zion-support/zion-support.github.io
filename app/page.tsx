import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
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
// Import new 2026 promotional components
import UltimatePromotionBanner2026 from '../components/UltimatePromotionBanner2026';
import UltimateContentShowcase2026 from '../components/UltimateContentShowcase2026';
import SuccessMetricsShowcase2026 from '../components/SuccessMetricsShowcase2026';

// Import additional promotional components
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import UltimateContent2025MasteryBanner from './components/UltimateContent2025MasteryBanner';
import RevolutionaryContent2025UltimateShowcase from './components/RevolutionaryContent2025UltimateShowcase';
import NewContent2025UltimateShowcaseBanner from './components/NewContent2025UltimateShowcaseBanner';
import Fortune500SuccessBanner from './components/Fortune500SuccessBanner';
import AIImplementationGuideBanner from './components/AIImplementationGuideBanner';
import AI2026UltimateShowcaseBanner from './components/AI2026UltimateShowcaseBanner';
import QuantumAI2026BreakthroughBanner from './components/QuantumAI2026BreakthroughBanner';
import AI2026QuantumRevolutionBanner from './components/AI2026QuantumRevolutionBanner';
import AI2026AutonomousSystemsBanner from './components/AI2026AutonomousSystemsBanner';
import NewContent2025ShowcaseBanner from './components/NewContent2025ShowcaseBanner';
import RevolutionaryAIContentBanner from './components/RevolutionaryAIContentBanner';
import QuantumAIContentShowcase2026 from './components/QuantumAIContentShowcase2026';

// Import new AI 2026 promotional components

// Import new ultimate breakthrough content components
import NewContent2025UltimateBreakthroughBanner from './components/NewContent2025UltimateBreakthroughBanner';
import NewContent2025UltimateBreakthroughShowcase from './components/NewContent2025UltimateBreakthroughShowcase';
import UltimateAIBreakthrough2025Banner from './components/UltimateAIBreakthrough2025Banner';
import UltimateContentShowcase2025Banner from './components/UltimateContentShowcase2025Banner';
import AI2025UltimateBreakthroughContentBanner from '../components/AI2025UltimateBreakthroughContentBanner';

// Import new 2026 breakthrough content banners
import AI2026UltimateBreakthroughContentBanner from '../components/AI2026UltimateBreakthroughContentBanner';
import NewContent2025MultimodalBanner from '../components/NewContent2025MultimodalBanner';
import AI2025BusinessIntelligenceBanner from '../components/AI2025BusinessIntelligenceBanner';
import AI2025CybersecurityBanner from '../components/AI2025CybersecurityBanner';

// Import new ultimate autonomous enterprise components
import UltimateAutonomousEnterpriseBanner from '../components/UltimateAutonomousEnterpriseBanner';
import UltimateAutonomousEnterpriseShowcase from '../components/UltimateAutonomousEnterpriseShowcase';

// Import new 2026 promotional components
import AI2026TrendsPromotionBanner from '../components/AI2026TrendsPromotionBanner';
import QuantumComputingPromotionBanner from '../components/QuantumComputingPromotionBanner';
import Fortune500CaseStudyBanner from '../components/Fortune500CaseStudyBanner';
import NewContent2026ComprehensiveShowcase from '../components/NewContent2026ComprehensiveShowcase';

// Import new 2025-2026 ultimate breakthrough components
import AI2025_2026UltimateBreakthroughBanner from '../components/AI2025_2026UltimateBreakthroughBanner';
import RevolutionaryContent2025_2026Showcase from '../components/RevolutionaryContent2025_2026Showcase';

// Import new breakthrough promotional components
import QuantumNeuralSuperintelligenceBanner from '../components/QuantumNeuralSuperintelligenceBanner';
import UltimateBreakthrough2025Banner from '../components/UltimateBreakthrough2025Banner';

// Import new 2025-2026 synthetic intelligence components
import SyntheticIntelligence2025Banner from '../components/SyntheticIntelligence2025Banner';
import UltimateContent2026Showcase from '../components/UltimateContent2026Showcase';

// Import new 2025 advanced analytics promotional components
import NewContent2025AdvancedAnalyticsBanner from '../components/NewContent2025AdvancedAnalyticsBanner';
import EdgeComputingRevolutionBanner2025 from '../components/EdgeComputingRevolutionBanner2025';

// Import new AI automation promotional components
import NewContent2025AdvancedAIAutomationBanner from '../components/NewContent2025AdvancedAIAutomationBanner';
import UltimateAIAutomationShowcase2025 from '../components/UltimateAIAutomationShowcase2025';

// Import new 2026 synthetic intelligence components
import SyntheticIntelligence2026BreakthroughBanner from '../components/SyntheticIntelligence2026BreakthroughBanner';
import RevolutionaryContent2026Showcase from '../components/RevolutionaryContent2026Showcase';

// Import new AI Innovation Showcase components
import AIInnovationShowcase2025Banner from '../components/AIInnovationShowcase2025Banner';
import RevolutionaryAIContent2025Showcase from '../components/RevolutionaryAIContent2025Showcase';

// Import new ultimate business transformation components
import UltimateBusinessTransformation2025Banner from '../components/UltimateBusinessTransformation2025Banner';
import RevolutionaryContent2025Showcase from '../components/RevolutionaryContent2025Showcase';

// Import new 2026 breakthrough content components
import UltimateContent2026BreakthroughBanner from '../components/UltimateContent2026BreakthroughBanner';
import RevolutionaryContent2026Showcase from '../components/RevolutionaryContent2026Showcase';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* Ultimate Autonomous Enterprise Banner - NEW ULTIMATE BREAKTHROUGH */}
        <UltimateAutonomousEnterpriseBanner />
        
        {/* Ultimate Content 2026 Breakthrough Banner - LATEST FEATURED */}
        <UltimateContent2026BreakthroughBanner />
        
        {/* Revolutionary Content 2026 Showcase - NEW FEATURED */}
        <RevolutionaryContent2026Showcase />
        
        {/* Ultimate Business Transformation 2025-2026 Banner - NEW ULTIMATE BREAKTHROUGH */}
        <UltimateBusinessTransformation2025Banner />
        
        {/* Revolutionary Content 2025 Showcase - NEW FEATURED */}
        <RevolutionaryContent2025Showcase />
        
        {/* New Content 2025 Advanced AI Automation Banner - FEATURED */}
        <NewContent2025AdvancedAIAutomationBanner />
        
        {/* Synthetic Intelligence 2025-2026 Banner - NEW ULTIMATE BREAKTHROUGH */}
        <SyntheticIntelligence2025Banner />
        
        {/* Ultimate Content 2026 Showcase - NEW FEATURED */}
        <UltimateContent2026Showcase />
        
        {/* AI Innovation Showcase 2025 Banner - LATEST FEATURED */}
        <AIInnovationShowcase2025Banner />
        
        {/* Revolutionary AI Content 2025 Showcase - NEW FEATURED */}
        <RevolutionaryAIContent2025Showcase />
        
        {/* Quantum Neural Superintelligence Banner - ULTIMATE BREAKTHROUGH */}
        <QuantumNeuralSuperintelligenceBanner />
        
        {/* Ultimate Breakthrough 2025 Banner - NEW FEATURED */}
        <UltimateBreakthrough2025Banner />
        
        {/* Synthetic Intelligence 2026 Breakthrough Banner - FEATURED */}
        <SyntheticIntelligence2026BreakthroughBanner />
        
        {/* Revolutionary Content 2026 Showcase - FEATURED */}
        <RevolutionaryContent2026Showcase />
        
        {/* AI 2025-2026 Ultimate Breakthrough Banner - FEATURED */}
        <AI2025_2026UltimateBreakthroughBanner />
        
        {/* Revolutionary Content 2025-2026 Showcase - FEATURED */}
        <RevolutionaryContent2025_2026Showcase />
        
        {/* New Content 2025 Advanced Analytics Banner - LATEST FEATURED */}
        <NewContent2025AdvancedAnalyticsBanner />
        
        {/* Edge Computing Revolution Banner 2025 - NEW FEATURED */}
        <EdgeComputingRevolutionBanner2025 />
        
        {/* AI 2025 Ultimate Breakthrough Content Banner - NEW FEATURED */}
        <AI2025UltimateBreakthroughContentBanner />
        
        {/* Ultimate Content Showcase 2025 Banner - NEW FEATURED */}
        <UltimateContentShowcase2025Banner />
        
        {/* New Content 2026 Comprehensive Showcase - LATEST */}
        <NewContent2026ComprehensiveShowcase />
        
        {/* AI 2026 Trends Promotion Banner - NEW */}
        <AI2026TrendsPromotionBanner />
        
        {/* Quantum Computing Promotion Banner - NEW */}
        <QuantumComputingPromotionBanner />
        
        {/* Fortune 500 Case Study Banner - NEW */}
        <Fortune500CaseStudyBanner />
        
        {/* AI 2026 Ultimate Breakthrough Content Banner - NEW FEATURED */}
        <AI2026UltimateBreakthroughContentBanner />
        
        {/* New Content 2025 Multimodal Banner - NEW FEATURED */}
        <NewContent2025MultimodalBanner />
        
        {/* Ultimate AI Breakthrough 2025 Banner - FEATURED */}
        <UltimateAIBreakthrough2025Banner />
        
        {/* Ultimate Content Showcase 2025 Banner - FEATURED */}
        <UltimateContentShowcase2025Banner />
        
        {/* Ultimate Content 2025 Mastery Banner - LATEST */}
        <UltimateContent2025MasteryBanner />
        
        {/* Revolutionary Content 2025 Ultimate Showcase - FEATURED */}
        <RevolutionaryContent2025UltimateShowcase />
        
        {/* New Content 2025 Ultimate Breakthrough Showcase - NEW FEATURED */}
        <NewContent2025UltimateBreakthroughShowcase />
        
        {/* New Content 2025 Multimodal Banner - NEW FEATURED */}
        <NewContent2025MultimodalBanner />
        
        {/* AI 2025 Business Intelligence Banner - NEW FEATURED */}
        <AI2025BusinessIntelligenceBanner />
        
        {/* AI 2025 Cybersecurity Banner - NEW FEATURED */}
        <AI2025CybersecurityBanner />
        
        {/* New Content 2025 Ultimate Showcase Banner */}
        <NewContent2025UltimateShowcaseBanner />
        
        {/* Fortune 500 Success Banner - FEATURED */}
        <Fortune500SuccessBanner />
        
        {/* AI Implementation Guide Banner - NEW RESOURCE */}
        <AIImplementationGuideBanner />
        
        {/* AI 2026 Ultimate Showcase Banner */}
        <AI2026UltimateShowcaseBanner />
        
        {/* Quantum AI 2026 Breakthrough Banner */}
        <QuantumAI2026BreakthroughBanner />
        
        {/* Ultimate Promotion Banner */}
        <UltimatePromotionBanner2026 />
        
        {/* AI 2026 Quantum Revolution Banner */}
        <AI2026QuantumRevolutionBanner />
        
        {/* AI 2026 Autonomous Systems Banner */}
        <AI2026AutonomousSystemsBanner />
        
        {/* Revolutionary Content 2025 Banner - NEW CONTENT */}
        <RevolutionaryContent2025Banner />
        
        {/* New Content 2025 Showcase Banner - FEATURED */}
        <NewContent2025ShowcaseBanner />
        
        {/* AI 2025 Breakthrough Banner */}
        <AI2025BreakthroughBanner />
        
        {/* Revolutionary AI Content Banner */}
        <RevolutionaryAIContentBanner />
        
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

        {/* Ultimate Autonomous Enterprise Showcase - NEW FEATURED */}
        <UltimateAutonomousEnterpriseShowcase />
        
        {/* Content Promotion Banners */}
        <UltimateAIAutomationShowcase2025 />
        <RevolutionaryContent2026Banner />
        <UltimateContentShowcase2026 />
        <QuantumAIContentShowcase2026 />
        <UltimateContentShowcase2025 />
        <NewContent2025PromotionBanner />
        <LatestContentShowcase2025 />
        <EnhancedContentPromotionBanner2026 />
        <ComprehensiveContentShowcase2026 />
        <FeaturedContentShowcase2026 />
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
    </ErrorBoundary>
  );
}