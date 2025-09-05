import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  Lock, 
  Zap,
  Globe,
  Database
} from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced security measures protect against cyber threats and fraud',
    features: ['Multi-factor Authentication', 'End-to-end Encryption', 'Fraud Detection', 'Compliance Monitoring']
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'AI-powered risk assessment and real-time monitoring systems',
    features: ['Real-time Risk Analysis', 'Predictive Modeling', 'Portfolio Optimization', 'Stress Testing']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive financial analytics and regulatory reporting',
    features: ['Real-time Dashboards', 'Regulatory Compliance', 'Performance Analytics', 'Custom Reports']
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline operations with intelligent automation solutions',
    features: ['Process Automation', 'Workflow Optimization', 'Document Processing', 'API Integration']
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced security measures protect against cyber threats and fraud',
    metric: '99.9%'
  },
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description: 'Automated processes reduce manual work and improve accuracy',
    metric: '40%'
  },
  {
    icon: Clock,
    title: 'Faster Processing',
    description: 'Real-time processing and instant transaction settlement',
    metric: '90%'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Seamless digital banking and personalized financial services',
    metric: '95%'
  }
];

const technologies = [
  'Blockchain & Cryptocurrency',
  'AI & Machine Learning',
  'Cloud Computing',
  'API Integration',
  'Data Analytics',
  'Mobile Banking',
  'RegTech Solutions',
  'Cybersecurity'
];

export default function Finance() {
  return (
    <Layout 
      title="Financial Services - Zion Tech Group"
      description="Transform your financial services with cutting-edge technology solutions including AI, blockchain, and secure digital platforms."
      keywords="fintech, financial services, banking technology, AI finance, blockchain, digital banking, financial software"
    >
      <Head>
        <title>Financial Services - Zion Tech Group</title>
        <meta name="description" content="Transform your financial services with cutting-edge technology solutions including AI, blockchain, and secure digital platforms." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Financial Services Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Transform your financial institution with cutting-edge technology solutions. 
                Secure, scalable, and innovative platforms for the modern financial world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Get Started
                </Link>
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Financial Technology Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive technology solutions for modern financial institutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Financial Solutions?
              </h2>
              <p className="text-lg text-gray-600">
                Proven results and industry-leading expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600">
                Cutting-edge technologies for modern financial services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 rounded-lg p-4 text-center hover:bg-green-100 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Services?</h2>
            <p className="text-xl mb-8 text-green-100">
              Let's discuss how our technology solutions can help your financial institution thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}