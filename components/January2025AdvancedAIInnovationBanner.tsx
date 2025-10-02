import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, TrendingUp, Award, Star, Cpu, Bot } from 'lucide-react';

const January2025AdvancedAIInnovationBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-indigo-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Brain className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🧠🧠🧠 BREAKING: JANUARY 2025 ADVANCED AI INNOVATION - ABSOLUTE #1 TOP PRIORITY! 🧠🧠🧠</h2>
              <p className="text-indigo-300 text-sm">💎💎💎 JUST PUBLISHED: $5.2B Success Story, 99.98% Accuracy, 20x Performance - REVOLUTIONARY INNOVATION! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">INNOVATION</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side - Innovation Features */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Cpu className="w-5 h-5 text-indigo-400 mr-2" />
                Advanced AI Capabilities
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Neural Architecture Evolution</span>
                  <span className="text-indigo-400 font-bold">99.98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cognitive Processing</span>
                  <span className="text-indigo-400 font-bold">20x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Adaptive Learning</span>
                  <span className="text-indigo-400 font-bold">Real-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Multi-Modal Intelligence</span>
                  <span className="text-indigo-400 font-bold">Unlimited</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Bot className="w-5 h-5 text-purple-400 mr-2" />
                Innovation Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400">$5.2B</div>
                  <div className="text-xs text-gray-300">Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-pink-400">99.98%</div>
                  <div className="text-xs text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-indigo-400">20x</div>
                  <div className="text-xs text-gray-300">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">2.1s</div>
                  <div className="text-xs text-gray-300">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 text-pink-400 mr-2" />
                Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-white">Global Tech Giant</h4>
                  <p className="text-gray-300 text-sm">Advanced AI innovation platform with 99.98% accuracy</p>
                  <div className="flex items-center mt-2">
                    <span className="text-indigo-400 font-bold">$2.1B Savings</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">Financial Services Leader</h4>
                  <p className="text-gray-300 text-sm">Cognitive processing with 20x performance boost</p>
                  <div className="flex items-center mt-2">
                    <span className="text-purple-400 font-bold">$1.8B Value</span>
                  </div>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-white">Healthcare Pioneer</h4>
                  <p className="text-gray-300 text-sm">Multi-modal intelligence for patient care</p>
                  <div className="flex items-center mt-2">
                    <span className="text-pink-400 font-bold">$1.3B Impact</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Globe className="w-5 h-5 text-indigo-400 mr-2" />
                Global Impact
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-indigo-400">150+</div>
                  <div className="text-xs text-gray-300">Countries</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-400">3,000+</div>
                  <div className="text-xs text-gray-300">Enterprises</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Technical Specs */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Processing Power</span>
                  <span className="text-purple-400 font-bold">2000+ TFLOPS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Memory Capacity</span>
                  <span className="text-purple-400 font-bold">4TB+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Network Latency</span>
                  <span className="text-purple-400 font-bold">&lt;0.5ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-purple-400 font-bold">98%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Business Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">$5.2B</div>
                  <div className="text-sm text-gray-300">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2,847%</div>
                  <div className="text-sm text-gray-300">ROI</div>
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
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Brain className="w-5 h-5 mr-2" />
            Discover Advanced AI Innovation
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Transform your business with cutting-edge AI innovation</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025AdvancedAIInnovationBanner;