import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { 
  ShoppingCart, 
  Brain, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Package, 
  Users, 
  CreditCard, 
  Smartphone, 
  Globe, 
  Database, 
  TrendingUp 
} from 'lucide-react';

const solutions = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Build scalable online stores with advanced features and seamless user experience',
    features: ['Custom Store Design', 'Payment Integration', 'Inventory Management', 'Order Processing']
  },
  {
    icon: Brain,
    title: 'AI-Powered Personalization',
    description: 'Deliver personalized shopping experiences with machine learning and data analytics',
    features: ['Product Recommendations', 'Dynamic Pricing', 'Customer Segmentation', 'Behavioral Analysis']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics to understand customer behavior and optimize performance',
    features: ['Sales Analytics', 'Customer Insights', 'Performance Metrics', 'Predictive Analytics']
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Native mobile apps and responsive web solutions for seamless mobile shopping',
    features: ['Mobile Apps', 'Progressive Web Apps', 'Mobile Payments', 'Push Notifications']
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Sales',
    description: 'AI-powered personalization and optimization drive higher conversion rates',
    metric: '40%'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Personalized shopping experiences and seamless omnichannel interactions',
    metric: '95%'
  },
  {
    icon: BarChart3,
    title: 'Improved Analytics',
    description: 'Real-time insights and data-driven decision making capabilities',
    metric: '60%'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Multi-language and multi-currency support for international expansion',
    metric: '200%'
  }
];

const technologies = [
  'React & Next.js',
  'Node.js & Express',
  'AI & Machine Learning',
  'Cloud Computing',
  'Payment Gateways',
  'Mobile Development',
  'Data Analytics',
  'API Integration'
];

export default function Retail() {
  return (
    <Layout 
      title="Retail Technology - Zion Tech Group"
      description="Transform your retail business with cutting-edge e-commerce solutions, AI-powered personalization, and omnichannel experiences."
      keywords="retail technology, e-commerce, online shopping, AI personalization, retail analytics, omnichannel, mobile commerce"
    >
      <Head>
        <title>Retail Technology - Zion Tech Group</title>
        <meta name="description" content="Transform your retail business with cutting-edge e-commerce solutions, AI-powered personalization, and omnichannel experiences." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Retail Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Transform your retail business with AI-powered e-commerce platforms, 
                personalized shopping experiences, and omnichannel solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Started
                </Link>
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Technology Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive technology solutions for modern retail businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Retail Solutions?
              </h2>
              <p className="text-lg text-gray-600">
                Proven results and industry-leading expertise
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
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600">
                Cutting-edge technologies for modern retail solutions
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Business?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's discuss how our technology solutions can help your retail business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}