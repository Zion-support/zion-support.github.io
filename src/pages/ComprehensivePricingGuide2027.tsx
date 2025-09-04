import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Heart, 
  Shield, 
  Cloud, 
  Cpu, 
  Atom, 
  Globe, 
  ShoppingCart, 
  Rocket, 
  Sparkles, 
  Flame, 
  Crown, 
  Infinity, 
  Gauge, 
  GitFork, 
  Truck, 
  BarChart3, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  Key, 
  Globe2, 
  ShieldCheck, 
  CheckCircle, 
  ArrowUpRight, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  Target,
  Award,
  Lightbulb,
  Lock,
  Unlock,
  Scale,
  Building,
  Leaf,
  Car,
  Factory,
  City,
  Home,
  Building2,
  HeartHandshake,
  BookOpen,
  FileText,
  Users as UsersIcon,
  MessageCircle,
  HelpCircle,
  Code,
  Settings,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Heart as HeartIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  Atom as AtomIcon,
  Globe as GlobeIcon,
  ShoppingCart as ShoppingCartIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  Flame as FlameIcon,
  Crown as CrownIcon,
  Infinity as InfinityIcon,
  Gauge as GaugeIcon,
  GitFork as GitForkIcon,
  Truck as TruckIcon,
  BarChart3 as BarChart3Icon,
  Eye as EyeIcon,
  Server as ServerIcon,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Clock as ClockIcon,
  Key as KeyIcon,
  Globe2 as Globe2Icon,
  ShieldCheck as ShieldCheckIcon,
  CheckCircle as CheckCircleIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensivePricingGuide2027(props: any) {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('rating');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Scale, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: Settings, color: 'from-gray-500 to-slate-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: TrendingUp, color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: PenTool, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: MessageCircle, color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: Users, color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: Target, color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Rocket, color: 'from-purple-500 to-pink-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0 - $500)', range: '0-500' },
    { id: 'mid-range', name: 'Mid-Range ($500 - $2000)', range: '500-2000' },
    { id: 'premium', name: 'Premium ($2000 - $5000)', range: '2000-5000' },
    { id: 'enterprise', name: 'Enterprise ($5000+)', range: '5000+' }
  ];

  const sortOptions = [
    { id: 'rating', name: 'Highest Rated', icon: Star },
    { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
    { id: 'roi', name: 'Highest ROI', icon: TrendingUp },
    { id: 'setup-time', name: 'Quickest Setup', icon: Clock }
  ];

  // Filter services based on selected criteria
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'budget' && service.price <= 500) ||
      (selectedPriceRange === 'mid-range' && service.price > 500 && service.price <= 2000) ||
      (selectedPriceRange === 'premium' && service.price > 2000 && service.price <= 5000) ||
      (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return categoryMatch && priceMatch;
  });

  // Sort services based on selected criteria
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'roi':
        const aRoi = parseInt(a.roi?.match(/\d+/)?.[0] || '0');
        const bRoi = parseInt(b.roi?.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      case 'setup-time':
        const aWeeks = parseInt(a.setupTime?.match(/\d+/)?.[0] || '999');
        const bWeeks = parseInt(b.setupTime?.match(/\d+/)?.[0] || '999');
        return aWeeks - bWeeks;
      default:
        return 0;
    }
  });

  const getPriceRangeColor = (props: any) => {
    if (price <= 500) return 'text-green-400';
    if (price <= 2000) return 'text-yellow-400';
    if (price <= 5000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getPriceRangeBadge = (props: any) => {
    if (price <= 500) return { text: 'Budget', color: 'bg-green-500/20 text-green-400' };
    if (price <= 2000) return { text: 'Mid-Range', color: 'bg-yellow-500/20 text-yellow-400' };
    if (price <= 5000) return { text: 'Premium', color: 'bg-orange-500/20 text-orange-400' };
    return { text: 'Enterprise', color: 'bg-red-500/20 text-red-400' };
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing guide for all our AI services, micro SaaS products, and innovative technology solutions. Compare prices, features, and ROI across our comprehensive service catalog."
        keywords="pricing guide, AI services pricing, micro SaaS pricing, technology services cost, ROI comparison, service catalog pricing"
        ogImage="https://ziontechgroup.com/images/pricing-guide-2027.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Pricing Guide{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  2027
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Complete pricing transparency for all our AI services, micro SaaS products, and cutting-edge technology solutions. 
                Compare prices, features, and ROI to find the perfect solution for your business.
              </p>
              
              {/* Key Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400">{COMPREHENSIVE_SERVICES_INDEX_2030.length}+</div>
                  <div className="text-sm text-slate-400">Services Available</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">$199</div>
                  <div className="text-sm text-slate-400">Starting Price</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-purple-400">800%</div>
                  <div className="text-sm text-slate-400">Average ROI</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400">2-3</div>
                  <div className="text-sm text-slate-400">Weeks Setup</div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center px-6 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 font-medium group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 border-b border-slate-700/50">
          <div className="container-responsive">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Price Range & Sort */}
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriceRangeBadge(service.price).color}`}>
                          {getPriceRangeBadge(service.price).text}
                        </span>
                        {service.featured && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                      <div className="text-lg font-bold text-cyan-400">${service.price}</div>
                      <div className="text-xs text-slate-400">Price</div>
                    </div>
                    <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                      <div className="text-lg font-bold text-green-400">{service.rating}</div>
                      <div className="text-xs text-slate-400">Rating</div>
                    </div>
                  </div>

                  {/* ROI & Setup Time */}
                  <div className="space-y-2 mb-4">
                    {service.roi && (
                      <div className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-slate-300">ROI: </span>
                        <span className="text-green-400 font-medium ml-1">{service.roi}</span>
                      </div>
                    )}
                    {service.setupTime && (
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-slate-300">Setup: </span>
                        <span className="text-blue-400 font-medium ml-1">{service.setupTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Market Comparison */}
                  {service.marketPrice && (
                    <div className="mb-4 p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-xs text-slate-400 mb-1">Market Price Range</div>
                      <div className="text-sm text-slate-200 font-medium">{service.marketPrice}</div>
                      <div className="text-xs text-green-400 mt-1">
                        Save up to {Math.round((1 - service.price / (parseInt(service.marketPrice.match(/\d+/)?.[0] || '1000'))) * 100)}%
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Quote for ${service.title}&body=Hi, I'm interested in getting a quote for ${service.title}. Please provide more details.`}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
                    >
                      Get Quote
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your filters or contact us for custom solutions
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Pricing Tiers</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Choose the pricing tier that best fits your business needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Budget Tier */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Budget Solutions</h3>
                  <div className="text-3xl font-bold text-green-400 mb-2">$199 - $500</div>
                  <p className="text-slate-400 text-sm">Perfect for startups and small businesses</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Micro SaaS products
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI services
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Quick setup (1-3 weeks)
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Standard support
                  </li>
                </ul>

                <div className="text-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Budget Solutions Quote&body=Hi, I'm interested in budget solutions ($199-$500 range). Please provide more details.`}
                    className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-200 font-medium"
                  >
                    Get Budget Quote
                  </a>
                </div>
              </div>

              {/* Mid-Range Tier */}
              <div className="bg-slate-800/50 border border-cyan-400/30 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mid-Range Solutions</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$500 - $2000</div>
                  <p className="text-slate-400 text-sm">Ideal for growing businesses</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Advanced AI platforms
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Industry-specific solutions
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Medium setup (3-6 weeks)
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Priority support
                  </li>
                </ul>

                <div className="text-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Mid-Range Solutions Quote&body=Hi, I'm interested in mid-range solutions ($500-$2000 range). Please provide more details.`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                  >
                    Get Mid-Range Quote
                  </a>
                </div>
              </div>

              {/* Premium Tier */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Premium Solutions</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$2000+</div>
                  <p className="text-slate-400 text-sm">For enterprise and large organizations</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    Enterprise AI solutions
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    Custom development
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    Extended setup (6+ weeks)
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    24/7 dedicated support
                  </li>
                </ul>

                <div className="text-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Premium Solutions Quote&body=Hi, I'm interested in premium solutions ($2000+ range). Please provide more details.`}
                    className="inline-flex items-center px-6 py-3 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-200 font-medium"
                  >
                    Get Premium Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container-responsive">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Contact us today to discuss your specific needs and get a customized quote. 
                  Our team of experts is ready to help you find the perfect solution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-slate-400 mt-2">Available 24/7</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400">
                    {contactInfo.address}
                  </p>
                  <p className="text-sm text-slate-400 mt-2">Global remote support</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Custom Quote Request&body=Hi, I'm interested in getting a custom quote for my business needs. Please provide more details about your services and pricing.`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

</motion>
</motion>
</SEO>
</any>
</any>
</any>