import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Zap,
  Brain,
  Shield,
  Heart,
  Factory,
  Rocket,
  Atom,
  Cpu,
  Globe as GlobeIcon,
  Users,
  Code,
  ShoppingCart,
  Building,
  Truck,
  Satellite,
  Heart as HeartIcon,
  Scale,
  Factory as FactoryIcon,
  Satellite as SatelliteIcon,
  ShoppingCart as ShoppingCartIcon,
  Building as BuildingIcon,
  Truck as TruckIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_EXPANSION_V4 } from '../data/2025-comprehensive-services-expansion-v4';
import { SPECIALIZED_INNOVATIVE_SERVICES_V2 } from '../data/2025-specialized-innovative-services-v2';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

const UltimateComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Combine all services
  const allServices: Service[] = [
    ...COMPREHENSIVE_SERVICES_EXPANSION_V4,
    ...SPECIALIZED_INNOVATIVE_SERVICES_V2
  ];

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, count: allServices.length },
    { id: 'Legal Technology', name: 'Legal Technology', icon: Scale, count: allServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Healthcare AI', name: 'Healthcare AI', icon: Heart, count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Code, count: allServices.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'Financial AI', name: 'Financial AI', icon: DollarSign, count: allServices.filter(s => s.category === 'Financial AI').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, count: allServices.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'AI Content & Marketing', name: 'AI Content & Marketing', icon: Code, count: allServices.filter(s => s.category === 'AI Content & Marketing').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'HR & Talent', name: 'HR & Talent', icon: Users, count: allServices.filter(s => s.category === 'HR & Talent').length },
    { id: 'Edge AI', name: 'Edge AI', icon: Cpu, count: allServices.filter(s => s.category === 'Edge AI').length },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic Computing', icon: Brain, count: allServices.filter(s => s.category === 'Neuromorphic Computing').length },
    { id: 'Synthetic Biology', name: 'Synthetic Biology', icon: HeartIcon, count: allServices.filter(s => s.category === 'Synthetic Biology').length },
    { id: 'Advanced Robotics', name: 'Advanced Robotics', icon: Rocket, count: allServices.filter(s => s.category === 'Advanced Robotics').length },
    { id: 'Advanced Materials', name: 'Advanced Materials', icon: Factory, count: allServices.filter(s => s.category === 'Advanced Materials').length },
    { id: 'Advanced Energy', name: 'Advanced Energy', icon: Zap, count: allServices.filter(s => s.category === 'Advanced Energy').length },
    { id: 'Advanced Transportation', name: 'Advanced Transportation', icon: Truck, count: allServices.filter(s => s.category === 'Advanced Transportation').length },
    { id: 'Advanced Communication', name: 'Advanced Communication', icon: GlobeIcon, count: allServices.filter(s => s.category === 'Advanced Communication').length },
    { id: 'Advanced Manufacturing', name: 'Advanced Manufacturing', icon: FactoryIcon, count: allServices.filter(s => s.category === 'Advanced Manufacturing').length },
    { id: 'Advanced Gaming', name: 'Advanced Gaming', icon: Code, count: allServices.filter(s => s.category === 'Advanced Gaming').length },
    { id: 'Brain-Computer Interface', name: 'Brain-Computer Interface', icon: Brain, count: allServices.filter(s => s.category === 'Brain-Computer Interface').length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$1,000 - $3,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$3,000 - $6,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$6,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'roi', name: 'ROI' },
    { id: 'innovation', name: 'Innovation Level' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      let matchesPrice = true;
      if (selectedPriceRange === 'budget') {
        matchesPrice = service.price >= 1000 && service.price < 3000;
      } else if (selectedPriceRange === 'mid-range') {
        matchesPrice = service.price >= 3000 && service.price < 6000;
      } else if (selectedPriceRange === 'enterprise') {
        matchesPrice = service.price >= 6000;
      }

      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'innovation':
          const innovationOrder = { 'Advanced': 1, 'Cutting-Edge': 2 };
          return (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0) - 
                 (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || Zap;
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Cutting-Edge':
        return 'from-purple-500 to-pink-500';
      case 'Advanced':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-green-500 to-blue-500';
    }
  };

  const getSupportColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-500';
      case 'premium':
        return 'bg-blue-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Ultimate Services Portfolio 2025
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive portfolio of {allServices.length}+ cutting-edge micro SAAS solutions, 
            IT services, and AI-powered innovations designed to transform your business and drive competitive advantage
          </motion.p>

          {/* Key Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{categories.length - 1}</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Price and Sort Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id} className="bg-slate-800">
                  {range.name} - {range.range}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-slate-800">
                  {option.name}
                </option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getInnovationColor(service.innovationLevel)}`}>
                                              {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSupportColor(service.supportLevel)}`}>
                        {service.supportLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">/{service.pricingModel}</div>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Innovation Level */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} text-white`}>
                    <Star className="w-4 h-4 mr-1" />
                    {service.innovationLevel}
                  </span>
                </div>

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    ROI: {service.roi}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    {service.estimatedDelivery}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Market: {service.marketPrice}
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with our experts to discuss how our innovative solutions can drive your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-blue-400">
              <Phone className="w-6 h-6" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-cyan-400">
              <Mail className="w-6 h-6" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-green-400">
              <Globe className="w-6 h-6" />
              <span>ziontechgroup.com</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <p className="text-gray-300 mb-4">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p className="text-gray-300">
              Discover our comprehensive portfolio of {allServices.length}+ innovative services designed to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-300">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Service Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Pricing & ROI */}
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Pricing & ROI</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Price:</span>
                          <span className="text-blue-400 font-semibold">
                            {selectedService.currency}{selectedService.price.toLocaleString()}/{selectedService.pricingModel}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Market Price:</span>
                          <span className="text-gray-400">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">ROI:</span>
                          <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Delivery:</span>
                          <span className="text-gray-400">{selectedService.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Use Cases */}
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                      <div className="space-y-2">
                        {selectedService.useCases.map((useCase, idx) => (
                          <div key={idx} className="text-gray-300 text-sm">
                            • {useCase}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Target Audience</h3>
                      <div className="space-y-2">
                        {selectedService.targetAudience.map((audience, idx) => (
                          <div key={idx} className="text-gray-300 text-sm">
                            • {audience}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    {selectedService.technicalSpecs && (
                      <div className="bg-slate-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications</h3>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div><strong>Technology:</strong> {selectedService.technicalSpecs.technology.join(', ')}</div>
                          <div><strong>Uptime:</strong> {selectedService.technicalSpecs.uptime}</div>
                          <div><strong>API Endpoints:</strong> {selectedService.technicalSpecs.apiEndpoints}</div>
                          <div><strong>Security:</strong> {selectedService.technicalSpecs.security.join(', ')}</div>
                        </div>
                      </div>
                    )}

                    {/* Market Info */}
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Market Information</h3>
                      <div className="space-y-2 text-sm text-gray-300">
                        {selectedService.marketSize && (
                          <div><strong>Market Size:</strong> {selectedService.marketSize}</div>
                        )}
                        {selectedService.competitors && (
                          <div><strong>Competitors:</strong> {selectedService.competitors.join(', ')}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-6 border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 text-blue-400">
                      <Phone className="w-5 h-5" />
                      <span>{selectedService.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-cyan-400">
                      <Mail className="w-5 h-5" />
                      <span>{selectedService.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-400">
                      <Globe className="w-5 h-5" />
                      <span>{selectedService.contactInfo.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UltimateComprehensiveServicesShowcase;