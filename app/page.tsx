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
  NewContentShowcaseBanner
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
import Revolutionary2026ContentBanner from '../components/Revolutionary2026ContentBanner';
import LatestAIInnovations2026Banner from '../components/LatestAIInnovations2026Banner';
import InteractiveAICalculator from '../components/InteractiveAICalculator';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
=======
    <div className="animate-fade-in">
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
      
>>>>>>> cursor/create-and-deploy-new-content-9ca2
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

<<<<<<< HEAD
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
=======
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Finance Automation</h3>
                  <p className="text-sm text-gray-500">$3M+ savings achieved</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                See how AI automation achieved 95% process reduction and $3M annual savings 
                for a leading financial services company.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                <Link
                  to="/case-studies/ai-finance-automation"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Innovations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Content Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our latest content, case studies, and AI innovations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link to="/blog/ai-enterprise-adoption-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Adoption 2025: Complete Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/ai-trends-2025-predictions" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Trends 2025: Top 10 Predictions & Industry Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/case-studies/ai-supply-chain-optimization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Manufacturing</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
            <Link to="/blog/ai-autonomous-agents-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Autonomous Agents 2025: Enterprise Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/ai-governance-framework-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Governance Framework 2025: Enterprise Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/case-studies/fintech-ai-risk-compliance-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">FinTech</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a leading fintech achieved 70% risk reduction with automated governance frameworks.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
            <Link to="/blog/llm-cost-optimization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Popular Article
                  </span>
                  <span className="text-sm text-gray-500">9 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  LLM Cost Optimization in 2025: Practical Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Cut LLM spend by 30–70% with routing, caching, and quantization patterns.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/edge-llm-latency-patterns" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Edge LLM Latency Patterns: Sub-200ms Interactions
                </h3>
                <p className="text-gray-600 mb-4">
                  Streaming, prefetch, and edge compute patterns for instant-feel AI UX.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/genai-guardrails-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">11 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  GenAI Guardrails 2025: Practical Playbook for Reliable AI
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical patterns to ship safe, reliable, and auditable GenAI systems in production.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/ai-revolution-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Revolution 2025: Complete Business Transformation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/blog/ai-agents-in-the-enterprise-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Agents in the Enterprise: 2025 Adoption Playbook
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical guide to rolling out autonomous AI agents across enterprise workflows with ROI.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/techcorp-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">E-commerce</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  TechCorp: 90% Efficiency Gain with AI
                </h3>
                <p className="text-gray-600 mb-4">
                  See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/finserve-genai-risk-mitigation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Fintech</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinServe: GenAI Risk Mitigation & Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  How a fintech leader cut AI risk by 70% and achieved audit-ready compliance.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link to="/blog/ai-customer-service-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI-Powered Customer Service Revolution
                </h3>
                <p className="text-gray-600 mb-4">
                  80% faster response times, 90% cost reduction - discover how AI is transforming customer support.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/blog/ai-healthcare-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Healthcare Transformation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  40% better diagnostics, 60% improved outcomes - how AI is revolutionizing patient care.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/retail-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Retail</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  RetailAI Corp: 150% Revenue Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStory
              company="TechCorp Inc."
              industry="E-commerce"
              challenge="Manual data processing taking 40 hours/week"
              solution="AI Data Analytics automation"
              result="90% time reduction, 60% cost savings"
              metric="$500K saved annually"
            />
            <SuccessStory
              company="HealthTech Solutions"
              industry="Healthcare"
              challenge="Customer support overwhelmed with queries"
              solution="AI Virtual Assistant implementation"
              result="80% faster response time, 24/7 support"
              metric="95% customer satisfaction"
            />
            <SuccessStory
              company="FinanceFlow Ltd."
              industry="Fintech"
              challenge="Complex workflow bottlenecks"
              solution="AI Workflow Automation platform"
              result="75% process efficiency improvement"
              metric="300% ROI in 6 months"
            />
          </div>
        </div>
      </section>

      {/* Interactive AI Calculator */}
      <InteractiveAICalculator />

      {/* Enhanced Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter Signup */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">
                Stay Ahead with AI & Tech Insights
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get weekly updates on AI trends, tech innovations, and exclusive service offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>

            {/* Content Highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Revolution 2025 Guide</h4>
                    <p className="text-sm opacity-90">Complete business transformation strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Workflow Automation Guide</h4>
                    <p className="text-sm opacity-90">Reduce manual work by 80%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Analytics Implementation</h4>
                    <p className="text-sm opacity-90">Transform data into insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h4 className="font-semibold mb-1">HealthTech Success Story</h4>
                    <p className="text-sm opacity-90">80% efficiency gain with AI</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  to="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View All Content →
                </Link>
>>>>>>> cursor/create-and-deploy-new-content-9ca2
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