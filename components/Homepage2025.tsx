import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';

const Homepage2025: React.FC = () => {
  const featuredServices = [
    ...real2036InnovativeServices.filter(s => s.popular).slice(0, 3),
    ...real2036ITServices.filter(s => s.popular).slice(0, 2),
    ...real2036AIServices.filter(s => s.popular).slice(0, 1)
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="hidden md:flex items-center space-x-6">
                  <a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Enhanced Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Technology
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
            >
              Revolutionary micro SAAS services, cutting-edge AI solutions, and emerging technologies that transform businesses and industries.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 border-2 border-transparent hover:border-cyan-400/50"
              >
                Explore Services
              </button>
              <a
                href="https://ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-400/50"
              >
                Visit Website
              </a>
            </motion.div>
            
            {/* Enhanced Floating Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {featuredServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{service.name}</h3>
                  <p className="text-gray-400 text-base mb-4 leading-relaxed">{service.tagline}</p>
                  <div className="text-cyan-400 font-bold text-xl mb-4">{service.price}{service.period}</div>
                  <div className="text-sm text-gray-500">
                    {service.trialDays} days free trial • {service.setupTime} setup
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive portfolio of cutting-edge services designed to transform your business
              </p>
            </motion.div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div className="text-yellow-400 font-bold text-lg">{service.price}{service.period}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{service.trialDays} days free trial</span>
                    <a
                      href={service.link}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Transform?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Get in touch with our team to discuss how our revolutionary services can transform your business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    +1 302 464 0950
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12"
              >
                <a
                  href="https://ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 border-2 border-transparent hover:border-cyan-400/50"
                >
                  Visit Our Website
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;