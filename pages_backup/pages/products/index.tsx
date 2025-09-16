import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Globe,
  Settings
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AI Email Responder',
    description: 'Intelligent email automation powered by advanced AI',
    category: 'AI Services',
    icon: Brain,
    price: '$99/month',
    features: [
      'Natural language processing',
      'Context-aware responses',
      'Multi-language support',
      'Custom training models'
    ],
    rating: 4.8,
    users: 1200,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses',
    category: 'Cloud Services',
    icon: Cloud,
    price: '$199/month',
    features: [
      'Auto-scaling infrastructure',
      'Global CDN',
      '99.9% uptime guarantee',
      '24/7 monitoring'
    ],
    rating: 4.7,
    users: 850,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    name: 'Security Suite',
    description: 'Comprehensive security solutions for enterprise',
    category: 'Security',
    icon: Shield,
    price: '$299/month',
    features: [
      'Advanced threat detection',
      'Real-time monitoring',
      'Compliance management',
      'Incident response'
    ],
    rating: 4.9,
    users: 650,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 4,
    name: 'Micro SaaS Platform',
    description: 'Complete SaaS solution for small businesses',
    category: 'SaaS',
    icon: Zap,
    price: '$149/month',
    features: [
      'Multi-tenant architecture',
      'User management',
      'Payment processing',
      'Analytics dashboard'
    ],
    rating: 4.6,
    users: 950,
    color: 'from-purple-500 to-pink-500'
  }
];

const categories = [
  'All',
  'AI Services',
  'Cloud Services',
  'Security',
  'SaaS'
];

export default function ProductsIndex() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products and services designed for modern businesses."
      keywords="products, AI services, cloud computing, security, SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {product.users} users
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Globe className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Choose the perfect product for your business needs and start your journey with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
