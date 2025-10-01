import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Shield, Sparkles, ArrowRight } from 'lucide-react';

const October2025AutonomousSuperintelligenceBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl shadow-2xl my-8 p-8 md:p-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold text-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>🚀 JUST PUBLISHED - OCTOBER 20, 2025 🚀</span>
          <Sparkles className="w-4 h-4" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            >
              Autonomous Enterprise Superintelligence
            </motion.h2>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100 mb-6 leading-relaxed"
            >
              The Next Evolution in AI-Driven Business Operations
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-1">$28.4B</div>
                <div className="text-sm text-blue-100">Enterprise Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">99.97%</div>
                <div className="text-sm text-blue-100">Autonomy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-pink-400 mb-1">3,840%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">Zero</div>
                <div className="text-sm text-blue-100">Human Intervention</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/blog/ai-2025-oct-20-autonomous-enterprise-superintelligence"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/autonomous-enterprise-superintelligence-platform"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 border-2 border-white/30"
              >
                <span>Explore Platform</span>
                <Zap className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Capabilities</h3>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Self-Governing AI</div>
                  <div className="text-sm text-blue-100">Autonomous decision-making without human intervention</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Continuous Self-Optimization</div>
                  <div className="text-sm text-blue-100">Real-time learning and adaptation across all functions</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Self-Healing Systems</div>
                  <div className="text-sm text-blue-100">Automatic detection and resolution of issues</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">3 Fortune 500 Success Stories</div>
                  <div className="text-sm text-blue-100">$28.4B combined value across automotive, finance, and retail</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 backdrop-blur-sm rounded-lg p-6 border border-white/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-white mb-1">
                🎯 Ready to Transform Your Enterprise?
              </div>
              <div className="text-blue-100">
                Schedule a consultation to explore how autonomous superintelligence can revolutionize your operations
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <span>Schedule Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025AutonomousSuperintelligenceBanner;
