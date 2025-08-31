import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { allInnovativeServices2032 } from '../data/innovativeServices2032';
import {
  DollarSign,
  TrendingUp,
  CheckCircle,
  Star,
  Rocket,
  Brain,
  Server,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  BarChart3,
  Shield,
  Target,
  Award,
  Calculator,
  PieChart,
  LineChart,
  BarChart,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Eye,
  Sparkles,
  Quantum,
  Space,
  Healthcare,
  Finance,
  SupplyChain,
  Atom,
  Satellite,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Workflow,
  MessageCircle,
  Calendar,
  PenTool,
  Activity,
  Users2,
  Settings,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Cpu as CpuIcon,
  Workflow as WorkflowIcon,
  Database as DatabaseIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Network as NetworkIcon,
  Wifi as WifiIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon2,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Atom as AtomIcon,
  Leaf as LeafIcon,
  Gamepad2 as GamepadIcon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  Users2 as Users2Icon,
  Cog as CogIcon
} from 'lucide-react';

const ComprehensivePricingGuide2032: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('enterprise');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'text-blue-500' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'text-purple-500' },
    { id: 'it', name: 'IT Infrastructure', icon: Server, color: 'text-green-500' },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, color: 'text-orange-500' }
  ];

  const pricingTiers = [
    { id: 'startup', name: 'Startup', color: 'text-green-500', bgColor: 'bg-green-500/20' },
    { id: 'growth', name: 'Growth', color: 'text-blue-500', bgColor: 'bg-blue-500/20' },
    { id: 'enterprise', name: 'Enterprise', color: 'text-purple-500', bgColor: 'bg-purple-500/20' },
    { id: 'custom', name: 'Custom', color: 'text-orange-500', bgColor: 'bg-orange-500/20' }
  ];

  const filteredServices = () => {
    let services = [];
    
    if (selectedCategory === 'all' || selectedCategory === 'ai') {
      services.push(...allInnovativeServices2032.aiServices);
    }
    if (selectedCategory === 'all' || selectedCategory === 'it') {
      services.push(...allInnovativeServices2032.itServices);
    }
    if (selectedCategory === 'all' || selectedCategory === 'saas') {
      services.push(...allInnovativeServices2032.microSaasServices);
    }

    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return services;
  };

  const getPricingForTier = (service: any, tier: string) => {
    const basePrice = service.price || 0;
    
    switch (tier) {
      case 'startup':
        return Math.round(basePrice * 0.6);
      case 'growth':
        return Math.round(basePrice * 0.8);
      case 'enterprise':
        return basePrice;
      case 'custom':
        return Math.round(basePrice * 1.2);
      default:
        return basePrice;
    }
  };

  const getFeaturesForTier = (service: any, tier: string) => {
    const allFeatures = service.features || [];
    
    switch (tier) {
      case 'startup':
        return allFeatures.slice(0, Math.ceil(allFeatures.length * 0.6));
      case 'growth':
        return allFeatures.slice(0, Math.ceil(allFeatures.length * 0.8));
      case 'enterprise':
        return allFeatures;
      case 'custom':
        return [...allFeatures, 'Custom integrations', 'Dedicated support', 'SLA guarantees'];
      default:
        return allFeatures;
    }
  };

  const toggleServiceExpansion = (serviceId: number) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Quantum Computing':
      case 'AI & Business Automation':
      case 'AI & Space Technology':
        return Brain;
      case 'IT Infrastructure & Quantum Computing':
      case 'IT Security & AI':
        return Server;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'text-purple-500';
    if (category.includes('IT')) return 'text-green-500';
    if (category.includes('Micro SaaS')) return 'text-orange-500';
    return 'text-blue-500';
  };

  const calculateROI = (service: any, tier: string) => {
    const price = getPricingForTier(service, tier);
    const baseROI = service.roi ? parseInt(service.roi.replace(/\D/g, '')) : 300;
    
    switch (tier) {
      case 'startup':
        return Math.round(baseROI * 0.8);
      case 'growth':
        return Math.round(baseROI * 0.9);
      case 'enterprise':
        return baseROI;
      case 'custom':
        return Math.round(baseROI * 1.2);
      default:
        return baseROI;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Comprehensive Pricing Guide 2032 - Zion Tech Group"
        description="Complete pricing information for our revolutionary AI, IT infrastructure, and Micro SaaS services for 2032. Compare pricing tiers, analyze ROI, and find the perfect solution for your business."
        keywords="pricing guide 2032, AI services pricing, IT infrastructure costs, micro SaaS pricing, ROI analysis, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing Guide 2032
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary services. Compare pricing tiers, analyze ROI, and understand the value proposition
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate ROI
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Pricing Tier
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the pricing tier that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${
                  selectedPricingTier === tier.id
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                }`}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${tier.bgColor} ${tier.color} rounded-full text-sm font-medium mb-4`}>
                  {tier.id === 'startup' && <Rocket className="w-4 h-4" />}
                  {tier.id === 'growth' && <TrendingUp className="w-4 h-4" />}
                  {tier.id === 'enterprise' && <Star className="w-4 h-4" />}
                  {tier.id === 'custom' && <Settings className="w-4 h-4" />}
                  {tier.name}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                
                <div className="space-y-2 text-sm text-gray-300">
                  {tier.id === 'startup' && (
                    <>
                      <p>• 60% of enterprise features</p>
                      <p>• Basic support</p>
                      <p>• Standard SLA</p>
                    </>
                  )}
                  {tier.id === 'growth' && (
                    <>
                      <p>• 80% of enterprise features</p>
                      <p>• Priority support</p>
                      <p>• Enhanced SLA</p>
                    </>
                  )}
                  {tier.id === 'enterprise' && (
                    <>
                      <p>• 100% of features</p>
                      <p>• Premium support</p>
                      <p>• Enterprise SLA</p>
                    </>
                  )}
                  {tier.id === 'custom' && (
                    <>
                      <p>• Custom features</p>
                      <p>• Dedicated support</p>
                      <p>• Custom SLA</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setSelectedPricingTier('enterprise')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              View Enterprise Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                        : 'border-slate-600 text-gray-300 hover:border-slate-500 hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${category.color}`} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Pricing & ROI Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare pricing across different tiers and understand the return on investment for each service
            </p>
          </div>

          <div className="space-y-8">
            {filteredServices().map((service) => {
              const Icon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const isExpanded = expandedServices.has(service.id);
              const pricing = getPricingForTier(service, selectedPricingTier);
              const features = getFeaturesForTier(service, selectedPricingTier);
              const roi = calculateROI(service, selectedPricingTier);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${categoryColor.replace('text-', 'bg-')}/20 rounded-lg`}>
                        <Icon className={`w-6 h-6 ${categoryColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">
                          {service.category}
                        </p>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Pricing Tiers Row */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {pricingTiers.map((tier) => {
                      const tierPricing = getPricingForTier(service, tier.id);
                      const tierROI = calculateROI(service, tier.id);
                      
                      return (
                        <div
                          key={tier.id}
                          className={`text-center p-4 rounded-lg border transition-all duration-300 ${
                            selectedPricingTier === tier.id
                              ? 'border-blue-500 bg-blue-500/20'
                              : 'border-slate-600 bg-slate-700/50'
                          }`}
                        >
                          <div className="text-sm text-gray-400 mb-2">{tier.name}</div>
                          <div className="text-2xl font-bold text-white mb-2">
                            ${tierPricing.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400 mb-2">per month</div>
                          <div className="text-sm text-green-400 font-medium">
                            {tierROI}% ROI
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-600 pt-6"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            Features for {pricingTiers.find(t => t.id === selectedPricingTier)?.name} Tier
                          </h4>
                          <ul className="space-y-2">
                            {features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Market Analysis */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                            Market Analysis
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Market Size:</span>
                              <span className="text-green-400 font-semibold">
                                {service.marketSize}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Growth Rate:</span>
                              <span className="text-blue-400 font-semibold">
                                {service.growthRate || 'N/A'}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Innovation Level:</span>
                              <span className="text-purple-400 font-semibold">
                                {service.innovationLevel}
                              </span>
                            </div>
                            {'aiScore' in service && (
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">AI Score:</span>
                                <span className="text-cyan-400 font-semibold">
                                  {service.aiScore}/100
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-slate-600">
                        <Link
                          to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors">
                          <Calculator className="w-4 h-4" />
                          Calculate ROI
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-green-500 text-green-400 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-colors">
                          <Phone className="w-4 h-4" />
                          Contact Sales
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {filteredServices().length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our advanced ROI calculator to understand the potential return on investment for our services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <Calculator className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">ROI Calculator</h3>
                <p className="text-gray-300 text-sm">Calculate potential returns based on your business metrics</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <LineChart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Performance Metrics</h3>
                <p className="text-gray-300 text-sm">Track performance improvements and cost savings</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <BarChart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Market Analysis</h3>
                <p className="text-gray-300 text-sm">Compare with market standards and competitors</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Launch ROI Calculator
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BarChart3 className="w-5 h-5" />
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team to discuss pricing, implementation, and how our services can transform your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2032;