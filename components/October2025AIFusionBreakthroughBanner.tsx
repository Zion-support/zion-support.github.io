import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, TrendingUp, ArrowRight, Star, Cpu } from 'lucide-react';

const October2025AIFusionBreakthroughBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl shadow-2xl my-8 mx-4"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
            animate={{
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        {/* Header Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
            🔥🔥🔥 JUST RELEASED: OCTOBER 1, 2025 🔥🔥🔥
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Neural-Cognitive Fusion
          </span>
          <br />
          <span className="text-white">AI Breakthrough</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl lg:text-2xl text-blue-200 mb-8 max-w-4xl leading-relaxed"
        >
          Revolutionary integration of neural networks with cognitive computing
          delivering <span className="text-yellow-400 font-bold">$14.7B enterprise value</span>,{' '}
          <span className="text-green-400 font-bold">99.94% accuracy</span>, and{' '}
          <span className="text-cyan-400 font-bold">1,847% ROI</span> across Fortune 500 deployments
        </motion.p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: TrendingUp, label: 'Enterprise Value', value: '$14.7B', color: 'text-green-400' },
            { icon: Zap, label: 'Processing Speed', value: '50,000x', color: 'text-yellow-400' },
            { icon: Star, label: 'Accuracy Rate', value: '99.94%', color: 'text-cyan-400' },
            { icon: Cpu, label: 'ROI Achievement', value: '1,847%', color: 'text-purple-400' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
            >
              <metric.icon className={`w-8 h-8 ${metric.color} mb-2`} />
              <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
              <div className="text-sm text-blue-200">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: 'Adaptive Learning',
              description: 'Self-evolving algorithms that improve performance without human intervention',
            },
            {
              title: 'Real-Time Processing',
              description: 'Sub-millisecond decision making with 99.99% uptime guarantee',
            },
            {
              title: 'Enterprise Scale',
              description: '847 global deployments serving 2.4M daily users',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5"
            >
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap gap-4"
        >
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
            <span>Explore the Technology</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
            Download Case Study
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Schedule Demo
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap items-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live in 127 countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>847 enterprise deployments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>99.94% customer satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025AIFusionBreakthroughBanner;
