import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Revolutionary AI-Powered Applications</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to solve specific business challenges with AI-powered intelligence. From CRM to analytics, marketing to HR management." />
        <meta name="keywords" content="micro SaaS, AI-powered applications, business software, CRM, analytics, marketing automation, HR management, financial tools" />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="cyber-bg"></div>
        <div className="neon-grid"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered micro SaaS applications designed to solve specific business challenges 
              with cutting-edge technology and intelligent automation.
            </p>
          </div>

          {/* Featured Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 neon-text">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Our most popular micro SaaS solutions trusted by businesses worldwide
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 6).map((service, index) => (
                <div key={service.id} className="futuristic-card group">
                  <div className="text-5xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 neon-text text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-bold neon-text-green mb-2">
                      ${service.pricing.basic} - ${service.pricing.enterprise}/month
                    </div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 neon-text-purple">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 neon-text-green">Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0"></span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={service.link || '#'} 
                      className="neon-button w-full text-center block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try Now - Free Trial
                    </a>
                    <a 
                      href="/contact" 
                      className="neon-button-purple w-full text-center block"
                    >
                      Get Custom Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Solutions Grid */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 neon-text-purple">
              Complete Solution Suite
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Explore our full range of micro SaaS solutions designed for every business need
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.microSaas.map((service, index) => (
                <div key={service.id} className="futuristic-card group">
                  <div className="text-3xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3 neon-text text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="mb-4 text-center">
                    <div className="text-lg font-bold neon-text-green">${service.pricing.basic} - ${service.pricing.enterprise}/month</div>
                    <div className="text-xs text-gray-400">{service.marketPrice}</div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a 
                    href={service.link || '#'} 
                    className="neon-button w-full text-center block text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div className="futuristic-card max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 holographic">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get started with our micro SaaS solutions today and experience the power of AI-driven business automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="neon-button glow">
                  Get Free Consultation
                </a>
                <a href="tel:+13024640950" className="neon-button-purple">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="neon-button-green">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;