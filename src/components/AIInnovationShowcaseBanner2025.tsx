import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Star, 
  ChevronRight, 
  X,
  Play,
  TrendingUp,
  Award,
  Globe,
  Users,
  Cpu
} from 'lucide-react';
const AIInnovationShowcaseBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "🚀 Revolutionary AI Innovations 2025",
      subtitle: "Discover Quantum-Enhanced AI Processing & Neural Network Synthesis",
      cta: "Explore Innovations",
      bgGradient: "from-blue-600 via-purple-600 to-pink-600",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "⚡ Next-Gen Automation Suite",
      subtitle: "Predictive Business Automation with 95% Impact Score",
      cta: "View Automation",
      bgGradient: "from-green-600 via-blue-600 to-purple-600",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "🌟 Global Intelligence Network",
      subtitle: "Distributed AI Network with Real-time Synchronization",
      cta: "Join Network",
      bgGradient: "from-purple-600 via-pink-600 to-red-600",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "🛡️ Advanced AI Security",
      subtitle: "Autonomous Threat Detection with 94% Impact Score",
      cta: "Secure Now",
      bgGradient: "from-red-600 via-orange-600 to-yellow-600",
      icon: <Award className="w-8 h-8" />
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);
  const currentSlideData = slides[currentSlide];
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
        <div className={`bg-gradient-to-r ${currentSlideData.bgGradient} text-white`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {currentSlideData.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      New Release 2025
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
                    {currentSlideData.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-6">
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
                      {currentSlideData.cta}
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
                  key={`visual-${currentSlide}`}
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
                        <div className="text-sm font-semibold">Feature {i}</div>
                        <div className="text-xs text-white/70">95% Impact</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
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
                    <span>95% Impact</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>50+ Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Cpu className="w-4 h-4" />
                    <span>25+ Beta</span>
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
        {/* Floating Elements */}
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
            <Rocket className="w-5 h-5 text-blue-400" />
          </motion.div>
        </div>
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </motion.div>
    </AnimatePresence>
  );

export default AIInnovationShowcaseBanner2025;