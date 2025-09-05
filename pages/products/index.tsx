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
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              </p>
            </motion.div>
          </div>
        </section>

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
          </div>
        </section>

        {/* CTA Section */}
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsIndex;