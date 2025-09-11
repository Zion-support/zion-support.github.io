import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from '../data/advancedMicroSaasServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';
import { ADVANCED_AI_SERVICES_2025 } from '../data/advancedAIServices2025';

const AdvancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025.map(service => ({
      ...service,
      source: 'Micro SaaS',
    })),
    ...SPECIALIZED_IT_SERVICES_2025.map(service => ({
      ...service,
      source: 'IT Services',
    })),
    ...ADVANCED_AI_SERVICES_2025.map(service => ({
      ...service,
      source: 'AI Solutions',
    })),
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' || service.source === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    {
      id: 'Micro SaaS',
      name: 'Micro SaaS',
      count: ADVANCED_MICRO_SAAS_SERVICES_2025.length,
    },
    {
      id: 'IT Services',
      name: 'IT Services',
      count: SPECIALIZED_IT_SERVICES_2025.length,
    },
    {
      id: 'AI Solutions',
      name: 'AI Solutions',
      count: ADVANCED_AI_SERVICES_2025.length,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <SEO
        title='Advanced Services Showcase 2025 - Zion Tech Group'
        description='Explore our comprehensive portfolio of advanced micro SaaS, IT services, and AI solutions designed for the future of business technology.'
      />

      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Advanced Services Showcase 2025
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Discover our cutting-edge portfolio of micro SaaS solutions,
              specialized IT services, and advanced AI platforms designed to
              transform your business operations and drive innovation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://ziontechgroup.com/contact'
                className='inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200'
              >
                Get Started Today
              </a>
              <a
                href='tel:+13024640950'
                className='inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg text-gray-300 hover:text-white hover:border-white transition-colors duration-200'
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
          <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
          <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-white'>
            <h2 className='text-2xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-lg'>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>📞</span>
                <a href='tel:+13024640950' className='hover:underline'>
                  +1 302 464 0950
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>✉️</span>
                <a
                  href='mailto:kleber@ziontechgroup.com'
                  className='hover:underline'
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Our Service Categories
          </h2>
          <p className='text-gray-300 text-lg'>
            Comprehensive solutions across three key technology domains
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>Micro SaaS Solutions</h3>
            <p className='text-blue-100 mb-6'>
              Scalable, focused software solutions that address specific
              business needs with rapid deployment and measurable ROI.
            </p>
            <div className='text-3xl font-bold text-blue-100'>
              {ADVANCED_MICRO_SAAS_SERVICES_2025.length} Services
            </div>
          </div>

          <div className='bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>Specialized IT Services</h3>
            <p className='text-green-100 mb-6'>
              Enterprise-grade IT infrastructure, security, and development
              services designed for modern business requirements.
            </p>
            <div className='text-3xl font-bold text-green-100'>
              {SPECIALIZED_IT_SERVICES_2025.length} Services
            </div>
          </div>

          <div className='bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>Advanced AI Solutions</h3>
            <p className='text-purple-100 mb-6'>
              Cutting-edge artificial intelligence platforms that automate
              processes, provide insights, and drive innovation.
            </p>
            <div className='text-3xl font-bold text-purple-100'>
              {ADVANCED_AI_SERVICES_2025.length} Services
            </div>
          </div>
        </div>
      </div>

      {/* Services Filter and Search */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-slate-800 rounded-xl p-6 mb-8'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <input
                type='text'
                placeholder='Search services by name, description, or tags...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='flex gap-2'>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredServices.map(service => (
            <div
              key={service.id}
              className='bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-200'
            >
              <div className='flex items-start justify-between mb-4'>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.source === 'Micro SaaS'
                      ? 'bg-blue-100 text-blue-800'
                      : service.source === 'IT Services'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {service.source}
                </span>
                <span className='text-2xl font-bold text-white'>
                  {service.currency}
                  {service.price.toLocaleString()}
                </span>
              </div>

              <h3 className='text-xl font-bold text-white mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-300 mb-4 line-clamp-3'>
                {service.description}
              </p>

              <div className='mb-4'>
                <h4 className='text-sm font-semibold text-gray-400 mb-2'>
                  Key Features:
                </h4>
                <ul className='space-y-1'>
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className='text-sm text-gray-300 flex items-center gap-2'
                    >
                      <span className='text-green-400'>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mb-4'>
                <h4 className='text-sm font-semibold text-gray-400 mb-2'>
                  Benefits:
                </h4>
                <ul className='space-y-1'>
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li
                      key={index}
                      className='text-sm text-gray-300 flex items-center gap-2'
                    >
                      <span className='text-blue-400'>→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mb-4'>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-400'>Market Price:</span>
                  <span className='text-white font-medium'>
                    {service.marketPrice}
                  </span>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-400'>ROI:</span>
                  <span className='text-green-400 font-medium'>
                    {service.roi}
                  </span>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-400'>Delivery:</span>
                  <span className='text-white font-medium'>
                    {service.estimatedDelivery}
                  </span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-4'>
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='space-y-3'>
                <a
                  href='https://ziontechgroup.com/contact'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block'
                >
                  Get Quote
                </a>
                <a
                  href={`tel:+13024640950`}
                  className='w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block'
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className='text-center py-16'>
            <div className='text-gray-400 text-xl mb-4'>
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className='text-blue-400 hover:text-blue-300 underline'
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Get Started?</h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Our team of experts is ready to help you implement the perfect
            solution for your business needs. Get in touch today for a
            personalized consultation and quote.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://ziontechgroup.com/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200'
            >
              Request Free Consultation
            </a>
            <a
              href='tel:+13024640950'
              className='inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200'
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact Information */}
      <div className='bg-slate-800 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8 text-center'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Contact Information
              </h3>
              <div className='space-y-2 text-gray-300'>
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Service Categories
              </h3>
              <div className='space-y-2 text-gray-300'>
                <p>Micro SaaS Solutions</p>
                <p>Specialized IT Services</p>
                <p>Advanced AI Solutions</p>
                <p>Custom Development</p>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Why Choose Zion Tech Group?
              </h3>
              <div className='space-y-2 text-gray-300'>
                <p>✓ Expert Team</p>
                <p>✓ Proven Results</p>
                <p>✓ Competitive Pricing</p>
                <p>✓ 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedServicesShowcase2025;
