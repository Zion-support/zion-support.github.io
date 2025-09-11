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

      {/* Content Promotion Banner */}
      <section className='py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              🚀 New Content & Resources Available!
            </h2>
            <p className='text-xl opacity-90 mb-8 max-w-3xl mx-auto'>
              Discover our latest AI guides, implementation checklists, and expert insights. 
              Everything you need to stay ahead in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/resources'
                className='bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg'
              >
                Browse Free Resources
              </Link>
              <Link
                href='/blog'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg'
              >
                Read Latest Articles
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Link href='/blog/enterprise-rag-2025-blueprint' className='group'>
              <div className='bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-colors'>
                <div className='text-3xl mb-2'>📚</div>
                <h3 className='text-lg font-semibold mb-2 group-hover:underline'>Enterprise RAG in 2025: A Practical Blueprint</h3>
                <p className='text-sm opacity-90'>Reliable architectures, guardrails, and cost controls for RAG at scale</p>
              </div>
            </Link>
            <Link href='/blog/ai-cost-optimization-2025' className='group'>
              <div className='bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-colors'>
                <div className='text-3xl mb-2'>💸</div>
                <h3 className='text-lg font-semibold mb-2 group-hover:underline'>AI Cost Optimization in 2025</h3>
                <p className='text-sm opacity-90'>Ship faster and spend less with practical cost governance</p>
              </div>
            </Link>
            <Link href='/blog/startup-distribution-tactics-2025' className='group'>
              <div className='bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-colors'>
                <div className='text-3xl mb-2'>📈</div>
                <h3 className='text-lg font-semibold mb-2 group-hover:underline'>Startup Distribution Tactics 2025</h3>
                <p className='text-sm opacity-90'>Repeatable playbooks to reach your first 500 customers</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>Latest Articles</h2>
              <p className='text-gray-600'>Fresh insights on AI, micro SaaS, and cloud.</p>
            </div>
            <Link href='/blog' className='text-blue-600 font-semibold hover:underline'>View all</Link>
          </div>
          {/* New Content Promo */}
          <div className='mb-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Link href='/blog/enterprise-rag-2025-blueprint' className='group'>
              <div className='rounded-lg border border-blue-200 bg-blue-50 p-6 hover:bg-blue-100 transition-colors'>
                <div className='text-sm font-medium text-blue-700 mb-1'>New</div>
                <h3 className='text-xl font-semibold text-blue-900 group-hover:underline'>Enterprise RAG in 2025: Practical Blueprint</h3>
                <p className='text-blue-800 mt-2'>Reference architecture and guardrails for reliable enterprise knowledge systems.</p>
              </div>
            </Link>
            <Link href='/blog/startup-distribution-tactics-2025' className='group'>
              <div className='rounded-lg border border-green-200 bg-green-50 p-6 hover:bg-green-100 transition-colors'>
                <div className='text-sm font-medium text-green-700 mb-1'>New</div>
                <h3 className='text-xl font-semibold text-green-900 group-hover:underline'>Startup Distribution Tactics 2025</h3>
                <p className='text-green-800 mt-2'>Founder-led outbound, SEO content, and partners to 500 customers.</p>
              </div>
            </Link>
            <Link href='/blog/ai-cost-optimization-2025' className='group'>
              <div className='rounded-lg border border-purple-200 bg-purple-50 p-6 hover:bg-purple-100 transition-colors'>
                <div className='text-sm font-medium text-purple-700 mb-1'>New</div>
                <h3 className='text-xl font-semibold text-purple-900 group-hover:underline'>AI Cost Optimization in 2025</h3>
                <p className='text-purple-800 mt-2'>Cut LLM and vector costs without hurting outcomes.</p>
              </div>
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card
              title='AI Agents in the Enterprise: Practical Playbooks for 2025'
              href='/blog/ai-agents-in-enterprise-2025'
              description='Architectures, guardrails, and KPIs to deploy reliable AI agents.'
              icon='🧠'
            />
            <Card
              title='Startup Distribution in 2025: A Practical Playbook'
              href='/blog/startup-distribution-playbook-2025'
              description='The highest-leverage channels to reach 0 → 500 customers.'
              icon='📈'
            />
            <Card
              title='AI Governance Blueprint 2025: Controls that Actually Work'
              href='/blog/ai-governance-blueprint-2025'
              description='Policy, process, and technical controls that reduce real risk.'
              icon='🛡️'
            />
            <Card
              title='GenAI Observability: The 2025 Checklist'
              href='/blog/genai-observability-checklist-2025'
              description='Telemetry that matters across prompts, tools, retrieval, and costs.'
              icon='🔍'
            />
            <Card
              title='Zero-Trust AI Security: A Practical 2025 Guide'
              href='/blog/zero-trust-ai-security-2025'
              description='Layered defenses to keep AI systems safe in production.'
              icon='🛡️'
            />
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

      {/* Contact CTA */}
      <section className='py-16'>
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
