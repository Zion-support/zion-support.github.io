import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Calculator,
  BarChart3,
  Target,
  Zap,
  Shield,
  Cpu,
  Brain
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { allPricing2026 } from '../data/comprehensivePricingGuide2026';

const ComprehensivePricingGuide2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allPricing2026.microSaas.length + allPricing2026.itInfrastructure.length + allPricing2026.aiServices.length },
    { id: 'microSaas', name: 'Micro SAAS', icon: Zap, count: allPricing2026.microSaas.length },
    { id: 'itInfrastructure', name: 'IT Infrastructure', icon: Cpu, count: allPricing2026.itInfrastructure.length },
    { id: 'aiServices', name: 'AI Services', icon: Brain, count: allPricing2026.aiServices.length }
  ];

  const filteredServices = () => {
    let services: any[] = [];
    
    if (activeCategory === 'all' || activeCategory === 'microSaas') {
      services.push(...allPricing2026.microSaas);
    }
    if (activeCategory === 'all' || activeCategory === 'itInfrastructure') {
      services.push(...allPricing2026.itInfrastructure);
    }
    if (activeCategory === 'all' || activeCategory === 'aiServices') {
      services.push(...allPricing2026.aiServices);
    }

    return services;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing':
        return <Cpu className="w-5 h-5" />;
      case 'Brain-Computer Interface':
        return <Brain className="w-5 h-5" />;
      case 'Space Technology':
        return <Zap className="w-5 h-5" />;
      case 'Biotechnology':
        return <Shield className="w-5 h-5" />;
      case 'Climate Technology':
        return <Zap className="w-5 h-5" />;
      case 'Artificial General Intelligence':
        return <Brain className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'hourly') {
      return `$${price}/hr`;
    } else if (model === 'project') {
      return `$${price.toLocaleString()}`;
    } else {
      return `$${price.toLocaleString()}/mo`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Comprehensive Pricing Guide 2026 - Zion Tech Group"
        description="Explore our detailed pricing for revolutionary 2026 services. Quantum computing, brain-computer interfaces, space technology, and more with transparent pricing tiers."
        keywords="pricing guide 2026, quantum computing pricing, BCI pricing, space technology pricing, AI services pricing, ROI analysis"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Comprehensive Pricing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              2026
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for our revolutionary services. Discover competitive rates, 
            detailed ROI analysis, and market comparisons for every service tier.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
              <span className="text-2xl font-bold">{allPricing2026.microSaas.length}</span>
              <p className="text-sm text-zinc-300">Micro SAAS Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
              <span className="text-2xl font-bold">{allPricing2026.itInfrastructure.length}</span>
              <p className="text-sm text-zinc-300">IT Infrastructure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
              <span className="text-2xl font-bold">{allPricing2026.aiServices.length}</span>
              <p className="text-sm text-zinc-300">AI Services</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {filteredServices().map((service, index) => (
              <motion.div
                key={service.serviceId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                {/* Service Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-green-600/20 rounded-lg text-green-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.serviceName}</h2>
                  </div>
                  <p className="text-zinc-400 mb-4">{service.category}</p>
                  <div className="flex items-center justify-center gap-6 text-sm text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-400" />
                      Base Price: {formatPrice(service.basePrice, service.pricingModel)}
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      ROI: {service.roiAnalysis.shortTerm}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      Payback: {service.roiAnalysis.paybackPeriod}
                    </div>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {service.tiers.map((tier, tierIndex) => (
                    <div
                      key={tier.name}
                      className={`bg-white/5 border rounded-lg p-6 ${
                        tier.name === 'Professional' || tier.name === 'Production' || tier.name === 'Development'
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-white/20'
                      }`}
                    >
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                        <div className="text-3xl font-bold text-green-400 mb-1">
                          {formatPrice(tier.price, service.pricingModel)}
                        </div>
                        <p className="text-sm text-zinc-400">{tier.billingCycle}</p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-white text-sm">Features:</h4>
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Limitations */}
                      {tier.limitations.length > 0 && (
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-white text-sm">Limitations:</h4>
                          {tier.limitations.map((limitation, limitationIndex) => (
                            <div key={limitationIndex} className="flex items-start gap-2 text-sm text-zinc-400">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <span>{limitation}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Best For */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white text-sm mb-2">Best For:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tier.bestFor.map((audience, audienceIndex) => (
                            <span key={audienceIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-zinc-300">
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ROI and Setup */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-green-400">
                          <TrendingUp className="w-4 h-4" />
                          ROI: {tier.roi}
                        </div>
                        <div className="flex items-center gap-2 text-blue-400">
                          <Clock className="w-4 h-4" />
                          Setup: {tier.setupTime}
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400">
                          <Users className="w-4 h-4" />
                          Support: {tier.support}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Market Comparison */}
                <div className="bg-white/5 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Market Comparison</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Competitors</h4>
                      <div className="space-y-1">
                        {service.marketComparison.competitors.map((competitor, compIndex) => (
                          <div key={compIndex} className="text-sm text-zinc-300">• {competitor}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Market Average</h4>
                      <p className="text-lg font-bold text-green-400">{service.marketComparison.averageMarketPrice}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Our Advantage</h4>
                      <p className="text-sm text-zinc-300">{service.marketComparison.ourAdvantage}</p>
                    </div>
                  </div>
                </div>

                {/* ROI Analysis */}
                <div className="bg-white/5 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">ROI Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-white mb-2">Short Term</h4>
                      <p className="text-lg font-bold text-green-400">{service.roiAnalysis.shortTerm}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-white mb-2">Long Term</h4>
                      <p className="text-lg font-bold text-blue-400">{service.roiAnalysis.longTerm}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-white mb-2">Payback Period</h4>
                      <p className="text-lg font-bold text-yellow-400">{service.roiAnalysis.paybackPeriod}</p>
                    </div>
                  </div>
                </div>

                {/* Volume Discounts */}
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Volume Discounts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-white mb-2">Annual Discount</h4>
                      <p className="text-2xl font-bold text-green-400">{service.volumeDiscounts.annualDiscount}%</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-white mb-2">Enterprise Discount</h4>
                      <p className="text-2xl font-bold text-blue-400">{service.volumeDiscounts.enterpriseDiscount}%</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-white mb-2">Custom Pricing</h4>
                      <p className="text-2xl font-bold text-yellow-400">
                        {service.volumeDiscounts.customPricing ? 'Available' : 'Not Available'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zinc-300 mb-8"
          >
            Contact our team to discuss custom pricing, volume discounts, and how our services can transform your business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              <Mail className="w-5 h-5" />
              Get Custom Quote
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Visit Our Office</h3>
            <p className="text-zinc-300">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-green-400 hover:text-green-300 transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2026;