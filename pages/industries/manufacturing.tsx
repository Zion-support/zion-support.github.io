<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../../components/Layout';

const solutions = [
  {
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
  }
];

const benefits = [
  {
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
  }
];

const caseStudies = [
  {
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Manufacturing <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform manufacturing operations with smart manufacturing platforms, IoT integration, 
                and AI-powered quality control solutions.
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