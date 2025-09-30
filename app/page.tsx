import React from 'react';
import Link from 'next/link';
import { 
  NewBlogBanner, 
  AnalyticsPlatformBanner, 
  TechCorpSuccessBanner,
  WorkflowAutomationBanner,
  AIAnalyticsBanner,
  HealthTechSuccessBanner,
  ComprehensiveAIBanner,
  EnterpriseAIBanner,
  NewContentBanner,
  CustomerServiceAIBanner,
  HealthcareAIBanner,
  RetailSuccessBanner,
  AIContentShowcaseBanner,
  AIRevolutionBanner,
  AutonomousAgentsBanner,
  AIGovernanceBanner,
  FinTechSuccessBanner,
  NewContentShowcaseBanner,
  AgenticAIRevolution2027Banner,
  EdgeAI2027Banner,
  QuantumAI2027Banner,
  RetailerAITransformation2027Banner,
  TechUnicornAgenticAI2027Banner,
  NewContent2027MegaShowcase
} from '../components/PromotionalBanner';
import {
  AIEnterpriseAdoptionBanner,
  AITrends2025Banner,
  SupplyChainOptimizationBanner,
  AIBusinessTransformationBanner,
  AICustomerExperienceBanner,
  EnterpriseAITransformationBanner,
  LatestAIInsightsBanner,
  AIServicesShowcaseBanner,
  AIWorkflowAutomationBanner,
  EnterpriseAISecurityBanner
} from '../components/NewContentPromotionalBanners';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import Revolutionary2026ContentBanner from '../components/Revolutionary2026ContentBanner';
import LatestAIInnovations2026Banner from '../components/LatestAIInnovations2026Banner';
import InteractiveAICalculator from '../components/InteractiveAICalculator';
import NewContent2026MegaSuccessBanner from '../components/NewContent2026MegaSuccessBanner';
import AITrends2026PredictionsBanner from '../components/AITrends2026PredictionsBanner';
import InteractiveContentShowcase2026 from '../components/InteractiveContentShowcase2026';
import AI2027BreakthroughBanner from '../components/AI2027BreakthroughBanner';
import EnterpriseTransformation2027Banner from '../components/EnterpriseTransformation2027Banner';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="animate-fade-in">
<<<<<<< HEAD
        {/* 🚀 BRAND NEW CONTENT - September 30, 2025 - MEGA BANNER */}
        <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 border-b-4 border-white/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/20 border border-white/40 mb-6 animate-pulse">
                <span className="text-white font-black text-2xl tracking-wider uppercase">
                  🔥 5 GROUNDBREAKING NEW ARTICLES JUST PUBLISHED! 🔥
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
                Master the Future of AI Today
              </h2>
              <p className="text-2xl md:text-3xl text-white font-bold mb-8 max-w-5xl mx-auto leading-relaxed">
                🛡️ Autonomous Threat Response • 🧠 Advanced Prompt Engineering • 🔬 Synthetic Data Generation •
                ⚖️ AI Explainability • 🤖 Production Reinforcement Learning
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-7xl mx-auto">
                <Link href="/blog/ai-autonomous-threat-response-2025" className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-left">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Autonomous Threat Response</h3>
                  <p className="text-white/90 text-sm mb-3">Sub-30s incident containment • 99.8% accuracy • 95% MTTR reduction</p>
                  <div className="text-yellow-300 font-semibold text-sm">14 min read →</div>
                </Link>
                <Link href="/blog/ai-prompt-engineering-mastery-2025" className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-left">
                  <div className="text-4xl mb-3">🧠</div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Prompt Engineering</h3>
                  <p className="text-white/90 text-sm mb-3">95%+ accuracy • 70% cost reduction • Production optimization</p>
                  <div className="text-yellow-300 font-semibold text-sm">16 min read →</div>
                </Link>
                <Link href="/blog/ai-synthetic-data-generation-2025" className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-left">
                  <div className="text-4xl mb-3">🔬</div>
                  <h3 className="text-xl font-bold text-white mb-2">Synthetic Data Generation</h3>
                  <p className="text-white/90 text-sm mb-3">98% statistical parity • Perfect privacy • Unlimited training data</p>
                  <div className="text-yellow-300 font-semibold text-sm">15 min read →</div>
                </Link>
                <Link href="/blog/ai-explainability-frameworks-2025" className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-left">
                  <div className="text-4xl mb-3">⚖️</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Explainability Frameworks</h3>
                  <p className="text-white/90 text-sm mb-3">90%+ stakeholder confidence • Regulatory compliance • Trust through transparency</p>
                  <div className="text-yellow-300 font-semibold text-sm">13 min read →</div>
                </Link>
                <Link href="/blog/ai-reinforcement-learning-production-2025" className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-left">
                  <div className="text-4xl mb-3">🤖</div>
                  <h3 className="text-xl font-bold text-white mb-2">Production Reinforcement Learning</h3>
                  <p className="text-white/90 text-sm mb-3">10x better than supervised learning • PPO & RLHF • Continuous learning</p>
                  <div className="text-yellow-300 font-semibold text-sm">17 min read →</div>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-white text-orange-600 px-12 py-5 rounded-xl font-black text-2xl hover:bg-yellow-50 transition-all duration-300 hover:scale-110 shadow-2xl inline-flex items-center gap-3"
                >
                  <span>🚀 Read All New Articles Now</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI 2027 Breakthrough Banner */}
        <AI2027BreakthroughBanner />
        
        {/* Enterprise Transformation 2027 Banner */}
        <EnterpriseTransformation2027Banner />
        
        {/* Latest 2026 Mega Content Banners */}
        <AI2026ContentShowcaseBanner />
        <AIEnterpriseAutomationRevolutionBanner />
        <AIQuantumComputingBreakthroughBanner />
        <AIMegaTransformationSuccessBanner />
        <AI2026InnovationShowcaseBanner />
        
        {/* 🔥 LATEST 2027 CONTENT - Featured First! */}
        <NewContent2027MegaShowcase />
        <AgenticAIRevolution2027Banner />
        <EdgeAI2027Banner />
        <QuantumAI2027Banner />
        <RetailerAITransformation2027Banner />
        <TechUnicornAgenticAI2027Banner />
        
        {/* New Mega Success Story Banner */}
        <NewContent2026MegaSuccessBanner />
        
        {/* AI Trends 2026 Predictions Banner */}
        <AITrends2026PredictionsBanner />
        
        {/* Revolutionary 2026 Content Banner */}
        <Revolutionary2026ContentBanner />
        
        {/* Latest AI Innovations Banner */}
        <LatestAIInnovations2026Banner />
        
        {/* New Content Promotional Banners */}
        <AIEnterpriseAdoptionBanner />
        <AITrends2025Banner />
        <SupplyChainOptimizationBanner />
        <AIBusinessTransformationBanner />
        <AICustomerExperienceBanner />
        <EnterpriseAITransformationBanner />
        <LatestAIInsightsBanner />
        <AIServicesShowcaseBanner />
        <AIWorkflowAutomationBanner />
        <EnterpriseAISecurityBanner />
        
        {/* Existing Promotional Banners */}
        <NewContentShowcaseBanner />
        <AutonomousAgentsBanner />
        <AIGovernanceBanner />
        <FinTechSuccessBanner />
        <AIContentShowcaseBanner />
        <CustomerServiceAIBanner />
        <HealthcareAIBanner />
        <RetailSuccessBanner />
        <AIRevolutionBanner />
        <NewBlogBanner />
        <WorkflowAutomationBanner />
        <AIAnalyticsBanner />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-8">
            AI, Micro SaaS, and IT Services
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Data Analytics</h3>
              <p className="text-gray-600 mb-4">Transform data into actionable insights with predictive modeling and real-time dashboards</p>
              <Link href="/services/ai-data-analytics" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Workflow Automation</h3>
              <p className="text-gray-600 mb-4">Automate business processes with intelligent workflow design and smart triggers</p>
              <Link href="/services/ai-workflow-automation" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Virtual Assistant</h3>
              <p className="text-gray-600 mb-4">24/7 intelligent customer support with natural language processing</p>
              <Link href="/services/ai-virtual-assistant" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Content Showcase */}
      <InteractiveContentShowcase2026 />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}