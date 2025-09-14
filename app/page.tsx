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
import NewContent2025UltimateBanner from '../components/NewContent2025UltimateBanner';
import NewContent2025UltimateShowcase from '../components/NewContent2025UltimateShowcase';
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import AI2025UltimateBreakthroughBanner from '../components/AI2025UltimateBreakthroughBanner';

// Import new 2025 breakthrough promotional components
import QuantumAI2025BreakthroughPromotionBanner from '../components/QuantumAI2025BreakthroughPromotionBanner';
import AutonomousBusinessOperationsPromotionBanner from '../components/AutonomousBusinessOperationsPromotionBanner';
import AI1000ROISuccessStoryBanner from '../components/AI1000ROISuccessStoryBanner';

// Import new ultimate content promotional components
import UltimateContent2025RevolutionBanner from '../components/UltimateContent2025RevolutionBanner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';

// Import new 2025 autonomous systems promotional components
import AutonomousSystems2025RevolutionBanner from '../components/AutonomousSystems2025RevolutionBanner';
import AutonomousSystemsShowcase2025 from '../components/AutonomousSystemsShowcase2025';

// Import new revolutionary content promotional components
import NeuralInterfaceRevolutionBanner from '../components/NeuralInterfaceRevolutionBanner';
import RevolutionaryContentShowcase2025 from '../components/RevolutionaryContentShowcase2025';

// Import new content revolution components
import AI2025UltimateContentRevolutionBanner from '../components/AI2025UltimateContentRevolutionBanner';
import FutureTechInnovationShowcase2025 from '../components/FutureTechInnovationShowcase2025';
import EnterpriseTransformationSuccessBanner from '../components/EnterpriseTransformationSuccessBanner';

// Import new 2025 multimodal and revolutionary content components
import NewContent2025MultimodalBanner from './components/NewContent2025MultimodalBanner';
import RevolutionaryAI2025Showcase from './components/RevolutionaryAI2025Showcase';

// Import new 2026 revolutionary content promotional components
import AI2026RevolutionaryBreakthroughBanner from './components/AI2026RevolutionaryBreakthroughBanner';
import NewContent2026ShowcaseBanner from './components/NewContent2026ShowcaseBanner';

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
        {/* AI 2026 Revolutionary Breakthrough Banner - NEW FEATURED */}
        <AI2026RevolutionaryBreakthroughBanner />
        
        {/* New Content 2026 Showcase Banner - NEW FEATURED */}
        <NewContent2026ShowcaseBanner />
        
        {/* New Content 2025 Multimodal Banner - NEW FEATURED */}
        <NewContent2025MultimodalBanner />
        
        {/* Revolutionary AI 2025 Showcase - NEW FEATURED */}
        <RevolutionaryAI2025Showcase />
        
        {/* New Content 2025 Ultimate Banner - NEW FEATURED */}
        <NewContent2025UltimateBanner />
        
        {/* Ultimate Content 2025 Revolution Banner - NEW */}
        <UltimateContent2025RevolutionBanner />
        
        {/* Neural Interface Revolution Banner - NEW REVOLUTIONARY CONTENT */}
        <NeuralInterfaceRevolutionBanner />
        
        {/* Ultimate AI Breakthrough 2025 Banner - NEW FEATURED */}
        <UltimateAIBreakthrough2025Banner />
        
        {/* Revolutionary Content 2025 Ultimate Banner - NEW */}
        <RevolutionaryContent2025UltimateBanner />
        
        {/* Ultimate Content Showcase 2025 Banner - NEW */}
        <UltimateContentShowcase2025Banner />
        
        {/* Ultimate AI Transformation 2025 Banner - NEW */}
        <UltimateAITransformation2025Banner />
        
        {/* AI 2025 Ultimate Content Revolution Banner - NEW FEATURED */}
        <AI2025UltimateContentRevolutionBanner />
        
        {/* Future Tech Innovation Showcase 2025 - NEW FEATURED */}
        <FutureTechInnovationShowcase2025 />
        
        {/* Enterprise Transformation Success Banner - NEW FEATURED */}
        <EnterpriseTransformationSuccessBanner />
        
        {/* Next-Generation Autonomous Systems Banner - NEW FEATURED */}
        <NextGenAutonomousSystemsBanner />
        
        {/* AI 2025 Advanced Automation Mastery Banner - NEW FEATURED */}
        <AI2025AdvancedAutomationMasteryBanner />
        
        {/* Revolutionary Content 2025 Banner - NEW FEATURED */}
        <RevolutionaryContent2025Banner />
        
        {/* NEW QUANTUM AI BREAKTHROUGH BANNER - FEATURED PROMINENTLY */}
        <NewContent2026QuantumBreakthroughBanner />
        
        {/* AI 2026 ENTERPRISE AUTOMATION SHOWCASE - COMPREHENSIVE COLLECTION */}
        <AI2026EnterpriseAutomationShowcase />
        
        {/* NEW ULTIMATE BREAKTHROUGH CONTENT BANNER */}
        <NewContent2025UltimateBreakthroughBanner />
        
        {/* NEW ULTIMATE BREAKTHROUGH CONTENT SHOWCASE */}
        <NewContent2025UltimateBreakthroughShowcase />
        
        {/* NEW 2025 ENHANCED CONTENT - TOP PRIORITY */}
        <AIInnovationPromotionBanner2025 />
        
        {/* New Resource 2025 Implementation Roadmap Banner - NEW FEATURED */}
        <NewResource2025ImplementationRoadmapBanner />
        
        {/* New Content 2025 Enterprise Automation Banner - NEW FEATURED */}
        <NewContent2025EnterpriseAutomationBanner />
        
        {/* New Content 2025 Analytics Revolution Banner - NEW FEATURED */}
        <NewContent2025AnalyticsRevolutionBanner />
        
        {/* Revolutionary AI 2025 Banner - LATEST */}
        <RevolutionaryAI2025Banner />
        
        {/* Ultimate Content 2025 Banner - NEW FEATURED */}
        <UltimateContent2025Banner />
        
        {/* New Content 2025 Ultimate Showcase Banner - FEATURED */}
        <NewContent2025UltimateShowcaseBanner />
        
        {/* Ultimate Content Showcase 2025 - NEW FEATURED */}
        <UltimateContentShowcase2025 />
        
        {/* AI 2030 Content Showcase Banner - FEATURED */}
        <AI2030ContentShowcaseBanner />
        
        {/* Revolutionary Content Showcase 2025 - FEATURED */}
        <RevolutionaryContentShowcase2025 />
        <RevolutionaryContentShowcase2025 />
        
        {/* AI 2025 Ultimate Breakthrough Banner - NEW */}
        <AI2025UltimateBreakthroughBanner />
        
        {/* Revolutionary Content 2025 Banner */}
        <RevolutionaryContent2025Banner />
        
        {/* AI 2025 Breakthrough Banner */}
        <AI2025BreakthroughBanner />
        
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

        {/* New Content 2025 Ultimate Showcase - NEW FEATURED */}
        <NewContent2025UltimateShowcase />
        
        {/* New 2025 Breakthrough Content Promotions */}
        <QuantumAI2025BreakthroughPromotionBanner />
        <AutonomousBusinessOperationsPromotionBanner />
        <AI1000ROISuccessStoryBanner />
        
        {/* Ultimate Content Showcase 2025 - NEW */}
        <UltimateContentShowcase2025 />
        
        {/* Content Promotion Banners */}
        
        {/* Autonomous Systems Showcase 2025 - NEW */}
        <AutonomousSystemsShowcase2025 />
        
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
    </ErrorBoundary>
  );
}