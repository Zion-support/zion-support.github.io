import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Check, Star, ArrowRight, Zap, Crown, 
  Brain, Atom, Shield, Rocket, Users,
  CheckCircle, TrendingUp, Award, Sparkles
} from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'AI-Powered IT Asset Management',
        'Basic AI Consciousness Features',
        'Standard Support (8/5)',
        'Up to 100 assets',
        'Basic reporting and analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Everything in Starter',
        'Quantum AI Fusion Platform',
        'Advanced AI Consciousness Pro',
        'Priority Support (24/7)',
        'Up to 1,000 assets',
        'Advanced analytics and AI insights',
        'Phone and chat support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Everything in Professional',
        'Full Quantum Neural Network Platform',
        'Autonomous Business Operations',
        'Dedicated account manager',
        'Unlimited assets',
        'Custom AI model training',
        'On-premise deployment options',
        'SLA guarantees',
        'Custom development services'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$5,000',
      description: 'Custom AI model training for your specific use case',
      icon: <Brain className="w-6 h-6 text-violet-500" />
    },
    {
      name: 'Quantum Computing Access',
      price: '$10,000',
      description: 'Direct access to quantum computing resources',
      icon: <Atom className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'Advanced Security Suite',
      price: '$3,500',
      description: 'Enhanced cybersecurity and compliance features',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Custom Integration',
      price: '$2,500',
      description: 'Custom integration with your existing systems',
      icon: <Rocket className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's revolutionary AI, quantum computing, and technology services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services, quantum computing, technology pricing, enterprise solutions, startup pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Transparent Pricing
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Simple, Transparent Pricing
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our revolutionary 
                AI and quantum computing technology with transparent, predictable pricing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your experience with our premium add-on services designed 
                to meet your specific business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{addOn.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{addOn.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{addOn.description}</p>
                  <div className="text-2xl font-bold text-white mb-4">{addOn.price}</div>
                  <Link 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                  >
                    Add Service
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my plan at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
                },
                {
                  question: 'Do you offer custom pricing for enterprise clients?',
                  answer: 'Absolutely! Our Enterprise plan includes custom pricing based on your specific requirements and scale.'
                },
                {
                  question: 'What kind of support is included?',
                  answer: 'All plans include email support. Professional and Enterprise plans include priority support with phone and chat options.'
                },
                {
                  question: 'Is there a setup fee?',
                  answer: 'No setup fees for our standard plans. Custom enterprise deployments may have associated setup costs.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business and start your journey with 
                revolutionary AI and quantum computing technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}