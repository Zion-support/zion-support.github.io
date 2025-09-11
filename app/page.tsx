import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
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

      {/* Latest Articles */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Latest Articles</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Fresh insights from our team on AI, cloud, and automation.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card
              title='Secure RAG Architecture in 2025: Safety, Scale, and Speed'
              href='/blog/secure-rag-architecture-2025'
              description='Multi-tenant RAG with strong isolation, evals, and predictable latency.'
              icon='🛡️'
            />
            <Card
              title='AI Product Roadmaps That Actually Ship'
              href='/blog/ai-product-roadmaps-that-ship'
              description='Milestones and guardrails that keep AI features shipping with quality.'
              icon='🗺️'
            />
            <Card
              title='AI-Powered Customer Support Playbooks'
              href='/blog/ai-customer-support-playbooks'
              description='Self-serve assistants, triage, agent copilots and QA—deployed with guardrails.'
              icon='🎧'
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
