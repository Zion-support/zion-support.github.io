import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Car,
  Satellite,
  TestTube,
  Leaf,
  ShieldCheck,
  ChartLine,
  Factory,
  Zap as Lightning,
  BookOpen,
  Atom,
  Scale,
  Award,
  Users2,
  Zap as Bolt
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';

export default function ComprehensivePricing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...ADVANCED_INNOVATIVE_SERVICES];

  const categories = [
    { id: 'all', title: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-content', title: 'AI & Content', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-business', title: 'AI & Business', icon: Building, color: 'from-green-500 to-emerald-500' },
    { id: 'ai-financial', title: 'AI & Financial', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { id: 'ai-hr', title: 'AI & HR', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { id: 'ai-supply-chain', title: 'AI & Supply Chain', icon: Network, color: 'from-red-500 to-pink-500' },
    { id: 'ai-legal', title: 'AI & Legal', icon: Shield, color: 'from-gray-500 to-blue-500' },
    { id: 'ai-healthcare', title: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'ai-real-estate', title: 'AI & Real Estate', icon: Building, color: 'from-blue-500 to-indigo-500' },
    { id: 'ai-education', title: 'AI & Education', icon: BookOpen, color: 'from-green-500 to-blue-500' },
    { id: 'ai-marketing', title: 'AI & Marketing', icon: Target, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', title: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'space-tech', title: 'Space Technology', icon: Satellite, color: 'from-indigo-500 to-purple-500' },
    { id: 'biotech', title: 'Biotechnology', icon: TestTube, color: 'from-green-500 to-emerald-500' },
    { id: 'climate-tech', title: 'Climate Technology', icon: Leaf, color: 'from-green-500 to-blue-500' },
    { id: 'cybersecurity', title: 'Cybersecurity', icon: ShieldCheck, color: 'from-red-500 to-pink-500' },
    { id: 'financial-trading', title: 'Financial Trading', icon: ChartLine, color: 'from-yellow-500 to-orange-500' },
    { id: 'manufacturing', title: 'Manufacturing', icon: Factory, color: 'from-gray-500 to-blue-500' },
    { id: 'energy-grid', title: 'Energy Grid', icon: Lightning, color: 'from-yellow-500 to-orange-500' },
    { id: 'autonomous-vehicles', title: 'Autonomous Vehicles', icon: Car, color: 'from-blue-500 to-indigo-500' }
  ];

  const priceRanges = [
    { id: 'all', title: 'All Prices', range: 'All' },
    { id: 'budget', title: 'Budget ($199-$499)', range: '199-499' },
    { id: 'mid-range', title: 'Mid-Range ($500-$999)', range: '500-999' },
    { id: 'premium', title: 'Premium ($1,000-$2,999)', range: '1000-2999' },
    { id: 'enterprise', title: 'Enterprise ($3,000+)', range: '3000+' }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find(cat => 
      category.toLowerCase().includes(cat.id.replace('-', ' ')) ||
      cat.title.toLowerCase().includes(category.toLowerCase())
    );
    return categoryObj?.icon || Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find(cat => 
      category.toLowerCase().includes(cat.id.replace('-', ' ')) ||
      cat.title.toLowerCase().includes(category.toLowerCase())
    );
    return categoryObj?.color || 'from-gray-500 to-blue-500';
  };

  const filterServices = () => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryObj = categories.find(cat => cat.id === selectedCategory);
      if (categoryObj) {
        filtered = filtered.filter(service => 
          service.category.toLowerCase().includes(categoryObj.title.toLowerCase().replace('AI & ', '').replace('AI ', '').toLowerCase()) ||
          service.subcategory.toLowerCase().includes(categoryObj.title.toLowerCase().replace('AI & ', '').replace('AI ', '').toLowerCase())
        );
      }
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const rangeObj = priceRanges.find(range => range.id === selectedPriceRange);
      if (rangeObj && rangeObj.range !== 'All') {
        if (rangeObj.range === '3000+') {
          filtered = filtered.filter(service => service.price >= 3000);
        } else {
          const [min, max] = rangeObj.range.split('-').map(Number);
          filtered = filtered.filter(service => service.price >= min && service.price <= max);
        }
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredServices = filterServices();

  const getPriceTier = (price: number) => {
    if (price < 500) return { tier: 'Starter', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (price < 1000) return { tier: 'Professional', color: 'text-blue-400', bgColor: 'bg-blue-500/20' };
    if (price < 3000) return { tier: 'Premium', color: 'text-purple-400', bgColor: 'bg-purple-500/20' };
    return { tier: 'Enterprise', color: 'text-orange-400', bgColor: 'bg-orange-500/20' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pricing</span> Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transparent pricing for all our innovative AI-powered micro SAAS services. 
            Choose the perfect solution for your business needs and budget.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by name, category, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.title}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="price-low">Sort by Price (Low to High)</option>
                <option value="price-high">Sort by Price (High to Low)</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'table' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
              <div className="text-gray-400">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">4</div>
              <div className="text-gray-400">Pricing Tiers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$199</div>
              <div className="text-gray-400">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">400%+</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-4">Perfect for small businesses and startups</p>
              <div className="text-2xl font-bold text-green-400 mb-2">$199 - $499</div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-400 text-sm mb-4">Ideal for growing businesses</p>
              <div className="text-2xl font-bold text-blue-400 mb-2">$500 - $999</div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <p className="text-gray-400 text-sm mb-4">For established enterprises</p>
              <div className="text-2xl font-bold text-purple-400 mb-2">$1,000 - $2,999</div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bolt className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-4">Custom solutions for large organizations</p>
              <div className="text-2xl font-bold text-orange-400 mb-2">$3,000+</div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>
          </div>
        </div>

        {/* Services Display */}
        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const priceTier = getPriceTier(service.price);
              
              return (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${categoryColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Category & Price */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </span>
                    <span className={`px-3 py-1 ${priceTier.bgColor} ${priceTier.color} text-xs rounded-full font-medium`}>
                      {priceTier.tier}
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-sm mb-2">per month</div>
                      <div className="text-xs text-gray-500">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* ROI & Delivery */}
                  <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-gray-300">
                        <div className="font-medium">ROI:</div>
                        <div className="text-green-400">{service.roi}</div>
                      </div>
                      <div className="text-gray-300">
                        <div className="font-medium">Delivery:</div>
                        <div className="text-cyan-400">{service.estimatedDelivery}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    
                    {service.demoUrl && (
                      <a
                        href={service.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">Ready to get started?</div>
                      <div className="flex justify-center space-x-4 text-xs text-gray-500">
                        <a href={`tel:${service.contactInfo.phone}`} className="hover:text-cyan-400">
                          {service.contactInfo.phone}
                        </a>
                        <a href={`mailto:${service.contactInfo.email}`} className="hover:text-cyan-400">
                          {service.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table View */
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ROI</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Delivery</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredServices.map((service, idx) => {
                  const priceTier = getPriceTier(service.price);
                  return (
                    <tr key={idx} className="hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-white">{service.title}</div>
                          <div className="text-sm text-gray-400 line-clamp-2">{service.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs bg-gray-700/50 text-cyan-400 rounded-full">
                          {service.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white font-medium">${service.price.toLocaleString()}/month</div>
                        <div className="text-xs text-gray-400">{service.marketPrice}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs ${priceTier.bgColor} ${priceTier.color} rounded-full font-medium`}>
                          {priceTier.tier}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-green-400">{service.roi}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-cyan-400">{service.estimatedDelivery}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Link
                            to={`/services/${service.id}`}
                            className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs rounded transition-colors"
                          >
                            Learn More
                          </Link>
                          {service.demoUrl && (
                            <a
                              href={service.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-xs rounded transition-colors"
                            >
                              Demo
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact Sales Team
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Request Custom Quote
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-gray-400">
              <p>Available 24/7 for enterprise support</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}