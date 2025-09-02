import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';
import { innovativeServices, InnovativeService } from '../data/innovative-services-2025';

const InnovativeServicesShowcase: React.FC = React.memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'innovation' | 'roi'>('innovation');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(innovativeServices.map(service => service.category))];
    return ['all', ...uniqueCategories];
  }, []);

  // Filtered and sorted services
  const filteredServices = useMemo(() => {
    let filtered = innovativeServices;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'innovation':
          const innovationLevels = { 'Advanced': 1, 'Cutting-edge': 2, 'Revolutionary': 3 };
          return (innovationLevels[b.innovationLevel as keyof typeof innovationLevels] || 0) - 
                 (innovationLevels[a.innovationLevel as keyof typeof innovationLevels] || 0);
        case 'roi':
          return parseFloat(b.roi.replace(/[^0-9.]/g, '')) - parseFloat(a.roi.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, searchTerm, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Shield;
      case 'Blockchain Services': return Globe;
      case 'Sustainability Services': return TrendingUp;
      case 'Healthcare Services': return Users;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services': return 'from-purple-500 to-pink-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'Blockchain Services': return 'from-green-500 to-emerald-500';
      case 'Sustainability Services': return 'from-teal-500 to-green-500';
      case 'Healthcare Services': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Micro SAAS Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge technology solutions designed to accelerate your business growth and digital transformation
          </p>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="innovation">Sort by Innovation</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">{service.innovationLevel}</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">4.9</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-1">
                  ${service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <div className="text-xs text-gray-500">
                  Starting from • {service.pricing.billing} billing
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-4">
                <div className="text-sm text-gray-300 mb-2">Key Benefits:</div>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI and Market Info */}
              <div className="flex items-center justify-between mb-4 text-xs">
                <div className="text-green-400 font-semibold">
                  ROI: {service.roi}
                </div>
                <div className="text-gray-400">
                  Market: {service.marketSize}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`)}
                  className="px-4 py-2 border border-gray-600 text-gray-300 text-sm rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  Contact
                </button>
              </div>

              {/* Free Tier Badge */}
              {service.freeTier && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Free Tier
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Let us build a custom solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

InnovativeServicesShowcase.displayName = 'InnovativeServicesShowcase';

export default InnovativeServicesShowcase;