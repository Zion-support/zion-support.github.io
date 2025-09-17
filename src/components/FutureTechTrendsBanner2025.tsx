import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Eye, 
  Lock, 
  Wifi, 
  Microscope,
  ChevronRight, 
  X,
  Play,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Star
} from 'lucide-react';
const FutureTechTrendsBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTrend, setCurrentTrend] = useState(0);
  const trends = [
    {
      title: "🧠 Artificial Consciousness Breakthrough",
      subtitle: "AI systems developing genuine self-awareness and emotional intelligence",
      cta: "Explore AI Consciousness",
      bgGradient: "from-purple-600 via-pink-600 to-red-600",
      icon: <Brain className="w-8 h-8" />,
      stats: "72% Adoption"
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Breakthrough quantum processors achieving quantum supremacy in real applications",
      cta: "Discover Quantum Tech",
      bgGradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: <Atom className="w-8 h-8" />,
      stats: "85% Adoption"
    },
    {
      title: "👁️ Neural Interface Technology",
      subtitle: "Direct brain-computer interfaces enabling seamless human-AI interaction",
      cta: "Explore Neural Tech",
      bgGradient: "from-green-600 via-teal-600 to-blue-600",
      icon: <Eye className="w-8 h-8" />,
      stats: "68% Adoption"
    },
    {
      title: "🔒 Quantum-Safe Cryptography",
      subtitle: "Post-quantum cryptographic systems resistant to quantum attacks",
      cta: "Secure Your Future",
      bgGradient: "from-red-600 via-orange-600 to-yellow-600",
      icon: <Lock className="w-8 h-8" />,
      stats: "90% Adoption"
    },
    {
      title: "📡 6G Wireless Networks",
      subtitle: "Next-gen wireless with terahertz frequencies and AI optimization",
      cta: "Connect to 6G",
      bgGradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: <Wifi className="w-8 h-8" />,
      stats: "45% Adoption"
    },
    {
      title: "🧬 Synthetic Biology Platform",
      subtitle: "Engineered biological systems for manufacturing and environmental solutions",
      cta: "Explore Bio-Tech",
      bgGradient: "from-emerald-600 via-green-600 to-teal-600",
      icon: <Microscope className="w-8 h-8" />,
      stats: "55% Adoption"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trends.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [trends.length]);
  const currentTrendData = trends[currentTrend];
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative overflow-hidden"
      >
        {/* Main Banner */}
        <div className={`bg-gradient-to-r ${currentTrendData.bgGradient} text-white`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  key={currentTrend}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {currentTrendData.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      Future Tech 2025
                    </span>
                    <span className="text-sm font-bold bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {currentTrendData.stats}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {currentTrendData.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
                    {currentTrendData.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-6">
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
                      {currentTrendData.cta}
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </button>
                  </div>
                </motion.div>
              </div>
              {/* Visual Elements */}
              <div className="flex-1 lg:max-w-md">
                <motion.div
                  key={`visual-${currentTrend}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium">Active</span>
                        </div>
                        <div className="text-sm font-semibold">Tech {i}</div>
                        <div className="text-xs text-white/70">High Impact</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* Trend Indicators */}
        <div className="bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {trends.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTrend(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTrend 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>25+ Trends</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>18 High Impact</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    <span>$2.5T Market</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Tech Icons */}
        <div className="absolute top-4 right-4 space-y-2">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20"
          >
            <Star className="w-5 h-5 text-yellow-400" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20"
          >
            <Zap className="w-5 h-5 text-blue-400" />
          </motion.div>
        </div>
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </motion.div>
    </AnimatePresence>
  );

export default FutureTechTrendsBanner2025;