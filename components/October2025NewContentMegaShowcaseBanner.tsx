// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Network, TrendingUp, ArrowRight, Zap, Globe } from 'lucide-react';

const October2025NewContentMegaShowcaseBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 rounded-2xl shadow-2xl my-8 p-8 md:p-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Epic Header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-bold text-lg mb-4 shadow-lg">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span>🔥 MEGA LAUNCH - OCTOBER 20, 2025 🔥</span>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Revolutionary AI Breakthroughs
          </motion.h2>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-purple-100 max-w-3xl mx-auto"
          >
            2 Groundbreaking Technologies • $62.6B Combined Value • Unlimited Potential
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Autonomous Superintelligence Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 p-3 rounded-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Autonomous Enterprise Superintelligence</h3>
                <div className="text-purple-200 text-sm">The Next Evolution in AI Operations</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">$28.4B</span>
                <span className="text-purple-200">in proven enterprise value</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="font-semibold">99.97%</span>
                <span className="text-purple-200">operational autonomy rate</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="font-semibold">3,840% ROI</span>
                <span className="text-purple-200">average return</span>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-4 mb-4">
              <div className="text-sm text-purple-200 mb-2">Key Features:</div>
              <ul className="text-sm text-white space-y-1">
                <li>• Self-governing autonomous decisions</li>
                <li>• Continuous self-optimization</li>
                <li>• Self-healing systems</li>
                <li>• Zero human intervention required</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link
                to="/blog/ai-2025-oct-20-autonomous-enterprise-superintelligence"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-bold px-4 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/autonomous-enterprise-superintelligence-platform"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-3 rounded-lg transition-all transform hover:scale-105 border border-white/30"
              >
                <span>Platform</span>
              </Link>
            </div>
          </motion.div>

          {/* Neural Mesh Computing Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-500 p-3 rounded-lg">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Neural Mesh Computing</h3>
                <div className="text-cyan-200 text-sm">Distributed Intelligence at Planetary Scale</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">$34.2B</span>
                <span className="text-cyan-200">in value creation</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="font-semibold">10M+</span>
                <span className="text-cyan-200">active nodes globally</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="font-semibold">&lt;5ms</span>
                <span className="text-cyan-200">global latency</span>
              </div>
            </div>

            <div className="bg-cyan-900/50 rounded-lg p-4 mb-4">
              <div className="text-sm text-cyan-200 mb-2">Revolutionary Capabilities:</div>
              <ul className="text-sm text-white space-y-1">
                <li>• Self-organizing network intelligence</li>
                <li>• 10M+ distributed processing nodes</li>
                <li>• Privacy-preserving computing</li>
                <li>• 99.999% system reliability</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link
                to="/blog/ai-2025-oct-20-neural-mesh-computing-revolution"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-4 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/neural-mesh-computing-platform"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-3 rounded-lg transition-all transform hover:scale-105 border border-white/30"
              >
                <span>Platform</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Combined Stats Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6"
        >
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-white mb-2">
              🎯 Combined Impact: $62.6B+ in Enterprise Value
            </div>
            <div className="text-lg text-purple-100">
              Transforming manufacturing, transportation, healthcare, retail, and financial services worldwide
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">4,280%</div>
              <div className="text-sm text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">99.97%</div>
              <div className="text-sm text-purple-100">System Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">10M+</div>
              <div className="text-sm text-purple-100">Processing Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">6 Industries</div>
              <div className="text-sm text-purple-100">Transformed</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400/20 to-pink-400/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-2xl font-bold text-white mb-3">
              🚀 Ready to Lead the AI Revolution?
            </div>
            <div className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discover how these breakthrough technologies can transform your enterprise
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 border-2 border-white/30 text-lg"
              >
                <span>Watch Demo</span>
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025NewContentMegaShowcaseBanner;
