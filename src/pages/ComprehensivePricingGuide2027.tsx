import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3,
  Rocket,
  Cpu,
  Network,
  Database,
  Lock,
  Leaf,
  Scale,
  Stethoscope,
  Car,
  Building2,
  DollarSign,
  Award,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  Eye,
  X,
  Beaker,
  Calculator,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
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
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2027, InnovativeService2027 } from '../data/innovativeServices2027';
import { ENHANCED_INNOVATIVE_SERVICES_2027, EnhancedInnovativeService2027 } from '../data/enhancedInnovativeServices2027';

// Combine all services
const ALL_SERVICES = [...INNOVATIVE_SERVICES_2027, ...ENHANCED_INNOVATIVE_SERVICES_2027];

const ComprehensivePricingGuide2027: React.FC = () => {
  const [services, setServices] = useState<any[]>(ALL_SERVICES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'comparison'>('grid');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  const priceRanges = [
    'all',
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+'
  ];
  const roiRanges = [
    'all',
    'Under 200%',
    '200% - 400%',
    '400% - 600%',
    '600% - 800%',
    '800%+'
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    // Price range filtering
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = service.price;
      switch (selectedPriceRange) {
        case 'Under $1,000':
          matchesPrice = price < 1000;
          break;
        case '$1,000 - $5,000':
          matchesPrice = price >= 1000 && price < 5000;
          break;
        case '$5,000 - $10,000':
          matchesPrice = price >= 5000 && price < 10000;
          break;
        case '$10,000 - $20,000':
          matchesPrice = price >= 10000 && price < 20000;
          break;
        case '$20,000+':
          matchesPrice = price >= 20000;
          break;
      }
    }

    // ROI filtering
    let matchesROI = true;
    if (selectedROI !== 'all') {
      const roi = parseInt(service.roi.replace('%', ''));
      switch (selectedROI) {
        case 'Under 200%':
          matchesROI = roi < 200;
          break;
        case '200% - 400%':
          matchesROI = roi >= 200 && roi < 400;
          break;
        case '400% - 600%':
          matchesROI = roi >= 400 && roi < 600;
          break;
        case '600% - 800%':
          matchesROI = roi >= 600 && roi < 800;
          break;
        case '800%+':
          matchesROI = roi >= 800;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice && matchesROI;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Advanced': 2, 'Innovative': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const getPriceRangeStats = () => {
    const stats = {
      total: services.length,
      under1k: services.filter(s => s.price < 1000).length,
      k1to5: services.filter(s => s.price >= 1000 && s.price < 5000).length,
      k5to10: services.filter(s => s.price >= 5000 && s.price < 10000).length,
      k10to20: services.filter(s => s.price >= 10000 && s.price < 20000).length,
      over20k: services.filter(s => s.price >= 20000).length,
    };
    return stats;
  };

  const getROIStats = () => {
    const stats = {
      total: services.length,
      under200: services.filter(s => parseInt(s.roi.replace('%', '')) < 200).length,
      k200to400: services.filter(s => {
        const roi = parseInt(s.roi.replace('%', ''));
        return roi >= 200 && roi < 400;
      }).length,
      k400to600: services.filter(s => {
        const roi = parseInt(s.roi.replace('%', ''));
        return roi >= 400 && roi < 600;
      }).length,
      k600to800: services.filter(s => {
        const roi = parseInt(s.roi.replace('%', ''));
        return roi >= 600 && roi < 800;
      }).length,
      over800: services.filter(s => parseInt(s.roi.replace('%', '')) >= 800).length,
    };
    return stats;
  };

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & DevOps': return <Cpu className="w-5 h-5" />;
      case 'Blockchain & Quantum': return <Lock className="w-5 h-5" />;
      case 'AI & Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Edge Computing & AI': return <Network className="w-5 h-5" />;
      case 'AI & Healthcare': return <Stethoscope className="w-5 h-5" />;
      case 'Quantum Computing & AI': return <Brain className="w-5 h-5" />;
      case 'AI & Automation': return <Rocket className="w-5 h-5" />;
      case '5G & Networking': return <Globe className="w-5 h-5" />;
      case 'AI & Legal Tech': return <Scale className="w-5 h-5" />;
      case 'Sustainability & Technology': return <Leaf className="w-5 h-5" />;
      case 'AI & Financial Technology': return <DollarSign className="w-5 h-5" />;
      case 'Quantum & Cloud Computing': return <Cpu className="w-5 h-5" />;
      case 'AI & Supply Chain': return <Network className="w-5 h-5" />;
      case 'Neurotechnology & AI': return <Brain className="w-5 h-5" />;
      case 'AI & Energy Management': return <Zap className="w-5 h-5" />;
      case 'Quantum & Networking': return <Globe className="w-5 h-5" />;
      case 'AI & Education Technology': return <Users className="w-5 h-5" />;
      case 'Quantum & Materials Science': return <Flask className="w-5 h-5" />;
      case 'AI & Space Technology': return <Rocket className="w-5 h-5" />;
      case 'Quantum & Biology': return <Stethoscope className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
    }
  };

  const priceStats = getPriceRangeStats();
  const roiStats = getROIStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-6">
              Comprehensive Pricing Guide 2027
            </h1>
            <p className="text-xl text-zion-gray-light mb-8 max-w-3xl mx-auto">
              Explore our complete range of innovative services with detailed pricing, ROI analysis, 
              and market comparisons to find the perfect solution for your business needs.
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                <div className="text-2xl font-bold text-zion-cyan">{priceStats.total}</div>
                <div className="text-sm text-zion-gray-light">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">${(services.reduce((sum, s) => sum + s.price, 0) / services.length).toFixed(0)}</div>
                <div className="text-sm text-zion-gray-light">Avg Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">${services.reduce((sum, s) => sum + s.price, 0).toLocaleString()}</div>
                <div className="text-sm text-zion-gray-light">Total Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">{Math.max(...services.map(s => parseInt(s.roi.replace('%', ''))))}%</div>
                <div className="text-sm text-zion-gray-light">Max ROI</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                onClick={() => document.getElementById('pricing-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="w-5 h-5" />
                <span>View Pricing</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-5 h-5" />
                <span>Get Quote</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-gray-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:border-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>
                  {range === 'all' ? 'All Prices' : range}
                </option>
              ))}
            </select>

            {/* ROI Filter */}
            <select
              value={selectedROI}
              onChange={(e) => setSelectedROI(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {roiRanges.map(range => (
                <option key={range} value={range}>
                  {range === 'all' ? 'All ROI' : range}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              <option value="title">Sort by Title</option>
              <option value="price">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="roi">Sort by ROI</option>
              <option value="innovation">Sort by Innovation</option>
            </select>

            {/* View Mode */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark text-zion-gray-light hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark text-zion-gray-light hover:text-white'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'comparison' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark text-zion-gray-light hover:text-white'
                }`}
              >
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Statistics */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Price Distribution */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Price Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">Under $1,000</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ width: `${(priceStats.under1k / priceStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{priceStats.under1k}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">$1,000 - $5,000</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full" 
                      style={{ width: `${(priceStats.k1to5 / priceStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{priceStats.k1to5}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">$5,000 - $10,000</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${(priceStats.k5to10 / priceStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{priceStats.k5to10}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">$10,000 - $20,000</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-orange-400 h-2 rounded-full" 
                      style={{ width: `${(priceStats.k10to20 / priceStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{priceStats.k10to20}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">$20,000+</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full" 
                      style={{ width: `${(priceStats.over20k / priceStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{priceStats.over20k}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Distribution */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">ROI Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">Under 200%</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full" 
                      style={{ width: `${(roiStats.under200 / roiStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{roiStats.under200}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">200% - 400%</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-orange-400 h-2 rounded-full" 
                      style={{ width: `${(roiStats.k200to400 / roiStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{roiStats.k200to400}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">400% - 600%</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${(roiStats.k400to600 / roiStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{roiStats.k400to600}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">600% - 800%</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full" 
                      style={{ width: `${(roiStats.k600to800 / roiStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{roiStats.k600to800}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zion-gray-light">800%+</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ width: `${(roiStats.over800 / roiStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold">{roiStats.over800}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div id="pricing-grid" className="container mx-auto px-4 py-8">
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(service.category)}
                    <span className="text-zion-gray-light text-sm">{service.category}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-gray-light mb-4 leading-relaxed">{service.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-gray-light">Monthly Price:</span>
                    <span className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-gray-light">Expected ROI:</span>
                    <span className="text-lg font-semibold text-green-400">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-gray-light">Market Range:</span>
                    <span className="text-zion-gray-light">{service.marketPrice}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-zion-slate-dark text-zion-gray-light text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-zion-gray-light text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-semibold text-sm"
                    onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="space-y-4">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3 mb-3">
                      {getCategoryIcon(service.category)}
                      <span className="text-zion-gray-light text-sm">{service.category}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-gray-light text-sm">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zion-gray-light">Price:</span>
                      <span className="text-xl font-bold text-zion-cyan">${service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-gray-light">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-gray-light">Delivery:</span>
                      <span className="text-zion-gray-light">{service.estimatedDelivery}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold"
                      onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'comparison' && (
          <div className="space-y-8">
            {/* Comparison Selection */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Select Services to Compare</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedServices.slice(0, 6).map((service) => (
                  <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleServiceSelection(service.id)}
                      className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-gray-dark rounded focus:ring-zion-cyan"
                    />
                    <span className="text-zion-gray-light">{service.title}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            {selectedServices.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 overflow-x-auto">
                <h3 className="text-xl font-bold text-white mb-4">Service Comparison</h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zion-gray-dark">
                      <th className="text-left py-3 px-4 text-zion-gray-light">Feature</th>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <th key={serviceId} className="text-left py-3 px-4 text-white">
                            {service.title}
                          </th>
                        ) : null;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zion-gray-dark/50">
                      <td className="py-3 px-4 text-zion-gray-light font-semibold">Category</td>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <td key={serviceId} className="py-3 px-4 text-zion-gray-light">{service.category}</td>
                        ) : null;
                      })}
                    </tr>
                    <tr className="border-b border-zion-gray-dark/50">
                      <td className="py-3 px-4 text-zion-gray-light font-semibold">Price</td>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <td key={serviceId} className="py-3 px-4 text-zion-cyan font-bold">${service.price.toLocaleString()}</td>
                        ) : null;
                      })}
                    </tr>
                    <tr className="border-b border-zion-gray-dark/50">
                      <td className="py-3 px-4 text-zion-gray-light font-semibold">ROI</td>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <td key={serviceId} className="py-3 px-4 text-green-400 font-semibold">{service.roi}</td>
                        ) : null;
                      })}
                    </tr>
                    <tr className="border-b border-zion-gray-dark/50">
                      <td className="py-3 px-4 text-zion-gray-light font-semibold">Innovation Level</td>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <td key={serviceId} className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                              {service.innovationLevel}
                            </span>
                          </td>
                        ) : null;
                      })}
                    </tr>
                    <tr className="border-b border-zion-gray-dark/50">
                      <td className="py-3 px-4 text-zion-gray-light font-semibold">Delivery Time</td>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <td key={serviceId} className="py-3 px-4 text-zion-gray-light">{service.estimatedDelivery}</td>
                        ) : null;
                      })}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-zion-gray-light font-semibold">Contact</td>
                      {selectedServices.map(serviceId => {
                        const service = sortedServices.find(s => s.id === serviceId);
                        return service ? (
                          <td key={serviceId} className="py-3 px-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-semibold text-sm"
                              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                            >
                              Get Quote
                            </motion.button>
                          </td>
                        ) : null;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-zion-gray-light mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your requirements and get a customized quote for any of our innovative services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-gray-light">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-gray-light">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-gray-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 mx-auto"
            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
          >
            <ExternalLink className="w-5 h-5" />
            <span>Visit Zion Tech Group</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2027;