// @ts-nocheck
import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import NewContentShowcase from '../components/NewContentShowcase';
import TrendingContent from '../components/TrendingContent';

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

      {/* Fresh Content Spotlight - New Section */}
      <section className='py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>✨ JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Fresh AI & Business Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest expert insights, case studies, and resources. From AI predictions and automation trends 
              to retail transformation success stories, get the knowledge you need to succeed in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-2025-predictions' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔮</div>
                <h3 className='text-lg font-semibold mb-2'>AI Predictions 2025</h3>
                <p className='text-sm opacity-90 mb-3'>The future of AI in business - key trends and predictions</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>20 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-automation-trends-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>⚡</div>
                <h3 className='text-lg font-semibold mb-2'>AI Automation Trends 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Transform your business operations with intelligent automation</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>16 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-retail-transformation-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏪</div>
                <h3 className='text-lg font-semibold mb-2'>Retail AI Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>300% revenue growth and 60% cost reduction case study</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-transformation-checklist-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Transformation Checklist</h3>
                <p className='text-sm opacity-90 mb-3'>150+ actionable items for successful AI implementation</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-8'>
            <Link
              href='/blog'
              className='bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4'
            >
              View All Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block'
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* New Content Showcase Banner */}
      <section className='py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 HOT THIS WEEK - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Fresh AI & Business Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest expert insights, case studies, and resources. From AI workforce transformation 
              and healthcare revolution to financial services success stories, get the knowledge you need to succeed in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-workforce-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete guide to reskilling and preparing for the AI era</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-healthcare-revolution-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Healthcare Revolution 2025</h3>
                <p className='text-sm opacity-90 mb-3'>How AI is transforming patient care and medical diagnosis</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>22 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-financial-services-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏦</div>
                <h3 className='text-lg font-semibold mb-2'>Financial Services AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>$50M savings and 300% efficiency gains case study</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide</h3>
                <p className='text-sm opacity-90 mb-3'>Complete 150-page roadmap for AI success</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-8'>
            <Link
              href='/blog'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4'
            >
              View All Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block'
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* New Content Showcase Banner */}
      <section className='py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>✨ JUST PUBLISHED</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              🚀 Fresh AI & Tech Insights
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              New this week: AI Manufacturing Success Story, Cloud-Native Architecture Blueprint, 
              and AI Implementation Playbook. Expert insights to accelerate your digital transformation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured New Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/blog/ai-automation-manufacturing-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏭</div>
                <h3 className='text-lg font-semibold mb-2'>AI Manufacturing Success</h3>
                <p className='text-sm opacity-90 mb-3'>40% cost reduction, 60% faster processing</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/cloud-native-architecture-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>☁️</div>
                <h3 className='text-lg font-semibold mb-2'>Cloud-Native Architecture</h3>
                <p className='text-sm opacity-90 mb-3'>Complete blueprint for scalable apps</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-playbook-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Playbook</h3>
                <p className='text-sm opacity-90 mb-3'>Step-by-step implementation guide</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>45 min read</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Services
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card
              title='Micro SaaS'
              href='/services/micro-saas'
              description='End-to-end product engineering with billing, auth, analytics and growth.'
              icon='🚀'
            />
            <Card
              title='AI Services'
              href='/services/ai-services'
              description='LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps.'
              icon='🤖'
            />
            <Card
              title='Edge Computing'
              href='/services/edge-computing'
              description='Real-time processing, IoT integration, and distributed infrastructure solutions.'
              icon='⚡'
            />
            <Card
              title='IT Services'
              href='/services/it-services'
              description='Cloud migration, DevOps, SRE, security hardening and cost optimization.'
              icon='⚙️'
            />
          </div>
        </div>
      </section>

      {/* Latest Content Spotlight */}
      <section className='py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>✨ JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🎯 Latest AI & Business Insights
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Fresh content this week: AI predictions for 2025, automation trends, retail transformation success story, 
              and our comprehensive AI transformation checklist. Expert insights to accelerate your growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-orange-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-2025-predictions' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔮</div>
                <h3 className='text-lg font-semibold mb-2'>AI Predictions 2025</h3>
                <p className='text-sm opacity-90 mb-3'>The future of AI in business - key trends and predictions</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>20 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-automation-trends-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>⚡</div>
                <h3 className='text-lg font-semibold mb-2'>AI Automation Trends 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Transform your business operations with intelligent automation</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>16 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-retail-transformation-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏪</div>
                <h3 className='text-lg font-semibold mb-2'>Retail AI Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>300% revenue growth and 60% cost reduction case study</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-transformation-checklist-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Transformation Checklist</h3>
                <p className='text-sm opacity-90 mb-3'>150+ actionable items for successful AI implementation</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-8'>
            <Link
              href='/blog'
              className='bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4'
            >
              View All Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block'
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* New Content Spotlight Section */}
      <section className='py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 HOT THIS WEEK</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Fresh Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
              to startup funding strategies, get the knowledge you need to succeed in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/blog/ai-enterprise-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏢</div>
                <h3 className='text-lg font-semibold mb-2'>AI Enterprise Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete implementation guide with 340% ROI and real case studies</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-startup-funding-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-lg font-semibold mb-2'>AI Startup Funding Guide 2025</h3>
                <p className='text-sm opacity-90 mb-3'>From seed to Series A with $47B market insights and pitch templates</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>22 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-financial-services-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏦</div>
                <h3 className='text-lg font-semibold mb-2'>Financial Services AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>$50M cost savings, 300% efficiency gains - complete case study</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-8'>
            <Link
              href='/blog'
              className='bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4'
            >
              View All Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block'
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <FeatureCard
              title='Fast Delivery'
              description='Rapid prototyping and deployment with modern tools and practices.'
            />
            <FeatureCard
              title='Scalable Architecture'
              description='Built for growth with cloud-native, microservices architecture.'
            />
            <FeatureCard
              title='24/7 Support'
              description='Round-the-clock monitoring and support for your critical systems.'
            />
            <FeatureCard
              title='Cost Effective'
              description='Optimized solutions that reduce operational costs and improve efficiency.'
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className='py-16 bg-gradient-to-r from-green-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Proven Results for Our Clients
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Real businesses achieving real results with our technology solutions
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <TestimonialCard
              company="TechStart Inc."
              industry="SaaS"
              result="300% increase in customer satisfaction"
              description="AI automation reduced support response time from 4 hours to 2 minutes"
              savings="$50K monthly savings"
            />
            <TestimonialCard
              company="RetailMax"
              industry="E-commerce"
              result="90% reduction in manual tasks"
              description="Automated inventory management and order processing systems"
              savings="$75K annual cost reduction"
            />
            <TestimonialCard
              company="ConsultPro"
              industry="Professional Services"
              result="40% increase in proposal win rate"
              description="AI-powered proposal generation and client management"
              savings="20 hours saved per week"
            />
          </div>
        </div>
      </section>

      {/* Social Proof & Trust Indicators */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Trusted by Industry Leaders
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Join thousands of professionals who rely on our expertise and resources
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-blue-600 mb-2'>500+</div>
              <div className='text-gray-600'>Projects Delivered</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-blue-600 mb-2'>25K+</div>
              <div className='text-gray-600'>Resource Downloads</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-blue-600 mb-2'>98%</div>
              <div className='text-gray-600'>Client Satisfaction</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-gray-600'>Years Experience</div>
            </div>
          </div>

          {/* Client Logos */}
          <div className='text-center mb-12'>
            <p className='text-gray-600 mb-8'>Trusted by leading companies worldwide</p>
            <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
              <div className='text-2xl font-bold text-gray-400'>Microsoft</div>
              <div className='text-2xl font-bold text-gray-400'>Google</div>
              <div className='text-2xl font-bold text-gray-400'>Amazon</div>
              <div className='text-2xl font-bold text-gray-400'>IBM</div>
              <div className='text-2xl font-bold text-gray-400'>Salesforce</div>
              <div className='text-2xl font-bold text-gray-400'>Oracle</div>
            </div>
          </div>

          {/* Recent Success Stories */}
          <div className='bg-gray-50 rounded-xl p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Recent Success Stories</h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-blue-600 font-bold'>AI</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>Fortune 500 Manufacturing</h4>
                    <p className='text-sm text-gray-600'>AI Implementation</p>
                  </div>
                </div>
                <p className='text-gray-700 mb-4'>
                  "Zion Tech Group helped us implement AI automation across our supply chain, 
                  resulting in 40% cost reduction and 60% faster processing times."
                </p>
                <div className='text-sm text-blue-600 font-medium'>- CTO, Global Manufacturing Co.</div>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-green-600 font-bold'>SaaS</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>Growing SaaS Startup</h4>
                    <p className='text-sm text-gray-600'>Micro SaaS Development</p>
                  </div>
                </div>
                <p className='text-gray-700 mb-4'>
                  "From concept to $1M ARR in 18 months. Their expertise in micro SaaS 
                  development and growth strategies was invaluable."
                </p>
                <div className='text-sm text-green-600 font-medium'>- Founder, Tech Startup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Banner */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              🚀 New: AI-Powered Business Automation
            </h2>
            <p className='text-xl opacity-90 mb-8 max-w-3xl mx-auto'>
              Transform your business operations with intelligent automation. 
              Reduce costs by up to 40% while improving efficiency and customer satisfaction.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/services/ai-automation'
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg'
              >
                Learn More
              </Link>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg'
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='bg-white bg-opacity-10 p-6 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>40%</div>
              <div className='text-sm opacity-90'>Average Cost Reduction</div>
            </div>
            <div className='bg-white bg-opacity-10 p-6 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>3-6</div>
              <div className='text-sm opacity-90'>Months to ROI</div>
            </div>
            <div className='bg-white bg-opacity-10 p-6 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>24/7</div>
              <div className='text-sm opacity-90'>Automated Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Promotion Banner */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>✨ JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Fresh AI & Business Insights
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              New this week: AI Enterprise Transformation Guide, Startup Funding Playbook, Financial Services Case Study, 
              and our comprehensive 150-page AI Implementation Checklist. Expert insights to accelerate your growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-enterprise-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏢</div>
                <h3 className='text-lg font-semibold mb-2'>AI Enterprise Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete implementation guide with 340% ROI</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-startup-funding-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-lg font-semibold mb-2'>AI Startup Funding Guide 2025</h3>
                <p className='text-sm opacity-90 mb-3'>From seed to Series A with $47B market insights</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>22 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/case-studies/ai-financial-services-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏦</div>
                <h3 className='text-lg font-semibold mb-2'>Financial Services AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>$50M cost savings, 300% efficiency gains</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-checklist-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Checklist</h3>
                <p className='text-sm opacity-90 mb-3'>150+ actionable items for success</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-customer-support-automation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🎧</div>
                <h3 className='text-lg font-semibold mb-2'>AI Support Automation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Resolve faster, cut costs</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>9 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/llm-guardrails-in-production-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🛡️</div>
                <h3 className='text-lg font-semibold mb-2'>LLM Guardrails in Production</h3>
                <p className='text-sm opacity-90 mb-3'>Safety without blocking delivery</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>8 min read</span>
                  <span className='mx-2'>•</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/edge-ai-privacy-by-design-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔐</div>
                <h3 className='text-lg font-semibold mb-2'>Edge AI: Privacy by Design</h3>
                <p className='text-sm opacity-90 mb-3'>On-device intelligence for instant, compliant CX</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>7 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-go-to-market-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📈</div>
                <h3 className='text-lg font-semibold mb-2'>AI Go-To-Market 2025</h3>
                <p className='text-sm opacity-90 mb-3'>From zero to traction playbook</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-governance-in-practice-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🛡️</div>
                <h3 className='text-lg font-semibold mb-2'>AI Governance in Practice 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Controls that reduce risk without blocking delivery</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>9 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/edge-ai-privacy-by-design-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔒</div>
                <h3 className='text-lg font-semibold mb-2'>Edge AI: Privacy by Design</h3>
                <p className='text-sm opacity-90 mb-3'>On-device intelligence for instant, compliant CX</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>8 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>Free Resources</h3>
                <p className='text-sm opacity-90 mb-3'>Checklists, templates, and guides</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Download</span>
                  <span className='mx-2'>•</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
            <Link href='/blog/ai-architecture-cost-governance-2025' className='group md:col-span-3'>
              <div className='mt-2 bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-colors'>
                <div className='text-3xl mb-2'>🧩</div>
                <h3 className='text-lg font-semibold mb-2 group-hover:underline'>AI Architecture & Cost Governance in 2025</h3>
                <p className='text-sm opacity-90'>Guardrails and observability patterns to keep AI reliable and affordable</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Signup Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>📧 EXCLUSIVE CONTENT</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              🚀 Stay Ahead with AI Insights
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Get weekly updates on AI trends, implementation guides, exclusive case studies, 
              and early access to new content. Join 15,000+ AI professionals and business leaders.
            </p>
            <Link 
              href='/blog' 
              className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>

          {/* New Resources & Case Studies Showcase */}
          <div className='mb-16'>
            <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>New Resources & Success Stories</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <Link href='/resources/ai-enterprise-readiness-assessment-2025' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>📋</div>
                  <div className='text-xs font-medium text-blue-700 mb-2'>Free Resource</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                    AI Enterprise Readiness Assessment
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    50-point checklist to evaluate your organization's AI readiness
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>Free Download</span>
                    <span>📊 Assessment</span>
                  </div>
                </div>
              </Link>

              <Link href='/case-studies/ai-retail-optimization-success-2025' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>🏪</div>
                  <div className='text-xs font-medium text-green-700 mb-2'>Success Story</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors'>
                    AI Retail Optimization Success
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    300% revenue growth and 60% cost reduction in 12 months
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>Case Study</span>
                    <span>🏆 Results</span>
                  </div>
                </div>
              </Link>

              <Link href='/resources/ai-implementation-playbook-2025' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>📚</div>
                  <div className='text-xs font-medium text-purple-700 mb-2'>Implementation Guide</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors'>
                    AI Implementation Playbook 2025
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    Step-by-step guide to successful AI implementation
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>Free Download</span>
                    <span>📖 Guide</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Newsletter Form */}
            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-6'>Get Your Free Weekly AI Digest</h3>
              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap'>
                    Subscribe Free
                  </button>
                </div>
                <p className='text-sm text-gray-300'>
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
              
              {/* Benefits */}
              <div className='mt-8 space-y-3'>
                <div className='flex items-center gap-3'>
                  <span className='text-green-400'>✓</span>
                  <span className='text-sm'>Weekly AI trend analysis and predictions</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-green-400'>✓</span>
                  <span className='text-sm'>Exclusive case studies and success stories</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-green-400'>✓</span>
                  <span className='text-sm'>Early access to new resources and tools</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-green-400'>✓</span>
                  <span className='text-sm'>Implementation guides and best practices</span>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold mb-6'>This Week's Featured Content</h3>
              
              <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6'>
                <div className='flex items-start gap-4'>
                  <div className='text-3xl'>🔮</div>
                  <div>
                    <h4 className='font-semibold text-lg mb-2'>AI Predictions 2025</h4>
                    <p className='text-gray-300 text-sm mb-3'>
                      The future of AI in business - key trends and predictions that will shape the industry
                    </p>
                    <div className='flex items-center gap-4 text-xs text-gray-400'>
                      <span>20 min read</span>
                      <span>•</span>
                      <span>New this week</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6'>
                <div className='flex items-start gap-4'>
                  <div className='text-3xl'>⚡</div>
                  <div>
                    <h4 className='font-semibold text-lg mb-2'>AI Automation Trends</h4>
                    <p className='text-gray-300 text-sm mb-3'>
                      Transform your business operations with the latest intelligent automation trends
                    </p>
                    <div className='flex items-center gap-4 text-xs text-gray-400'>
                      <span>16 min read</span>
                      <span>•</span>
                      <span>Trending</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6'>
                <div className='flex items-start gap-4'>
                  <div className='text-3xl'>📋</div>
                  <div>
                    <h4 className='font-semibold text-lg mb-2'>AI Transformation Checklist</h4>
                    <p className='text-gray-300 text-sm mb-3'>
                      150+ actionable items for successful AI implementation - free download
                    </p>
                    <div className='flex items-center gap-4 text-xs text-gray-400'>
                      <span>Free Resource</span>
                      <span>•</span>
                      <span>2.3MB PDF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className='mt-16 text-center'>
            <p className='text-gray-400 mb-6'>Trusted by industry leaders worldwide</p>
            <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
              <div className='text-2xl font-bold text-gray-400'>Microsoft</div>
              <div className='text-2xl font-bold text-gray-400'>Google</div>
              <div className='text-2xl font-bold text-gray-400'>Amazon</div>
              <div className='text-2xl font-bold text-gray-400'>IBM</div>
              <div className='text-2xl font-bold text-gray-400'>Salesforce</div>
              <div className='text-2xl font-bold text-gray-400'>Oracle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Content Spotlight - New This Week */}
      <section className='py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>✨ JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Fresh AI & Business Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest expert insights, case studies, and resources. From AI workforce transformation 
              to healthcare revolution and financial services success stories, get the knowledge you need to succeed in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg' 
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-workforce-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete guide to reskilling and preparing for the AI era</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-healthcare-revolution-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Healthcare Revolution 2025</h3>
                <p className='text-sm opacity-90 mb-3'>How AI is transforming patient care and medical diagnosis</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>22 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-financial-services-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏦</div>
                <h3 className='text-lg font-semibold mb-2'>Financial Services AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>$50M savings and 300% efficiency gains case study</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide</h3>
                <p className='text-sm opacity-90 mb-3'>Complete 150-page roadmap for AI success</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-8'>
            <Link
              href='/blog'
              className='bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4'
            >
              View All Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block'
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Latest Articles Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 TRENDING NOW</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Latest Insights & Expert Analysis
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Stay ahead with our latest articles on AI, cloud architecture, growth strategies, 
              and emerging technologies. Fresh content published weekly.
            </p>
            <Link 
              href='/blog' 
              className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>

          {/* Featured New Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            <Link href='/blog/ai-2025-predictions' className='group'>
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative'>
                  <div className='text-8xl'>🔮</div>
                  <div className='absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full'>
                      AI Predictions
                    </span>
                    <span className='text-gray-500 text-sm'>20 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors'>
                    AI Predictions 2025: The Future of Artificial Intelligence in Business
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Discover the key AI trends and predictions that will shape business in 2025. 
                    Expert insights on automation, enterprise AI, and emerging technologies.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                        <span className='text-purple-600 font-bold text-sm'>ZT</span>
                      </div>
                      <span className='text-sm text-gray-600'>Zion Tech Group</span>
                    </div>
                    <span className='text-purple-600 font-medium group-hover:underline'>
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href='/blog/ai-automation-trends-2025' className='group'>
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative'>
                  <div className='text-8xl'>⚡</div>
                  <div className='absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Automation
                    </span>
                    <span className='text-gray-500 text-sm'>16 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors'>
                    AI Automation Trends 2025: Transform Your Business Operations
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Discover the latest AI automation trends that are revolutionizing business operations. 
                    Learn how to implement intelligent automation for maximum ROI.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                        <span className='text-green-600 font-bold text-sm'>ZT</span>
                      </div>
                      <span className='text-sm text-gray-600'>Zion Tech Group</span>
                    </div>
                    <span className='text-green-600 font-medium group-hover:underline'>
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href='/case-studies/ai-retail-transformation-success-2025' className='group'>
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative'>
                  <div className='text-8xl'>🏪</div>
                  <div className='absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    CASE STUDY
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Success Story
                    </span>
                    <span className='text-gray-500 text-sm'>Case Study</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors'>
                    AI Retail Transformation: 300% Revenue Growth Case Study
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Discover how a major retail chain achieved 300% revenue growth and 60% cost reduction 
                    through AI transformation. Complete case study with implementation details.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center'>
                        <span className='text-orange-600 font-bold text-sm'>ZT</span>
                      </div>
                      <span className='text-sm text-gray-600'>Zion Tech Group</span>
                    </div>
                    <span className='text-orange-600 font-medium group-hover:underline'>
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
      {/* New Content Showcase */}
      <NewContentShowcase />

      {/* Trending Content Section */}
      <TrendingContent />


      {/* Performance Metrics Section */}
      <Suspense fallback={<LoadingSpinner size="md" text="Loading metrics..." />}>
        <PerformanceMetrics />
      </Suspense>

      {/* Technology Stack Section */}
      <Suspense fallback={<LoadingSpinner size="md" text="Loading tech stack..." />}>
        <TechnologyStack />
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
