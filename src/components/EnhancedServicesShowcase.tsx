import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Brain, 
  Cloud, 
  Database, 
  Shield, 
  Settings,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  BarChart3,
  FileText,
  Image,
  Phone,
  Mail,
  MapPin,
  GraduationCap
} from 'lucide-react';

interface Service {
  id: number;
  name: string;
  category: string;
  pricing: string;
  description: string;
  price: number;
  pricingModel: string;
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const EnhancedServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Enhanced services data with ratings and reviews
  const services: Service[] = [
    {
      id: 1,
      name: "TaskFlow Pro",
      category: "Productivity",
      pricing: "Freemium",
      description: "Simple yet powerful task management and project collaboration tool for small teams",
      price: 15,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports", "Mobile app", "API integration"],
      benefits: ["Increased productivity", "Better team coordination", "Project visibility", "Easy to use", "Real-time updates"],
      targetAudience: ["Small teams", "Startups", "Freelancers", "Small businesses"],
      tags: ["Task Management", "Productivity", "Collaboration", "Project Management"],
      rating: 4.8,
      reviewCount: 1247,
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "InvoiceGenius",
      category: "Finance",
      pricing: "Freemium",
      description: "AI-powered invoice generation and financial management for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["AI invoice generation", "Expense tracking", "Financial reports", "Tax preparation", "Multi-currency", "Payment processing"],
      benefits: ["Time savings", "Accuracy improvement", "Tax compliance", "Financial insights", "Automated workflows"],
      targetAudience: ["Small businesses", "Freelancers", "Consultants", "Service providers"],
      tags: ["Invoicing", "Finance", "AI", "Tax Preparation", "Expense Tracking"],
      rating: 4.9,
      reviewCount: 892,
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "SocialSync Pro",
      category: "Marketing",
      pricing: "Freemium",
      description: "Comprehensive social media management and analytics platform for businesses",
      price: 30,
      pricingModel: "monthly",
      userLimit: "Up to 5 users",
      features: ["Multi-platform posting", "Content scheduling", "Analytics dashboard", "Engagement tracking", "AI content suggestions", "Competitor analysis"],
      benefits: ["Time efficiency", "Better engagement", "Data insights", "Brand consistency", "ROI tracking"],
      targetAudience: ["Marketing teams", "Small businesses", "Agencies", "Content creators"],
      tags: ["Social Media", "Marketing", "Analytics", "Content Management", "Automation"],
      rating: 4.7,
      reviewCount: 1563,
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  const pricingOptions = ['all', ...Array.from(new Set(services.map(s => s.pricing)))];

  const filteredServices = services
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Productivity': <Settings className="w-6 h-6" />,
      'Finance': <DollarSign className="w-6 h-6" />,
      'Marketing': <TrendingUp className="w-6 h-6" />,
      'CRM': <Users className="w-6 h-6" />,
      'Analytics': <BarChart3 className="w-6 h-6" />,
      'Scheduling': <Clock className="w-6 h-6" />,
      'Content': <FileText className="w-6 h-6" />,
      'Security': <Shield className="w-6 h-6" />,
      'Media': <Image className="w-6 h-6" />,
      'Education': <GraduationCap className="w-6 h-6" />
    };
    return iconMap[category] || <Zap className="w-6 h-6" />;
  };

  const getPricingColor = (pricing: string) => {
    const colorMap: { [key: string]: string } = {
      'Freemium': 'text-green-400',
      'Basic': 'text-blue-400',
      'Pro': 'text-purple-400',
      'Enterprise': 'text-orange-400'
    };
    return colorMap[pricing] || 'text-gray-400';
  };

  const formatPrice = (price: number, model: string) => {
    return `$${price}/${model}`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Micro SAAS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge software solutions designed for growth, efficiency, and innovation.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
=======
import { ENHANCED_MICRO_SAAS_SERVICES, getServicesByCategory, getServicesByTag } from '../data/enhancedMicroSaasServices';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Brain,
  Lock,
  Database,
  Cloud,
  Smartphone,
  Target,
  DollarSign,
  Clock,
  Star,
  ArrowRight,
  Filter,
  Search,
  ChevronDown
} from 'lucide-react';

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(ENHANCED_MICRO_SAAS_SERVICES.map(s => s.category)))];
  
  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'popularity':
        return b.price - a.price; // Higher price = more popular
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'AI & Marketing': return Target;
      case 'AI & HR': return Users;
      case 'AI & Legal': return Shield;
      case 'Cybersecurity': return Lock;
      case 'Blockchain': return Database;
      case 'IoT & Edge': return Smartphone;
      case 'AI & Finance': return DollarSign;
      case 'AI & Healthcare': return Building;
      case 'AI & Education': return Globe;
      default: return Code;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise': return 'from-purple-500 to-pink-500';
      case 'premium': return 'from-blue-500 to-cyan-500';
      case 'standard': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text text-cyan-400">Micro SAAS Solutions</span>
            <span className="block text-white mt-2">That Transform Businesses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered micro SAAS solutions designed to accelerate 
            your business growth, improve efficiency, and drive innovation across all industries.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 mb-12 border border-cyan-500/30">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {pricingOptions.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing' : pricing}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
              <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
              <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-300">
            Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-white font-semibold">{services.length}</span> services
          </p>
        </motion.div>

        {/* Services Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                            {service.pricing}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                            {service.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(service.rating)}
                    </div>
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    <div className="text-sm text-gray-400">{service.userLimit}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.slice(0, 2).map((audience, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-gray-600 pt-4">
                    <a 
                      href={service.contactInfo.website}
                      className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Start your free trial today</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-blue-400">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">{service.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                              {service.pricing}
                            </span>
                            <span className="px-3 py-1 text-sm font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                              {service.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {renderStars(service.rating)}
                            <span className="text-sm text-gray-400">
                              {service.rating} ({service.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Perfect For</h4>
                          <ul className="space-y-1">
                            {service.targetAudience.map((audience, index) => (
                              <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                                <Users className="w-3 h-3 text-purple-400" />
                                {audience}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-white/5 rounded-xl p-4 border border-gray-600">
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold text-white mb-2">
                            {formatPrice(service.price, service.pricingModel)}
                          </div>
                          <div className="text-sm text-gray-400">{service.userLimit}</div>
                        </div>
                        
                        <a 
                          href={service.contactInfo.website}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our micro SAAS solutions are designed to grow with your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Phone</p>
                <p className="text-gray-300">{services[0].contactInfo.phone}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Email</p>
                <p className="text-gray-300">{services[0].contactInfo.email}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
=======
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getSupportLevelColor(service.supportLevel)} text-white`}>
                    {service.supportLevel}
                  </span>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Price and Market Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">Market Price:</span>
                  <div className="text-sm text-gray-300">{service.marketPrice}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-cyan-400 mt-1">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits:</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <TrendingUp className="w-3 h-3 text-green-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Technology:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technology.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                  {service.technology.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                      +{service.technology.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* ROI and Delivery */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-green-400">
                  <span className="font-semibold">ROI:</span> {service.roi}
                </div>
                <div className="text-blue-400">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {service.estimatedDelivery}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">📞</span>
                    {service.contactInfo.phone}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✉️</span>
                    {service.contactInfo.email}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">🌐</span>
                    {service.contactInfo.website}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
=======
import { Link } from 'react-router-dom';
import { ENHANCED_MICRO_SAAS_SERVICES, ENHANCED_IT_SERVICES, ENHANCED_AI_SERVICES } from '../data';
import '../styles/futuristic.css';

const EnhancedServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'micro-saas' | 'it' | 'ai'>('all');

  // Get featured services from each category
  const featuredMicroSaas = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 3);
  const featuredIT = ENHANCED_IT_SERVICES.filter(service => service.featured).slice(0, 3);
  const featuredAI = ENHANCED_AI_SERVICES.filter(service => service.featured).slice(0, 3);

  const getCurrentServices = () => {
    switch (activeCategory) {
      case 'micro-saas':
        return featuredMicroSaas;
      case 'it':
        return featuredIT;
      case 'ai':
        return featuredAI;
      default:
        return [...featuredMicroSaas, ...featuredIT, ...featuredAI].slice(0, 6);
    }
  };

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'AI & Analytics': '🤖',
      'AI & Marketing': '📊',
      'AI & Customer Service': '💬',
      'AI & Sales': '💰',
      'AI & HR': '👥',
      'AI & Finance': '💳',
      'AI & Project Management': '📋',
      'AI & E-commerce': '🛒',
      'AI & Legal': '⚖️',
      'AI & Healthcare': '🏥',
      'Cloud Services': '☁️',
      'Security': '🔒',
      'DevOps': '⚙️',
      'Data & Analytics': '📈',
      'Networking': '🌐',
      'Support & Management': '🛠️',
      'Development': '💻',
      'Consulting': '💡',
      'AI & ML': '🧠'
    };
    return iconMap[category] || '🚀';
  };

  const formatPrice = (price: number, currency: string, pricingModel: string) => {
    if (pricingModel === 'hourly') {
      return `${currency}${price}/hour`;
    } else if (pricingModel === 'per-user') {
      return `${currency}${price}/user/month`;
    } else if (pricingModel === 'per-project') {
      return `${currency}${price}`;
    } else {
      return `${currency}${price}/${pricingModel}`;
    }
  };

  const currentServices = getCurrentServices();

  return (
    <section className="py-20 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-futuristic mb-6">
            Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and innovative services designed to transform your business 
            with cutting-edge AI, comprehensive IT solutions, and powerful Micro SAAS platforms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Services', icon: '🚀', count: featuredMicroSaas.length + featuredIT.length + featuredAI.length },
            { id: 'micro-saas', label: 'Micro SAAS', icon: '💻', count: featuredMicroSaas.length },
            { id: 'it', label: 'IT Services', icon: '🔧', count: featuredIT.length },
            { id: 'ai', label: 'AI Services', icon: '🤖', count: featuredAI.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`btn-futuristic ${activeCategory === tab.id ? 'neon-glow' : ''}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentServices.map((service) => (
            <div key={service.id} className="card-futuristic hover-lift group">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.category)}
                </div>
                <div className="text-right">
                  {service.featured && (
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white rounded-full mb-2">
                      Featured
                    </span>
                  )}
                  <div className="text-xl font-bold text-gradient-primary">
                    {formatPrice(service.price, service.currency, service.pricingModel)}
                  </div>
                </div>
              </div>

              {/* Service Title and Category */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-cyan-400">{service.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400">{service.subcategory}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description.length > 120 
                  ? `${service.description.substring(0, 120)}...` 
                  : service.description
                }
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {service.aiScore && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{service.aiScore}</div>
                    <div className="text-xs text-gray-400">AI Score</div>
                  </div>
                )}
                {service.rating && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{service.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                )}
                {service.marketSize && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{service.marketSize}</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </div>
                )}
                {service.roi && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                )}
              </div>

              {/* Top Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/50 text-xs text-cyan-400 rounded-full border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Top Benefit */}
              {service.benefits.length > 0 && (
                <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-xs text-gray-300">
                    <span className="text-cyan-400 font-semibold">Key Benefit:</span> {service.benefits[0]}
                  </p>
                </div>
              )}

              {/* Action Button */}
              <div className="border-t border-gray-700 pt-4">
                <button className="w-full btn-futuristic text-sm">
                  Learn More
                </button>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7c3b
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* No Results Message */}
        {sortedServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect micro SAAS solution 
              for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View All Services
              </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
            </div>
          </div>
        </div>
      </div>
    </div>
=======
        {/* View All Services Button */}
        <div className="text-center">
          <Link 
            to="/enhanced-services" 
            className="btn-futuristic inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <span>View All Services</span>
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '50+', label: 'AI Services', icon: '🤖', color: 'from-cyan-500 to-blue-500' },
            { number: '100+', label: 'Micro SAAS Solutions', icon: '💻', color: 'from-purple-500 to-pink-500' },
            { number: '25+', label: 'IT Services', icon: '🔧', color: 'from-green-500 to-cyan-500' },
            { number: '24/7', label: 'Support Available', icon: '🔄', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={index} className="card-futuristic text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7c3b
=======
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Search, Star, TrendingUp, Zap, Shield, Cloud, Brain, Link } from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES, EnhancedMicroSaasService } from '../data/enhancedMicroSaasServices';
import FuturisticNeonButton from './ui/FuturisticNeonButton';
import FuturisticMatrixBackground from './ui/FuturisticMatrixBackground';

const EnhancedServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<EnhancedMicroSaasService | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-purple to-zion-pink' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-red to-zion-orange' },
    { id: 'Cloud Infrastructure', name: 'Cloud Infrastructure', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Link, color: 'from-zion-green to-zion-emerald' }
  ];

  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isFeatured);
  const newServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isNew);
  const popularServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isPopular);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <FuturisticMatrixBackground intensity="medium" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🚀 Revolutionary Micro SAAS Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
              With Innovation
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover cutting-edge micro SAAS solutions powered by AI, quantum security, and blockchain technology. 
            Each service is designed to deliver immediate value and long-term transformation.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate-dark/50 border-zion-cyan/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-zion-slate-dark/30 border border-zion-slate-light/20">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zion-cyan data-[state=active]:to-zion-blue data-[state=active]:text-white data-[state=active]:border-zion-cyan"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">
              All Services
            </span>
          </h2>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zion-slate-light text-xl">No services found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceDetailModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  service: EnhancedMicroSaasService;
  index: number;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Analytics': 'from-zion-purple to-zion-pink',
      'Cybersecurity': 'from-zion-red to-zion-orange',
      'Cloud Infrastructure': 'from-zion-blue to-zion-cyan',
      'Blockchain & Supply Chain': 'from-zion-green to-zion-emerald',
      'AI & Content': 'from-zion-purple to-zion-pink'
    };
    return colors[category as keyof typeof colors] || 'from-zion-cyan to-zion-blue';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="bg-zion-slate-dark/50 border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group"
        onClick={onClick}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <Badge className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white border-0`}>
              {service.category}
            </Badge>
            <div className="flex gap-1">
              {service.isNew && (
                <Badge className="bg-zion-green text-white border-0 text-xs">NEW</Badge>
              )}
              {service.isPopular && (
                <Badge className="bg-zion-orange text-white border-0 text-xs">POPULAR</Badge>
              )}
            </div>
          </div>
          
          <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors duration-300">
            {service.name}
          </CardTitle>
          
          <CardDescription className="text-zion-slate-light leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-zion-cyan">
                ${service.price.monthly}
              </span>
              <span className="text-zion-slate-light">/month</span>
            </div>
            <p className="text-sm text-zion-slate-light">
              ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly)})
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-zion-slate-light/20 text-zion-slate-light border-zion-slate-light/30">
                  {feature}
                </Badge>
              ))}
              {service.features.length > 3 && (
                <Badge variant="secondary" className="text-xs bg-zion-slate-light/20 text-zion-slate-light border-zion-slate-light/30">
                  +{service.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* ROI */}
          <div className="mb-4 p-3 bg-zion-green/10 border border-zion-green/20 rounded-lg">
            <div className="flex items-center gap-2 text-zion-green">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">ROI: {service.roi}</span>
            </div>
          </div>

          {/* Action Button */}
          <FuturisticNeonButton
            variant="primary"
            size="md"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Learn More
          </FuturisticNeonButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ServiceDetailModalProps {
  service: EnhancedMicroSaasService;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-zion-slate-dark border border-zion-slate-light/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white border-0">
                {service.category}
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
              <p className="text-zion-slate-light text-lg">{service.description}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-zion-slate-light hover:text-white"
            >
              ✕
            </Button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card className="bg-zion-slate-dark/50 border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white">Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Monthly</span>
                      <span className="text-2xl font-bold text-zion-cyan">${service.price.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Yearly</span>
                      <span className="text-2xl font-bold text-zion-cyan">${service.price.yearly}</span>
                    </div>
                    <div className="text-sm text-zion-green">
                      Save ${(service.price.monthly * 12 - service.price.yearly)} annually
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-zion-slate-dark/50 border-zion-purple/30">
                <CardHeader>
                  <CardTitle className="text-white">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-purple rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-zion-slate-dark/50 border-zion-green/30">
                <CardHeader>
                  <CardTitle className="text-white">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-green rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* ROI & Implementation */}
              <Card className="bg-zion-slate-dark/50 border-zion-orange/30">
                <CardHeader>
                  <CardTitle className="text-white">ROI & Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-zion-orange font-semibold mb-2">Return on Investment</h4>
                      <p className="text-zion-slate-light">{service.roi}</p>
                    </div>
                    <div>
                      <h4 className="text-zion-orange font-semibold mb-2">Implementation Time</h4>
                      <p className="text-zion-slate-light">{service.implementationTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card className="bg-zion-slate-dark/50 border-zion-blue/30">
                <CardHeader>
                  <CardTitle className="text-white">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zion-blue/20 text-zion-blue border-zion-blue/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Integrations */}
              <Card className="bg-zion-slate-dark/50 border-zion-pink/30">
                <CardHeader>
                  <CardTitle className="text-white">Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.map((integration, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zion-pink/20 text-zion-pink border-zion-pink/30">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-zion-slate-light/20">
            <FuturisticNeonButton
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={() => window.open(service.demoUrl, '_blank')}
            >
              View Demo
            </FuturisticNeonButton>
            <FuturisticNeonButton
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={() => window.open(service.documentationUrl, '_blank')}
            >
              Documentation
            </FuturisticNeonButton>
            <FuturisticNeonButton
              variant="success"
              size="lg"
              className="flex-1"
              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`)}
            >
              Contact Sales
            </FuturisticNeonButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
  );
};

export default EnhancedServicesShowcase;