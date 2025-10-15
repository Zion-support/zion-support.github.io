import React from 'react';
import { Helmet } from 'react-helmet-async';
import { allServices, getServicesByCategory } from '../data/servicesData';
import { contactInfo } from '../data/contactData';

const ServicesPage: React.FC = () => {
  const microSAASServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and micro SaaS tools. From machine learning to cloud infrastructure, we provide cutting-edge technology solutions for your business." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud infrastructure, cybersecurity, machine learning, digital transformation" />
        <link rel="canonical" href={`${contactInfo.domain}/services`} />
      </Helmet>
      
      <div className="min-h-screen bg-dark-bg">
        {/* Hero Section */}
        <div className="relative py-20 bg-matrix">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our <span className="text-neon-blue">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI, IT, and micro SaaS solutions designed to accelerate your business growth and digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button text-lg px-8 py-3 rounded-lg">
                Get Started
              </a>
              <a href={`tel:${contactInfo.mobile}`} className="glass-morphism text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 text-lg">
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>

        {/* Micro SaaS Services */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-blue">Micro SaaS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software solutions for specific business needs. Ready-to-use AI-powered tools that can transform your operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={service.id} className="card-hover bg-dark-surface-light p-6 rounded-xl border border-neon-blue border-opacity-30">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.isPopular && (
                        <span className="bg-neon-blue text-dark-bg px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-neon-blue font-semibold">
                      From ${service.pricing.basic}/month
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.technologies.slice(0, 2).join(', ')}
                    </div>
                  </div>
                  
                  <a 
                    href={service.link} 
                    className="text-neon-blue hover:text-neon-purple font-medium text-sm transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IT Services */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-purple">IT Services</span> & Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions including cloud infrastructure, cybersecurity, and network management for enterprise-grade performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={service.id} className="card-hover bg-dark-surface-light p-6 rounded-xl border border-neon-purple border-opacity-30">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.isPopular && (
                        <span className="bg-neon-purple text-dark-bg px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-neon-purple font-semibold">
                      From ${service.pricing.basic}/month
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.technologies.slice(0, 2).join(', ')}
                    </div>
                  </div>
                  
                  <a 
                    href={service.link} 
                    className="text-neon-purple hover:text-neon-pink font-medium text-sm transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Services */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-pink">AI Services</span> & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={service.id} className="card-hover bg-dark-surface-light p-6 rounded-xl border border-neon-pink border-opacity-30">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.isPopular && (
                        <span className="bg-neon-pink text-dark-bg px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-neon-pink font-semibold">
                      From ${service.pricing.basic}/month
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.technologies.slice(0, 2).join(', ')}
                    </div>
                  </div>
                  
                  <a 
                    href={service.link} 
                    className="text-neon-pink hover:text-neon-blue font-medium text-sm transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Overview */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-green">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-surface-light p-8 rounded-xl border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-neon-blue mb-6">
                  $29<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Up to 1,000 API calls/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Standard integrations
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-blue text-dark-bg py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-purple relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neon-purple text-dark-bg px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold text-neon-purple mb-6">
                  $99<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Up to 10,000 API calls/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Team collaboration
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-purple text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-pink">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-neon-pink mb-6">
                  $299<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Unlimited API calls
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Full analytics suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    White-label options
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-pink text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-accent">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Contact our experts to discuss your specific needs and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-lg"
              >
                Contact Us Today
              </a>
              <a 
                href={`tel:${contactInfo.mobile}`} 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-bg transition-all duration-300 text-lg"
              >
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;