import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Bot,
  CircuitBoard,
  Satellite,
  Atom,
  Blockchain,
  Crown,
  Gem,
  Star as StarIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_2030 } from '../data/comprehensiveServices2030';

export default function ComprehensivePricingGuide2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

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
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($1K - $10K)', range: '1K-10K' },
    { id: 'mid-range', name: 'Mid-Range ($10K - $50K)', range: '10K-50K' },
    { id: 'enterprise', name: 'Enterprise ($50K+)', range: '50K+' }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    
    let matchesPrice = true;
    if (priceRange === 'budget') {
      matchesPrice = service.price >= 1000 && service.price < 10000;
    } else if (priceRange === 'mid-range') {
      matchesPrice = service.price >= 10000 && service.price < 50000;
    } else if (priceRange === 'enterprise') {
      matchesPrice = service.price >= 50000;
    }
    
    return matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence': return <Brain className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'AI & Marketing': return <TrendingUp className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Network className="w-6 h-6" />;
      case 'Blockchain & Web3': return <CircuitBoard className="w-6 h-6" />;
      case 'AI & Healthcare': return <Heart className="w-6 h-6" />;
      case 'FinTech': return <DollarSign className="w-6 h-6" />;
      case 'Digital Twin': return <Globe className="w-6 h-6" />;
      case 'Space Technology': return <Satellite className="w-6 h-6" />;
      case 'Sustainable Technology': return <Leaf className="w-6 h-6" />;
      case 'AI & Content': return <FileText className="w-6 h-6" />;
      case 'AI & Customer Support': return <MessageSquare className="w-6 h-6" />;
      case 'AI & HR': return <Users className="w-6 h-6" />;
      case 'AI & Legal Tech': return <ShieldCheck className="w-6 h-6" />;
      case 'AI & Research': return <Search className="w-6 h-6" />;
      case 'AI & Green Tech': return <Leaf className="w-6 h-6" />;
      case 'AI & Metaverse': return <Globe2 className="w-6 h-6" />;
      case 'AI & Space Tech': return <Rocket className="w-6 h-6" />;
      case 'AI & Operations': return <Cpu className="w-6 h-6" />;
      case 'AI & Development': return <Code className="w-6 h-6" />;
      case 'AI & Education': return <Award className="w-6 h-6" />;
      case 'AI & Entertainment': return <Sparkles className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  const getPriceTier = (price: number) => {
    if (price < 10000) return { tier: 'Budget', icon: <StarIcon className="w-4 h-4" />, color: 'text-green-400' };
    if (price < 50000) return { tier: 'Mid-Range', icon: <Gem className="w-4 h-4" />, color: 'text-blue-400' };
    return { tier: 'Enterprise', icon: <Crown className="w-4 h-4" />, color: 'text-purple-400' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for all our AI, blockchain, quantum computing, and emerging technology services. Transparent pricing with guaranteed ROI."
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
              <div className="text-3xl font-bold text-green-400 mb-2">${Math.min(...COMPREHENSIVE_INNOVATIVE_SERVICES_2030.map(s => s.price)).toLocaleString()}</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">${Math.max(...COMPREHENSIVE_INNOVATIVE_SERVICES_2030.map(s => s.price)).toLocaleString()}</div>
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
                  <StarIcon className="w-8 h-8 text-white" />
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
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setPriceRange(range.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    priceRange === range.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => {
              const priceTier = getPriceTier(service.price);
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
                        {getCategoryIcon(service.category)}
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
                    {priceTier.icon}
                    <span className={`text-sm font-semibold ${priceTier.color}`}>
                      {priceTier.tier}
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