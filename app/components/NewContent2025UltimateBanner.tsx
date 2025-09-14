'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, TrendingUp, Users, Award } from 'lucide-react';

export default function NewContent2025UltimateBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Discover cutting-edge AI guides, implementation toolkits, and success stories 
            that will transform your business in 2025 and beyond.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-sm opacity-80">New Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50M+</div>
              <div className="text-sm opacity-80">Cost Savings</div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Generative AI Revolution</h3>
              <p className="text-sm opacity-80 mb-4">
                Complete implementation guide for enterprise generative AI transformation
              </p>
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-guide"
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center"
              >
                Read Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quantum Computing Breakthrough</h3>
              <p className="text-sm opacity-80 mb-4">
                Unlock unprecedented business potential with quantum computing
              </p>
              <Link 
                href="/blog/ai-2025-quantum-computing-business-breakthrough"
                className="text-green-400 hover:text-green-300 font-semibold text-sm flex items-center"
              >
                Explore Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Implementation Toolkit</h3>
              <p className="text-sm opacity-80 mb-4">
                Comprehensive toolkit with templates, checklists, and frameworks
              </p>
              <Link 
                href="/resources/ai-2025-enterprise-implementation-toolkit"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center"
              >
                Get Toolkit <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>

          {/* Interactive Assessment CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 mb-8"
          >
            <Award className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Free AI Readiness Assessment</h3>
            <p className="text-lg mb-6 opacity-90">
              Evaluate your organization's AI readiness in just 5 minutes and get personalized recommendations
            </p>
            <Link
              href="/tools/ai-readiness-assessment-2025"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              View Resources
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white border-opacity-20"
          >
            <p className="text-sm opacity-80 mb-4">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">Fortune 500</div>
              <div className="text-lg font-semibold">Startups</div>
              <div className="text-lg font-semibold">Government</div>
              <div className="text-lg font-semibold">Healthcare</div>
              <div className="text-lg font-semibold">Finance</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
    </motion.section>
  );
}