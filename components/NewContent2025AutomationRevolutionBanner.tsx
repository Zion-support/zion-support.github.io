<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewContent2025AutomationRevolutionBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            AI 2025 Automation Revolution
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Discover the complete guide to enterprise automation transformation. 
            Learn how leading companies achieve 1200% ROI with AI-powered solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <span className="text-white font-bold text-sm">NEW</span>
              </div>
              <span className="text-blue-300 text-sm font-medium">Complete Guide</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">
              AI 2025 Enterprise Automation Revolution
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Comprehensive implementation guide covering everything from strategy to execution. 
              Learn how to achieve 300-500% ROI with proven automation frameworks.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">Implementation Guide</span>
              <span className="bg-purple-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">ROI Strategies</span>
              <span className="bg-green-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">Best Practices</span>
            </div>
            
            <Link
              href="/blog/ai-2025-enterprise-automation-revolution-complete-guide"
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Complete Guide
              <span className="ml-2">→</span>
            </Link>
          </motion.div>

          {/* Case Study Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
          >
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 rounded-full p-2 mr-3">
                <span className="text-white font-bold text-sm">1200%</span>
              </div>
              <span className="text-yellow-300 text-sm font-medium">Success Story</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">
              Global Manufacturing Giant Success
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fortune 500 manufacturing company achieves 1200% ROI and $2.4B in value creation 
              through strategic AI automation implementation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">$2.4B</div>
                <div className="text-sm text-gray-300">Value Created</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400">78%</div>
                <div className="text-sm text-gray-300">Efficiency Gain</div>
              </div>
            </div>
            
            <Link
              href="/case-studies/ai-2025-global-manufacturing-automation-1200-roi-success-story"
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B+</div>
            <div className="text-gray-300 text-sm">Business Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
            <div className="text-gray-300 text-sm">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-automation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore AI Automation Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Get Implementation Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContent2025AutomationRevolutionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
