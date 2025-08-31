import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  Filter,
  Star,
  TrendingUp,
  Clock,
  Users,
  Target,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Atom,
  Heart,
  Satellite,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Globe,
  Code,
  Lock,
  BarChart3,
  Workflow,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  PenTool,
  Building,
  Truck,
  DollarSign,
  BookOpen,
  MessageCircle,
  HelpCircle,
  FileText,
  Cpu,
  TrendingDown,
  Calendar,
  UserCheck,
  ShieldCheck,
  Zap as ZapIcon,
  ShoppingCart,
  Gauge,
  MessageCircle as MessageCircleIcon,
  Leaf,
  Wallet,
  GraduationCap,
  Factory,
  Car,
  Building2,
  Wifi,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2026, InnovativeService2026 } from '../data/innovativeServices2026';

export default function ComprehensivePricingGuide2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Get unique categories
  const categories = ['all', ...new Set(INNOVATIVE_SERVICES_2026.map(service => service.category))];

  // Price ranges
  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'budget', label: 'Budget ($1K - $5K)', min: 1000, max: 5000 },
    { id: 'mid-range', label: 'Mid-Range ($5K - $10K)', min: 5000, max: 10000 },
    { id: 'enterprise', label: 'Enterprise ($10K+)', min: 10000, max: Infinity }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    const selectedPriceRange = priceRanges.find(range => range.id === priceRange);
    
    return INNOVATIVE_SERVICES_2026
      .filter(service =>
        (selectedCategory === 'all' || service.category === selectedCategory) &&
        (selectedPriceRange?.id === 'all' || 
         (service.price >= selectedPriceRange.min && service.price <= selectedPriceRange.max)) &&
        (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'featured':
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
          case 'popular':
            return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
          case 'new':
            return (b.new ? 1 : 0) - (a.new ? 1 : 0);
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'name':
            return a.name.localeCompare(b.name);
          case 'ai-score':
            return b.aiScore - a.aiScore;
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Brain: BrainIcon,
      TrendingUp: TrendingUp,
      Server: Server,
      Shield: ShieldIcon,
      Lock: Lock,
      Cpu: Cpu,
      Atom: AtomIcon,
      ShieldCheck: ShieldCheck,
      Heart: Heart,
      BookOpen: BookOpen,
      Leaf: LeafIcon,
      Rocket: RocketIcon,
      Zap: ZapIcon2,
      Database: DatabaseIcon,
      Network: Network,
      Workflow: Workflow,
      Globe: Globe,
      Users: Users,
      Target: Target,
      Star: Star
    };
    return iconMap[iconName] || BrainIcon;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Services': 'from-purple-500 to-pink-500',
      'IT Services': 'from-blue-500 to-cyan-500',
      'Micro SAAS': 'from-green-500 to-emerald-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud Solutions': 'from-blue-500 to-indigo-500',
      'Blockchain': 'from-indigo-500 to-purple-500',
      'IoT': 'from-teal-500 to-green-500',
      'Quantum Computing': 'from-orange-500 to-red-500',
      'FinTech': 'from-green-500 to-blue-500',
      'HealthTech': 'from-red-500 to-pink-500',
      'EdTech': 'from-blue-500 to-indigo-500',
      'GreenTech': 'from-green-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.match(/\d+/)?.[0] || '0');
    if (roiValue >= 400) return 'text-green-400';
    if (roiValue >= 250) return 'text-blue-400';
    if (roiValue >= 200) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                2026 Comprehensive Pricing Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge AI, IT, and Micro SAAS solutions. 
              Compare features, benefits, and ROI to find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-300 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="popular">Popular</option>
                  <option value="new">New</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="ai-score">AI Score</option>
                </select>
              </div>
              <div className="text-gray-400">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 bg-white/10 border-b border-white/20 text-left">
              <div className="col-span-4">
                <h3 className="font-semibold text-white">Service</h3>
              </div>
              <div className="col-span-2 text-center">
                <h3 className="font-semibold text-white">Category</h3>
              </div>
              <div className="col-span-2 text-center">
                <h3 className="font-semibold text-white">Price</h3>
              </div>
              <div className="col-span-2 text-center">
                <h3 className="font-semibold text-white">AI Score</h3>
              </div>
              <div className="col-span-2 text-center">
                <h3 className="font-semibold text-white">Actions</h3>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/10">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group hover:bg-white/5 transition-colors duration-300"
                >
                  {/* Main Row */}
                  <div className="grid grid-cols-12 gap-4 p-6 items-center">
                    {/* Service Info */}
                    <div className="col-span-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center flex-shrink-0`}>
                          {React.createElement(getIconComponent(service.icon), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-300 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            {service.featured && (
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                                Featured
                              </span>
                            )}
                            {service.new && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                                New
                              </span>
                            )}
                            {service.popular && (
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-span-2 text-center">
                      <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                        {service.category}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">
                      <div className="text-lg font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Brain className="w-5 h-5 text-purple-400" />
                        <span className="text-lg font-bold text-white">{service.aiScore}</span>
                      </div>
                      <div className="text-sm text-gray-400">/100</div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 text-center">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => toggleServiceExpansion(service.id)}
                          className="inline-flex items-center justify-center px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors"
                        >
                          {expandedService === service.id ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-1" />
                              Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-1" />
                              More
                            </>
                          )}
                        </button>
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white/5 border-t border-white/10"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Features */}
                            <div>
                              <h5 className="font-semibold text-white mb-3 flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                                Key Features
                              </h5>
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="font-semibold text-white mb-3 flex items-center">
                                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                                Benefits
                              </h5>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-300">
                                    <TrendingUp className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Additional Info */}
                            <div>
                              <h5 className="font-semibold text-white mb-3 flex items-center">
                                <Info className="w-5 h-5 text-purple-400 mr-2" />
                                Additional Info
                              </h5>
                              <div className="space-y-3 text-sm text-gray-300">
                                <div>
                                  <span className="font-medium text-white">Setup Time:</span>
                                  <br />
                                  {service.setupTime}
                                </div>
                                <div>
                                  <span className="font-medium text-white">ROI:</span>
                                  <br />
                                  <span className={getROIColor(service.roi)}>{service.roi}</span>
                                </div>
                                <div>
                                  <span className="font-medium text-white">Target Industries:</span>
                                  <br />
                                  {service.targetIndustries.join(', ')}
                                </div>
                                <div>
                                  <span className="font-medium text-white">Integrations:</span>
                                  <br />
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {service.integrations.slice(0, 3).map((integration, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                                        {integration}
                                      </span>
                                    ))}
                                    {service.integrations.length > 3 && (
                                      <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                                        +{service.integrations.length - 3} more
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="mt-6 pt-6 border-t border-white/10">
                            <h5 className="font-semibold text-white mb-3">Tags</h5>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="text-center sm:text-left">
                              <p className="text-gray-300 mb-2">
                                Ready to get started with {service.name}?
                              </p>
                              <p className="text-sm text-gray-400">
                                Contact us for a custom quote and implementation plan
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Link
                                to="/contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                Get Quote
                              </Link>
                              <a
                                href={`mailto:${contactInfo.email}?subject=Quote Request for ${service.name}`}
                                className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Email Us
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Budget Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Budget Solutions</h3>
                <p className="text-gray-400">Perfect for startups and small businesses</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">$1K - $5K</div>
                <p className="text-gray-400">Starting prices</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI Content Intelligence Platform
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Adaptive Learning Platform
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI IoT Edge Analytics
                </div>
              </div>
            </motion.div>

            {/* Mid-Range Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Mid-Range Solutions</h3>
                <p className="text-gray-400">Ideal for growing businesses</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">$5K - $10K</div>
                <p className="text-gray-400">Starting prices</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI Customer Success Predictor
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Decentralized Identity Platform
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Sustainable Energy Optimizer
                </div>
              </div>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-gray-400">For large organizations and enterprises</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">$10K+</div>
                <p className="text-gray-400">Starting prices</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Intelligent DevOps Automation
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI Threat Hunting Platform
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum Optimization Suite
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can create tailored solutions that perfectly fit your business needs and budget requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Info = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
