import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | Comprehensive AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to accelerate your business growth. From AI development to cloud infrastructure, micro SaaS to digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, digital transformation, micro SaaS, business automation, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="cyber-bg"></div>
        <div className="neon-grid"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business and drive unprecedented growth 
              in the digital age.
            </p>
          </div>

          {/* AI Services Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
              AI Services
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions that revolutionize how businesses operate and compete.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service, index) => (
                <div key={service.id} className="futuristic-card group">
                  <div className="text-5xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 neon-text-purple text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-bold neon-text-green mb-2">
                      ${service.pricing.basic.toLocaleString()} - ${service.pricing.enterprise.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Custom pricing available</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 neon-text">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

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

                  <a href="/ai-services" className="neon-button w-full text-center block">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SAAS Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-green">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Innovative, real-world micro SaaS applications designed to solve specific business challenges with AI-powered intelligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.microSaas.slice(0, 8).map((service, index) => (
                <div key={service.id} className="futuristic-card group">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3 neon-text-green text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="mb-4 text-center">
                    <div className="text-lg font-bold neon-text-green">${service.pricing.basic} - ${service.pricing.enterprise}/month</div>
                    <div className="text-xs text-gray-400">{service.marketPrice}</div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a 
                    href={service.link || '#'} 
                    className="neon-button-green w-full text-center block text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="/micro-saas-solutions" className="neon-button-purple">
                View All Micro SaaS Solutions
              </a>
            </div>
          </div>

          {/* AI Tools Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-pink">
              AI-Powered Tools
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Powerful AI tools that automate tasks, provide insights, and enhance productivity across your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiTools.map((tool, index) => (
                <div key={tool.id} className="futuristic-card group">
                  <div className="text-5xl mb-6 text-center">{tool.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 neon-text-pink text-center">{tool.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-bold neon-text-green mb-2">
                      ${tool.pricing.basic} - ${tool.pricing.enterprise}/month
                    </div>
                    <div className="text-sm text-gray-400">Market Price: {tool.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 neon-text">Features:</h4>
                    <div className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-neon-pink rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={tool.link || '#'} 
                    className="neon-button-pink w-full text-center block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
              Enterprise IT Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive IT infrastructure and solutions that scale with your business and drive digital transformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((solution, index) => (
                <div key={solution.id} className="futuristic-card group">
                  <div className="text-5xl mb-6 text-center">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 neon-text text-center">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-bold neon-text-green mb-2">
                      ${solution.pricing.basic.toLocaleString()} - ${solution.pricing.enterprise.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Custom enterprise pricing</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 neon-text">Features:</h4>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="/it-services" className="neon-button w-full text-center block">
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
                Let our expert team help you choose the perfect solutions for your business needs. 
                Get a free consultation and discover how we can accelerate your growth.
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

export default ServicesPage;