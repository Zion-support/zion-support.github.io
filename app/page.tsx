import React from 'react';
import LatestContentPromotionBanner from '../components/LatestContentPromotionBanner';
import LatestContentShowcase from '../components/LatestContentShowcase';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';
import AI2025ContentPromotionBanner from '../components/AI2025ContentPromotionBanner';
import AI2025ContentShowcase from '../components/AI2025ContentShowcase';
import AI2025NewContentPromotionBanner from '../components/AI2025NewContentPromotionBanner';
import AI2025NewContentShowcase from '../components/AI2025NewContentShowcase';
import RevolutionaryTech2025PromotionBanner from '../components/RevolutionaryTech2025PromotionBanner';
import RevolutionaryTech2025Showcase from '../components/RevolutionaryTech2025Showcase';
import FutureTechInnovationBanner from '../components/FutureTechInnovationBanner';
import UltimateContentDiscovery2025 from '../components/UltimateContentDiscovery2025';
import LatestContent2025PromotionBanner from '../components/LatestContent2025PromotionBanner';
import LatestContent2025Showcase from '../components/LatestContent2025Showcase';
import NeuralInterfacePromotionBanner2026 from '../components/NeuralInterfacePromotionBanner2026';
import NeuralInterfaceContentShowcase2026 from '../components/NeuralInterfaceContentShowcase2026';
import NewContent2025RevolutionaryBanner from '../components/NewContent2025RevolutionaryBanner';
import NewContent2025RevolutionaryShowcase from '../components/NewContent2025RevolutionaryShowcase';

// New 2029 Breakthrough Content Components
import AI2029BreakthroughPromotionBanner from '../components/AI2029BreakthroughPromotionBanner';
import AI2029BreakthroughContentShowcase from '../components/AI2029BreakthroughContentShowcase';

// New 2028 Breakthrough Content Components
import AI2028BreakthroughPromotionBanner from '../components/AI2028BreakthroughPromotionBanner';
import AI2028BreakthroughContentShowcase from '../components/AI2028BreakthroughContentShowcase';
import EnhancedContentDiscovery2028 from '../components/EnhancedContentDiscovery2028';
import AI2028ROICalculator from '../components/AI2028ROICalculator';
import AI2028NewsletterSignup from '../components/AI2028NewsletterSignup';

// New 2027 Breakthrough Content Components
import AI2027BreakthroughPromotionBanner from '../components/AI2027BreakthroughPromotionBanner';
import AI2027BreakthroughContentShowcase from '../components/AI2027BreakthroughContentShowcase';
import QuantumComputingBreakthroughShowcase from '../components/QuantumComputingBreakthroughShowcase';
import EnterpriseAutomationMasteryShowcase from '../components/EnterpriseAutomationMasteryShowcase';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';
import AI2028ContentPromotionBanner from '../components/AI2028ContentPromotionBanner';
import InteractiveContentDiscovery2028 from '../components/InteractiveContentDiscovery2028';

// Revolutionary Content Showcase
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';
import UltimateContentPromotionBanner from '../components/UltimateContentPromotionBanner';

// New 2025 Content Components
import RevolutionaryAIContentShowcase2025 from '../components/RevolutionaryAIContentShowcase2025';
import RevolutionaryAIPromotionBanner2025 from '../components/RevolutionaryAIPromotionBanner2025';
import InteractiveServiceShowcase2025 from '../components/InteractiveServiceShowcase2025';
import ComprehensiveContentDiscoveryEngine2025 from '../components/ComprehensiveContentDiscoveryEngine2025';
import ContentDiscoveryPromotionBanner2025 from '../components/ContentDiscoveryPromotionBanner2025';
import LatestContent2025PromotionBanner from '../components/LatestContent2025PromotionBanner';
import LatestContent2025Showcase from '../components/LatestContent2025Showcase';
import AI2026BreakthroughPromotionBanner from '../components/AI2026BreakthroughPromotionBanner';
import FeaturedContentShowcase2026 from '../components/FeaturedContentShowcase2026';
import NewContentPromotionBanner2026 from '../components/NewContentPromotionBanner2026';
import ComprehensiveContentDiscovery2026 from '../components/ComprehensiveContentDiscovery2026';
import ContentDiscoveryWidget2026 from '../components/ContentDiscoveryWidget2026';

// New 2029-2030 Content Components
import AI2029BreakthroughPromotionBanner from '../components/AI2029BreakthroughPromotionBanner';
import AI2030FuturePredictionsPromotionBanner from '../components/AI2030FuturePredictionsPromotionBanner';
import QuantumComputingSolutionsPromotionBanner from '../components/QuantumComputingSolutionsPromotionBanner';
import EnterpriseAutomationMasteryPromotionBanner from '../components/EnterpriseAutomationMasteryPromotionBanner';

// New AI 2033-2034 Revolutionary Content Components
import AI2033BreakthroughPromotionBanner from '../components/AI2033BreakthroughPromotionBanner';
import AI2033BreakthroughContentShowcase from '../components/AI2033BreakthroughContentShowcase';
import AI2034RevolutionaryPromotionBanner from '../components/AI2034RevolutionaryPromotionBanner';
import AI2034RevolutionaryContentShowcase from '../components/AI2034RevolutionaryContentShowcase';

// New 2026 Content Components
import NewContent2026PromotionBanner from '../components/NewContent2026PromotionBanner';
import AI2026ContentDiscoveryWidget from '../components/AI2026ContentDiscoveryWidget';
import NewContentNavigation2026 from '../components/NewContentNavigation2026';

// New AI 2025 Revolutionary Breakthrough Components
import AI2025RevolutionaryBreakthroughBanner from '../components/AI2025RevolutionaryBreakthroughBanner';
import AI2025RevolutionaryContentShowcase from '../components/AI2025RevolutionaryContentShowcase';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
=======
>>>>>>> c2a6863a57727d83b77b1c9684580c500024095d

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Zion Tech Group</h1>
      <p>This is the simplified home page.</p>
    </div>
=======
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: 'AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation',
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
<<<<<<< HEAD
      
      <div className='min-h-screen bg-white'>
        {/* AI 2025 REVOLUTIONARY BREAKTHROUGH BANNER */}
        <AI2025RevolutionaryBreakthroughBanner />
        
        {/* AI 2025 REVOLUTIONARY CONTENT SHOWCASE */}
        <AI2025RevolutionaryContentShowcase />
        
        {/* AI 2034 REVOLUTIONARY PROMOTION BANNER */}
        <AI2034RevolutionaryPromotionBanner />
        
        {/* AI 2034 REVOLUTIONARY CONTENT SHOWCASE */}
        <AI2034RevolutionaryContentShowcase />
        
        {/* AI 2033 BREAKTHROUGH PROMOTION BANNER */}
        <AI2033BreakthroughPromotionBanner />
        
        {/* AI 2033 BREAKTHROUGH CONTENT SHOWCASE */}
        <AI2033BreakthroughContentShowcase />
        
        {/* ULTIMATE AI 2026 PROMOTION BANNER */}
        <UltimateAI2026PromotionBanner />
        
        {/* AI 2026 BREAKTHROUGH PROMOTION BANNER */}
        <AI2026BreakthroughPromotionBanner />
        
        {/* AI 2026 BREAKTHROUGH CONTENT PROMOTION BANNER */}
        <AI2026BreakthroughContentPromotionBanner />
        
        {/* AI 2026 BREAKTHROUGH CONTENT SHOWCASE */}
        <AI2026BreakthroughContentShowcase />
        
        {/* AI 2026 QUANTUM-NEURAL FUSION PROMOTION BANNER */}
        <AI2026QuantumNeuralPromotionBanner />
        
        {/* AI 2026 QUANTUM-NEURAL FUSION CONTENT SHOWCASE */}
        <AI2026QuantumNeuralContentShowcase />
        
        {/* NEW CONTENT 2026 PROMOTION BANNER */}
        <NewContent2026PromotionBanner />
        
        {/* AI 2029 BREAKTHROUGH PROMOTION BANNER */}
        <AI2029BreakthroughPromotionBanner />
        
        {/* NEW CONTENT PROMOTION BANNER 2026 */}
        <NewContentPromotionBanner2026 />
        
        {/* AI 2029 BREAKTHROUGH CONTENT SHOWCASE */}
        <AI2029BreakthroughContentShowcase />
        
        {/* AI 2026 CONTENT DISCOVERY WIDGET */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AI2026ContentDiscoveryWidget />
          </div>
        </div>
        
        {/* COMPREHENSIVE CONTENT DISCOVERY 2026 */}
        <ComprehensiveContentDiscovery2026 />
        
        {/* NEW CONTENT NAVIGATION 2026 */}
        <NewContentNavigation2026 />
        
        {/* AI 2029 BREAKTHROUGH PROMOTION BANNER */}
        <AI2029BreakthroughPromotionBanner />
        
        {/* AI 2030 FUTURE PREDICTIONS PROMOTION BANNER */}
        <AI2030FuturePredictionsPromotionBanner />
        
        {/* QUANTUM COMPUTING SOLUTIONS PROMOTION BANNER */}
        <QuantumComputingSolutionsPromotionBanner />
        
        {/* ENTERPRISE AUTOMATION MASTERY PROMOTION BANNER */}
        <EnterpriseAutomationMasteryPromotionBanner />
        
        {/* AI 2028 CONTENT PROMOTION BANNER */}
        <AI2028ContentPromotionBanner />
        
        {/* AI 2028 BREAKTHROUGH PROMOTION BANNER */}
        <AI2028BreakthroughPromotionBanner />
        
        {/* AI 2028 BREAKTHROUGH CONTENT SHOWCASE */}
        <AI2028BreakthroughContentShowcase />
        
        {/* AI 2028 CONTENT DISCOVERY */}
        <EnhancedContentDiscovery2028 />
        
        {/* AI 2028 ROI CALCULATOR */}
        <AI2028ROICalculator />
        
        {/* AI 2028 NEWSLETTER SIGNUP */}
        <AI2028NewsletterSignup />
        
        {/* ULTIMATE CONTENT PROMOTION BANNER */}
        <UltimateContentPromotionBanner />
        
        {/* REVOLUTIONARY CONTENT SHOWCASE */}
        <RevolutionaryContentShowcase />
        
        {/* INTERACTIVE CONTENT DISCOVERY 2028 */}
        <InteractiveContentDiscovery2028 />
        
        {/* AI 2027 BREAKTHROUGH PROMOTION BANNER */}
        <AI2027BreakthroughPromotionBanner />
        
        {/* AI 2027 BREAKTHROUGH CONTENT SHOWCASE */}
        <AI2027BreakthroughContentShowcase />
        
        {/* QUANTUM COMPUTING BREAKTHROUGH SHOWCASE */}
        <QuantumComputingBreakthroughShowcase />
        
        {/* ENTERPRISE AUTOMATION MASTERY SHOWCASE */}
        <EnterpriseAutomationMasteryShowcase />
        
        {/* INTERACTIVE CONTENT DISCOVERY WIDGET */}
        <InteractiveContentDiscoveryWidget />
        
        {/* NEW AI 2025 CONTENT PROMOTION BANNER */}
        <AI2025NewContentPromotionBanner />
        
        {/* NEW AI 2025 CONTENT SHOWCASE */}
        <AI2025NewContentShowcase />
        
        {/* NEURAL INTERFACE PROMOTION BANNER 2026 */}
        <NeuralInterfacePromotionBanner2026 />
        
        {/* NEURAL INTERFACE CONTENT SHOWCASE 2026 */}
        <NeuralInterfaceContentShowcase2026 />
        
        {/* AI 2025 CONTENT PROMOTION BANNER */}
        <AI2025ContentPromotionBanner />
        
        {/* AI 2025 CONTENT SHOWCASE */}
        <AI2025ContentShowcase />
        
        {/* NEW REVOLUTIONARY CONTENT 2025 BANNER */}
        <NewContent2025RevolutionaryBanner />
        
        {/* NEW REVOLUTIONARY CONTENT 2025 SHOWCASE */}
        <NewContent2025RevolutionaryShowcase />
        
        {/* CONTENT DISCOVERY PROMOTION BANNER */}
        <ContentDiscoveryPromotionBanner2025 />
        
        {/* COMPREHENSIVE CONTENT DISCOVERY ENGINE */}
        <ComprehensiveContentDiscoveryEngine2025 />
        
        {/* REVOLUTIONARY AI PROMOTION BANNER */}
        <RevolutionaryAIPromotionBanner2025 />
        
        {/* REVOLUTIONARY AI CONTENT SHOWCASE */}
        <RevolutionaryAIContentShowcase2025 />
        
        {/* INTERACTIVE SERVICE SHOWCASE */}
        <InteractiveServiceShowcase2025 />
        
        {/* LATEST CONTENT 2025 PROMOTION BANNER */}
        <LatestContent2025PromotionBanner />
        
        {/* LATEST CONTENT 2025 SHOWCASE */}
        <LatestContent2025Showcase />
        {/* AI 2026 CONTENT PROMOTION BANNER */}
        <AI2026ContentPromotionBanner />
        
        {/* AI 2026 CONTENT SHOWCASE */}
        <AI2026ContentShowcase />
        
        {/* NEW CONTENT 2025 PROMOTION BANNER */}
        <NewContent2025PromotionBanner />
        
        {/* NEW CONTENT 2025 SHOWCASE */}
        <NewContent2025Showcase />
        
<<<<<<< HEAD
        {/* AI 2026 BREAKTHROUGH PROMOTION BANNER */}
        <AI2026BreakthroughPromotionBanner />
        
        {/* AI 2026 BREAKTHROUGH CONTENT SHOWCASE */}
        <AI2026BreakthroughContentShowcase />
        
        {/* AI 2026 CONTENT DISCOVERY WIDGET */}
        <AI2026ContentDiscoveryWidget />
        
<<<<<<< HEAD
        {/* AI 2026 CONTENT PROMOTION BANNER */}
        <AI2026ContentPromotionBanner />
        
        {/* AI 2026 CONTENT SHOWCASE */}
        <AI2026ContentShowcase />
        
        {/* REVOLUTIONARY TECH 2025 PROMOTION BANNER */}
        <RevolutionaryTech2025PromotionBanner />
        
        {/* REVOLUTIONARY TECH 2025 SHOWCASE */}
        <RevolutionaryTech2025Showcase />
        
        {/* FUTURE TECH INNOVATION BANNER */}
        <FutureTechInnovationBanner />
        
        {/* ULTIMATE CONTENT DISCOVERY 2025 */}
        <UltimateContentDiscovery2025 />
        {/* LATEST CONTENT 2025 PROMOTION BANNER */}
        <LatestContent2025PromotionBanner />
        
        {/* LATEST CONTENT 2025 SHOWCASE */}
        <LatestContent2025Showcase />
        {/* BREAKTHROUGH CONTENT 2026 PROMOTION BANNER */}
        <section className="py-16 bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium animate-pulse">🔥 BREAKTHROUGH CONTENT - JANUARY 2026</span>
=======

      <div className="min-h-screen bg-white">
        {/* Skip Navigation for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium">⚡ CUTTING-EDGE FEATURES</span>
>>>>>>> c2a6863a57727d83b77b1c9684580c500024095d
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Expert consulting and implementation services for AI automation, cloud infrastructure, 
                and micro SaaS solutions. Accelerate your digital transformation journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link
                  href="/services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                  Explore Services
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section id="main-content" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Fresh Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
                to startup funding strategies, get the knowledge you need to succeed.
              </p>
            </div>

            {/* Featured Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Featured Article 1 */}
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Machine Learning
                    </span>
                    <span className="text-gray-500 text-sm">16 min read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Generative Agents in Production 2025: Real-World Patterns and ROI
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Architecture patterns, guardrails, observability, and cost controls to run reliable AI agents at scale.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Zion Tech Group</p>
                        <p className="text-sm text-gray-500">Jan 12, 2025</p>
                      </div>
                    </div>
                    
                    <Link
                      href="/blog/ai-2025-generative-agents-in-production"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </article>

              {/* Featured Article 2 */}
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Cloud & Infrastructure
                    </span>
                    <span className="text-gray-500 text-sm">14 min read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Cloud Cost Optimization Blueprint 2025: AI Workloads Without Bill Shock
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    FinOps guardrails, model tiering, caching, batching, and cost governance strategies for AI workloads.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Zion Tech Group</p>
                        <p className="text-sm text-gray-500">Jan 12, 2025</p>
                      </div>
                    </div>
                    
                    <Link
                      href="/blog/ai-2025-cloud-cost-optimization-blueprint"
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </article>

              {/* Featured Article 3 */}
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Enterprise AI
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Transformation 2025: Complete Implementation Guide
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete implementation guide with 340% ROI and real case studies for enterprise AI transformation.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Zion Tech Group</p>
                        <p className="text-sm text-gray-500">Jan 10, 2025</p>
                      </div>
                    </div>
                    
                    <Link
                      href="/blog/ai-enterprise-transformation-2025"
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                View All Articles
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions to accelerate your business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Automation</h3>
                <p className="text-gray-600 mb-6">
                  Implement AI solutions that automate processes, improve efficiency, and drive innovation across your organization.
                </p>
                <Link href="/services/ai" className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Scalable, secure, and cost-effective cloud solutions that grow with your business needs.
                </p>
                <Link href="/services/cloud" className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Custom software solutions that solve specific business problems and create new revenue streams.
                </p>
                <Link href="/services/saas" className="text-purple-600 font-semibold hover:text-purple-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Get the latest insights, case studies, and technology trends delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
>>>>>>> c210018437fa4b1cad65c38df68dc1aa2c6da2bf
  );
}