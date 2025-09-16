import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import LoadingSpinner from './components/LoadingSpinner';

// Import promotional components
import NewContentPromotionBanner from './components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from './components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner2025 from './components/ComprehensiveSolutionsBanner2025';
import NewServicesShowcase2025 from './components/NewServicesShowcase2025';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';
import NewContent2026Showcase from './components/NewContent2026Showcase';
import RevolutionaryContent2026Banner from './components/RevolutionaryContent2026Banner';
import FeaturedContentShowcase2026 from './components/FeaturedContentShowcase2026';
import EnhancedContentPromotionBanner2026 from './components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from './components/ComprehensiveContentShowcase2026';
import RevolutionaryContent2025Banner from './components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from './components/UltimateContentShowcase2025';
import NewContent2025UltimateBanner from './components/NewContent2025UltimateBanner';
import UltimatePromotionBanner2026 from './components/UltimatePromotionBanner2026';
import UltimateContentShowcase2026 from './components/UltimateContentShowcase2026';
import SuccessMetricsShowcase2026 from './components/SuccessMetricsShowcase2026';
import AI2025BreakthroughBanner from './components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from './components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from './components/LatestContentShowcase2025';
import RevolutionaryAIContentBanner from './components/RevolutionaryAIContentBanner';
import AI2026QuantumRevolutionBanner from './components/AI2026QuantumRevolutionBanner';
import AI2026AutonomousSystemsBanner from './components/AI2026AutonomousSystemsBanner';
import AI2026UltimateShowcaseBanner from './components/AI2026UltimateShowcaseBanner';
import QuantumAI2026BreakthroughBanner from './components/QuantumAI2026BreakthroughBanner';
import QuantumAIContentShowcase2026 from './components/QuantumAIContentShowcase2026';
import RevolutionaryContentBanner2025 from './components/RevolutionaryContentBanner2025';
import RevolutionaryAI2026ContentBanner from './components/RevolutionaryAI2026ContentBanner';
import NewContent2026UltimateShowcase from './components/NewContent2026UltimateShowcase';
import QuantumAIRevolutionBanner2025 from './components/QuantumAIRevolutionBanner2025';
import NewContent2025UltimateShowcase from './components/NewContent2025UltimateShowcase';
import AI2026QuantumRevolutionUltimateBanner from './components/AI2026QuantumRevolutionUltimateBanner';
import RevolutionaryAIContent2026Banner from './components/RevolutionaryAIContent2026Banner';
import NewContent2025AdvancedAutomationBanner from './components/NewContent2025AdvancedAutomationBanner';
import AdvancedAutomationContentShowcase2025 from './components/AdvancedAutomationContentShowcase2025';
import NewContent2025AnalyticsRevolutionBanner from './components/NewContent2025AnalyticsRevolutionBanner';
import AnalyticsContentShowcase2025 from './components/AnalyticsContentShowcase2025';
import NewMultimodalAgents2025Banner from './components/NewMultimodalAgents2025Banner';
import AutonomousAnalytics2025PromoBanner from './components/AutonomousAnalytics2025PromoBanner';
import NewAutonomousRevenueAgentsPromo from './components/NewAutonomousRevenueAgentsPromo';
import NewContent2026UltimateBanner from './components/NewContent2026UltimateBanner';
import RevolutionaryAI2026Banner from './components/RevolutionaryAI2026Banner';
import EnterpriseAI2026Showcase from './components/EnterpriseAI2026Showcase';

// Lazy load heavy components
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const StructuredData = lazy(() => import('./components/StructuredData'));
const PerformanceMetrics = lazy(() => import('./components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('./components/TechnologyStack'));

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

      {/* New Promo: Latest Content */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-100">
            <div>
              <p className="text-sm font-semibold text-emerald-700">Latest Content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Advanced Agent Platform Solutions</h2>
              <p className="text-gray-600 mt-2">Comprehensive guides for building, deploying, and scaling autonomous AI agents in enterprise environments.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-2026-agent-platform-guide" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Read Guide</Link>
              <Link href="/blog/ai-2026-agent-platform-best-practices" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Best Practices</Link>
            </div>
          </div>
        </div>
      </section>

      <div className='min-h-screen bg-white'>
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

        {/* New Content Promotional Banners */}
        <NewContent2026UltimateBanner />
        <RevolutionaryAI2026Banner />
        <EnterpriseAI2026Showcase />
        <NewContent2025UltimateBanner />
        <AI2026QuantumRevolutionUltimateBanner />
        <RevolutionaryAIContent2026Banner />
        <NewContent2025AdvancedAutomationBanner />
        <AdvancedAutomationContentShowcase2025 />
        <NewContent2025AnalyticsRevolutionBanner />
        <AnalyticsContentShowcase2025 />
        <NewMultimodalAgents2025Banner />
        <AutonomousAnalytics2025PromoBanner />
        <NewAutonomousRevenueAgentsPromo />

        {/* Featured Content Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-purple-700 mb-2">Guide</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Enterprise Agent Platform</h3>
                <p className="text-gray-600 mb-4">Complete blueprint for building, deploying, and scaling autonomous AI agents in enterprise environments.</p>
                <Link href="/content/ai-2026-enterprise-agent-platform" className="text-purple-600 font-semibold hover:text-purple-800">Read Guide →</Link>
              </article>
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-blue-700 mb-2">Article</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quantum AI: The Future of Computing</h3>
                <p className="text-gray-600 mb-4">Exploring quantum-enhanced AI systems and their transformative potential for enterprise applications.</p>
                <Link href="/content/quantum-ai-2026" className="text-blue-600 font-semibold hover:text-blue-800">Read Article →</Link>
              </article>
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-indigo-700 mb-2">Framework</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Autonomous Operations Blueprint</h3>
                <p className="text-gray-600 mb-4">Comprehensive framework for implementing self-managing systems and autonomous business operations.</p>
                <Link href="/content/autonomous-operations-blueprint" className="text-indigo-700 font-semibold hover:text-indigo-900">Read Framework →</Link>
              </article>
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-green-700 mb-2">Guide</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Governance & Compliance</h3>
                <p className="text-gray-600 mb-4">Best practices for governing AI systems, ensuring compliance, and managing risk in enterprise environments.</p>
                <Link href="/content/ai-governance-compliance" className="text-green-700 font-semibold hover:text-green-900">Read Guide →</Link>
              </article>
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

        {/* Additional Content Promotional Banners */}
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