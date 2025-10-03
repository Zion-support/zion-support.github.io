// import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Award, Zap, Globe, Target, Brain, Cpu, Bot } from 'lucide-react';

const January2025NewContentAdvertisingMegaBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 border border-orange-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Star className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🎉🎉🎉 BREAKING: JANUARY 2025 NEW CONTENT REVOLUTION - ABSOLUTE #1 TOP PRIORITY! 🎉🎉🎉</h2>
              <p className="text-orange-300 text-sm">💎💎💎 JUST PUBLISHED: $7.2B Combined Value, 99.9% Success Rate, Revolutionary AI Breakthroughs! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">MEGA LAUNCH</span>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Next-Gen AI */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Next-Gen AI</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Neural Architecture</span>
                <span className="text-orange-400 font-bold text-sm">99.97%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Performance Boost</span>
                <span className="text-orange-400 font-bold text-sm">15x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value Created</span>
                <span className="text-orange-400 font-bold text-sm">$2.8B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-orange-400 font-bold">BREAKTHROUGH</span>
            </div>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Quantum Computing</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Processing Speed</span>
                <span className="text-red-400 font-bold text-sm">10,000x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Accuracy Rate</span>
                <span className="text-red-400 font-bold text-sm">99.99%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value Created</span>
                <span className="text-red-400 font-bold text-sm">$3.2B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-red-400 font-bold">REVOLUTIONARY</span>
            </div>
          </motion.div>

          {/* Autonomous Systems */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Bot className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Autonomous Systems</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Autonomy Level</span>
                <span className="text-pink-400 font-bold text-sm">99.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Productivity Gain</span>
                <span className="text-pink-400 font-bold text-sm">25x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value Created</span>
                <span className="text-pink-400 font-bold text-sm">$4.7B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-pink-400 font-bold">TRANSFORMATIVE</span>
            </div>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">$7.2B</div>
            <div className="text-sm text-gray-300">Total Value Created</div>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-orange-600/20 rounded-xl p-6 border border-pink-500/30 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">2,847</div>
            <div className="text-sm text-gray-300">Enterprises Served</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/20 to-pink-600/20 rounded-xl p-6 border border-orange-500/30 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1,247%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
        </div>

        {/* Global Impact */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Globe className="w-6 h-6 text-orange-400 mr-2" />
            Global Impact & Reach
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">127 Countries</div>
              <div className="text-sm text-gray-300">Global Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">50M+ Users</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-2">24/7 Support</div>
              <div className="text-sm text-gray-300">Continuous Service</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto mb-4"
          >
            <Star className="w-5 h-5 mr-2" />
            Explore All New Content
          </motion.button>
          <p className="text-gray-400 text-sm">Join thousands of enterprises transforming with our revolutionary AI solutions</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025NewContentAdvertisingMegaBanner;