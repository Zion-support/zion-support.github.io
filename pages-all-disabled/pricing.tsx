import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,000",
    period: "per month",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic AI integration",
      "Email support",
      "Standard security",
      "Up to 5 users",
      "Basic analytics"
    ],
    limitations: [
      "Limited customization",
      "No priority support"
    ],
    popular: false,
    color: "blue"
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "per month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Advanced AI capabilities",
      "Priority support",
      "Enhanced security",
      "Up to 25 users",
      "Advanced analytics",
      "Custom integrations",
      "Training sessions"
    ],
    limitations: [],
    popular: true,
    color: "purple"
  },
  {
    name: "Enterprise",
    price: "$15,000",
    period: "per month",
    description: "Comprehensive solution for large organizations",
    features: [
      "Full AI suite",
      "24/7 dedicated support",
      "Enterprise security",
      "Unlimited users",
      "Custom analytics",
      "Full customization",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    limitations: [],
    popular: false,
    color: "green"
  }
];

const addOns = [
  {
    name: "Additional Users",
    price: "$50",
    period: "per user/month",
    description: "Add more users to your plan"
  },
  {
    name: "Custom Development",
    price: "$200",
    period: "per hour",
    description: "Custom features and integrations"
  },
  {
    name: "Training Sessions",
    price: "$500",
    period: "per session",
    description: "Team training and onboarding"
  },
  {
    name: "Priority Support",
    price: "$1,000",
    period: "per month",
    description: "24/7 priority support"
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, IT, and micro SaaS services. Choose the plan that fits your business needs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transparent pricing for our comprehensive AI, IT, and micro SaaS services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly (20% off)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-3" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-ons</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your plan with additional services and features.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{addOn.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{addOn.price}</span>
                    <span className="text-gray-600 ml-1">{addOn.period}</span>
                  </div>
                  <p className="text-gray-600">{addOn.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us to discuss your specific needs and get a custom quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}