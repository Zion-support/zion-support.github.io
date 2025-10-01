import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

export default function October2025AutonomousSecurityOrchestrationBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden my-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">🛡️ Just Published: October 1, 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-200 via-orange-200 to-amber-200 bg-clip-text text-transparent">
            Autonomous Security Orchestration Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-8">
            Zero-Trust AI Security That Never Sleeps - $24.7B in Threats Prevented, 99.97% Detection Rate
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <Shield className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="text-xl font-bold">99.97% Threat Detection</h3>
            </div>
            <p className="text-red-100">
              AI-powered threat detection with microsecond response time across all attack vectors
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Lock className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="text-xl font-bold">$24.7B Protected</h3>
            </div>
            <p className="text-red-100">
              Proven track record of preventing cyber attacks and protecting enterprise assets
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold">Autonomous Response</h3>
            </div>
            <p className="text-red-100">
              Self-healing security that automatically adapts and responds to emerging threats
            </p>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Unmatched Security Performance</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-300 mb-2">$24.7B</div>
              <div className="text-sm text-red-200">Assets Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">99.97%</div>
              <div className="text-sm text-orange-200">Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">&lt;10μs</div>
              <div className="text-sm text-amber-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Zero</div>
              <div className="text-sm text-yellow-200">Successful Breaches</div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'AI-powered zero-trust architecture with continuous verification',
            'Real-time threat intelligence from global security networks',
            'Automated incident response with self-healing capabilities',
            'Quantum-resistant encryption for future-proof security',
            'Behavioral analytics to detect insider threats',
            'Compliance automation across all major frameworks'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-red-100">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all">
            <span>Explore Autonomous Security Orchestration</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
