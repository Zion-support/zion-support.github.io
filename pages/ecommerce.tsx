import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const ecommerceSolutions = [
  {
    title: "E-commerce Platform Development",
    description: "Custom e-commerce platforms built for your specific business needs",
    icon: ShoppingCart,
    features: ["Custom Design", "Payment Integration", "Inventory Management", "Order Processing"],
    price: "Starting at $12,000"
  },
  {
    title: "Payment Gateway Integration",
    description: "Secure payment processing with multiple payment methods and currencies",
    icon: CreditCard,
    features: ["Multiple Payment Methods", "Currency Support", "Fraud Protection", "PCI Compliance"],
    price: "Starting at $3,000"
  },
  {
    title: "Mobile Commerce Apps",
    description: "Native and cross-platform mobile apps for iOS and Android",
    icon: Globe,
    features: ["Native iOS/Android", "Cross-Platform", "Push Notifications", "Offline Support"],
    price: "Starting at $15,000"
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting for e-commerce performance",
    icon: BarChart3,
    features: ["Sales Analytics", "Customer Insights", "Performance Metrics", "Custom Reports"],
    price: "Starting at $2,000"
  }
];

const ecommerceFeatures = [
  {
    title: "Mobile First",
    description: "Responsive design optimized for mobile commerce and user experience",
    icon: Globe
  },
  {
    title: "Secure Payments",
    description: "Enterprise-grade security for payment processing and data protection",
    icon: Shield
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed and performance to maximize conversions",
    icon: Zap
  }
];

export default function EcommercePage() {
  return (
    <Layout
      title="E-commerce Solutions - Zion Tech Group"
      description="Complete e-commerce solutions including platform development, payment integration, mobile apps, and analytics for online businesses."
      keywords="e-commerce solutions, online store, payment integration, mobile commerce, e-commerce platform, online retail"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                E-commerce{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build and scale your online business with our comprehensive e-commerce solutions. 
                From custom platforms to mobile apps, we help you create exceptional shopping experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Store
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                E-commerce Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end e-commerce solutions that help you build, launch, and scale 
                your online business with cutting-edge technology and best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {ecommerceSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-emerald-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-emerald-600 mb-4">
                      {solution.price}
                    </div>
                    <Link
                      href="/contact"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our E-commerce Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine e-commerce expertise with modern technology to create 
                solutions that drive sales and provide exceptional user experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {ecommerceFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-emerald-600 mb-4">
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Let's discuss your e-commerce needs and explore how we can help you build 
              a successful online business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call Us Now
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}