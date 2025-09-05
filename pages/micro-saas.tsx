import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import {
  Zap,
  Brain,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  ExternalLink,
  Code,
  Database,
  BarChart,
  Info
} from 'lucide-react';

const microSaasProducts = [
  {
    id: 1,
    name: 'AI Content Generator',
    description: 'Generate high-quality content using advanced AI algorithms',
    category: 'Content Creation',
    price: '$29/month',
    features: ['AI Writing', 'SEO Optimization', 'Multi-language', 'Templates'],
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
    rating: 4.9,
    users: 2500,
    image: '/images/micro-saas/ai-content.jpg'
  },
  {
    id: 2,
    name: 'Cloud Analytics Dashboard',
    description: 'Real-time analytics and insights for your business data',
    category: 'Analytics',
    price: '$49/month',
    features: ['Real-time Data', 'Custom Reports', 'API Integration', 'Alerts'],
    icon: BarChart,
    color: 'from-green-500 to-blue-600',
    rating: 4.8,
    users: 1800,
    image: '/images/micro-saas/analytics.jpg'
  },
  {
    id: 3,
    name: 'Security Monitor',
    description: 'Advanced security monitoring and threat detection',
    category: 'Security',
    price: '$39/month',
    features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reports', '24/7 Monitoring'],
    icon: Shield,
    color: 'from-red-500 to-orange-600',
    rating: 4.7,
    users: 1200,
    image: '/images/micro-saas/security.jpg'
  },
  {
    id: 4,
    name: 'Workflow Automator',
    description: 'Automate repetitive tasks and streamline your workflows',
    category: 'Automation',
    price: '$59/month',
    features: ['Task Automation', 'Integration Hub', 'Custom Workflows', 'Scheduling'],
    icon: Zap,
    color: 'from-purple-500 to-pink-600',
    rating: 4.9,
    users: 3200,
    image: '/images/micro-saas/automation.jpg'
  },
  {
    id: 5,
    name: 'Database Optimizer',
    description: 'Optimize database performance and reduce costs',
    category: 'Database',
    price: '$79/month',
    features: ['Performance Tuning', 'Query Optimization', 'Cost Analysis', 'Monitoring'],
    icon: Database,
    color: 'from-indigo-500 to-cyan-600',
    rating: 4.8,
    users: 950,
    image: '/images/micro-saas/database.jpg'
  },
  {
    id: 6,
    name: 'API Gateway',
    description: 'Manage and secure your APIs with advanced features',
    category: 'API Management',
    price: '$99/month',
    features: ['API Security', 'Rate Limiting', 'Analytics', 'Documentation'],
    icon: Code,
    color: 'from-teal-500 to-green-600',
    rating: 4.9,
    users: 2100,
    image: '/images/micro-saas/api-gateway.jpg'
  }
];

const categories = [
  { name: 'All', count: microSaasProducts.length, icon: Globe },
  { name: 'Content Creation', count: 1, icon: Brain },
  { name: 'Analytics', count: 1, icon: BarChart },
  { name: 'Security', count: 1, icon: Shield },
  { name: 'Automation', count: 1, icon: Zap },
  { name: 'Database', count: 1, icon: Database },
  { name: 'API Management', count: 1, icon: Code }
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Get up and running in minutes, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance standards'
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Grows with your business automatically'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Expert support whenever you need it'
  }
];

export default function MicroSaasPage() {
  return (
    <Layout>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to solve specific business problems with powerful, focused tools." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Powerful, focused tools that solve specific business problems. 
                Get started in minutes with our innovative micro SaaS products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#products"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#benefits"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
                >
                  Learn More
                  <Info className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Focused solutions that deliver maximum value with minimal complexity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect solution for your specific business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-white rounded-lg p-4 text-center hover:bg-purple-50 hover:border-purple-200 border-2 border-transparent transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <category.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {category.count} products
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Powerful, focused tools designed to solve specific business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white bg-opacity-90 rounded-full p-2">
                        <product.icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="text-2xl font-bold text-purple-600">
                        {product.price}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {product.rating} ({product.users} users)
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center inline-flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try Now
                      </Link>
                      <Link
                        href="#"
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
                      >
                        <Download className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Choose from our range of micro SaaS solutions and start solving your business challenges today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#products"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  Browse All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
                >
                  Contact Sales
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}