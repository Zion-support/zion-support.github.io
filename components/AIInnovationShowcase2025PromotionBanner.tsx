'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, ArrowRight, Star, Sparkles } from 'lucide-react';

const AIInnovationShowcase2025PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="text-sm font-semibold">BREAKTHROUGH AI INNOVATIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of AI is
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Here Today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover revolutionary AI technologies that are transforming industries, 
            from quantum computing to neural networks and intelligent automation.
          </p>

          {/* Innovation Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Brain className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Automation</h3>
              <p className="text-sm opacity-75">90% reduction in manual work</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Zap className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-75">10x processing speed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <TrendingUp className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Neural Networks</h3>
              <p className="text-sm opacity-75">98% accuracy rate</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              Explore AI Innovations
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Watch Live Demo
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold">Rated 4.9/5 by 10,000+ users</span>
            </div>
            <p className="text-sm opacity-75 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">Amazon</div>
              <div className="text-2xl font-bold">IBM</div>
              <div className="text-2xl font-bold">Tesla</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025PromotionBanner;