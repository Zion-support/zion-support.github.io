<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
<<<<<<< HEAD
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
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Cloud, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Layout from '../../components/Layout';
>>>>>>> pr-11913

const products = [
  {
    id: 1,
<<<<<<< HEAD
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
=======
    name: 'AI Solutions Platform',
    description: 'Comprehensive AI platform for business automation and intelligent decision making.',
    icon: Zap,
    category: 'AI/ML',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: 'Starting at $5,000/month'
  },
  {
    id: 2,
    name: 'Cloud Migration Suite',
    description: 'Complete solution for migrating and optimizing your infrastructure in the cloud.',
    icon: Cloud,
    category: 'Cloud',
    features: ['Multi-cloud Support', 'Automated Migration', 'Cost Optimization', 'Security Compliance'],
    pricing: 'Starting at $3,000/month'
  },
  {
    id: 3,
    name: 'Security & Compliance',
    description: 'Enterprise-grade security solutions to protect your data and ensure compliance.',
    icon: Shield,
    category: 'Security',
    features: ['Threat Detection', 'Data Encryption', 'Compliance Monitoring', 'Incident Response'],
    pricing: 'Starting at $2,500/month'
  },
  {
    id: 4,
    name: 'Analytics Dashboard',
    description: 'Advanced analytics and reporting platform for data-driven business insights.',
    icon: BarChart3,
    category: 'Analytics',
    features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Insights'],
    pricing: 'Starting at $1,500/month'
  }
];
>>>>>>> pr-11913

export default function Products() {
  return (
<<<<<<< HEAD
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
=======

const ProductsIndex: NextPage = () => {
  return (
    <Layout title="Products - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100">Innovative solutions for modern businesses</p>
>>>>>>> pr-11914
          </div>
        </section>
      </div>
=======
    <Layout>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of technology products designed to transform your business." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore our comprehensive suite of technology products designed to transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <motion.div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {product.category}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2">{product.name}</h3>
                          <p className="text-gray-600">{product.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
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
                        <div>
                          <span className="text-2xl font-bold text-gray-900">{product.pricing}</span>
                        </div>
                        <Link
                          href={`/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We can create custom products tailored to your specific business needs and requirements.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}