import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Shield,
  Zap,
  Brain,
  Rocket,
  DollarSign,
  Users,
  Clock,
  Award,
  TrendingUp,
  Sparkles,
  Infinity,
  Crown,
  Target,
  BarChart3,
  Settings,
  Code,
  Cloud,
  Lock,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  ADVANCED_PRICING_GUIDE_2025, 
  ADVANCED_SERVICE_CATEGORIES, 
  ADVANCED_PRICING_FEATURES 
} from '../data/advancedPricingGuide2025';

export default function AdvancedPricingGuide2025() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getYearlyDiscount = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for yearly
  };

  const getTierIcon = (tierName: string) => {
    const iconMap: { [key: string]: any } = {
      'Starter Tier': Star,
      'Professional Tier': Zap,
      'Enterprise Tier': Crown,
      'Revolutionary Tier': Rocket
    };
    return iconMap[tierName] || Star;
  };

  const getTierColor = (tierName: string) => {
    const colorMap: { [key: string]: string } = {
      'Starter Tier': 'from-blue-500 to-cyan-500',
      'Professional Tier': 'from-purple-500 to-pink-500',
      'Enterprise Tier': 'from-emerald-500 to-green-500',
      'Revolutionary Tier': 'from-indigo-500 to-purple-500'
    };
    return colorMap[tierName] || 'from-blue-500 to-cyan-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Advanced Pricing Guide 2025 - Zion Tech Group"
        description="Comprehensive pricing guide for our advanced AI-powered micro SaaS services. Discover transparent pricing, features, and ROI for all service tiers."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2025 Edition
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transparent pricing for our revolutionary AI-powered micro SaaS services. 
              Choose the perfect tier for your business needs and start transforming your operations today.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-1 text-xs text-green-400">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANCED_PRICING_GUIDE_2025.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${
                  selectedTier === tier.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Popular Badge */}
                {tier.name === 'Professional Tier' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Revolutionary Badge */}
                {tier.name === 'Revolutionary Tier' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <Rocket className="h-3 w-3 mr-1" />
                      Revolutionary
                    </span>
                  </div>
                )}

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Tier Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${getTierColor(tier.name)} mb-4`}>
                      {React.createElement(getTierIcon(tier.name), { className: "h-8 w-8 text-white" })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-1">
                      {tier.currency}
                      {billingCycle === 'yearly' 
                        ? getYearlyDiscount(tier.price).toLocaleString()
                        : tier.price.toLocaleString()
                      }
                    </div>
                    <div className="text-gray-400">
                      per {billingCycle === 'yearly' ? 'year' : 'month'}
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${(tier.price * 12 * 0.2).toLocaleString()}/year
                      </div>
                    )}
                  </div>

                  {/* ROI and Market Price */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{tier.roi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-blue-400 font-semibold">{tier.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Delivery:</span>
                      <span className="text-yellow-400 font-semibold">{tier.estimatedDelivery}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {tier.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {tier.features.length > 6 && (
                        <div className="text-sm text-gray-500">
                          +{tier.features.length - 6} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* AI Capabilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      AI Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tier.aiCapabilities.slice(0, 3).map((capability, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended For */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Recommended For
                    </h4>
                    <div className="space-y-1">
                      {tier.recommendedFor.slice(0, 3).map((audience, idx) => (
                        <div key={idx} className="text-sm text-gray-400">
                          • {audience}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-center text-sm">
                      <div className="flex items-center justify-center text-gray-400 mb-2">
                        <Phone className="h-4 w-4 mr-2" />
                        {tier.contactInfo.phone}
                      </div>
                      <div className="flex items-center justify-center text-gray-400">
                        <Mail className="h-4 w-4 mr-2" />
                        {tier.contactInfo.email}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <button
                      onClick={() => setSelectedTier(tier.id)}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        selectedTier === tier.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      }`}
                    >
                      {selectedTier === tier.id ? 'Selected' : 'Choose Plan'}
                    </button>
                    <Link
                      to="/contact"
                      className="block w-full py-3 px-4 border border-blue-500 text-blue-400 text-center rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Categories & Market Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered services across different industries 
              and understand the market opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANCED_SERVICE_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <div className="space-y-2">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-600">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Average Price:</span>
                    <span className="text-green-400 font-semibold">{category.avgPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-blue-400 font-semibold">{category.marketSize}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Support & Service Levels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that matches your business needs and get the assistance 
              you need when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANCED_PRICING_FEATURES.supportLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 text-center"
              >
                <h3 className="text-lg font-bold text-white mb-4">{level.level}</h3>
                <div className="text-2xl font-bold text-blue-400 mb-4">{level.responseTime}</div>
                <div className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a customized quote 
              for your business transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/advanced-micro-saas-2025"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}