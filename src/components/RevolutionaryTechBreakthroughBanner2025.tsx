import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Cpu, 
  Rocket,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const RevolutionaryTechBreakthroughBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 rounded-3xl p-8 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-4 left-4 animate-bounce">
        <Brain className="w-8 h-8 text-purple-400" />
      </div>
      <div className="absolute top-8 right-8 animate-pulse">
        <Zap className="w-6 h-6 text-pink-400" />
      </div>
      <div className="absolute bottom-4 left-8 animate-bounce delay-1000">
        <Cpu className="w-7 h-7 text-cyan-400" />
      </div>
      <div className="absolute bottom-6 right-4 animate-pulse delay-500">
        <Rocket className="w-6 h-6 text-yellow-400" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>🚀 REVOLUTIONARY BREAKTHROUGH 2025</span>
            <Star className="w-4 h-4" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Experience the
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future of Technology
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover revolutionary AI consciousness, quantum computing breakthroughs, 
            neural interfaces, and autonomous systems that are reshaping our world.
          </motion.p>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AI Consciousness</h3>
            <p className="text-gray-300">Self-aware AI systems with emotional intelligence</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Quantum Power</h3>
            <p className="text-gray-300">1000x faster processing with quantum computing</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Neural Interfaces</h3>
            <p className="text-gray-300">Direct brain-computer integration technology</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/pages/RevolutionaryTechBreakthrough2025"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Explore Breakthroughs</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a
            href="/pages/AdvancedAITransformation2025"
            className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
          >
            <TrendingUp className="w-5 h-5" />
            <span>View Success Stories</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="text-white">
            <div className="text-3xl font-bold text-purple-400">500+</div>
            <div className="text-sm text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-pink-400">99.9%</div>
            <div className="text-sm text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-cyan-400">10x</div>
            <div className="text-sm text-gray-300">ROI Improvement</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-sm text-gray-300">AI Support</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthroughBanner2025;