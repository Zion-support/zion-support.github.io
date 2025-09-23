import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Atom,
  Blockchain,
  Leaf,
  Factory,
  Car,
  Building,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Gauge,
  PenTool,
  Truck,
  Building2,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  ScatterChart,
  BarChart,
  AreaChart,
  Layers,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Monitor,
  Smartphone2,
  Tablet,
  Watch,
  Headphones,
  Speaker,
  Microphone,
  Keyboard,
  Mouse,
  HardDrive,
  Usb,
  Bluetooth,
  Wifi2,
  Signal,
  Battery,
  Power,
  Zap2,
  Sun,
  Moon,
  Cloud2,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Sunrise,
  Sunset,
  Moon2,
  Star2,
  Planet,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Atom2,
  Dna,
  Pill,
  Stethoscope,
  HeartPulse,
  Activity2,
  Brain2,
  Eye2,
  Ear,
  Nose,
  Mouth,
  Hand,
  Foot,
  Arm,
  Leg,
  Bone,
  Muscle,
  Nerve,
  Cell,
  Virus,
  Bacteria,
  Parasite,
  Fungus,
  Algae,
  Moss,
  Fern,
  Tree,
  Flower,
  Seed,
  Leaf2,
  Root,
  Bark,
  Wood,
  Paper,
  Book,
  Newspaper,
  Magazine,
  Document,
  File,
  Folder,
  Archive,
  Download,
  Upload,
  Share,
  Link,
  ExternalLink,
  Copy,
  Cut,
  Paste,
  Save,
  Edit,
  Trash,
  Undo,
  Redo,
  Refresh,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Filter2,
  Sliders,
  Settings,
  Tool,
  Wrench,
  Screwdriver,
  Hammer,
  Saw,
  Drill,
  Screw,
  Nut,
  Bolt,
  Washer,
  Nail,
  Wire,
  Cable,
  Plug,
  Socket,
  Switch,
  Button,
  Knob,
  Dial,
  Gauge2,
  Meter,
  Scale,
  Weight,
  Timer,
  Stopwatch,
  Calendar,
  Clock2,
  Alarm,
  Bell,
  Notification,
  Alert,
  Warning,
  Info,
  Help,
  Question,
  Check,
  X,
  Plus,
  Minus,
  Divide,
  Multiply,
  Equal,
  NotEqual,
  GreaterThan,
  LessThan,
  GreaterThanOrEqual,
  LessThanOrEqual,
  Infinity,
  Pi,
  Sigma,
  Sum,
  Product,
  Average,
  Median,
  Mode,
  Range,
  Variance,
  StandardDeviation,
  Correlation,
  Regression,
  Hypothesis,
  Confidence,
  PValue,
  Significance,
  Power,
  EffectSize,
  SampleSize,
  Population,
  Sample,
  Random,
  Systematic,
  Stratified,
  Cluster,
  Convenience,
  Snowball,
  Purposive,
  Quota,
  Theoretical,
  MaximumVariation,
  Homogeneous,
  Heterogeneous,
  Representative,
  Biased,
  Unbiased,
  Valid,
  Reliable,
  Accurate,
  Precise,
  Consistent,
  Stable,
  Robust,
  Flexible,
  Adaptable,
  Scalable,
  Extensible,
  Maintainable,
  Readable,
  Testable,
  Deployable,
  Portable,
  Interoperable,
  Compatible,
  Secure,
  Private,
  Confidential,
  Anonymous,
  Pseudonymous,
  Transparent,
  Accountable,
  Traceable,
  Auditable,
  Verifiable,
  Authentic,
  Genuine,
  Original,
  Unique,
  Distinct,
  Different,
  Similar,
  Identical,
  Equivalent,
  Comparable,
  Relative,
  Absolute,
  Objective,
  Subjective,
  Qualitative,
  Quantitative,
  Discrete,
  Continuous,
  Categorical,
  Numerical,
  Ordinal,
  Nominal,
  Interval,
  Ratio,
  Binary,
  Ternary,
  Quaternary,
  Quinary,
  Senary,
  Septenary,
  Octonary,
  Nonary,
  Decimal,
  Duodecimal,
  Hexadecimal,
  Vigesimal,
  Sexagesimal,
  Centesimal,
  Mille,
  Million,
  Billion,
  Trillion,
  Quadrillion,
  Quintillion,
  Sextillion,
  Septillion,
  Octillion,
  Nonillion,
  Decillion,
  Undecillion,
  Duodecillion,
  Tredecillion,
  Quattuordecillion,
  Quindecillion,
  Sexdecillion,
  Septendecillion,
  Octodecillion,
  Novemdecillion,
  Vigintillion,
  Centillion,
  Googol,
  Googolplex,
  Infinity2,
  AlephNull,
  AlephOne,
  AlephOmega,
  BethNull,
  BethOne,
  BethOmega,
  Gimel,
  Daleth,
  He,
  Vav,
  Zayin,
  Chet,
  Tet,
  Yod,
  Kaf,
  Lamed,
  Mem,
  Nun,
  Samekh,
  Ayin,
  Pe,
  Tsadi,
  Qof,
  Resh,
  Shin,
  Tav,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi2,
  Rho,
  Sigma2,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Crown
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;
}

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [innovationLevel, setInnovationLevel] = useState('all');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s => s.category === 'AI & Logistics').length, icon: '🚛' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📢' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' }
  ];

  const innovationLevels = [
    { id: 'all', name: 'All Levels', icon: '🌟' },
    { id: 'Advanced', name: 'Advanced', icon: '🚀' },
    { id: 'Cutting-edge', name: 'Cutting-edge', icon: '⚡' },
    { id: 'Revolutionary', name: 'Revolutionary', icon: '💫' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;
    
    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        const innovationOrder = { 'Advanced': 1, 'Cutting-edge': 2, 'Revolutionary': 3 };
        return (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Bot className="w-5 h-5" />;
      case 'AI & Analytics': return <BarChart3 className="w-5 h-5" />;
      case 'AI & Research': return <Search className="w-5 h-5" />;
      case 'AI & Logistics': return <Truck className="w-5 h-5" />;
      case 'AI & Marketing': return <TrendingUp className="w-5 h-5" />;
      case 'AI & Healthcare': return <Heart className="w-5 h-5" />;
      case 'Quantum Computing': return <Atom className="w-5 h-5" />;
      case 'Blockchain': return <Link className="w-5 h-5" />;
      case 'Metaverse': return <Globe2 className="w-5 h-5" />;
      case 'Edge Computing': return <Network className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getInnovationIcon = (level: string) => {
    switch (level) {
      case 'Advanced': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'Cutting-edge': return <Zap className="w-4 h-4 text-blue-500" />;
      case 'Revolutionary': return <Crown className="w-4 h-4 text-purple-500" />;
      default: return <Star className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-zion-cyan/10 via-transparent to-transparent" />
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">
              Comprehensive Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our revolutionary collection of AI-powered, quantum computing, blockchain, and emerging technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-4 py-2">
                <span className="text-zion-cyan">🚀</span> {allServices.length}+ Services
              </div>
              <div className="bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2">
                <span className="text-zion-purple">⚡</span> Cutting-edge Tech
              </div>
              <div className="bg-zion-pink/20 border border-zion-pink/30 rounded-full px-4 py-2">
                <span className="text-zion-pink">💎</span> Premium Quality
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-700 rounded-2xl p-6"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, categories, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl pl-12 pr-4 py-3 text-white placeholder-zion-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
              />
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Innovation Level Filter */}
              <div className="relative">
                <select
                  value={innovationLevel}
                  onChange={(e) => setInnovationLevel(e.target.value)}
                  className="w-full bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan appearance-none"
                >
                  {innovationLevels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.icon} {level.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan appearance-none"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="innovation">Sort by Innovation</option>
                  <option value="category">Sort by Category</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-3 py-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'text-zion-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4 mx-auto" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-3 py-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'text-zion-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-zion-slate-300 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1 h-2 bg-zion-slate-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1 h-2 bg-zion-slate-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-zion-slate-300">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services Grid/List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-700 rounded-2xl p-6 hover:border-zion-cyan/50 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300 cursor-pointer group ${
                  viewMode === 'list' ? 'flex items-center gap-6' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(service.category)}
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-zion-slate-400">{service.category}</p>
                        </div>
                      </div>
                      {getInnovationIcon(service.innovationLevel)}
                    </div>

                    {/* Description */}
                    <p className="text-zion-slate-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-zion-cyan">
                          ${service.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-zion-slate-400">/month</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-zion-slate-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-zion-slate-400">
                        <Shield className="w-4 h-4" />
                        <span>{service.supportLevel}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  // List View
                  <>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {getCategoryIcon(service.category)}
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-zion-slate-400">{service.category}</p>
                          </div>
                        </div>
                        {getInnovationIcon(service.innovationLevel)}
                      </div>
                      
                      <p className="text-zion-slate-300 mb-3">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <div className="text-2xl font-bold text-zion-cyan">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-400">/month</div>
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
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
              <p className="text-zion-slate-400 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                  setPriceRange([0, 10000]);
                  setInnovationLevel('all');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-xl font-medium hover:bg-zion-cyan/90 transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
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
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-900 border border-zion-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getCategoryIcon(selectedService.category)}
                      <span className="text-zion-slate-400">{selectedService.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedService.title}
                    </h2>
                    <p className="text-zion-slate-300 text-lg">
                      {selectedService.description}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Price and Key Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-zion-cyan mb-1">
                      ${selectedService.price.toLocaleString()}
                    </div>
                    <div className="text-zion-slate-400">per month</div>
                  </div>
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-zion-purple mb-1">
                      {selectedService.estimatedDelivery}
                    </div>
                    <div className="text-zion-slate-400">delivery time</div>
                  </div>
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-zion-green mb-1">
                      {selectedService.roi}
                    </div>
                    <div className="text-zion-slate-400">ROI</div>
                  </div>
                </div>

                {/* Features and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-zion-green" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-zion-green" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases and Target Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-zion-cyan" />
                      Use Cases
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-zion-purple" />
                      Target Audience
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0" />
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Specs */}
                {selectedService.technicalSpecs && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-zion-cyan" />
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-zion-slate-300 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-cyan text-sm rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-zion-slate-300 mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.integrations.map((integration, index) => (
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-purple text-sm rounded-lg">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact and CTA */}
                <div className="border-t border-zion-slate-700 pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <p className="text-zion-slate-400 mb-2">Ready to get started?</p>
                      <div className="flex items-center gap-4 text-sm text-zion-slate-300">
                        <span>📞 {selectedService.contactInfo.phone}</span>
                        <span>✉️ {selectedService.contactInfo.email}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-zion-slate-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-zion-slate-600 transition-colors">
                        Request Demo
                      </button>
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-colors">
                        Get Started
                      </button>
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

export default ComprehensiveServicesShowcase2025;