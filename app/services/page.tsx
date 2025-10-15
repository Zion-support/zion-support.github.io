import React from 'react';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';
import { enhancedServicesData } from '../data/enhancedServicesData';
import '../styles/futuristic.css';

const ServicesPage: React.FC = () => {
  const aiServices = [...servicesData.aiServices, ...enhancedServicesData.aiServices];
  const itSolutions = [...servicesData.itSolutions, ...enhancedServicesData.itServices];
  const microSaas = [...servicesData.microSaas, ...enhancedServicesData.microSaas];

  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth. From AI development to cloud infrastructure and micro SaaS solutions."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting, micro saas, machine learning, data analytics"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="cyber-bg"></div>
      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold neon-text mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                Comprehensive AI and IT solutions designed to transform your business and drive sustainable growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#ai-services" 
                  className="btn-neon"
                >
                  Explore AI Services
                </a>
                <a 
                  href="/contact" 
                  className="btn-neon-purple"
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
            <h2 className="text-3xl font-bold neon-text-purple mb-4">AI & Machine Learning Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business.
            </p>
          </div>

          <div className="grid-futuristic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiServices.slice(0, 6).map((service) => (
              <div key={service.id} className="card-futuristic grid-item">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold neon-text-green mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold neon-text mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold neon-text mb-2">Pricing:</h4>
                    <div className="text-2xl font-bold neon-text-purple">{service.marketPrice}</div>
                    <div className="text-sm text-gray-400">Starting from ${service.pricing.basic.toLocaleString()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={`/contact?service=${service.id}`}
                      className="flex-1 btn-neon text-center"
                    >
                      Get Started
                    </a>
                    <a 
                      href={service.contactInfo.website}
                      className="flex-1 btn-neon-purple text-center"
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
        <div className="bg-gray-800/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold neon-text mb-4">IT Solutions & Infrastructure</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure for maximum performance and reliability.
              </p>
            </div>

            <div className="grid-futuristic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.slice(0, 6).map((service) => (
                <div key={service.id} className="card-futuristic grid-item">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold neon-text-green mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold neon-text mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-cyan-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold neon-text mb-2">Pricing:</h4>
                      <div className="text-xl font-bold neon-text-purple">{service.marketPrice}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a 
                        href={`/contact?service=${service.id}`}
                        className="btn-neon text-center"
                      >
                        Get Quote
                      </a>
                      <a 
                        href={service.contactInfo.website}
                        className="btn-neon-purple text-center"
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
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold neon-text-purple mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges with AI-powered intelligence and automation.
              </p>
            </div>

            <div className="grid-futuristic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaas.slice(0, 9).map((service) => (
                <div key={service.id} className="card-futuristic grid-item">
                  <div className="p-6">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-bold neon-text-green mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{service.shortDescription}</p>
                    
                    <div className="mb-3">
                      <div className="text-lg font-bold neon-text-purple">{service.marketPrice}</div>
                      <div className="text-xs text-gray-400">Starting from ${service.pricing.basic}/month</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a 
                        href={`/contact?service=${service.id}`}
                        className="btn-neon text-center text-sm"
                      >
                        Try Free
                      </a>
                      <a 
                        href={service.contactInfo.website}
                        className="btn-neon-purple text-center text-sm"
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
                className="btn-neon"
              >
                View All Micro SaaS Solutions
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Let our expert team help you choose the right solutions for your business needs. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;