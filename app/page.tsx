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
import UltimateContent2025PromotionBanner from '../components/UltimateContent2025PromotionBanner';
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import AI2025UltimateBreakthroughBanner from '../components/AI2025UltimateBreakthroughBanner';

// Import new 2025 breakthrough promotional components
import QuantumAI2025BreakthroughPromotionBanner from '../components/QuantumAI2025BreakthroughPromotionBanner';
import AutonomousBusinessOperationsPromotionBanner from '../components/AutonomousBusinessOperationsPromotionBanner';
import AI1000ROISuccessStoryBanner from '../components/AI1000ROISuccessStoryBanner';

// Import new 2025 autonomous systems promotional components
// Note: AutonomousSystems components will be created in future updates

// Import new 2026 AI breakthrough promotional components
import AI2026RevolutionaryBreakthroughUltimatePromotionBanner from '../components/AI2026RevolutionaryBreakthroughUltimatePromotionBanner';
import AI2026GlobalTransformation800ROISuccessBanner from '../components/AI2026GlobalTransformation800ROISuccessBanner';
import AI2026ImplementationFrameworkUltimatePromotionBanner from '../components/AI2026ImplementationFrameworkUltimatePromotionBanner';

// Import new ultimate content promotional components
import RevolutionaryContent2025UltimateBanner from '../components/RevolutionaryContent2025UltimateBanner';

// Import new neural interface and autonomous AI promotional components
import NeuralInterfaceRevolutionBanner2025 from '../components/NeuralInterfaceRevolutionBanner2025';
import RevolutionaryContentShowcase2025 from '../components/RevolutionaryContentShowcase2025';

// Import new ultimate breakthrough content components
import NewContent2025UltimateBreakthroughBanner from './components/NewContent2025UltimateBreakthroughBanner';
import NewContent2025UltimateBreakthroughShowcase from './components/NewContent2025UltimateBreakthroughShowcase';
import UltimateAIBreakthrough2025Banner from './components/UltimateAIBreakthrough2025Banner';
import UltimateContentShowcase2025Banner from './components/UltimateContentShowcase2025Banner';
import AI2025UltimateBreakthroughContentBanner from '../components/AI2025UltimateBreakthroughContentBanner';
import RevolutionaryContent2025Showcase from '../components/RevolutionaryContent2025Showcase';

// Import new 2026 content promotional components
import SyntheticIntelligence2026RevolutionBanner from './components/SyntheticIntelligence2026RevolutionBanner';
import QuantumComputing2026UltimateBanner from './components/QuantumComputing2026UltimateBanner';
import UltimateContent2026Showcase from './components/UltimateContent2026Showcase';

// Import new autonomous enterprise components
import UltimateAutonomousEnterpriseBanner2025 from '../components/UltimateAutonomousEnterpriseBanner2025';
import RevolutionaryContent2026UltimateShowcase from '../components/RevolutionaryContent2026UltimateShowcase';

// Import new 2026 breakthrough content banners
import AI2026UltimateBreakthroughContentBanner from '../components/AI2026UltimateBreakthroughContentBanner';
import NewContent2025MultimodalBanner from '../components/NewContent2025MultimodalBanner';
import AI2025BusinessIntelligenceBanner from '../components/AI2025BusinessIntelligenceBanner';
import AI2025CybersecurityBanner from '../components/AI2025CybersecurityBanner';

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
import RevolutionaryContent2026Showcase from '../components/RevolutionaryContent2026Showcase';

// Import new 2025-2026 synthetic intelligence components
import SyntheticIntelligence2025Banner from '../components/SyntheticIntelligence2025Banner';

// Import new 2026 AI breakthrough components
import AI2026UltimateBreakthroughBanner from '../components/AI2026UltimateBreakthroughBanner';
import QuantumAI2026RevolutionBanner from '../components/QuantumAI2026RevolutionBanner';
import NeuralInterface2026Banner from '../components/NeuralInterface2026Banner';
import SyntheticIntelligence2026Banner from '../components/SyntheticIntelligence2026Banner';
import AutonomousSystems2026Banner from '../components/AutonomousSystems2026Banner';
import UltimateAI2026Showcase from '../components/UltimateAI2026Showcase';

// Import new 2025 promotional banners
import NewContent2025UltimateSecurityBanner from '../components/NewContent2025UltimateSecurityBanner';
import QuantumAI2026BreakthroughBanner from '../components/QuantumAI2026BreakthroughBanner';
import AI2025EnterpriseAutomationBanner from '../components/AI2025EnterpriseAutomationBanner';

// Import new 2025 advanced analytics promotional components
import NewContent2025AdvancedAnalyticsBanner from '../components/NewContent2025AdvancedAnalyticsBanner';
import EdgeComputingRevolutionBanner2025 from '../components/EdgeComputingRevolutionBanner2025';

// Import new AI automation promotional components
import NewContent2025AdvancedAIAutomationBanner from '../components/NewContent2025AdvancedAIAutomationBanner';
import UltimateAIAutomationShowcase2025 from '../components/UltimateAIAutomationShowcase2025';

// Import new 2026 synthetic intelligence components
import SyntheticIntelligence2026BreakthroughBanner from '../components/SyntheticIntelligence2026BreakthroughBanner';

// Import new AI Innovation Showcase components
import AIInnovationShowcase2025Banner from '../components/AIInnovationShowcase2025Banner';
import RevolutionaryAIContent2025Showcase from '../components/RevolutionaryAIContent2025Showcase';

// Import new ultimate business transformation components
import UltimateBusinessTransformation2025Banner from '../components/UltimateBusinessTransformation2025Banner';

// Import new AI 2025-2026 Ultimate Business Transformation components
import AI2025_2026UltimateBusinessTransformationRevolutionBanner from '../components/AI2025_2026UltimateBusinessTransformationRevolutionBanner';
import UltimateBusinessTransformationShowcase2025 from '../components/UltimateBusinessTransformationShowcase2025';

// Import new 2026 content promotional banners
import NewContent2026RevolutionaryBanner from '../components/NewContent2026RevolutionaryBanner';
import UltimateContentShowcase2026Banner from '../components/UltimateContentShowcase2026Banner';
import RevolutionaryContent2026UltimateBanner from '../components/RevolutionaryContent2026UltimateBanner';

// Import new multimodal AI 2025 promotional banner
import MultimodalAI2025RevolutionBanner from '../components/MultimodalAI2025RevolutionBanner';

// Import predictive analytics banner
import PredictiveAnalytics2025BreakthroughBanner from '../components/PredictiveAnalytics2025BreakthroughBanner';

// Import new Ultimate Content 2026 components
import AI2026BreakthroughRevolutionBanner from '../components/AI2026BreakthroughRevolutionBanner';
import NeuralInterfaceRevolution2026Banner from '../components/NeuralInterfaceRevolution2026Banner';


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
        {/* Multimodal AI 2025 Revolution Banner - NEWEST FEATURED */}
        <MultimodalAI2025RevolutionBanner />
        
        {/* AI 2026 Ultimate Breakthrough Banner - NEWEST ULTIMATE FEATURED */}
        <AI2026UltimateBreakthroughBanner />
        
        {/* Quantum AI 2026 Revolution Banner - NEWEST ULTIMATE FEATURED */}
        <QuantumAI2026RevolutionBanner />
        
        {/* Neural Interface 2026 Banner - NEWEST ULTIMATE FEATURED */}
        <NeuralInterface2026Banner />
        
        {/* Synthetic Intelligence 2026 Banner - NEWEST ULTIMATE FEATURED */}
        <SyntheticIntelligence2026Banner />
        
        {/* Autonomous Systems 2026 Banner - NEWEST ULTIMATE FEATURED */}
        <AutonomousSystems2026Banner />
        
        {/* Ultimate AI 2026 Showcase - NEWEST ULTIMATE FEATURED */}
        <UltimateAI2026Showcase />
        
        {/* AI 2025-2026 Ultimate Business Transformation Revolution Banner - NEWEST FEATURED */}
        <AI2025_2026UltimateBusinessTransformationRevolutionBanner />
        
        {/* Ultimate Business Transformation Showcase 2025 - NEW FEATURED */}
        <UltimateBusinessTransformationShowcase2025 />
        
        {/* NEW 2026 CONTENT BANNERS - FEATURED */}
        <NewContent2026RevolutionaryBanner />
        <UltimateContentShowcase2026Banner />
        <RevolutionaryContent2026UltimateBanner />
        
        {/* NEW 2025 CONTENT BANNERS - LATEST FEATURED */}
        <NewContent2025UltimateSecurityBanner />
        <QuantumAI2026BreakthroughBanner />
        <AI2025EnterpriseAutomationBanner />
        
        {/* NEW ULTIMATE CONTENT 2026 - TOP PRIORITY FEATURED */}
        <UltimateContent2026Showcase />
        
        {/* SYNTHETIC INTELLIGENCE 2026 REVOLUTION BANNER - NEWEST FEATURED */}
        <SyntheticIntelligence2026RevolutionBanner />
        
        {/* QUANTUM COMPUTING 2026 ULTIMATE BANNER - NEWEST FEATURED */}
        <QuantumComputing2026UltimateBanner />
        
        {/* AI 2026 BREAKTHROUGH REVOLUTION BANNER - NEWEST FEATURED */}
        <AI2026BreakthroughRevolutionBanner />
        
        {/* Revolutionary AI Automation Showcase 2025 - NEW FEATURED */}
        <RevolutionaryAIAutomationShowcase2025 />
        
        {/* NEW ULTIMATE CONTENT 2025 - TOP PRIORITY FEATURED */}
        <UltimateContent2025Banner />
        
        {/* NEURAL INTERFACE REVOLUTION 2026 BANNER - NEWEST FEATURED */}
        <NeuralInterfaceRevolution2026Banner />
        
        {/* NEW CONTENT 2025 ULTIMATE BREAKTHROUGH BANNER - LATEST FEATURED */}
        <NewContent2025UltimateBreakthroughBanner />
        
        {/* NEW ULTIMATE BREAKTHROUGH CONTENT SHOWCASE - LATEST FEATURED */}
        <NewContent2025UltimateBreakthroughShowcase />
        
        {/* Advanced Predictive Analytics Banner 2025 - NEW FEATURED */}
        <AdvancedPredictiveAnalyticsBanner2025 />
        
        {/* Edge Computing Revolution Banner 2025 - NEW FEATURED */}
        <EdgeComputingRevolutionBanner2025 />
        
        {/* Ultimate Business Transformation 2025 Banner - NEW ULTIMATE BREAKTHROUGH */}
        <UltimateBusinessTransformation2025Banner />
        
        {/* Revolutionary Content 2025 Ultimate Showcase - NEW FEATURED */}
        {/* <RevolutionaryContent2025UltimateShowcase /> */}
        
        {/* Predictive Analytics 2025 Breakthrough Banner - LATEST */}
        <PredictiveAnalytics2025BreakthroughBanner />
        {/* Revolutionary Content 2025 Showcase - NEW FEATURED */}
        <RevolutionaryContent2025Showcase />
        {/* AI 2025-2026 Ultimate Business Transformation Revolution Banner - NEWEST FEATURED */}
        <AI2025_2026UltimateBusinessTransformationRevolutionBanner />
        
        {/* Ultimate Business Transformation Showcase 2025 - NEW FEATURED */}
        <UltimateBusinessTransformationShowcase2025 />
        
        {/* NEW 2026 CONTENT BANNERS - FEATURED */}
        <NewContent2026RevolutionaryBanner />
        <UltimateContentShowcase2026Banner />
        <RevolutionaryContent2026UltimateBanner />
        
        {/* NEW 2025 CONTENT BANNERS - LATEST FEATURED */}
        <NewContent2025UltimateSecurityBanner />
        
        {/* Quantum AI 2026 Breakthrough Banner */}
        <QuantumAI2026BreakthroughBanner />
        <AI2025EnterpriseAutomationBanner />
        
        {/* Revolutionary Content 2025 Ultimate Banner - NEW FEATURED */}
        <RevolutionaryContent2025UltimateBanner />
        
        {/* Ultimate Content Showcase 2025 - NEW FEATURED */}
        {/* <UltimateContentShowcase2025 /> */}
        
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
    </ErrorBoundary>
  );
}