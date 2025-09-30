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
  EnterpriseAISecurityBanner,
  MultimodalAIIntegrationBanner,
  MultimodalAICustomerServiceBanner
} from '../components/NewContentPromotionalBanners';
import {
  AIEnterpriseRevolutionBanner,
  AIAutonomousSystemsBanner,
  AIEnterpriseTransformationMegaSuccessBanner,
  AIRevolutionaryContentShowcaseBanner,
  AI2026MegaBreakthroughBanner
} from '../components/NewContent2026RevolutionaryBanners';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import InteractiveAI2027Calculator from '../components/InteractiveAI2027Calculator';
import InteractiveAICalculator2026 from '../components/InteractiveAICalculator2026';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Revolutionary Content Banners */}
      <AI2026MegaBreakthroughBanner />
      <AIEnterpriseRevolutionBanner />
      <AIAutonomousSystemsBanner />
      <AIEnterpriseTransformationMegaSuccessBanner />
      <AIRevolutionaryContentShowcaseBanner />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge AI technology. Achieve 300% ROI, 
              90% efficiency gains, and $50M+ annual savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest AI Insights & Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Discover how leading enterprises are achieving unprecedented results with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Revolutionary Guide
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Enterprise Revolution 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the AI enterprise revolution with our comprehensive 2026 guide. 
                  Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
                </p>
                <Link
                  href="/blog/ai-2026-enterprise-revolution"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read Full Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Implementation Guide
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Autonomous Systems 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how to implement AI autonomous systems that achieve 95% automation, 
                  80% cost reduction, and 300% ROI.
                </p>
                <Link
                  href="/blog/ai-autonomous-systems-2026"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Explore Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Fortune 500 Success
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Enterprise Transformation Mega Success
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a Fortune 500 company achieved 400% ROI, 90% efficiency gains, 
                  and $50M annual savings with AI transformation.
                </p>
                <Link
                  href="/case-studies/ai-enterprise-transformation-mega-success-2026"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI services designed to transform your enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedServiceCard
              title="AI Enterprise Transformation"
              description="Complete AI transformation services that deliver 300% ROI and 90% efficiency gains"
              icon="🚀"
              href="/services/ai-enterprise-transformation"
            />
            <FeaturedServiceCard
              title="Autonomous Systems Implementation"
              description="Deploy AI autonomous systems that achieve 95% automation and 80% cost reduction"
              icon="🤖"
              href="/services/autonomous-systems"
            />
            <FeaturedServiceCard
              title="Predictive Analytics & AI"
              description="Advanced AI analytics that provide real-time insights and predictive capabilities"
              icon="📊"
              href="/services/predictive-analytics"
            />
            <FeaturedServiceCard
              title="AI-Powered Automation"
              description="Intelligent automation solutions that streamline operations and reduce costs"
              icon="⚡"
              href="/services/ai-automation"
            />
            <FeaturedServiceCard
              title="AI Strategy & Consulting"
              description="Strategic AI consulting to help you plan and execute your AI transformation"
              icon="💡"
              href="/services/ai-consulting"
            />
            <FeaturedServiceCard
              title="AI Training & Support"
              description="Comprehensive training and ongoing support for your AI implementation"
              icon="🎓"
              href="/services/ai-training"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStory
              company="Fortune 500 Manufacturing"
              industry="Manufacturing"
              challenge="Manual processes causing $100M+ annual losses"
              solution="AI-powered autonomous systems and predictive analytics"
              results={[
                "400% ROI achieved in 18 months",
                "90% efficiency improvement",
                "$50M annual cost savings",
                "70% reduction in downtime"
              ]}
            />
            <SuccessStory
              company="Global Financial Services"
              industry="Financial Services"
              challenge="Manual loan processing taking 2-3 weeks"
              solution="AI autonomous loan processing system"
              results={[
                "90% faster processing (2-3 weeks → 2-3 hours)",
                "85% cost reduction",
                "95% customer satisfaction improvement",
                "400% ROI in 8 months"
              ]}
            />
            <SuccessStory
              company="Leading Healthcare Provider"
              industry="Healthcare"
              challenge="Manual patient data processing and analysis"
              solution="AI-powered healthcare analytics and automation"
              results={[
                "80% reduction in processing time",
                "95% accuracy improvement",
                "60% cost savings",
                "300% ROI in 12 months"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Interactive AI Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your AI ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save with AI transformation
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <InteractiveAI2027Calculator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of companies already achieving remarkable results with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Assessment
            </Link>
            <Link
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}