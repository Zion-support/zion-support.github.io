import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Target, Award } from 'lucide-react';

const February2026ContentRevolutionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-6"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8"
          >
            <Star className="w-6 h-6 text-yellow-400" />
            <span className="text-purple-300 font-bold text-lg tracking-wider uppercase">
              🚀 February 2026: Revolutionary Content Launch
            </span>
            <Star className="w-6 h-6 text-yellow-400" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
            <br />
            <span className="text-white">Transformation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Discover the latest breakthroughs in AI technology with our revolutionary new content featuring 
            <span className="text-yellow-300 font-semibold"> $2.8B revenue increases</span>, 
            <span className="text-green-300 font-semibold"> 98% automation rates</span>, and 
            <span className="text-purple-300 font-semibold"> Fortune 500 success stories</span>
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {/* Neural Superintelligence */}
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Zap className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Neural Superintelligence</h3>
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Advanced AI systems with 95% efficiency gains, 10x faster decision-making, and autonomous innovation capabilities.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>95% Efficiency Improvement</span>
              </div>
            </div>

            {/* Autonomous Operations */}
            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Target className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Autonomous Operations</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Complete enterprise automation with 98% automation rates, $500M+ cost savings, and self-managing operations.
              </p>
              <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>98% Automation Rate</span>
              </div>
            </div>

            {/* Fortune 500 Success */}
            <div className="bg-gradient-to-br from-indigo-800/50 to-indigo-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl">
                  <Award className="w-8 h-8 text-indigo-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Fortune 500 Success</h3>
              </div>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Real case study: $2.8B revenue increase, 95% operational efficiency, and market leadership achievement.
              </p>
              <div className="flex items-center gap-2 text-indigo-300 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>$2.8B Revenue Increase</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/blog/ai-2026-advanced-neural-superintelligence-breakthrough"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Zap className="w-6 h-6" />
              Explore Neural Superintelligence
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies/fortune-500-ai-transformation-success-story"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Award className="w-6 h-6" />
              Read Success Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">$2.8B</div>
              <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">98%</div>
              <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">95%</div>
              <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-indigo-400 mb-2">10x</div>
              <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Faster Decisions</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </motion.div>
  );
};

export default February2026ContentRevolutionBanner;