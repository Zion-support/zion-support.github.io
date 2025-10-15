import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI services, IT solutions, and innovative micro SAAS applications designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud infrastructure, digital transformation, cybersecurity, web development, mobile development" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text cyber-font">
              OUR SERVICES
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions, innovative micro SAAS applications, and cutting-edge technology services 
              tailored to accelerate your business growth and digital transformation.
            </p>
          </div>

          {/* AI Services Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text-purple">
              AI SERVICES & SOLUTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-neon-blue font-bold text-lg">{service.marketPrice}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <a 
                      href={`/${service.id}`} 
                      className="neon-button w-full text-center"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/contact" 
                      className="neon-button neon-button-purple w-full text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SAAS Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text-pink">
              MICRO SAAS SOLUTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-neon-purple font-bold text-lg">{service.marketPrice}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <a 
                      href={`/${service.id}`} 
                      className="neon-button neon-button-purple w-full text-center"
                    >
                      Try Now
                    </a>
                    <a 
                      href="/contact" 
                      className="neon-button w-full text-center"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">
              IT SOLUTIONS & SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-neon-blue font-bold text-lg">{service.marketPrice}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <a 
                      href={`/${service.id}`} 
                      className="neon-button w-full text-center"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/contact" 
                      className="neon-button neon-button-purple w-full text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text-pink">
              ADDITIONAL SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.additionalServices.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-neon-pink font-bold text-lg">{service.marketPrice}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <a 
                      href={`/${service.id}`} 
                      className="neon-button neon-button-purple w-full text-center"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/contact" 
                      className="neon-button w-full text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO GET STARTED?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your project and get a personalized quote for our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Contact Us Now
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  View Pricing
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