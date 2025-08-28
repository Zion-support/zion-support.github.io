import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Globe,
  Shield,
  Cpu,
  Database,
  Network,
  Lock,
  TrendingUp,
  Users,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2026 } from '../data/advancedInnovativeServices2026';

const AdvancedInnovativeServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = useMemo(() => {
    const cats = new Set(ADVANCED_INNOVATIVE_SERVICES_2026.map(service => service.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredServices = useMemo(() => {
    let filtered = ADVANCED_INNOVATIVE_SERVICES_2026;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          return b.innovationLevel.localeCompare(a.innovationLevel);
        case 'roi':
          return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
        case 'price':
          return a.price - b.price;
        case 'delivery':
          return a.estimatedDelivery.localeCompare(b.estimatedDelivery);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced Innovative Services 2026
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionary AI, Quantum Computing, and Futuristic Technology Solutions
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200">
              🚀 Quantum AI
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200">
              🧠 Brain-Computer Interfaces
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-200">
              🌌 Space Mining
            </span>
            <span className="px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-red-200">
              ⚡ Fusion Energy
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Filter and Search Section */}
      <motion.div
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-slate-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <TrendingUp className="text-slate-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="roi">Sort by ROI</option>
                <option value="price">Sort by Price</option>
                <option value="delivery">Sort by Delivery</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="container mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-medium">
                  {service.category}
                </span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-xs font-medium">
                  {service.subcategory}
                </span>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                  <div className="text-xs text-slate-400">ROI</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{service.innovationLevel}</div>
                  <div className="text-xs text-slate-400">Innovation</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4 p-3 bg-slate-700/30 rounded-lg">
                <div>
                  <div className="text-sm text-slate-400">Starting from</div>
                  <div className="text-xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Delivery</div>
                  <div className="text-sm text-white">{service.estimatedDelivery}</div>
                </div>
              </div>

              {/* Features Preview */}
              <div className="mb-4">
                <div className="text-sm text-slate-400 mb-2">Key Features:</div>
                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-slate-700/50 pt-4">
                <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                  <span>Contact:</span>
                  <span className="text-blue-400">{service.contactInfo.phone}</span>
                </div>
                <div className="text-xs text-slate-500 mb-3">
                  {service.contactInfo.email}
                </div>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search criteria or category filter.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20 border-t border-slate-700/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions.
              Get in touch today to start your journey into the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-slate-300 mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-slate-300 mb-3">Send us a detailed message</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300 mb-3">Come see our innovation center</p>
              <p className="text-green-400 font-medium">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Visit Our Website
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedInnovativeServicesShowcase2026;