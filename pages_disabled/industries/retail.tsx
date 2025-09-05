import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  Activity,
  CreditCard,
  FileText,
  Database,
  Smartphone,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';
<<<<<<< HEAD
=======
import { ShoppingCart, Brain, BarChart3, CheckCircle, ArrowRight, Package, Users, CreditCard, Smartphone, Globe, Database, TrendingUp } from 'lucide-react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51

const solutions = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solutions with AI-powered recommendations and seamless checkout.',
    icon: ShoppingCart,
    features: ['AI Recommendations', 'Mobile Optimization', 'Payment Integration', 'Inventory Management'],
    benefits: ['40% conversion increase', '60% mobile traffic', '25% average order value', '99.9% uptime']
  },
  {
    title: 'Customer Analytics',
    description: 'Advanced customer behavior analytics and personalization engine.',
    icon: BarChart3,
    features: ['Customer Segmentation', 'Behavior Tracking', 'Personalization', 'Predictive Analytics'],
    benefits: ['35% engagement boost', '50% better targeting', '20% retention increase', 'Real-time insights']
  },
  {
    title: 'Inventory Management',
    description: 'AI-powered inventory optimization and demand forecasting.',
    icon: Database,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Automated Reordering'],
    benefits: ['30% inventory reduction', '40% stockout reduction', '25% cost savings', 'Better margins']
  },
  {
<<<<<<< HEAD:pages_disabled/industries/retail.tsx
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain visibility and optimization for retail operations.',
    features: ['Inventory Optimization', 'Supplier Management', 'Demand Forecasting', 'Logistics Tracking'],
    icon: Shield

=======
    title: 'Omnichannel Experience',
    description: 'Seamless integration across online and offline channels.',
    icon: Globe,
    features: ['Unified Customer Data', 'Cross-channel Analytics', 'Consistent Experience', 'Real-time Sync'],
    benefits: ['50% customer satisfaction', '35% cross-channel sales', '25% operational efficiency', 'Better loyalty']
>>>>>>> origin/main:pages/industries/retail.tsx
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Sales',
<<<<<<< HEAD
    description: 'Boost sales with AI-powered recommendations and personalized experiences.',
    metric: '40%'
=======
    description: 'AI-powered personalization and optimization drive higher conversion rates'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Enhance customer engagement with personalized content and offers.',
    metric: '60%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs through automation and optimization.',
    metric: '25%'
  },
  {
    icon: Smartphone,
    title: 'Mobile Experience',
    description: 'Optimize mobile shopping experience for better conversions.',
    metric: '80%'
  }
];

<<<<<<< HEAD:pages_disabled/industries/retail.tsx
const caseStudies = [
  {
    title: 'E-commerce Platform Launch',
    client: 'Fashion Retailer',
    challenge: 'Launch online store and integrate with existing inventory systems',
    solution: 'Developed comprehensive e-commerce platform with inventory integration and mobile optimization',
    results: ['200% increase in online sales', '50% reduction in inventory costs', '95% customer satisfaction'],
    image: '/api/placeholder/400/300'

  },
  {
    title: 'POS System Modernization',
    client: 'Multi-location Retail Chain',
    challenge: 'Replace legacy POS systems and improve customer experience',
    solution: 'Implemented modern POS system with inventory management and customer analytics',
    results: ['40% faster checkout', '30% improvement in inventory accuracy', '60% reduction in manual work'],
    image: '/api/placeholder/400/300'
  }
];

export default function RetailPage() {
=======
export default function Retail() {
>>>>>>> origin/main:pages/industries/retail.tsx
  return (
    <Layout
      title="Retail Technology Solutions - Zion Tech Group"
      description="Transform retail with e-commerce platforms, customer analytics, inventory management, and omnichannel solutions."
      keywords="retail technology, e-commerce, customer analytics, inventory management, omnichannel, retail automation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD:pages_disabled/industries/retail.tsx
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

=======
        <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
>>>>>>> origin/main:pages/industries/retail.tsx
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform retail with e-commerce platforms, customer analytics, and omnichannel solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Retail Solution
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Retail Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for modern retail operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-purple-600">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {solution.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Retail Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in sales, customer engagement, and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-purple-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD:pages_disabled/industries/retail.tsx
        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we've helped retail businesses improve customer experience and increase sales
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-2"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-600 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-600 mb-4"><strong>Solution:</strong> {study.solution}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Retail?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our retail technology solutions can improve customer experience and increase sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>

=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Retail Business
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading retailers in revolutionizing their operations with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Retail Consultation
                </Link>
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  View All Industries
                </Link>
              </div>
            </motion.div>
>>>>>>> origin/main:pages/industries/retail.tsx
          </div>
        </section>
      </div>
    </Layout>
  );
}