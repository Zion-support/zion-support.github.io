import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Globe, 
  Leaf, 
  DollarSign, 
  Eye, 
  Wifi, 
  Link, 
  Heart, 
  BarChart3,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Server,
  Satellite,
  Atom,
  CircuitBoard,
  Cloud,
  Lock,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Target,
  PieChart,
  Activity,
  ShieldCheck,
  Globe2,
  SmartphoneIcon,
  Monitor,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Video,
  Music,
  Gamepad2,
  Palette,
  Code,
  GitBranch,
  DatabaseIcon,
  FileText,
  Calendar,
  Clock,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  EyeOff,
  EyeOn,
  Download,
  Share2,
  Bookmark,
  HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  Home,
  Settings,
  User,
  LogOut,
  HelpCircle,
  Info,
  AlertCircle,
  Check,
  AlertTriangle,
  XCircle,
  Loader2,
  RefreshCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Mute,
  Unmute,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Shuffle,
  Repeat,
  Repeat1,
  SkipBackward,
  SkipForwardIcon,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  FastForwardCircle,
  RewindCircle,
  ShuffleIcon,
  RepeatIcon,
  Repeat1Icon,
  SkipBackwardIcon,
  SkipForwardIcon2,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  FastForwardSquare,
  RewindSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  SkipBackwardSquare,
  SkipForwardSquare2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ADVANCED_INNOVATIVE_SERVICES_2032, getServicesByCategory, getServicesByPriceRange, getServicesByInnovationLevel, getServicesByTags } from '../data/advancedInnovativeServices2032';

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'AI Solutions': Brain,
  'Cybersecurity': Shield,
  'Space Tech': Rocket,
  'Green Tech': Leaf,
  'FinTech & DeFi': DollarSign,
  'Metaverse & AR/VR': Eye,
  'IoT & Edge': Wifi,
  'Blockchain & Web3': Link,
  'BioTech & Health': Heart,
  'Data & Analytics': BarChart3,
  'Micro SaaS': Zap,
  'IT Services': Server,
  'Quantum Computing': Atom,
  'Digital Twin': CircuitBoard,
  'Edge AI': Cpu,
  'Sustainability': Globe,
  'Autonomous Systems': Smartphone
};

const categoryColors: Record<string, string> = {
  'AI Solutions': 'from-purple-600 to-pink-600',
  'Cybersecurity': 'from-red-600 to-orange-600',
  'Space Tech': 'from-blue-600 to-indigo-600',
  'Green Tech': 'from-green-600 to-emerald-600',
  'FinTech & DeFi': 'from-yellow-600 to-orange-600',
  'Metaverse & AR/VR': 'from-purple-600 to-violet-600',
  'IoT & Edge': 'from-cyan-600 to-blue-600',
  'Blockchain & Web3': 'from-orange-600 to-red-600',
  'BioTech & Health': 'from-pink-600 to-rose-600',
  'Data & Analytics': 'from-indigo-600 to-purple-600',
  'Micro SaaS': 'from-emerald-600 to-teal-600',
  'IT Services': 'from-gray-600 to-slate-600',
  'Quantum Computing': 'from-violet-600 to-purple-600',
  'Digital Twin': 'from-teal-600 to-cyan-600',
  'Edge AI': 'from-blue-600 to-cyan-600',
  'Sustainability': 'from-green-600 to-blue-600',
  'Autonomous Systems': 'from-slate-600 to-gray-600'
};

export default function AdvancedInnovativeServices2032() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'innovation' | 'roi' | 'name'>('name');

  const filteredServices = useMemo(() => {
    let filtered = ADVANCED_INNOVATIVE_SERVICES_2032;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);
    }

    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          const innovationOrder = { 'Emerging': 1, 'Advanced': 2, 'Revolutionary': 3, 'Breakthrough': 4 };
          return innovationOrder[b.innovationLevel] - innovationOrder[a.innovationLevel];
        case 'roi':
          const aROI = parseFloat(a.roi.replace(/[^0-9.]/g, ''));
          const bROI = parseFloat(b.roi.replace(/[^0-9.]/g, ''));
          return bROI - aROI;
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [selectedCategory, selectedInnovationLevel, priceRange, searchTerm, sortBy]);

  const categories = Array.from(new Set(ADVANCED_INNOVATIVE_SERVICES_2032.map(service => service.category)));
  const innovationLevels = Array.from(new Set(ADVANCED_INNOVATIVE_SERVICES_2032.map(service => service.innovationLevel)));

  const totalMarketValue = ADVANCED_INNOVATIVE_SERVICES_2032.reduce((total, service) => {
    if (service.marketSize) {
      const value = parseFloat(service.marketSize.replace(/[^0-9.]/g, ''));
      return total + value;
    }
    return total;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Advanced Innovative Services 2032 | Zion Tech Group"
        description="Discover cutting-edge micro SAAS, IT, and AI services that will revolutionize your business. From quantum computing to neuromorphic cybersecurity, explore the future of technology."
        keywords="AI services, quantum computing, cybersecurity, blockchain, metaverse, IoT, edge computing, healthcare technology, fintech, sustainability, space technology"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced Innovative Services 2032
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary micro SAAS, IT, and AI solutions. 
              From quantum computing breakthroughs to neuromorphic cybersecurity, we're building tomorrow's innovations today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">{ADVANCED_INNOVATIVE_SERVICES_2032.length}+</span>
                <span className="ml-2 text-gray-300">Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">${totalMarketValue.toFixed(0)}B+</span>
                <span className="ml-2 text-gray-300">Market Value</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">99.9%</span>
                <span className="ml-2 text-gray-300">Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="https://ziontechgroup.com/services" 
                className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Innovation Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Innovation Level</label>
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Levels</option>
                  {innovationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="innovation">Innovation Level</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/20 border border-white/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">View Mode:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/20 text-gray-300'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/20 text-gray-300'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm text-gray-300">
                Showing {filteredServices.length} of {ADVANCED_INNOVATIVE_SERVICES_2032.length} services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex space-x-6' : ''
                  }`}
                >
                  {/* Service Icon and Category */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-600 to-gray-700'} flex items-center justify-center mb-4`}>
                      {React.createElement(categoryIcons[service.category] || Zap, { className: 'w-8 h-8 text-white' })}
                    </div>
                    {viewMode === 'list' && (
                      <div className="text-center">
                        <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Innovation Level Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        service.innovationLevel === 'Breakthrough' ? 'bg-red-600 text-white' :
                        service.innovationLevel === 'Revolutionary' ? 'bg-orange-600 text-white' :
                        service.innovationLevel === 'Advanced' ? 'bg-blue-600 text-white' :
                        'bg-green-600 text-white'
                      }`}>
                        {service.innovationLevel}
                      </span>
                      {viewMode === 'grid' && (
                        <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      )}
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pricing and ROI */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    {service.technicalSpecs && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Technical Specs:</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                          <div>Uptime: {service.technicalSpecs.uptime}</div>
                          <div>APIs: {service.technicalSpecs.apiEndpoints}</div>
                        </div>
                      </div>
                    )}

                    {/* Market Info */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white font-semibold">{service.marketSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-white">{service.estimatedDelivery}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://ziontechgroup.com/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our cutting-edge services. Our team of experts is ready to help you implement these revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Information */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300">
                <a href="https://ziontechgroup.com/services" className="block hover:text-white transition-colors">All Services</a>
                <a href="https://ziontechgroup.com/about" className="block hover:text-white transition-colors">About Us</a>
                <a href="https://ziontechgroup.com/case-studies" className="block hover:text-white transition-colors">Case Studies</a>
                <a href="https://ziontechgroup.com/blog" className="block hover:text-white transition-colors">Blog</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cutting-edge Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}