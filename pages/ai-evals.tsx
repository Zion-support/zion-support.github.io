import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Gauge, Check, Phone, Mail, MapPin, Rocket, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIEvals() {
  return (
    <Layout>
      <Head>
        <title>AI Evaluations - Zion Tech Group</title>
        <meta name="description" content="Advanced AI evaluation and testing services for AI model performance, accuracy, and reliability assessment." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Evaluations
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  & Testing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI evaluation and testing services for AI model performance, 
                accuracy, and reliability assessment. Ensure your AI systems meet 
                the highest standards with comprehensive evaluation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Evaluation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI evaluation and testing tools for modern AI systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Gauge className="h-12 w-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Performance Testing</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive AI model performance testing including accuracy, 
                  speed, and reliability assessment for optimal performance.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Accuracy testing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Speed optimization
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Reliability assessment
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-cyan-400">
                  Starting at $3,500/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Rocket className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Model Validation</h3>
                <p className="text-gray-300 mb-6">
                  AI model validation and testing for ensuring models meet 
                  requirements and perform as expected in real-world scenarios.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Model validation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Real-world testing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Requirement verification
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-blue-400">
                  Starting at $4,200/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Check className="h-12 w-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
                <p className="text-gray-300 mb-6">
                  AI quality assurance and testing for ensuring AI systems 
                  meet quality standards and perform reliably.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Quality standards
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Reliability testing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Compliance verification
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-green-400">
                  Starting at $5,000/month
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Evaluate Your AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your AI evaluation needs 
                and get a comprehensive testing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}