import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RevolutionarySuccessStoryBanner() {
  return (
    <motion.div
      initial={{ opacity: 0scale: 0.95 }}
      animate={{ opacity: 1scale: 1 }}
      transition={{ duration: 0.8ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-8 mb-12 border border-emerald-400/30"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating Success Icons */}
      <motion.div
        animate={{ 
          y: [0-10],
          rotate: [050]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-6 right-6 text-4xl"
      >
        🎯
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [010],
          rotate: [0-50]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-6 left-6 text-4xl"
      >
        💰
      </motion.div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              🏆 Revolutionary Success Story
            </h2>
            <p className="text-2xl text-emerald-100 mb-6 max-w-4xl mx-auto">
              How a Fortune 500 Company Achieved $100M ROI in Just 18 Months
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
          >
            <div className="text-6xl mb-4">💰</div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">$100M</div>
            <div className="text-white font-semibold mb-2">Total ROI</div>
            <div className="text-emerald-100 text-sm">18-month transformation period</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
          >
            <div className="text-6xl mb-4">⚡</div>
            <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
            <div className="text-white font-semibold mb-2">Efficiency Gain</div>
            <div className="text-emerald-100 text-sm">Production throughput improvement</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
          >
            <div className="text-6xl mb-4">🎯</div>
            <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Quality Improvement</div>
            <div className="text-emerald-100 text-sm">Defect reduction achieved</div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0scale: 0.9 }}
            animate={{ opacity: 1scale: 1 }}
            transition={{ delay: 1.1duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-xl text-emerald-100 mb-6 max-w-3xl mx-auto">
              Discover the complete transformation journeyimplementation strategiesand lessons learned 
              from this groundbreaking enterprise AI success story.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-100000-roi"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Read Full Case Study
            </Link>
            <Link 
              href="/contact"
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Transformation
            </Link>
          </motion.div>
        </div>
        
        {/* Success Metrics Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5duration: 2.5 }}
          className="mt-8 bg-white/20 rounded-full h-3 overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full"></div>
        </motion.div>
        
        <div className="mt-4 text-center">
          <p className="text-emerald-100 text-sm">
            <span className="font-semibold">Success Metrics:</span> 65% cost reduction • 300% efficiency gain • 95% quality improvement • $100M ROI
          </p>
        </div>
      </div>
    </motion.div>
  );
}
