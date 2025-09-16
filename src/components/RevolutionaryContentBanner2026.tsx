import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket,
  X,
  Play,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Synthetic Intelligence 2026",
      description: "Beyond Artificial Intelligence",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Neural Fusion",
      description: "The Future of Computing",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cosmic Intelligence Networks",
      description: "AI Across the Galaxy",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-purple-900 via-slate-900 to-purple-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">NEW</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Revolutionary Content 2026
            </h2>
            
            <div className="flex items-center gap-4 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${features[currentFeature].color}`}>
                    <features[currentFeature].icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{features[currentFeature].title}</div>
                    <div className="text-gray-300 text-sm">{features[currentFeature].description}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-gray-300 text-sm md:text-base mb-4 max-w-2xl">
              Discover the most groundbreaking technologies and innovations that are reshaping our world. 
              From synthetic intelligence to cosmic computing, explore the future today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/ultimate-content-showcase-2026"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all group"
              >
                <Play className="w-4 h-4" />
                Explore Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all"
              >
                <BookOpen className="w-4 h-4" />
                View All Articles
              </Link>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="hidden lg:flex flex-col gap-4 ml-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">60+</div>
              <div className="text-gray-300 text-sm">Revolutionary Articles</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-gray-300 text-sm">Cutting-Edge Technologies</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">40+</div>
              <div className="text-gray-300 text-sm">Expert Authors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
        />
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2026;