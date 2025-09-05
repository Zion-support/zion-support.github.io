import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';
import { motion } from 'framer-motion';

const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices,
    ...real2036ITServices,
    ...real2036AIServices
  ];

  const categories = [...new Set(allServices.map(service => service.category))];

  return (
    <Layout>
      <SEO 
        title=&quot;Comprehensive Services Showcase 2036 - Zion Tech Group&quot;
        description=&quot;Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting-edge IT solutions. Transform your business with next-generation technology.&quot;
        keywords=&quot;AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology&quot;
      />
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto text-center&quot;>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;
            >
              2036 Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;
            >
              Experience the future of technology with our revolutionary portfolio of AI, Quantum Computing, Space Technology, and cutting-edge IT solutions
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;
            >
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg&quot;>
                Get Started Today
              </button>
              <button className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                View Pricing
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className=&quot;py-16 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Revolutionary Service Categories
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our comprehensive portfolio spans the most advanced and innovative technology domains, designed to transform businesses and drive the future forward.
              </p>
            </motion.div>

            {/* Category Cards */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105&quot;
                >
                  <h3 className=&quot;text-2xl font-bold mb-4 text-cyan-400&quot;>{category}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>
                    {allServices.filter(service => service.category === category).length} innovative services
                  </p>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <span className=&quot;text-sm text-gray-400&quot;>Starting from</span>
                    <span className=&quot;text-lg font-bold text-green-400&quot;>
                      ${Math.min(...allServices.filter(service => service.category === category).map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Services */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Featured Revolutionary Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology.
              </p>
            </motion.div>

            {/* Featured Services Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
              {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group&quot;
                >
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <span className=&quot;text-4xl&quot;>{service.icon}</span>
                    {service.popular && (
                      <span className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full&quot;>
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors&quot;>
                    {service.name}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.tagline}</p>
                  <div className=&quot;mb-4&quot;>
                    <span className=&quot;text-3xl font-bold text-green-400&quot;>{service.price}</span>
                    <span className=&quot;text-gray-400&quot;>/{service.period}</span>
                  </div>
                  <div className=&quot;mb-4&quot;>
                    <span className=&quot;text-sm text-gray-400&quot;>Market Price: </span>
                    <span className=&quot;text-sm text-yellow-400&quot;>{service.marketPrice}</span>
                  </div>
                  <div className=&quot;space-y-2 mb-4&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <span className=&quot;text-cyan-400 mr-2&quot;>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;>
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>

            {/* All Services Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Complete Service Portfolio
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our entire collection of {allServices.length} innovative services across all technology domains.
              </p>
            </motion.div>

            {/* Services by Category */}
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className=&quot;mb-16&quot;
              >
                <h3 className=&quot;text-3xl font-bold mb-8 text-center text-cyan-400&quot;>{category}</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                  {allServices
                    .filter(service => service.category === category)
                    .map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className=&quot;bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105&quot;
                      >
                        <div className=&quot;flex items-center justify-between mb-3&quot;>
                          <span className=&quot;text-2xl&quot;>{service.icon}</span>
                          {service.popular && (
                            <span className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full&quot;>
                              Popular
                            </span>
                          )}
                        </div>
                        <h4 className=&quot;text-lg font-bold mb-2 text-white&quot;>{service.name}</h4>
                        <p className=&quot;text-gray-300 text-sm mb-3&quot;>{service.description}</p>
                        <div className=&quot;mb-3&quot;>
                          <span className=&quot;text-2xl font-bold text-green-400&quot;>{service.price}</span>
                          <span className=&quot;text-gray-400 text-sm&quot;>/{service.period}</span>
                        </div>
                        <div className=&quot;space-y-1 mb-3&quot;>
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className=&quot;flex items-center text-xs text-gray-300&quot;>
                              <span className=&quot;text-cyan-400 mr-2&quot;>•</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <button className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm&quot;>
                          View Details
                        </button>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 text-white&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;>
                  Contact Us Today
                </button>
                <button className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2036;