'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Brain, Cpu, ArrowRight, Star, Sparkles } from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M50 50c0-27.614 22.386-50 50-50v50H50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="text-sm font-semibold">INTERACTIVE LIVE DEMO</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience Technology
            <span className="block bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
              In Real-Time
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Watch our AI automation, quantum computing, and neural networks in action. 
            Interactive demonstrations that show you exactly how our technologies work.
          </p>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Play className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Live Demos</h3>
              <p className="text-sm opacity-75">Real-time technology demonstrations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Brain className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">AI Automation</h3>
              <p className="text-sm opacity-75">Watch AI optimize processes live</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Cpu className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-75">Experience quantum processing power</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Neural Networks</h3>
              <p className="text-sm opacity-75">See AI learning in real-time</p>
            </motion.div>
          </div>

          {/* Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10"
          >
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-2">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold">Click to Play</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold">AI Processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold">Live Results</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              Start Interactive Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Watch All Demos
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold">Over 50,000 interactive demos completed</span>
            </div>
            <p className="text-sm opacity-75 mb-4">Join thousands of users exploring our technology</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Tech Leaders</div>
              <div className="text-2xl font-bold">Innovation Teams</div>
              <div className="text-2xl font-bold">Enterprise Clients</div>
              <div className="text-2xl font-bold">Startups</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025PromotionBanner;