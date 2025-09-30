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
import AI2026RevolutionaryBanner from '../components/AI2026RevolutionaryBanner';
import AI2026SuccessStoryBanner from '../components/AI2026SuccessStoryBanner';
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

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* AI 2026 Revolutionary Banners */}
      <AI2026RevolutionaryBanner />
      <AI2026SuccessStoryBanner />
      
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
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$2M+</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured AI & IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular services that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Data Analytics</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$199</div>
                <div className="text-gray-600">per month</div>
              </div>
              <p className="text-gray-700 mb-6">
                Transform data into actionable insights with predictive modeling and real-time dashboards
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Predictive Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Real-time Dashboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Data Integration</span>
                </li>
              </ul>
              <Link
                href="/services/ai-data-analytics"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Workflow Automation</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$149</div>
                <div className="text-gray-600">per month</div>
              </div>
              <p className="text-gray-700 mb-6">
                Automate business processes with intelligent workflow design and smart triggers
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Process Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Smart Triggers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Performance Monitoring</span>
                </li>
              </ul>
              <Link
                href="/services/ai-workflow-automation"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Virtual Assistant</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$99</div>
                <div className="text-gray-600">per month</div>
              </div>
              <p className="text-gray-700 mb-6">
                24/7 intelligent customer support with natural language processing
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Multi-channel</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Personalized Responses</span>
                </li>
              </ul>
              <Link
                href="/services/ai-virtual-assistant"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Showcase */}
      <ContentShowcase />

      {/* Latest Innovations Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest AI Innovations & Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/blog/ai-2026-mega-breakthrough" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI 2026 Mega Breakthrough</h3>
                    <p className="text-sm text-gray-500">Revolutionary Technologies</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Discover the groundbreaking AI technologies of 2026 that are revolutionizing enterprise operations, 
                  from quantum-enhanced neural networks to autonomous business systems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
                  <span className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-quantum-computing-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI Quantum Computing 2026</h3>
                    <p className="text-sm text-gray-500">Revolutionary Breakthroughs</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Discover how quantum computing is revolutionizing AI in 2026, delivering 1000x faster processing 
                  and 99.7% accuracy in complex optimization problems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
                  <span className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-2026-mega-transformation-success" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">$50M Savings & 300% ROI</h3>
                    <p className="text-sm text-gray-500">Success Story</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  See how a Fortune 500 company achieved unprecedented results through comprehensive AI transformation 
                  using cutting-edge 2026 technologies.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
                  <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Innovations
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
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">TechCorp Inc.</h3>
              <p className="text-gray-600 mb-4"><strong>Industry:</strong> E-commerce</p>
              <p className="text-gray-600 mb-4"><strong>Challenge:</strong> Manual data processing taking 40 hours/week</p>
              <p className="text-gray-600 mb-4"><strong>Solution:</strong> AI Data Analytics automation</p>
              <p className="text-gray-600 mb-4"><strong>Result:</strong> 90% time reduction, 60% cost savings</p>
              <p className="text-2xl font-bold text-green-600">$500K saved annually</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">HealthTech Solutions</h3>
              <p className="text-gray-600 mb-4"><strong>Industry:</strong> Healthcare</p>
              <p className="text-gray-600 mb-4"><strong>Challenge:</strong> Customer support overwhelmed with queries</p>
              <p className="text-gray-600 mb-4"><strong>Solution:</strong> AI Virtual Assistant implementation</p>
              <p className="text-gray-600 mb-4"><strong>Result:</strong> 80% faster response time, 24/7 support</p>
              <p className="text-2xl font-bold text-green-600">95% customer satisfaction</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">FinanceFlow Ltd.</h3>
              <p className="text-gray-600 mb-4"><strong>Industry:</strong> Fintech</p>
              <p className="text-gray-600 mb-4"><strong>Challenge:</strong> Complex workflow bottlenecks</p>
              <p className="text-gray-600 mb-4"><strong>Solution:</strong> AI Workflow Automation platform</p>
              <p className="text-gray-600 mb-4"><strong>Result:</strong> 75% process efficiency improvement</p>
              <p className="text-2xl font-bold text-green-600">300% ROI in 6 months</p>
            </div>
          </div>
        </div>
      </section>

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
                    <h4 className="font-semibold mb-1">AI 2026 Revolutionary Solutions</h4>
                    <p className="text-sm opacity-90">Cutting-edge quantum-enhanced AI technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Quantum Computing Breakthroughs</h4>
                    <p className="text-sm opacity-90">1000x faster processing with 99.7% accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold mb-1">Success Stories</h4>
                    <p className="text-sm opacity-90">$50M+ savings and 300% ROI achieved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h4 className="font-semibold mb-1">Manufacturing Optimization</h4>
                    <p className="text-sm opacity-90">90% efficiency gain with quantum AI</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Promotional Banners */}
      <AnalyticsPlatformBanner />
      <HealthTechSuccessBanner />
      <ComprehensiveAIBanner />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}