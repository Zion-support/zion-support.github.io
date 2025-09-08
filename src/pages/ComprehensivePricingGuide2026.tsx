import React, { useState, useMemo } from 'react';
import { motion  } from 'framer-motion';
import { DollarSign, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  Shield,
  Cpu,
  Brain
 } from 'lucide-react';
import { SEO  } from '../components/SEO';
import { ALL_PRICING_GUIDES_2026, marketSummary2026  } from '../data/comprehensivePricingGuide2026';

const ComprehensivePricingGuide2026: React.FC = (): JSX.Element => {
  const [selectedService, setSelectedService] = useState<any>('all');
  const [selectedTier, setSelectedTier] = useState<any>('all');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES_2026.map(s => s.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'micro', label: 'Micro SAAS ($1K-$5K)' },
    { value: 'mid', label: 'Mid-Range ($5K-$15K)' },
    { value: 'enterprise', label: 'Enterprise ($15K+)' }
  ];

  const filteredServices = INNOVATIVE_SERVICES_2026.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'micro' && service.price < 5000) ||
      (priceRange === 'mid' && service.price >= 5000 && service.price < 15000) ||
      (priceRange === 'enterprise' && service.price >= 15000);
    return matchesCategory && matchesPrice;
  });

  const getServiceIcon = (serviceName: string)  => {
    switch (serviceName) {
      case 'QuantumFlow Pro': return <Cpu className="w-6 h-6" />;
      case 'NeuroSync AI': return <Brain className="w-6 h-6" />;
      case 'BlockchainForge': return <Shield className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getTierColor = (tierName: string)  => {
    switch (tierName) {
      case 'Starter': return 'from-green-500 to-emerald-500';
      case 'Professional': return 'from-blue-500 to-cyan-500';
      case 'Enterprise': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'Micro SaaS': return Zap;
      case 'Cybersecurity': return Shield;
      case 'Healthcare Tech': return Heart;
      case 'BioTech & Health': return Heart;
      case 'FinTech & DeFi': return DollarSign;
      case 'Supply Chain': return Truck;
      case 'Education Tech': return BookOpen;
      case 'Legal Tech': return Scale;
      case 'Real Estate Tech': return Home;
      case 'Sustainability': return Leaf;
      case 'Smart Cities': return Building2;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'Micro SaaS': return 'from-blue-600 to-cyan-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Healthcare Tech': return 'from-red-600 to-pink-600';
      case 'BioTech & Health': return 'from-red-600 to-pink-600';
      case 'FinTech & DeFi': return 'from-green-600 to-emerald-600';
      case 'Supply Chain': return 'from-yellow-600 to-orange-600';
      case 'Education Tech': return 'from-indigo-600 to-purple-600';
      case 'Legal Tech': return 'from-gray-600 to-slate-600';
      case 'Real Estate Tech': return 'from-blue-600 to-indigo-600';
      case 'Sustainability': return 'from-green-600 to-teal-600';
      case 'Smart Cities': return 'from-cyan-600 to-blue-600';
      default: return 'from-purple-600 to-blue-600';
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
  {/* Empty JSX fragment */}
      <SEO 
        title="Comprehensive Pricing Guide 2026 | Zion Tech Group"
        description="Complete pricing guide for our 2026 innovative services. Compare AI, IT, and micro SAAS solutions with market prices and ROI analysis."
        keywords="pricing guide 2026, AI services pricing, IT solutions cost, micro SAAS pricing, ROI analysis"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
              Compare costs, ROI, and market prices to make informed decisions.
            </p>
            
            {/* Market Summary Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">{marketSummary2026.totalMarketSize}</div>
                <div className="text-zinc-400">Total Market Size</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">{marketSummary2026.growthRate}</div>
                <div className="text-zinc-400">Average Growth Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">{ALL_PRICING_GUIDES_2026.length}</div>
                <div className="text-zinc-400">Services Available</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service Filter */}
                <div>
                  <label className="block text-white mb-2 font-medium">Select Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {services.map(service  => (
                      <option key={service} value={service} className="bg-zinc-800 text-white">
                        {service === 'all' ? 'All Services' : service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tier Filter */}
                <div>
                  <label className="block text-white mb-2 font-medium">Select Tier</label>
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {tiers.map(tier  => (
                      <option key={tier} value={tier} className="bg-zinc-800 text-white">
                        {tier === 'all' ? 'All Tiers' : tier}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {SERVICE_STATISTICS_2026.aiServices}
                </div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {SERVICE_STATISTICS_2026.microSaasServices}
                </div>
                <div className="text-gray-300">Micro SAAS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      {getServiceIcon(servicePricing.serviceName)}
                    </div>
                    <h2 className="text-4xl font-bold text-white">{servicePricing.serviceName}</h2>
                  </div>
                  <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                    {servicePricing.marketAnalysis.valueProposition}
                  </p>
                </div>

                {/* Market Analysis */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{servicePricing.marketAnalysis.averagePrice}</div>
                      <div className="text-zinc-400">Average Market Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{servicePricing.marketAnalysis.priceRange}</div>
                      <div className="text-zinc-400">Price Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{servicePricing.marketAnalysis.competitors.length}</div>
                      <div className="text-zinc-400">Competitors</div>
                    </div>
                  </div>
                  
                  {/* Competitors */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3 text-center">Competitor Pricing</h4>
                    <div className="grid grid-cols-1 md: anygrid-cols-2 gap-3">
                      {servicePricing.marketAnalysis.competitors.map((competitor, idx)  => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                          <span className="text-zinc-300">{competitor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md: anygrid-cols-3 gap-6">
                  {servicePricing.pricingTiers.map((tier, tierIndex)  => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index * 0.1) + (tierIndex * 0.1) }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {/* Tier Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-block p-2 rounded-lg bg-gradient-to-r ${getTierColor(tier.name)} mb-4`}>
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                        <div className="text-4xl font-bold text-white mb-1">
                          ${tier.price.toLocaleString()}
                        </div>
                        <div className="text-zinc-400">/{tier.billingCycle}</div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                        <div className="space-y-2">
                          {tier.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Limitations */}
                      {tier.limitations.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Limitations</h4>
                          <div className="space-y-2">
                            {tier.limitations.map((limitation, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                                <span>{limitation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Price Range Badge */}
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getPriceRangeColor(getPriceRange(service.price))} text-white`}>
                          {getPriceRange(service.price).toUpperCase()}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & ROI */}
                    <div className="lg:text-right">
                      <div className="text-4xl font-bold text-white mb-2">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-lg text-gray-300 mb-2">
                        Market: {service.marketPrice}
                      </div>
                      <div className="text-sm text-green-400 font-semibold mb-4">
                        ROI: {service.roi}
                      </div>
                      
                      {/* Competitors */}
                      <div className="text-sm text-gray-300 mb-4">
                        <div className="font-medium mb-1">Competitors:</div>
                        <div className="flex flex-wrap gap-1">
                          {service.competitors.slice(0, 3).map((competitor, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-600/30 text-gray-300 rounded text-xs">
                              {competitor}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pricing Tiers & Value Propositions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right tier for your business needs and budget requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SAAS Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Micro SAAS</h3>
                <p className="text-gray-300">Perfect for startups and small businesses</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                $1K - $5K
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Quick setup (2-4 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Essential features</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>400-600% ROI</span>
                </li>
              </ul>
            </motion.div>

            {/* Mid-Range Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mid-Range</h3>
                <p className="text-gray-300">Ideal for growing businesses</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                $5K - $15K
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Standard setup (4-8 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Advanced features</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>600-800% ROI</span>
                </li>
              </ul>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-300">For large organizations</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                $15K+
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Custom setup (8-12 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Full feature set</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>800-1000% ROI</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )};

export default ComprehensivePricingGuide2026;>