import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  DollarSign, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Globe, 
  Heart, 
  Rocket, 
  Code, 
  Building, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Target,
  Lightbulb,
  Layers,
  Cpu,
  Database,
  Network,
  Server,
  Settings,
  HelpCircle,
  MessageSquare,
  ShoppingCart,
  Wrench,
  Palette,
  Monitor,
  Key,
  Bug,
  Activity,
  PieChart,
  LineChart,
  Calendar,
  GraduationCap,
  Users2,
  Cookie
} from 'lucide-react';

// Import all available service data
import { ALL_ENHANCED_SERVICES } from '../data/enhancedMicroSaasServices2025';
import { ENHANCED_SERVICES_2025 } from '../data/enhanced-services-2025';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '../data/ultimateInnovativeServices2027';
import { INNOVATIVE_AI_SERVICES_2027 } from '../data/innovativeAIServices2027';
import { INNOVATIVE_IT_SERVICES_2027 } from '../data/innovativeITServices2027';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '../data/innovativeMicroSaasServices2027';

// Combine all services into one comprehensive list
const ALL_SERVICES = [
  ...ALL_ENHANCED_SERVICES,
  ...ENHANCED_SERVICES_2025,
  ...ULTIMATE_INNOVATIVE_SERVICES_2027,
  ...INNOVATIVE_AI_SERVICES_2027,
  ...INNOVATIVE_IT_SERVICES_2027,
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2027
];

// Service categories with icons and colors
const SERVICE_CATEGORIES = {
  'AI & Machine Learning': { icon: Brain, color: 'from-purple-600 to-indigo-700', description: 'Advanced AI solutions and machine learning platforms' },
  'Cybersecurity': { icon: Shield, color: 'from-red-600 to-pink-700', description: 'Enterprise-grade security and threat protection' },
  'Cloud & DevOps': { icon: Cloud, color: 'from-blue-600 to-cyan-700', description: 'Scalable cloud infrastructure and automation' },
  'Quantum Computing': { icon: Zap, color: 'from-cyan-600 to-blue-700', description: 'Next-generation quantum solutions' },
  'IoT & Edge Computing': { icon: Globe, color: 'from-green-600 to-emerald-700', description: 'Connected devices and edge processing' },
  'Blockchain & Web3': { icon: Lock, color: 'from-orange-600 to-red-700', description: 'Decentralized solutions and smart contracts' },
  'Healthcare AI': { icon: Heart, color: 'from-pink-600 to-rose-700', description: 'AI-powered healthcare solutions' },
  'Financial Technology': { icon: DollarSign, color: 'from-yellow-600 to-orange-700', description: 'Fintech and financial automation' },
  'Digital Marketing': { icon: TrendingUp, color: 'from-emerald-600 to-teal-700', description: 'Marketing automation and analytics' },
  'Enterprise Solutions': { icon: Building, color: 'from-indigo-600 to-purple-700', description: 'Large-scale business solutions' },
  'Micro SaaS': { icon: Code, color: 'from-teal-600 to-cyan-700', description: 'Specialized software-as-a-service solutions' },
  'Data & Analytics': { icon: BarChart3, color: 'from-slate-600 to-gray-700', description: 'Business intelligence and data insights' }
};

export default function ComprehensiveServicesMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<string>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique tags from services
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    ALL_SERVICES.forEach(service => {
      if (service.tags) {
        service.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, []);

  // Filter services based on selected criteria
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        (service.category && service.category.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      const matchesSearch = !searchTerm || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (service.description && service.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (service.tagline && service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesPrice = !service.pricing || 
        (service.pricing.monthly && 
         parseFloat(service.pricing.monthly.replace(/[^0-9.]/g, '')) >= priceRange[0] &&
         parseFloat(service.pricing.monthly.replace(/[^0-9.]/g, '')) <= priceRange[1]);
      
      const matchesTags = selectedTags.length === 0 || 
        (service.tags && selectedTags.some(tag => service.tags.includes(tag)));
      
      return matchesCategory && matchesSearch && matchesPrice && matchesTags;
    });
  }, [selectedCategory, searchTerm, priceRange, selectedTags]);

  // Sort services
  const sortedServices = useMemo(() => {
    const sorted = [...filteredServices];
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'price-low':
        return sorted.sort((a, b) => {
          const priceA = a.pricing?.monthly ? parseFloat(a.pricing.monthly.replace(/[^0-9.]/g, '')) : 0;
          const priceB = b.pricing?.monthly ? parseFloat(b.pricing.monthly.replace(/[^0-9.]/g, '')) : 0;
          return priceA - priceB;
        });
      case 'price-high':
        return sorted.sort((a, b) => {
          const priceA = a.pricing?.monthly ? parseFloat(a.pricing.monthly.replace(/[^0-9.]/g, '')) : 0;
          const priceB = b.pricing?.monthly ? parseFloat(b.pricing.monthly.replace(/[^0-9.]/g, '')) : 0;
          return priceB - priceA;
        });
      case 'newest':
        return sorted.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
      case 'popular':
        return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
      default:
        return sorted;
    }
  }, [filteredServices, sortBy]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Services Marketplace
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zion-cyan max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our complete portfolio of cutting-edge technology solutions, from AI and quantum computing to cybersecurity and enterprise solutions.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </Link>
            <a href="tel:+13024640950">
              <button className="px-8 py-3 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300">
                Call: +1 302 464 0950
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white hover:bg-zion-slate-light transition-colors duration-200"
            >
              <Filter className="w-4 h-4" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-zion-slate-light"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-zion-cyan mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      <option value="all">All Categories</option>
                      {Object.keys(SERVICE_CATEGORIES).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-zion-cyan mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest First</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-zion-cyan mb-2">Price Range</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-full px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                        className="w-full px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-zion-cyan mb-2">Popular Tags</label>
                    <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                      {allTags.slice(0, 10).map(tag => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${
                            selectedTags.includes(tag)
                              ? 'bg-zion-cyan text-white'
                              : 'bg-zion-slate text-gray-400 hover:text-white'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-zion-cyan">
              Showing {sortedServices.length} of {ALL_SERVICES.length} services
            </p>
            <div className="text-sm text-gray-400">
              {selectedCategory !== 'all' && `Category: ${selectedCategory}`}
              {searchTerm && ` • Search: "${searchTerm}"`}
            </div>
          </div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedServices.map((service, index) => (
                <ServiceCard key={service.id || index} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedServices.map((service, index) => (
                <ServiceListCard key={service.id || index} service={service} index={index} />
              ))}
            </div>
          )}

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedTags([]);
                  setPriceRange([0, 10000]);
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-cyan mb-8"
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
            <Link to="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300">
                Contact Us Today
              </button>
            </Link>
            <a href="tel:+13024640950">
              <button className="px-8 py-3 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300">
                Call: +1 302 464 0950
              </button>
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
                <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                Expert AI & Technology Specialists
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                Proven ROI & Performance Metrics
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                24/7 Support & Maintenance
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
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
            <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">https://ziontechgroup.com</a></p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component for Grid View
function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    for (const [catName, catData] of Object.entries(SERVICE_CATEGORIES)) {
      if (category && category.toLowerCase().includes(catName.toLowerCase())) {
        const IconComponent = catData.icon;
        return <IconComponent className="w-5 h-5" />;
      }
    }
    return <Code className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    for (const [catName, catData] of Object.entries(SERVICE_CATEGORIES)) {
      if (category && category.toLowerCase().includes(catName.toLowerCase())) {
        return catData.color;
      }
    }
    return 'from-gray-600 to-gray-700';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-zion-slate border border-zion-slate-light rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/20"
    >
      {/* Service Image */}
      <div className="relative h-48 bg-gradient-to-br from-zion-slate to-zion-slate-dark overflow-hidden">
        {service.images && service.images[0] ? (
          <img 
            src={service.images[0]} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className={`w-20 h-20 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-full flex items-center justify-center text-white text-2xl`}>
              {getCategoryIcon(service.category)}
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-zion-cyan/90 text-white text-xs font-medium rounded-full">
            {service.category || 'Technology'}
          </span>
        </div>

        {/* Rating */}
        {service.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{service.rating}</span>
          </div>
        )}
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {service.description || service.tagline || 'Comprehensive technology solution designed to drive business growth and innovation.'}
        </p>

        {/* Pricing */}
        {service.pricing && (
          <div className="mb-4">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.pricing.monthly}
            </div>
            <div className="text-xs text-gray-500">per month</div>
          </div>
        )}

        {/* Features Preview */}
        {service.features && service.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <li key={idx} className="text-xs text-gray-400 flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <Link 
            to={service.link || `/services/${service.id}`}
            className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium flex items-center group-hover:translate-x-1 transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          
          <button className="px-4 py-2 bg-zion-cyan/10 text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg transition-all duration-300 text-sm">
            Get Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Service List Card Component for List View
function ServiceListCard({ service, index }: { service: any; index: number }) {
  const getCategoryIcon = (category: string) => {
    for (const [catName, catData] of Object.entries(SERVICE_CATEGORIES)) {
      if (category && category.toLowerCase().includes(catName.toLowerCase())) {
        const IconComponent = catData.icon;
        return <IconComponent className="w-5 h-5" />;
      }
    }
    return <Code className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    for (const [catName, catData] of Object.entries(SERVICE_CATEGORIES)) {
      if (category && category.toLowerCase().includes(catName.toLowerCase())) {
        return catData.color;
      }
    }
    return 'from-gray-600 to-gray-700';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zion-slate border border-zion-slate-light rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Service Image */}
        <div className="lg:w-48 lg:h-32 w-full h-48 bg-gradient-to-br from-zion-slate to-zion-slate-dark rounded-lg overflow-hidden flex-shrink-0">
          {service.images && service.images[0] ? (
            <img 
              src={service.images[0]} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-full flex items-center justify-center text-white text-xl`}>
                {getCategoryIcon(service.category)}
              </div>
            </div>
          )}
        </div>

        {/* Service Content */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-zion-cyan/90 text-white text-xs font-medium rounded-full">
                  {service.category || 'Technology'}
                </span>
                {service.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{service.rating}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {service.description || service.tagline || 'Comprehensive technology solution designed to drive business growth and innovation.'}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {service.features.slice(0, 4).map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing and CTA */}
            <div className="lg:w-48 flex-shrink-0">
              {service.pricing && (
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold text-zion-cyan">
                    {service.pricing.monthly}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                <Link 
                  to={service.link || `/services/${service.id}`}
                  className="w-full px-4 py-2 bg-zion-cyan text-white text-center rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200 font-medium"
                >
                  Learn More
                </Link>
                <button className="w-full px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200 font-medium">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}