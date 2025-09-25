import React, { useState } from "react"
import { motion } from "framer-motion"
import { ;
  Check,;
  Star, ;
  TrendingUp, ;
  Zap, ;
  Shield, ;
  Brain, ;
  Globe, ;
  Rocket,;
  DollarSign,;
  Users,;
  Target,;
  Award,;
  Phone,;
  Mail,;
  ExternalLink,;
  ArrowRight,;
  ChevronDown,;
  ChevronUp;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { ;
  COMPREHENSIVE_PRICING_PLANS_2028,;
  SERVICE_CATEGORIES_2028, ;
  MARKET_ANALYSIS_2028 ;
} from "../data/comprehensivePricingGuide2028"
export default function ComprehensivePricing2028() {;
  const [selectedPlan, setSelectedPlan] = useState('professional-2028'),;
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]),;

  const toggleCategory = (categoryId: string) => {;
    setExpandedCategories(prev => ;
      prev.includes(categoryId) ;
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    ),;
  };
  const selectedPlanData = COMPREHENSIVE_PRICING_PLANS_2028.find(plan => plan.id === selectedPlan)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="2028 Comprehensive Pricing Guide - Zion Tech Group"
        description="Explore our comprehensive 2028 pricing plans for innovative AI services, emerging technologies, and cutting-edge solutions. Transform your business with our revolutionary micro SAAS services."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <[^>]*/>
              2028 Pricing Guide;
            </[^>]*>
            <motion.h1 ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Comprehensive 2028;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">;
                Pricing Guide;
              </[^>]*>
            </[^>]*>
            <motion.p ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.4 }};
              className="[^"]*"
            >;
              Discover our revolutionary pricing plans for cutting-edge AI services, emerging technologies;
              and innovative solutions that will transform your business in 2028 and beyond.;
            </[^>]*>
            <motion.div ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.6 }};
              className="[^"]*"
            >;
              <div className="flex items-center gap-2 text-green-400">;
                <[^>]*/>
                <span>Market-Leading ROI</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-blue-400">;
                <[^>]*/>
                <span>Cutting-Edge Technology</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-purple-400">;
                <[^>]*/>
                <span>Proven Success</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Market Analysis */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          className="[^"]*"
        >;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              2028 Market Analysis;
            </[^>]*>
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Our services are positioned at the forefront of the rapidly growing AI and emerging technology markets;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            <div className="text-center">;
              <div className="text-3xl font-bold text-blue-400 mb-2">{MARKET_ANALYSIS_2028.totalMarketSize}</[^>]*>
              <div className="text-gray-400">Total Market Size</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-green-400 mb-2">{MARKET_ANALYSIS_2028.aiServicesGrowth}</[^>]*>
              <div className="text-gray-400">AI Services Growth</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-purple-400 mb-2">{MARKET_ANALYSIS_2028.quantumComputingMarket}</[^>]*>
              <div className="text-gray-400">Quantum Computing</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-orange-400 mb-2">{MARKET_ANALYSIS_2028.blockchainMarket}</[^>]*>
              <div className="text-gray-400">Blockchain Market</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Plans */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            Choose Your 2028 Plan;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Select the perfect plan for your business needs and unlock the power of AI and emerging technologies;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          {COMPREHENSIVE_PRICING_PLANS_2028.map((plan, index) => (;
            <motion.div
              key={plan.id};
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: index * 0.2 }};
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${;
                selectedPlan === plan.id
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 scale-105'
                  : 'bg-white/10 backdrop-blur-lg border-white/20 hover:border-blue-500/30'
              }`};
            >;
              {selectedPlan === plan.id && (;&& (; (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">;
                    Most Popular;
                  </[^>]*>
                </[^>]*>
              )};

              <div className="text-center mb-8">;
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                <p className="text-gray-400 mb-6">{plan.description}</[^>]*>
                <div className="mb-4">;
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</[^>]*>
                  <span className="text-gray-400">/{plan.billingCycle}</[^>]*>
                </[^>]*>
                <button;
                  onClick={() => setSelectedPlan(plan.id)};
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${;
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`};
                >;
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </[^>]*>
              </[^>]*>

              <div className="space-y-4">;
                <h4 className="font-semibold text-white mb-3">Key Features</[^>]*>
                {plan.features.slice(0, 6).map((feature, idx) => (;
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">;
                    <[^>]*/>
                    <span>{feature}</[^>]*>
                  </[^>]*>
                ))};
                {plan.features.length > 6 && (;&& (; (
                  <div className="text-sm text-gray-500 text-center">;
                    +{plan.features.length - 6} more features;
                  </[^>]*>
                )};
              </[^>]*>

              <div className="mt-8 pt-6 border-t border-white/20">;
                <h4 className="font-semibold text-white mb-3">Target Audience</[^>]*>
                <div className="space-y-2">;
                  {plan.targetAudience.slice(0, 3).map((audience, idx) => (;
                    <div key={idx} className="text-sm text-gray-400">;
                      • {audience};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Selected Plan Details */};
      {selectedPlanData && (;&& (; (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="text-center mb-8">;
              <h2 className="text-3xl font-bold text-white mb-4">;
                {selectedPlanData.name} - Complete Details;
              </[^>]*>
              <p className="text-gray-300 max-w-2xl mx-auto">;
                {selectedPlanData.description};
              </[^>]*>
            </[^>]*>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {/* Features and Benefits */};
              <div>;
                <h3 className="text-xl font-semibold text-white mb-4">Features & Benefits</[^>]*>
                <div className="space-y-4">;
                  <div>;
                    <h4 className="font-medium text-blue-400 mb-2">Key Benefits</[^>]*>
                    <div className="space-y-2">;
                      {selectedPlanData.benefits.map((benefit, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">;
                          <[^>]*/>
                          <span>{benefit}</[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Included Services */};
              <div>;
                <h3 className="text-xl font-semibold text-white mb-4">Included Services</[^>]*>
                <div className="space-y-2">;
                  {selectedPlanData.includedServices.map((service, idx) => (;
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">;
                      <[^>]*/>
                      <span>{service}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Add-ons */};
            {selectedPlanData.addOns.length > 0 && (;&& (; (
              <div className="mt-8 pt-6 border-t border-white/20">;
                <h3 className="text-xl font-semibold text-white mb-4">Available Add-ons</[^>]*>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
                  {selectedPlanData.addOns.map((addon, idx) => (;
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">;
                      <div className="flex items-center justify-between mb-2">;
                        <h4 className="font-medium text-white">{addon.name}</[^>]*>
                        <span className="text-blue-400 font-semibold">${addon.price.toLocaleString()}</[^>]*>
                      </[^>]*>
                      <p className="text-sm text-gray-400">{addon.description}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            )};

            {/* Contact Information */};
            <div className="mt-8 pt-6 border-t border-white/20 text-center">;
              <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</[^>]*>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                <div className="flex items-center gap-2 text-white">;
                  <[^>]*/>
                  <span>{selectedPlanData.contactInfo.phone}</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-2 text-white">;
                  <[^>]*/>
                  <span>{selectedPlanData.contactInfo.email}</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-2 text-white">;
                  <[^>]*/>
                  <a ;
                    href={selectedPlanData.contactInfo.website} ;
                    target="_blank" ;
                    rel="noopener noreferrer"
                    className="[^"]*"
                  >;
                    {selectedPlanData.contactInfo.website.replace('https://[^;]*
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* Service Categories */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            Service Categories;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Explore our comprehensive range of AI-powered services and emerging technology solutions;
          </[^>]*>
        </[^>]*>

        <div className="space-y-6">;
          {SERVICE_CATEGORIES_2028.map((category, index) => (;
            <motion.div
              key={category.id};
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: index * 0.1 }};
              className="[^"]*"
            >;
              <button;
                onClick={() => toggleCategory(category.id)};
                className="[^"]*"
              >;
                <div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</[^>]*>
                  <p className="text-gray-400">{category.description}</[^>]*>
                </[^>]*>
                {expandedCategories.includes(category.id) ? (;
                  <[^>]*/>
                ) : (;
                  <[^>]*/>
                )};
              </[^>]*>

              {expandedCategories.includes(category.id) && (;&& (; (
                <div className="px-6 pb-6 border-t border-white/20">;
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">;
                    {category.services.map((service) => (;
                      <div key={service.id} className="bg-white/5 rounded-lg p-4 border border-white/10">;
                        <h4 className="font-medium text-white mb-2">{service.name}</[^>]*>
                        <p className="text-sm text-gray-400 mb-3">{service.description}</[^>]*>
                        ;
                        <div className="space-y-2 mb-3">;
                          <div className="flex justify-between text-sm">;
                            <span className="text-gray-400">Base Price:</[^>]*>
                            <span className="text-white font-semibold">${service.basePrice.toLocaleString()}/month</[^>]*>
                          </[^>]*>
                          <div className="flex justify-between text-sm">;
                            <span className="text-gray-400">Market Price:</[^>]*>
                            <span className="text-blue-400">{service.marketPrice}</[^>]*>
                          </[^>]*>
                          <div className="flex justify-between text-sm">;
                            <span className="text-gray-400">ROI:</[^>]*>
                            <span className="text-green-400 font-semibold">{service.roi}</[^>]*>
                          </[^>]*>
                        </[^>]*>

                        <div className="space-y-2">;
                          <h5 className="text-sm font-medium text-white">Key Features:</[^>]*>
                          {service.features.map((feature, idx) => (;
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">;
                              <[^>]*/>
                              <span>{feature}</[^>]*>
                            </[^>]*>
                          ))};
                        </[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              )};
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Transform Your Business?;
          </[^>]*>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">;
            Contact our team of experts to learn how our innovative 2028 services can revolutionize your operations;
            increase efficiency, and drive unprecedented growth.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
            <div className="flex items-center gap-2 text-white">;
              <[^>]*/>
              <span>+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2 text-white">;
              <[^>]*/>
              <span>kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2 text-white">;
              <[^>]*/>
              <a ;
                href="https://[^;]*
                target="_blank" ;
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                ziontechgroup.com
              </[^>]*>
            </[^>]*>
          </[^>]*>
          <div className="mt-6 text-sm text-gray-400">;
            Address: 364 E Main St STE 1008, Middletown DE 19709;
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};