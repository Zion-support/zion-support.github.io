// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function October2025RealTimeIntelligenceBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-950 rounded-2xl shadow-2xl mb-12 border border-cyan-500/20"
    >
      {/* Animated circuit board pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 50 L 50 0" stroke="currentColor" fill="none" strokeWidth="1" className="text-cyan-400" />
              <path d="M 50 100 L 50 50 L 100 50" stroke="currentColor" fill="none" strokeWidth="1" className="text-blue-400" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-cyan-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Pulse effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Icon section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl"
              />
              <div className="relative bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-2xl">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                ⚡ Real-Time Revolution • October 2025
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Enterprise Intelligence Systems
            </h2>

            <p className="text-cyan-100 text-lg mb-6 leading-relaxed max-w-4xl">
              Experience the future of business intelligence with <span className="font-bold text-white">sub-100ms decision-making</span>, 
              <span className="font-bold text-white"> 96.7% predictive accuracy</span>, and <span className="font-bold text-white">autonomous 
              intelligence</span> that transforms enterprise operations in real-time.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">&lt;100ms</div>
                </div>
                <div className="text-cyan-200 text-sm">Decision Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20">
                <div className="text-2xl font-bold text-white mb-1">96.7%</div>
                <div className="text-blue-200 text-sm">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
                <div className="text-2xl font-bold text-white mb-1">400%+</div>
                <div className="text-green-200 text-sm">First Year ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-2xl font-bold text-white mb-1">$47M+</div>
                <div className="text-purple-200 text-sm">Proven Savings</div>
              </div>
            </div>

            {/* Industry success badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🏦 Financial Services
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🛒 Retail & E-commerce
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🏥 Healthcare
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🏭 Manufacturing
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blog/ai-2025-oct-real-time-enterprise-intelligence"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore the Technology
                <Sparkles className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 border border-white/20"
              >
                Schedule Demo
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent with animated gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
