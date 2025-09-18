import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Rocket,
  Lock,
  Activity,
  FileText,
  Database,
  Vote
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'Citizen Services Portal',
    description: 'Comprehensive digital platform for citizen services and government interactions.',
    icon: Users,
    features: ['Online Applications', 'Document Management', 'Payment Processing', 'Status Tracking'],
    benefits: ['70% faster processing', '24/7 availability', 'Reduced paperwork', 'Better transparency']
  },
  {
    title: 'Data Analytics Platform',
    description: 'Advanced analytics for government data and decision-making support.',
    icon: BarChart3,
    features: ['Data Visualization', 'Predictive Analytics', 'Performance Metrics', 'Real-time Dashboards'],
    benefits: ['Data-driven decisions', 'Improved efficiency', 'Better resource allocation', 'Transparent reporting']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect government data and systems.',
    icon: Shield,
    features: ['Threat Detection', 'Access Control', 'Data Encryption', 'Compliance Monitoring'],
    benefits: ['99.9% security', 'Zero breaches', 'Compliance assurance', 'Continuous monitoring']
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation of government processes and services.',
    icon: Rocket,
    features: ['Process Automation', 'Legacy System Integration', 'Cloud Migration', 'Change Management'],
    benefits: ['50% efficiency gain', 'Cost reduction', 'Better citizen experience', 'Modern infrastructure']
  }
];

const benefits = [
  {
    icon: Users,
    title: 'Citizen Satisfaction',
    description: 'Improve citizen experience with digital services and faster processing.',
    metric: '85%'
  },
  {
    icon: TrendingUp,
    title: 'Efficiency',
    description: 'Streamline government processes and reduce operational costs.',
    metric: '50%'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Protect sensitive government data with advanced security measures.',
    metric: '99.9%'
  },
  {
    icon: Globe,
    title: 'Transparency',
    description: 'Increase government transparency with open data and analytics.',
    metric: '90%'
  }
];

export default function Government() {
  return (
    <Layout
      title="Government Technology Solutions - Zion Tech Group"
      description="Transform government services with digital platforms, citizen portals, data analytics, and cybersecurity solutions."
      keywords="government technology, digital government, citizen services, government analytics, public sector, e-government"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government{' '}
                <span className="bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform government services with digital platforms, citizen portals, and advanced analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-gray-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Government Solution
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Government Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for government agencies and public sector organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {solution.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Government Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in citizen satisfaction, operational efficiency, and transparency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-gray-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Government Services
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading government agencies in modernizing their services with technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Government Consultation
                </Link>
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Industries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
