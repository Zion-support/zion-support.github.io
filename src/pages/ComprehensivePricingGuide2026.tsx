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
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Rocket,
  Atom,
  Lock,
  Cpu,
  Leaf,
  ShoppingCart,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Eye,
  PenTool,
  Heart,
  Building,
  Car,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { comprehensivePricingGuide2026, pricingCategories, pricingBenefits } from '../data/comprehensivePricingGuide2026';

export default function ComprehensivePricingGuide2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = comprehensivePricingGuide2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && parseFloat(service.ourPrice.replace('$', '').replace(',', '')) < 500) ||
                        (selectedPriceRange === 'mid' && parseFloat(service.ourPrice.replace('$', '').replace(',', '')) >= 500 && parseFloat(service.ourPrice.replace('$', '').replace(',', '')) < 2000) ||
                        (selectedPriceRange === 'premium' && parseFloat(service.ourPrice.replace('$', '').replace(',', '')) >= 2000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.ourPrice.replace('$', '').replace(',', '')) - parseFloat(b.ourPrice.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.ourPrice.replace('$', '').replace(',', '')) - parseFloat(a.ourPrice.replace('$', '').replace(',', ''));
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
      case 'implementation':
        return parseInt(a.implementationTime.split('-')[0]) - parseInt(b.implementationTime.split('-')[0]);
      default:
        return b.featured ? 1 : -1;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <ShoppingCart className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Data & Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Globe className="w-6 h-6" />;
      case 'IoT & Edge': return <Cpu className="w-6 h-6" />;
      case 'Green Tech': return <Leaf className="w-6 h-6" />;
      case 'Space Tech': return <Rocket className="w-6 h-6" />;
      case 'BioTech & Health': return <Heart className="w-6 h-6" />;
      case 'FinTech & DeFi': return <DollarSign className="w-6 h-6" />;
      case 'Metaverse & AR/VR': return <Eye className="w-6 h-6" />;
      case 'Autonomous Systems': return <Car className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-orange-500 to-red-500';
      case 'AI Solutions': return 'from-purple-500 to-pink-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'Cybersecurity': return 'from-green-500 to-emerald-500';
      case 'Data & Analytics': return 'from-indigo-500 to-purple-500';
      case 'Cloud & DevOps': return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing': return 'from-violet-500 to-purple-500';
      case 'Blockchain & Web3': return 'from-yellow-500 to-orange-500';
      case 'IoT & Edge': return 'from-teal-500 to-green-500';
      case 'Green Tech': return 'from-green-500 to-teal-500';
      case 'Space Tech': return 'from-blue-500 to-indigo-500';
      case 'BioTech & Health': return 'from-red-500 to-pink-500';
      case 'FinTech & DeFi': return 'from-emerald-500 to-green-500';
      case 'Metaverse & AR/VR': return 'from-purple-500 to-indigo-500';
      case 'Autonomous Systems': return 'from-gray-500 to-blue-500';
      default: return 'from-gray-500 to-blue-500';
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Pricing Guide 2026
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative micro SAAS, IT services, and AI solutions. 
              Save 30-48% compared to market rates with proven ROI of 300-600%.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/20">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Save 30-48%</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/20">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">300-600% ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300">Enterprise Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {pricingCategories.map((category) => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $500</option>
                <option value="mid">$500 - $2,000</option>
                <option value="premium">$2,000+</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="roi">Highest ROI</option>
                <option value="implementation">Fastest Implementation</option>
              </select>
            </div>

            <div className="text-center mt-6 text-slate-400">
              {filteredServices.length} services found
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with proven ROI, competitive pricing, and world-class support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Pricing & Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Detailed pricing for all our services with comprehensive feature breakdowns and ROI projections.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                  {/* Service Header */}
                  <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} text-white text-xs font-medium`}>
                              {service.category}
                            </span>
                            {service.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Pricing Summary */}
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-1">{service.ourPrice}</div>
                        <div className="text-slate-400 capitalize">{service.billing}</div>
                        <div className="text-sm text-green-400 mt-1">Save {service.savings}</div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4 text-lg">
                      {service.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-cyan-400">{service.ourPrice}</div>
                        <div className="text-xs text-slate-400">Our Price</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-green-400">{service.roi}</div>
                        <div className="text-xs text-slate-400">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-blue-400">{service.implementationTime}</div>
                        <div className="text-xs text-slate-400">Implementation</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-purple-400">{service.supportLevel}</div>
                        <div className="text-xs text-slate-400">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className="p-6">
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-between text-left mb-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white">
                        View Detailed Pricing & Features
                      </span>
                      {expandedService === service.id ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                      )}
                    </button>

                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Pricing Tiers */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4">Pricing Tiers</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {service.pricingTiers.map((tier, idx) => (
                              <div
                                key={tier.name}
                                className={`p-4 rounded-lg border ${
                                  tier.popular 
                                    ? 'border-cyan-400/50 bg-cyan-500/10' 
                                    : 'border-slate-600/50 bg-slate-700/30'
                                }`}
                              >
                                {tier.popular && (
                                  <div className="text-center mb-3">
                                    <span className="inline-block px-2 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">
                                      Most Popular
                                    </span>
                                  </div>
                                )}
                                <h5 className="text-lg font-bold text-white mb-2">{tier.name}</h5>
                                <div className="text-2xl font-bold text-cyan-400 mb-3">{tier.price}</div>
                                <p className="text-sm text-slate-400 mb-4">{tier.bestFor}</p>
                                <ul className="space-y-2">
                                  {tier.features.map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-center text-sm text-slate-300">
                                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features & Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-300">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Benefits</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Use Cases & Target Market */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Use Cases</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.useCases.map((useCase, idx) => (
                                <span key={idx} className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Target Market</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.targetMarket.map((market, idx) => (
                                <span key={idx} className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                                  {market}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Compliance & Integrations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Compliance</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.compliance.map((compliance, idx) => (
                                <span key={idx} className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                                  {compliance}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Integrations</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.integrations.map((integration, idx) => (
                                <span key={idx} className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                                  {integration}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center pt-6 border-t border-slate-700/50">
                          <a
                            href={service.href}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                          >
                            {service.ctaLabel}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-600/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Contact us to discuss your specific needs, get a custom quote, or schedule a demo of any of our services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+13024640950" className="text-slate-300 hover:text-cyan-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <a href="https://ziontechgroup.com/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="https://ziontechgroup.com/contact" className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300">
                    Schedule Demo
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Pricing Summary</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Services Available</span>
                      <span className="text-2xl font-bold text-cyan-400">{comprehensivePricingGuide2026.length}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Average Savings</span>
                      <span className="text-2xl font-bold text-green-400">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Average ROI</span>
                      <span className="text-2xl font-bold text-blue-400">400%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Support Level</span>
                      <span className="text-2xl font-bold text-purple-400">24/7</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-slate-600/30 rounded-lg">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Special Offers</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Annual billing: Save 20%</li>
                      <li>• Enterprise packages: Custom pricing</li>
                      <li>• Startup discounts: Up to 50% off</li>
                      <li>• Referral program: 10% credit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}