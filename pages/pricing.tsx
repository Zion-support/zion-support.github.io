import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, Star, Users, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PricingPage: NextPage = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$99',
      period: '/month',
      features: [
        'Up to 5 users',
        'Basic AI services',
        'Email support',
        'Standard templates',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$299',
      period: '/month',
      features: [
        'Up to 25 users',
        'Advanced AI services',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited users',
        'Full AI suite',
        '24/7 dedicated support',
        'Custom development',
        'Advanced security',
        'White-label options',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const serviceCategories = [
    {
      name: 'Micro SaaS',
      icon: Globe,
      services: [
        { name: 'AI Content Generator', price: '$29-199' },
        { name: 'Social Media Scheduler', price: '$19-129' },
        { name: 'Email Marketing Automation', price: '$25-179' },
        { name: 'Project Management Suite', price: '$19-129' }
      ]
    },
    {
      name: 'IT Services',
      icon: Shield,
      services: [
        { name: 'Cloud Migration', price: '$5,000-50,000' },
        { name: 'Cybersecurity Audit', price: '$3,000-25,000' },
        { name: 'DevOps Automation', price: '$4,000-35,000' },
        { name: 'Database Optimization', price: '$3,000-25,000' }
      ]
    },
    {
      name: 'AI Services',
      icon: Zap,
      services: [
        { name: 'Custom AI Models', price: '$10,000-100,000' },
        { name: 'Computer Vision Solutions', price: '$8,000-75,000' },
        { name: 'Natural Language Processing', price: '$7,000-65,000' },
        { name: 'Predictive Analytics', price: '$9,000-85,000' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for our comprehensive technology solutions. Choose the plan that fits your business needs."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing for Every Business
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect plan for your business needs. All plans include our core features with flexible options to scale as you grow.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to grow with your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="block">
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed pricing for our individual services and solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.name}
                  className="bg-gray-50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-blue-600">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team for a custom quote tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Custom Quote
                </button>
              </Link>
              <Link href="/contact" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PricingPage;