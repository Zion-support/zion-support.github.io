import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import NewContentPromoBanner from '../components/NewContentPromoBanner';
import NewContentPromoBanner2025 from '../components/NewContentPromoBanner2025';
import UltraContentPromotionBanner from '../components/UltraContentPromotionBanner';
import MegaContentDropBanner from '../components/MegaContentDropBanner';
import DynamicContentCarousel from '../components/DynamicContentCarousel';
import ContentDiscoverySection from '../components/ContentDiscoverySection';
import NewContentDiscovery from '../components/NewContentDiscovery';
import EnhancedNewsletter from '../components/EnhancedNewsletter';
import EnhancedNewsletterSignup from '../components/EnhancedNewsletterSignup';
import SuccessMetrics, { defaultMetrics, contentMetrics } from '../components/SuccessMetrics';
>>>>>>> cursor/create-and-deploy-new-content-fd62
import Card from '../components/ui/Card';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));

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
        {/* NEW CONTENT PROMO BANNER 2025 */}
        <NewContentPromoBanner2025 />
        
        {/* ULTRA CONTENT PROMOTION BANNER */}
        <UltraContentPromotionBanner />
        
        {/* Content Promotion Banner */}
        <NewContentPromoBanner />
        
        {/* NEW CONTENT LAUNCH BANNER */}
        <section className="py-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 25+ New AI Resources Just Released!
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
                Discover our biggest content update yet: Advanced AI Architecture, Cybersecurity Defense, 
                Quantum Computing Guides, and Enterprise Automation Success Stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/content-showcase"
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Explore Services
                </Link>
                <Link
                  href="/content-showcase"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300"
                >
                  View Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Promotion Banner */}
        <NewContentPromoBanner variant="featured" maxItems={3} />

        {/* Featured Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI and technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="AI Automation"
                description="Streamline operations with intelligent automation solutions"
                icon="🤖"
                href="/services/ai-automation"
              />
              <FeatureCard
                title="Cloud Infrastructure"
                description="Scalable, secure, and cost-effective cloud solutions"
                icon="☁️"
                href="/services/cloud-infrastructure"
              />
              <FeatureCard
                title="Micro SaaS Development"
                description="Custom SaaS platforms for niche markets"
                icon="💼"
                href="/services/micro-saas"
              />
              <FeatureCard
                title="AI Consulting"
                description="Strategic guidance for AI implementation"
                icon="🧠"
                href="/services/ai-consulting"
              />
              <FeatureCard
                title="Edge Computing"
                description="Deploy AI at the edge for real-time processing"
                icon="⚡"
                href="/services/edge-computing"
              />
              <FeatureCard
                title="Quantum Computing"
                description="Next-generation computing solutions"
                icon="⚛️"
                href="/services/quantum-computing"
              />
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with our latest research, case studies, and technical guides
              </p>
            </div>
            <ContentShowcase />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See how we've helped businesses transform with AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Zion Tech Group transformed our operations with AI automation, reducing costs by 40% and improving efficiency by 60%."
                author="Sarah Johnson"
                company="TechCorp Inc."
                rating={5}
              />
              <TestimonialCard
                quote="Their cloud infrastructure solutions enabled us to scale globally while maintaining security and performance."
                author="Michael Chen"
                company="Global Solutions"
                rating={5}
              />
              <TestimonialCard
                quote="The micro SaaS platform they built for us has generated $2M in revenue in just 18 months."
                author="Emily Rodriguez"
                company="InnovateLab"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* ROI Calculator CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Calculate Your AI ROI
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Discover the potential return on investment for your AI transformation
            </p>
            <Suspense fallback={<LoadingSpinner />}>
              <ROICalculator />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Carousel */}
      <DynamicContentCarousel />

      {/* Mega Content Drop Banner */}
      <MegaContentDropBanner variant="mega" maxItems={8} />

      {/* New Content Promotional Banner */}
      <NewContentPromoBanner variant="featured" maxItems={3} />

<<<<<<< HEAD
=======
      {/* Featured New Content Showcase */}
      <FeaturedNewContentShowcase title="Featured in January 2025" subtitle="Fresh articles, resources, and case studies just released" showViewAll={true} viewAllHref="/content-showcase" columns={3} />

      {/* Featured Content Showcase */}
      <FeaturedContentShowcase />

      {/* NEW CONTENT SPOTLIGHT SECTION */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 HOT THIS WEEK - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Revolutionary AI Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest breakthrough content: AI 2025 Year in Review, Workforce Transformation strategies, 
              Sustainability success stories, and the complete AI Implementation Master Guide 2026. Expert insights 
              to accelerate your AI success in 2025 and beyond.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
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

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-2025-year-in-review' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📊</div>
                <h3 className='text-lg font-semibold mb-2'>AI 2025 Year in Review</h3>
                <p className='text-sm opacity-90 mb-3'>Comprehensive analysis of AI breakthroughs and enterprise adoption trends</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>25 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-workforce-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete guide to reskilling strategies for the AI era</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-sustainability-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
                <h3 className='text-lg font-semibold mb-2'>AI Sustainability Success</h3>
                <p className='text-sm opacity-90 mb-3'>60% energy reduction and carbon neutrality achieved</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2026' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide 2026</h3>
                <p className='text-sm opacity-90 mb-3'>200+ page comprehensive guide with frameworks and templates</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>200+ pages</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-8'>
            <Link
              href='/blog'
              className='bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4'
            >
              View All Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block'
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* New Content Banner - Top */}
      <NewContentBanner variant="default" maxItems={4} />

>>>>>>> cursor/create-and-deploy-new-content-0928
      {/* Latest Content Drop - Prominent Banner */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
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
              Discover our latest breakthrough content: AI Breakthrough Innovations 2025, Enterprise AI Transformation Success Stories, 
              and the complete AI Implementation Playbook. Expert insights to accelerate your success.
            </p>
          </div>

          {/* Featured New Content Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/blog/ai-2025-year-in-review' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📊</div>
                <h3 className='text-lg font-semibold mb-2'>AI 2025 Year in Review</h3>
                <p className='text-sm opacity-90 mb-3'>Comprehensive analysis of AI breakthroughs and enterprise adoption trends</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>25 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-workforce-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete guide to reskilling strategies for the AI era</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-sustainability-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
                <h3 className='text-lg font-semibold mb-2'>AI Sustainability Success</h3>
                <p className='text-sm opacity-90 mb-3'>60% energy reduction and carbon neutrality achieved</p>
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


      {/* Services Section */}
      <section className='py-16' aria-labelledby="services-heading">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 id="services-heading" className='text-3xl font-bold text-gray-900 mb-4'>
              Our Services
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8' role="list" aria-label="Our services">
            <div role="listitem">
              <Card
                title='Micro SaaS'
                href='/services/micro-saas'
                description='End-to-end product engineering with billing, auth, analytics and growth.'
                icon='🚀'
              />
            </div>
            <div role="listitem">
              <Card
                title='AI Services'
                href='/services/ai-services'
                description='LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps.'
                icon='🤖'
              />
            </div>
            <div role="listitem">
              <Card
                title='Edge Computing'
                href='/services/edge-computing'
                description='Real-time processing, IoT integration, and distributed infrastructure solutions.'
                icon='⚡'
              />
            </div>
            <div role="listitem">
              <Card
                title='IT Services'
                href='/services/it-services'
                description='Cloud migration, DevOps, SRE, security hardening and cost optimization.'
                icon='⚙️'
              />
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className='py-16 bg-gray-50' aria-labelledby="features-heading">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 id="features-heading" className='text-3xl font-bold text-gray-900 mb-4'>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' role="list" aria-label="Our key features">
            <div role="listitem">
              <FeatureCard
                title='Fast Delivery'
                description='Rapid prototyping and deployment with modern tools and practices.'
              />
            </div>
            <div role="listitem">
              <FeatureCard
                title='Scalable Architecture'
                description='Built for growth with cloud-native, microservices architecture.'
              />
            </div>
            <div role="listitem">
              <FeatureCard
                title='24/7 Support'
                description='Round-the-clock monitoring and support for your critical systems.'
              />
            </div>
            <div role="listitem">
              <FeatureCard
                title='Cost Effective'
                description='Optimized solutions that reduce operational costs and improve efficiency.'
              />
            </div>
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
              New this week: AI Workforce Transformation, Data Privacy Compliance, Green AI Sustainability, 
              and comprehensive implementation guides. Expert insights to accelerate your growth in 2025.
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
            <Link href='/blog/ai-workforce-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Reskilling strategies for the AI era</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-data-privacy-compliance-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔒</div>
                <h3 className='text-lg font-semibold mb-2'>AI Data Privacy & Compliance 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Complete guide to AI privacy regulations</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>22 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-sustainability-green-tech-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
                <h3 className='text-lg font-semibold mb-2'>AI Sustainability & Green Tech 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Building eco-friendly AI systems</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>20 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-sustainability-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏭</div>
                <h3 className='text-lg font-semibold mb-2'>AI Sustainability Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>60% energy reduction, carbon neutrality</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
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

      {/* New Resources Promotion Banner */}
      <section className='py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🎁 FREE DOWNLOADS</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              📚 New Implementation Guides
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Download our latest comprehensive guides: AI Implementation Master Guide 2026, 
              AI Cybersecurity Checklist, and Workforce Transformation Playbooks. Everything you 
              need to succeed with AI in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/resources'
                className='bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📋 Download All Resources
              </Link>
              <Link
                href='/blog'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg' 
              >
                📖 Read Latest Articles
              </Link>
            </div>
          </div>

          {/* Featured Resources Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/resources/ai-implementation-master-guide-2026' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide 2026</h3>
                <p className='text-sm opacity-90 mb-3'>200+ page comprehensive guide with frameworks and templates</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>200+ pages</span>
                </div>
              </div>
            </Link>
            
            <Link href='/resources/ai-cybersecurity-checklist-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🛡️</div>
                <h3 className='text-lg font-semibold mb-2'>AI Cybersecurity Checklist 2025</h3>
                <p className='text-sm opacity-90 mb-3'>150+ security items for secure AI implementation</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>150+ items</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-workforce-transformation-playbook-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation Playbook</h3>
                <p className='text-sm opacity-90 mb-3'>Complete reskilling strategies and implementation guides</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>150+ pages</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

        {/* Latest Content Drop - Enhanced Banner */}
        <section className='py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden'>
          <div className='absolute inset-0 bg-black opacity-10'></div>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
                <span className='text-sm font-medium'>🔥 JUST PUBLISHED - JANUARY 2025</span>
              </div>
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                🚀 Revolutionary AI Content Update
              </h2>
              <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
                Discover our latest breakthrough content: AI Breakthrough Innovations, Sustainability & Green Tech, 
                Robotics & Automation, plus new case studies and implementation guides. Get expert insights 
                on the technologies transforming 2025 and beyond.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link
                  href='/content-showcase'
                  className='bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
                >
                  🎯 Explore All New Content
                </Link>
                <Link
                  href='/blog/ai-2025-breakthrough-innovations'
                  className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg' 
                >
                  📖 Read Latest Article
                </Link>
              </div>
            </div>

            {/* New Content Grid - Enhanced */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              <Link href='/blog/ai-2025-foundation-model-fine-tuning' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔧</div>
                  <h3 className='text-lg font-semibold mb-2'>Foundation Model Fine-Tuning 2025</h3>
                  <p className='text-sm opacity-90 mb-3'>PEFT, data curation, evals, guardrails, and cost control</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>22 min read</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href='/blog/ai-2025-agent-safety-evals-playbook' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🛡️</div>
                  <h3 className='text-lg font-semibold mb-2'>Agent Safety & Evals Playbook</h3>
                  <p className='text-sm opacity-90 mb-3'>Red teaming, jailbreak prevention, policy enforcement</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>19 min read</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                  <h3 className='text-lg font-semibold mb-2'>AI Healthcare Diagnosis Success</h3>
                  <p className='text-sm opacity-90 mb-3'>95% accuracy and 60% faster diagnosis times</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Case Study</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href='/resources/ai-cybersecurity-checklist-2025' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                  <h3 className='text-lg font-semibold mb-2'>AI Cybersecurity Checklist</h3>
                  <p className='text-sm opacity-90 mb-3'>150+ security items for secure AI implementation</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Free Download</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>

          {/* Featured New Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-2025-breakthrough-innovations' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🚀</div>
                <h3 className='text-lg font-semibold mb-2'>AI 2025 Breakthrough Innovations</h3>
                <p className='text-sm opacity-90 mb-3'>Revolutionary AI technologies reshaping industries</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>25 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-sustainability-green-tech-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
                <h3 className='text-lg font-semibold mb-2'>AI Sustainability & Green Tech</h3>
                <p className='text-sm opacity-90 mb-3'>Building eco-friendly AI systems for the future</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>20 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/blog/ai-robotics-automation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Robotics & Automation</h3>
                <p className='text-sm opacity-90 mb-3'>The future of intelligent machines</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>22 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-autonomous-manufacturing-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-lg font-semibold mb-2'>$200M Manufacturing Success</h3>
                <p className='text-sm opacity-90 mb-3'>Real case study with autonomous AI systems</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Discovery Section */}
      <ContentDiscoverySection />

        {/* Revolutionary AI Tools Banner */}
        <section className='py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden'>
          <div className='absolute inset-0 bg-black opacity-10'></div>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
                <span className='text-sm font-medium'>🚀 REVOLUTIONARY AI TOOLS</span>
              </div>
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                🛠️ 6 Powerful AI Tools Now Available
              </h2>
              <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
                Transform your AI journey with our comprehensive suite of tools: AI Readiness Assessment, 
                ROI Calculator, Implementation Roadmap Generator, Model Performance Monitor, Ethics 
                Compliance Checker, and Cost Optimizer. Get personalized insights and recommendations.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link
                  href='/tools/ai-tools-showcase'
                  className='bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
                >
                  🛠️ Explore All AI Tools
                </Link>
                <Link
                  href='/tools/ai-readiness-assessment'
                  className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg' 
                >
                  🎯 Take Assessment
                </Link>
              </div>
            </div>

            {/* Featured Tools Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <Link href='/tools/ai-readiness-assessment' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🎯</div>
                  <h3 className='text-lg font-semibold mb-2'>AI Readiness Assessment</h3>
                  <p className='text-sm opacity-90 mb-3'>Evaluate your AI transformation readiness with our comprehensive assessment tool</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Free Tool</span>
                    <span className='mx-2'>•</span>
                    <span>5 min assessment</span>
                  </div>
                </div>
              </Link>
              
              <Link href='/tools/ai-roi-calculator' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📊</div>
                  <h3 className='text-lg font-semibold mb-2'>AI ROI Calculator</h3>
                  <p className='text-sm opacity-90 mb-3'>Calculate potential return on investment for your AI initiatives</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Free Tool</span>
                    <span className='mx-2'>•</span>
                    <span>Instant results</span>
                  </div>
                </div>
              </Link>

              <Link href='/resources/ai-implementation-master-guide-2026' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📖</div>
                  <h3 className='text-lg font-semibold mb-2'>Implementation Master Guide</h3>
                  <p className='text-sm opacity-90 mb-3'>200+ page comprehensive guide with frameworks and templates</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Free Download</span>
                    <span className='mx-2'>•</span>
                    <span>200+ pages</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <Suspense fallback={null}>
          <StructuredData />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}