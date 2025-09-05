import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Building, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  DollarSign,
  Globe
} from 'lucide-react';

const microSaasProducts = [
  {
    id: 1,
    title: 'AI-Powered CRM',
    description: 'Intelligent customer relationship management with AI insights and automation.',
    icon: Users,
    features: ['AI Lead Scoring', 'Automated Follow-ups', 'Customer Analytics', 'Integration APIs'],
    pricing: 'Starting at $29/month',
    category: 'CRM'
  },
  {
    id: 2,
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business analytics with customizable dashboards and reporting.',
    icon: Database,
    features: ['Real-time Data', 'Custom Dashboards', 'Automated Reports', 'Data Export'],
    pricing: 'Starting at $19/month',
    category: 'Analytics'
  },
  {
    id: 3,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline business processes.',
    icon: Zap,
    features: ['Task Automation', 'Process Templates', 'Integration Hub', 'Custom Workflows'],
    pricing: 'Starting at $39/month',
    category: 'Automation'
  },
  {
    id: 4,
    title: 'Team Collaboration Hub',
    description: 'Centralized platform for team communication and project management.',
    icon: Building,
    features: ['Team Chat', 'Project Management', 'File Sharing', 'Video Calls'],
    pricing: 'Starting at $15/month',
    category: 'Collaboration'
  },
  {
    id: 5,
    title: 'Security Monitoring',
    description: 'Comprehensive security monitoring and threat detection for your business.',
    icon: Shield,
    features: ['Threat Detection', 'Security Alerts', 'Compliance Reports', 'Incident Response'],
    pricing: 'Starting at $49/month',
    category: 'Security'
  },
  {
    id: 6,
    title: 'Cloud Storage Manager',
    description: 'Secure cloud storage with advanced file management and sharing capabilities.',
    icon: Cloud,
    features: ['Secure Storage', 'File Sharing', 'Version Control', 'Access Management'],
    pricing: 'Starting at $9/month',
    category: 'Storage'
  }
];

const stats = [
  { number: "50+", label: "Micro SaaS Products" },
  { number: "1000+", label: "Active Users" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

export default function MicroSAAS() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our collection of micro SaaS products designed to solve specific business challenges. Affordable, scalable, and easy to use."
      keywords="micro SaaS, SaaS products, business software, CRM, analytics, automation, collaboration tools"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Micro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}SaaS Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our collection of micro SaaS products designed to solve specific business challenges. 
                Affordable, scalable, and easy to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our carefully crafted micro SaaS solutions designed to address specific business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <product.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {product.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {product.pricing}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Try Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Start with a free trial and see how our micro SaaS products can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}