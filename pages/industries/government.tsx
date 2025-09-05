<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import Link from 'next/link';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import Layout from '../../components/Layout';

const solutions = [
  {
<<<<<<< HEAD
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
=======
    title: 'Digital Government Platform',
    description: 'Comprehensive digital platform for government services and citizen engagement',
    icon: Building,
    features: ['Citizen Portal', 'Service Automation', 'Document Management', 'Multi-channel Access']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect government data and systems',
    icon: Shield,
    features: ['Threat Detection', 'Access Control', 'Data Encryption', 'Compliance Monitoring']
  },
  {
    title: 'Data Analytics Platform',
    description: 'AI-powered analytics platform for government decision making',
    icon: BarChart3,
    features: ['Performance Metrics', 'Predictive Analytics', 'Resource Optimization', 'Policy Analysis']
  },
  {
    title: 'Citizen Services Portal',
    description: 'User-friendly portal for citizens to access government services',
    icon: Users,
    features: ['Service Requests', 'Document Submission', 'Status Tracking', 'Mobile Access']
=======
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Building, Users, Clock, Star, FileText } from 'lucide-react';

const solutions = [
  {
    title: 'Citizen Services Portal',
    description: 'Comprehensive digital platform for citizen services, applications, and government interactions.',
    features: ['Online Applications', 'Document Management', 'Payment Processing', 'Status Tracking'],
    icon: Building
  },
  {
    title: 'Data Management Systems',
    description: 'Secure data management and analytics platforms for government operations and decision-making.',
    features: ['Data Integration', 'Analytics Dashboard', 'Report Generation', 'Data Security'],
    icon: FileText
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect government systems and sensitive citizen data.',
    features: ['Threat Detection', 'Access Control', 'Compliance Monitoring', 'Incident Response'],
    icon: Shield
  },
  {
    title: 'Workflow Automation',
    description: 'Automated processes for government operations, approvals, and citizen service delivery.',
    features: ['Process Automation', 'Approval Workflows', 'Document Processing', 'Notification Systems'],
    icon: Users
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  }
];

const benefits = [
  {
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    title: 'Enhanced Security',
    description: 'Advanced security measures protect sensitive government data',
    icon: Lock
=======
    icon: Shield,
    title: 'Security Compliance',
    description: 'Full compliance with government security standards and regulations'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support for critical government operations'
  },
  {
    icon: Users,
    title: 'Government Expertise',
    description: 'Deep understanding of government processes and regulatory requirements'
  },
  {
    icon: Star,
    title: 'Proven Track Record',
    description: 'Successfully delivered solutions for federal, state, and local governments'
  }
];

const caseStudies = [
  {
    title: 'State Government Portal',
    client: 'State Government',
    challenge: 'Modernize citizen services and improve accessibility',
    solution: 'Developed comprehensive digital portal with online services and mobile access',
    results: ['70% reduction in in-person visits', '50% faster service delivery', '90% citizen satisfaction'],
    image: '/api/placeholder/400/300'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  },
  {
    title: 'Federal Data Analytics Platform',
    client: 'Federal Agency',
    challenge: 'Consolidate data from multiple sources and improve decision-making',
    solution: 'Implemented integrated data platform with advanced analytics and reporting',
    results: ['60% improvement in data accuracy', '40% reduction in reporting time', '100% compliance'],
    image: '/api/placeholder/400/300'
  }
];

export default function GovernmentPage() {
  return (
    <MainLayout
      title="Government Technology Solutions - Zion Tech Group"
      description="Transform government operations with our secure, compliant solutions including citizen portals, data management, and cybersecurity systems."
      keywords="government technology, citizen services, data management, cybersecurity, compliance, public sector"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
                Government <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform government operations with digital platforms, cybersecurity solutions, 
                and data analytics that improve citizen services and operational efficiency.
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
=======
                Government Technology
                <span className="block text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Secure, compliant technology solutions for government operations, citizen services, and public sector efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Government Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for government agencies.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
=======
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for government agencies
              </p>
            </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
<<<<<<< HEAD
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
=======
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
<<<<<<< HEAD
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
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Government
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges and regulatory requirements of government operations
              </p>
            </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
<<<<<<< HEAD
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
=======
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we've helped government agencies improve citizen services and operational efficiency
              </p>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-2"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-600 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-600 mb-4"><strong>Solution:</strong> {study.solution}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our government solutions can help your agency achieve its goals.
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </Link>
              </div>
            </motion.div>
=======
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Government?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our government technology solutions can improve citizen services and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
          </div>
        </section>
      </div>
    </MainLayout>
  );
}