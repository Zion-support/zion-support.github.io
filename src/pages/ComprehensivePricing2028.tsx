import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Globe, 
  Target,
  DollarSign,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2028 } from '../data/comprehensivePricingGuide2028';

export default function ComprehensivePricing2028() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { overview, pricingTiers, serviceCategories, specialOffers, enterpriseSolutions } = COMPREHENSIVE_PRICING_GUIDE_2028;

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'AI & Automation':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Zap className="w-6 h-6" />;
      case 'Blockchain & AI':
        return <Globe className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Healthcare AI':
        return <Target className="w-6 h-6" />;
      case 'Financial AI':
        return <DollarSign className="w-6 h-6" />;
      case 'Supply Chain AI':
        return <TrendingUp className="w-6 h-6" />;
      case 'Marketing & Content AI':
        return <Users className="w-6 h-6" />;
      case 'Customer Experience AI':
        return <Award className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2028 - Zion Tech Group"
        description="Complete pricing information for our revolutionary micro SAAS services, AI solutions, and cutting-edge business tools for 2028 and beyond."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing Guide 2028
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary micro SAAS services, AI solutions, and cutting-edge business tools. 
              Choose the perfect plan for your organization's AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="w-5 h-5" />
                <span>{overview.contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Mail className="w-5 h-5" />
                <span>{overview.contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <ExternalLink className="w-5 h-5" />
                <a href={overview.contactInfo.website} className="hover:text-blue-400 transition-colors">
                  {overview.contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your AI Transformation Plan</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, we have the perfect AI solution for your organization's needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 ${
                selectedTier === tier.id 
                  ? 'border-blue-400 scale-105' 
                  : 'border-white/20 hover:border-blue-400/50'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.name === 'Premium' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">
                  ${tier.price.toLocaleString()}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <p className="text-sm text-gray-400">{tier.billingCycle}</p>
              </div>

              <p className="text-gray-300 text-sm mb-6 text-center">{tier.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Best for:</h4>
                <p className="text-xs text-gray-300 text-center">{tier.bestFor}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Expected ROI:</h4>
                <p className="text-green-400 font-semibold text-center">{tier.roi}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-4">
                <div className="text-xs text-gray-400 mb-2">
                  Setup Fee: ${tier.setupFee.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">
                  Contract: {tier.contractLength}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Service Categories & Market Insights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive range of AI services across different industries and understand market opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                selectedCategory === category.id 
                  ? 'border-blue-400' 
                  : 'border-white/20 hover:border-blue-400/50'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>

              <p className="text-gray-300 text-sm mb-4">{category.description}</p>

              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Services:</span> {category.services.length} available
                </div>
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Average Price:</span> {category.averagePrice}
                </div>
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Market Size:</span> {category.marketSize}
                </div>
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Growth Rate:</span> {category.growthRate}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-400">Click to view services</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Special Offers & Discounts</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take advantage of our limited-time offers and special pricing for early adopters and enterprise customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {offer.discount}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-300 text-sm">{offer.description}</p>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">
                  <span className="font-medium">Valid until:</span> {offer.validUntil}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Conditions:</h4>
                <ul className="space-y-1">
                  {offer.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200">
                Claim Offer
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Enterprise Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Custom AI transformation packages designed for large enterprises and organizations requiring comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {enterpriseSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{solution.description}</p>
                <div className="text-2xl font-bold text-white">
                  {solution.startingPrice}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                      <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                Contact Sales
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your AI Transformation?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your specific needs, get a custom quote, and begin your journey toward AI-powered business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${encodeURIComponent(overview.contactInfo.phone)}`}
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {overview.contactInfo.phone}
              </a>
              <a
                href={`mailto:${overview.contactInfo.email}`}
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a
                href={overview.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Website
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>Address: {overview.contactInfo.address}</p>
              <p>Last Updated: {overview.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}