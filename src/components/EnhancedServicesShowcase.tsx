import React, { useState } from 'react';
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
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;