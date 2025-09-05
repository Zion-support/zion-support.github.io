<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
import Layout from '../components/layout/Layout',
import { real2036InnovativeServices } from '../data/real-2036-innovative-services',
import { real2036ITServices } from '../data/real-2036-it-services',
import { real2036AIServices } from '../data/real-2036-ai-services',
import { motion } from 'framer-motion',
const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices,
    ...real2036ITServices,
    ...real2036AIServices
  ],

  const categories = [...new Set(allServices.map(service => service.category))],
=======
import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

const ComprehensiveServicesShowcase2036: React.FC = () => {_const _allServices = [
    ...real2036InnovativeServices, _...real2036ITServices, _...real2036AIServices
  ];

  const _categories = [...new Set(allServices.map(service => service.category))];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Layout>
      <SEO 
<<<<<<< HEAD
        title=&quot;Comprehensive Services Showcase 2036 - Zion Tech Group&quot;
        description=&quot;Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting-edge IT solutions. Transform your business with next-generation technology.&quot;
        keywords=&quot;AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology&quot;
=======
        title="Comprehensive Services Showcase 2036 - Zion Tech Group"
        description="Explore our revolutionary 2036 services portfolio featuring AI, _Quantum Computing, _Space Technology, _and cutting-edge IT solutions. Transform your business with next-generation technology."
        keywords="AI services, _quantum computing, _space technology, _IT solutions, _2036, _Zion Tech Group, _innovative technology"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto text-center&quot;>
            <motion.h1 
<<<<<<< HEAD
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;
=======
              initial={_{ opacity: 0, _y: 50}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              2036 Services Showcase
            </motion.h1>
            <motion.p 
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Experience the future of technology with our revolutionary portfolio of AI, _Quantum Computing, _Space Technology, _and cutting-edge IT solutions
            </motion.p>
            <motion.div 
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
              className="flex flex-col sm:flex-row gap-4 justify-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Services Overview */}
        <section className=&quot;py-16 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Revolutionary Service Categories
              </h2>
<<<<<<< HEAD
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
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans the most advanced and innovative technology domains, _designed to transform businesses and drive the future forward.
              </p>
            </motion.div>

            {_/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {_categories.map((category, _index) => (
                <motion.div
                  key={category}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{_category}</h3>
                  <p className="text-gray-300 mb-4">
                    {_allServices.filter(service => service.category === category).length} innovative services
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-lg font-bold text-green-400">
                      ${_Math.min(...allServices.filter(service => service.category === category).map(s => parseInt(s.price.replace(/[^0-9]/g, _''))))}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {_/* Featured Services */}
            <motion.div 
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Featured Revolutionary Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology.
              </p>
            </motion.div>

<<<<<<< HEAD
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
=======
            {_/* Featured Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {_allServices.filter(service => service.popular).slice(0, _6).map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{_service.icon}</span>
                    {_service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Popular
                      </span>
                    )}
                  </div>
<<<<<<< HEAD
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
=======
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {_service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-400">{_service.price}</span>
                    <span className="text-gray-400">/{_service.period}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Market Price: </span>
                    <span className="text-sm text-yellow-400">{_service.marketPrice}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                  <button className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;>
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>

            {_/* All Services Section */}
            <motion.div 
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Complete Service Portfolio
              </h2>
<<<<<<< HEAD
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our entire collection of {allServices.length} innovative services across all technology domains.
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our entire collection of {_allServices.length} innovative services across all technology domains.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            </motion.div>

            {_/* Services by Category */}
            {_categories.map(_(category, _categoryIndex) => (
              <motion.div
                key={category}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className=&quot;mb-16&quot;
              >
                <h3 className=&quot;text-3xl font-bold mb-8 text-center text-cyan-400&quot;>{category}</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                  {allServices
=======
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                className="mb-16"
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">{_category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {_allServices
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    .filter(service => service.category === category)
                    .map(_(service, _serviceIndex) => (
                      <motion.div
                        key={service.id}
<<<<<<< HEAD
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className=&quot;bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105&quot;
                      >
                        <div className=&quot;flex items-center justify-between mb-3&quot;>
                          <span className=&quot;text-2xl&quot;>{service.icon}</span>
                          {service.popular && (
                            <span className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full&quot;>
=======
                        initial={_{ opacity: 0, _y: 20}}
                        whileInView={_{ opacity: 1, _y: 0}}
                        transition={_{ duration: 0.6, _delay: serviceIndex * 0.1}}
                        className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{_service.icon}</span>
                          {_service.popular && (
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              Popular
                            </span>
                          )}
                        </div>
<<<<<<< HEAD
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
=======
                        <h4 className="text-lg font-bold mb-2 text-white">{_service.name}</h4>
                        <p className="text-gray-300 text-sm mb-3">{_service.description}</p>
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-green-400">{_service.price}</span>
                          <span className="text-gray-400 text-sm">/{_service.period}</span>
                        </div>
                        <div className="space-y-1 mb-3">
                          {_service.features.slice(0, _2).map(_(feature, _idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <span className="text-cyan-400 mr-2">•</span>
                              {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

            {_/* Call to Action */}
            <motion.div 
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold mb-6 text-white&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
=======
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  )
},

export default ComprehensiveServicesShowcase2036,