import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Grid, 
  List, 
  ArrowRight, 
  ExternalLink, 
  Zap as ZapIcon,
  Star,
  CheckCircle
} from 'lucide-react';

// Mock data for services
const allServices = [
  {
    id: 1,
    name: "AI-Powered Analytics",
    description: "Advanced analytics powered by artificial intelligence",
    category: "AI",
    price: 2999,
    rating: 4.8,
    reviews: 156,
    popular: true,
    features: ["Real-time insights", "Predictive modeling", "Custom dashboards"],
    technology: ["Machine Learning", "Python", "TensorFlow"],
    roi: "Average 300% ROI within 6 months",
    benefits: ["Cost reduction", "Improved efficiency", "Better decision making"]
  },
  {
    id: 2,
    name: "Quantum Computing Solutions",
    description: "Next-generation quantum computing services",
    category: "Quantum",
    price: 15000,
    rating: 4.9,
    reviews: 23,
    popular: false,
    features: ["Quantum algorithms", "Optimization", "Simulation"],
    technology: ["Qiskit", "Quantum circuits", "IBM Quantum"],
    roi: "Revolutionary problem-solving capabilities",
    benefits: ["Exponential speedup", "Complex optimization", "Future-proof technology"]
  }
];

const categories = [
  { id: 'all', name: 'All Services', count: allServices.length },
  { id: 'ai', name: 'AI Services', count: allServices.filter(s => s.category === 'AI').length },
  { id: 'quantum', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum').length }
];

export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>2025 Advanced Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 2025 services including AI, quantum computing, and advanced technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                2025 Advanced Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover the future of technology with our cutting-edge 2025 services. From AI-powered solutions to quantum computing, transform your business with next-generation innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-white/70">Technology Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-white/70">Expert Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option value="popularity">Popularity</option>
                      <option value="price">Price (Low to High)</option>
                      <option value="rating">Rating</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                    <div className="flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Display */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence>
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-white/70 mb-6">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSortBy('popularity');
                    }}
                    className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                    : 'space-y-6'
                  }
                >
                  {filteredServices.map((service) => (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        </div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-3 py-1">
                            <span className="text-cyan-400 text-xs font-semibold">POPULAR</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-gray-400">({service.reviews} reviews)</span>
                        </div>
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                          ${service.price.toLocaleString()}/month
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-cyan-400 text-sm">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technology.slice(0, 2).map((tech, idx) => (
                            <span key={idx} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                          {service.technology.length > 2 && '...'}
                        </div>
                      </div>

                      {/* ROI and Benefits */}
                      <div className="mb-6">
                        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                          <h4 className="text-cyan-400 font-semibold mb-2">ROI & Benefits</h4>
                          <p className="text-white/80 text-sm mb-3">{service.roi}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link href={`/services/${service.id}`} className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Link>
                        <Link href="/contact" className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm">
                          <ZapIcon className="w-4 h-4 mr-2" />
                          Contact
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="tel:+13024640950" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2">
                  Call +1 302 464 0950
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}