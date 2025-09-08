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
      period: 'per month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Monthly Support (8 hours)',
        'Basic Security Features',
        'Email Support',
        'Standard SLA (99.5%)' ],
      popular: false,
      cta: 'Get Started',
      href: '/contact' }, {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Monthly Support (20 hours)',
        'Enhanced Security & Compliance',
        'Priority Support',
        'Premium SLA (99.9%)',
        'Dedicated Account Manager',
        'Custom Integrations' ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact' }, {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI Suite Implementation',
        'Custom Enterprise Solutions',
        'Unlimited Support',
        'Enterprise Security & Compliance',
        '24/7 Phone Support',
        'Enterprise SLA (99.99%)',
        'Dedicated Team',
        'Custom Training & Documentation',
        'Multi-region Deployment',
        'Advanced Analytics & Reporting' ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact' } ];

  const addOns = [
    {
      name: 'Additional Support Hours',
      price: '$150',
      period: 'per hour',
      description: 'Extra support hours for your project needs' }, {
      name: 'Priority Support',
      price: '$500',
      period: 'per month',
      description: 'Faster response times and dedicated support' }, {
      name: 'Custom Integrations',
      price: '$2,000',
      period: 'per integration',
      description: 'Custom third-party integrations and APIs' }, {
      name: 'Training & Documentation',
      price: '$1,000',
      period: 'per session',
      description: 'Team training and comprehensive documentation' } ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and take effect immediately.' }, {
      question: 'What is included in the support hours?',
      answer:
        'Support hours include bug fixes, minor updates, technical assistance, and general maintenance tasks.' }, {
      question: 'Do you offer custom pricing for large projects?',
      answer:
        'Yes, we offer custom pricing for enterprise clients and large-scale projects. Contact us for a personalized quote.' }, {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements.' } ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta
          name="description"
          content="Transparent pricing for our technology services. Choose the plan that fits your business needs and budget."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include
                our core services with the option to add additional features.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
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
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {addOn.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-blue-600">
                      {addOn.price}
                    </span>
                    <span className="text-gray-600 ml-1">{addOn.period}</span>
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
      </main>
    </>
  )}
