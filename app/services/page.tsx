import React from 'react';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  const aiServices = servicesData.aiServices;
  const itSolutions = servicesData.itSolutions;
  const microSaas = servicesData.microSaas.slice(0, 6); // Show first 6 micro SaaS services

  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth. From AI development to cloud infrastructure and micro SaaS solutions."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting, micro saas, machine learning, data analytics"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen futuristic-gradient-dark animated-bg cyber-grid">
        {/* Hero Section */}
        <div className="futuristic-gradient-neon text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-glow-blue float" data-text="Our Services">Our Services</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto pulse-glow">
                Comprehensive AI and IT solutions designed to transform your business and drive sustainable growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#ai-services" 
                  className="futuristic-btn neon-border"
                >
                  Explore AI Services
                </a>
                <a 
                  href="/contact" 
                  className="futuristic-btn"
                  style={{background: 'transparent', border: '2px solid white'}}
                >
                  Get Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Section */}
        <div id="ai-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold neon-glow-purple mb-4 float">AI & Machine Learning Services</h2>
            <p className="text-lg text-white max-w-3xl mx-auto pulse-glow">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden neon-border hover:scale-105">
                <div className="p-8">
                  <div className="text-4xl mb-4 pulse-glow">{service.icon}</div>
                  <h3 className="text-2xl font-bold neon-glow-green mb-4">{service.title}</h3>
                  <p className="text-white mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold neon-glow-blue mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-white">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold neon-glow-blue mb-2">Pricing:</h4>
                    <div className="text-2xl font-bold neon-glow-green">{service.marketPrice}</div>
                    <div className="text-sm text-gray-300">Starting from ${service.pricing.basic.toLocaleString()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={`/contact?service=${service.id}`}
                      className="flex-1 futuristic-btn neon-border text-center"
                    >
                      Get Started
                    </a>
                    <a 
                      href={service.contactInfo.website}
                      className="flex-1 futuristic-btn text-center"
                      style={{background: 'transparent', border: '2px solid #00ffff'}}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IT Solutions Section */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold neon-glow-purple mb-4 float">IT Solutions & Infrastructure</h2>
              <p className="text-lg text-white max-w-3xl mx-auto pulse-glow">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure for maximum performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((service) => (
                <div key={service.id} className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden neon-border hover:scale-105">
                  <div className="p-6">
                    <div className="text-4xl mb-4 pulse-glow">{service.icon}</div>
                    <h3 className="text-xl font-bold neon-glow-green mb-3">{service.title}</h3>
                    <p className="text-white mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold neon-glow-blue mb-2">Key Features:</h4>
                      <ul className="text-sm text-white space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-cyan-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold neon-glow-blue mb-2">Pricing:</h4>
                      <div className="text-xl font-bold neon-glow-green">{service.marketPrice}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a 
                        href={`/contact?service=${service.id}`}
                        className="futuristic-btn neon-border text-center"
                      >
                        Get Quote
                      </a>
                      <a 
                        href={service.contactInfo.website}
                        className="futuristic-btn text-center"
                        style={{background: 'transparent', border: '2px solid #00ffff'}}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SaaS Section */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold neon-glow-purple mb-4 float">Micro SaaS Solutions</h2>
              <p className="text-lg text-white max-w-3xl mx-auto pulse-glow">
                Specialized software solutions designed to solve specific business challenges with AI-powered intelligence and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaas.map((service) => (
                <div key={service.id} className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden neon-border hover:scale-105">
                  <div className="p-6">
                    <div className="text-3xl mb-3 pulse-glow">{service.icon}</div>
                    <h3 className="text-lg font-bold neon-glow-green mb-2">{service.title}</h3>
                    <p className="text-sm text-white mb-3">{service.shortDescription}</p>
                    
                    <div className="mb-3">
                      <div className="text-lg font-bold neon-glow-green">{service.marketPrice}</div>
                      <div className="text-xs text-gray-300">Starting from ${service.pricing.basic}/month</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a 
                        href={`/contact?service=${service.id}`}
                        className="futuristic-btn neon-border text-center text-sm"
                      >
                        Try Free
                      </a>
                      <a 
                        href={service.contactInfo.website}
                        className="futuristic-btn text-center text-sm"
                        style={{background: 'transparent', border: '2px solid #00ffff'}}
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="/micro-saas-solutions" 
                className="futuristic-btn neon-border"
              >
                View All Micro SaaS Solutions
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="futuristic-gradient-neon text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 neon-glow-blue float" data-text="Ready to Transform Your Business?">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 pulse-glow">
              Let our expert team help you choose the right solutions for your business needs. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="futuristic-btn neon-border"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="futuristic-btn"
                style={{background: 'transparent', border: '2px solid white'}}
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm pulse-glow">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;