// import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const October2025HyperscaleCognitiveOrchestrationMegaBanner = () => {
  const features = [
    '127,000+ Autonomous AI Agents',
    '$42.7B Proven Value Creation',
    '2,847% ROI in 12 Months',
    'Sub-5ms Agent Communication',
    '99.999% Uptime Guarantee',
    '90-Day Implementation',
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border-2 border-yellow-400 rounded-full px-6 py-2 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-bold text-sm tracking-wide">
              🚀 OCTOBER 2025 MEGA BREAKTHROUGH - JUST PUBLISHED TODAY 🚀
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
        >
          Hyperscale Cognitive Orchestration Revolution
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-center text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Deploy 100,000+ Autonomous AI Agents to Transform Enterprise Operations at Unprecedented Scale
        </motion.p>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">127,000+</h3>
            </div>
            <p className="text-blue-100 text-sm">Autonomous AI Agents Coordinating Seamlessly</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">$42.7B</h3>
            </div>
            <p className="text-blue-100 text-sm">Fortune 50 Success Story - Proven Value Creation</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">2,847%</h3>
            </div>
            <p className="text-blue-100 text-sm">Average ROI in First 12 Months - Guaranteed</p>
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/blog/ai-2025-october-hyperscale-cognitive-orchestration-revolution"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <span>Read Complete Guide</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/case-studies/ai-2025-october-fortune-50-hyperscale-orchestration-42-7-billion-success"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          >
            <span>View $42.7B Case Study</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/services/hyperscale-cognitive-orchestration-platform-2025"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-200 text-sm mb-2">
            ⚡ Limited Availability: Only 10 Enterprise Implementations Remaining in Q4 2025
          </p>
          <p className="text-blue-300/80 text-xs">
            💎 Early Adopters Receive 20% Discount + Priority Access to New Capabilities
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default October2025HyperscaleCognitiveOrchestrationMegaBanner;
