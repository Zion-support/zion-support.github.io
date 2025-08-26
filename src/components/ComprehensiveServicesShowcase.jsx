import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS } from '../data/comprehensiveMicroSaasServices2025';

const ServiceCard = ({ service, viewMode = 'grid' }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity & Compliance': '🔒',
      'Cloud & DevOps': '☁️',
      'Data Analytics & BI': '📊',
      'IoT & Edge Computing': '🌐',
      'Blockchain & Web3': '⛓️',
      'Mobile & Web Development': '📱',
      'Enterprise Software': '🏢',
      'Industry Solutions': '🏭',
      'Emerging Technology': '🚀'
    };
    return icons[category] || '💡';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'AI & Machine Learning': 'from-blue-500 to-cyan-500',
      'Cybersecurity & Compliance': 'from-red-500 to-pink-500',
      'Cloud & DevOps': 'from-indigo-500 to-purple-500',
      'Data Analytics & BI': 'from-green-500 to-emerald-500',
      'IoT & Edge Computing': 'from-yellow-500 to-orange-500',
      'Blockchain & Web3': 'from-purple-500 to-violet-500',
      'Mobile & Web Development': 'from-cyan-500 to-blue-500',
      'Enterprise Software': 'from-gray-500 to-slate-500',
      'Industry Solutions': 'from-teal-500 to-green-500',
      'Emerging Technology': 'from-pink-500 to-rose-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-start gap-4">
          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-2xl`}>
            {getCategoryIcon(service.category)}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-3">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {service.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-400">${service.price}</span>
              <span className="text-sm text-gray-400">{service.estimatedDelivery}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-2xl mb-4`}>
        {getCategoryIcon(service.category)}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
      
      <div className="space-y-3 mb-4">
        <div className="text-sm">
          <span className="text-gray-400">Category:</span>
          <span className="text-white ml-2">{service.category}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-400">Price:</span>
          <span className="text-green-400 ml-2">${service.price}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-400">Delivery:</span>
          <span className="text-white ml-2">{service.estimatedDelivery}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.slice(0, 3).map((tag, idx) => (
          <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
          Learn More
        </button>
        <span className="text-xs text-gray-400">{service.supportLevel}</span>
      </div>
    </motion.div>
  );
};

export const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  const filteredServices = useMemo(() => {
    let services = COMPREHENSIVE_MICRO_SAAS_SERVICES_2025;

    // Filter by search term
    if (searchTerm) {
      services = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing
    if (selectedPricing !== 'all') {
      const [min, max] = PRICING_TIERS[selectedPricing];
      services = services.filter(service => service.price >= min && service.price <= max);
    }

    // Sort services
    services.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return services;
  }, [searchTerm, selectedCategory, selectedPricing, sortBy]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Innovative Services
            </span>
            <br />
            <span className="text-white">Comprehensive Tech Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge micro SAAS, IT, and AI services designed to transform your business
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Pricing</option>
              {Object.entries(PRICING_TIERS).map(([key, [min, max]]) => (
                <option key={key} value={key}>${min} - ${max}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>

            {/* View Mode */}
            <div className="flex bg-white/10 border border-white/20 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <motion.div
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                viewMode={viewMode}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No Services Found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPricing('all');
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Contact Us
              </button>
              <button className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesShowcase;
