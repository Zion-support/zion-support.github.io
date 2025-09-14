import React, { useState } from 'react';
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
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
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
            </div>
          ))}
        </div>

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
}

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
=======
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Database,
  Smartphone,
  Code
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/enhancedServices';

interface EnhancedServicesShowcaseProps {
  showTitle?: boolean;
  maxServices?: number;
}

export function EnhancedServicesShowcase({ showTitle = true, maxServices }: EnhancedServicesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        service.category.toLowerCase().includes(activeCategory.replace('-', '').toLowerCase())
      );

  const displayServices = maxServices ? filteredServices.slice(0, maxServices) : filteredServices;

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => 
      cat.id === category || cat.name.toLowerCase().includes(category.toLowerCase())
    );
    return categoryData?.icon || '💼';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional IT & AI Services
            </h2>
            <p className="text-zion-slate-light text-xl max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive suite of cutting-edge technology solutions. 
              From AI development to IT infrastructure, we deliver results that drive growth and innovation.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                  <p className="text-zion-slate-light text-sm">Call Us</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                  <p className="text-zion-slate-light text-sm">Email Us</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-zion-cyan mb-2" />
                  <p className="text-zion-slate-light text-sm">Visit Us</p>
                  <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Categories Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger value="all" className="text-white hover:text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              All Services
            </TabsTrigger>
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-white hover:text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white"
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden md:inline">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayServices.map((service) => (
            <Card key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                    {getCategoryIcon(service.category)} {service.category}
                  </Badge>
                  {service.featured && (
                    <Badge variant="destructive" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-white/20 text-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Price:</span>
                    <span className="text-white font-bold text-lg">
                      {service.currency}{service.price?.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Availability:</span>
                    <span className="text-zion-cyan text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.availability}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Location:</span>
                    <span className="text-zion-slate-light text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {service.location}
                    </span>
                  </div>

                  {service.rating && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 mr-1" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    asChild 
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white border-0"
                  >
                    <Link to={`/services/${service.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white"
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Quote Request: ${service.title}`, '_blank')}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Tiers Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Flexible Pricing Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`bg-white/5 backdrop-blur-sm border ${
                key === 'professional' ? 'border-zion-cyan/50 bg-zion-cyan/10' : 'border-white/20'
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className={`text-2xl ${
                    key === 'professional' ? 'text-zion-cyan' : 'text-white'
                  }`}>
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-white mt-4">
                    {tier.priceRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
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
=======
                  <Button 
                    className={`w-full mt-6 ${
                      key === 'professional' 
                        ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                    }`}
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Pricing Inquiry: ${tier.name} Tier`, '_blank')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12">Why Choose Zion Tech Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light">Track record of successful implementations and measurable business impact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light">Bank-level security standards and compliance with industry regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Fast Implementation</h4>
              <p className="text-zion-slate-light">Quick deployment with minimal disruption to your business operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">AI Expertise</h4>
              <p className="text-zion-slate-light">Deep knowledge in cutting-edge AI technologies and best practices</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-12 border border-zion-cyan/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3"
                onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Business Transformation Consultation`, '_blank')}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3"
                onClick={() => window.open(`tel:${CONTACT_INFO.phone}`, '_blank')}
              >
                Call Now: {CONTACT_INFO.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
