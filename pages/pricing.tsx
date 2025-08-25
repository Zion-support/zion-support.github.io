import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, CheckCircle, Star, Zap, Shield, 
  Brain, Atom, Rocket, Building, ArrowRight,
  Users, Globe, Cpu, Database, Lock
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI Services',
      'Standard Support',
      '5 Projects',
      '10GB Storage',
      'Email Support'
    ],
    color: 'from-blue-500 to-cyan-600',
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Advanced AI Services',
      'Priority Support',
      'Unlimited Projects',
      '100GB Storage',
      'Phone & Email Support',
      'Custom Integrations',
      'Analytics Dashboard'
    ],
    color: 'from-purple-500 to-pink-600',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'All AI & Quantum Services',
      '24/7 Dedicated Support',
      'Custom Development',
      'Unlimited Storage',
      'Dedicated Account Manager',
      'SLA Guarantees',
      'On-premise Options',
      'Custom Training'
    ],
    color: 'from-yellow-500 to-orange-600',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    startingPrice: '$199',
    description: 'Advanced AI consciousness and emotional intelligence'
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    startingPrice: '$399',
    description: 'Breakthrough quantum computing and space technology'
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />,
    startingPrice: '$299',
    description: 'Advanced enterprise infrastructure and security'
  },
  {
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    startingPrice: '$149',
    description: 'Innovative business solutions for modern enterprises'
  }
];

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-green-400" />,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Flexible Plans',
    description: 'Choose the plan that fits your business needs'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Bank-level security for all your data and operations'
  },
  {
    icon: <Star className="w-8 h-8 text-purple-400" />,
    title: 'Premium Support',
    description: 'Expert support team available when you need them'
  }
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing & Plans - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing and market comparisons for all our technology services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, plans, AI services, quantum services, enterprise IT, micro SAAS" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <DollarSign className="w-12 h-12 text-yellow-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Pricing & Plans
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transparent pricing and market comparisons for all our technology services. 
                Choose the plan that fits your business needs and scale as you grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 hover:scale-105"
                >
                  Get Custom Quote
                </Link>
                <Link
                  href="/market-pricing"
                  className="px-8 py-4 border border-yellow-500/40 text-yellow-300 rounded-xl font-semibold hover:bg-yellow-500/10 transition-all duration-200"
                >
                  View Market Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Flexible pricing plans designed to grow with your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-2 ${
                    plan.popular ? 'border-purple-500/50' : 'border-gray-700/50'
                  } hover:border-yellow-500/50 transition-all duration-300 hover:scale-105`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center space-x-1 mb-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700'
                      } hover:scale-105`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Category Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Starting prices for our main service categories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        <p className="text-2xl font-bold text-yellow-400">{category.startingPrice}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <Link
                      href={`/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')}`}
                      className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Pricing?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transparent, flexible, and designed for business growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Choose the plan that fits your business needs or contact us for a custom solution. 
                Start transforming your business today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/market-pricing"
                  className="px-8 py-4 border border-yellow-500/40 text-yellow-300 rounded-xl font-semibold hover:bg-yellow-500/10 transition-all duration-200"
                >
                  View Market Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}