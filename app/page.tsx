// @ts-nocheck
import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

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

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/blog/ai-productivity-automation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Productivity Automation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Transform your business with 300% productivity gains and 40% cost reduction</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/startup-pricing-strategy-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-lg font-semibold mb-2'>Startup Pricing Strategy 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Master pricing with data-driven strategies that validate willingness to pay</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>Healthcare AI Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>95% accuracy in medical diagnosis with 80% faster processing</p>
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
              New this week: AI Productivity Automation Guide, Startup Pricing Strategy 2025, 
              Healthcare AI Success Story, and 150-page AI Implementation Playbook. Expert insights to accelerate your digital transformation.
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-productivity-automation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Productivity Automation</h3>
                <p className='text-sm opacity-90 mb-3'>40% productivity boost with proven strategies</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/startup-pricing-strategy-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-lg font-semibold mb-2'>Startup Pricing Strategy</h3>
                <p className='text-sm opacity-90 mb-3'>Validate willingness to pay and scale</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>Healthcare AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>95% accuracy in medical diagnosis</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-playbook-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Playbook</h3>
                <p className='text-sm opacity-90 mb-3'>150-page complete implementation guide</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>150 pages</span>
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

      {/* Enhanced Content Promotion Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 TRENDING CONTENT</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Expert Insights & Proven Strategies
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Discover our latest articles, case studies, and resources covering AI implementation, 
              startup strategies, and digital transformation. Fresh content published weekly.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            <Link href='/blog/ai-productivity-automation-2025' className='group'>
              <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative'>
                  <div className='text-6xl'>🤖</div>
                  <div className='absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                      AI & Automation
                    </span>
                    <span className='text-gray-500 text-sm'>12 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                    AI Productivity Automation 2025: Complete Implementation Guide
                  </h3>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    Transform your business operations with AI automation. Learn proven strategies 
                    to boost productivity by 40% in 2025.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
                        <span className='text-blue-600 font-bold text-xs'>ZT</span>
                      </div>
                      <span className='text-sm text-gray-600'>Zion Tech Group</span>
                    </div>
                    <span className='text-blue-600 font-medium group-hover:underline'>
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/blog/startup-pricing-strategy-2025' className='group'>
              <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative'>
                  <div className='text-6xl'>💰</div>
                  <div className='absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Startup Strategy
                    </span>
                    <span className='text-gray-500 text-sm'>15 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors'>
                    Startup Pricing Strategy 2025: Validate Willingness to Pay
                  </h3>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    Master startup pricing with data-driven strategies. Learn to validate 
                    willingness to pay and scale with confidence.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center'>
                        <span className='text-yellow-600 font-bold text-xs'>ZT</span>
                      </div>
                      <span className='text-sm text-gray-600'>Zion Tech Group</span>
                    </div>
                    <span className='text-yellow-600 font-medium group-hover:underline'>
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
              <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative'>
                  <div className='text-6xl'>🏥</div>
                  <div className='absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Healthcare AI
                    </span>
                    <span className='text-gray-500 text-sm'>8 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors'>
                    AI Healthcare Diagnosis Success: 95% Accuracy
                  </h3>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    Discover how a leading healthcare provider achieved 95% accuracy in medical 
                    diagnosis using AI automation.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
                        <span className='text-green-600 font-bold text-xs'>ZT</span>
                      </div>
                      <span className='text-sm text-gray-600'>Zion Tech Group</span>
                    </div>
                    <span className='text-green-600 font-medium group-hover:underline'>
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center'>
            <Link 
              href='/blog' 
              className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
            >
              View All Articles
              <span>→</span>
            </Link>
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

      {/* Newsletter Signup Section */}
      <section className='py-16 bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              📧 Stay Ahead with AI Insights
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto mb-8'>
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className='max-w-md mx-auto flex gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                Subscribe
              </button>
            </div>
            <p className='text-sm text-gray-400 mt-4'>
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
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
            <Link href='/blog/startup-pricing-strategy-2025' className='group'>
              <div className='rounded-lg border border-yellow-200 bg-yellow-50 p-6 hover:bg-yellow-100 transition-colors'>
                <div className='text-sm font-medium text-yellow-700 mb-1'>New</div>
                <h3 className='text-xl font-semibold text-yellow-900 group-hover:underline'>Startup Pricing Strategy 2025</h3>
                <p className='text-yellow-800 mt-2'>Validate willingness to pay and scale with confidence.</p>
              </div>
            </Link>
          </div>

          {/* Featured New Content Banner */}
          <div className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4'>
                <span className='text-sm font-medium'>✨ JUST PUBLISHED</span>
              </div>
              <h3 className='text-3xl md:text-4xl font-bold mb-4'>
                Fresh Content Drop: 2025 AI & Business Guides
              </h3>
              <p className='text-xl opacity-90 max-w-3xl mx-auto mb-6'>
                Discover our latest expert guides, case studies, and resources covering the most 
                important trends in AI, automation, and business growth for 2025.
              </p>
              <Link
                href='/blog/ai-productivity-automation-2025'
                className='text-white text-sm font-medium hover:underline'
              >
                Read Article →
              </Link>
            </div>

            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-left'>
              <div className='text-3xl mb-4'>☁️</div>
              <h3 className='text-xl font-bold mb-3'>Cloud-Native Architecture Blueprint</h3>
              <p className='text-sm opacity-90 mb-4'>
                Build scalable, resilient applications with modern cloud-native patterns and practices.
              </p>
              <Link
                href='/blog/cloud-native-architecture-2025'
                className='text-white text-sm font-medium hover:underline'
              >
                Read Article →
              </Link>
            </div>

            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-left'>
              <div className='text-3xl mb-4'>🏢</div>
              <h3 className='text-xl font-bold mb-3'>Enterprise AI Implementation 2025</h3>
              <p className='text-sm opacity-90 mb-4'>
                Complete strategic roadmap for enterprise AI adoption, governance, and success.
              </p>
              <Link
                href='/blog/enterprise-ai-implementation-2025'
                className='text-white text-sm font-medium hover:underline'
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Resources Showcase */}
          <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8'>
            <h3 className='text-2xl font-bold mb-6 text-center'>Free Resources & Tools</h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                  <span className='text-xl'>📋</span>
                </div>
                <div>
                  <h4 className='font-semibold'>AI Implementation Checklist</h4>
                  <p className='text-sm opacity-90'>Step-by-step guide to successful AI implementation</p>
                </div>
              </article>
            </Link>

            <Link href='/blog/cloud-native-architecture-2025' className='group'>
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative'>
                  <div className='text-8xl'>☁️</div>
                  <div className='absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Cloud & DevOps
                    </span>
                    <span className='text-gray-500 text-sm'>14 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Jan 28, 2025</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors'>
                    Cloud-Native Architecture in 2025: Building for Scale and Resilience
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Explore the latest trends and best practices in cloud-native architecture for 2025. 
                    Learn how to build scalable, resilient, and cost-effective systems that can adapt 
                    to changing business requirements.
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

            <Link href='/blog/ai-go-to-market-2025' className='group'>
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100'>
                <div className='aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative'>
                  <div className='text-8xl'>📈</div>
                  <div className='absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    NEW
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Growth & Marketing
                    </span>
                    <span className='text-gray-500 text-sm'>12 min read</span>
                    <span className='text-gray-500 text-sm'>•</span>
                    <span className='text-gray-500 text-sm'>Sep 11, 2025</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors'>
                    AI Go-To-Market 2025: From Zero to Traction
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Positioning, pricing, and distribution strategies that work for AI products in 2025.
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
          </div>

          {/* Trending Articles */}
          <div className='mb-12'>
            <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>Trending This Week</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <Link href='/blog/startup-growth-hacking-2025' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>🚀</div>
                  <div className='text-xs font-medium text-purple-700 mb-2'>Growth & Marketing</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors'>
                    Startup Growth Hacking in 2025
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    Data-driven strategies that actually work for scaling startups.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>11 min read</span>
                    <span>🔥 Trending</span>
                  </div>
                </div>
              </Link>

              <Link href='/blog/ai-automation-enterprise-2025' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>🏢</div>
                  <div className='text-xs font-medium text-blue-700 mb-2'>AI & Technology</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                    AI Automation in Enterprise
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    Complete 2025 implementation guide with real case studies.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>15 min read</span>
                    <span>⭐ Popular</span>
                  </div>
                </div>
              </Link>

              <Link href='/blog/startup-funding-ai-era' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>💰</div>
                  <div className='text-xs font-medium text-green-700 mb-2'>Startup Strategy</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors'>
                    Startup Funding in AI Era
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    Navigate the new funding landscape for AI startups.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>12 min read</span>
                    <span>📈 Rising</span>
                  </div>
                </div>
              </Link>

              <Link href='/blog/ai-cost-optimization-2025' className='group'>
                <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100'>
                  <div className='text-3xl mb-3'>⚡</div>
                  <div className='text-xs font-medium text-orange-700 mb-2'>AI Engineering</div>
                  <h4 className='font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors'>
                    AI Cost Optimization 2025
                  </h4>
                  <p className='text-gray-600 text-sm mb-3'>
                    Ship faster, spend less with practical cost optimization.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>9 min read</span>
                    <span>💡 Insight</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Case Studies & Resources Showcase */}
          <div className='mb-16'>
            <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>Success Stories & Resources</h3>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
                <h4 className='text-lg font-semibold text-gray-900 mb-4'>📊 Latest Case Studies</h4>
                <div className='space-y-4'>
                  <Link href='/case-studies/ai-automation-manufacturing-2025' className='group block'>
                    <div className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'>
                      <div className='text-2xl'>🏭</div>
                      <div>
                        <h5 className='font-semibold text-gray-900 group-hover:text-blue-600 mb-1'>
                          AI Automation in Manufacturing
                        </h5>
                        <p className='text-gray-600 text-sm mb-2'>
                          40% cost reduction and 60% faster processing times
                        </p>
                        <div className='flex items-center gap-4 text-xs text-gray-500'>
                          <span>Fortune 500</span>
                          <span>•</span>
                          <span>$2.3M savings</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href='/case-studies/fortune-500-ai-transformation' className='group block'>
                    <div className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'>
                      <div className='text-2xl'>🏆</div>
                      <div>
                        <h5 className='font-semibold text-gray-900 group-hover:text-blue-600 mb-1'>
                          Fortune 500 AI Transformation
                        </h5>
                        <p className='text-gray-600 text-sm mb-2'>
                          Complete digital transformation success story
                        </p>
                        <div className='flex items-center gap-4 text-xs text-gray-500'>
                          <span>Enterprise</span>
                          <span>•</span>
                          <span>Full transformation</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link 
                  href='/case-studies' 
                  className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4'
                >
                  View All Case Studies
                  <span>→</span>
                </Link>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                  <span className='text-xl'>🛡️</span>
                </div>
                <div>
                  <h4 className='font-semibold'>AI Security Hardening</h4>
                  <p className='text-sm opacity-90'>Essential security measures for AI systems</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                  <span className='text-xl'>💰</span>
                </div>
                <div>
                  <h4 className='font-semibold'>AI ROI Calculator</h4>
                  <p className='text-sm opacity-90'>Calculate potential return on AI investments</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                  <span className='text-xl'>⚖️</span>
                </div>
                <div>
                  <h4 className='font-semibold'>AI Governance Framework</h4>
                  <p className='text-sm opacity-90'>Complete framework for responsible AI governance</p>
                </div>
              </div>
            </div>
            <div className='text-center mt-6'>
              <Link
                href='/resources'
                className='bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

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
