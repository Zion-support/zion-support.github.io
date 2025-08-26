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
  X as XIcon,
  Calculator,
  TrendingUp as TrendingUpIcon,
  PieChart as PieChartIcon,
  BarChart3 as BarChart3Icon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Cpu as CpuIcon,
  BookOpen as BookOpenIcon,
  GraduationCap,
  FileText as FileTextIcon
} from 'lucide-react';
import { COMPREHENSIVE_PRICING_GUIDE_2027, MARKET_ANALYSIS_2027 } from '../data/comprehensivePricingGuide2027';

export default function ComprehensivePricingGuide2027() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing-guide');
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

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2027
    .filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.ourPricing.professional.price - a.ourPricing.professional.price;
        case 'roi':
          const aROI = parseInt(a.roi.percentage.replace('%', ''));
          const bROI = parseInt(b.roi.percentage.replace('%', ''));
          return bROI - aROI;
        case 'savings':
          const aSavings = parseInt(a.roi.savings.replace(/[^0-9]/g, ''));
          const bSavings = parseInt(b.roi.savings.replace(/[^0-9]/g, ''));
          return bSavings - aSavings;
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

  const calculateSavings = (ourPrice: number, marketPrice: number) => {
    return ((marketPrice - ourPrice) / marketPrice * 100).toFixed(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="h-8 w-8 text-zion-cyan" />
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Comprehensive <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Pricing Guide</span> 2027
            </h1>
            <Calculator className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our revolutionary pricing structure and see how much you can save compared to market rates. 
            Get detailed breakdowns, ROI calculations, and competitor comparisons for all our services.
          </p>

          {/* Market Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
              <div className="text-zion-slate-light">Annual Growth</div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-zion-orange/20 to-zion-red/20 rounded-xl p-6 border border-zion-orange/30"
            >
              <div className="text-3xl font-bold text-zion-orange mb-2">60-80%</div>
              <div className="text-zion-slate-light">Cost Savings</div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main id="pricing-guide" className="py-20">
        <div className="container mx-auto px-4">
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
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                  <option value="savings">Savings</option>
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
            className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.serviceId}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/60 rounded-2xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.serviceName}
                      </h3>
                      <p className="text-zion-slate-light">{service.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(service.serviceId)}
                    className="p-2 hover:bg-zion-slate-light/20 rounded-lg transition-colors duration-200"
                  >
                    <Eye className="h-5 w-5 text-zion-cyan" />
                  </button>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(service.ourPricing).map(([tier, plan]) => (
                    <div
                      key={tier}
                      className={`p-4 rounded-lg border ${
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
                      <div className="text-sm text-zion-slate-light mb-3">
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

                {/* Market Comparison */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Market Comparison</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-zion-slate-dark/30 rounded-lg border border-zion-slate-light/20">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zion-slate-light">Market Average:</span>
                        <span className="text-zion-purple font-semibold">
                          ${service.marketPricing.average.toLocaleString()}/month
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">You Save:</span>
                        <span className="text-zion-green font-semibold">
                          {calculateSavings(service.ourPricing.professional.price, service.marketPricing.average)}%
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-zion-slate-dark/30 rounded-lg border border-zion-slate-light/20">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-zion-green font-semibold">{service.roi.percentage}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Timeframe:</span>
                        <span className="text-zion-cyan font-semibold">{service.roi.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitors */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Competitors</h4>
                  <div className="space-y-2">
                    {service.competitors.slice(0, 2).map((competitor, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">{competitor.name}</span>
                        <span className="text-zion-purple">{competitor.pricing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/contact?service=${service.serviceId}`}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Get Started
                  </Link>
                  <button
                    onClick={() => setSelectedService(service.serviceId)}
                    className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-4 py-2 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
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

          {/* Market Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Market Analysis & Competitive Advantages
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Key Trends */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUpIcon className="h-5 w-5 text-zion-cyan" />
                    Key Market Trends
                  </h3>
                  <ul className="space-y-2">
                    {MARKET_ANALYSIS_2027.keyTrends.map((trend, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <ArrowRight className="h-3 w-3 text-zion-cyan flex-shrink-0" />
                        {trend}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitive Advantages */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-zion-purple" />
                    Our Advantages
                  </h3>
                  <ul className="space-y-2">
                    {MARKET_ANALYSIS_2027.competitiveAdvantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="h-3 w-3 text-zion-green flex-shrink-0" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Opportunities */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-zion-green" />
                    Market Opportunities
                  </h3>
                  <ul className="space-y-2">
                    {MARKET_ANALYSIS_2027.marketOpportunities.map((opportunity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <Lightbulb className="h-3 w-3 text-zion-yellow flex-shrink-0" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Contact us today to discuss your specific needs and get a customized quote. 
                Our team of experts is ready to help you transform your business with our revolutionary services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Contact Us Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-8 py-3 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

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
              className="bg-zion-slate-dark rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = COMPREHENSIVE_PRICING_GUIDE_2027.find(s => s.serviceId === selectedService);
                
                if (!service) return null;

                return (
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{service.serviceName}</h2>
                        <p className="text-zion-slate-light">{service.category}</p>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-zion-slate-light/20 rounded-lg transition-colors duration-200"
                      >
                        <XIcon className="h-6 w-6 text-zion-slate-light" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Pricing Plans */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Pricing Plans</h3>
                        <div className="space-y-4">
                          {Object.entries(service.ourPricing).map(([tier, plan]) => (
                            <div
                              key={tier}
                              className={`p-4 rounded-lg border ${
                                plan.popular
                                  ? 'border-zion-cyan bg-zion-cyan/10'
                                  : 'border-zion-slate-light/30 bg-zion-slate-dark/30'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-medium text-white">{plan.name}</span>
                                {plan.popular && (
                                  <span className="px-3 py-1 bg-zion-cyan text-white text-sm rounded-full">
                                    Most Popular
                                  </span>
                                )}
                              </div>
                              <div className="text-3xl font-bold text-zion-cyan mb-3">
                                ${plan.price.toLocaleString()}/month
                              </div>
                              <div className="text-zion-slate-light mb-4">
                                Best for: {plan.bestFor}
                              </div>
                              <ul className="space-y-2">
                                {plan.features.map((feature, idx) => (
                                  <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-zion-green flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Analysis */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Market Analysis</h3>
                        
                        {/* Market Pricing */}
                        <div className="mb-6">
                          <h4 className="text-md font-medium text-white mb-3">Market Pricing Range</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-zion-slate-light">Low:</span>
                              <span className="text-zion-green">${service.marketPricing.low.toLocaleString()}/month</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-zion-slate-light">Average:</span>
                              <span className="text-zion-purple font-semibold">${service.marketPricing.average.toLocaleString()}/month</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-zion-slate-light">High:</span>
                              <span className="text-zion-red">${service.marketPricing.high.toLocaleString()}/month</span>
                            </div>
                          </div>
                        </div>

                        {/* ROI Information */}
                        <div className="mb-6">
                          <h4 className="text-md font-medium text-white mb-3">ROI & Savings</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-zion-slate-light">ROI:</span>
                              <span className="text-zion-green font-semibold">{service.roi.percentage}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-zion-slate-light">Timeframe:</span>
                              <span className="text-zion-cyan">{service.roi.timeframe}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-zion-slate-light">Annual Savings:</span>
                              <span className="text-zion-green font-semibold">{service.roi.savings}</span>
                            </div>
                          </div>
                        </div>

                        {/* Competitors */}
                        <div className="mb-6">
                          <h4 className="text-md font-medium text-white mb-3">Competitors</h4>
                          <div className="space-y-3">
                            {service.competitors.map((competitor, idx) => (
                              <div key={idx} className="p-3 bg-zion-slate-dark/30 rounded-lg border border-zion-slate-light/20">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium text-white">{competitor.name}</span>
                                  <span className="text-zion-purple">{competitor.pricing}</span>
                                </div>
                                <div className="text-sm text-zion-slate-light">
                                  {competitor.features.join(', ')}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Market Trend */}
                        <div>
                          <h4 className="text-md font-medium text-white mb-3">Market Trend</h4>
                          <p className="text-zion-slate-light">{service.marketTrend}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-zion-slate-light/20">
                      <Link
                        to={`/contact?service=${service.serviceId}`}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 text-center"
                      >
                        Get Started Today
                      </Link>
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-6 py-3 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                      >
                        Call {service.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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