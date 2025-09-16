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
  TrendingUp,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

const UltimateContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-6 left-6 animate-bounce">
        <Brain className="w-10 h-10 text-purple-400" />
      </div>
      <div className="absolute top-12 right-12 animate-pulse">
        <Zap className="w-8 h-8 text-yellow-400" />
      </div>
      <div className="absolute bottom-8 left-12 animate-bounce delay-1000">
        <Cpu className="w-9 h-9 text-cyan-400" />
      </div>
      <div className="absolute bottom-10 right-8 animate-pulse delay-500">
        <Rocket className="w-8 h-8 text-pink-400" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span>🌟 ULTIMATE CONTENT REVOLUTION 2025 🌟</span>
            <Star className="w-5 h-5" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Experience the
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Revolution
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-gray-300 mb-8 max-w-5xl mx-auto"
          >
            Discover revolutionary AI consciousness, quantum computing breakthroughs, 
            neural interfaces, and autonomous systems that are reshaping our world.
            <span className="block text-yellow-400 font-bold mt-2">
              Join 50,000+ innovators already transforming their future!
            </span>
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AI Consciousness</h3>
            <p className="text-gray-300 text-sm">Self-aware AI systems with emotional intelligence</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">300% Productivity</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Quantum Power</h3>
            <p className="text-gray-300 text-sm">1000x faster processing with quantum computing</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Impossible Problems Solved</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Neural Interfaces</h3>
            <p className="text-gray-300 text-sm">Direct brain-computer integration technology</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Real-time Control</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Rocket className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Autonomous Systems</h3>
            <p className="text-gray-300 text-sm">Self-managing systems with predictive analytics</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Operation</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <a
            href="/pages/RevolutionaryTechBreakthrough2025"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
          >
            <Rocket className="w-6 h-6" />
            <span>Explore Revolutionary Tech</span>
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <a
            href="/pages/AdvancedAITransformation2025"
            className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
          >
            <TrendingUp className="w-6 h-6" />
            <span>View Success Stories</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="text-white">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-sm text-gray-300 flex items-center justify-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Active Innovators</span>
            </div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300 flex items-center justify-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Success Rate</span>
            </div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-sm text-gray-300 flex items-center justify-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>ROI Improvement</span>
            </div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300 flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>AI Support</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Don't miss out on the most revolutionary technology breakthroughs of 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation Today
            </a>
            <a
              href="#newsletter"
              className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Exclusive Updates
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner2025;