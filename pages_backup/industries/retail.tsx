<<<<<<< HEAD
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
<<<<<<< HEAD
import { ShoppingCart, Brain, BarChart3, CheckCircle, ArrowRight, Package, Users, CreditCard, Smartphone, Globe, Database } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { ShoppingCart, 
  Brain, 
  BarChart3, import {
  ShoppingCart,
  Brain,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Package,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  Database;
} from 'lucide-react';
import Layout from '../../components/Layout';';
const services = [;
  {}
    title: 'E-commerce Platforms,',
    description: 'Custom e-commerce solutions with advanced features and seamless user experience.,',];
=======
import { ShoppingCart, Brain, BarChart3, CheckCircle, ArrowRight, Package, Users, CreditCard, Smartphone, Globe, Database, TrendingUp } from 'lucide-react';

const solutions = [
  {
    title: 'E-commerce Platform',
    description: 'Advanced e-commerce platform with AI-powered features for personalized shopping',
    icon: ShoppingCart,
    features: ['Product Catalog', 'Shopping Cart', 'Payment Processing', 'Order Management']
  },
  {
    title: 'Inventory Management System',
    description: 'AI-powered inventory management with demand forecasting and optimization',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Real-time Tracking']
  },
  {
    title: 'Customer Analytics Platform',
    description: 'Comprehensive analytics platform for customer behavior and preferences',
    icon: BarChart3,
    features: ['Customer Segmentation', 'Behavior Analysis', 'Purchase Patterns', 'Personalization']
  },
  {
    title: 'Mobile Commerce App',
    description: 'Native mobile app for seamless shopping experience across devices',
    icon: Smartphone,
    features: ['Mobile Shopping', 'Push Notifications', 'Offline Support', 'Social Integration']
  }
];

>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Sales',
    description: 'AI-powered personalization and optimization drive higher conversion rates',
    icon: ShoppingCart
  },
  {
    title: 'Better Customer Experience',
    description: 'Personalized recommendations and seamless shopping experience',
    icon: Users
  },
  {
    title: 'Optimized Operations',
    description: 'Automated inventory management and demand forecasting reduce costs',
    icon: CheckCircle
  },
  {
    title: 'Data-Driven Insights',
    description: 'Comprehensive analytics help make informed business decisions',
    icon: Database
  }
<<<<<<< HEAD
;];
export default function RetailPage() {
  return (;
    <Layout );
      title="Retail Technology Solutions - Zion Tech Group"";
      description="Transform retail with e-commerce platforms, inventory management AI, customer analytics, and omnichannel solutions.""
      keywords="retail technology, e-commerce, inventory management, customer analytics, omnichannel retail, retail AI""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <ShoppingCart className="w-12 h-12 text-purple-400 mr-4" />";
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Retail;
                  <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">";
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Revolutionize retail with cutting-edge e-commerce platforms, AI-powered analytics, 
                and omnichannel solutions that drive sales and customer satisfaction.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Get Retail Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">";
                  View Retail Case Studies;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Retail Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive retail technology solutions designed for modern businesses,
                from small boutiques to large retail chains.
=======
];

export default function RetailPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform retail operations with e-commerce platforms, inventory management systems, 
                and AI-powered customer analytics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Retail Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for retail businesses.
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";            </div>
=======
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Retail Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our retail technology solutions deliver measurable improvements in sales, 
                customer experience, and operational efficiency.,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),            </div>
=======
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Retail Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by retail businesses.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
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
                Ready to Transform Retail?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our retail solutions can help your business achieve its goals.
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
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Package, 
  CheckCircle, 
  ArrowRight,
  CreditCard,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const services = [
  {
    name: 'E-commerce Platforms',
    description: 'Build powerful online stores with advanced features and seamless user experiences.',
    icon: ShoppingCart,
    features: ['Custom Design', 'Payment Integration', 'Inventory Management', 'Mobile Optimization']
  },
  {
    name: 'Inventory Management',
    description: 'Real-time inventory tracking and automated stock management systems.',
    icon: Package,
    features: ['Real-time Tracking', 'Automated Reordering', 'Multi-location Support', 'Analytics']
  },
  {
    name: 'Customer Analytics',
    description: 'Deep insights into customer behavior and preferences to drive sales.',
    icon: BarChart3,
    features: ['Customer Segmentation', 'Purchase Analytics', 'Behavioral Tracking', 'Predictive Modeling']
  },
  {
    name: 'Omnichannel Solutions',
    description: 'Seamless integration across all sales channels for unified customer experience.',
    icon: Globe,
    features: ['Channel Integration', 'Unified Inventory', 'Cross-channel Analytics', 'Customer Journey']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 mb-6">
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Retail
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your retail business with cutting-edge technology solutions. From e-commerce 
            platforms to customer analytics, we help you create exceptional shopping experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Customer-First</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Global Reach</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Retail Technology Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mobile-First</h3>
                <p className="text-gray-300 text-sm">Optimized for mobile shopping experiences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Secure Payments</h3>
                <p className="text-gray-300 text-sm">Multiple payment options with security</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
                <p className="text-gray-300 text-sm">Deep insights into customer behavior</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Global Scale</h3>
                <p className="text-gray-300 text-sm">Reach customers worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build the perfect retail solution for your business. From e-commerce 
              platforms to customer analytics, we have everything you need to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-purple-600 hover:to-violet-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
>>>>>>> origin/main
  );
}