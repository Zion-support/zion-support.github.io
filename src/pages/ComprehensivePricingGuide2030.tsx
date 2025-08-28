import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Eye,
  BarChart,
  Layers,
  Cpu as CpuIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Rocket as RocketIcon,
  Cloud as CloudIcon,
  Brain as BrainIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Smartphone as SmartphoneIcon,
  BarChart3 as BarChart3Icon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  ShoppingCart as ShoppingCartIcon,
  Headphones as HeadphonesIcon,
  Mail as MailIcon2,
  Search as SearchIcon,
  HelpCircle as HelpCircleIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  Leaf as LeafIcon,
  Sparkles as SparklesIcon,
  Target as TargetIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  Award as AwardIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Infinity as InfinityIcon,
  Eye as EyeIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

export default function ComprehensivePricingGuide2030() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'budget', name: 'Budget ($1K - $5K)', min: 1000, max: 5000 },
    { id: 'mid-range', name: 'Mid-Range ($5K - $15K)', min: 5000, max: 15000 },
    { id: 'enterprise', name: 'Enterprise ($15K - $50K)', min: 15000, max: 50000 },
    { id: 'premium', name: 'Premium ($50K+)', min: 50000, max: Infinity }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = selectedPriceRange === 'all' || 
      (service.price >= priceRanges.find(p => p.id === selectedPriceRange)?.min! && 
       service.price <= priceRanges.find(p => p.id === selectedPriceRange)?.max!);
    return matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <BrainIcon className="w-6 h-6" />,
      'Cybersecurity': <ShieldIcon className="w-6 h-6" />,
      'Cloud & DevOps': <CloudIcon className="w-6 h-6" />,
      'AI & Marketing': <BarChart3Icon className="w-6 h-6" />,
      'Quantum Computing': <CpuIcon className="w-6 h-6" />,
      'IoT & Edge Computing': <NetworkIcon className="w-6 h-6" />,
      'Blockchain & Web3': <GlobeIcon className="w-6 h-6" />,
      'AI & Healthcare': <HeartIcon className="w-6 h-6" />,
      'FinTech': <DollarSignIcon className="w-6 h-6" />,
      'Digital Twin': <LayersIcon className="w-6 h-6" />,
      'Space Technology': <RocketIcon className="w-6 h-6" />,
      'Sustainable Technology': <LeafIcon className="w-6 h-6" />,
      'AI & Content': <FileTextIcon className="w-6 h-6" />,
      'AI & Customer Support': <MessageSquareIcon className="w-6 h-6" />,
      'AI & HR': <UsersIcon className="w-6 h-6" />,
      'AI & Legal Tech': <ShieldCheckIcon className="w-6 h-6" />,
      'AI & Research': <SearchIcon className="w-6 h-6" />,
      'AI & Green Tech': <LeafIcon className="w-6 h-6" />,
      'AI & Metaverse': <Globe2Icon className="w-6 h-6" />,
      'AI & Space Tech': <RocketIcon className="w-6 h-6" />,
      'AI & Operations': <CpuIcon className="w-6 h-6" />,
      'AI & Development': <CodeIcon className="w-6 h-6" />,
      'AI & Education': <BookOpenIcon className="w-6 h-6" />,
      'AI & Entertainment': <SparklesIcon className="w-6 h-6" />
    };
    return iconMap[category] || <StarIcon className="w-6 h-6" />;
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 5000) return 'text-green-400';
    if (price < 15000) return 'text-yellow-400';
    if (price < 50000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace(/\D/g, ''));
    if (roiValue >= 800) return 'text-emerald-400';
    if (roiValue >= 600) return 'text-green-400';
    if (roiValue >= 400) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const groupedServices = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as { [key: string]: typeof COMPREHENSIVE_INNOVATIVE_SERVICES_2030 });

  const totalValue = filteredServices.reduce((sum, service) => sum + service.price, 0);
  const averageROI = filteredServices.reduce((sum, service) => {
    const roiValue = parseInt(service.roi.replace(/\D/g, ''));
    return sum + roiValue;
  }, 0) / filteredServices.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive AI & Technology Services Pricing Guide 2030 - Zion Tech Group"
        description="Explore our complete pricing guide for cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology platforms. Get detailed pricing, ROI analysis, and market comparisons."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Complete Pricing
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">
                Guide 2030
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              Comprehensive pricing information for all our revolutionary AI-powered services, 
              with detailed ROI analysis, market comparisons, and transparent cost breakdowns.
            </motion.p>
            
            {/* Contact Information Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MailIcon className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPinIcon className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008</p>
                    <p className="text-white font-semibold">Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Overview Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{filteredServices.length}</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">${(totalValue / 1000).toFixed(0)}K</div>
                <div className="text-gray-400">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{averageROI.toFixed(0)}%</div>
                <div className="text-gray-400">Avg ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Price Range</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {Object.entries(groupedServices).map(([category, services]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category}</h3>
                      <p className="text-gray-400">{services.length} services available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">
                        ${(services.reduce((sum, s) => sum + s.price, 0) / 1000).toFixed(0)}K
                      </div>
                      <div className="text-gray-400 text-sm">Total Value</div>
                    </div>
                    {expandedCategory === category ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Services List */}
              <AnimatePresence>
                {expandedCategory === category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-6 space-y-4">
                      {services.map((service) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-200"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Service Info */}
                            <div className="lg:col-span-2">
                              <div className="flex items-start justify-between mb-4">
                                <h4 className="text-xl font-bold text-white">{service.title}</h4>
                                <div className="flex items-center space-x-2">
                                  <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                                  <span className="text-white font-semibold">{service.rating}</span>
                                  <span className="text-gray-400">({service.reviewCount})</span>
                                </div>
                              </div>
                              <p className="text-gray-300 mb-4">{service.description}</p>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.tags.slice(0, 5).map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {/* Competitors */}
                              <div className="mb-4">
                                <p className="text-sm text-gray-400 mb-2">Competitors:</p>
                                <div className="flex flex-wrap gap-2">
                                  {service.competitors.map((competitor, index) => (
                                    <span
                                      key={index}
                                      className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30"
                                    >
                                      {competitor}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Pricing & ROI */}
                            <div className="space-y-4">
                              {/* Price */}
                              <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                                <div className={`text-3xl font-bold ${getPriceRangeColor(service.price)}`}>
                                  {service.currency}{service.price.toLocaleString()}
                                </div>
                                <div className="text-gray-400 text-sm">Market: {service.marketPrice}</div>
                                <div className="text-gray-400 text-sm">Setup: {service.setupTime}</div>
                              </div>

                              {/* ROI */}
                              <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30">
                                <div className={`text-2xl font-bold ${getROIColor(service.roi)}`}>
                                  {service.roi}
                                </div>
                                <div className="text-gray-400 text-sm">Return on Investment</div>
                              </div>

                              {/* AI Score */}
                              <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                                <div className="text-2xl font-bold text-purple-400">
                                  {service.aiScore}%
                                </div>
                                <div className="text-gray-400 text-sm">AI Intelligence Score</div>
                              </div>

                              {/* CTA */}
                              <div className="space-y-2">
                                <Link
                                  to={`/services/${service.id}`}
                                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                                >
                                  Learn More
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                                <Link
                                  to="/request-quote"
                                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                                >
                                  Get Quote
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of AI experts and technology specialists is ready to help you implement 
              cutting-edge solutions that drive growth, efficiency, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 text-lg border border-white/20"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RocketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-gray-300">Get your AI solutions up and running in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-grade security and compliance for your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock expert support and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon components
const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);