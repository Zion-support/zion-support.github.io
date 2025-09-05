import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, DollarSign, TrendingUp, Users, Clock, Star } from 'lucide-react';

const solutions = [
  {
    title: 'Fintech Applications',
    description: 'Secure, scalable fintech solutions including mobile banking, payment processing, and digital wallets.',
    features: ['Mobile Banking', 'Payment Processing', 'Digital Wallets', 'API Integration'],
    icon: DollarSign
  },
  {
    title: 'Risk Management Systems',
    description: 'Advanced risk assessment and management platforms with real-time monitoring and compliance.',
    features: ['Real-time Monitoring', 'Fraud Detection', 'Compliance Reporting', 'Risk Analytics'],
    icon: Shield
  },
  {
    title: 'Trading Platforms',
    description: 'High-performance trading platforms with low latency and advanced analytics capabilities.',
    features: ['Low Latency', 'Real-time Data', 'Advanced Analytics', 'Algorithmic Trading'],
    icon: TrendingUp
  },
  {
    title: 'Regulatory Compliance',
    description: 'Comprehensive compliance solutions for financial regulations and reporting requirements.',
    features: ['KYC/AML', 'Regulatory Reporting', 'Audit Trails', 'Data Governance'],
    icon: Users

  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level security with encryption, authentication, and fraud prevention'
  },
  {
    icon: Clock,
    title: 'Real-time Processing',
    description: 'High-performance systems for real-time financial transactions and data processing'
  },
  {
    icon: Users,
    title: 'Compliance Expertise',
    description: 'Deep knowledge of financial regulations and compliance requirements'
  },
  {
    icon: Star,
    title: 'Proven Track Record',
    description: 'Successfully delivered solutions for leading financial institutions'
  }
];

const caseStudies = [
  {
    title: 'Digital Banking Platform',
    client: 'Regional Credit Union',
    challenge: 'Modernize legacy banking systems and improve customer experience',
    solution: 'Developed comprehensive digital banking platform with mobile app and web portal',
    results: ['60% increase in digital transactions', '40% reduction in operational costs', '95% customer satisfaction'],
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Trading System Modernization',
    client: 'Investment Firm',
    challenge: 'Replace outdated trading system with modern, high-performance platform',
    solution: 'Built low-latency trading platform with advanced analytics and risk management',
    results: ['80% faster trade execution', '50% reduction in system downtime', '30% increase in trading volume'],
    image: '/api/placeholder/400/300'

  }
];

export default function FinancePage() {
  return (
    <MainLayout
      title="Financial Technology Solutions - Zion Tech Group"
      description="Transform financial services with our secure, scalable fintech solutions including digital banking, trading platforms, and compliance systems."
      keywords="fintech, financial technology, banking software, trading platforms, compliance, risk management"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Financial Technology
                <span className="block text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Secure, scalable fintech solutions for digital banking, trading platforms, and regulatory compliance.
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

                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Financial Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed for the financial services industry
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
                Why Choose Us for Finance
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges and regulatory requirements of financial services
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
                See how we've helped financial institutions transform their operations
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Finance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our financial technology solutions can improve your operations and customer experience.
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

          </div>
        </section>
      </div>
    </MainLayout>
  );
}