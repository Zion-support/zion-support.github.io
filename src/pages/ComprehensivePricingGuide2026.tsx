import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
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
import { SEO } from '../components/SEO';
import { ALL_PRICING_GUIDES_2026, marketSummary2026 } from '../data/comprehensivePricingGuide2026';

const ComprehensivePricingGuide2026: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const services = ['all', ...ALL_PRICING_GUIDES_2026.map(s => s.serviceName)];
  const tiers = ['all', 'Starter', 'Professional', 'Enterprise'];

  const filteredPricing = useMemo(() => {
    let filtered = ALL_PRICING_GUIDES_2026;

    if (selectedService !== 'all') {
      filtered = filtered.filter(service => service.serviceName === selectedService);
    }

    return filtered;
  }, [selectedService]);

  const getServiceIcon = (serviceName: string) => {
    switch (serviceName) {
      case 'QuantumFlow Pro': return <Cpu className="w-6 h-6" />;
      case 'NeuroSync AI': return <Brain className="w-6 h-6" />;
      case 'BlockchainForge': return <Shield className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getTierColor = (tierName: string) => {
    switch (tierName) {
      case 'Starter': return 'from-green-500 to-emerald-500';
      case 'Professional': return 'from-blue-500 to-cyan-500';
      case 'Enterprise': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <SEO
        title="Comprehensive Pricing Guide 2026 - Zion Tech Group"
        description="Explore detailed pricing for Zion Tech Group's revolutionary 2026 services. Compare pricing tiers, ROI analysis, and market comparisons."
        keywords="pricing guide, service pricing, ROI analysis, market comparison, 2026 services, Zion Tech Group"
      />

      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Comprehensive Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                Guide 2026
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
            >
              Transparent pricing for revolutionary services. Compare pricing tiers, analyze ROI, and understand the value proposition
              of Zion Tech Group's cutting-edge 2026 solutions.
            </motion.p>

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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {services.map(service => (
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {tiers.map(tier => (
                      <option key={tier} value={tier} className="bg-zinc-800 text-white">
                        {tier === 'all' ? 'All Tiers' : tier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Details Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPricing.map((servicePricing, index) => (
              <motion.div
                key={servicePricing.serviceId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-16"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {servicePricing.marketAnalysis.competitors.map((competitor, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                          <span className="text-zinc-300">{competitor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {servicePricing.pricingTiers.map((tier, tierIndex) => (
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
                      )}

                      {/* Target Audience */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.targetAudience.map((audience, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">ROI:</span>
                          <span className="text-white font-medium">{tier.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Setup Time:</span>
                          <span className="text-white font-medium">{tier.setupTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Support:</span>
                          <span className="text-white font-medium">{tier.support}</span>
                        </div>
                      </div>

                      {/* Market Comparison */}
                      <div className="mb-6 p-3 bg-white/5 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-zinc-400 mb-1">Market Position</div>
                          <div className="text-white font-medium">{tier.marketComparison}</div>
                        </div>
                      </div>

                      {/* Volume Discounts */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Volume Discounts</h4>
                        <div className="space-y-2">
                          {tier.volumeDiscounts.map((discount, idx) => (
                            <div key={idx} className="text-sm text-zinc-300 text-center p-2 bg-white/5 rounded-lg">
                              {discount}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Special Offers */}
                <div className="mt-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Special Offers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400 mb-2">{servicePricing.specialOffers.annualDiscount}</div>
                      <div className="text-zinc-400">Annual Billing</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{servicePricing.specialOffers.enterpriseDiscount}</div>
                      <div className="text-zinc-400">Enterprise</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{servicePricing.specialOffers.startupProgram}</div>
                      <div className="text-zinc-400">Startup Program</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{servicePricing.specialOffers.referralProgram}</div>
                      <div className="text-zinc-400">Referral Program</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Market Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Market Trends & Competitive Advantages</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Key Trends */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Trends</h3>
                  <div className="space-y-4">
                    {marketSummary2026.keyTrends.map((trend, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-300">{trend}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitive Advantages */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantages</h3>
                  <div className="space-y-4">
                    {marketSummary2026.competitiveAdvantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-300">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Contact our team to discuss pricing, implementation, and how our revolutionary 2026 services
                can transform your business with unprecedented ROI and performance improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-zinc-400">
                <p>364 E Main St STE 1008 Middletown DE 19709</p>
                <p className="text-sm mt-2">Available 24/7 for enterprise clients</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2026;