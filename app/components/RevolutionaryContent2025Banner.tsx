'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, TrendingUp, Sparkles } from 'lucide-react'

export default function RevolutionaryContent2025Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 rounded-2xl p-8 md:p-12 text-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
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
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover groundbreaking insights into Neural Interfaces, Quantum AI Superintelligence, 
            and Autonomous Business Operations that are reshaping the future of technology.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {/* Neural Interface Content */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold">Neural Interfaces</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Explore the revolutionary neural interface technologies bridging mind and machine in 2025.
            </p>
            <div className="flex items-center text-cyan-400 text-sm font-medium">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>

          {/* Quantum AI Content */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Quantum AI</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Discover how quantum computing and AI are converging to create superintelligent systems.
            </p>
            <div className="flex items-center text-purple-400 text-sm font-medium">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>

          {/* Autonomous Operations Content */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold">Autonomous Operations</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Learn how to implement AI-powered autonomous business operations for 300% productivity gains.
            </p>
            <div className="flex items-center text-pink-400 text-sm font-medium">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </motion.div>

        {/* Success Story Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400">$50 Billion Success Story</h3>
              <p className="text-green-100">Global AI Transformation Case Study</p>
            </div>
          </div>
          <p className="text-lg text-green-100 mb-4">
            Discover how a Fortune 500 company achieved unprecedented success through comprehensive AI transformation, 
            creating over $50 billion in value with 300% productivity increases and 60% cost reductions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$50B+</div>
              <div className="text-sm text-green-200">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">300%</div>
              <div className="text-sm text-green-200">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">60%</div>
              <div className="text-sm text-green-200">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">95%</div>
              <div className="text-sm text-green-200">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Explore All New Content</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <p className="text-blue-200 text-sm mt-4">
            Join thousands of businesses already transforming with our revolutionary AI solutions
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}