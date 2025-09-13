import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
        <div className='relative container mx-auto px-4 py-24 text-center text-white'>
          <h1 className='text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            Welcome to Zion Tech Group
          </h1>
          <p className='text-xl mb-8 max-w-3xl mx-auto text-gray-300'>
            Pioneering the future with cutting-edge AI solutions, quantum
            technology, and innovative IT services.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='/services'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
            >
              Explore Services
            </a>
            <a
              href='/products'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>Our Services</h3>
            <p className='text-gray-300 mb-6'>
              Discover our comprehensive range of technology services including
              AI development, cloud migration, cybersecurity, and more.
            </p>
            <a
              href='/services'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors'
            >
              Learn More
            </a>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>Our Products</h3>
            <p className='text-gray-300 mb-6'>
              Explore our innovative product portfolio including AI-powered
              solutions, SaaS platforms, and security tools.
            </p>
            <a
              href='/products'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors'
            >
              View Products
            </a>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>Get In Touch</h3>
            <p className='text-gray-300 mb-6'>
              Ready to transform your business? Contact us for a free
              consultation and custom solution design.
            </p>
            <a
              href='/contact'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors'
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* New Q4 Services Promo */}
      <div className='container mx-auto px-4 pb-8'>
        <div className='rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 md:p-8'>
          <div className='text-center'>
            <span className='inline-flex items-center gap-2 rounded-full bg-blue-600/20 text-blue-200 px-3 py-1 text-xs font-medium border border-blue-400/30'>
              New in Q4
            </span>
            <h2 className='mt-3 text-2xl md:text-3xl font-bold text-white'>Fresh services just launched</h2>
            <p className='mt-2 text-gray-300'>GenAI SEO Copilot, Customer Support Autoresponder, and SLO Guard Lite.</p>
          </div>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              { href: '/services/genai-seo-copilot', title: 'GenAI SEO Copilot', desc: 'On-page fixes, schema and links in one click.' },
              { href: '/services/customer-support-autoresponder', title: 'Customer Support Autoresponder', desc: 'Grounded answers with guardrails.' },
              { href: '/services/reliability-slo-guard', title: 'SLO Guard Lite', desc: 'Error budgets and burn alerts without lock-in.' },
            ].map((card) => (
              <a key={card.href} href={card.href} className='group block rounded-xl border border-white/15 bg-white/5 p-5 hover:border-blue-400/40 hover:bg-white/10 transition-colors'>
                <h3 className='font-semibold text-white group-hover:text-blue-200'>{card.title}</h3>
                <p className='mt-1 text-sm text-gray-300'>{card.desc}</p>
                <span className='mt-3 inline-flex items-center text-blue-300 text-sm group-hover:underline'>Learn more →</span>
              </a>
            ))}
          </div>
          <div className='mt-6 text-center'>
            <a href='/services' className='inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 hover:bg-blue-700'>
              Browse all services
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center py-16'>
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl mb-8 text-gray-300'>
            Let's discuss how our technology solutions can help you achieve your
            goals.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+13024640950'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
            >
              ✉️ Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
