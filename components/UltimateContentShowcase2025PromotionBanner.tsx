'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 ULTIMATE SHOWCASE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Future of
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Technology Today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Experience our comprehensive suite of AI-powered solutions, quantum computing platforms, 
            and revolutionary business automation tools that are transforming industries worldwide.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
                <Zap className="w-8 h-8 mx-auto text-yellow-300" />
              </div>
              <p className="text-sm font-semibold">300% Efficiency</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
                <TrendingUp className="w-8 h-8 mx-auto text-green-300" />
              </div>
              <p className="text-sm font-semibold">98% Accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
                <Users className="w-8 h-8 mx-auto text-blue-300" />
              </div>
              <p className="text-sm font-semibold">50+ Integrations</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
                <Award className="w-8 h-8 mx-auto text-purple-300" />
              </div>
              <p className="text-sm font-semibold">Award Winning</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Explore Showcase
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75 mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">TechCorp</div>
              <div className="text-2xl font-bold">InnovateLabs</div>
              <div className="text-2xl font-bold">GlobalTech</div>
              <div className="text-2xl font-bold">FutureSystems</div>
              <div className="text-2xl font-bold">QuantumLabs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025PromotionBanner;