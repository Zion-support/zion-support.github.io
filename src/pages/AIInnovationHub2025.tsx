import React from 'react';
import { motion } from 'framer-motion';

const AIInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-purple">
            AI Innovation Hub 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the latest breakthroughs in artificial intelligence and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              Advanced ML algorithms and models for predictive analytics and automation.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Deep Learning Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">AI Automation</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation solutions that streamline business processes.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Process Automation</li>
              <li>• Intelligent Workflows</li>
              <li>• Smart Decision Making</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">AI Analytics</h3>
            <p className="text-gray-300 mb-4">
              Data-driven insights and predictive analytics powered by AI.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Predictive Modeling</li>
              <li>• Real-time Analytics</li>
              <li>• Business Intelligence</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            Explore AI Solutions
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025;