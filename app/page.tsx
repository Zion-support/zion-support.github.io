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

// Lazy load promotional components for better performance
const UltimateContent2025Banner = lazy(() => import('../components/UltimateContent2025Banner'));
const RevolutionaryContent2025Showcase = lazy(() => import('../components/RevolutionaryContent2025Showcase'));
const AI2025UltimateBreakthroughBanner = lazy(() => import('../components/AI2025UltimateBreakthroughBanner'));
const RevolutionaryAIContent2026Banner = lazy(() => import('../components/RevolutionaryAIContent2026Banner'));
const AI2026QuantumRevolutionUltimateBanner = lazy(() => import('../components/AI2026QuantumRevolutionUltimateBanner'));
const NewContent2026UltimateShowcase = lazy(() => import('../components/NewContent2026UltimateShowcase'));
const QuantumAIRevolutionBanner2025 = lazy(() => import('../components/QuantumAIRevolutionBanner2025'));
const NewContent2025UltimateBanner = lazy(() => import('../components/NewContent2025UltimateBanner'));
const AI2026UltimateShowcaseBanner = lazy(() => import('../components/AI2026UltimateShowcaseBanner'));
const AI2026QuantumRevolutionBanner = lazy(() => import('../components/AI2026QuantumRevolutionBanner'));
const AI2026AutonomousSystemsBanner = lazy(() => import('../components/AI2026AutonomousSystemsBanner'));
const UltimatePromotionBanner2026 = lazy(() => import('../components/UltimatePromotionBanner2026'));

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
// Import new 2026 promotional components
import UltimatePromotionBanner2026 from '../components/UltimatePromotionBanner2026';
import UltimateContentShowcase2026 from '../components/UltimateContentShowcase2026';
import SuccessMetricsShowcase2026 from '../components/SuccessMetricsShowcase2026';

// Import additional promotional components
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import RevolutionaryAIContentBanner from '../components/RevolutionaryAIContentBanner';
import NewContent2025UltimateBanner from '../components/NewContent2025UltimateBanner';

// Import new AI 2026 promotional components
import AI2026QuantumRevolutionBanner from '../components/AI2026QuantumRevolutionBanner';
import AI2026AutonomousSystemsBanner from '../components/AI2026AutonomousSystemsBanner';
import AI2026UltimateShowcaseBanner from '../components/AI2026UltimateShowcaseBanner';
import NewContentShowcase2025 from '../components/NewContentShowcase2025';
import QuantumAIContentShowcase2026 from '../components/QuantumAIContentShowcase2026';

// Import remaining promotional components (non-lazy loaded)
import RevolutionaryAI2026ContentBanner from '../components/RevolutionaryAI2026ContentBanner';

// Import remaining promotional components (non-lazy loaded)
import NewContent2025UltimateShowcase from '../components/NewContent2025UltimateShowcase';

// Import remaining promotional components (non-lazy loaded)
import RevolutionaryContentBanner2025 from '../components/RevolutionaryContentBanner2025';

// Import new 2025 breakthrough promotional components
import QuantumAI2025BreakthroughPromotionBanner from '../components/QuantumAI2025BreakthroughPromotionBanner';
import AutonomousBusinessOperationsPromotionBanner from '../components/AutonomousBusinessOperationsPromotionBanner';
import AI1000ROISuccessStoryBanner from '../components/AI1000ROISuccessStoryBanner';

// Import new 2030 revolutionary content promotional components
import RevolutionaryContent2030PromotionBanner from '../components/RevolutionaryContent2030PromotionBanner';
import InteractiveContentDiscoveryWidget2030 from '../components/InteractiveContentDiscoveryWidget2030';

// Import new 2025 breakthrough promotional components
import UltimateContent2025BreakthroughBanner from '../components/UltimateContent2025BreakthroughBanner';
import RevolutionaryContent2025UltimateBanner from '../components/RevolutionaryContent2025UltimateBanner';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions | 400-700% ROI Guaranteed',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Achieve 400-700% ROI with our proven AI implementation strategies. Expert consulting and implementation services.',
  keywords: [
    'AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 
    'enterprise solutions', 'digital transformation', 'AI ROI', 'AI implementation',
    '400% ROI', '700% ROI', 'AI transformation', 'enterprise AI', 'AI consulting',
    'machine learning', 'artificial intelligence', 'business automation'
  ],
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions | 400-700% ROI Guaranteed',
    description: 'Transform your business with cutting-edge AI solutions. Achieve 400-700% ROI with our proven implementation strategies.',
    type: 'website',
    url: 'https://zion.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI Solutions with 400-700% ROI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & Technology Solutions | 400-700% ROI Guaranteed',
    description: 'Transform your business with cutting-edge AI solutions. Achieve 400-700% ROI with our proven implementation strategies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Achieve 400-700% ROI with our proven AI implementation strategies.",
              "url": "https://zion.app",
              "logo": "https://zion.app/logo.png",
              "sameAs": [
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/zion-tech-group"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-ZION-TECH",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "offers": {
                "@type": "Offer",
                "name": "AI Implementation Services",
                "description": "AI transformation services with guaranteed 400-700% ROI",
                "priceRange": "$50,000 - $500,000",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
        
        {/* Ultimate Content 2025 Breakthrough Banner - NEW */}
        <Suspense fallback={<LoadingSpinner />}>
          <UltimateContent2025BreakthroughBanner />
        </Suspense>
        
        {/* Revolutionary Content 2025 Ultimate Banner - NEW */}
        <Suspense fallback={<LoadingSpinner />}>
          <RevolutionaryContent2025UltimateBanner />
        </Suspense>
        
        {/* AI 2025 Ultimate Breakthrough Banner - NEW */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2025UltimateBreakthroughBanner />
        </Suspense>
        
        {/* Revolutionary AI Content 2026 Banner - NEW FEATURED */}
        <Suspense fallback={<LoadingSpinner />}>
          <RevolutionaryAIContent2026Banner />
        </Suspense>
        
        {/* AI 2026 Quantum Revolution Ultimate Banner - NEW FEATURED */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2026QuantumRevolutionUltimateBanner />
        </Suspense>
        
        {/* New Content 2026 Ultimate Showcase - NEW FEATURED */}
        <Suspense fallback={<LoadingSpinner />}>
          <NewContent2026UltimateShowcase />
        </Suspense>
        
        {/* Quantum AI Revolution Banner - NEW */}
        <Suspense fallback={<LoadingSpinner />}>
          <QuantumAIRevolutionBanner2025 />
        </Suspense>
        
        {/* New Content 2025 Ultimate Banner */}
        <Suspense fallback={<LoadingSpinner />}>
          <NewContent2025UltimateBanner />
        </Suspense>
        
        {/* AI 2026 Ultimate Showcase Banner */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2026UltimateShowcaseBanner />
        </Suspense>
        
        {/* AI 2026 Quantum Revolution Banner */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2026QuantumRevolutionBanner />
        </Suspense>
        
        {/* AI 2026 Autonomous Systems Banner */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2026AutonomousSystemsBanner />
        </Suspense>
        
        {/* Ultimate Promotion Banner */}
        <Suspense fallback={<LoadingSpinner />}>
          <UltimatePromotionBanner2026 />
        </Suspense>
        
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
        
        {/* Revolutionary Content 2030 Promotions */}
        <RevolutionaryContent2030PromotionBanner />
        <InteractiveContentDiscoveryWidget2030 />
        
        {/* Content Promotion Banners */}
        <UltimateContentShowcase2025 />
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