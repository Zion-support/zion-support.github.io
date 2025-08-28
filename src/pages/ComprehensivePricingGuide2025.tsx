import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Calculator,
  BarChart3,
  Target,
  Zap,
  Shield,
  Brain,
  Cpu,
  Database,
  Network,
  Rocket,
  Users,
  Code,
  Server,
  Chip,
  Globe,
  Lock,
  ShieldCheck
} from 'lucide-react';
import { COMPREHENSIVE_REAL_SERVICES_2025 } from '../data/comprehensiveRealServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortBy, setSortBy] = useState('price');

  const allServices = COMPREHENSIVE_REAL_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Customer Service', name: 'AI & Customer Service', icon: '💬', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Project Management', name: 'AI & Project Management', icon: '📋', color: 'from-zion-blue to-zion-green' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: '📢', color: 'from-zion-orange to-zion-yellow' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '').split('-')[0]) - parseInt(a.roi.replace('%', '').split('-')[0]);
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : a.innovationLevel === 'Revolutionary' ? -1 : 0;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return <Brain className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'AI & Healthcare': return <Users className="w-6 h-6" />;
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Network className="w-6 h-6" />;
      case 'AI & Content': return <Code className="w-6 h-6" />;
      case 'AI & Customer Service': return <Users className="w-6 h-6" />;
      case 'AI & HR': return <Users className="w-6 h-6" />;
      case 'AI & Project Management': return <Code className="w-6 h-6" />;
      case 'AI & Marketing': return <BarChart3 className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    }
  };

  const getInnovationBadge = (level: string) => {
    const colors = {
      'Advanced': 'bg-blue-500',
      'Cutting-edge': 'bg-purple-500',
      'Revolutionary': 'bg-red-500'
    };
    return (
      <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${colors[level as keyof typeof colors] || 'bg-gray-500'}`}>
        {level}
      </span>
    );
  };

  const totalValue = allServices.reduce((sum, service) => sum + service.price, 0);
  const avgROI = allServices.reduce((sum, service) => {
    const roi = parseInt(service.roi.replace('%', '').split('-')[0]);
    return sum + roi;
  }, 0) / allServices.length;

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-24 text-white">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Comprehensive Pricing Guide 2025
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
            >
              Transparent pricing for our revolutionary AI and technology services. 
              Discover the true value and ROI of each solution with detailed cost breakdowns.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm mb-8"
            >
              <a href="tel:+13024640950" className="flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 transition-all">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 transition-all">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <a href="/request-quote" className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all">
                <Calculator className="w-4 h-4 mr-2" />
                Get Custom Quote
              </a>
            </motion.div>

            {/* Company Address */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-2xl p-6 border border-white/10 text-center"
          >
            <DollarSign className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Total Service Value</h3>
            <p className="text-4xl font-bold text-cyan-400">${totalValue.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Combined monthly value of all services</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark rounded-2xl p-6 border border-white/10 text-center"
          >
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Average ROI</h3>
            <p className="text-4xl font-bold text-green-400">{Math.round(avgROI)}%</p>
            <p className="text-gray-400 text-sm">Typical return on investment</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-dark rounded-2xl p-6 border border-white/10 text-center"
          >
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Service Categories</h3>
            <p className="text-4xl font-bold text-yellow-400">{categories.length - 1}</p>
            <p className="text-gray-400 text-sm">Specialized technology domains</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white border-transparent'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
              <option value="innovation">Sort by Innovation</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Price Range Slider */}
          <div className="mt-8">
            <label className="block text-white font-semibold mb-4">Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all hover:transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    {getInnovationBadge(service.innovationLevel)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Pricing Information */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <div className="text-sm text-green-400 font-semibold">
                    ROI: {service.roi}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                  <div>
                    <span className="text-cyan-400">Market Price:</span>
                    <p>{service.marketPrice}</p>
                  </div>
                  <div>
                    <span className="text-cyan-400">Delivery:</span>
                    <p>{service.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-300">
                      <TrendingUp className="w-3 h-3 mr-2 text-blue-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact and CTA */}
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href={`mailto:${service.contactInfo.email}`}
                  className="flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
                <a
                  href="/request-quote"
                  className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Get Custom Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution or Special Pricing?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our pricing is transparent and competitive. For enterprise solutions, volume discounts, or custom implementations, 
              contact us directly to discuss your specific requirements and receive a personalized quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white font-semibold transition-all text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email for Quote
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ziontechgroup.com</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ComprehensivePricingGuide2025;