import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Clock, Users, Shield, Zap } from 'lucide-react';

const microSaasProducts = [
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Pro',
    description: 'Automate repetitive tasks and streamline your business processes with our intelligent workflow automation tool.',
    pricing: '$99/month',
    icon: '⚡',
    features: ['Drag-and-drop workflow builder', 'Integration with 100+ apps', 'Real-time monitoring', 'Custom triggers'],
    category: 'Productivity'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    pricing: '$49/month',
    icon: '✍️',
    features: ['Multiple content types', 'SEO optimization', 'Brand voice consistency', 'Bulk generation'],
    category: 'Content & Marketing'
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler',
    description: 'Schedule and manage your social media posts across multiple platforms with advanced analytics.',
    pricing: '$39/month',
    icon: '📱',
    features: ['Multi-platform posting', 'Content calendar', 'Analytics dashboard', 'Team collaboration'],
    category: 'Social Media'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation',
    description: 'Automate your email marketing campaigns with personalized messages and advanced segmentation.',
    pricing: '$79/month',
    icon: '📧',
    features: ['Email templates', 'Automation workflows', 'A/B testing', 'Advanced analytics'],
    category: 'Email Marketing'
  },
  {
    id: 'project-management-tool',
    name: 'Project Management Tool',
    description: 'Streamline your project management with task tracking, team collaboration, and progress monitoring.',
    pricing: '$29/user/month',
    icon: '📋',
    features: ['Task management', 'Team collaboration', 'Progress tracking', 'File sharing'],
    category: 'Productivity'
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for your business metrics with real-time insights.',
    pricing: '$99/month',
    icon: '📊',
    features: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Export capabilities'],
    category: 'Analytics'
  }
];

const softwareProducts = [
  {
    name: "ZionAI Analytics Suite",
    description: "Comprehensive business intelligence platform with AI-powered insights",
    pricing: "$2,000/month",
    features: ["AI-powered analytics", "Real-time dashboards", "Custom reporting", "Data integration"],
    category: "Analytics"
  },
  {
    name: "ZionAI Security Platform",
    description: "Advanced cybersecurity solution with AI threat detection and prevention",
    pricing: "$1,500/month",
    features: ["AI threat detection", "Real-time monitoring", "Automated response", "Compliance reporting"],
    category: "Security"
  },
  {
    name: "ZionAI Cloud Infrastructure",
    description: "Scalable cloud infrastructure with AI optimization and management",
    pricing: "$3,000/month",
    features: ["Auto-scaling", "AI optimization", "24/7 monitoring", "Cost optimization"],
    category: "Cloud Computing"
  }
];

const categories = [
  { name: 'All Products', count: microSaasProducts.length + softwareProducts.length },
  { name: 'Micro SaaS', count: microSaasProducts.length },
  { name: 'Software', count: softwareProducts.length },
  { name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
  { name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length + softwareProducts.filter(p => p.category === 'Analytics').length },
  { name: 'Security', count: softwareProducts.filter(p => p.category === 'Security').length }
];

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI-powered products, micro SaaS solutions, and software platforms designed to transform your business." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive range of AI-powered products, micro SaaS solutions, and software platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Products */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Focused tools that solve specific business problems with powerful features and affordable pricing.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{product.pricing}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Software Platforms</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enterprise-grade software solutions with advanced AI capabilities and comprehensive features.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {softwareProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-blue-600 mb-6">{product.pricing}</div>
                  </div>
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Choose the products that fit your needs and start your transformation journey today.
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
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}