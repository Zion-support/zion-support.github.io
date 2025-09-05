<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '../../src/components/layout/MainLayout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<<< HEAD:pages/industries/index.tsx
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
<<<<<<< HEAD
========
<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../../components/Layout';
>>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb:pages/industries/retail.tsx
=======
import React from 'react';
<<<<<<< HEAD
import Layout from '../../components/Layout';
import Link from 'next/link';
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

const industries = [
  {
    title: 'Healthcare',
    description: 'AI-powered medical imaging, electronic health records, and telemedicine solutions',
    icon: Heart,
    features: ['Medical Imaging AI', 'EHR Systems', 'Telemedicine', 'Health Analytics'],
    href: '/industries/healthcare'
  },
  {
    title: 'Finance',
    description: 'Fraud detection, predictive analytics, and digital banking solutions',
    icon: DollarSign,
    features: ['Fraud Detection', 'Risk Analytics', 'Digital Banking', 'Compliance'],
    href: '/industries/finance'
  },
  {
    title: 'Education',
    description: 'Learning management systems, virtual classrooms, and student analytics',
    icon: BookOpen,
    features: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
    href: '/industries/education'
  },
  {
    title: 'Government',
    description: 'Digital government platforms, cybersecurity, and citizen services',
    icon: Building,
    features: ['Digital Platforms', 'Cybersecurity', 'Citizen Services', 'Data Analytics'],
    href: '/industries/government'
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing, quality control, and supply chain optimization',
    icon: Settings,
    features: ['Smart Manufacturing', 'Quality Control', 'Supply Chain', 'IoT Solutions'],
    href: '/industries/manufacturing'
  },
  {
    title: 'Retail',
    description: 'E-commerce platforms, inventory management, and customer analytics',
    icon: ShoppingCart,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:pages/industries/index.tsx
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
<<<<<<< HEAD
=======
========
    features: ['Product Catalog', 'Shopping Cart', 'Payment Processing', 'Order Management']
  },
  {
    title: 'Inventory Management System',
    description: 'AI-powered inventory management with demand forecasting and optimization',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Real-time Tracking']
  },
  {
    title: 'Customer Analytics Platform',
    description: 'Comprehensive analytics platform for customer behavior and preferences',
    icon: BarChart3,
    features: ['Customer Segmentation', 'Behavior Analysis', 'Purchase Patterns', 'Personalization']
  },
  {
    title: 'Mobile Commerce App',
    description: 'Native mobile app for seamless shopping experience across devices',
    icon: Smartphone,
    features: ['Mobile Shopping', 'Push Notifications', 'Offline Support', 'Social Integration']
=======
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShoppingCart, Users, Clock, Star, Shield, TrendingUp } from 'lucide-react';

const solutions = [
  {
    title: 'E-commerce Platforms',
    description: 'Complete e-commerce solutions with online stores, payment processing, and inventory management.',
    features: ['Online Store', 'Payment Processing', 'Inventory Management', 'Order Tracking'],
    icon: ShoppingCart
  },
  {
    title: 'Customer Analytics',
    description: 'Advanced analytics for customer behavior, preferences, and personalized marketing campaigns.',
    features: ['Customer Insights', 'Behavior Analysis', 'Personalization', 'Marketing Automation'],
    icon: TrendingUp
  },
  {
    title: 'Point of Sale Systems',
    description: 'Modern POS systems with inventory management, customer management, and reporting capabilities.',
    features: ['Transaction Processing', 'Inventory Tracking', 'Customer Management', 'Sales Reporting'],
    icon: Users
  },
  {
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain visibility and optimization for retail operations.',
    features: ['Inventory Optimization', 'Supplier Management', 'Demand Forecasting', 'Logistics Tracking'],
    icon: Shield
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb:pages/industries/retail.tsx
=======
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  }
];

const benefits = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<<< HEAD:pages/industries/index.tsx
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements',
    icon: Brain
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions designed for your specific industry needs',
    icon: Settings
  },
  {
    title: 'Compliance Ready',
    description: 'Solutions built with industry regulations and compliance in mind',
    icon: Shield
  },
  {
    title: 'Scalable Technology',
    description: 'Solutions that grow with your business and adapt to changing needs',
    icon: Cloud
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
========
<<<<<<< HEAD
    icon: TrendingUp,
    title: 'Increased Sales',
    description: 'AI-powered personalization and optimization drive higher conversion rates',
    icon: ShoppingCart
=======
    icon: Shield,
    title: 'Retail Expertise',
    description: 'Deep understanding of retail operations and customer experience requirements'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support for retail operations'
  },
  {
    icon: Users,
    title: 'Retail Specialists',
    description: 'Team of experts with extensive retail industry experience'
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Track record of successful implementations in retail businesses'
  }
];

const caseStudies = [
  {
    title: 'E-commerce Platform Launch',
    client: 'Fashion Retailer',
    challenge: 'Launch online store and integrate with existing inventory systems',
    solution: 'Developed comprehensive e-commerce platform with inventory integration and mobile optimization',
    results: ['200% increase in online sales', '50% reduction in inventory costs', '95% customer satisfaction'],
    image: '/api/placeholder/400/300'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  },
  {
    title: 'POS System Modernization',
    client: 'Multi-location Retail Chain',
    challenge: 'Replace legacy POS systems and improve customer experience',
    solution: 'Implemented modern POS system with inventory management and customer analytics',
    results: ['40% faster checkout', '30% improvement in inventory accuracy', '60% reduction in manual work'],
    image: '/api/placeholder/400/300'
>>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb:pages/industries/retail.tsx
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  }
];

export default function IndustriesPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <MainLayout
      title="Industries - Zion Tech Group"
      description="Discover how Zion Tech Group serves various industries with tailored technology solutions."
      keywords="industries, healthcare, finance, education, manufacturing, retail, government, technology solutions"
    >
=======
<<<<<<< HEAD
    <MainLayout
      title="Retail Technology Solutions - Zion Tech Group"
      description="Transform retail operations with our e-commerce platforms, POS systems, and customer analytics solutions."
      keywords="retail technology, e-commerce, POS systems, customer analytics, supply chain, retail software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
<<<<<<< HEAD
    <Layout>
=======
    <>
      <Head>
        <title>Industries - Zion Tech Group</title>
        <meta name="description" content="Industry-specific solutions for healthcare, finance, retail, education, and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    <Layout>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:pages/industries/index.tsx
                Industry <span className="text-blue-600">Solutions</span>
========
<<<<<<< HEAD
                Retail <span className="text-blue-600">Solutions</span>
>>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb:pages/industries/retail.tsx
=======
                Industry <span className="text-blue-600">Solutions</span>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
                Industry <span className="text-blue-600">Solutions</span>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Specialized technology solutions designed for specific industries. 
                We understand the unique challenges and requirements of each sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our industry-specific solutions and see how we can help transform your sector.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                Retail Technology
                <span className="block text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform retail operations with e-commerce platforms, POS systems, and customer analytics solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for retail businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<<< HEAD:pages/industries/index.tsx
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Industry Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our industry-specific approach ensures that our solutions are perfectly tailored to your needs.
<<<<<<< HEAD
<<<<<<< HEAD
========
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Retail
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges and requirements of retail operations
>>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb:pages/industries/retail.tsx
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
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
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can help your organization achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
          </div>
        </section>
      </div>
    </MainLayout>
<<<<<<< HEAD
=======
=======
          </div>
        </section>
      </div>
    </>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  );
}