// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import ROICalculator from '../components/ROICalculator';
import StructuredData from '../components/StructuredData';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <StructuredData 
        type="Organization" 
        data={{}} 
      />
      <StructuredData 
        type="WebSite" 
        data={{}} 
      />
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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
              title='IT Services'
              href='/services/it-services'
              description='Cloud migration, DevOps, SRE, security hardening and cost optimization.'
              icon='⚙️'
            />
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

      {/* Client Logos */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Trusted by Leading Organizations
            </h2>
            <p className='text-gray-600'>
              From startups to Fortune 500 companies, we help businesses transform with technology
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60'>
            <div className='text-center'>
              <div className='w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-2'>
                <span className='text-gray-600 font-semibold text-sm'>TechCorp</span>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-2'>
                <span className='text-gray-600 font-semibold text-sm'>RetailMax</span>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-2'>
                <span className='text-gray-600 font-semibold text-sm'>FinancePro</span>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-2'>
                <span className='text-gray-600 font-semibold text-sm'>HealthTech</span>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-2'>
                <span className='text-gray-600 font-semibold text-sm'>EduSoft</span>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-2'>
                <span className='text-gray-600 font-semibold text-sm'>LogiFlow</span>
              </div>
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

      {/* Detailed Case Studies */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Detailed Case Studies
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Deep dives into how we've helped organizations achieve transformational results 
              with AI, automation, and modern technology solutions.
            </p>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white text-xl'>🏭</span>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>Manufacturing Excellence</h3>
                  <p className='text-gray-600'>Fortune 500 Manufacturing Company</p>
                </div>
              </div>
              
              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-600'>65%</div>
                  <div className='text-sm text-gray-600'>Cost Reduction</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-600'>80%</div>
                  <div className='text-sm text-gray-600'>Faster Processing</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-600'>$2.3M</div>
                  <div className='text-sm text-gray-600'>Annual Savings</div>
                </div>
              </div>
              
              <p className='text-gray-700 mb-6'>
                Implemented AI-powered quality control and predictive maintenance across 15 manufacturing 
                facilities, resulting in significant cost savings and improved product quality.
              </p>
              
              <div className='flex items-center justify-between'>
                <Link
                  href='/case-studies/fortune-500-ai-transformation'
                  className='text-blue-600 font-semibold hover:underline flex items-center gap-2'
                >
                  Read Full Case Study
                  <span>→</span>
                </Link>
                <span className='text-sm text-gray-500'>8 min read</span>
              </div>
            </div>

            <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white text-xl'>🛒</span>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>E-commerce Revolution</h3>
                  <p className='text-gray-600'>Mid-Market Retail Platform</p>
                </div>
              </div>
              
              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>150%</div>
                  <div className='text-sm text-gray-600'>Revenue Growth</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>45%</div>
                  <div className='text-sm text-gray-600'>Conversion Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>$1.8M</div>
                  <div className='text-sm text-gray-600'>Additional Revenue</div>
                </div>
              </div>
              
              <p className='text-gray-700 mb-6'>
                Built a comprehensive micro SaaS platform with AI-powered recommendations, 
                automated inventory management, and personalized customer experiences.
              </p>
              
              <div className='flex items-center justify-between'>
                <Link
                  href='/case-studies/ecommerce-platform-transformation'
                  className='text-green-600 font-semibold hover:underline flex items-center gap-2'
                >
                  Read Full Case Study
                  <span>→</span>
                </Link>
                <span className='text-sm text-gray-500'>12 min read</span>
              </div>
            </div>
          </div>
          
          <div className='text-center mt-12'>
            <Link
              href='/case-studies'
              className='inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors'
            >
              View All Case Studies
              <span>→</span>
            </Link>
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

      {/* Featured Content Showcase */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Latest Insights & Resources</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Stay ahead with our latest articles, guides, and resources on AI, micro SaaS, and enterprise technology.
            </p>
          </div>
          
          {/* Featured Article */}
          <div className='mb-16'>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
              <div className='md:flex'>
                <div className='md:w-1/2'>
                  <div className='h-64 md:h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center'>
                    <div className='text-8xl'>🤖</div>
                  </div>
                </div>
                <div className='md:w-1/2 p-8 md:p-12'>
                  <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
                    <span>🔥</span>
                    Featured Article
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                    AI Automation for Enterprise: Complete Implementation Guide 2025
                  </h3>
                  <p className='text-gray-600 mb-6 text-lg'>
                    Transform your enterprise operations with AI automation. Learn proven strategies, 
                    implementation frameworks, and real-world case studies from Fortune 500 companies.
                  </p>
                  <div className='flex items-center gap-4 mb-6 text-sm text-gray-500'>
                    <span>📅 January 27, 2025</span>
                    <span>⏱️ 15 min read</span>
                    <span>👥 12,000+ views</span>
                  </div>
                  <Link
                    href='/blog/ai-automation-enterprise'
                    className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                  >
                    Read Full Article
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Articles Grid */}
          <div className='mb-16'>
            <div className='flex items-center justify-between mb-8'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Latest Articles</h3>
                <p className='text-gray-600'>Fresh insights on AI, micro SaaS, and cloud technology.</p>
              </div>
              <Link href='/blog' className='text-blue-600 font-semibold hover:underline flex items-center gap-2'>
                View all articles
                <span>→</span>
              </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Link href='/blog/ai-agent-guardrails-in-production' className='group'>
                <article className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                      <span className='text-purple-600 text-xl'>🛡️</span>
                    </div>
                    <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full'>
                      AI Security
                    </span>
                  </div>
                  <h4 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                    AI Agent Guardrails in Production
                  </h4>
                  <p className='text-gray-600 text-sm mb-4'>
                    Make agents predictable with scoped tools, approvals, evals, and budgets.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>Jan 25, 2025</span>
                    <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
                  </div>
                </article>
              </Link>

              <Link href='/blog/startup-micro-saas-distribution-2025' className='group'>
                <article className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                      <span className='text-green-600 text-xl'>📈</span>
                    </div>
                    <span className='bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full'>
                      Growth
                    </span>
                  </div>
                  <h4 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                    Micro SaaS Distribution 2025
                  </h4>
                  <p className='text-gray-600 text-sm mb-4'>
                    Repeatable channels to land the first 100–500 customers efficiently.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>Jan 20, 2025</span>
                    <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
                  </div>
                </article>
              </Link>

              <Link href='/blog/llm-cost-optimization-playbook' className='group'>
                <article className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                      <span className='text-orange-600 text-xl'>💸</span>
                    </div>
                    <span className='bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full'>
                      Optimization
                    </span>
                  </div>
                  <h4 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                    LLM Cost Optimization Playbook
                  </h4>
                  <p className='text-gray-600 text-sm mb-4'>
                    Reduce inference spend 20–50% with routing, retrieval, batching, and observability.
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span>Jan 18, 2025</span>
                    <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* Free Resources */}
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12'>
            <div className='text-center mb-8'>
              <h3 className='text-3xl font-bold mb-4'>Free Resources & Tools</h3>
              <p className='text-xl opacity-90 max-w-2xl mx-auto'>
                Download our comprehensive guides, checklists, and tools to accelerate your AI implementation.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Link href='/resources/ai-implementation-checklist' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all'>
                  <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4'>
                    <span className='text-white text-2xl'>📋</span>
                  </div>
                  <h4 className='text-lg font-semibold mb-2 group-hover:underline'>AI Implementation Checklist</h4>
                  <p className='text-sm opacity-90 mb-4'>
                    47-page comprehensive guide covering strategy, technology, security, and change management.
                  </p>
                  <div className='flex items-center gap-2 text-sm'>
                    <span>📄 PDF</span>
                    <span>•</span>
                    <span>25,000+ downloads</span>
                  </div>
                </div>
              </Link>

              <Link href='/resources/ai-roi-calculator' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all'>
                  <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4'>
                    <span className='text-white text-2xl'>🧮</span>
                  </div>
                  <h4 className='text-lg font-semibold mb-2 group-hover:underline'>AI ROI Calculator</h4>
                  <p className='text-sm opacity-90 mb-4'>
                    Interactive tool to calculate potential returns on your AI investment with detailed metrics.
                  </p>
                  <div className='flex items-center gap-2 text-sm'>
                    <span>🛠️ Tool</span>
                    <span>•</span>
                    <span>Free to use</span>
                  </div>
                </div>
              </Link>

              <Link href='/resources/vendor-comparison' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all'>
                  <div className='w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4'>
                    <span className='text-white text-2xl'>⚖️</span>
                  </div>
                  <h4 className='text-lg font-semibold mb-2 group-hover:underline'>Vendor Comparison Matrix</h4>
                  <p className='text-sm opacity-90 mb-4'>
                    Compare leading AI platforms across key criteria, features, and pricing models.
                  </p>
                  <div className='flex items-center gap-2 text-sm'>
                    <span>📊 Spreadsheet</span>
                    <span>•</span>
                    <span>Updated monthly</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Calculate Your Automation ROI
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              See how much you could save with AI automation. Get instant estimates 
              based on your business metrics.
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='w-full max-w-2xl'>
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-20 bg-gradient-to-br from-indigo-600 to-purple-700'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Stay Ahead with Our Weekly Insights
          </h2>
          <p className='text-xl text-indigo-100 mb-8 max-w-2xl mx-auto'>
            Join 15,000+ professionals who get our weekly newsletter with the latest AI trends, 
            micro SaaS strategies, and enterprise technology insights.
          </p>
          
          <div className='bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4 mb-6'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg'
              />
              <button className='bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg'>
                Subscribe Free
              </button>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4'>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-green-500'>✓</span>
                <span>No spam, ever</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-green-500'>✓</span>
                <span>Unsubscribe anytime</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-green-500'>✓</span>
                <span>Weekly insights</span>
              </div>
            </div>
            
            <p className='text-xs text-gray-500'>
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>
          
          <div className='mt-8 flex items-center justify-center gap-8 text-indigo-200'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>15,000+</div>
              <div className='text-sm'>Subscribers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>4.9/5</div>
              <div className='text-sm'>Rating</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>95%</div>
              <div className='text-sm'>Open Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Let's discuss your project and create a custom solution that
              drives real business value. Our team has delivered 1000+
              successful projects across various industries.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+13024640950'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Call +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                Email Us
              </a>
            </div>
            <div className='mt-6 text-sm text-gray-600'>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  title,
  href,
  description,
  icon,
}: {
  title: string;
  href: string;
  description: string;
  icon: string;
}) {
  return (
    <Link href={href} className='group'>
      <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
        <div className='text-4xl mb-4'>{icon}</div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
          {title}
        </h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </Link>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}

function TestimonialCard({
  company,
  industry,
  result,
  description,
  savings,
}: {
  company: string;
  industry: string;
  result: string;
  description: string;
  savings: string;
}) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
      <div className='mb-4'>
        <h3 className='text-lg font-semibold text-gray-900'>{company}</h3>
        <p className='text-sm text-gray-600'>{industry}</p>
      </div>
      <div className='mb-4'>
        <div className='text-2xl font-bold text-green-600 mb-2'>{result}</div>
        <p className='text-gray-700 text-sm'>{description}</p>
      </div>
      <div className='text-sm font-semibold text-blue-600'>
        {savings}
      </div>
    </div>
  );
}

function ArticleCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link href={href} className='group'>
      <article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full'>
        <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
          {title}
        </h3>
        <p className='text-gray-600'>{description}</p>
        <span className='inline-block mt-4 text-blue-600 font-medium'>Read more →</span>
      </article>
    </Link>
  );
}
