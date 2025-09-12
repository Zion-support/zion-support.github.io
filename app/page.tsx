// @ts-nocheck
import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ContentShowcase, { featuredContent, trendingContent, latestContent } from '../components/ContentShowcase';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import InteractiveContentShowcase from '../components/InteractiveContentShowcase';
import NewContentBanner from '../components/NewContentBanner';
import NewContentShowcase from '../components/NewContentShowcase';
import EnhancedNewsletter from '../components/EnhancedNewsletter';
import EnhancedNewsletterSignup from '../components/EnhancedNewsletterSignup';
import SuccessMetrics, { defaultMetrics, contentMetrics } from '../components/SuccessMetrics';
import ContentShowcase from '../components/ContentShowcase';
import EnhancedContentBanner from '../components/EnhancedContentBanner';
import ContentPromotionBanner from '../components/ContentPromotionBanner';
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import NewContentPromotionalBanner from '../components/NewContentPromotionalBanner';
import FeaturedContentShowcase from '../components/FeaturedContentShowcase';
import LatestContentPromotionBanner from '../components/LatestContentPromotionBanner';
import ResourcesShowcase from '../components/ResourcesShowcase';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
const PerformanceMetrics = lazy(() => import('../components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

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
        {/* Content Promotion Banner */}
        <section className="py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-3">
                <span className="text-sm font-medium">🚀 NEW CONTENT JUST DROPPED</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                🎉 Massive Content Update: 15+ New AI Resources Just Released!
              </h2>
              <p className="text-lg opacity-90 mb-4 max-w-4xl mx-auto">
                Discover our latest breakthrough content: Multimodal AI Revolution, Robotics & Automation, 
                Sustainability & Green Tech, plus new case studies and implementation guides. Get expert insights 
                on the technologies transforming 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/content-showcase"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore New Content
                </Link>
                <Link
                  href="/blog/ai-2025-breakthrough-innovations"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Read Latest Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Autonomous Systems Promotion Banner */}
        <section className="py-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-3">
                <span className="text-sm font-medium">🤖 AUTONOMOUS SYSTEMS BREAKTHROUGH</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                🚗 Autonomous Systems Revolution: 95% Efficiency Gains Achieved!
              </h2>
              <p className="text-lg opacity-90 mb-4 max-w-4xl mx-auto">
                Discover how Fortune 500 companies are achieving unprecedented results with autonomous AI systems. 
                Read our new case study showing $200M savings and download our free implementation guide with ROI calculators.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/blog/ai-2025-autonomous-systems-revolution"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Article
                </Link>
                <Link
                  href="/case-studies/ai-autonomous-manufacturing-success-2025"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  View Case Study
                </Link>
                <Link
                  href="/resources/autonomous-systems-implementation-guide"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Free Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
        
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
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100' aria-labelledby="hero-heading">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 id="hero-heading" className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Zion Tech Group
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Transforming businesses through cutting-edge technology solutions.
              From AI and blockchain to cloud infrastructure and micro SaaS
              platforms.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/services'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
              >
                Explore Services
              </Link>
              <Link
                href='/contact'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      </section>
      
      {/* Latest Content Promotion Banner */}
      <LatestContentPromotionBanner />
      
      {/* New Content Promotion Banner */}
      <NewContentPromotionBanner />
      
      {/* New Content Promotional Banner */}
      <NewContentPromotionalBanner />
      
      {/* Featured Content Section */}
      <FeaturedContentShowcase />
      
      {/* Additional Content Showcase */}
      <ContentShowcase
        title="Latest AI Insights & Case Studies"
        subtitle="Discover proven strategies, real-world success stories, and actionable guides from industry experts"
        items={featuredContent}
        variant="featured"
        showViewAll={true}
        viewAllHref="/blog"
        viewAllText="View All Articles"
        columns={3}
      />
      
      {/* Success Metrics Section */}
      <SuccessMetrics 
        metrics={contentMetrics}
        title="Content Performance"
        subtitle="Our content drives real business results"
        items={[
          {
            title: "Monthly Readers",
            value: "500K+",
            description: "Growing audience of professionals"
          },
          {
            title: "Content Downloads",
            value: "50K+",
            description: "Resources downloaded monthly"
          },
          {
            title: "Case Study Views",
            value: "100K+",
            description: "Real-world success stories"
          }
        ]}
      />

      {/* New Content Showcase Banner */}
      <section className='py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 HOT THIS WEEK</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              🚀 Fresh Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest expert insights, case studies, and resources. From AI automation 
              to startup growth strategies, get the knowledge you need to succeed in 2025.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <Link href='/blog/ai-2025-neural-interface-breakthrough' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🧠</div>
                <h3 className='text-lg font-semibold mb-2'>Neural Interface Breakthrough</h3>
                <p className='text-sm opacity-90 mb-3'>Revolutionary brain-computer interfaces transforming human-computer interaction</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-purple-500 px-2 py-1 rounded-full'>Breakthrough</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-space-technology-revolution-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🚀</div>
                <h3 className='text-lg font-semibold mb-2'>AI Space Technology Revolution</h3>
                <p className='text-sm opacity-90 mb-3'>The final frontier meets artificial intelligence in space exploration</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-indigo-500 px-2 py-1 rounded-full'>Space</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-autonomous-vehicle-revolution-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🚗</div>
                <h3 className='text-lg font-semibold mb-2'>Autonomous Vehicle Revolution</h3>
                <p className='text-sm opacity-90 mb-3'>Complete fleet transformation with 99.7% safety improvement</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-green-500 px-2 py-1 rounded-full'>Success</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Content Showcase */}
          <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/services/ai-consulting' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🧠</div>
                <h3 className='text-lg font-semibold mb-2'>AI Consulting</h3>
                <p className='text-sm opacity-90 mb-3'>Expert AI strategy and implementation services</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Service</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-blue-500 px-2 py-1 rounded-full'>Expert</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-2025-multimodal-revolution' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>Multimodal AI</h3>
                <p className='text-sm opacity-90 mb-3'>Voice, vision, and gesture recognition revolution</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-purple-500 px-2 py-1 rounded-full'>Trending</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-2025-robotics-automation' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>⚙️</div>
                <h3 className='text-lg font-semibold mb-2'>Robotics & Automation</h3>
                <p className='text-sm opacity-90 mb-3'>Intelligent machines transforming industries</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-orange-500 px-2 py-1 rounded-full'>Hot</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-sustainability-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
                <h3 className='text-lg font-semibold mb-2'>Sustainability Success</h3>
                <p className='text-sm opacity-90 mb-3'>Net-zero emissions with 40% cost reduction</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span className='bg-green-500 px-2 py-1 rounded-full'>Eco</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className='text-center mt-12'>
            <Link
              href='/content-showcase'
              className='inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg'
            >
              Explore All Content
              <ArrowRight className='w-5 h-5 ml-2' />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our AI Services</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive AI solutions to transform your business
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8'>
            <Link href='/services/ai-consulting' className='group'>
              <div className='bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-blue-200'>
                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
                  <Brain className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  AI Consulting
                </h3>
                <p className='text-gray-600 mb-6'>
                  Strategic AI planning, implementation, and optimization to drive innovation and competitive advantage.
                </p>
                <div className='flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors'>
                  Learn More
                  <ArrowRight className='w-4 h-4 ml-2' />
                </div>
              </div>
            </Link>

            <Link href='/services/edge-computing' className='group'>
              <div className='bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-green-200'>
                <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6'>
                  <Zap className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors'>
                  Edge Computing
                </h3>
                <p className='text-gray-600 mb-6'>
                  Deploy AI at the edge for real-time processing, reduced latency, and enhanced security.
                </p>
                <div className='flex items-center text-green-600 font-semibold group-hover:text-green-800 transition-colors'>
                  Learn More
                  <ArrowRight className='w-4 h-4 ml-2' />
                </div>
              </div>
            </Link>

            <Link href='/services/quantum-computing' className='group'>
              <div className='bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-purple-200'>
                <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6'>
                  <Target className='w-8 h-8 text-purple-600' />
                </div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors'>
                  Quantum Computing
                </h3>
                <p className='text-gray-600 mb-6'>
                  Harness quantum computing power for complex AI problems and optimization challenges.
                </p>
                <div className='flex items-center text-purple-600 font-semibold group-hover:text-purple-800 transition-colors'>
                  Learn More
                  <ArrowRight className='w-4 h-4 ml-2' />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Case Studies */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Latest Success Stories</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Real-world AI transformations delivering measurable results
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link href='/case-studies/ai-autonomous-vehicle-revolution-2025' className='group'>
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>🚗</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  Autonomous Vehicle Revolution
                </h3>
                <p className='text-gray-600 mb-6'>
                  Complete fleet transformation with 99.7% safety improvement and 60% cost reduction.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>Transportation</span>
                  <div className='flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors'>
                    Read Case Study
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-manufacturing-automation-success-2025' className='group'>
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>🏭</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors'>
                  Manufacturing Automation
                </h3>
                <p className='text-gray-600 mb-6'>
                  AI-powered manufacturing achieving 90% efficiency gains and 300% ROI in 12 months.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>Manufacturing</span>
                  <div className='flex items-center text-green-600 font-semibold group-hover:text-green-800 transition-colors'>
                    Read Case Study
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-financial-services-transformation-success-2025' className='group'>
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors'>
                  Financial Services AI
                </h3>
                <p className='text-gray-600 mb-6'>
                  AI transformation in financial services with 300% ROI and 95% fraud detection accuracy.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>Finance</span>
                  <div className='flex items-center text-purple-600 font-semibold group-hover:text-purple-800 transition-colors'>
                    Read Case Study
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Latest AI Insights</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Stay ahead with our expert analysis of AI trends and breakthroughs
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link href='/blog/ai-2025-neural-interface-breakthrough' className='group'>
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>🧠</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors'>
                  Neural Interface Breakthrough
                </h3>
                <p className='text-gray-600 mb-6'>
                  Revolutionary brain-computer interfaces with 95% accuracy and real-time processing.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>15 min read</span>
                  <div className='flex items-center text-purple-600 font-semibold group-hover:text-purple-800 transition-colors'>
                    Read Article
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-space-technology-revolution-2025' className='group'>
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>🚀</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors'>
                  AI Space Technology
                </h3>
                <p className='text-gray-600 mb-6'>
                  The final frontier meets AI with autonomous spacecraft and space mining operations.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>18 min read</span>
                  <div className='flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors'>
                    Read Article
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-2025-multimodal-revolution' className='group'>
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  Multimodal AI Revolution
                </h3>
                <p className='text-gray-600 mb-6'>
                  Voice, vision, and gesture recognition creating more natural human-computer interaction.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>12 min read</span>
                  <div className='flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors'>
                    Read Article
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Transform Your Business with AI?</h2>
          <p className='text-xl mb-8 opacity-90 max-w-3xl mx-auto'>
            Join hundreds of companies already using our AI solutions to drive innovation, 
            increase efficiency, and achieve competitive advantage.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg'
            >
              Get Started Today
            </Link>
            <Link
              href='/case-studies'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg'
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Showcase */}
      <Suspense fallback={<LoadingSpinner size="lg" text="Loading featured content..." />}>
        <FeaturedContentShowcase />
      </Suspense>

      {/* Newsletter Signup Section */}
      <section className='py-16 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Stay Ahead with Our Latest Insights
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Get weekly updates on AI trends, technology insights, and business strategies. 
              Join 10,000+ professionals who trust our content.
            </p>
          </div>
          <div className='bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto'>
            <form className='space-y-4'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                />
                <button 
                  type='submit'
                  className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap'
                >
                  Subscribe Now
                </button>
              </div>
              <p className='text-sm text-gray-500 text-center'>
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>
                <strong>What you'll get:</strong> Weekly AI insights, exclusive case studies, 
                free resources, and early access to new content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
