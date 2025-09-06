import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices,
    ...real2036ITServices,
    ...real2036AIServices,
=======
const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices;
    ...real2036ITServices;
    ...real2036AIServices
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices;
    ...real2036ITServices;
    ...real2036AIServices
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const categories = [...new Set(allServices.map(service => service.category))];

  return (
    <Layout>
<<<<<<< HEAD
<<<<<<< HEAD
      <SEO
        title='Comprehensive Services Showcase 2036 - Zion Tech Group'
        description='Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting-edge IT solutions. Transform your business with next-generation technology.'
        keywords='AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology'
=======
      <SEO 
        title="Comprehensive Services Showcase 2036 - Zion Tech Group"
        description="Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting-edge IT solutions. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              2036 Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the future of technology with our revolutionary portfolio of AI, Quantum Computing, Space Technology, and cutting-edge IT solutions
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
<<<<<<< HEAD
              <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
=======
      <SEO 
        title="Comprehensive Services Showcase 2036 - Zion Tech Group"
        description="Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting-edge IT solutions. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              2036 Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the future of technology with our revolutionary portfolio of AI, Quantum Computing, Space Technology, and cutting-edge IT solutions
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                View Pricing
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-16 px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Service Categories
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Our comprehensive portfolio spans the most advanced and
                innovative technology domains, designed to transform businesses
                and drive the future forward.
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans the most advanced and innovative technology domains, designed to transform businesses and drive the future forward.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans the most advanced and innovative technology domains, designed to transform businesses and drive the future forward.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </motion.div>

            {/* Category Cards */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105'
=======
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{category}</h3>
                  <p className="text-gray-300 mb-4">
                    {allServices.filter(service => service.category === category).length} innovative services
                  </p>
<<<<<<< HEAD
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-400'>Starting from</span>
                    <span className='text-lg font-bold text-green-400'>
                      $
                      {Math.min(
                        ...allServices
                          .filter(service => service.category === category)
                          .map(s => parseInt(s.price.replace(/[^0-9]/g, '')))
                      )}
=======
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{category}</h3>
                  <p className="text-gray-300 mb-4">
                    {allServices.filter(service => service.category === category).length} innovative services
                  </p>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-lg font-bold text-green-400">
                      ${Math.min(...allServices.filter(service => service.category === category).map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Services */}
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.div
=======
            <motion.div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Revolutionary Services
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our most innovative and game-changing services that are
                reshaping industries and defining the future of technology.
=======
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </motion.div>

            {/* Featured Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
              {allServices
                .filter(service => service.popular)
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-4xl'>{service.icon}</span>
                      {service.popular && (
                        <span className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full'>
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className='text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 text-sm mb-4'>
                      {service.tagline}
                    </p>
                    <div className='mb-4'>
                      <span className='text-3xl font-bold text-green-400'>
                        {service.price}
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        Popular
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400">/{service.period}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Market Price: </span>
                    <span className="text-sm text-yellow-400">{service.marketPrice}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Explore our entire collection of {allServices.length} innovative
                services across all technology domains.
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400">/{service.period}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Market Price: </span>
                    <span className="text-sm text-yellow-400">{service.marketPrice}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our entire collection of {allServices.length} innovative services across all technology domains.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our entire collection of {allServices.length} innovative services across all technology domains.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </motion.div>

            {/* Services by Category */}
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='mb-16'
              >
                <h3 className='text-3xl font-bold mb-8 text-center text-cyan-400'>
                  {category}
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
=======
                className="mb-16"
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="mb-16"
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {allServices
                    .filter(service => service.category === category)
                    .map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                        transition={{
                          duration: 0.6,
                          delay: serviceIndex * 0.1,
                        }}
                        className='bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105'
=======
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{service.icon}</span>
                          {service.popular && (
<<<<<<< HEAD
                            <span className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full'>
=======
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{service.icon}</span>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                              Popular
                            </span>
                          )}
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <h4 className='text-lg font-bold mb-2 text-white'>
                          {service.name}
                        </h4>
                        <p className='text-gray-300 text-sm mb-3'>
                          {service.description}
                        </p>
                        <div className='mb-3'>
                          <span className='text-2xl font-bold text-green-400'>
                            {service.price}
                          </span>
                          <span className='text-gray-400 text-sm'>
                            /{service.period}
                          </span>
=======
                        <h4 className="text-lg font-bold mb-2 text-white">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-gray-400 text-sm">/{service.period}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
                        <div className="space-y-1 mb-3">
                          {service.features.slice(0, 2).map((feature, idx) => (
<<<<<<< HEAD
                            <div
                              key={idx}
                              className='flex items-center text-xs text-gray-300'
                            >
                              <span className='text-cyan-400 mr-2'>•</span>
=======
                        <h4 className="text-lg font-bold mb-2 text-white">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-gray-400 text-sm">/{service.period}</span>
                        </div>
                        <div className="space-y-1 mb-3">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <span className="text-cyan-400 mr-2">•</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <span className="text-cyan-400 mr-2">•</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                              {feature}
                            </div>
                          ))}
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm'>
=======
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          View Details
                        </button>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}

            {/* Call to Action */}
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.div
=======
            <motion.div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Contact Us Today
                </button>
<<<<<<< HEAD
                <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
=======
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Contact Us Today
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default ComprehensiveServicesShowcase2036;
=======
  )
};

export default ComprehensiveServicesShowcase2036;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default ComprehensiveServicesShowcase2036;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
