import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ultimateZionServices2025 } from '../data/ultimate-zion-services-2025';

const UltimateZionServicesMarketing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { 
      id: 'quantum-computing', 
      name: 'Quantum Computing & AI', 
      icon: '⚛️', 
      color: 'from-blue-600 to-cyan-600',
      description: 'Revolutionary quantum computing solutions that solve previously impossible problems',
      marketSize: '$65.4 billion by 2027',
      growthRate: '500% annually'
    },
    { 
      id: 'blockchain-web3', 
      name: 'Blockchain & Web3', 
      icon: '🔗', 
      color: 'from-green-600 to-emerald-600',
      description: 'Next-generation decentralized solutions with AI optimization',
      marketSize: '$67.4 billion by 2027',
      growthRate: '400% annually'
    },
    { 
      id: 'space-tech', 
      name: 'Space Technology', 
      icon: '🛰️', 
      color: 'from-indigo-600 to-purple-600',
      description: 'AI-powered satellite and space mission management',
      marketSize: '$469.8 billion by 2027',
      growthRate: '300% annually'
    },
    { 
      id: 'biotech-ai', 
      name: 'Biotech & AI', 
      icon: '🧬', 
      color: 'from-red-600 to-pink-600',
      description: 'Revolutionary biomedical research and drug discovery',
      marketSize: '$67.8 billion by 2027',
      growthRate: '600% annually'
    },
    { 
      id: 'emerging-tech', 
      name: 'Emerging Technology', 
      icon: '🚀', 
      color: 'from-orange-600 to-red-600',
      description: 'Cutting-edge technologies that define the future',
      marketSize: '$3.7 billion by 2027',
      growthRate: '800% annually'
    },
    { 
      id: 'micro-saas', 
      name: 'Micro SAAS Solutions', 
      icon: '💻', 
      color: 'from-blue-600 to-indigo-600',
      description: 'Intelligent business automation and optimization',
      marketSize: '$15.8 billion by 2027',
      growthRate: '200% annually'
    },
    { 
      id: 'it-services', 
      name: 'Enterprise IT Services', 
      icon: '🖥️', 
      color: 'from-gray-600 to-slate-600',
      description: 'Advanced infrastructure and DevOps solutions',
      marketSize: '$25.2 billion by 2027',
      growthRate: '150% annually'
    }
  ];

  const getServicesByCategory = (categoryId: string) => {
    if (categoryId === 'all') return ultimateZionServices2025;
    return ultimateZionServices2025.filter(service => service.category === categoryId);
  };

  const selectedServices = getServicesByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Zion Technology Group
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Ultimate Services Portfolio 2025
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leading the future with revolutionary quantum computing, AI-powered solutions, blockchain innovations, 
            and cutting-edge technology services that transform industries and create unprecedented value.
          </motion.p>

          {/* Company Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-purple-400 font-semibold">Revolutionary</div>
              <div className="text-gray-400 text-sm">First-mover advantage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-purple-400 font-semibold">High Performance</div>
              <div className="text-gray-400 text-sm">10x-1000x improvements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-purple-400 font-semibold">Enterprise Ready</div>
              <div className="text-gray-400 text-sm">SOC 2, HIPAA, GDPR</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-purple-400 font-semibold">Global Reach</div>
              <div className="text-gray-400 text-sm">24/7 support worldwide</div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-4xl mx-auto border border-purple-400/30" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              🚀 Ready to Transform Your Business?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-purple-400 font-semibold text-lg mb-2">📱 Contact Us</div>
                <div className="text-gray-300">+1 302 464 0950</div>
                <div className="text-gray-400 text-xs">Available 24/7</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold text-lg mb-2">✉️ Email</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
                <div className="text-gray-400 text-xs">Response within 2 hours</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold text-lg mb-2">🌐 Website</div>
                <div className="text-gray-300">
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-400 hover:text-blue-300 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
                <div className="text-gray-400 text-xs">Live demo available</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-gray-400 text-sm">
                📍 364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap gap-4 justify-center" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button 
                key={category.id} 
                onClick={() => setSelectedCategory(category.id)} 
                className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white shadow-lg'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      {selectedCategory !== 'all' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {(() => {
              const category = categories.find(c => c.id === selectedCategory);
              if (!category) return null;
              
              return (
                <motion.div 
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {category.name}
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-purple-400 font-semibold">Market Size</div>
                        <div className="text-white text-lg">{category.marketSize}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-purple-400 font-semibold">Growth Rate</div>
                        <div className="text-white text-lg">{category.growthRate}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {selectedCategory === 'all' ? 'All Revolutionary Services' : `${categories.find(c => c.id === selectedCategory)?.name} Services`}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            {selectedServices.map((service, index) => (
              <motion.div 
                key={service.id} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold mb-2">
                    {service.innovationLevel}
                  </div>
                  <p className="text-sm text-purple-400 font-medium">
                    {service.category.replace('-', ' ').toUpperCase()}
                  </p>
                </div>

                {/* Tagline */}
                <p className="text-gray-300 text-sm mb-4 text-center italic">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <h4 className="text-purple-400 font-semibold mb-2">💰 Investment & Value</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly:</span>
                      <span className="text-green-400 font-semibold">{service.pricing.monthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Yearly:</span>
                      <span className="text-green-400 font-semibold">{service.pricing.yearly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-blue-400 font-semibold">{service.pricing.marketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Setup:</span>
                      <span className="text-yellow-400 font-semibold">{service.pricing.setup}</span>
                    </div>
                  </div>
                </div>

                {/* ROI and Benefits */}
                <div className="mb-6">
                  <h4 className="text-purple-400 font-semibold mb-2">📈 ROI & Benefits</h4>
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-3 mb-3">
                    <p className="text-green-400 text-sm font-semibold">{service.roi}</p>
                  </div>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-purple-400 font-semibold mb-2">🛠️ Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Market Information */}
                {service.marketSize && (
                  <div className="mb-6">
                    <h4 className="text-purple-400 font-semibold mb-2">🌍 Market Opportunity</h4>
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-3">
                      <p className="text-blue-400 text-sm font-semibold">
                        Market Size: {service.marketSize}
                      </p>
                    </div>
                  </div>
                )}

                {/* Trial and Setup */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold">🆓 Trial</div>
                    <div className="text-gray-300">{service.trialDays} days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold">⚡ Setup</div>
                    <div className="text-gray-300">{service.setupTime}</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    🚀 Get Started Today
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    Contact us for a personalized demo
                  </p>
                </div>

                {/* Contact Quick Access */}
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-400">
                    📞 <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                      +1 302 464 0950
                    </a> | 
                    ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution and transform your business with cutting-edge technology solutions. 
              Our team of experts is ready to help you implement these game-changing services.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                🚀 Schedule a Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                📋 View Full Portfolio
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>🌟 Trusted by Fortune 500 companies worldwide</p>
              <p>🔒 SOC 2 Type II certified • HIPAA compliant • GDPR ready</p>
              <p>🌍 Global support • 24/7 availability • Enterprise-grade security</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimateZionServicesMarketing;