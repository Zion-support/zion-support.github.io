import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Smartphone, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  CreditCard,
  Package,
  Lock,
  TrendingUp,
  Store,
  Cloud
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platform',
    description: 'Comprehensive e-commerce solutions with advanced features for online retail success.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-first shopping experiences with responsive design and native app capabilities.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Advanced analytics to understand customer behavior and optimize retail operations.'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and management across multiple channels and locations.'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Secure payment solutions supporting multiple payment methods and currencies.'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Comprehensive CRM solutions to manage customer relationships and loyalty programs.'
  }
];

const solutions = [
  {
    title: 'Omnichannel Retail Platform',
    description: 'Unified platform that connects online and offline channels for seamless customer experiences.',
    features: [
      'Unified inventory management',
      'Cross-channel customer data',
      'Consistent pricing and promotions',
      'Integrated order fulfillment'
    ],
    benefits: [
      'Improved customer experience',
      'Increased sales across channels',
      'Better inventory utilization',
      'Enhanced operational efficiency'
    ]
  },
  {
    title: 'E-commerce Store',
    description: 'Custom e-commerce solutions with advanced features for online retail success.',
    features: [
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Order management system'
    ],
    benefits: [
      'Higher conversion rates',
      'Reduced cart abandonment',
      'Faster checkout process',
      'Better customer satisfaction'
    ]
  },
  {
    title: 'Point of Sale (POS) System',
    description: 'Modern POS solutions for brick-and-mortar stores with cloud-based management.',
    features: [
      'Touch-screen interface',
      'Inventory tracking',
      'Customer management',
      'Sales reporting and analytics'
    ],
    benefits: [
      'Faster transaction processing',
      'Real-time inventory updates',
      'Better customer service',
      'Improved sales insights'
    ]
  },
  {
    title: 'Customer Analytics Platform',
    description: 'Advanced analytics solutions to understand customer behavior and optimize retail operations.',
    features: [
      'Customer segmentation',
      'Purchase pattern analysis',
      'Predictive analytics',
      'Personalization engine'
    ],
    benefits: [
      'Better customer targeting',
      'Increased customer lifetime value',
      'Improved marketing ROI',
      'Enhanced personalization'
    ]
  }
];

const technologies = [
  { name: 'Shopify', category: 'E-commerce Platform' },
  { name: 'WooCommerce', category: 'E-commerce Platform' },
  { name: 'Magento', category: 'E-commerce Platform' },
  { name: 'React', category: 'Frontend Framework' },
  { name: 'Node.js', category: 'Backend Technology' },
  { name: 'Stripe', category: 'Payment Processing' },
  { name: 'PayPal', category: 'Payment Processing' },
  { name: 'AWS', category: 'Cloud Platform' },
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Klaviyo', category: 'Email Marketing' },
  { name: 'Zendesk', category: 'Customer Support' },
  { name: 'Salesforce', category: 'CRM' }
];

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '40%', label: 'Increase in Sales' },
  { number: '24/7', label: 'Customer Support' },
  { number: '200+', label: 'Retail Clients' }
];

export default function RetailSolutionsPage() {
  return (
    <Layout
      title="Retail Solutions - Zion Tech Group"
      description="Comprehensive retail technology solutions including e-commerce, POS systems, and omnichannel platforms. Boost sales and customer experience."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <ShoppingCart className="w-16 h-16 text-purple-400 mr-4" />
                <Store className="w-16 h-16 text-pink-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your retail business with our comprehensive technology solutions. 
                From e-commerce platforms to omnichannel experiences, we help retailers 
                deliver exceptional customer experiences and drive sales growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Retail Technology Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our retail technology solutions are designed to enhance customer experiences, 
                streamline operations, and drive sales growth across all channels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-purple-600 mb-4 group-hover:text-pink-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Retail Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide end-to-end retail technology solutions that address the unique 
                challenges and requirements of modern retail businesses.
              </p>
            </motion.div>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <ArrowRight className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
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

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage the latest retail technology platforms and tools to deliver 
                robust, scalable solutions that meet your specific business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Ready to Transform Your Retail Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our retail technology experts help you implement solutions that enhance 
                customer experiences, streamline operations, and drive sales growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}