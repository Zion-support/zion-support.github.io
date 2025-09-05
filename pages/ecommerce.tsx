import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Truck, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Globe,
  BarChart3,
  Shield,
  Users,
  Zap,
  Star,
  Heart
} from 'lucide-react';
import Layout from './components/Layout';

const ecommerceServices = [
  {
    title: "E-commerce Platform Development",
    description: "Custom e-commerce platforms built for your business needs",
    icon: ShoppingCart,
    features: ["Custom design", "Mobile responsive", "SEO optimized", "Payment integration"]
  },
  {
    title: "Payment Gateway Integration",
    description: "Secure payment processing with multiple payment methods",
    icon: CreditCard,
    features: ["Multiple gateways", "PCI compliance", "Fraud protection", "Mobile payments"]
  },
  {
    title: "Inventory Management",
    description: "Advanced inventory tracking and management systems",
    icon: Package,
    features: ["Real-time tracking", "Automated alerts", "Multi-location", "Analytics"]
  },
  {
    title: "Order Fulfillment",
    description: "Streamlined order processing and shipping solutions",
    icon: Truck,
    features: ["Order tracking", "Shipping integration", "Returns management", "Notifications"]
  }
];

const platforms = [
  {
    name: "Shopify",
    description: "Popular e-commerce platform with extensive app ecosystem",
    icon: Globe,
    benefits: ["Easy setup", "App marketplace", "Mobile responsive", "SEO tools"]
  },
  {
    name: "WooCommerce",
    description: "WordPress-based e-commerce solution with flexibility",
    icon: Globe,
    benefits: ["WordPress integration", "Customizable", "Open source", "Plugin ecosystem"]
  },
  {
    name: "Magento",
    description: "Enterprise-grade e-commerce platform for large businesses",
    icon: Globe,
    benefits: ["Scalable", "Feature-rich", "B2B capabilities", "Multi-store"]
  },
  {
    name: "Custom Solutions",
    description: "Tailored e-commerce platforms built from scratch",
    icon: Globe,
    benefits: ["Fully customizable", "Unique features", "Performance optimized", "Brand aligned"]
  }
];

const features = [
  "Product catalog management", "Shopping cart functionality", "User accounts & profiles", 
  "Order management", "Payment processing", "Shipping integration", "Tax calculation",
  "Inventory tracking", "Customer reviews", "Wishlist functionality", "Search & filters",
  "Mobile optimization", "SEO optimization", "Analytics & reporting", "Multi-language support"
];

export default function Ecommerce() {
  return (
    <Layout 
      title="E-commerce Solutions | Zion Tech Group"
      description="Complete e-commerce development services including platform development, payment integration, inventory management, and digital marketing."
      keywords="e-commerce development, online store, shopping cart, payment gateway, inventory management, digital commerce"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              E-commerce Solutions
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 mb-8">
              Build, launch, and scale your online store with our comprehensive e-commerce development services. From concept to conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Store
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              E-commerce Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end e-commerce solutions for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              E-commerce Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right platform for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <platform.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {platform.description}
                </p>
                <ul className="space-y-2">
                  {platform.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              E-commerce Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features for a complete online shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-800 font-medium text-sm">{feature}</span>
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
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your e-commerce vision and explore how we can help you build a successful online business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}