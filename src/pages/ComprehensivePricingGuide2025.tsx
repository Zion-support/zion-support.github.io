import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Settings,
  BarChart,
  PieChart,
  Activity,
  TrendingDown,
  Eye,
  EyeOff,
  Download,
  Share2,
  Bookmark,
  Heart as HeartIcon,
  Calculator,
  CreditCard,
  Gift,
  Percent,
  Tag,
  DollarSign as DollarSignIcon,
  Calendar,
  Timer,
  Rocket,
  Crown,
  Gem,
  Trophy,
  Medal,
  Badge,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  Equal,
  Divide,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from '../data/advancedMicroSAASServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';

export default function ComprehensivePricingGuide2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('price');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_IT_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: allServices.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: allServices.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'Data Analytics', name: 'Data Analytics', count: allServices.filter(s => s.category === 'Data Analytics').length, icon: '📊', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: allServices.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: allServices.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: allServices.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'FinTech', name: 'FinTech', count: allServices.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' }
  ];

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return a.price - b.price;
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  const getPriceTier = (price: number) => {
    if (price < 500) return { tier: 'Starter', color: 'from-green-500 to-emerald-500', icon: Gift };
    if (price < 1500) return { tier: 'Professional', color: 'from-blue-500 to-cyan-500', icon: Star };
    if (price < 3000) return { tier: 'Enterprise', color: 'from-purple-500 to-pink-500', icon: Crown };
    return { tier: 'Premium', color: 'from-yellow-500 to-orange-500', icon: Gem };
  };

  const calculateMonthlyCost = (price: number) => {
    if (price < 1000) return price; // Monthly pricing
    if (price < 5000) return Math.round(price / 12); // Annual pricing
    return Math.round(price / 24); // 2-year pricing
  };

  const calculateROI = (roi: string) => {
    const match = roi.match(/(\d+)%/);
    return match ? parseInt(match[1]) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Comprehensive Pricing Guide 2025 | Zion Tech Group"
        description="Complete pricing guide for all our AI, IT, and micro SAAS services. Transparent pricing with proven ROI and competitive market analysis."
        keywords="pricing guide, service pricing, AI services pricing, IT services pricing, micro SAAS pricing, ROI calculator, cost comparison"
        canonical="https://ziontechgroup.com/comprehensive-pricing-guide-2025"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transparent pricing for all our innovative services. Compare costs, understand ROI, and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">💰</span> Transparent Pricing
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">📈</span> ROI Calculator
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">⚖️</span> Market Comparison
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">🎯</span> Custom Solutions
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Tiers & Value Propositions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed to provide maximum value at every price point, with clear ROI expectations and competitive market positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Starter Tier */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">Perfect for small businesses and startups</p>
              <div className="text-2xl font-bold text-green-600 mb-2">$199 - $499</div>
              <p className="text-sm text-gray-500">Monthly</p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Essential features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Standard support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Basic integrations
                </li>
              </ul>
            </div>

            {/* Professional Tier */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">$500 - $1,499</div>
              <p className="text-sm text-gray-500">Monthly</p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Advanced features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Full integrations
                </li>
              </ul>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large organizations</p>
              <div className="text-2xl font-bold text-purple-600 mb-2">$1,500 - $2,999</div>
              <p className="text-sm text-gray-500">Monthly</p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Enterprise features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  24/7 support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Custom solutions
                </li>
              </ul>
            </div>

            {/* Premium Tier */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">Cutting-edge solutions</p>
              <div className="text-2xl font-bold text-yellow-600 mb-2">$3,000+</div>
              <p className="text-sm text-gray-500">Monthly</p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  Premium features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  White-label options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Price:</span>
                <span className="text-sm font-medium">${priceRange[0]} - ${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-32"
              />
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="price">Sort by Price (Low to High)</option>
              <option value="price-high">Sort by Price (High to Low)</option>
              <option value="rating">Sort by Rating</option>
              <option value="roi">Sort by ROI</option>
              <option value="name">Sort by Name</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-600">
              {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.name}`}
              {` • Price range: $${priceRange[0]} - $${priceRange[1]}`}
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span>Average ROI: {Math.round(filteredServices.reduce((acc, s) => acc + calculateROI(s.roi), 0) / filteredServices.length)}%</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Star className="h-4 w-4" />
              <span>Average Rating: {(filteredServices.reduce((acc, s) => acc + s.rating, 0) / filteredServices.length).toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        {sortedServices.length === 0 ? (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setPriceRange([0, 5000]);
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {sortedServices.map((service, index) => {
              const priceTier = getPriceTier(service.price);
              const monthlyCost = calculateMonthlyCost(service.price);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-gradient-to-br ${getCategoryColor(service.category)} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{getCategoryIcon(service.category)}</span>
                    </div>
                    
                    {/* Price Tier Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <priceTier.icon className="h-3 w-3" />
                      {priceTier.tier}
                    </div>

                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                        Featured
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      {service.rating}
                    </div>

                    {/* Reviews */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      {service.reviewCount}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-gray-500">{service.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{service.subcategory}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing Information */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Our Price:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Market Price:</span>
                        <span className="text-sm text-gray-600">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Monthly Cost:</span>
                        <span className="text-sm font-medium text-green-600">
                          ~${monthlyCost}/month
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Setup Time:</span>
                        <span className="text-sm text-gray-600">{service.setupTime}</span>
                      </div>
                    </div>

                    {/* ROI and Benefits */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-500">Expected ROI</div>
                        <div className="font-semibold text-green-600">{service.roi}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">AI Score</div>
                        <div className="font-semibold text-blue-600">{service.aiScore}%</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                      </Link>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ROI Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Calculate the potential return on investment for our services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Investment</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="5000"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected ROI (%)
                    </label>
                    <input
                      type="number"
                      placeholder="400"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Period (months)
                    </label>
                    <input
                      type="number"
                      placeholder="12"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Returns</h3>
                <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Return:</span>
                    <span className="font-semibold text-green-600">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Profit:</span>
                    <span className="font-semibold text-green-600">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-semibold text-blue-600">300%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payback Period:</span>
                    <span className="font-semibold text-orange-600">4 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Calculate ROI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to discuss pricing, get a custom quote, or schedule a demo of any service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2 text-blue-300" />
              <div className="text-blue-100">+1 302 464 0950</div>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-2 text-blue-300" />
              <div className="text-blue-100">kleber@ziontechgroup.com</div>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-300" />
              <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}