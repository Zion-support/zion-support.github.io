import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock, 
  DollarSign, 
  BarChart3, 
  Target, 
  Users, 
  Globe, 
  Mail, 
  Phone 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

const COMPLEXITY_LEVELS = ['Basic', 'Intermediate', 'Advanced', 'Enterprise'];
const PRICE_RANGES = ['Under $10K', '$10K-$50K', '$50K-$100K', '$100K+'];

export const AdvancedServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    complexity: 'all',
    priceRange: 'all',
    technology: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // Mock data - in real app this would come from props or API
  const mockServices = [
    {
      id: 'ai-crm-basic',
      name: 'AI CRM Basic',
      category: 'ai',
      price: '$5,000/month',
      duration: '3-6 months',
      features: ['Basic AI insights', 'Customer segmentation', 'Email automation'],
      benefits: ['Improved customer retention', 'Automated workflows', 'Basic analytics'],
      technology: ['AI/ML', 'CRM', 'Automation'],
      targetAudience: ['Small Business', 'Startups'],
      rating: 4.2,
      complexity: 'Basic',
      popularity: 'Medium',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/ai-crm-basic'
    },
    {
      id: 'ai-crm-enterprise',
      name: 'AI CRM Enterprise',
      category: 'ai',
      price: '$25,000/month',
      duration: '12-18 months',
      features: ['Advanced AI insights', 'Predictive analytics', 'Multi-channel integration', 'Custom AI models'],
      benefits: ['Predictive customer behavior', 'Advanced automation', 'Enterprise scalability'],
      technology: ['AI/ML', 'Big Data', 'Predictive Analytics', 'Enterprise Integration'],
      targetAudience: ['Enterprise', 'Large Corporations'],
      rating: 4.8,
      complexity: 'Enterprise',
      popularity: 'High',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/ai-crm-enterprise'
    },
    {
      id: 'quantum-basic',
      name: 'Quantum Computing Basic',
      category: 'quantum',
      price: '$50,000/month',
      duration: '6-12 months',
      features: ['Basic quantum algorithms', 'Cloud access', 'Documentation'],
      benefits: ['Quantum computing access', 'Algorithm development', 'Research capabilities'],
      technology: ['Quantum Computing', 'Cloud Platform', 'Basic Algorithms'],
      targetAudience: ['Research Institutions', 'Universities'],
      rating: 4.5,
      complexity: 'Intermediate',
      popularity: 'Medium',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/quantum-basic'
    },
    {
      id: 'quantum-enterprise',
      name: 'Quantum Computing Enterprise',
      category: 'quantum',
      price: '$200,000/month',
      duration: '18-24 months',
      features: ['Custom quantum algorithms', 'Dedicated processors', '24/7 support', 'Custom development'],
      benefits: ['Competitive advantage', 'Custom solutions', 'Priority access', 'Expert support'],
      technology: ['Quantum Computing', 'Custom Algorithms', 'Dedicated Hardware', 'Advanced Support'],
      targetAudience: ['Large Corporations', 'Government', 'Financial Services'],
      rating: 4.9,
      complexity: 'Enterprise',
      popularity: 'Trending',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/quantum-enterprise'
    }
  ];

  const filteredServices = useMemo(() => {
    return mockServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.category === 'all' || service.category === filters.category;
      const matchesComplexity = filters.complexity === 'all' || service.complexity === filters.complexity;
      const matchesTechnology = filters.technology === 'all' || service.technology.includes(filters.technology);
      
      return matchesCategory && matchesComplexity && matchesTechnology && matchesSearch;
    });
  }, [filters, searchTerm]);

  const toggleServiceSelection = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Basic':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Advanced':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Enterprise':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 'High':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Trending':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Advanced Service Comparison
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Compare our comprehensive range of AI, IT, and technology services to find the perfect solution for your needs.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Categories</option>
              <option value="ai">AI Services</option>
              <option value="quantum">Quantum Computing</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="cloud">Cloud Solutions</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Complexity
            </label>
            <select
              value={filters.complexity}
              onChange={(e) => setFilters(prev => ({ ...prev, complexity: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Levels</option>
              {COMPLEXITY_LEVELS.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price Range
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Prices</option>
              {PRICE_RANGES.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Technology
            </label>
            <select
              value={filters.technology}
              onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Technologies</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="Cloud Platform">Cloud Platform</option>
              <option value="Big Data">Big Data</option>
            </select>
          </div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'grid'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'list'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <Target className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          {filteredServices.length} services found
        </div>
      </div>

      {/* Services Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredServices.map(service => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden ${
              selectedServices.includes(service.id) 
                ? 'ring-2 ring-blue-500' 
                : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(service.complexity)}`}>
                      {service.complexity}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPopularityColor(service.popularity)}`}>
                      {service.popularity}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleServiceSelection(service.id)}
                  className={`p-2 rounded-full transition-colors ${
                    selectedServices.includes(service.id)
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-gray-100 text-gray-400 hover:text-gray-600 dark:bg-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {selectedServices.includes(service.id) ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {service.rating} rating
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm">
                    <a
                      href={`tel:${service.contactInfo}`}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Phone className="w-3 h-3" />
                      Contact
                    </a>
                    <a
                      href={`mailto:${service.email}`}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Mail className="w-3 h-3" />
                      Email
                    </a>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Globe className="w-3 h-3" />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Services Summary */}
      {selectedServices.length > 0 && (
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Selected Services ({selectedServices.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedServices.map(serviceId => {
              const service = mockServices.find(s => s.id === serviceId);
              return (
                <div key={serviceId} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {service.price} • {service.duration}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(service.complexity)}`}>
                      {service.complexity}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Rating: {service.rating}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
