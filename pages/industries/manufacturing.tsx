<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Settings,
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
  Building,
  Rocket,
  Lock,
  Activity,
  Factory,
  FileText,
  Database,
  Cpu,
  DollarSign
} from 'lucide-react';
=======
<<<<<<< HEAD
import Link from 'next/link';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import Layout from '../../components/Layout';

const solutions = [
  {
<<<<<<< HEAD
    title: 'Smart Manufacturing',
    description: 'IoT-enabled smart manufacturing solutions with real-time monitoring and automation.',
    icon: Factory,
    features: ['IoT Sensors', 'Real-time Monitoring', 'Predictive Maintenance', 'Quality Control'],
    benefits: ['25% efficiency gain', '30% cost reduction', '99% quality rate', 'Zero downtime']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain management and optimization for manufacturing operations.',
    icon: Globe,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Logistics Tracking'],
    benefits: ['40% inventory reduction', '50% faster delivery', '20% cost savings', 'Better visibility']
  },
  {
    title: 'Quality Control AI',
    description: 'Computer vision and AI-powered quality control systems for manufacturing.',
    icon: Brain,
    features: ['Visual Inspection', 'Defect Detection', 'Quality Analytics', 'Automated Reporting'],
    benefits: ['95% accuracy', '60% faster inspection', 'Zero defects', 'Real-time alerts']
  },
  {
    title: 'Production Analytics',
    description: 'Advanced analytics platform for manufacturing performance optimization.',
    icon: BarChart3,
    features: ['Performance Metrics', 'OEE Tracking', 'Predictive Analytics', 'KPI Dashboards'],
    benefits: ['15% productivity gain', 'Real-time insights', 'Data-driven decisions', 'Continuous improvement']
  }
];

const challenges = [
  {
    challenge: 'Operational Efficiency',
    description: 'Optimizing manufacturing processes and reducing waste.',
    solution: 'IoT sensors, real-time monitoring, and AI-powered optimization algorithms.',
    icon: Target
  },
  {
    challenge: 'Quality Control',
    description: 'Ensuring consistent product quality and reducing defects.',
    solution: 'Computer vision AI, automated inspection, and predictive quality analytics.',
    icon: Shield
  },
  {
    challenge: 'Supply Chain Management',
    description: 'Managing complex supply chains and supplier relationships.',
    solution: 'AI-powered demand forecasting, inventory optimization, and supplier analytics.',
    icon: Globe
  },
  {
    challenge: 'Predictive Maintenance',
    description: 'Preventing equipment failures and minimizing downtime.',
    solution: 'IoT sensors, machine learning models, and predictive maintenance algorithms.',
    icon: Cpu
=======
    title: 'Smart Manufacturing Platform',
    description: 'AI-powered manufacturing platform with real-time monitoring and optimization',
    icon: Settings,
    features: ['Real-time Monitoring', 'Predictive Maintenance', 'Quality Control', 'Process Optimization']
  },
  {
    title: 'IoT Integration',
    description: 'Comprehensive IoT solutions for connected manufacturing operations',
    icon: Cpu,
    features: ['Sensor Networks', 'Data Collection', 'Device Management', 'Edge Computing']
  },
  {
    title: 'Quality Management System',
    description: 'Advanced quality control and assurance system with AI-powered inspection',
    icon: Shield,
    features: ['Automated Inspection', 'Defect Detection', 'Quality Analytics', 'Compliance Tracking']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain management and optimization platform',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Logistics Tracking']
=======
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, Cpu, Users, Clock, Star, Shield } from 'lucide-react';

const solutions = [
  {
    title: 'Industrial IoT Solutions',
    description: 'Connected manufacturing systems with real-time monitoring, predictive maintenance, and process optimization.',
    features: ['Sensor Integration', 'Real-time Monitoring', 'Predictive Maintenance', 'Process Optimization'],
    icon: Factory
  },
  {
    title: 'Manufacturing Execution Systems',
    description: 'Comprehensive MES for production planning, quality control, and resource management.',
    features: ['Production Planning', 'Quality Control', 'Resource Management', 'Performance Tracking'],
    icon: Cpu
  },
  {
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain visibility and optimization for improved efficiency and cost reduction.',
    features: ['Inventory Management', 'Supplier Integration', 'Demand Forecasting', 'Logistics Optimization'],
    icon: Users
  },
  {
    title: 'Quality Management Systems',
    description: 'Advanced quality control and compliance management for manufacturing operations.',
    features: ['Quality Control', 'Compliance Management', 'Audit Trails', 'Defect Tracking'],
    icon: Shield
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  }
];

const benefits = [
  {
<<<<<<< HEAD
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Optimize manufacturing processes and increase overall equipment effectiveness.',
    metric: '25%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs through automation and optimization.',
    metric: '30%'
  },
  {
    icon: Shield,
    title: 'Quality Improvement',
    description: 'Enhance product quality with AI-powered quality control systems.',
    metric: '95%'
  },
  {
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Minimize equipment downtime with predictive maintenance.',
    metric: '50%'
=======
<<<<<<< HEAD
    title: 'Increased Efficiency',
    description: 'Automated processes and AI optimization improve manufacturing efficiency',
    icon: Activity
  },
  {
    title: 'Better Quality',
    description: 'AI-powered quality control ensures consistent product quality',
    icon: Shield
  },
  {
    title: 'Reduced Costs',
    description: 'Optimized processes and predictive maintenance reduce operational costs',
    icon: CheckCircle
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Comprehensive analytics help make informed manufacturing decisions',
    icon: Database
=======
    icon: Shield,
    title: 'Industry Expertise',
    description: 'Deep understanding of manufacturing processes and industry requirements'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support for critical manufacturing operations'
  },
  {
    icon: Users,
    title: 'Manufacturing Specialists',
    description: 'Team of experts with extensive manufacturing industry experience'
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Track record of successful implementations in manufacturing facilities'
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  }
];

const caseStudies = [
  {
<<<<<<< HEAD
    title: 'Automotive Manufacturer',
    description: 'Implemented smart manufacturing across 5 production lines.',
    results: ['30% efficiency gain', '40% defect reduction', '$10M annual savings'],
    icon: Factory
  },
  {
    title: 'Electronics Company',
    description: 'Deployed AI-powered quality control for circuit board production.',
    results: ['95% defect detection', '60% faster inspection', 'Zero quality issues'],
    icon: Cpu
  },
  {
    title: 'Food Processing Plant',
    description: 'Supply chain optimization and inventory management system.',
    results: ['50% inventory reduction', '25% cost savings', '99% on-time delivery'],
    icon: Globe
  }
];

export default function Manufacturing() {
  return (
    <Layout
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing with smart factory solutions, IoT, AI quality control, and supply chain optimization."
      keywords="smart manufacturing, industrial IoT, quality control, supply chain, manufacturing automation, Industry 4.0"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
=======
    title: 'Smart Factory Implementation',
    client: 'Automotive Manufacturer',
    challenge: 'Implement IoT solutions for real-time monitoring and predictive maintenance',
    solution: 'Deployed comprehensive IoT platform with sensors, analytics, and maintenance alerts',
    results: ['30% reduction in downtime', '25% improvement in efficiency', '40% cost savings'],
    image: '/api/placeholder/400/300'
  },
  {
    title: 'MES System Integration',
    client: 'Electronics Manufacturer',
    challenge: 'Integrate production systems and improve quality control',
    solution: 'Implemented integrated MES with quality management and real-time tracking',
    results: ['50% improvement in quality', '35% reduction in defects', '60% faster reporting'],
    image: '/api/placeholder/400/300'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  }
];

export default function ManufacturingPage() {
  return (
    <MainLayout
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing operations with our IoT solutions, MES systems, and supply chain management platforms."
      keywords="manufacturing technology, IoT, MES, supply chain, quality management, industrial automation"
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
                Manufacturing{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize manufacturing with smart factory solutions, IoT, AI quality control, and supply chain optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Manufacturing Solution
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
                Manufacturing Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for modern manufacturing operations.
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

        {/* Challenges & Solutions */}
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
                Manufacturing Challenges
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We address the key challenges facing modern manufacturing operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg"
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.challenge}</h3>
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Our Solution:</h4>
                          <p className="text-sm text-blue-700">{challenge.solution}</p>
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
                Manufacturing Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in efficiency, quality, and operational performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"
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

        {/* Case Studies */}
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
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from manufacturing companies that have transformed their operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Manufacturing Operations
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading manufacturers in revolutionizing their operations with smart technology solutions.
=======
<<<<<<< HEAD
                Manufacturing <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform manufacturing operations with smart manufacturing platforms, IoT integration, 
                and AI-powered quality control solutions.
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Manufacturing Consultation
                </Link>
<<<<<<< HEAD
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Industries
=======
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
=======
                Manufacturing Technology
                <span className="block text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform manufacturing operations with IoT solutions, MES systems, and supply chain management platforms.
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manufacturing Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for manufacturing companies.
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
=======
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manufacturing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for manufacturing operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Manufacturing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges and requirements of manufacturing operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we've helped manufacturing companies improve efficiency and reduce costs
              </p>
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
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
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our manufacturing solutions can help your company achieve its goals.
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
              Ready to Transform Manufacturing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our manufacturing technology solutions can improve efficiency and reduce costs.
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