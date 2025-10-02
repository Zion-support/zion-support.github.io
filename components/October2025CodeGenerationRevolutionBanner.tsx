import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function October2025CodeGenerationRevolutionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950 rounded-2xl shadow-2xl mb-12 border border-purple-500/20"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Icon section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50"
              />
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-2xl">
                <Code2 className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                🚀 October 2025 Breakthrough
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Next-Gen AI Code Generation Revolution
            </h2>

            <p className="text-purple-100 text-lg mb-6 leading-relaxed max-w-4xl">
              Discover how AI code generation is transforming software development in October 2025 
              with <span className="font-bold text-white">94% accuracy</span>, <span className="font-bold text-white">10x productivity gains</span>, 
              and <span className="font-bold text-white">$4.2M average savings</span> per development team annually.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-2xl font-bold text-white mb-1">94%</div>
                <div className="text-purple-200 text-sm">Code Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20">
                <div className="text-2xl font-bold text-white mb-1">10x</div>
                <div className="text-blue-200 text-sm">Productivity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
                <div className="text-2xl font-bold text-white mb-1">87%</div>
                <div className="text-green-200 text-sm">Faster Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/20">
                <div className="text-2xl font-bold text-white mb-1">$4.2M</div>
                <div className="text-yellow-200 text-sm">Annual Savings</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blog/ai-2025-oct-next-gen-code-generation-revolution"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Read Full Article
                <TrendingUp className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 border border-white/20"
              >
                Get Started
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500" />
    </motion.div>
  );
}
