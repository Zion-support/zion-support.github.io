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
  Building,
  Award,
  Lightbulb,
  Gauge,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  FileText,
  FileImage,
  Video,
  MessageCircle,
  ShoppingCart,
  Bell,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Download,
  Upload,
  Share,
  MoreHorizontal,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  Save,
  PlusCircle,
  MinusCircle,
  XCircle,
  AlertCircle,
  Info,
  Check,
  X as XIcon
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '../data/ultimateInnovativeServices2027';
import { COMPREHENSIVE_PRICING_GUIDE_2027 } from '../data/comprehensivePricingGuide2027';

export function UltimateServicesShowcase2027() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ultimate-services-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple' },
    { id: 'Quantum AI & Business Automation', name: 'Quantum AI Business', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Cybersecurity', name: 'AI Security', icon: <Shield className="h-5 w-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'AI & Research', name: 'AI Research', icon: <Search className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum AI & Financial Technology', name: 'Quantum FinTech', icon: <DollarSign className="h-5 w-5" />, color: 'from-yellow-500 to-amber-500' },
    { id: 'AI & Healthcare', name: 'AI Healthcare', icon: <Heart className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'AI & Manufacturing', name: 'AI Manufacturing', icon: <Cpu className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Quantum AI & Edge Computing', name: 'Quantum Edge', icon: <Zap className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Legal Technology', name: 'AI Legal', icon: <BookOpen className="h-5 w-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Education', name: 'AI Education', icon: <GraduationCap className="h-5 w-5" />, color: 'from-teal-500 to-cyan-500' },
    { id: 'Quantum AI & Content Creation', name: 'Quantum Content', icon: <FileText className="h-5 w-5" />, color: 'from-violet-500 to-purple-500' }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2027
    .filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price;
        case 'innovation':
          return b.price - a.price; // Higher price = more innovative
        case 'roi':
          const aROI = parseInt(a.roi.replace('%', ''));
          const bROI = parseInt(b.roi.replace('%', ''));
          return bROI - aROI;
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI & Business Automation': return <Brain className="h-6 w-6" />;
      case 'AI & Cybersecurity': return <Shield className="h-6 w-6" />;
      case 'AI & Research': return <Search className="h-6 w-6" />;
      case 'Quantum AI & Financial Technology': return <DollarSign className="h-6 w-6" />;
      case 'AI & Healthcare': return <Heart className="h-6 w-6" />;
      case 'AI & Manufacturing': return <Cpu className="h-6 w-6" />;
      case 'Quantum AI & Edge Computing': return <Zap className="h-6 w-6" />;
      case 'AI & Legal Technology': return <BookOpen className="h-6 w-6" />;
      case 'AI & Education': return <GraduationCap className="h-6 w-6" />;
      case 'Quantum AI & Content Creation': return <FileText className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getServicePricing = (serviceId: string) => {
    return COMPREHENSIVE_PRICING_GUIDE_2027.find(pricing => pricing.serviceId === serviceId);
  };

  return (
    <section id="ultimate-services-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-blue rounded-full animate-pulse delay-1500"></div>
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
              Ultimate <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Innovative Services</span> 2027
            </h2>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the future of technology with our revolutionary quantum AI, autonomous systems, and cutting-edge solutions. 
            Transform your business with zero human error and 24/7 autonomous operation.
          </p>
          
          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6 border border-zion-cyan/30"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">{MARKET_ANALYSIS_2027.totalMarketSize}</div>
              <div className="text-zion-slate-light">Total Market Size</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-zion-purple/20 to-zion-pink/20 rounded-xl p-6 border border-zion-purple/30"
            >
              <div className="text-3xl font-bold text-zion-purple mb-2">{MARKET_ANALYSIS_2027.growthRate}</div>
              <div className="text-zion-slate-light">Annual Growth Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-zion-green/20 to-zion-emerald/20 rounded-xl p-6 border border-zion-green/30"
            >
              <div className="text-3xl font-bold text-zion-green mb-2">10+</div>
              <div className="text-zion-slate-light">Service Categories</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-slate-light/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <label className="text-zion-slate-light">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="innovation">Innovation Level</option>
                <option value="price">Price</option>
                <option value="roi">ROI</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70 hover:text-white'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => {
            const pricing = getServicePricing(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/60 rounded-2xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zion-slate-light">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-zion-slate-light">{service.innovationLevel}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded-lg border border-zion-slate-light/20"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-lg border border-zion-cyan/30">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing and ROI */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-zion-slate-light">/month</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-zion-green">ROI: {service.roi}</span>
                    <span className="text-zion-slate-light">•</span>
                    <span className="text-zion-slate-light">{service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Market Comparison */}
                {pricing && (
                  <div className="mb-4 p-3 bg-zion-slate-dark/30 rounded-lg border border-zion-slate-light/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">Market Price:</span>
                      <span className="text-zion-purple font-semibold">{pricing.marketPricing.currency}{pricing.marketPricing.average.toLocaleString()}/month</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-zion-slate-light">You Save:</span>
                      <span className="text-zion-green font-semibold">
                        ${((pricing.marketPricing.average - service.price) / pricing.marketPricing.average * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-4 py-2 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Contact
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-zion-slate-light/20">
                  <div className="flex items-center justify-between text-xs text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      {service.contactInfo.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      {service.contactInfo.email}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            className="text-center py-12"
          >
            <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. Get started today and experience 
              the power of autonomous AI, quantum computing, and zero human error.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-pricing-guide"
                className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-8 py-3 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BarChart3 className="h-5 w-5" />
                View Pricing Guide
              </Link>
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-zion-slate-dark rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = ULTIMATE_INNOVATIVE_SERVICES_2027.find(s => s.id === selectedService);
                const pricing = getServicePricing(selectedService);
                
                if (!service) return null;

                return (
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                        <p className="text-zion-slate-light">{service.category}</p>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-zion-slate-light/20 rounded-lg transition-colors duration-200"
                      >
                        <XIcon className="h-6 w-6 text-zion-slate-light" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Service Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                        <p className="text-zion-slate-light mb-4">{service.description}</p>

                        <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                              <CheckCircle className="h-4 w-4 text-zion-green flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                        <ul className="space-y-2 mb-4">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                              <TrendingUp className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing and Technical Details */}
                      <div>
                        {pricing && (
                          <>
                            <h3 className="text-lg font-semibold text-white mb-3">Pricing Plans</h3>
                            <div className="space-y-3 mb-6">
                              {Object.entries(pricing.ourPricing).map(([tier, plan]) => (
                                <div
                                  key={tier}
                                  className={`p-3 rounded-lg border ${
                                    plan.popular
                                      ? 'border-zion-cyan bg-zion-cyan/10'
                                      : 'border-zion-slate-light/30 bg-zion-slate-dark/30'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-white">{plan.name}</span>
                                    {plan.popular && (
                                      <span className="px-2 py-1 bg-zion-cyan text-white text-xs rounded-full">
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-2xl font-bold text-zion-cyan mb-2">
                                    ${plan.price.toLocaleString()}/month
                                  </div>
                                  <div className="text-sm text-zion-slate-light mb-2">
                                    Best for: {plan.bestFor}
                                  </div>
                                  <ul className="space-y-1">
                                    {plan.features.slice(0, 3).map((feature, idx) => (
                                      <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                                        <CheckCircle className="h-3 w-3 text-zion-green flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications</h3>
                        {service.technicalSpecs && (
                          <div className="space-y-3 mb-4">
                            <div>
                              <span className="text-sm font-medium text-zion-slate-light">Technology:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {service.technicalSpecs.technology.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded-lg border border-zion-slate-light/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-zion-slate-light">Uptime:</span>
                              <span className="text-zion-green ml-2">{service.technicalSpecs.uptime}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-zion-slate-light">API Endpoints:</span>
                              <span className="text-zion-cyan ml-2">{service.technicalSpecs.apiEndpoints}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <Link
                            to={`/contact?service=${service.id}`}
                            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 text-center"
                          >
                            Get Started
                          </Link>
                          <a
                            href={service.contactInfo.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-4 py-2 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                          >
                            Learn More
                          </a>
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

// Helper component for graduation cap icon
function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}