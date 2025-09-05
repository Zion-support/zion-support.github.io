<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  DollarSign,
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
  CreditCard,
  FileText,
  Database,
  TrendingDown
} from 'lucide-react';
import Layout from '../components/Layout';

const solutions = [
  {
    title: 'Fraud Detection & Prevention',
    description: 'AI-powered real-time fraud detection and prevention systems for financial transactions.',
    icon: Shield,
    features: ['Real-time Monitoring', 'Machine Learning Models', 'Risk Scoring', 'Automated Alerts'],
    benefits: ['99.9% accuracy', '60% faster detection', '40% cost reduction', '24/7 monitoring']
  },
  {
    title: 'Algorithmic Trading',
    description: 'Advanced trading algorithms and automated trading systems for financial markets.',
    icon: TrendingUp,
    features: ['High-frequency Trading', 'Risk Management', 'Portfolio Optimization', 'Market Analysis'],
    benefits: ['25% better returns', 'Reduced risk', 'Faster execution', 'Data-driven decisions']
  },
  {
    title: 'Risk Assessment Platform',
    description: 'Comprehensive risk assessment and management platform for financial institutions.',
    icon: Target,
    features: ['Credit Risk Analysis', 'Market Risk Assessment', 'Operational Risk', 'Compliance Monitoring'],
    benefits: ['30% risk reduction', 'Faster approvals', 'Better compliance', 'Improved accuracy']
  },
  {
    title: 'Digital Banking Solutions',
    description: 'Modern digital banking platform with mobile-first design and advanced features.',
    icon: CreditCard,
    features: ['Mobile Banking', 'Digital Wallets', 'Payment Processing', 'Account Management'],
    benefits: ['50% user engagement', 'Reduced costs', 'Better UX', 'Increased security']
  }
];

const challenges = [
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting complex financial regulations and compliance requirements.',
    solution: 'Automated compliance monitoring, regulatory reporting, and audit trail systems.',
    icon: FileText
  },
  {
    challenge: 'Data Security',
    description: 'Protecting sensitive financial data from cyber threats and breaches.',
    solution: 'Multi-layer security, encryption, and advanced threat detection systems.',
    icon: Lock
  },
  {
    challenge: 'Real-time Processing',
    description: 'Processing high-volume transactions in real-time with low latency.',
    solution: 'High-performance computing, microservices architecture, and optimized databases.',
    icon: Clock
  },
  {
    challenge: 'Scalability',
    description: 'Handling increasing transaction volumes and user growth.',
    solution: 'Cloud-native architecture, auto-scaling, and distributed systems.',
    icon: TrendingUp
  }
];

=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { DollarSign, Brain, Shield, BarChart3, CheckCircle, ArrowRight, TrendingUp, Lock, CreditCard, Database, FileText, Users } from 'lucide-react';

const solutions = [
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced machine learning algorithms to detect and prevent fraudulent transactions',
    icon: Shield,
    features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts']
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Comprehensive analytics platform for financial forecasting and risk assessment',
    icon: BarChart3,
    features: ['Market Analysis', 'Risk Modeling', 'Portfolio Optimization', 'Regulatory Compliance']
  },
  {
    title: 'Digital Banking Solutions',
    description: 'Modern digital banking platform with AI-powered features',
    icon: CreditCard,
    features: ['Mobile Banking', 'AI Chatbots', 'Personalized Services', 'Secure Transactions']
  },
  {
    title: 'Regulatory Compliance System',
    description: 'Automated compliance monitoring and reporting system',
    icon: FileText,
    features: ['Regulatory Reporting', 'Compliance Monitoring', 'Audit Trails', 'Risk Assessment']
  }
];

>>>>>>> cursor/expand-services-advertise-and-build-project-9473
const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Automate processes and reduce operational costs through technology.',
    metric: '35%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
<<<<<<< HEAD
    description: 'Advanced security measures to protect financial data and transactions.',
    metric: '99.9%'
  },
  {
    icon: Clock,
    title: 'Faster Processing',
    description: 'Real-time transaction processing and instant decision making.',
    metric: '80%'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Improved user experience with modern digital banking solutions.',
    metric: '90%'
  }
];

const caseStudies = [
  {
    title: 'Major Bank',
    description: 'Implemented AI-powered fraud detection across all digital channels.',
    results: ['99.5% fraud detection', '60% false positive reduction', '$5M annual savings'],
    icon: Building
  },
  {
    title: 'Investment Firm',
    description: 'Deployed algorithmic trading system for portfolio management.',
    results: ['25% better returns', '40% risk reduction', '50% faster execution'],
    icon: TrendingUp
  },
  {
    title: 'Credit Union',
    description: 'Digital transformation with mobile banking and payment solutions.',
    results: ['70% mobile adoption', '45% cost reduction', '95% customer satisfaction'],
    icon: CreditCard
  }
];

export default function Finance() {
  return (
    <Layout
      title="Financial Technology Solutions - Zion Tech Group"
      description="Transform financial services with AI-powered fraud detection, algorithmic trading, and digital banking solutions."
      keywords="fintech, financial technology, fraud detection, algorithmic trading, digital banking, risk assessment"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
=======
    description: 'Advanced security measures protect against cyber threats and fraud',
    icon: Lock
  },
  {
    title: 'Improved Efficiency',
    description: 'Automated processes reduce manual work and increase productivity',
    icon: TrendingUp
  },
  {
    title: 'Better Risk Management',
    description: 'AI-powered analytics help identify and mitigate risks',
    icon: Shield
  },
  {
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring ensures adherence to regulations',
    icon: CheckCircle
  }
];

export default function FinancePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Financial{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize financial services with AI-powered solutions, fraud detection, and digital banking platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get FinTech Solution
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
=======
                Finance <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your financial services with AI-powered fraud detection, predictive analytics, 
                and automated compliance solutions.
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
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
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
                Financial Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive fintech solutions designed for modern financial institutions.
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
                      <div className="text-green-600">
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
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Finance Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for financial institutions.
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
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
                Financial Industry Challenges
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We address the unique challenges facing financial institutions today.
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
                      <div className="text-green-600">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.challenge}</h3>
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Our Solution:</h4>
                          <p className="text-sm text-green-700">{challenge.solution}</p>
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
                Financial Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in efficiency, security, and customer satisfaction.
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
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
=======
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Finance Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by financial institutions.
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
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
                Real results from financial institutions that have transformed their operations.
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
                    <div className="text-green-600 mb-4">
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Financial Services
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading financial institutions in revolutionizing their services with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get FinTech Consultation
                </Link>
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  View All Industries
=======
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Finance?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our finance solutions can help your institution achieve its goals.
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
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}