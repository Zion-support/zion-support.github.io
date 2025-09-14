'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Target, Rocket, Shield, Globe, TrendingUp } from 'lucide-react';

export default function RevolutionaryAI2026ContentBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Revolutionary Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-8 py-3 mb-8"
          >
            <Rocket className="w-6 h-6 mr-3" />
            <span className="text-lg font-bold">🚀 REVOLUTIONARY AI 2026</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            The Future of AI is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
              Here Today
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Experience the next generation of AI content that will revolutionize 
            how you think about artificial intelligence and business transformation.
          </motion.p>

          {/* Revolutionary Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <Brain className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Neural Breakthrough</h3>
              <p className="text-sm opacity-80">Advanced neural architectures that think like humans</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quantum AI</h3>
              <p className="text-sm opacity-80">Quantum-enhanced AI processing for unprecedented speed</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-80">Self-managing AI systems that evolve independently</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ethical AI</h3>
              <p className="text-sm opacity-80">Responsible AI development with built-in ethics</p>
            </div>
          </motion.div>

          {/* Featured Content Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white border-opacity-30"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Revolutionary Content</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-pink-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Global AI Transformation</h3>
                    <p className="text-sm opacity-80">Worldwide AI adoption strategies</p>
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Comprehensive guide to implementing AI across global organizations with cultural considerations and regulatory compliance.
                </p>
                <Link 
                  href="/blog/ai-2026-global-transformation-guide"
                  className="text-pink-400 hover:text-pink-300 font-semibold text-sm flex items-center"
                >
                  Explore Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">AI ROI Mastery</h3>
                    <p className="text-sm opacity-80">Maximize returns on AI investments</p>
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Proven strategies to achieve 500%+ ROI on AI implementations with real-world case studies and frameworks.
                </p>
                <Link 
                  href="/resources/ai-roi-mastery-2026"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center"
                >
                  Get Framework <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-blue-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Future-Ready AI</h3>
                    <p className="text-sm opacity-80">Preparing for AI's next evolution</p>
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Strategic roadmap for building AI systems that will remain competitive through 2030 and beyond.
                </p>
                <Link 
                  href="/blog/ai-2030-future-ready-strategy"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center"
                >
                  View Roadmap <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Innovation Lab</h3>
              <p className="text-lg mb-6 opacity-90">
                Access our cutting-edge AI research and development insights
              </p>
              <Link
                href="/innovation-lab"
                className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Enter Lab <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Community</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of AI leaders and innovators worldwide
              </p>
              <Link
                href="/community"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Community <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Ready to Experience the AI Revolution?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join the future of AI today and transform your business tomorrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Explore Revolutionary Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-lg"
              >
                Get Expert Consultation
              </Link>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white border-opacity-20"
          >
            <p className="text-lg opacity-80 mb-6">Trusted by AI pioneers and industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-2xl font-bold">OpenAI</div>
              <div className="text-2xl font-bold">Google AI</div>
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">NVIDIA</div>
              <div className="text-2xl font-bold">Tesla</div>
              <div className="text-2xl font-bold">Meta</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }} />
    </motion.section>
  );
}