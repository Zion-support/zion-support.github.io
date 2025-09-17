import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Atom, TrendingUp, Eye, Sparkles } from 'lucide-react';
const UltimateTechAdvertisingBanner2025: React.FC = () => {
  const highlights = [
    { icon: Brain, text: "AI Revolution", color: "text-blue-400" },
    { icon: Atom, text: "Quantum Computing", color: "text-cyan-400" },
    { icon: Zap, text: "Neural Interfaces", color: "text-purple-400" }
  ];
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-purple-900/30"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-500/20 rounded-full blur-xl"
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Ultimate Tech Breakthrough 2025</span>
          </motion.div>
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Technology
            <br />
            <span className="text-yellow-400">Breakthrough 2025</span>
          </motion.h2>
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the most significant technological breakthroughs in human history. 
            Three revolutionary technologies that are reshaping our world and defining the future.
          </motion.p>
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3"
              >
                <highlight.icon className={`w-5 h-5 mr-2 ${highlight.color}`} />
                <span className="text-white font-medium">{highlight.text}</span>
              </motion.div>
            ))}
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl"
            >
              <Star className="mr-2 w-5 h-5" />
              Explore All Breakthroughs
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <Eye className="mr-2 w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1000x</div>
              <div className="text-gray-300">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">10M+</div>
              <div className="text-gray-300">Early Adopters</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

export default UltimateTechAdvertisingBanner2025;