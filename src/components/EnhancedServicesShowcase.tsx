import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { enhancedServices2025, EnhancedService } from '../data/enhanced-services-2025';

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: '💻' },
    { id: 'it-services', name: 'IT Services', icon: '🖥️' },
    { id: 'ai-services', name: 'AI Services', icon: '🤖' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: '🚀' }
  ];

  const filteredServices = enhancedServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Technology Solutions
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our extensive portfolio of innovative micro SAAS services, enterprise IT solutions, 
            cutting-edge AI services, and emerging technology solutions designed to transform your business.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-semibold">📱 Contact</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">✉️ Email</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">🌐 Website</div>
                <div className="text-gray-300">ziontechgroup.com</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 w-full md:w-80"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{service.category.replace('-', ' ').toUpperCase()}</p>
                </div>

                {/* Tagline */}
                <p className="text-gray-300 text-sm mb-4 text-center">{service.tagline}</p>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing</h4>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div>Monthly: {service.pricing.monthly}</div>
                    <div>Yearly: {service.pricing.yearly}</div>
                    <div>Setup: {service.pricing.setup}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI and Setup */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-300">
                    <div className="mb-1"><span className="text-green-400 font-medium">ROI:</span> {service.roi}</div>
                    <div><span className="text-blue-400 font-medium">Setup:</span> {service.setupTime}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how our innovative services can help drive your success and competitive advantage
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Expert AI & Technology Specialists
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Proven ROI & Performance Metrics
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                24/7 Support & Maintenance
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Custom Solutions & Integration
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default EnhancedServicesShowcase;