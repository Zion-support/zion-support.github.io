import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIEmotionIntelligencePlatform() {
  return (
    <Layout>
      <Head>
        <title>AI Emotion Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered emotion intelligence platform for emotion recognition, analysis, and emotional AI applications." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-pink-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Emotion Intelligence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                  Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered emotion intelligence platform for emotion recognition, 
                analysis, and emotional AI applications. Transform your understanding of 
                human emotions with intelligent emotion processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
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
                Emotion Intelligence Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered emotion intelligence tools for modern applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Heart className="h-12 w-12 text-rose-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Emotion Recognition</h3>
                <p className="text-gray-300 mb-6">
                  Advanced emotion recognition using AI to analyze facial expressions, 
                  voice tones, and text sentiment for comprehensive emotion understanding.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Facial expression analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Voice tone analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Text sentiment analysis
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-rose-400">
                  Starting at $4,500/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Brain className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Emotion Analysis</h3>
                <p className="text-gray-300 mb-6">
                  Deep emotion analysis using AI to understand emotional patterns, 
                  triggers, and responses for better emotional intelligence.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Trigger identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Response analysis
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-pink-400">
                  Starting at $5,200/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Users className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Emotional AI</h3>
                <p className="text-gray-300 mb-6">
                  Emotional AI applications for creating empathetic and emotionally 
                  intelligent systems that understand and respond to human emotions.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Empathetic systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Emotional responses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Human-AI interaction
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-purple-400">
                  Starting at $6,800/month
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
                Ready to Understand Emotions?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your emotion intelligence needs 
                and get a comprehensive AI solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
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