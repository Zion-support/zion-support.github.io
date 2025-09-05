import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Check, X, Star, Zap, Shield, Users, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$2,000",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
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
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
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
  },
  {
    name: "Enterprise",
    price: "$15,000",
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
      "Dedicated account manager"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales"
  }
];

const microSaaSPlans = [
  {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core services 
                with transparent pricing and no hidden fees.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your business requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
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
                          </li>
                        ))}
                      </ul>
                    </div>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
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
                  </div>

                  <div className="space-y-4 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions with transparent pricing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {itServicesPlans.map((plan, index) => (
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
                  </div>

                  <div className="space-y-4 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Quote
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
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
                  Call: +1 302 464 0950
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}