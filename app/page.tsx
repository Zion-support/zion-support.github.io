import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import EnhancedSEO from '../components/EnhancedSEO';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import EnhancedAnalytics from '../components/EnhancedAnalytics';
import MobileOptimizedNav from '../components/MobileOptimizedNav';
import InteractiveContentWidget from '../components/InteractiveContentWidget';

// Core AI components
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

// Lazy load heavy components for better performance
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
const PerformanceMetrics = lazy(() => import('../components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

// Key promotional components - organized by priority
import NeuralInterfaceRevolution2025Banner from '../components/NeuralInterfaceRevolution2025Banner';
import NeuralInterfaceContentShowcase2025 from '../components/NeuralInterfaceContentShowcase2025';
import UltimateContent2025ShowcaseBanner from '../components/UltimateContent2025ShowcaseBanner';
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';
import RevolutionaryContent2025Banner from '../components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';
import NewContent2025UltimateBanner from '../components/NewContent2025UltimateBanner';
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import QuantumAIRevolutionBanner2025 from '../components/QuantumAIRevolutionBanner2025';
import NewContent2025AnalyticsRevolutionBanner from '../components/NewContent2025AnalyticsRevolutionBanner';
import AnalyticsContentShowcase2025 from '../components/AnalyticsContentShowcase2025';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions | 500%+ ROI Guaranteed',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services with proven 500%+ ROI results.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation', '500% ROI', 'AI implementation'],
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions. Proven 500%+ ROI results.',
    type: 'website',
    url: 'https://zion.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions. Proven 500%+ ROI results.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  // Sample content data for the interactive widget
  const sampleContent = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      type: 'blog' as const,
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      description: 'Transform your business with brain-computer interface technology - 800% ROI in 12 months with proven neural interface implementations.',
      tags: ['Neural Interfaces', 'Business Revolution', 'ROI', 'Enterprise'],
      readingTime: '25 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$50M+',
        satisfaction: '98%'
      }
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: 800% ROI Success Story',
      type: 'case-study' as const,
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      description: 'How a Global Manufacturing Giant achieved $75M annual savings with neural interface technology in just 8 months.',
      tags: ['Case Study', 'Fortune 500', 'Neural Interfaces', 'ROI'],
      readingTime: '18 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$75M',
        satisfaction: '98%'
      }
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Guide 2025: 800% ROI Framework',
      type: 'resource' as const,
      url: '/resources/neural-interface-implementation-guide-2025',
      description: 'Complete enterprise implementation strategy for neural interface technology with proven 800% ROI framework.',
      tags: ['Implementation Guide', 'Neural Interfaces', 'ROI', 'Framework'],
      readingTime: '15 min read',
      featured: true,
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '12 months'
      }
    }
  ];

  return (
    <ErrorBoundary>
      <EnhancedSEO
        title="Zion Tech Group - AI & Technology Solutions | 500%+ ROI Guaranteed"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services with proven 500%+ ROI results."
        keywords={['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation', '500% ROI', 'AI implementation']}
        canonicalUrl="https://zion.app"
        ogImage="/og-image.jpg"
      />
      
      <EnhancedAnalytics />
      <PerformanceMonitor />
      <MobileOptimizedNav />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
        {/* Neural Interface Revolution Banner - Top Priority */}
        <section className="relative overflow-hidden">
          <NeuralInterfaceRevolution2025Banner />
        </section>

        {/* Neural Interface Content Showcase */}
        <section className="py-20 bg-white">
          <NeuralInterfaceContentShowcase2025 />
        </section>

        {/* Hero Section with Ultimate Content Showcase */}
        <section className="relative overflow-hidden">
          <UltimateContent2025ShowcaseBanner />
        </section>

        {/* New Content 2025 Ultimate Showcase */}
        <section className="py-16 bg-white">
          <NewContent2025UltimateShowcaseBanner />
        </section>

        {/* Revolutionary Content 2025 Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <RevolutionaryContent2025Banner />
        </section>

        {/* Ultimate Content Showcase 2025 */}
        <section className="py-20 bg-white">
          <UltimateContentShowcase2025 />
        </section>

        {/* New Content 2025 Ultimate Banner */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <NewContent2025UltimateBanner />
        </section>

        {/* AI 2025 Breakthrough Banner */}
        <section className="py-16 bg-white">
          <AI2025BreakthroughBanner />
        </section>

        {/* Quantum AI Revolution Banner */}
        <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
          <QuantumAIRevolutionBanner2025 />
        </section>

        {/* Analytics Revolution Banner */}
        <section className="py-16 bg-white">
          <NewContent2025AnalyticsRevolutionBanner />
        </section>

        {/* Analytics Content Showcase */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
          <AnalyticsContentShowcase2025 />
        </section>

        {/* Core Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From advanced analytics to autonomous systems, we provide end-to-end AI solutions 
                that deliver measurable results and competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Advanced AI Assistant */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <AdvancedAIAssistant />
              </div>

              {/* Business Intelligence Dashboard */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <BusinessIntelligenceDashboard />
              </div>

              {/* Advanced Analytics Engine */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <AdvancedAnalyticsEngine />
              </div>

              {/* Automation Workflow Engine */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <AutomationWorkflowEngine />
              </div>

              {/* Enterprise Data Management */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <EnterpriseDataManagement />
              </div>

              {/* API Management System */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <APIManagementSystem />
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Calculate Your AI ROI Potential
              </h2>
              <p className="text-xl opacity-90">
                See how much your business could save and earn with our AI solutions
              </p>
            </div>
            
            <Suspense fallback={<LoadingSpinner />}>
              <ROICalculator />
            </Suspense>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<LoadingSpinner />}>
              <PerformanceMetrics />
            </Suspense>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<LoadingSpinner />}>
              <TechnologyStack />
            </Suspense>
          </div>
        </section>

        {/* Interactive Content Discovery Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InteractiveContentWidget contentItems={sampleContent} maxItems={6} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies achieving 500%+ ROI with our proven AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <Suspense fallback={<LoadingSpinner />}>
          <StructuredData />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}