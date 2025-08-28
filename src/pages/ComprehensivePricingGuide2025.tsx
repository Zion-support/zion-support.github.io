import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Scale,
  Heart,
  Leaf,
  Eye,
  Atom,
  Building2,
  Car,
  Home,
  Factory,
  City,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Users as UsersIcon,
  Zap as ZapIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('price');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-violet' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀', color: 'from-zion-indigo to-zion-purple' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-500 bg-purple-100/20';
      case 'Cutting-edge': return 'text-blue-500 bg-blue-100/20';
      case 'Advanced': return 'text-green-500 bg-green-100/20';
      case 'Practical': return 'text-orange-500 bg-orange-100/20';
      default: return 'text-gray-500 bg-gray-100/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                {" "}Pricing Guide 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our complete portfolio of AI-powered micro SAAS services. 
              Compare features, ROI, and market positioning to find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="text-white">Transparent Pricing</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <TrendingUp className="w-5 h-5" />
                <span className="text-white">ROI Analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Scale className="w-5 h-5" />
                <span className="text-white">Market Comparison</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Pricing Overview</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Entry Level</h3>
              <p className="text-gray-300">Starting from $899/month</p>
              <p className="text-sm text-gray-400">Perfect for startups and small businesses</p>
            </div>
            <div className="text-center">
              <Scale className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
              <p className="text-gray-300">$1,999 - $3,999/month</p>
              <p className="text-sm text-gray-400">Ideal for growing companies</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-gray-300">$4,999 - $9,999/month</p>
              <p className="text-sm text-gray-400">For large organizations</p>
            </div>
            <div className="text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom</h3>
              <p className="text-gray-300">$10,000+/month</p>
              <p className="text-sm text-gray-400">Tailored enterprise solutions</p>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mt-6">
            <label className="block text-white text-sm font-medium mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                  <div className="flex items-center text-zion-cyan">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">Premium</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-400">/month</span>
                  </span>
                  <span className="text-green-400 font-semibold">{service.roi} ROI</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.features.length > 3 && (
                  <p className="text-xs text-gray-400 mt-2">
                    +{service.features.length - 3} more features
                  </p>
                )}
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Market Analysis:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Market Price:</span>
                    <p className="text-zion-cyan font-medium">{service.marketPrice}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <p className="text-white">{service.marketSize}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Delivery: {service.estimatedDelivery} • Support: {service.supportLevel}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="w-full bg-zion-cyan hover:bg-zion-blue text-white text-center py-3 px-4 rounded-lg font-medium transition-colors block"
                >
                  Get Started
                </a>
                <a
                  href="tel:+13024640950"
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors block"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote for your business transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-blue text-white font-semibold rounded-lg transition-colors inline-flex items-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2025;