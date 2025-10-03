// import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function October2025HyperIntelligentAutomationBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden my-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">🚀 Just Published: October 1, 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
            Hyper-Intelligent Automation Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
            Transform Your Enterprise with AI-Powered Intelligent Automation - $9.7B Success Story
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Cpu className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold">99.7% Accuracy</h3>
            </div>
            <p className="text-purple-100">
              Advanced AI models delivering unprecedented decision-making accuracy across all business operations
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold">3,847% ROI</h3>
            </div>
            <p className="text-purple-100">
              Proven return on investment with $9.7B in enterprise value creation and cost savings
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-xl font-bold">Zero Downtime</h3>
            </div>
            <p className="text-purple-100">
              Self-healing systems with 99.99% uptime and automatic error recovery mechanisms
            </p>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Revolutionary Breakthrough Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">$9.7B</div>
              <div className="text-sm text-purple-200">Enterprise Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">94%</div>
              <div className="text-sm text-blue-200">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">18,500+</div>
              <div className="text-sm text-pink-200">Automated Processes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.99%</div>
              <div className="text-sm text-yellow-200">System Uptime</div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'Self-learning AI that adapts to your business processes',
            'Real-time decision-making with microsecond latency',
            'Enterprise-grade security with zero-trust architecture',
            'Seamless integration with existing systems and workflows',
            'Predictive analytics for proactive problem resolution',
            'Natural language processing for human-like interaction'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-purple-100">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all">
            <span>Explore Hyper-Intelligent Automation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
