// import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, Globe, TrendingUp, Award, Cpu, Brain, Rocket, Shield } from 'lucide-react';

const January2025UltimateTechShowcaseBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-fuchsia-900 to-purple-900 border border-violet-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <Rocket className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🌟🌟🌟 BREAKING: JANUARY 2025 ULTIMATE TECH SHOWCASE - ABSOLUTE #1 TOP PRIORITY! 🌟🌟🌟</h2>
              <p className="text-violet-300 text-sm">💎💎💎 JUST PUBLISHED: $12.5B Success Story, 99.9999% Accuracy, 200x Performance - ULTIMATE SHOWCASE! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">ULTIMATE</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Ultimate Tech Pillars */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-violet-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Ultimate AI</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Accuracy</span>
                <span className="text-violet-400 font-bold text-sm">99.9999%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Performance</span>
                <span className="text-violet-400 font-bold text-sm">200x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value</span>
                <span className="text-violet-400 font-bold text-sm">$3.2B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-violet-400 font-bold">ULTIMATE</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-fuchsia-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Quantum Tech</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Processing</span>
                <span className="text-fuchsia-400 font-bold text-sm">Quantum</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Speed</span>
                <span className="text-fuchsia-400 font-bold text-sm">10,000x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value</span>
                <span className="text-fuchsia-400 font-bold text-sm">$3.5B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-fuchsia-400 font-bold">QUANTUM</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Autonomous</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Autonomy</span>
                <span className="text-purple-400 font-bold text-sm">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Efficiency</span>
                <span className="text-purple-400 font-bold text-sm">99.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value</span>
                <span className="text-purple-400 font-bold text-sm">$3.8B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-purple-400 font-bold">AUTONOMOUS</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-lg font-bold text-white">Future Tech</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Innovation</span>
                <span className="text-pink-400 font-bold text-sm">Leading</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Scale</span>
                <span className="text-pink-400 font-bold text-sm">Global</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Value</span>
                <span className="text-pink-400 font-bold text-sm">$2.0B</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-pink-400 font-bold">FUTURE</span>
            </div>
          </motion.div>
        </div>

        {/* Success Metrics Dashboard */}
        <div className="grid md:grid-cols-5 gap-4 mt-8">
          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-xl p-4 border border-violet-500/30 text-center">
            <div className="text-3xl font-bold text-violet-400 mb-2">$12.5B</div>
            <div className="text-sm text-gray-300">Total Value</div>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 rounded-xl p-4 border border-fuchsia-500/30 text-center">
            <div className="text-3xl font-bold text-fuchsia-400 mb-2">99.9999%</div>
            <div className="text-sm text-gray-300">Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">200x</div>
            <div className="text-sm text-gray-300">Performance</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-violet-600/20 rounded-xl p-4 border border-pink-500/30 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">10,000+</div>
            <div className="text-sm text-gray-300">Enterprises</div>
          </div>
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-xl p-4 border border-violet-500/30 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">5,800%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Award className="w-6 h-6 text-violet-400 mr-2" />
            Ultimate Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold text-white mb-2">Fortune 10 Global Leader</h4>
              <p className="text-gray-300 text-sm mb-2">Ultimate AI platform achieving unprecedented 99.9999% accuracy</p>
              <div className="flex items-center justify-between">
                <span className="text-violet-400 font-bold">$4.2B Value</span>
                <span className="text-green-400 font-bold">200x ROI</span>
              </div>
            </div>
            <div className="border-l-4 border-fuchsia-500 pl-4">
              <h4 className="font-semibold text-white mb-2">Tech Unicorn Pioneer</h4>
              <p className="text-gray-300 text-sm mb-2">Quantum-powered autonomous systems with 100% efficiency</p>
              <div className="flex items-center justify-between">
                <span className="text-fuchsia-400 font-bold">$4.1B Impact</span>
                <span className="text-green-400 font-bold">180x ROI</span>
              </div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-white mb-2">Healthcare Revolution</h4>
              <p className="text-gray-300 text-sm mb-2">Ultimate tech showcase transforming patient outcomes</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-bold">$4.2B Value</span>
                <span className="text-green-400 font-bold">220x ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact */}
        <div className="mt-8 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-xl p-6 border border-violet-500/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Globe className="w-6 h-6 text-violet-400 mr-2" />
            Global Ultimate Tech Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-violet-400 mb-2">250+</div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fuchsia-400 mb-2">10,000+</div>
              <div className="text-sm text-gray-300">Enterprises</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100M+</div>
              <div className="text-sm text-gray-300">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Experience Ultimate Tech Showcase
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Join 10,000+ enterprises transforming with ultimate technology</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025UltimateTechShowcaseBanner;