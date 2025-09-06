


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

import React from "react";
import Layout from "../components/Layout";




export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">


            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>


            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to power your digital transformation.
            </p>
          </div>
          <div className="text-center">


            <p className="text-gray-600">IT Services page is under construction.</p>

          </div>
        </div>
      </div>
    </Layout>

}



import { Star } from 'lucide-react';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Lock, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Smartphone, 
  Laptop, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Wrench,
  FileText,
  Cpu;
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
    price: '$2,500/month',
    benefits: ['Scalable infrastructure', 'Reduced operational costs', 'Enhanced security', 'Improved performance']
  },
  {
    title: 'Network Security Solutions',
    description: 'Advanced cybersecurity measures to protect your business from threats.',
    icon: Shield,
    features: ['Firewall management', 'Intrusion detection', 'Vulnerability assessments', 'Security audits'],
    price: '$1,800/month',
    benefits: ['Threat protection', 'Compliance assurance', 'Risk mitigation', 'Peace of mind']
  },
  {
    title: 'Database Administration',
    description: 'Expert database management and optimization services.',
    icon: Database,
    features: ['Performance tuning', 'Backup strategies', 'Data migration', 'Monitoring'],
    price: '$1,200/month',
    benefits: ['Optimized performance', 'Data protection', 'Reduced downtime', 'Expert support']
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support for all your IT needs.',
    icon: Monitor,
    features: ['Remote assistance', 'Hardware support', 'Software installation', 'User training'],
    price: '$800/month',
    benefits: ['Quick response times', 'Expert technicians', 'Reduced downtime', 'User satisfaction']
  },
  {
    title: 'Network Design & Implementation',
    description: 'Custom network solutions tailored to your business requirements.',
    icon: Network,
    features: ['Network planning', 'Hardware selection', 'Installation', 'Testing'],
    price: '$3,000/project',
    benefits: ['Reliable connectivity', 'Scalable design', 'Future-proof architecture', 'Expert implementation']
  },
  {
    title: 'Server Management',
    description: 'Complete server administration and maintenance services.',
    icon: Server,
    features: ['Server setup', 'Performance monitoring', 'Updates & patches', 'Backup management'],
    price: '$1,500/month',
    benefits: ['Reliable servers', 'Optimal performance', 'Data protection', 'Minimal downtime']
  }
];

const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
  { number: "500+", label: "Systems Managed" },
  { number: "15min", label: "Average Response Time" }
];

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free IT Consultation
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* IT Services Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Service Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Complete IT solutions designed to support your business operations and drive growth.
            </p>
          </motion.div>
          {itServices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Micro SaaS Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Management Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized IT management tools that can be deployed quickly and scaled with your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaS.map((solution, index) => (

}



