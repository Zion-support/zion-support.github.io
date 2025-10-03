import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, Globe, Cpu, Zap, Sparkles, ArrowRight, Activity } from 'lucide-react';

const October2025NeuralMeshComputingBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl my-8 p-8 md:p-12"
    >
      {/* Animated Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-cyan-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Animated Connection Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${(i + 1) * 12}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-cyan-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>🌐 BREAKTHROUGH - OCTOBER 20, 2025 🌐</span>
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
              Neural Mesh Computing
            </motion.h2>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-cyan-100 mb-6 leading-relaxed"
            >
              Distributed Intelligence at Planetary Scale
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">$34.2B</div>
                <div className="text-sm text-cyan-100">Value Creation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-1">10M+</div>
                <div className="text-sm text-cyan-100">Active Nodes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-1">99.999%</div>
                <div className="text-sm text-cyan-100">Reliability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-pink-400 mb-1">&lt;5ms</div>
                <div className="text-sm text-cyan-100">Global Latency</div>
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
                to="/blog/ai-2025-oct-20-neural-mesh-computing-revolution"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Explore Technology</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/neural-mesh-computing-platform"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 border-2 border-white/30"
              >
                <span>View Platform</span>
                <Network className="w-5 h-5" />
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
            <h3 className="text-2xl font-bold text-white mb-6">Planetary-Scale Features</h3>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Global Distribution</div>
                  <div className="text-sm text-cyan-100">10M+ nodes spanning edge to cloud infrastructure worldwide</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Cpu className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Self-Organizing Intelligence</div>
                  <div className="text-sm text-cyan-100">Automatic workload distribution and optimization</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Activity className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Ultra-Low Latency</div>
                  <div className="text-sm text-cyan-100">&lt;5ms global average with edge processing</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Proven Success</div>
                  <div className="text-sm text-cyan-100">Manufacturing, transportation, and healthcare transformations</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industry Applications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-2xl font-bold text-cyan-400 mb-2">$11.4B</div>
            <div className="text-white font-semibold mb-1">Smart Manufacturing</div>
            <div className="text-sm text-cyan-100">92% defect reduction, 99.7% uptime</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-2xl font-bold text-purple-400 mb-2">$8.7B</div>
            <div className="text-white font-semibold mb-1">Autonomous Transport</div>
            <div className="text-sm text-cyan-100">500K+ vehicles, 99.999% safety</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-2xl font-bold text-green-400 mb-2">$14.1B</div>
            <div className="text-white font-semibold mb-1">Healthcare Networks</div>
            <div className="text-sm text-cyan-100">8,000+ facilities, 94% earlier detection</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 backdrop-blur-sm rounded-lg p-6 border border-white/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-white mb-1">
                🚀 Deploy Planetary-Scale Intelligence
              </div>
              <div className="text-cyan-100">
                Discover how neural mesh computing can transform your distributed operations
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025NeuralMeshComputingBanner;
