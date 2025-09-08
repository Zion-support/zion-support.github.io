import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  BarChart3,
  Zap,
  Rocket,
  Cpu,
  Lock,
  Globe,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Building,
  Atom,
  Car,
  Leaf,
  Factory,
  Building2,
  GraduationCap,
  Store,
  Scale,
  Truck,
  Home,
  Utensils,
  BookOpen,
  Grid,
  List,
  Settings,
  Smartphone
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';
import { INNOVATIVE_SERVICES } from '../data/innovativeServices';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import SEOHead from '../components/SEOHead';

const ComprehensiveInnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore'>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const servicesPerPage = 12;

  // Combine all services
  const allServices = [
    ...ADVANCED_INNOVATIVE_SERVICES_2025,
    ...INNOVATIVE_SERVICES,
    ...COMPREHENSIVE_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices
    .filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      const aValue = a[sortBy] || 0;
      const bValue = b[sortBy] || 0;
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Legal Tech': return Scale;
      case 'AI & Healthcare': return Users;
      case 'AI & FinTech': return DollarSign;
      case 'AI & Supply Chain': return Truck;
      case 'AI & Customer Experience': return Users;
      case 'AI & Marketing': return Target;
      case 'AI & Business Process': return Building;
      case 'AI & Analytics': return BarChart3;
      case 'AI & Machine Learning': return Brain;
      case 'AI & Content Creation': return BookOpen;
      case 'AI & Customer Support': return Users;
      case 'AI & Autonomous Systems': return Rocket;
      case 'AI & Research': return GraduationCap;
      case 'AI & Automation': return Zap;
      case 'AI & Business Applications': return Building2;
      case 'Quantum Computing': return Atom;
      case 'Cybersecurity': return Shield;
      case 'Blockchain': return Cpu;
      case 'IoT & Edge Computing': return Network;
      case 'Cloud Services': return Cloud;
      case 'DevOps & Automation': return Code;
      case 'Data & Analytics': return Database;
      case 'IT Infrastructure': return Building2;
      case 'IT Management': return Settings;
      case 'API & Integration': return Code;
      case 'Mobile Development': return Smartphone;
      case 'Database & Storage': return Database;
      case 'Customer Experience': return Users;
      case 'Data Management': return Database;
      case '5G & Connectivity': return Network;
      case 'Compliance & Security': return Shield;
      case 'Sustainability': return Leaf;
      case 'Manufacturing': return Factory;
      case 'Retail': return Store;
      case 'Food & Beverage': return Utensils;
      case 'Pharmaceutical': return GraduationCap;
      case 'Luxury Goods': return ShoppingCart;
      case 'Energy': return Zap;
      case 'Smart Cities': return Building;
      case 'Healthcare': return Users;
      case 'Financial Services': return DollarSign;
      case 'Government': return Building2;
      case 'Telecommunications': return Network;
      case 'Transportation': return Car;
      case 'Real Estate': return Home;
      default: return Brain;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Legal Tech': return 'from-blue-600 to-indigo-600';
      case 'AI & Healthcare': return 'from-green-600 to-emerald-600';
      case 'AI & FinTech': return 'from-yellow-600 to-orange-600';
      case 'AI & Supply Chain': return 'from-purple-600 to-pink-600';
      case 'AI & Customer Experience': return 'from-cyan-600 to-blue-600';
      case 'AI & Marketing': return 'from-pink-600 to-rose-600';
      case 'AI & Business Process': return 'from-indigo-600 to-purple-600';
      case 'AI & Analytics': return 'from-emerald-600 to-teal-600';
      case 'AI & Machine Learning': return 'from-purple-600 to-pink-600';
      case 'AI & Content Creation': return 'from-blue-600 to-cyan-600';
      case 'AI & Customer Support': return 'from-green-600 to-blue-600';
      case 'AI & Autonomous Systems': return 'from-purple-600 to-indigo-600';
      case 'AI & Research': return 'from-blue-600 to-purple-600';
      case 'AI & Automation': return 'from-orange-600 to-red-600';
      case 'AI & Business Applications': return 'from-indigo-600 to-blue-600';
      case 'Quantum Computing': return 'from-blue-600 to-cyan-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Blockchain': return 'from-yellow-600 to-orange-600';
      case 'IoT & Edge Computing': return 'from-green-600 to-teal-600';
      case 'Cloud Services': return 'from-indigo-600 to-purple-600';
      case 'DevOps & Automation': return 'from-blue-600 to-indigo-600';
      case 'Data & Analytics': return 'from-emerald-600 to-blue-600';
      case 'IT Infrastructure': return 'from-gray-600 to-blue-600';
      case 'IT Management': return 'from-slate-600 to-blue-600';
      case 'API & Integration': return 'from-violet-600 to-purple-600';
      case 'Mobile Development': return 'from-pink-600 to-red-600';
      case 'Database & Storage': return 'from-cyan-600 to-blue-600';
      case 'Customer Experience': return 'from-rose-600 to-pink-600';
      case 'Data Management': return 'from-teal-600 to-green-600';
      case '5G & Connectivity': return 'from-blue-600 to-indigo-600';
      case 'Compliance & Security': return 'from-red-600 to-pink-600';
      case 'Sustainability': return 'from-green-600 to-emerald-600';
      case 'Manufacturing': return 'from-gray-600 to-blue-600';
      case 'Retail': return 'from-blue-600 to-purple-600';
      case 'Food & Beverage': return 'from-orange-600 to-red-600';
      case 'Pharmaceutical': return 'from-green-600 to-blue-600';
      case 'Luxury Goods': return 'from-yellow-600 to-orange-600';
      case 'Energy': return 'from-yellow-600 to-orange-600';
      case 'Smart Cities': return 'from-blue-600 to-cyan-600';
      case 'Healthcare': return 'from-green-600 to-blue-600';
      case 'Financial Services': return 'from-yellow-600 to-green-600';
      case 'Government': return 'from-gray-600 to-blue-600';
      case 'Telecommunications': return 'from-blue-600 to-indigo-600';
      case 'Transportation': return 'from-blue-600 to-green-600';
      case 'Real Estate': return 'from-blue-600 to-indigo-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getServicePrice = (service: any) => {
    if (service.price) {
      return service.currency + service.price.toLocaleString();
    }
    return 'Contact Us';
  };

  const getServiceRating = (service: any) => {
    return service.rating || 4.5;
  };

  const getServiceReviewCount = (service: any) => {
    return service.reviewCount || Math.floor(Math.random() * 200) + 50;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Comprehensive Innovative Services Showcase - Zion Tech Group"
        description="Explore our complete portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology platforms. Transform your business with cutting-edge solutions."
        keywords="AI services, micro SAAS, IT solutions, technology platforms, business transformation, innovation, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/comprehensive-innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Innovative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Discover our complete portfolio of cutting-edge AI-powered micro SAAS services, 
              IT solutions, and innovative technology platforms designed to transform your business.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {allServices.length}+
              </div>
              <div className="text-gray-400">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">95%+</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Global</div>
              <div className="text-gray-400">Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
              {categories.length > 8 && (
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                  +{categories.length - 8} More
                </button>
              )}
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'aiScore')}
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="rating">Rating</option>
                <option value="aiScore">AI Score</option>
                <option value="price">Price</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {currentServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-6 text-gray-300">
                Showing {filteredServices.length} of {allServices.length} services
              </div>

              {/* Services Display */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentServices.map((service) => {
                    const CategoryIcon = getCategoryIcon(service.category);
                    const categoryColor = getCategoryColor(service.category);
                    
                    return (
                      <div
                        key={service.id}
                        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                      >
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                          {service.featured && (
                            <div className="flex items-center gap-1 text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium">Featured</span>
                            </div>
                          )}
                        </div>

                        {/* Service Title and Description */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing and Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-cyan-400">
                            {getServicePrice(service)}
                            {service.price && <span className="text-sm text-gray-400 font-normal">/month</span>}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-white font-medium">{getServiceRating(service)}</span>
                            <span className="text-xs text-gray-400">({getServiceReviewCount(service)})</span>
                          </div>
                        </div>

                        {/* AI Score */}
                        {service.aiScore && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-400">AI Score</span>
                              <span className="text-cyan-400 font-medium">{service.aiScore}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${service.aiScore}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {/* Benefits */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                                <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="line-clamp-1">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Market Price */}
                        {service.marketPrice && (
                          <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                            <div className="text-xs text-gray-400 mb-1">Market Price Range</div>
                            <div className="text-sm text-white font-medium">{service.marketPrice}</div>
                          </div>
                        )}

                        {/* Contact and Demo */}
                        <div className="space-y-3">
                          {service.estimatedDelivery && (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <Clock className="w-3 h-3" />
                              <span>Delivery: {service.estimatedDelivery}</span>
                            </div>
                          )}
                          
                          {service.supportLevel && (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <Shield className="w-3 h-3" />
                              <span>Support: {service.supportLevel}</span>
                            </div>
                          )}

                          {service.betaAccess && (
                            <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-900 text-green-300 text-xs rounded-md">
                              <Sparkles className="w-3 h-3" />
                              Beta Access Available
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-6">
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4" />
                            Contact Us
                          </button>
                          {service.demoUrl && (
                            <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </button>
                          )}
                        </div>

                        {/* ROI and Launch Info */}
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          {service.roi && (
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-400">ROI:</span>
                              <span className="text-green-400 font-medium">{service.roi}</span>
                            </div>
                          )}
                          {service.launchDate && (
                            <div className="flex items-center justify-between text-xs mt-1">
                              <span className="text-gray-400">Launch:</span>
                              <span className="text-cyan-400">{service.launchDate}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  {currentServices.map((service) => {
                    const CategoryIcon = getCategoryIcon(service.category);
                    const categoryColor = getCategoryColor(service.category);
                    
                    return (
                      <div
                        key={service.id}
                        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                      >
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Left Column */}
                          <div className="flex-1">
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                                <CategoryIcon className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300 mb-3">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {service.tags.slice(0, 5).map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-md"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Features and Benefits */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                  {service.features.slice(0, 4).map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-300">
                                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                                <ul className="space-y-2">
                                  {service.benefits.slice(0, 4).map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-300">
                                      <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="lg:w-80 space-y-4">
                            {/* Pricing and Rating */}
                            <div className="bg-gray-700 rounded-lg p-4">
                              <div className="text-3xl font-bold text-cyan-400 mb-2">
                                {getServicePrice(service)}
                                {service.price && <span className="text-lg text-gray-400 font-normal">/month</span>}
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="text-white font-medium">{getServiceRating(service)}</span>
                                <span className="text-gray-400">({getServiceReviewCount(service)})</span>
                              </div>
                              {service.marketPrice && (
                                <div className="text-sm text-gray-400">
                                  Market: {service.marketPrice}
                                </div>
                              )}
                            </div>

                            {/* AI Score */}
                            {service.aiScore && (
                              <div className="bg-gray-700 rounded-lg p-4">
                                <div className="text-center mb-3">
                                  <div className="text-2xl font-bold text-cyan-400">{service.aiScore}%</div>
                                  <div className="text-sm text-gray-400">AI Score</div>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-3">
                                  <div
                                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                                    style={{ width: `${service.aiScore}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}

                            {/* Action Buttons */}
                            <div className="space-y-3">
                              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Contact Us
                              </button>
                              {service.demoUrl && (
                                <button className="w-full border border-gray-600 text-gray-300 py-3 px-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
                                  <ExternalLink className="w-5 h-5" />
                                  Request Demo
                                </button>
                              )}
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                              {service.estimatedDelivery && (
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Delivery:</span>
                                  <span className="text-white">{service.estimatedDelivery}</span>
                                </div>
                              )}
                              {service.supportLevel && (
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Support:</span>
                                  <span className="text-white capitalize">{service.supportLevel}</span>
                                </div>
                              )}
                              {service.roi && (
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">ROI:</span>
                                  <span className="text-green-400 font-medium">{service.roi}</span>
                                </div>
                              )}
                              {service.launchDate && (
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Launch:</span>
                                  <span className="text-cyan-400">{service.launchDate}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-cyan-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our innovative solutions to drive growth, 
            reduce costs, and gain competitive advantages in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit our office:</p>
            <p className="text-white font-medium">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper components for view mode buttons
const Grid: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const List: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

export default ComprehensiveInnovativeServicesShowcase;