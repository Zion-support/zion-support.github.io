// import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, TrendingUp, Award, Star } from 'lucide-react';

const January2025NextGenAIBreakthroughBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border border-purple-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🚀🚀🚀 BREAKING: JANUARY 2025 NEXT-GEN AI BREAKTHROUGH - ABSOLUTE #1 TOP PRIORITY! 🚀🚀🚀</h2>
              <p className="text-purple-300 text-sm">💎💎💎 JUST PUBLISHED: $2.8B Success Story, 99.97% Accuracy, 15x Performance Boost - REVOLUTIONARY BREAKTHROUGH! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">NEW</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Key Features */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Revolutionary AI Innovations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Neural Architecture Optimization</span>
                  <span className="text-green-400 font-bold">99.97% Accuracy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum-Classical Hybrid Processing</span>
                  <span className="text-green-400 font-bold">15x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Autonomous Decision Making</span>
                  <span className="text-green-400 font-bold">Real-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Edge-to-Cloud Intelligence</span>
                  <span className="text-green-400 font-bold">Sub-millisecond</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                Proven Business Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$2.8B</div>
                  <div className="text-sm text-gray-300">Total Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">847%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2.4M</div>
                  <div className="text-sm text-gray-300">Processes Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">99.97%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 text-indigo-400 mr-2" />
                Fortune 500 Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Global Manufacturing Giant</h4>
                  <p className="text-gray-300 text-sm">$847M savings through autonomous supply chain optimization</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-400 font-bold">94% Cost Reduction</span>
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white">Financial Services Leader</h4>
                  <p className="text-gray-300 text-sm">Real-time fraud detection with 99.97% accuracy</p>
                  <div className="flex items-center mt-2">
                    <span className="text-blue-400 font-bold">$1.2B Risk Mitigation</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">Healthcare Innovation Pioneer</h4>
                  <p className="text-gray-300 text-sm">AI-powered drug discovery acceleration</p>
                  <div className="flex items-center mt-2">
                    <span className="text-purple-400 font-bold">75% Faster R&D</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Globe className="w-5 h-5 text-purple-400 mr-2" />
                Global Impact Metrics
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-purple-400">150+</div>
                  <div className="text-xs text-gray-300">Countries</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">2,500+</div>
                  <div className="text-xs text-gray-300">Enterprises</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-400">50M+</div>
                  <div className="text-xs text-gray-300">Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Brain className="w-5 h-5 mr-2" />
            Discover Next-Gen AI Solutions
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Join 2,500+ enterprises transforming with AI</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025NextGenAIBreakthroughBanner;