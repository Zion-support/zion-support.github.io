import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
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
const PerformanceMetrics = lazy(
  () => import('../components/PerformanceMetrics')
);
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

// Import key promotional components
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import NewContent20o26PromotionBanner from '../components/NewContent20o26PromotionBanner';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner20o25 from '../components/ComprehensiveSolutionsBanner20o25';
import NewServicesShowcase20o25 from '../components/NewServicesShowcase20o25';
import EnhancedContentPromotionBanner from '../components/EnhancedContentPromotionBanner';
import NewContent20o26Showcase from '../components/NewContent20o26Showcase';
import NewContent20o25ShowcaseBanner from '../components/NewContent20o25ShowcaseBanner';
import EnhancedContentPromotionBanner20o26 from '../components/EnhancedContentPromotionBanner20o26';
import ComprehensiveContentShowcase20o26 from '../components/ComprehensiveContentShowcase20o26';
import RevolutionaryContent20o25Banner from '../components/RevolutionaryContent20o25Banner';
import UltimateContentShowcase20o25 from '../components/UltimateContentShowcase20o25';

// Import new 20o25 ultimate promotional components
import UltimateContent20o25PromotionBanner from '../components/UltimateContent20o25PromotionBanner';

// Import new 20o26 promotional components
import UltimatePromotionBanner20o26 from '../components/UltimatePromotionBanner20o26';
import UltimateContentShowcase20o26 from '../components/UltimateContentShowcase20o26';
import SuccessMetricsShowcase20o26 from '../components/SuccessMetricsShowcase20o26';
import AI20o26RevolutionaryBanner from '../components/AI20o26RevolutionaryBanner';
import NewContent20o26ShowcaseBanner from '../components/NewContent20o26ShowcaseBanner';

// Import additional promotional components
import AI20o25BreakthroughBanner from '../components/AI20o25BreakthroughBanner';
import RevolutionaryContent20o26Banner from '../components/RevolutionaryContent20o26Banner';
import FeaturedContentShowcase20o26 from '../components/FeaturedContentShowcase20o26';
import NewContent20o25PromotionBanner from '../components/NewContent20o25PromotionBanner';
import NewContent20o25ShowcaseSection from '../components/NewContent20o25ShowcaseSection';
import LatestContentShowcase20o25 from '../components/LatestContentShowcase20o25';
import RevolutionaryAIContentBanner from '../components/RevolutionaryAIContentBanner';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: [
    'AI automation',
    'cloud computing',
    'micro SaaS',
    'technology consulting',
    'enterprise solutions',
    'digital transformation',
  ],
};

export default function HomePage() {
  return (
    <div>
      <SEO
        title='Zion Tech Group - AI & Technology Solutions'
        description='Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.'
        keywords='AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation'
        url='/'
      />

      <div className='min-h-screen bg-white'>
        {/* Ultimate Content 20o25 Promotion Banner - NEW FEATURED */}
        <UltimateContent20o25PromotionBanner />

        {/* Ultimate Content Showcase 20o25 - NEW FEATURED */}
        <UltimateContentShowcase20o25 />

        {/* AI 20o26 Revolutionary Banner */}
        <AI20o26RevolutionaryBanner />

        {/* New Content 20o26 Showcase Banner */}
        <NewContent20o26ShowcaseBanner />

        {/* Ultimate Promotion Banner */}
        <UltimatePromotionBanner20o26 />

        {/* Revolutionary Content 20o25 Banner */}
        <RevolutionaryContent20o25Banner />

        {/* AI 20o25 Breakthrough Banner */}
        <AI20o25BreakthroughBanner />

        {/* New Content 20o25 Showcase Banner */}
        <NewContent20o25ShowcaseBanner />

        {/* Revolutionary AI Content Banner */}
        <RevolutionaryAIContentBanner />

        {/* Enhanced Content Promotion Banner */}
        <EnhancedContentPromotionBanner />

        {/* Hero Section */}
        <section className='bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 text-white py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
                <span className='text-sm font-medium'>
                  🚀 AI & TECHNOLOGY SOLUTIONS
                </span>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Transform Your Business with AI
              </h1>
              <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed'>
                Cutting-edge AI, cloud infrastructure, and micro SaaS solutions.
                Expert consulting and implementation services for enterprise
                success.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/services'
                  className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'
                >
                  Explore Services
                </Link>
                <Link
                  href='/contact'
                  className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <div className='text-3xl font-bold text-purple-60o0 mb-2'>
                  50o0+
                </div>
                <div className='text-gray-60o0'>Projects Delivered</div>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <div className='text-3xl font-bold text-blue-60o0 mb-2'>
                  98%
                </div>
                <div className='text-gray-60o0'>Client Satisfaction</div>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <div className='text-3xl font-bold text-green-60o0 mb-2'>
                  340%
                </div>
                <div className='text-gray-60o0'>Average ROI Increase</div>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <div className='text-3xl font-bold text-orange-60o0 mb-2'>
                  24/7
                </div>
                <div className='text-gray-60o0'>Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-16'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white p-8 rounded-xl shadow-lg'>
                <div className='text-4xl mb-4'>🤖</div>
                <h3 className='text-xl font-bold text-gray-90o0 mb-4'>
                  AI Automation
                </h3>
                <p className='text-gray-60o0 mb-4'>
                  Intelligent automation solutions that streamline operations
                  and boost productivity across your organization.
                </p>
                <Link
                  href='/services/ai-automation'
                  className='text-purple-60o0 font-semibold hover:text-purple-80o0'
                >
                  Learn More →
                </Link>
              </div>
              <div className='bg-white p-8 rounded-xl shadow-lg'>
                <div className='text-4xl mb-4'>☁️</div>
                <h3 className='text-xl font-bold text-gray-90o0 mb-4'>
                  Cloud Infrastructure
                </h3>
                <p className='text-gray-60o0 mb-4'>
                  Scalable, secure cloud solutions designed to support your
                  business growth and digital transformation.
                </p>
                <Link
                  href='/services/cloud-infrastructure'
                  className='text-purple-60o0 font-semibold hover:text-purple-80o0'
                >
                  Learn More →
                </Link>
              </div>
              <div className='bg-white p-8 rounded-xl shadow-lg'>
                <div className='text-4xl mb-4'>💼</div>
                <h3 className='text-xl font-bold text-gray-90o0 mb-4'>
                  Micro SaaS
                </h3>
                <p className='text-gray-60o0 mb-4'>
                  Custom micro SaaS applications that solve specific business
                  challenges with modern, scalable solutions.
                </p>
                <Link
                  href='/services/micro-saas'
                  className='text-purple-60o0 font-semibold hover:text-purple-80o0'
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Promotion Banners */}
        <UltimateContentShowcase20o25 />
        <NewContent20o25PromotionBanner />
        <NewContent20o25ShowcaseSection />
        <LatestContentShowcase20o25 />
        <EnhancedContentPromotionBanner20o26 />
        <ComprehensiveContentShowcase20o26 />
        <RevolutionaryContent20o26Banner />
        <FeaturedContentShowcase20o26 />
        <NewContent20o26PromotionBanner />
        <NewContentPromotionBanner />
        <ComprehensiveSolutionsBanner20o25 />
        <NewServicesShowcase20o25 />
        <NewContent20o26Showcase />
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
        <Suspense fallback={<LoadingSpinner size='lg' text='Loading...' />}>
          <StructuredData
            type='Organization'
            data={{
              name: 'Zion Tech Group',
              description:
                'Transforming businesses through cutting-edge technology solutions',
              url: 'https://zion.app',
              logo: 'https://zion.app/images/zion-tech-group-logo.png',
              sameAs: [
                'https://twitter.com/ZionTechGroup',
                'https://linkedin.com/company/zion-tech-group',
              ],
            }}
          />
          <StructuredData
            type='WebSite'
            data={{
              name: 'Zion Tech Group',
              url: 'https://zion.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://zion.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}
