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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card
              title='AI-Powered Business Automation: Complete Guide for 2025'
              href='/blog/ai-powered-business-automation-2025'
              description='Discover how AI automation can transform your business operations, reduce costs, and increase efficiency.'
              icon='🤖'
            />
            <Card
              title='Micro SaaS Success Stories: From Idea to $10K MRR'
              href='/blog/micro-saas-success-stories-2025'
              description='Real success stories of entrepreneurs who built profitable micro SaaS businesses.'
              icon='🚀'
            />
            <Card
              title='AI Agent Guardrails in Production'
              href='/blog/ai-agent-guardrails-in-production'
              description='Make agents predictable with scoped tools, approvals, evals, and budgets.'
              icon='🛡️'
            />
            <Card
              title='Micro SaaS Distribution 2025'
              href='/blog/startup-micro-saas-distribution-2025'
              description='Repeatable channels to land the first 100–500 customers efficiently.'
              icon='📈'
            />
            <Card
              title='AI Consciousness Breakthrough 2025'
              href='/blog/ai-consciousness-breakthrough-2025'
              description='The dawn of machine self-awareness and what it means for the future of technology.'
              icon='🧠'
            />
            <Card
              title='Quantum AI Fusion 2025'
              href='/blog/quantum-ai-fusion-2025'
              description='Discover how quantum computing is revolutionizing artificial intelligence.'
              icon='⚛️'
            />
            <Card
              title='Enterprise AI Transformation'
              href='/blog/enterprise-ai-transformation-2025'
              description='Complete guide to transforming your enterprise with AI solutions.'
              icon='🏢'
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

      {/* Case Studies Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>Success Stories</h2>
              <p className='text-gray-600'>Real results from our AI transformations.</p>
            </div>
            <Link href='/case-studies' className='text-blue-600 font-semibold hover:underline'>View all</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card
              title='AI Healthcare Transformation'
              href='/case-studies/ai-healthcare-transformation'
              description='40% efficiency gains and $12M annual savings through AI-powered patient care optimization.'
              icon='🏥'
            />
            <Card
              title='Enterprise AI Revolution'
              href='/case-studies/enterprise-ai-transformation'
              description='How we transformed a Fortune 500 company with comprehensive AI solutions.'
              icon='🚀'
            />
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
