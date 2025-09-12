import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platform',
    description: 'Complete online store solution with payment processing'
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Deep insights into customer behavior and preferences'
  },
  {
    icon: BarChart3,
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and automated reordering'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-optimized shopping experience'
  }
];

export default function RetailSolutionsPage() {
  return (
    <>
      <Head>
        <title>Retail Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive retail technology solutions for modern commerce." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Retail Solutions</h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Transform your retail business with cutting-edge technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Retail Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to succeed in modern retail.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Retail Business?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our retail solutions can boost your sales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}