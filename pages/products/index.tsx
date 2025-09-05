import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
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
  Database
} from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'AI Development Platform',
    description: 'Comprehensive AI development tools and frameworks for building intelligent applications.',
    icon: Brain,
    category: 'AI & Machine Learning',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: 'Starting at $1,000/month',
    rating: 4.9
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    icon: Cloud,
    category: 'Cloud Computing',
    features: ['Auto-scaling', 'Load Balancing', 'Database Management', 'Monitoring'],
    pricing: 'Starting at $500/month',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Cybersecurity Suite',
    description: 'Advanced security solutions to protect your business from cyber threats.',
    icon: Shield,
    category: 'Cybersecurity',
    features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance'],
    pricing: 'Starting at $800/month',
    rating: 4.9
  },
  {
    id: 4,
    title: 'Data Analytics Platform',
    description: 'Powerful data analytics and business intelligence tools for data-driven decisions.',
    icon: Database,
    category: 'Data Analytics',
    features: ['Real-time Analytics', 'Data Visualization', 'Predictive Modeling', 'Reporting'],
    pricing: 'Starting at $600/month',
    rating: 4.7
  },
  {
    id: 5,
    title: 'IoT Solutions',
    description: 'Internet of Things solutions for connected devices and smart systems.',
    icon: Zap,
    category: 'IoT',
    features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Automation'],
    pricing: 'Starting at $400/month',
    rating: 4.6
  },
  {
    id: 6,
    title: 'Blockchain Platform',
    description: 'Blockchain development and deployment solutions for secure transactions.',
    icon: Globe,
    category: 'Blockchain',
    features: ['Smart Contracts', 'Decentralized Apps', 'Cryptocurrency', 'Security'],
    pricing: 'Starting at $1,200/month',
    rating: 4.8
  }
];

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Products - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology products including AI platforms, cloud solutions, cybersecurity, and more." />
        <meta name="keywords" content="products, AI platform, cloud solutions, cybersecurity, data analytics, IoT, blockchain" />
        <meta property="og:title" content="Products - Zion Tech Group Technology Solutions" />
        <meta property="og:description" content="Discover our innovative technology products designed to transform your business." />
        <meta property="og:url" content="https://ziontechgroup.com/products" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive range of technology products designed to transform your business and drive innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our innovative technology products that are transforming businesses across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-lg font-bold text-green-600">{product.pricing}</div>
                    </div>
                    
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.title)}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
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
                Contact us today to learn more about our products and how they can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Sales
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}