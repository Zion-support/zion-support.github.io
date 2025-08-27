import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  SortAsc, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Heart, 
  Factory, 
  ShoppingCart, 
  Building2, 
  GraduationCap, 
  Leaf, 
  Truck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  Users,
  DollarSign,
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Rocket,
  Crown
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025 } from '../data/2025-ultimate-innovative-services-expansion.js';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/2025-specialized-industry-solutions-ultimate.js';

const UltimateServicesShowcase2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('name');

  const allServices = [
    ...ULTIMATE_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025
  ];

  const categories = useMemo(() => {
    const cats = [...new Set(allServices.map(s => s.category))];
    return ['all', ...cats];
  }, [allServices]);

  const industries = useMemo(() => {
    const inds = [...new Set(allServices.map(s => s.industry).filter(Boolean))];
    return ['all', ...inds];
  }, [allServices]);

  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesIndustry = selectedIndustry === 'all' || service.industry === selectedIndustry;
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesIndustry && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'roi':
          const roiA = parseInt(a.roi.match(/\d+/)?.[0] || "0");
          const roiB = parseInt(b.roi.match(/\d+/)?.[0] || "0");
          return roiB - roiA;
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedIndustry, priceRange, sortBy]);

  const getCategoryIcon = (category) => {
    const iconMap = {
      'AI & Automation': Brain,
      'Quantum Computing': Brain,
      'Cybersecurity': Shield,
      'IoT & Edge Computing': Leaf,
      'Blockchain & Web3': Globe,
      'Healthcare AI': Heart,
      'Manufacturing': Factory,
      'Financial Services': DollarSign,
      'Retail': ShoppingCart,
      'Government': Building2,
      'Education': GraduationCap,
      'Energy': Zap,
      'Transportation': Truck,
      'Space Technology': Globe,
      'Neuromorphic Computing': Brain,
      'Synthetic Biology': Leaf,
      'Fusion Energy': Zap
    };
    return iconMap[category] || Brain;
  };

  const formatPrice = (price) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const getROIValue = (roi) => {
    const match = roi.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              2025 Ultimate
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of cutting-edge micro SAAS services, 
            AI solutions, and industry-specific platforms designed to revolutionize 
            your business operations.
          </p>
        </motion.div>
      </div>

      {/* Contact Information Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-blue-500 font-semibold">Phone</p>
                <p className="text-white text-lg">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-purple-600 font-semibold">Email</p>
                <p className="text-white text-lg">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-blue-500 font-semibold">Address</p>
                <p className="text-white text-lg">364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Our Website
            </a>
          </div>
        </div>
      </motion.div>

      {/* Filters Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="bg-zinc-800/50 border border-zinc-700/20 rounded-2xl p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/10 border border-zinc-600/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zinc-700/10 border border-zinc-600/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-zinc-700/10 border border-zinc-600/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-full px-3 py-3 bg-zinc-700/10 border border-zinc-600/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                className="w-full px-3 py-3 bg-zinc-700/10 border border-zinc-600/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-zinc-700/10 border border-zinc-600/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
              <option value="aiScore">Sort by AI Score</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-zinc-800/50 border border-zinc-700/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-blue-500" })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-500">
                      {formatPrice(service.price)}
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-zinc-700/10 rounded-lg">
                    <div className="text-purple-500 font-bold">
                      {getROIValue(service.roi)}%
                    </div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-zinc-700/10 rounded-lg">
                    <div className="text-blue-500 font-bold">
                      {service.estimatedDelivery}
                    </div>
                    <div className="text-xs text-gray-400">Delivery</div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-blue-500" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-blue-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Technology & Compliance */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {service.technology.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zinc-700/10 rounded text-xs text-blue-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.compliance.slice(0, 2).map((comp, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-600/20 rounded text-xs text-purple-500">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                    Get Quote
                  </button>
                  <div className="flex items-center gap-2 text-blue-500 text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto mt-16"
      >
        <div className="bg-zinc-800/30 border border-zinc-700/20 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Services Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {filteredServices.length}
              </div>
              <div className="text-gray-400 text-sm">Services Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ${(filteredServices.reduce((sum, s) => sum + s.price, 0) / 1000).toFixed(1)}K
              </div>
              <div className="text-gray-400 text-sm">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {Math.round(filteredServices.reduce((sum, s) => sum + getROIValue(s.roi), 0) / filteredServices.length)}%
              </div>
              <div className="text-gray-400 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {filteredServices.filter(s => s.aiScore && s.aiScore > 80).length}
              </div>
              <div className="text-gray-400 text-sm">High AI Score</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UltimateServicesShowcase2025;