import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const plans = [
  {
    name: "Starter",
    price: "$2,000",
    period: "per month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 5 users",
      "Basic AI services",
      "Email support",
      "Standard security",
      "Basic analytics"
    ],
    limitations: [
      "Limited customization",
      "No priority support",
      "Basic integrations"
    ],
    popular: false,
    icon: Users
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "per month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 25 users",
      "Advanced AI services",
      "Priority support",
      "Enhanced security",
      "Advanced analytics",
      "Custom integrations",
      "API access"
    ],
    limitations: [
      "Limited custom development"
    ],
    popular: true,
    icon: Zap
  },
  {
    name: "Enterprise",
    price: "$15,000",
    period: "per month",
    description: "Complete solution for large organizations",
    features: [
      "Unlimited users",
      "Full AI suite",
      "24/7 dedicated support",
      "Enterprise security",
      "Custom analytics",
      "Full customization",
      "White-label options",
      "Dedicated account manager"
    ],
    limitations: [],
    popular: false,
    icon: Shield
  }
];

const addOns = [
  {
    name: "Additional Users",
    price: "$100",
    period: "per user/month",
    description: "Add more users to your plan"
  },
  {
    name: "Premium Support",
    price: "$500",
    period: "per month",
    description: "24/7 priority support with dedicated team"
  },
  {
    name: "Custom Development",
    price: "$200",
    period: "per hour",
    description: "Custom features and integrations"
  },
  {
    name: "Training & Onboarding",
    price: "$1,000",
    period: "per session",
    description: "Comprehensive training for your team"
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for our comprehensive technology solutions. Choose the plan that fits your business needs."
      keywords="pricing, plans, subscription, technology solutions, AI services, IT services"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transparent</span> Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <plan.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-gray-900">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-center">
                            <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-500 line-through">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Add-ons & Extras
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your plan with additional services and features tailored to your needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{addOn.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {addOn.price}
                    <span className="text-sm font-normal text-gray-600">{addOn.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{addOn.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about our pricing and plans.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can I change my plan later?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you offer custom pricing for large organizations?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer custom pricing and enterprise solutions for large organizations with specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Choose your plan and start transforming your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}