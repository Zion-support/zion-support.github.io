import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiFeatures = [
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'OAuth 2.0 and JWT-based authentication with enterprise-grade security',
    features: ['OAuth 2.0', 'API Keys', 'Rate Limiting', 'Data Encryption']
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast API responses with global CDN and optimized infrastructure',
    features: ['Sub-100ms Response', 'Global CDN', 'Auto-scaling', 'Load Balancing']
  },
  {
    icon: Globe,
    title: 'Global Availability',
    description: 'Worldwide API access with 99.9% uptime guarantee and multiple regions',
    features: ['99.9% Uptime', 'Multiple Regions', 'Disaster Recovery', '24/7 Monitoring']
  },
  {
    icon: Database,
    title: 'Real-time Data',
    description: 'Live data synchronization and real-time updates across all endpoints',
    features: ['WebSocket Support', 'Real-time Sync', 'Event Streaming', 'Live Updates']
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small projects and startups',
    features: [
      '1,000 API calls/month',
      'Basic authentication',
      'Email support',
      'Standard documentation'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      '10,000 API calls/month',
      'Advanced authentication',
      'Priority support',
      'Advanced analytics',
      'Webhook support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited API calls',
      'Custom authentication',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee'
    ],
    popular: false
  }
];

export default function API() {
  return (
    <>
      <Head>
        <title>API Platform - Zion Tech Group</title>
        <meta name="description" content="Powerful API platform with secure authentication, real-time data, and global availability for developers and businesses." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100">
                Powerful APIs for modern applications
              </p>
              <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
                Build faster, scale better, and integrate seamlessly with our comprehensive API platform designed for developers and businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our API Platform?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for developers, designed for scale, trusted by businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-500">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-center mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your needs. No hidden fees, no surprises.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-8 relative ${
                    tier.popular ? 'ring-2 ring-indigo-500 transform scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-600 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      tier.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of developers who trust our API platform for their applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/api-docs"
                  className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Documentation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}