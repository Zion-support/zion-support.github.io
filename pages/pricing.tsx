import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const plans = [
  {
    name: "Starter",
    price: "$2,000",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
<<<<<<< HEAD
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
=======
      "Basic AI consultation",
      "Email support",
      "Monthly check-ins",
      "Basic analytics dashboard",
      "Up to 5 team members"
    ],
    limitations: [
      "Limited AI models",
      "Basic customization",
      "Standard response time"
    ],
    popular: false,
    cta: "Get Started"
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
<<<<<<< HEAD
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
=======
      "Advanced AI consultation",
      "Priority support",
      "Weekly check-ins",
      "Advanced analytics dashboard",
      "Up to 25 team members",
      "Custom AI models",
      "API access",
      "Training sessions"
    ],
    limitations: [
      "Limited custom development",
      "Business hours support"
    ],
    popular: true,
    cta: "Most Popular"
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  },
  {
    name: "Enterprise",
    price: "$15,000",
<<<<<<< HEAD
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
=======
    period: "/month",
    description: "Complete solution for large organizations",
    features: [
      "Dedicated AI consultant",
      "24/7 priority support",
      "Daily check-ins",
      "Custom analytics dashboard",
      "Unlimited team members",
      "Fully custom AI models",
      "Full API access",
      "Comprehensive training",
      "Custom development",
      "SLA guarantee",
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
      "Dedicated account manager"
    ],
    limitations: [],
    popular: false,
<<<<<<< HEAD
    icon: Shield
=======
    cta: "Contact Sales"
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  }
];

const microSaaSPlans = [
  {
<<<<<<< HEAD
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
=======
    name: "Basic",
    price: "$99",
    period: "/month",
    description: "Essential micro SaaS solutions",
    features: [
      "1 Micro SaaS platform",
      "Basic AI features",
      "Email support",
      "Standard hosting",
      "Basic analytics"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Advanced micro SaaS suite",
    features: [
      "3 Micro SaaS platforms",
      "Advanced AI features",
      "Priority support",
      "Premium hosting",
      "Advanced analytics",
      "Custom integrations",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "Complete micro SaaS ecosystem",
    features: [
      "Unlimited platforms",
      "Full AI capabilities",
      "24/7 support",
      "Dedicated hosting",
      "Custom analytics",
      "Full integrations",
      "White-label options",
      "Custom development"
    ],
    popular: false
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  }
];

const itServicesPlans = [
  {
    name: "Infrastructure",
    price: "$3,500",
    period: "/month",
    description: "Core IT infrastructure services",
    features: [
      "Cloud infrastructure setup",
      "Network security",
      "Data backup & recovery",
      "24/7 monitoring",
      "Basic maintenance"
    ],
    popular: false
  },
  {
    name: "Advanced",
    price: "$7,500",
    period: "/month",
    description: "Comprehensive IT solutions",
    features: [
      "Full cloud migration",
      "Advanced cybersecurity",
      "AI-powered monitoring",
      "Custom development",
      "Dedicated support team",
      "Performance optimization"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$20,000",
    period: "/month",
    description: "Complete enterprise IT transformation",
    features: [
      "Full digital transformation",
      "AI & ML integration",
      "Custom enterprise solutions",
      "Dedicated team",
      "SLA guarantees",
      "Training & consulting",
      "Ongoing optimization"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
<<<<<<< HEAD
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
=======
    <Layout>
      <Head>
        <title>Pricing | ZionTech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS platforms. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services, IT solutions, micro SaaS, technology costs" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transparent</span> Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
=======
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core services 
                with transparent pricing and no hidden fees.
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
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
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
=======
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 ${
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
<<<<<<< HEAD
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
=======
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {plan.cta}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-white">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-center text-gray-400">
                            <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                            {limitation}
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
                          </li>
                        ))}
                      </ul>
                    </div>
<<<<<<< HEAD
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
=======
                  )}

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {plan.cta}
                  </button>
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Add-ons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
=======
        {/* Micro SaaS Pricing */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
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
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SaaS Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable micro SaaS solutions for every business size
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {microSaaSPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
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
<<<<<<< HEAD
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
=======
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact us for a personalized quote tailored to your specific business requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}