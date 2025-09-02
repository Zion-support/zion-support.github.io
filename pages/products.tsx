import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Package, Star, ArrowRight, CheckCircle, Zap, Shield, Brain, Cloud, Database, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Products: NextPage = () => {
  const products = [
    {
      id: 1,
      name: 'AI Sales Copilot',
      category: 'AI Solutions',
      description: 'Intelligent sales assistant that helps your team close more deals with AI-powered insights and automation.',
      features: [
        'Lead scoring and qualification',
        'Automated follow-up sequences',
        'Sales forecasting and analytics',
        'CRM integration and sync'
      ],
      pricing: 'Starting at $99/month',
      rating: 4.9,
      reviews: 156,
      icon: Brain,
      image: '/products/ai-sales-copilot.jpg',
      popular: true
    },
    {
      id: 2,
      name: 'AI Compliance Assistant',
      category: 'AI Solutions',
      description: 'Automated compliance monitoring and reporting system that ensures your business stays compliant with regulations.',
      features: [
        'Real-time compliance monitoring',
        'Automated report generation',
        'Regulatory updates and alerts',
        'Audit trail and documentation'
      ],
      pricing: 'Starting at $199/month',
      rating: 4.8,
      reviews: 89,
      icon: Shield,
      image: '/products/ai-compliance-assistant.jpg',
      popular: false
    },
    {
      id: 3,
      name: 'AI Auto Email Responder',
      category: 'AI Solutions',
      description: 'Smart email automation that responds to customer inquiries with personalized, context-aware messages.',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multi-language support',
        'Sentiment analysis'
      ],
      pricing: 'Starting at $79/month',
      rating: 4.7,
      reviews: 234,
      icon: Zap,
      image: '/products/ai-auto-email-responder.jpg',
      popular: true
    },
    {
      id: 4,
      name: 'LLM Content Studio',
      category: 'AI Solutions',
      description: 'Advanced content creation platform powered by large language models for marketing and communication.',
      features: [
        'AI-powered content generation',
        'Brand voice customization',
        'Multi-format content creation',
        'SEO optimization tools'
      ],
      pricing: 'Starting at $149/month',
      rating: 4.9,
      reviews: 178,
      icon: Globe,
      image: '/products/llm-content-studio.jpg',
      popular: false
    },
    {
      id: 5,
      name: 'Cloud Infrastructure Manager',
      category: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure management platform for scalable and secure deployments.',
      features: [
        'Multi-cloud support',
        'Automated scaling',
        'Cost optimization',
        'Security monitoring'
      ],
      pricing: 'Starting at $299/month',
      rating: 4.8,
      reviews: 112,
      icon: Cloud,
      image: '/products/cloud-infrastructure-manager.jpg',
      popular: true
    },
    {
      id: 6,
      name: 'Data Analytics Platform',
      category: 'Data Solutions',
      description: 'Advanced analytics platform that transforms your data into actionable business insights.',
      features: [
        'Real-time data processing',
        'Interactive dashboards',
        'Predictive analytics',
        'Custom reporting'
      ],
      pricing: 'Starting at $179/month',
      rating: 4.7,
      reviews: 145,
      icon: Database,
      image: '/products/data-analytics-platform.jpg',
      popular: false
    }
  ];

  const categories = [
    'All Products',
    'AI Solutions',
    'Cloud Solutions',
    'Data Solutions',
    'Security Solutions',
    'Automation Tools'
  ];

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore our comprehensive suite of technology products including AI solutions, cloud platforms, and automation tools designed to transform your business."
      keywords="technology products, AI solutions, cloud platforms, automation tools, business software, enterprise solutions"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Package className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Discover our comprehensive suite of technology products designed to transform 
              your business with cutting-edge AI, cloud solutions, and automation tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-left w-full px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Product Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Products</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-semibold">50,000+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Average Rating</span>
                      <span className="font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {product.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <product.icon className="w-16 h-16 text-white" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {product.category}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-gray-800">{product.pricing}</p>
                        </div>
                        <Link
                          href={`/products/${product.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Solutions</h3>
              <p className="text-gray-600 mb-4">
                Intelligent automation and AI-powered tools to enhance productivity and decision-making.
              </p>
              <Link href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore AI Solutions →
              </Link>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure and management platforms for modern businesses.
              </p>
              <Link href="/services/cloud-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Cloud Solutions →
              </Link>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Data Solutions</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and data management tools for actionable business insights.
              </p>
              <Link href="/services/data-analytics" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Data Solutions →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact our team to learn more about our products and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;