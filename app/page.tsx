import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />

<<<<<<< HEAD
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
                  href="/blog/ai-2025-generative-agents-in-production"
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
=======
>>>>>>> main
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI & Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Cutting-edge AI automation, cloud infrastructure, and micro SaaS solutions. 
              Expert consulting and implementation services for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
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
      <section className='py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>✨ FRESH CONTENT - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Latest AI & Tech Insights
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Stay ahead with our newest content covering vector databases, AI agents in production, 
              supply chain optimization, and comprehensive implementation guides. Expert insights delivered weekly.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/blog'
                className='bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📚 Explore All Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg' 
              >
                📋 Download Resources
              </Link>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/blog/ai-vector-databases-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🗄️</div>
                <h3 className='text-lg font-semibold mb-2'>AI Vector Databases 2025</h3>
                <p className='text-sm opacity-90 mb-3'>Master Pinecone, Weaviate, Qdrant with practical implementation examples</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>25 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-agents-production-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Agents in Production</h3>
                <p className='text-sm opacity-90 mb-3'>Deploy with confidence - safety guardrails, monitoring, scaling strategies</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>28 min read</span>
                  <span className='mx-2'>•</span>
                  <span>Hot Topic</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-supply-chain-optimization-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📦</div>
                <h3 className='text-lg font-semibold mb-2'>Supply Chain AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>$15M annual savings - complete case study with implementation details</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-12'>
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
            <Link href='/blog/ai-2025-generative-agents-in-production' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏢</div>
                <h3 className='text-lg font-semibold mb-2'>Generative Agents in Production</h3>
                <p className='text-sm opacity-90 mb-3'>Guardrails, observability, and cost controls for reliable agents</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-2025-cloud-cost-optimization-blueprint' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>💰</div>
                <h3 className='text-lg font-semibold mb-2'>Cloud Cost Optimization Blueprint</h3>
                <p className='text-sm opacity-90 mb-3'>Cut AI spend with model tiering, caching, and batching</p>
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
              to sustainability success stories, get the knowledge you need to succeed in 2025.
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
            <Link href='/blog/ai-2025-year-ahead-predictions' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔮</div>
                <h3 className='text-lg font-semibold mb-2'>AI 2025: The Year Ahead</h3>
                <p className='text-sm opacity-90 mb-3'>15 predictions that will shape the future of AI and business</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>25 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
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

            <Link href='/case-studies/ai-sustainability-transformation-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
                <h3 className='text-lg font-semibold mb-2'>AI Sustainability Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>60% energy reduction, carbon neutrality - complete case study</p>
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

      {/* New Case Study Spotlight */}
      <section className='py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🏥 NEW CASE STUDY</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              Healthcare AI Success Story
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Regional hospital system achieves 95% diagnostic accuracy and 60% faster diagnosis times 
              using AI-powered medical imaging and diagnostic tools.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Link
                href='/case-studies/ai-healthcare-diagnosis-success-2025'
                className='bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
              >
                📖 Read Full Case Study
              </Link>
              <Link
                href='/case-studies'
                className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg' 
              >
                📊 View All Case Studies
              </Link>
            </div>
          </div>

          {/* Key Results */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center'>
              <div className='text-3xl font-bold mb-2'>95%</div>
              <div className='text-sm opacity-90'>Diagnostic Accuracy</div>
            </div>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center'>
              <div className='text-3xl font-bold mb-2'>60%</div>
              <div className='text-sm opacity-90'>Faster Diagnosis</div>
            </div>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center'>
              <div className='text-3xl font-bold mb-2'>40%</div>
              <div className='text-sm opacity-90'>Cost Reduction</div>
            </div>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center'>
              <div className='text-3xl font-bold mb-2'>$8.5M</div>
              <div className='text-sm opacity-90'>Annual Savings</div>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-lg opacity-90 mb-6'>
              "This implementation demonstrates the transformative potential of AI in healthcare. 
              We've not only improved patient outcomes but also created a sustainable competitive advantage."
            </p>
            <div className='text-sm opacity-75'>
              - CTO, Regional Hospital System
            </div>
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
=======
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for modern businesses</p>
>>>>>>> main
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-6">
                Transform your operations with intelligent automation solutions that reduce costs and increase efficiency.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Scalable, secure, and reliable cloud solutions that grow with your business needs.
              </p>
              <Link href="/services" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Custom software solutions designed to solve specific business challenges efficiently.
              </p>
              <Link href="/services" className="text-purple-600 font-semibold hover:text-purple-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay ahead with our expert analysis and insights</p>
          </div>
<<<<<<< HEAD

          {/* Featured New Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/blog/ai-2025-industry-disruption' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏭</div>
                <h3 className='text-lg font-semibold mb-2'>AI Industry Disruption 2025</h3>
                <p className='text-sm opacity-90 mb-3'>How AI is reshaping every sector with real impact data</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>25 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-trends-2025-predictions' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔮</div>
                <h3 className='text-lg font-semibold mb-2'>AI Trends 2025 Predictions</h3>
                <p className='text-sm opacity-90 mb-3'>15 predictions that will shape the future of technology</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>28 min read</span>
                  <span className='mx-2'>•</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-transformation-fortune-500-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏆</div>
                <h3 className='text-lg font-semibold mb-2'>Fortune 500 AI Success</h3>
                <p className='text-sm opacity-90 mb-3'>$50M savings and 300% ROI in 18 months</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide</h3>
                <p className='text-sm opacity-90 mb-3'>Complete 150+ page resource with templates</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='text-center mt-12'>
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

      {/* Latest Content Showcase */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🚀 JUST PUBLISHED - JANUARY 30, 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              Fresh AI & Business Insights Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              New this week: AI Retail Personalization, Healthcare Diagnosis Breakthroughs, Financial Services Transformation, 
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

          {/* Featured New Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/blog/ai-retail-personalization-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🛍️</div>
                <h3 className='text-lg font-semibold mb-2'>AI Retail Personalization 2025</h3>
                <p className='text-sm opacity-90 mb-3'>300% revenue growth through intelligent customer experiences</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-healthcare-diagnosis-breakthrough-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>AI Healthcare Diagnosis Breakthrough</h3>
                <p className='text-sm opacity-90 mb-3'>98% accuracy rates and revolutionary medical AI systems</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>18 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-financial-services-transformation-breakthrough-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏦</div>
                <h3 className='text-lg font-semibold mb-2'>Financial Services AI Transformation</h3>
                <p className='text-sm opacity-90 mb-3'>$2.4B cost savings and 95% fraud detection accuracy</p>
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

      {/* New Content Spotlight Banner */}
      <section className='py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Fresh AI Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              New this week: AI Industry Trends Analysis, Complete Automation Guide, 
              Fortune 500 Success Story, and our comprehensive 150-item Implementation Checklist. 
              Expert insights to accelerate your AI journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link 
                href='/blog' 
                className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
              >
                View All Articles
                <span>→</span>
              </Link>
              <Link 
                href='/resources' 
                className='inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
              >
                Download Resources
                <span>📋</span>
              </Link>
            </div>
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
              <div className='text-3xl mb-4'>💰</div>
              <h3 className='text-xl font-bold mb-3'>Startup Funding in AI Era</h3>
              <p className='text-sm opacity-90 mb-4'>
                Navigate the new funding landscape and position your AI startup for success.
              </p>
              <Link
                href='/blog/startup-funding-ai-era-2025'
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
              <Link href='/resources/ai-implementation-checklist-2025' className='group'>
                <div className='bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center'>
                      <span className='text-xl'>📋</span>
                    </div>
                    <div>
                      <h4 className='font-semibold group-hover:text-blue-600 transition-colors'>AI Implementation Checklist</h4>
                      <p className='text-sm text-gray-600'>Step-by-step guide to successful AI implementation</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href='/resources/ai-automation-roi-calculator-2025' className='group'>
                <div className='bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center'>
                      <span className='text-xl'>💰</span>
                    </div>
                    <div>
                      <h4 className='font-semibold group-hover:text-blue-600 transition-colors'>AI ROI Calculator</h4>
                      <p className='text-sm text-gray-600'>Estimate returns from automation initiatives</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
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
=======
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="hover:text-blue-600">
                  AI 2025 Revolutionary Breakthroughs
>>>>>>> main
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the revolutionary AI breakthroughs of 2025 that are transforming industries.
              </p>
              <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="text-blue-600 font-semibold">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href="/blog/ai-productivity-automation-2025" className="hover:text-blue-600">
                  AI Productivity Automation 2025
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your business with AI automation achieving 300% productivity gains.
              </p>
              <Link href="/blog/ai-productivity-automation-2025" className="text-blue-600 font-semibold">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href="/blog/startup-pricing-strategy-2025" className="hover:text-blue-600">
                  Startup Pricing Strategy 2025
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Master startup pricing with data-driven strategies that validate customer willingness to pay.
              </p>
              <Link href="/blog/startup-pricing-strategy-2025" className="text-blue-600 font-semibold">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI and technology solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
}