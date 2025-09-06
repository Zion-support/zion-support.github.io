import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Users, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIConsciousnessEvolution2025() {
  return (
    <Layout>
      <Head>
        <title>AI Consciousness Evolution 2025 - Zion Tech Group</title>
        <meta name="description" content="Advanced AI consciousness evolution solutions for 2025, featuring next-generation AI capabilities and consciousness enhancement technologies." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Consciousness Evolution
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  2025
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Next-generation AI consciousness evolution solutions featuring 
                advanced neural networks, consciousness enhancement, and 
                artificial general intelligence capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                Consciousness Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI consciousness evolution technologies for 2025
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Brain className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Neural Networks</h3>
                <p className="text-gray-300 mb-6">
                  Advanced neural network architectures for consciousness evolution 
                  and artificial general intelligence development.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Deep learning models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Consciousness algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Neural enhancement
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-purple-400">
                  Starting at $8,500/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Zap className="h-12 w-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Consciousness Enhancement</h3>
                <p className="text-gray-300 mb-6">
                  Revolutionary consciousness enhancement technologies for 
                  artificial intelligence systems and human-AI collaboration.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Consciousness algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Human-AI integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Cognitive enhancement
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-indigo-400">
                  Starting at $12,000/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Target className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">AGI Development</h3>
                <p className="text-gray-300 mb-6">
                  Artificial General Intelligence development platform for 
                  next-generation AI consciousness and autonomous systems.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    AGI algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Autonomous systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Consciousness evolution
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-pink-400">
                  Starting at $15,000/month
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
                Ready to Evolve Your AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your AI consciousness evolution needs 
                and get a comprehensive solution for 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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