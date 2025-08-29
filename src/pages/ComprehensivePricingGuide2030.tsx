import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Globe, 
  Rocket,
  Heart,
  Leaf,
  Atom,
  Building,
  Users,
  Target,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Award,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  MailIcon,
  ChevronDown,
  ChevronUp,
  FilterX,
  Calculator,
  PieChart,
  TrendingDown,
  Calendar,
  Timer,
  Gauge,
  Target as TargetIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  Globe as GlobeIcon,
  Rocket as RocketIcon,
  Heart as HeartIcon,
  Leaf as LeafIcon,
  Atom as AtomIcon,
  Building as BuildingIcon,
  Users as UsersIcon2,
  Target as TargetIcon2,
  DollarSign as DollarSignIcon,
  Phone as PhoneIcon,
  Mail as MailIcon2,
  MapPin as MapPinIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  Award as AwardIcon,
  BarChart3 as BarChart3Icon,
  PenTool as PenToolIcon,
  Eye as EyeIcon,
  Server as ServerIcon,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  ShoppingCart as ShoppingCartIcon,
  Lock as LockIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Key as KeyIcon,
  Globe2 as Globe2Icon,
  ShieldCheck as ShieldCheckIcon,
  Scale as ScaleIcon,
  Building2 as Building2Icon,
  Car as CarIcon,
  Home as HomeIcon,
  Factory as FactoryIcon,
  City as CityIcon,
  CheckCircle2 as CheckCircle2Icon,
  ArrowUpRight as ArrowUpRightIcon,
  Play as PlayIcon,
  MailIcon as MailIcon3,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  FilterX as FilterXIcon,
  Calculator as CalculatorIcon,
  PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon,
  Calendar as CalendarIcon,
  Timer as TimerIcon,
  Gauge as GaugeIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensivePricingGuide2030() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [roiRange, setRoiRange] = useState([0, 1000]);
  const [setupTimeRange, setSetupTimeRange] = useState([0, 20]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('price-low');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter and search services
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    // Parse ROI for filtering
    const roi = service.roi;
    let roiNumber = 0;
    if (typeof roi === 'string') {
      const roiMatch = roi.match(/(\d+)%/);
      roiNumber = roiMatch ? parseInt(roiMatch[1]) : 0;
    }
    const matchesROI = roiNumber >= roiRange[0] && roiNumber <= roiRange[1];
    
    // Parse setup time for filtering
    const setupTime = service.setupTime;
    let setupWeeks = 0;
    if (typeof setupTime === 'string') {
      const weeksMatch = setupTime.match(/(\d+)/);
      setupWeeks = weeksMatch ? parseInt(weeksMatch[1]) : 0;
    }
    const matchesSetupTime = setupWeeks >= setupTimeRange[0] && setupWeeks <= setupTimeRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice && matchesROI && matchesSetupTime;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'roi-high':
        const roiA = typeof a.roi === 'string' ? parseInt(a.roi.match(/(\d+)%/)?.[1] || '0') : 0;
        const roiB = typeof b.roi === 'string' ? parseInt(b.roi.match(/(\d+)%/)?.[1] || '0') : 0;
        return roiB - roiA;
      case 'setup-fast':
        const setupA = typeof a.setupTime === 'string' ? parseInt(a.setupTime.match(/(\d+)/)?.[1] || '0') : 0;
        const setupB = typeof b.setupTime === 'string' ? parseInt(b.setupTime.match(/(\d+)/)?.[1] || '0') : 0;
        return setupA - setupB;
      case 'rating':
        return b.rating - a.rating;
      case 'ai-score':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const currentServices = sortedServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: COMPREHENSIVE_SERVICES_INDEX_2030.length,
    averagePrice: Math.round(
      COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => sum + service.price, 0) / 
      COMPREHENSIVE_SERVICES_INDEX_2030.length
    ),
    minPrice: Math.min(...COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.price)),
    maxPrice: Math.max(...COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.price)),
    averageROI: Math.round(
      COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => {
        const roi = service.roi;
        if (typeof roi === 'string') {
          const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
          return sum + roiNumber;
        }
        return sum;
      }, 0) / COMPREHENSIVE_SERVICES_INDEX_2030.length
    ),
    averageSetupTime: Math.round(
      COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => {
        const setupTime = service.setupTime;
        if (typeof setupTime === 'string') {
          const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
          return sum + weeks;
        }
        return sum;
      }, 0) / COMPREHENSIVE_SERVICES_INDEX_2030.length
    )
  };

  const categoryIcons: { [key: string]: any } = {
    'AI & Business Intelligence': Brain,
    'AI & Marketing': Target,
    'AI & Healthcare': Heart,
    'AI & Legal Tech': Scale,
    'AI & Real Estate': Building,
    'AI & Operations': Settings,
    'AI & Green Tech': Leaf,
    'AI & Autonomous Systems': Car,
    'AI & FinTech': DollarSign,
    'AI & Environmental Tech': Globe,
    'AI & Content': PenTool,
    'AI & Customer Support': Users,
    'AI & HR': Users,
    'AI & Research': Eye,
    'AI & Metaverse': Globe2,
    'AI & Space Tech': Rocket,
    'AI & Development': Code,
    'AI & Education': BookOpen,
    'AI & Entertainment': Play,
    'Cybersecurity': Shield,
    'Cloud & DevOps': Cloud,
    'Quantum Computing': Atom,
    'IoT & Edge Computing': Cpu,
    'Blockchain & Web3': Key,
    'Digital Twin': Globe,
    'Space Technology': Rocket,
    'Sustainable Technology': Leaf,
    'IT Infrastructure': Server,
    'Emerging Technology': Zap
  };

  const categoryColors: { [key: string]: string } = {
    'AI & Business Intelligence': 'from-purple-500 to-pink-500',
    'AI & Marketing': 'from-green-500 to-emerald-500',
    'AI & Healthcare': 'from-pink-500 to-red-500',
    'AI & Legal Tech': 'from-blue-500 to-indigo-500',
    'AI & Real Estate': 'from-yellow-500 to-orange-500',
    'AI & Operations': 'from-gray-500 to-slate-500',
    'AI & Green Tech': 'from-green-500 to-emerald-500',
    'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
    'AI & FinTech': 'from-emerald-500 to-green-500',
    'AI & Environmental Tech': 'from-teal-500 to-green-500',
    'AI & Content': 'from-orange-500 to-red-500',
    'AI & Customer Support': 'from-blue-500 to-purple-500',
    'AI & HR': 'from-indigo-500 to-blue-500',
    'AI & Research': 'from-purple-500 to-violet-500',
    'AI & Metaverse': 'from-purple-500 to-indigo-500',
    'AI & Space Tech': 'from-indigo-500 to-purple-500',
    'AI & Development': 'from-cyan-500 to-blue-500',
    'AI & Education': 'from-blue-500 to-indigo-500',
    'AI & Entertainment': 'from-purple-500 to-pink-500',
    'Cybersecurity': 'from-red-500 to-orange-500',
    'Cloud & DevOps': 'from-blue-500 to-cyan-500',
    'Quantum Computing': 'from-indigo-500 to-purple-500',
    'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
    'Blockchain & Web3': 'from-yellow-500 to-orange-500',
    'Digital Twin': 'from-blue-500 to-indigo-500',
    'Space Technology': 'from-purple-500 to-pink-500',
    'Sustainable Technology': 'from-green-500 to-teal-500',
    'IT Infrastructure': 'from-slate-500 to-gray-500',
    'Emerging Technology': 'from-violet-500 to-purple-500'
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange([0, 50000]);
    setRoiRange([0, 1000]);
    setSetupTimeRange([0, 20]);
    setSortBy('price-low');
    setCurrentPage(1);
  };

  const parseROI = (roi: string | number) => {
    if (typeof roi === 'string') {
      const match = roi.match(/(\d+)%/);
      return match ? parseInt(match[1]) : 0;
    }
    return 0;
  };

  const parseSetupTime = (setupTime: string | number) => {
    if (typeof setupTime === 'string') {
      const match = setupTime.match(/(\d+)/);
      return match ? parseInt(match[1]) : 0;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing information for all our innovative AI-powered micro SAAS services, IT solutions, and technology services. Compare prices, ROI, and setup times."
        keywords="pricing, AI services pricing, micro SAAS pricing, IT solutions pricing, ROI, setup time, Zion Tech Group"
        url="https://ziontechgroup.com/pricing-guide-2030"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Complete
            </span>
            <br />
            <span className="text-white">Pricing Guide</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
              2030
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for our comprehensive portfolio of revolutionary AI and technology services. 
            <span className="text-emerald-400 font-semibold"> Every service includes guaranteed ROI and comprehensive support.</span>
          </motion.p>

          {/* Pricing Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">${Math.min(...COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.price)).toLocaleString()}</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">${Math.max(...COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.price)).toLocaleString()}</div>
              <div className="text-gray-300">Enterprise Solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">500%+</div>
              <div className="text-gray-300">Guaranteed ROI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Transparent
              </span> 
              Pricing Structure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our pricing is designed to provide exceptional value at every level. From budget-friendly 
              solutions to enterprise-grade platforms, we ensure maximum ROI for your investment.
            </p>
          </motion.div>

          {/* Pricing Tiers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {/* Budget Tier */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Budget Solutions</h3>
                <p className="text-gray-400">Perfect for startups and small businesses</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">$1K - $10K</div>
                <p className="text-gray-300">Starting prices</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Core AI functionality
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  300%+ ROI guarantee
                </li>
              </ul>

              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
              >
                Get Budget Quote
              </a>
            </div>

            {/* Mid-Range Tier */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 transform scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mid-Range Solutions</h3>
                <p className="text-gray-400">Ideal for growing businesses</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$10K - $50K</div>
                <p className="text-gray-300">Starting prices</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Advanced AI capabilities
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Premium integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  500%+ ROI guarantee
                </li>
              </ul>

              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
              >
                Get Mid-Range Quote
              </a>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-gray-400">For large organizations</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">$50K+</div>
                <p className="text-gray-300">Starting prices</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Full AI autonomy
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  1000%+ ROI guarantee
                </li>
              </ul>

              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
              >
                Get Enterprise Quote
              </a>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {SERVICE_CATEGORIES_2030.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="mr-2">{categoryIcons[category] && React.cloneElement(categoryIcons[category], { className: "w-6 h-6" })}</span>
                  {category} ({COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === category).length})
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Price Range */}
              <div className="flex items-center space-x-2 bg-white/10 text-gray-300 border border-white/20 rounded-lg px-4 py-2">
                <span>Price: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>

              {/* ROI Range */}
              <div className="flex items-center space-x-2 bg-white/10 text-gray-300 border border-white/20 rounded-lg px-4 py-2">
                <span>ROI: {roiRange[0]}% - {roiRange[1]}%</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={roiRange[0]}
                  onChange={(e) => setRoiRange([parseInt(e.target.value), roiRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={roiRange[1]}
                  onChange={(e) => setRoiRange([roiRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>

              {/* Setup Time Range */}
              <div className="flex items-center space-x-2 bg-white/10 text-gray-300 border border-white/20 rounded-lg px-4 py-2">
                <span>Setup: {setupTimeRange[0]}w - {setupTimeRange[1]}w</span>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={setupTimeRange[0]}
                  onChange={(e) => setSetupTimeRange([parseInt(e.target.value), setupTimeRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={setupTimeRange[1]}
                  onChange={(e) => setSetupTimeRange([setupTimeRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentServices.map((service, index) => {
              const IconComponent = categoryIcons[service.category] || Zap;
              const categoryColor = categoryColors[service.category] || 'from-gray-500 to-slate-500';
              const roiNumber = parseROI(service.roi);
              const setupWeeks = parseSetupTime(service.setupTime);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                    </div>
                  </div>

                  {/* Price Tier Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    {getPriceTier(service.price).icon}
                    <span className={`text-sm font-semibold ${getPriceTier(service.price).color}`}>
                      {getPriceTier(service.price).tier}
                    </span>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-xs text-emerald-400 rounded-full border border-emerald-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Pricing Information */}
                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-emerald-400">${service.price.toLocaleString()}</div>
                      <p className="text-sm text-gray-400">Starting Price</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Market Price:</span>
                        <div className="text-emerald-400 font-semibold">{service.marketPrice}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">ROI:</span>
                        <div className="text-cyan-400 font-semibold">{service.roi}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Setup Time:</span>
                        <div className="text-purple-400 font-semibold">{service.setupTime}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">AI Score:</span>
                        <div className="text-blue-400 font-semibold">{service.aiScore}</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="space-y-3">
                    <a
                      href={`tel:+13024640950`}
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="w-4 h-4 inline mr-2" />
                      Get Quote Now
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry for ${service.title}`}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 border border-white/20"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Request Pricing
                    </a>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Reviews: {service.reviewCount}</span>
                      <span className="text-gray-400">Availability: {service.availability}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us today for a personalized quote and consultation. Our team of experts will help 
            you choose the perfect solution for your business needs and budget.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get Pricing Quote
            </a>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-emerald-400 text-lg">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-400 text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-purple-400 text-lg">364 E Main St STE 1008</p>
              <p className="text-purple-400 text-lg">Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved. | 
            <a href="https://ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300 ml-1">
              ziontechgroup.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}