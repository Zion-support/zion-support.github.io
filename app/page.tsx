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

      {/* Testimonials Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <TestimonialCard
              quote="Zion Tech Group's AI transformation exceeded our expectations. The 85% efficiency gain and $2M in annual savings have transformed our operations completely."
              author="Sarah Chen"
              title="CTO"
              company="Fortune 500 Manufacturing"
              rating={5}
            />
            <TestimonialCard
              quote="Their quantum computing implementation helped us optimize our supply chain like never before. We reduced delivery times by 30% and fuel costs by 25%."
              author="David Kim"
              title="VP of Operations"
              company="Global Logistics Company"
              rating={5}
            />
            <TestimonialCard
              quote="The AI automation they implemented handles 80% of our customer inquiries without human intervention. Our customer satisfaction is now at 95%."
              author="Maria Garcia"
              title="Customer Success Director"
              company="International Bank"
              rating={5}
            />
            <TestimonialCard
              quote="Their micro SaaS development approach was exactly what we needed. We went from concept to $150K ARR in just 12 months with their guidance."
              author="Michael Rodriguez"
              title="Founder"
              company="E-commerce Startup"
              rating={5}
            />
            <TestimonialCard
              quote="The cloud migration was seamless. They reduced our infrastructure costs by 40% while improving performance and reliability significantly."
              author="Jennifer Walsh"
              title="VP of Engineering"
              company="Healthcare Network"
              rating={5}
            />
            <TestimonialCard
              quote="Zion Tech Group's blockchain solution streamlined our supply chain operations. We now have complete transparency and reduced fraud by 90%."
              author="Robert Johnson"
              title="Supply Chain Director"
              company="Retail Chain"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Latest Insights & Resources
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Stay ahead with our expert insights, case studies, and free resources
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <ContentPreviewCard
              title='Quantum Computing Business Applications 2025'
              description='Discover how quantum computing is revolutionizing business operations and creating new opportunities for competitive advantage.'
              href='/blog/quantum-computing-business-applications-2025'
              category='Quantum Computing'
              readTime='12 min read'
              icon='⚛️'
            />
            <ContentPreviewCard
              title='AI Automation Enterprise Guide'
              description='Complete implementation guide for AI automation in enterprise. Learn proven strategies and real-world success stories.'
              href='/blog/ai-automation-enterprise'
              category='AI Automation'
              readTime='15 min read'
              icon='🤖'
            />
            <ContentPreviewCard
              title='Fortune 500 AI Transformation'
              description='Case study: How we helped a Fortune 500 company achieve 85% efficiency gains and $2M annual savings.'
              href='/case-studies/fortune-500-ai-transformation'
              category='Case Study'
              readTime='8 min read'
              icon='📈'
            />
          </div>
          
          {/* Additional Content Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            <ContentPreviewCard
              title='AI Implementation Checklist'
              description='Download our comprehensive 50-point checklist for successful AI implementation. Avoid common pitfalls and save time.'
              href='/resources/ai-implementation-checklist'
              category='Free Resource'
              readTime='Download'
              icon='✅'
            />
            <ContentPreviewCard
              title='Enterprise AI Automation Strategies 2025'
              description='Comprehensive guide to implementing AI automation in enterprise environments with proven strategies.'
              href='/blog/ai-automation-enterprise-2025'
              category='Blog'
              readTime='12 min read'
              icon='🤖'
            />
            <ContentPreviewCard
              title='Global Manufacturing AI Transformation'
              description='How a Fortune 500 company achieved 40% cost reduction and 60% efficiency improvement through AI.'
              href='/case-studies/global-manufacturing-ai-transformation'
              category='Case Study'
              readTime='8 min read'
              icon='🏭'
            />
            <ContentPreviewCard
              title='AI Implementation Roadmap 2025'
              description='Complete step-by-step roadmap for implementing AI solutions with timelines and best practices.'
              href='/resources/ai-implementation-roadmap'
              category='Resource'
              readTime='15 min read'
              icon='🗺️'
            />
            <ContentPreviewCard
              title='Success Stories & Case Studies'
              description='Real results from real clients. See how we\'ve helped businesses achieve remarkable outcomes across industries.'
              href='/case-studies'
              category='Case Studies'
              readTime='20+ stories'
              icon='📊'
            />
            <ContentPreviewCard
              title='Free Resources & Guides'
              description='Access our comprehensive library of guides, templates, and tools for your technology initiatives.'
              href='/resources'
              category='Resources'
              readTime='50+ resources'
              icon='📚'
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white'>
            <h2 className='text-3xl font-bold mb-4'>
              Stay Updated with Our Latest Insights
            </h2>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              Get weekly updates on AI trends, technology insights, and business strategies. 
              Join 15,000+ professionals who trust our content.
            </p>
            <div className='max-w-md mx-auto flex gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none'
              />
              <button className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                Subscribe
              </button>
            </div>
            <p className='text-blue-200 text-sm mt-4'>
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm'>
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

function ContentPreviewCard({
  title,
  description,
  href,
  category,
  readTime,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  icon: string;
}) {
  return (
    <Link href={href} className='group'>
      <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='text-3xl'>{icon}</div>
          <div>
            <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
              {category}
            </span>
          </div>
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
          {title}
        </h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-500'>{readTime}</span>
          <span className='text-blue-600 font-medium group-hover:underline'>
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}

function TestimonialCard({
  quote,
  author,
  title,
  company,
  rating,
}: {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
      <div className='flex mb-4'>
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
      <blockquote className='text-gray-600 mb-4 italic'>
        "{quote}"
      </blockquote>
      <div className='border-t border-gray-200 pt-4'>
        <div className='font-semibold text-gray-900'>{author}</div>
        <div className='text-sm text-gray-600'>{title}, {company}</div>
      </div>
    </div>
  );
}
