import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Rocket,
  DollarSign,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { 
  COMPREHENSIVE_PRICING_PLANS_2028, 
  SERVICE_CATEGORIES_2028, 
  MARKET_ANALYSIS_2028 
} from '../data/comprehensivePricingGuide2028';

export default function ComprehensivePricing2028() {
  const [selectedPlan, setSelectedPlan] = useState('professional-2028');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectedPlanData = COMPREHENSIVE_PRICING_PLANS_2028.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="2028 Comprehensive Pricing Guide - Zion Tech Group"
        description="Explore our comprehensive 2028 pricing plans for innovative AI services, emerging technologies, and cutting-edge solutions. Transform your business with our revolutionary micro SAAS services."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              2028 Pricing Guide
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive 2028
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Pricing Guide
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover our revolutionary pricing plans for cutting-edge AI services, emerging technologies, 
              and innovative solutions that will transform your business in 2028 and beyond.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-green-400">
                <TrendingUp className="w-5 h-5" />
                <span>Market-Leading ROI</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Zap className="w-5 h-5" />
                <span>Cutting-Edge Technology</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Award className="w-5 h-5" />
                <span>Proven Success</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              2028 Market Analysis
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our services are positioned at the forefront of the rapidly growing AI and emerging technology markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{MARKET_ANALYSIS_2028.totalMarketSize}</div>
              <div className="text-gray-400">Total Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{MARKET_ANALYSIS_2028.aiServicesGrowth}</div>
              <div className="text-gray-400">AI Services Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{MARKET_ANALYSIS_2028.quantumComputingMarket}</div>
              <div className="text-gray-400">Quantum Computing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">{MARKET_ANALYSIS_2028.blockchainMarket}</div>
              <div className="text-gray-400">Blockchain Market</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your 2028 Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your business needs and unlock the power of AI and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COMPREHENSIVE_PRICING_PLANS_2028.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                selectedPlan === plan.id
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 scale-105'
                  : 'bg-white/10 backdrop-blur-lg border-white/20 hover:border-blue-500/30'
              }`}
            >
              {selectedPlan === plan.id && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-gray-400">/{plan.billingCycle}</span>
                </div>
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                {plan.features.slice(0, 6).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.features.length > 6 && (
                  <div className="text-sm text-gray-500 text-center">
                    +{plan.features.length - 6} more features
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold text-white mb-3">Target Audience</h4>
                <div className="space-y-2">
                  {plan.targetAudience.slice(0, 3).map((audience, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      • {audience}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Plan Details */}
      {selectedPlanData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedPlanData.name} - Complete Details
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {selectedPlanData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features and Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Features & Benefits</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Key Benefits</h4>
                    <div className="space-y-2">
                      {selectedPlanData.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Included Services */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Included Services</h3>
                <div className="space-y-2">
                  {selectedPlanData.includedServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-3 h-3 text-green-400" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Add-ons */}
            {selectedPlanData.addOns.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Available Add-ons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedPlanData.addOns.map((addon, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{addon.name}</h4>
                        <span className="text-blue-400 font-semibold">${addon.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-400">{addon.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-5 h-5" />
                  <span>{selectedPlanData.contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-5 h-5" />
                  <span>{selectedPlanData.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <ExternalLink className="w-5 h-5" />
                  <a 
                    href={selectedPlanData.contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {selectedPlanData.contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Service Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive range of AI-powered services and emerging technology solutions
          </p>
        </div>

        <div className="space-y-6">
          {SERVICE_CATEGORIES_2028.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
                {expandedCategories.includes(category.id) ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {expandedCategories.includes(category.id) && (
                <div className="px-6 pb-6 border-t border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {category.services.map((service) => (
                      <div key={service.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="font-medium text-white mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-400 mb-3">{service.description}</p>
                        
                        <div className="space-y-2 mb-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Base Price:</span>
                            <span className="text-white font-semibold">${service.basePrice.toLocaleString()}/month</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Market Price:</span>
                            <span className="text-blue-400">{service.marketPrice}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-white">Key Features:</h5>
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <Check className="w-3 h-3 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team of experts to learn how our innovative 2028 services can revolutionize your operations, 
            increase efficiency, and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <ExternalLink className="w-5 h-5" />
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </motion.div>
      </div>
    </div>
  );
}