import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud infrastructure, data analytics, mobile development, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold neon-glow-cyan mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          {/* AI Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-glow-cyan mb-4">AI Services</h2>
              <p className="text-lg text-gray-300">Advanced artificial intelligence solutions powered by cutting-edge technology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="card-futuristic hover-lift group">
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-cyan-400">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-green-400">Pricing:</div>
                      <div className="text-sm text-gray-300">
                        Starting at ${service.pricing.basic.toLocaleString()}/month
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SaaS Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-glow-purple mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-300">Specialized software solutions for specific business needs and workflows</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="card-futuristic hover-lift group">
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-purple-400">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-purple-400 mr-2">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-green-400">Pricing:</div>
                      <div className="text-sm text-gray-300">
                        Starting at ${service.pricing.basic.toLocaleString()}/month
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Solutions Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-glow-green mb-4">IT Solutions</h2>
              <p className="text-lg text-gray-300">Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="card-futuristic hover-lift group">
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-green-400">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-green-400">Pricing:</div>
                      <div className="text-sm text-gray-300">
                        Starting at ${service.pricing.basic.toLocaleString()}/month
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="card-futuristic max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold neon-glow-pink mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your specific needs and discover the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Contact Us Today
                </Link>
                <Link to="/pricing" className="glass-dark border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  View Pricing Plans
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;