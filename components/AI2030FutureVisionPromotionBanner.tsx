import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Eye, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket,
  CheckCircle,
  Clock,
  Globe,
  Infinity,
  Heart,
  Atom
} from 'lucide-react';

const AI2030FutureVisionPromotionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 border border-blue-500/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-4"
            >
              <Eye className="w-4 h-4 mr-2" />
              🔮 NEW: AI 2030 Future Vision
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Humanity
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-200 mb-6 max-w-2xl"
            >
              Explore revolutionary AI technologies that will transform human civilization by 2030. 
              From AGI to consciousness transfer, witness the future of human potential.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <div className="flex items-center text-gray-200">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-sm">Artificial General Intelligence</span>
              </div>
              <div className="flex items-center text-gray-200">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-sm">Quantum-AI Integration</span>
              </div>
              <div className="flex items-center text-gray-200">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-sm">Consciousness Transfer</span>
              </div>
              <div className="flex items-center text-gray-200">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-sm">Universal Translation</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-6"
            >
              <div className="flex items-center text-white">
                <Infinity className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm font-semibold">Infinite Possibilities</span>
              </div>
              <div className="flex items-center text-white">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-sm font-semibold">100% Problem Solving</span>
              </div>
              <div className="flex items-center text-white">
                <Globe className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm font-semibold">Global Transformation</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/ai-2030-future-vision"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Future Visions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link
                href="/ai-solutions"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
              >
                View All Solutions
              </Link>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative lg:w-80 lg:h-80 flex-shrink-0"
          >
            <div className="relative w-full h-full">
              {/* Animated Icons */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-16 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Atom className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  x: [-5, 5, -5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-16 left-8 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <Heart className="w-7 h-7 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  rotate: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-8 right-16 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
              >
                <Globe className="w-5 h-5 text-white" />
              </motion.div>

              {/* Central Hub */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(59, 130, 246, 0.6)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
              >
                <Eye className="w-10 h-10 text-white" />
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="32"
                  y1="32"
                  x2="160"
                  y2="160"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.line
                  x1="288"
                  y1="64"
                  x2="160"
                  y2="160"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                <motion.line
                  x1="32"
                  y1="256"
                  x2="160"
                  y2="160"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                />
                <motion.line
                  x1="256"
                  y1="256"
                  x2="160"
                  y2="160"
                  stroke="url(#gradient4)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.6 }}
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AI2030FutureVisionPromotionBanner;