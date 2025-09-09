import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Rocket, 
  Globe, 
  Cpu,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2027 } from '../data/advancedInnovativeServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '../data/emergingTechServices2027';

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
    address: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
    compliance: string[];
  };
  competitors: string[];
  marketTrend: string;
  pricingTiers?: {
    starter: number;
    professional: number;
    enterprise: number;
  };
}

const AdvancedServicesShowcase2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices: Service[] = useMemo(() => {
    return [...ADVANCED_INNOVATIVE_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(allServices.map(service => service.category))];
    return cats;
  }, [allServices]);

  // Get unique innovation levels
  const innovationLevels = useMemo(() => {
    const levels = ['all', ...new Set(allServices.map(service => service.innovationLevel))];
    return levels;
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'roi':
        filtered.sort((a, b) => parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]));
        break;
      case 'delivery':
        filtered.sort((a, b) => parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]));
        break;
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedInnovationLevel, sortBy]);

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Edge Computing':
        return <Zap className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Brain className="w-5 h-5" />;
      case 'Blockchain':
        return <Globe className="w-5 h-5" />;
      case 'Sustainability':
        return <TrendingUp className="w-5 h-5" />;
      case 'Healthcare':
        return <Star className="w-5 h-5" />;
      case 'FinTech':
        return <DollarSign className="w-5 h-5" />;
      case 'EdTech':
        return <Users className="w-5 h-5" />;
      case 'Smart Cities':
        return <Target className="w-5 h-5" />;
      case 'Analytics':
        return <BarChart3 className="w-5 h-5" />;
      case 'Space Technology':
        return <Rocket className="w-5 h-5" />;
      case 'Autonomous Systems':
        return <Cpu className="w-5 h-5" />;
      case 'AR/VR':
        return <Globe className="w-5 h-5" />;
      case 'Neuromorphic Computing':
        return <Brain className="w-5 h-5" />;
      case 'Synthetic Biology':
        return <Star className="w-5 h-5" />;
      case 'Advanced Materials':
        return <Zap className="w-5 h-5" />;
      case 'Digital Twin':
        return <Globe className="w-5 h-5" />;
      case 'Energy':
        return <Zap className="w-5 h-5" />;
      case 'Manufacturing':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced Technology
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of micro SAAS, IT, and AI services that are revolutionizing industries and driving digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Phone className="inline w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-lg hover:text-zion-slate-light transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-lg hover:text-zion-slate-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Address</p>
              <p className="text-lg">364 E Main St STE 1008</p>
              <p className="text-lg">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Innovation Level Filter */}
            <select
              value={selectedInnovationLevel}
              onChange={(e) => setSelectedInnovationLevel(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {innovationLevels.map(level => (
                <option key={level} value={level} className="bg-zion-slate-dark text-white">
                  {level === 'all' ? 'All Innovation Levels' : level}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="name" className="bg-zion-slate-dark text-white">Sort by Name</option>
              <option value="price-low" className="bg-zion-slate-dark text-white">Price: Low to High</option>
              <option value="price-high" className="bg-zion-slate-dark text-white">Price: High to Low</option>
              <option value="roi" className="bg-zion-slate-dark text-white">ROI: High to Low</option>
              <option value="delivery" className="bg-zion-slate-dark text-white">Delivery: Fast to Slow</option>
            </select>
          </div>

          <div className="text-center">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-zion-slate-light text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>+{service.features.length - 3} more features</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Benefits
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI and Market Info */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-zion-slate-light text-xs">ROI</p>
                    <p className="text-zion-cyan font-bold text-lg">{service.roi}</p>
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-xs">Market Price</p>
                    <p className="text-zion-purple font-bold text-sm">{service.marketPrice}</p>
                  </div>
                </div>
              </div>

              {/* Contact and Action */}
              <div className="space-y-3">
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="inline w-4 h-4 mr-2" />
                  Get Started
                </a>
                
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo.email}`}
                    className="flex-1 bg-white/10 text-white py-2 px-3 rounded-lg text-center text-sm hover:bg-white/20 transition-colors"
                  >
                    <Mail className="inline w-4 h-4 mr-1" />
                    Email
                  </a>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 text-white py-2 px-3 rounded-lg text-center text-sm hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="inline w-4 h-4 mr-1" />
                    Website
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedInnovationLevel('all');
              }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team of experts is ready to help you implement cutting-edge technology solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+13024640950"
              className="bg-white text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              <Phone className="inline w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Mail className="inline w-5 h-5 mr-2" />
              Send Email
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedServicesShowcase2027;