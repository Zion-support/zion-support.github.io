import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Target, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function October2025PredictiveAnalyticsRevolutionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden my-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">📊 Just Published: October 1, 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Next-Gen Predictive Analytics Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-8">
            Forecast the Future with Quantum-Enhanced Predictive Intelligence - $18.4B Success Story with 97.8% Accuracy
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <Brain className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold">97.8% Forecast Accuracy</h3>
            </div>
            <p className="text-cyan-100">
              Quantum-enhanced algorithms delivering unprecedented accuracy in business forecasting and trend prediction
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <LineChart className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold">5,247% ROI</h3>
            </div>
            <p className="text-cyan-100">
              Extraordinary return on investment with $18.4B in value creation through predictive insights
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl">
                <Target className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold">Real-Time Insights</h3>
            </div>
            <p className="text-cyan-100">
              Sub-second prediction updates with continuous learning from streaming data sources
            </p>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Breakthrough Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">$18.4B</div>
              <div className="text-sm text-cyan-200">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">97.8%</div>
              <div className="text-sm text-blue-200">Forecast Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-300 mb-2">&lt;100ms</div>
              <div className="text-sm text-indigo-200">Prediction Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-sm text-purple-200">Continuous Learning</div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'Multi-dimensional trend analysis across all business metrics',
            'Quantum-enhanced pattern recognition for complex scenarios',
            'Automated anomaly detection with 99.9% precision',
            'Scenario modeling with millions of simulations per second',
            'Integration with existing BI and analytics platforms',
            'Natural language query interface for business users'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-cyan-100">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all">
            <span>Explore Predictive Analytics Revolution</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
