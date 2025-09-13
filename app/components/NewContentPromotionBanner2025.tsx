import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Star, TrendingUp } from 'lucide-react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-8 right-16 w-2 h-2 bg-white/35 rounded-full animate-ping delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase">NEW 2025 CONTENT</span>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Revolutionary AI Breakthroughs
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto">
              Discover the latest AI innovations that are transforming industries and delivering unprecedented ROI
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span className="text-2xl font-bold text-green-300">10,000%+</span>
              </div>
              <p className="text-cyan-100">Average ROI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold text-yellow-300">99.9%</span>
              </div>
              <p className="text-cyan-100">Accuracy Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-purple-300" />
                <span className="text-2xl font-bold text-purple-300">500+</span>
              </div>
              <p className="text-cyan-100">Enterprise Clients</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/ai-2025-ultimate-breakthrough"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore New Content
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started Today
            </motion.a>
          </motion.div>

          {/* Featured Content Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Quantum AI Fusion</h3>
              <p className="text-cyan-100 text-sm mb-4">Next-generation quantum computing meets AI for unprecedented processing power</p>
              <a href="/quantum-ai-fusion-2029" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                Learn More →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Neural Interface Revolution</h3>
              <p className="text-cyan-100 text-sm mb-4">Direct brain-computer interfaces transforming human capabilities</p>
              <a href="/neural-interface-revolution-2026" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                Learn More →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Autonomous Operations</h3>
              <p className="text-cyan-100 text-sm mb-4">Fully automated business systems with AI consciousness</p>
              <a href="/autonomous-operations-2025" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                Learn More →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;