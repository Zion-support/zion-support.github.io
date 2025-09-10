import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Truck, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const features = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Custom online stores with advanced features and seamless user experience.'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Secure payment processing with multiple payment gateways and methods.'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Comprehensive inventory tracking and management systems.'
  },
  {
    icon: Truck,
    title: 'Order Fulfillment',
    description: 'Streamlined order processing and fulfillment workflows.'
  }
];

const solutions = [
  {
    title: 'Custom E-commerce Store',
    description: 'Fully customized online store with unique design and advanced functionality.',
    features: ['Custom Design', 'Product Catalog', 'Shopping Cart', 'Checkout Process'],
    pricing: 'Starting at $8,000'
  },
  {
    title: 'Marketplace Platform',
    description: 'Multi-vendor marketplace platform for connecting buyers and sellers.',
    features: ['Vendor Management', 'Commission System', 'Review System', 'Analytics Dashboard'],
    pricing: 'Starting at $15,000'
  },
  {
    title: 'Mobile Commerce App',
    description: 'Native mobile apps for iOS and Android with e-commerce functionality.',
    features: ['Mobile App Development', 'Push Notifications', 'Offline Support', 'App Store Optimization'],
    pricing: 'Starting at $12,000'
  },
  {
    title: 'E-commerce Integration',
    description: 'Integrate e-commerce functionality into existing websites and systems.',
    features: ['API Integration', 'Payment Gateway', 'Inventory Sync', 'Order Management'],
    pricing: 'Starting at $5,000'
  }
];

const stats = [
  { number: '150+', label: 'E-commerce Projects' },
  { number: '500+', label: 'Online Stores' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

export default function EcommercePage() {
  return (
    <MainLayout
      title="E-commerce Solutions - Zion Tech Group"
      description="Professional e-commerce development services including custom online stores, marketplace platforms, mobile commerce apps, and payment integration."
      keywords="e-commerce development, online store, marketplace platform, mobile commerce, payment integration, shopping cart"
      canonical="https://ziontechgroup.com/ecommerce"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              E-commerce Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Build powerful online stores and marketplace platforms that drive sales and grow your business. 
              From custom e-commerce sites to mobile commerce apps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Your Store
              </Link>
              <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View Case Studies
              </Link>
            </motion.div>
          </div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create comprehensive e-commerce solutions that provide exceptional user experience and drive conversions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-orange-600 mb-4">
                    <IconComponent className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete e-commerce solutions tailored to your business needs and target audience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{solution.pricing}</span>
                  <Link 
                    href="/contact"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Let's build an e-commerce solution that drives sales and grows your business online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}