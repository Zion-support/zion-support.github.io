<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const products = [
  {
    id: 'ai-analytics-suite',
    name: 'ZionAI Analytics Suite',
    description: 'Comprehensive business intelligence platform with AI-powered insights and predictive analytics.',
    category: 'AI & Analytics',
    pricing: '$2,999/month',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
    benefits: ['Data-Driven Decisions', 'Improved Efficiency', 'Competitive Advantage', 'Scalable Solutions'],
    icon: Award,
    popular: true
  },
  {
    id: 'cloud-infrastructure',
    name: 'ZionCloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions with enterprise-grade security and performance.',
    category: 'Cloud Services',
    pricing: '$4,999/month',
    features: ['Auto-scaling', '99.9% Uptime', 'Global CDN', 'Security Compliance'],
    benefits: ['Cost Optimization', 'High Availability', 'Global Performance', 'Secure Operations'],
    icon: Globe,
    popular: true
  },
  {
    id: 'cybersecurity-suite',
    name: 'ZionShield Security',
    description: 'Advanced cybersecurity solutions with threat detection and prevention capabilities.',
    category: 'Security',
    pricing: '$3,999/month',
    features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Compliance Management'],
    benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance Ready', 'Peace of Mind'],
    icon: Shield,
    popular: false
  },
  {
    id: 'automation-platform',
    name: 'ZionAutomate Platform',
    description: 'Intelligent automation platform for streamlining business processes and workflows.',
    category: 'Automation',
    pricing: '$2,499/month',
    features: ['Workflow Automation', 'Process Optimization', 'Integration Hub', 'Analytics Dashboard'],
    benefits: ['Increased Productivity', 'Reduced Errors', 'Cost Savings', 'Better Efficiency'],
    icon: Zap,
    popular: false
  },
  {
    id: 'collaboration-suite',
    name: 'ZionCollaborate Suite',
    description: 'Comprehensive collaboration platform for teams and organizations.',
    category: 'Collaboration',
    pricing: '$1,999/month',
    features: ['Team Chat', 'Video Conferencing', 'File Sharing', 'Project Management'],
    benefits: ['Better Communication', 'Improved Collaboration', 'Remote Work Ready', 'Enhanced Productivity'],
    icon: Users,
    popular: false
  },
  {
    id: 'data-management',
    name: 'ZionData Manager',
    description: 'Advanced data management and governance platform for enterprise data needs.',
    category: 'Data Management',
    pricing: '$3,499/month',
    features: ['Data Governance', 'Quality Management', 'Compliance Tools', 'Analytics Integration'],
    benefits: ['Data Quality', 'Compliance Ready', 'Better Insights', 'Risk Reduction'],
    icon: Star,
    popular: false
  }
];

const categories = [
  'All',
  'AI & Analytics',
  'Cloud Services',
  'Security',
  'Automation',
  'Collaboration',
  'Data Management'
];

const ProductsIndex: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products designed to transform your business operations."
      keywords="products, technology solutions, AI, cloud, security, automation, collaboration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Database, 
  ArrowRight,
  CheckCircle,
  Star,
  Users
} from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'AI Development Platform',
    description: 'Build and deploy AI models with our comprehensive development platform.',
    icon: Brain,
    features: ['Model Training', 'Deployment', 'Monitoring', 'Scaling'],
    price: 'Starting at $99/month',
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions for modern applications.',
    icon: Cloud,
    features: ['Auto-scaling', 'Load Balancing', 'CDN', 'Monitoring'],
    price: 'Starting at $49/month',
    category: 'Cloud'
  },
  {
    id: 3,
    title: 'Security Suite',
    description: 'Comprehensive security solutions to protect your applications.',
    icon: Shield,
    features: ['Threat Detection', 'Encryption', 'Access Control', 'Auditing'],
    price: 'Starting at $79/month',
    category: 'Security'
  },
  {
    id: 4,
    title: 'API Gateway',
    description: 'Manage and secure your APIs with our powerful gateway solution.',
    icon: Code,
    features: ['Rate Limiting', 'Authentication', 'Analytics', 'Documentation'],
    price: 'Starting at $29/month',
    category: 'API'
  },
  {
    id: 5,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our analytics platform.',
    icon: Database,
    features: ['Real-time Processing', 'Visualization', 'Machine Learning', 'Reporting'],
    price: 'Starting at $149/month',
    category: 'Analytics'
  },
  {
    id: 6,
    title: 'Performance Monitoring',
    description: 'Monitor and optimize your application performance in real-time.',
    icon: Zap,
    features: ['Real-time Monitoring', 'Alerting', 'Performance Insights', 'Optimization'],
    price: 'Starting at $39/month',
    category: 'Monitoring'
  }
];

const ProductsIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of technology products and solutions." />
        <meta name="keywords" content="products, solutions, AI, cloud, security, API, analytics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology products designed to transform your business operations and drive growth.
=======
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of technology products designed to 
                accelerate your digital transformation and drive business growth.
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                        {product.popular && (
                          <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Pricing:</span>
                        <span className="text-lg font-bold text-blue-600">{product.pricing}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
=======
        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Product Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of products designed to meet your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Discover how our products can help you achieve your business goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Sales
                </Link>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss which products are right for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Sales
                </Link>
                <Link href="/demo" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Request Demo
                </Link>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
};

export default ProductsIndex;