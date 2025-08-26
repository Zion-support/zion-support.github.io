import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Shield, Database, TrendingUp, ArrowRight, Check } from 'lucide-react';

export default function AIBlockchainAnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>AI Blockchain Analytics | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics and insights platform" />
      </Head>
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Blockchain Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI-powered blockchain analytics platform for comprehensive insights and intelligent decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">AI-Powered Insights</h3>
            <p className="text-gray-300 text-center">Advanced machine learning algorithms for blockchain pattern recognition</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Security Analytics</h3>
            <p className="text-gray-300 text-center">Comprehensive security monitoring and threat detection</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Real-time Data</h3>
            <p className="text-gray-300 text-center">Live blockchain data processing and analytics</p>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold"
          >
            Get Started <ArrowRight className="w-5 h-5 ml-2 inline" />
          </motion.button>
        </div>
      </main>
    </div>
  );
}