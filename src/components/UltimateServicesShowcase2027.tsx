import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart, 
  PanelLeft, 
  ShoppingCart, 
  Settings, 
  HelpCircle, 
  BookOpen, 
  Briefcase, 
  Award, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Bluetooth, 
  Satellite, 
  Atom, 
  Dna, 
  Microscope, 
  Flask, 
  TestTube, 
  Syringe, 
  Stethoscope, 
  HeartPulse, 
  BrainCircuit, 
  Eye, 
  Ear, 
  Hand, 
  Foot, 
  Bone, 
  Tooth, 
  Pill, 
  Bandage, 
  Thermometer, 
  Scale, 
  Calculator, 
  ChartBar, 
  PieChart, 
  LineChart, 
  Activity, 
  TrendingDown, 
  Minus, 
  Plus, 
  Equal, 
  Divide, 
  Percent, 
  DollarSign, 
  Euro, 
  Pound, 
  Yen, 
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
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  X
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '../data/ultimateInnovativeServices2027';
<<<<<<< HEAD
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2027 } from '../data/revolutionaryMicroSaasServices2027';
import { ADVANCED_IT_SERVICES_2027 } from '../data/advancedITServices2027';

interface ServiceCardProps {
  service: any;
  index: number;
  onViewDetails: (service: any) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Quantum Computing': <Brain className="w-8 h-8" />,
      'AI & Business Automation': <Rocket className="w-8 h-8" />,
      'AI & Cybersecurity': <Shield className="w-8 h-8" />,
      'AI & Data Analytics': <BarChart3 className="w-8 h-8" />,
      'IoT & Edge Computing': <Globe className="w-8 h-8" />,
      'Content Creation & Marketing': <FileText className="w-8 h-8" />,
      'Financial Management': <DollarSign className="w-8 h-8" />,
      'Customer Success': <Users className="w-8 h-8" />,
      'Project Management': <Briefcase className="w-8 h-8" />,
      'Human Resources': <Users className="w-8 h-8" />,
      'Cloud & Infrastructure': <Cloud className="w-8 h-8" />,
      'Cybersecurity': <Shield className="w-8 h-8" />,
      'Data Center & Infrastructure': <Server className="w-8 h-8" />,
      'Networking & Security': <Network className="w-8 h-8" />,
      'Edge Computing & IoT': <Wifi className="w-8 h-8" />
    };
    return iconMap[category] || <Code className="w-8 h-8" />;
  };

  const getInnovationColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Revolutionary': 'from-red-500 to-pink-500',
      'Breakthrough': 'from-purple-500 to-indigo-500',
      'Innovative': 'from-blue-500 to-cyan-500',
      'Advanced': 'from-green-500 to-emerald-500'
    };
    return colorMap[level] || 'from-gray-500 to-gray-600';
  };

=======
import { COMPREHENSIVE_PRICING_GUIDE_2027, MARKET_ANALYSIS_2027 } from '../data/comprehensivePricingGuide2027';
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
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-slate-light/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-300 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20">
        {/* Innovation Level Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getInnovationColor(service.innovationLevel)}`}>
            {service.innovationLevel}
          </div>
        </div>

        {/* Service Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-zion-cyan">
            {getIcon(service.category)}
          </div>
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Price and ROI */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-zion-cyan">
            ${service.price.toLocaleString()}
            <span className="text-sm text-gray-400 font-normal">/{service.pricingModel}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">ROI</div>
            <div className="text-lg font-bold text-green-400">{service.roi}</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Market Info */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>Market: {service.marketPrice}</span>
          <span>Delivery: {service.estimatedDelivery}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(service)}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 inline" />
        </button>

        {/* Hover Effects */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

interface ServiceDetailsModalProps {
  service: any | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light border border-zion-cyan/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Service Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-xl text-gray-300 mb-6">{service.description}</p>
              
              {/* Price and Innovation Level */}
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                  <div className="text-gray-400">per {service.pricingModel}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-purple">{service.roi}</div>
                  <div className="text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{service.innovationLevel}</div>
                  <div className="text-gray-400">Innovation</div>
                </div>
              </div>
            </div>

            {/* Service Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-zion-cyan mb-4">Features</h3>
                <div className="space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-zion-cyan mb-4">Benefits</h3>
                <div className="space-y-2">
                  {service.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-xl font-bold text-zion-cyan mb-4">Use Cases</h3>
                <div className="space-y-2">
                  {service.useCases.map((useCase: string, idx: number) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h3 className="text-xl font-bold text-zion-cyan mb-4">Target Audience</h3>
                <div className="space-y-2">
                  {service.targetAudience.map((audience: string, idx: number) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            {service.technicalSpecs && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-zion-cyan mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technology</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technicalSpecs.technology.map((tech: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technicalSpecs.integrations.map((integration: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Performance</h4>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div>API Endpoints: {service.technicalSpecs.apiEndpoints}</div>
                      <div>Uptime: {service.technicalSpecs.uptime}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="mt-8 p-6 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
              <h3 className="text-xl font-bold text-zion-cyan mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <div className="font-semibold">Phone:</div>
                  <div>{service.contactInfo.phone}</div>
                </div>
                <div>
                  <div className="font-semibold">Email:</div>
                  <div>{service.contactInfo.email}</div>
                </div>
                <div>
                  <div className="font-semibold">Website:</div>
                  <a 
                    href={service.contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-purple transition-colors flex items-center"
                  >
                    {service.contactInfo.website}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div>
                  <div className="font-semibold">Address:</div>
                  <div>{service.contactInfo.address}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const UltimateServicesShowcase2027: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const allServices = [
    ...ULTIMATE_INNOVATIVE_SERVICES_2027,
    ...REVOLUTIONARY_MICRO_SAAS_SERVICES_2027,
    ...ADVANCED_IT_SERVICES_2027
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai', name: 'AI Services', count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'micro-saas', name: 'Micro SAAS', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Financial') || s.category.includes('Customer') || s.category.includes('Project') || s.category.includes('HR')).length },
    { id: 'it', name: 'IT Services', count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Cybersecurity') || s.category.includes('Data Center') || s.category.includes('Networking') || s.category.includes('Edge')).length },
    { id: 'quantum', name: 'Quantum & Emerging', count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('IoT')).length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeCategory === 'ai') return service.category.includes('AI');
        if (activeCategory === 'micro-saas') return service.category.includes('Content') || service.category.includes('Financial') || service.category.includes('Customer') || service.category.includes('Project') || service.category.includes('HR');
        if (activeCategory === 'it') return service.category.includes('Cloud') || service.category.includes('Cybersecurity') || service.category.includes('Data Center') || service.category.includes('Networking') || service.category.includes('Edge');
        if (activeCategory === 'quantum') return service.category.includes('Quantum') || service.category.includes('IoT');
        return true;
      });

  const handleViewDetails = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Ultimate Services
          <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            {' '}Showcase 2027
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Discover our revolutionary collection of AI-powered services, innovative Micro SAAS solutions, and cutting-edge IT infrastructure services designed to transform your business in 2027 and beyond.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                : 'bg-zion-slate-dark/50 text-gray-300 hover:bg-zion-slate-light/50 hover:text-white border border-zion-cyan/20'
            }`}
          >
            {category.name}
            <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact our team of experts to discuss how our innovative services can drive your success in 2027 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-6 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border border-zion-cyan text-zion-cyan font-semibold py-3 px-6 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </motion.div>

      {/* Service Details Modal */}
      <ServiceDetailsModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};