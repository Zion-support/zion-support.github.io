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
  Building2,
  Car,
  Factory,
  GraduationCap,
  Scale,
  Truck,
  Wheat,
  Zap2,
  Brain2,
  Cloud2,
  Lock2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
  Eye,
  Download,
  Share2,
  BookOpen,
  Play,
  Calendar,
  UserCheck,
  BarChart,
  PieChart,
  Activity,
  Target as TargetIcon,
  Zap as ZapIcon,
  Crown,
  Sparkles as SparklesIcon,
  Flame,
  Sun,
  Moon,
  Infinity as InfinityIcon,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitBranchPlus,
  GitCommitPlus,
  GitPullRequestPlus,
  GitMergePlus,
  GitComparePlus,
  GitBranchMinus,
  GitCommitMinus,
  GitPullRequestMinus,
  GitMergeMinus,
  GitCompareMinus,
  PenTool,
  X,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2027 } from '../data/comprehensivePricingGuide2027';

export default function ComprehensivePricingGuide2027() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_PRICING_GUIDE_2027.map(service => service.category)))];

  // Filter services
  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2027.filter(service => 
    (activeCategory === 'all' || service.category === activeCategory) &&
    (searchTerm === '' || 
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'Legal Technology': <Scale className="w-6 h-6" />,
    'Supply Chain Management': <Truck className="w-6 h-6" />,
    'Healthcare Technology': <Heart className="w-6 h-6" />,
    'Financial Technology': <DollarSign className="w-6 h-6" />,
    'Content Marketing': <PenTool className="w-6 h-6" />,
    'Customer Service': <MessageSquare className="w-6 h-6" />,
    'Project Management': <Target className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Business Process Automation': <Zap className="w-6 h-6" />,
    'Industrial IoT': <Cpu className="w-6 h-6" />
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Legal Technology': 'from-purple-500 to-pink-500',
      'Supply Chain Management': 'from-blue-500 to-cyan-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Financial Technology': 'from-green-500 to-emerald-500',
      'Content Marketing': 'from-orange-500 to-red-500',
      'Customer Service': 'from-indigo-500 to-purple-500',
      'Project Management': 'from-yellow-500 to-orange-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Business Process Automation': 'from-blue-500 to-indigo-500',
      'Industrial IoT': 'from-gray-500 to-blue-500'
    };
    return colors[category] || 'from-gray-500 to-blue-500';
  };

  const calculateAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for annual
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Complete pricing information for all innovative micro SAAS services. Compare plans, features, and pricing for AI-powered solutions. Get the best value for your business."
        keywords="pricing guide, micro SAAS pricing, AI services pricing, business software pricing, service comparison, pricing plans, enterprise pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide
              </span>
              <br />
              <span className="text-white">2027</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative micro SAAS services. 
              Choose the perfect plan for your business needs and budget.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-gray-300">Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-gray-300">Annual</span>
              {billingCycle === 'annual' && (
                <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                  Save 20%
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/innovative-micro-saas-services-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.serviceId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="flex items-center justify-between mb-4">
                      {categoryIcons[service.category]}
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.serviceName}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>
                  
                  {/* Pricing Tiers */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {service.pricingTiers.map((tier, tierIndex) => (
                        <div
                          key={tierIndex}
                          className={`p-4 rounded-lg border transition-all duration-300 ${
                            tier.popular
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-white/20 bg-white/5'
                          }`}
                        >
                          {tier.popular && (
                            <div className="text-center mb-2">
                              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <h4 className="text-lg font-semibold text-white mb-2">{tier.name}</h4>
                          <div className="text-center mb-4">
                            <span className="text-3xl font-bold text-white">
                              ${billingCycle === 'annual' ? calculateAnnualPrice(tier.price) : tier.price}
                            </span>
                            <span className="text-gray-400 text-sm ml-1">
                              /{billingCycle === 'annual' ? 'year' : 'month'}
                            </span>
                          </div>
                          {tier.savings && billingCycle === 'annual' && (
                            <div className="text-center mb-4">
                              <span className="text-green-400 text-sm font-medium">{tier.savings}</span>
                            </div>
                          )}
                          <ul className="space-y-2 mb-4">
                            {tier.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span className="line-clamp-2">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => openServiceModal(service)}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Service Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <span className="text-gray-400">Market Price:</span>
                        <div className="text-white font-medium">{service.marketPrice}</div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-400">ROI:</span>
                        <div className="text-green-400 font-medium">{service.roi}</div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-400">Setup Time:</span>
                        <div className="text-white font-medium">{service.setupTime}</div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-400">Free Trial:</span>
                        <div className="text-blue-400 font-medium">
                          {service.freeTier ? `Yes (${service.trialPeriod})` : 'No'}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-6">
                      <Link
                        to="/contact"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                      <button
                        onClick={() => openServiceModal(service)}
                        className="px-4 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our innovative micro SAAS solutions. 
              Get started today and experience the future of business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-5 h-5 mr-3 text-purple-400" />
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Transparent Pricing</h4>
                    <p className="text-gray-300 text-sm">No hidden fees, clear pricing tiers, and flexible billing options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Proven ROI</h4>
                    <p className="text-gray-300 text-sm">Average 300-600% return on investment within 6-12 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">24/7 Support</h4>
                    <p className="text-gray-300 text-sm">Round-the-clock technical support and customer service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Enterprise Security</h4>
                    <p className="text-gray-300 text-sm">Bank-level security and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.serviceName}</h2>
                    <p className="text-gray-400">{selectedService.category}</p>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Overview */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Free Tier:</span>
                        <span className="text-blue-400">
                          {selectedService.freeTier ? `Yes (${selectedService.trialPeriod})` : 'No'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Competitors</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.competitors.map((competitor, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Plans</h3>
                    <div className="space-y-4">
                      {selectedService.pricingTiers.map((tier, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border transition-all duration-300 ${
                            tier.popular
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-gray-600 bg-gray-700/50'
                          }`}
                        >
                          {tier.popular && (
                            <div className="text-center mb-2">
                              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white">{tier.name}</h4>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">
                                ${billingCycle === 'annual' ? calculateAnnualPrice(tier.price) : tier.price}
                              </div>
                              <div className="text-gray-400 text-sm">
                                /{billingCycle === 'annual' ? 'year' : 'month'}
                              </div>
                            </div>
                          </div>
                          
                          {tier.savings && billingCycle === 'annual' && (
                            <div className="text-center mb-3">
                              <span className="text-green-400 text-sm font-medium">{tier.savings}</span>
                            </div>
                          )}

                          <div className="mb-4">
                            <h5 className="text-white font-medium mb-2">Features:</h5>
                            <ul className="space-y-1">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {tier.limitations.length > 0 && (
                            <div className="mb-4">
                              <h5 className="text-white font-medium mb-2">Limitations:</h5>
                              <ul className="space-y-1">
                                {tier.limitations.map((limitation, limitationIndex) => (
                                  <li key={limitationIndex} className="flex items-center text-gray-400 text-sm">
                                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                                    {limitation}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="mb-4">
                            <h5 className="text-white font-medium mb-2">Recommended for:</h5>
                            <div className="flex flex-wrap gap-1">
                              {tier.recommendedFor.map((audience, audienceIndex) => (
                                <span key={audienceIndex} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded">
                                  {audience}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link
                            to="/contact"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 block"
                          >
                            Get Started
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="text-gray-400 text-sm">
                      <div>Contact: {selectedService.contactInfo.phone}</div>
                      <div>Email: {selectedService.contactInfo.email}</div>
                    </div>
                    <div className="flex gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Sales
                      </Link>
                      <Link
                        to="/schedule-demo"
                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Demo
                      </Link>
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
}