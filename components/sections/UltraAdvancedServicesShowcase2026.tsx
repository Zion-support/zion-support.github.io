import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Target,
  ArrowRight, Star, Zap, Users, Award, Globe, Search,
  Filter, ChevronDown, ExternalLink, Sparkles, Eye,
  Lock, Clock, CheckCircle, TrendingUp, DollarSign, Phone,
  Mail, MapPin, Building, Lightbulb, Code, Database, ShoppingBag, Grid, List, X
} from 'lucide-react';

// Import all service data
import { advancedAIAutonomousEcosystemServices } from '../../data/2026-advanced-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices } from '../../data/2026-emerging-tech-breakthrough-services';
import { specializedIndustrySolutions } from '../../data/2026-specialized-industry-solutions-v3';
import { innovativeRealMicroSaasServices2025 } from '../../data/2025-innovative-real-micro-saas-services';
import { advancedMicroSaasServices2026 } from '../../data/2026-advanced-micro-saas-expansion';

const UltraAdvancedServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [displayCount, setDisplayCount] = useState(30);
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [
    ...advancedAIAutonomousEcosystemServices,
    ...emergingTechBreakthroughServices,
    ...specializedIndustrySolutions,
    ...innovativeRealMicroSaasServices2025,
    ...advancedMicroSaasServices2026
  ];

  // Enhanced categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'it', name: 'IT & Infrastructure', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Automation')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'fintech', name: 'Fintech & Finance', icon: <DollarSign className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Fintech') || s.category.includes('Financial')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length },
    { id: 'retail', name: 'Retail & E-commerce', icon: <ShoppingBag className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Retail') || s.category.includes('E-commerce')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/15 transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedService(service)}
    >
      <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
      
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{service.icon}</div>
        {service.popular && (
          <div className="flex items-center gap-1 text-xs text-yellow-400">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-sm text-white/70 mb-4 line-clamp-2">
        {service.tagline}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-cyan-400">
          {service.price}
          <span className="text-sm text-white/60">{service.period}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-white/60">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          {service.rating}
          <span className="text-xs">({service.reviews})</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature: string, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs text-white/70">
            <CheckCircle className="w-3 h-3 text-green-400" />
            {feature}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-white/50">
          {service.trialDays} days free trial
        </div>
        <div className="flex items-center gap-1 text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors">
          Learn more <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );

  const ServiceModal = ({ service, onClose }: { service: any; onClose: () => void }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/20 p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">{service.icon}</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
              <p className="text-xl text-white/80 mb-4">{service.tagline}</p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>Category: {service.category}</span>
                <span>Setup: {service.setupTime}</span>
                <span>Trial: {service.trialDays} days</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-cyan-400">
                {service.price}
                <span className="text-lg text-white/60">{service.period}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-yellow-400 mt-2">
                <Star className="w-4 h-4 fill-current" />
                {service.rating} ({service.reviews} reviews)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Description</h3>
              <p className="text-white/80 mb-6">{service.description}</p>
              
              <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
              <div className="space-y-2 mb-6">
                {service.benefits?.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {benefit}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">ROI & Impact</h3>
              <p className="text-white/80 mb-6">{service.roi}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              <div className="space-y-2 mb-6">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technology.map((tech: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Market Position</h3>
              <p className="text-white/80 mb-6">{service.marketPosition}</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Market Size</h4>
                <p className="text-white/70">{service.marketSize}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Growth Rate</h4>
                <p className="text-white/70">{service.growthRate}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Customers</h4>
                <p className="text-white/70">{service.customers} active users</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {contactInfo.mobile}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </div>
            </div>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
            >
              Get Started <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge AI, emerging technology, and specialized industry solutions designed to transform your business
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                {contactInfo.mobile}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                {contactInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                {contactInfo.address}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
              >
                Visit Website <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>

        {/* Filters and Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  {category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredServices.slice(0, displayCount).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Load More */}
        {displayCount < filteredServices.length && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount(displayCount + 12)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
            >
              Load More Services
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
            <div className="text-white/70">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-white/70">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
            <div className="text-white/70">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-white/70">Support Available</div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default UltraAdvancedServicesShowcase2026;