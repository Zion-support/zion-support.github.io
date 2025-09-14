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
import FeaturedContentShowcase2026 from '../components/FeaturedContentShowcase2026';
import EnhancedContentPromotionBanner2026 from '../components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from '../components/ComprehensiveContentShowcase2026';
import RevolutionaryContent2025Banner from '../components/RevolutionaryContent2025Banner';
// Import new 2026 promotional components
import UltimatePromotionBanner2026 from '../components/UltimatePromotionBanner2026';
import SuccessMetricsShowcase2026 from '../components/SuccessMetricsShowcase2026';
// Import new 2025 revolutionary content components
import RevolutionaryContentShowcase2025 from '../components/RevolutionaryContentShowcase2025';
import RevolutionaryContent2026Banner from '../components/RevolutionaryContent2026Banner';

// Import additional promotional components
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';
import QuantumAI2026BreakthroughBanner from '../components/QuantumAI2026BreakthroughBanner';
import RevolutionaryContentBanner2025 from '../components/RevolutionaryContentBanner2025';

// Import new 2025 breakthrough promotional components
import QuantumRevolution2025Banner from '../components/QuantumRevolution2025Banner';
import GenerativeAI2025Banner from '../components/GenerativeAI2025Banner';
import NewContentPromotionBanner2025 from '../components/NewContentPromotionBanner2025';

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
        {/* New Content Promotion Banner */}
        <NewContentPromotionBanner2025 />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with AI 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join the AI revolution and achieve unprecedented growth with cutting-edge artificial intelligence, 
              autonomous systems, and enterprise automation solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">$2.8B+</div>
                <div className="text-gray-600">Total Business Value Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">450%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">99.7%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Companies Transformed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Automation</h3>
                <p className="text-gray-600 mb-6">
                  Deploy intelligent automation solutions that handle complex business processes 
                  with superhuman efficiency and accuracy.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Build scalable, secure cloud solutions that grow with your business and deliver 
                  exceptional performance worldwide.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Transform your enterprise with comprehensive digital transformation strategies 
                  and cutting-edge technology implementations.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                href="/case-studies/ai-customer-experience-transformation-2025-ultimate-success"
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  TechCorp: $15M ROI Through AI Customer Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how TechCorp transformed their customer service operations and achieved 
                  unprecedented results with AI-powered autonomous agents.
                </p>
                <div className="text-blue-600 font-semibold">Read Case Study →</div>
              </Link>
              
              <Link 
                href="/case-studies/enterprise-ai-transformation-2025-ultimate-success-story"
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise AI Transformation: $2.8B Value Creation
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how Fortune 500 companies achieved massive ROI through comprehensive 
                  AI transformation strategies and implementations.
                </p>
                <div className="text-blue-600 font-semibold">Read Case Study →</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their operations with 
              our AI-powered solutions and expert guidance.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
