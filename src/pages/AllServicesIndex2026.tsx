import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  Search, 
  Filter, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  TrendingUp, 
  Heart, 
  Truck, 
  Users, 
  Code, 
  FileText, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  DollarSign,
  Clock,
  Target,
  BarChart3
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2026 } from '../data/advancedMicroSaasServices2026';
import { REVOLUTIONARY_SERVICES_2031 } from '../data/revolutionaryServices2031';

const AllServicesIndex2026: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');

  const allServices = [...ADVANCED_MICRO_SAAS_SERVICES_2026, ...REVOLUTIONARY_SERVICES_2031];
  
  const categories = ['all', ...new Set(allServices.map(service => service.category))];
  const priceRanges = [
    'all',
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    'Over $20,000'
  ];
  const innovationLevels = ['all', ...new Set(allServices.map(service => service.innovationLevel))];

  const getPriceRange = (price: number) => {

    if (price < 2000) return 'Under $2,000';
    if (price < 5000) return '$2,000 - $5,000';
    if (price < 10000) return '$5,000 - $10,000';
    if (price < 20000) return '$10,000 - $20,000';
    return 'Over $20,000';
  };

  const filteredServices = allServices.filter(service => {

    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || getPriceRange(service.price) === selectedPriceRange;
    
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesInnovation;
  });

  const getCategoryIcon = (category: string) => {

    switch (category) {

      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Fintech': return <TrendingUp className="w-5 h-5" />;
      case 'Healthcare': return <Heart className="w-5 h-5" />;
      case 'Logistics': return <Truck className="w-5 h-5" />;
      case 'Customer Analytics': return <Users className="w-5 h-5" />;
      case 'DevOps': return <Code className="w-5 h-5" />;
      case 'Content Creation': return <FileText className="w-5 h-5" />;
      case 'Compliance': return <CheckCircle className="w-5 h-5" />;
      case 'Quantum Computing': return <Zap className="w-5 h-5" />;
      case 'Space Technology': return <Brain className="w-5 h-5" />;
      case 'AI Automation': return <Brain className="w-5 h-5" />;
      case 'Blockchain': return <Shield className="w-5 h-5" />;
      case 'Sustainability': return <CheckCircle className="w-5 h-5" />;
      case 'Education': return <Star className="w-5 h-5" />;
      case 'Financial Services': return <TrendingUp className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {

    switch (level) {

      case 'Revolutionary': return 'text-purple-600 bg-purple-100';
      case 'Cutting-edge': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryStats = () => {

    const stats: { [key: string]: number } = {};
    allServices.forEach(service => {

      stats[service.category] = (stats[service.category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Services Index 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio of {allServices.length} innovative micro SAAS, AI, and IT services designed to transform your business and drive growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{allServices.length}</div>
                <div className="text-sm text-gray-600">Total Services</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">$2K-$50K</div>
                <div className="text-sm text-gray-600">Price Range</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>
                  {range === 'all' ? 'All Prices' : range}
                </option>
              ))}
            </select>

            {/* Innovation Level Filter */}
            <select
              value={selectedInnovationLevel}
              onChange={(e) => setSelectedInnovationLevel(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {innovationLevels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Object.entries(categoryStats).map(([category, count]) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="flex justify-center mb-2">
                {getCategoryIcon(category)}
              </div>
              <div className="text-sm font-medium text-gray-900">{category}</div>
              <div className="text-xs text-gray-500">{count} services</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredServices.length} Services Found
          </h2>
          <div className="text-sm text-gray-500">
            Showing {filteredServices.length} of {allServices.length} services
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium text-gray-500">
                      {service.category}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline mb-1">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm">/month</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Market: {service.marketPrice}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="text-sm font-bold text-blue-600">{service.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="text-sm font-bold text-green-600">{service.estimatedDelivery}</div>
                    <div className="text-xs text-gray-500">Delivery</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="https://ziontechgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-200 transition-colors duration-200 text-sm flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {

                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setSelectedInnovationLevel('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect solution for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Visit Website
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesIndex2026;