import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Check, ExternalLink, Clock, Users, TrendingUp, Mail } from 'lucide-react';
import { allServices, contactInfo } from '../data/services';

const ServiceShowcase: React.FC = React.memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');

  // Memoized featured services with filtering and sorting
  const featuredServices = useMemo(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'all') {
      filtered = allServices.filter(service => service.category === selectedCategory);
    }
    
    // Sort services based on selection
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'popularity':
        default:
          return Math.random() - 0.5; // Simulate popularity ranking
      }
    });
    
    return sorted.slice(0, 6);
  }, [selectedCategory, sortBy]);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allServices.map(service => service.category))];
    return ['all', ...uniqueCategories];
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleServiceClick = (service: any) => {
    // Track service interaction
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'service_click', {
        service_name: service.name,
        service_category: service.category,
        service_price: service.price
      });
    }
    
    // Navigate to service page or open modal
    window.open(service.url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our most popular and innovative technology solutions designed to accelerate your business growth
          </p>
          
          {/* Enhanced Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popularity" className="bg-slate-800 text-white">Popularity</option>
                <option value="name" className="bg-slate-800 text-white">Name</option>
                <option value="price" className="bg-slate-800 text-white">Price</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleServiceClick(service)}
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full font-medium">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-300">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Enhanced Pricing */}
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                    Market: {service.marketPrice}
                  </div>
                </div>
              </div>

              {/* Enhanced Key Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  Top Benefits:
                </h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-xs text-green-400">
                      <Check className="w-3 h-3 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced CTA Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service);
                }}
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold border border-white/20 hover:border-white/40"
              >
                <span>Get Custom Quote</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ServiceShowcase.displayName = 'ServiceShowcase';

export default ServiceShowcase;