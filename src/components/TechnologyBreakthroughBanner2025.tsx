import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Award, Brain, Cpu, Shield } from 'lucide-react';

const TechnologyBreakthroughBanner2025: React.FC = () => {
  return (
    <motion.section 
      className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium">Technology Breakthrough 2025</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Future of Technology is
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Here Today</span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience groundbreaking AI consciousness, quantum neural fusion, and autonomous systems that are revolutionizing industries worldwide. Be part of the technology revolution.
          </motion.p>

          {/* Technology Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* AI Consciousness */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-emerald-400/50 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI systems with advanced consciousness capabilities, autonomous decision-making, and human-like reasoning.
              </p>
              <div className="flex items-center justify-center text-emerald-400">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Quantum Neural Fusion */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-emerald-400/50 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Fusion</h3>
              <p className="text-gray-300 mb-6">
                Breakthrough technology combining quantum computing with neural networks for unprecedented processing power.
              </p>
              <div className="flex items-center justify-center text-emerald-400">
                <span className="mr-2">Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Autonomous Systems */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-emerald-400/50 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-6">
                Self-managing systems that adapt, learn, and optimize operations without human intervention.
              </p>
              <div className="flex items-center justify-center text-emerald-400">
                <span className="mr-2">Discover</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-400">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Future-Ready</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Experience the Future</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologyBreakthroughBanner2025;