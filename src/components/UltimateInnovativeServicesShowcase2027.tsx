import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Rocket,
  Crown,
  Award,
  Lightbulb,
  Atom,
  Lock,
  Code,
  Palette,
  Camera,
  Video,
  FileText,
  ShoppingCart,
  Building,
  Factory,
  Truck,
  Package,
  Search,
  Filter,
  Grid,
  List,
  Play,
  Pause,
  Volume2,
  Maximize2,
  Minimize2,
  RotateCcw,
  Settings,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  User,
  Users2,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserTag,
  UserCheck3,
  UserCheck4,
  UserCheck5,
  UserCheck6,
  UserCheck7,
  UserCheck8,
  UserCheck9,
  UserCheck10,
  X
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '../data/ultimateInnovativeServices2027';

export function UltimateInnovativeServicesShowcase2027() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'innovation' | 'roi' | 'name'>('innovation');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ultimate-services-showcase-2027');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple' },
    { id: 'AI & Financial Technology', name: 'AI & FinTech', icon: <DollarSign className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Consciousness Research', name: 'AI Consciousness', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Business Automation', name: 'Business AI', icon: <Building className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Web3', icon: <Network className="h-5 w-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'Healthcare Technology', name: 'Health Tech', icon: <Heart className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Cybersecurity', name: 'Security', icon: <Shield className="h-5 w-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'Emerging Technology', name: 'Emerging Tech', icon: <Rocket className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Business Solutions', name: 'Business', icon: <Briefcase className="h-5 w-5" />, color: 'from-teal-500 to-cyan-500' },
    { id: 'AI & Content Creation', name: 'Content AI', icon: <FileText className="h-5 w-5" />, color: 'from-yellow-500 to-amber-500' }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2027
    .filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          const innovationOrder = { 'Revolutionary': 3, 'Breakthrough': 2, 'Advanced': 1 };
          return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
                 (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
        case 'roi':
          return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Financial Technology': return <DollarSign className="h-6 w-6" />;
      case 'AI & Consciousness Research': return <Brain className="h-6 w-6" />;
      case 'AI & Business Automation': return <Building className="h-6 w-6" />;
      case 'Blockchain & Web3': return <Network className="h-6 w-6" />;
      case 'Healthcare Technology': return <Heart className="h-6 w-6" />;
      case 'Cybersecurity': return <Shield className="h-6 w-6" />;
      case 'Emerging Technology': return <Rocket className="h-6 w-6" />;
      case 'Business Solutions': return <Briefcase className="h-6 w-6" />;
      case 'AI & Content Creation': return <FileText className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getInnovationBadge = (level: string) => {
    const badges = {
      'Revolutionary': { color: 'from-purple-500 to-pink-500', icon: <Crown className="h-4 w-4" /> },
      'Breakthrough': { color: 'from-blue-500 to-cyan-500', icon: <Award className="h-4 w-4" /> },
      'Advanced': { color: 'from-green-500 to-emerald-500', icon: <Star className="h-4 w-4" /> }
    };
    const badge = badges[level as keyof typeof badges] || badges['Advanced'];
    
    return (
      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${badge.color} text-white text-xs font-medium`}>
        {badge.icon}
        {level}
      </div>
    );
  };

  return (
    <section id="ultimate-services-showcase-2027" className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-zion-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Ultimate <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Innovative Services</span> 2027
            </h2>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge micro SAAS, IT, and AI services that are revolutionizing industries and driving the future of technology.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>

              <div className="flex bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${
                viewMode === 'grid' 
                  ? 'bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20'
                  : 'bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20'
              }`}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl border border-zion-cyan/30">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{service.category}</p>
                  </div>
                </div>
                {getInnovationBadge(service.innovationLevel)}
              </div>

              {/* Service Description */}
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Details */}
              <div className="space-y-4 mb-6">
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Starting Price:</span>
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light">/{service.pricingModel}</span>
                  </span>
                </div>

                {/* ROI */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Expected ROI:</span>
                  <span className="text-lg font-semibold text-green-400">{service.roi}</span>
                </div>

                {/* Delivery */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Delivery Time:</span>
                  <span className="text-zion-slate-light">{service.estimatedDelivery}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-zion-slate-light text-sm">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6 p-4 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/20">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-zion-cyan" />
                  Contact & Pricing
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="h-3 w-3 text-zion-cyan" />
                    {service.contactInfo.phone}
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-3 w-3 text-zion-cyan" />
                    {service.contactInfo.email}
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="h-3 w-3 text-zion-cyan" />
                    <a 
                      href={service.contactInfo.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedService(service.id)}
                  className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-3 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  Learn More
                </button>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="px-4 py-3 border border-zion-cyan/50 text-zion-cyan rounded-xl font-medium hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-zion-slate-light text-lg">
              No services found matching your criteria. Try adjusting your search or filters.
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-medium hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>

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
              className="bg-zion-slate-dark border border-zion-cyan/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = ULTIMATE_INNOVATIVE_SERVICES_2027.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-zion-slate-light hover:text-white transition-colors duration-300"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                        <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between">
                            <span className="text-zion-slate-light">Category:</span>
                            <span className="text-white">{service.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-light">Innovation Level:</span>
                            {getInnovationBadge(service.innovationLevel)}
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-light">Expected ROI:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-light">Delivery Time:</span>
                            <span className="text-white">{service.estimatedDelivery}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                        <ul className="space-y-2 mb-6">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                              <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.useCases.map((useCase, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                              {useCase}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                        {service.technicalSpecs && (
                          <div className="space-y-3 mb-6">
                            <div>
                              <span className="text-zion-slate-light">Technology:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {service.technicalSpecs.technology.map((tech, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-purple rounded text-xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="text-zion-slate-light">Uptime:</span>
                              <span className="text-white ml-2">{service.technicalSpecs.uptime}</span>
                            </div>
                            <div>
                              <span className="text-zion-slate-light">API Endpoints:</span>
                              <span className="text-white ml-2">{service.technicalSpecs.apiEndpoints}</span>
                            </div>
                          </div>
                        )}

                        <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-4">
                          <h4 className="text-white font-semibold mb-3">Get Started</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <Phone className="h-4 w-4 text-zion-cyan" />
                              {service.contactInfo.phone}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <Mail className="h-4 w-4 text-zion-cyan" />
                              {service.contactInfo.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <MapPin className="h-4 w-4 text-zion-cyan" />
                              {service.contactInfo.address}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}