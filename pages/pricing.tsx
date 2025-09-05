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
      "Custom integrations",
      "Advanced analytics",
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
      "Custom development",
      "Advanced analytics",
      "Full API access",
      "Dedicated account manager"
    ],
    limitations: [],
    popular: false,
    icon: Shield
  }
];

const features = [
  {
    name: "AI-Powered Solutions",
    description: "Cutting-edge artificial intelligence for your business needs",
    icon: Star
  },
  {
    name: "24/7 Support",
    description: "Round-the-clock technical support and assistance",
    icon: Users
  },
  {
    name: "Enterprise Security",
    description: "Bank-level security to protect your data and systems",
    icon: Shield
  },
  {
    name: "Custom Integrations",
    description: "Seamless integration with your existing tools and systems",
    icon: Zap
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const toggleBilling = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <Layout title="Pricing - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Choose the perfect plan for your business needs. All plans include our core features with no hidden costs.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-200'}`}>
                  Monthly
                </span>
                <button
                  onClick={toggleBilling}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <span
                    className={`${
                      billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
                <span className={`ml-3 ${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-200'}`}>
                  Yearly
                  <span className="ml-1 text-sm text-green-300">(Save 20%)</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <plan.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                  
                  <div className="px-8 pb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mb-4 mt-6">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-center text-sm text-gray-600">
                              <X className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions with unmatched support and expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  View Our Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}