import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Building, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Zap,
  Database
} from 'lucide-react';

const enterpriseSolutions = [
  {
    title: "Enterprise AI Solutions",
    description: "Large-scale AI implementations for enterprise operations and decision making",
    icon: BarChart3,
    features: ["Machine Learning Platforms", "Predictive Analytics", "Process Automation", "Data Intelligence"],
    price: "Starting at $50,000"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for enterprise-grade applications and data management",
    icon: Globe,
    features: ["Multi-Cloud Strategy", "Hybrid Cloud Solutions", "Disaster Recovery", "Security & Compliance"],
    price: "Starting at $30,000"
  },
  {
    title: "Digital Transformation",
    description: "Comprehensive digital transformation strategies and implementation",
    icon: Zap,
    features: ["Process Optimization", "Legacy System Modernization", "Workflow Automation", "Change Management"],
    price: "Starting at $75,000"
  },
  {
    title: "Enterprise Security",
    description: "Advanced security solutions for enterprise environments and compliance",
    icon: Shield,
    features: ["Zero Trust Architecture", "Security Monitoring", "Compliance Management", "Incident Response"],
    price: "Starting at $40,000"
  }
];

const enterpriseFeatures = [
  {
    title: "Scalable Architecture",
    description: "Solutions designed to grow with your business and handle enterprise workloads",
    icon: Building
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for critical enterprise systems",
    icon: Users
  },
  {
    title: "Compliance Ready",
    description: "Built-in compliance features for industry standards and regulations",
    icon: Shield
  }
];

export default function EnterprisePage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions including AI, cloud infrastructure, digital transformation, and security services for large organizations."
      keywords="enterprise solutions, digital transformation, cloud infrastructure, enterprise AI, large-scale systems, business automation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your enterprise with comprehensive technology solutions designed for large-scale operations. 
                From AI implementation to cloud infrastructure, we deliver enterprise-grade solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Discuss Your Needs
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
                Enterprise Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions designed specifically for enterprise environments, 
                ensuring scalability, security, and performance at scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {enterpriseSolutions.map((solution, index) => {
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
                    <div className="text-indigo-600 mb-4">
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
                    <div className="text-2xl font-bold text-indigo-600 mb-4">
                      {solution.price}
                    </div>
                    <Link
                      href="/contact"
                      className="text-indigo-600 hover:text-indigo-700 font-semibold inline-flex items-center"
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
                Why Choose Our Enterprise Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges of enterprise environments and deliver solutions 
                that meet the highest standards for performance, security, and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => {
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
                    <div className="text-indigo-600 mb-4">
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Let's discuss your enterprise needs and explore how we can help you implement 
              technology solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Schedule Consultation
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
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