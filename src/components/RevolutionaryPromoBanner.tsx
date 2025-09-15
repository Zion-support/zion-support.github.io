import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryPromoBanner: React.FC = () => {
<<<<<<< HEAD
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      id: 1,
      title: "🚀 BREAKTHROUGH 2026 CONTENT NOW LIVE!",
      subtitle: "Experience the most advanced technology showcase featuring AI, Quantum Computing, Neural Interfaces, and Space Technology",
      cta: "Explore Now",
      link: "/pages/NextGenTechShowcase2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-500/20 via-pink-500/20 to-red-500/20"
    },
    {
      id: 2,
      title: "🧬 NEW: Advanced Biotech Solutions 2026",
      subtitle: "Revolutionary biotechnology solutions transforming healthcare, agriculture, and environmental sustainability",
      cta: "Discover Biotech",
      link: "/pages/AdvancedBiotechSolutions2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "🤖 Advanced Robotics 2026 - Now Available!",
      subtitle: "Next-generation robotics with AI, advanced sensors, and autonomous capabilities revolutionizing industries",
      cta: "View Robotics",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
      bgGradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20"
    },
    {
      id: 4,
      title: "🌌 Space Technology Innovation 2026",
      subtitle: "Pioneering space technologies enabling interplanetary exploration and space colonization",
      cta: "Explore Space Tech",
      link: "/pages/SpaceTechInnovation2026",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      bgGradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20"
=======
  const [currentPromo, setCurrentPromo] = useState(0);
  
  const promotions = [
    {
      title: "🚀 REVOLUTIONARY BREAKTHROUGH 2026",
      subtitle: "Advanced AI Systems with Synthetic Consciousness",
      description: "Experience the future with AI systems that think, learn, and evolve autonomously",
      cta: "Explore AI Systems →",
      href: "/pages/AdvancedAISystems2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      title: "🌟 NEXT-GEN TECHNOLOGY SHOWCASE",
      subtitle: "Quantum Computing & Neural Interfaces",
      description: "Discover revolutionary technologies reshaping industries and transforming the world",
      cta: "View Showcase →",
      href: "/pages/NextGenTechShowcase2026",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "⚡"
    },
    {
      title: "🧬 AI TRANSFORMATION 2026",
      subtitle: "Autonomous Business Operations",
      description: "Transform your business with AI systems that operate independently and continuously evolve",
      cta: "Start Transformation →",
      href: "/pages/AdvancedAITransformation2026",
      gradient: "from-emerald-600 via-teal-600 to-blue-600",
      icon: "🤖"
>>>>>>> cursor/create-and-deploy-new-content-f4f2
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
<<<<<<< HEAD
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-gradient-to-r ${banners[currentBanner].bgGradient} backdrop-blur-sm border-b border-white/20`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl animate-bounce">🌟</span>
                    <h2 className="text-lg font-bold text-white">
                      {banners[currentBanner].title}
                    </h2>
                  </div>
                  <p className="text-sm text-white/90 hidden md:block max-w-2xl">
                    {banners[currentBanner].subtitle}
                  </p>
                </motion.div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  href={banners[currentBanner].link}
                  className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-sm whitespace-nowrap`}
                >
                  {banners[currentBanner].cta} →
                </motion.a>
                
                <button
                  onClick={closeBanner}
                  className="text-white/70 hover:text-white transition-colors p-1"
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
            <motion.div
              className={`h-full bg-gradient-to-r ${banners[currentBanner].gradient}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
            />
=======
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <div className="relative mb-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPromo}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${promotions[currentPromo].gradient} rounded-2xl p-8 text-white relative overflow-hidden`}
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl animate-bounce">{promotions[currentPromo].icon}</span>
                  <h3 className="text-2xl font-bold">{promotions[currentPromo].title}</h3>
                </div>
                <h4 className="text-xl font-semibold mb-3 opacity-95">
                  {promotions[currentPromo].subtitle}
                </h4>
                <p className="text-lg opacity-90 mb-6 max-w-2xl">
                  {promotions[currentPromo].description}
                </p>
                <a
                  href={promotions[currentPromo].href}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold border border-white/30"
                >
                  {promotions[currentPromo].cta}
                </a>
              </div>
              
              <div className="hidden lg:block">
                <div className="text-8xl opacity-20">
                  {promotions[currentPromo].icon}
                </div>
              </div>
            </div>
>>>>>>> cursor/create-and-deploy-new-content-f4f2
          </div>
        </motion.div>
      </AnimatePresence>

<<<<<<< HEAD
      {/* Banner Indicators */}
      <div className="absolute bottom-2 right-4 flex space-x-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white' : 'bg-white/30'
=======
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPromo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPromo 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
>>>>>>> cursor/create-and-deploy-new-content-f4f2
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner;