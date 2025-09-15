<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const UltimateContentPromotionBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      title: "🔒 Advanced Cybersecurity 2026",
      description: "Revolutionary AI-powered security with quantum-resistant protection",
      link: "/pages/AdvancedCyberSecurity2026",
      gradient: "from-red-600 via-orange-600 to-red-600",
      icon: "🛡️"
    },
    {
      title: "🔗 Advanced Blockchain Solutions 2026",
      description: "Quantum-resistant blockchain with AI-powered smart contracts",
      link: "/pages/AdvancedBlockchainSolutions2026",
      gradient: "from-blue-600 via-purple-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "☁️ Advanced Cloud Solutions 2026",
      description: "Quantum-enhanced cloud computing with holographic storage",
      link: "/pages/AdvancedCloudSolutions2026",
      gradient: "from-cyan-600 via-blue-600 to-cyan-600",
      icon: "🚀"
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles
  Zap
  Brain
  Rocket
  Star
  TrendingUp
  Users
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  X,
  ArrowRight
} from 'lucide-react';

const UltimateContentPromotionBanner2026 = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentMessagesetCurrentMessage] = useState(0);

  const promotionalMessages = [
    {
      icon: Brain,
      title: "Revolutionary AI Innovations 2026",
      subtitle: "Discover breakthrough technologies that will reshape the future",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-600/10 to-pink-600/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Rocket,
      title: "Future Technology Predictions",
      subtitle: "Explore 'what', 's coming in the next decade of innovation",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-r from-blue-600/10 to-cyan-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Target,
      title: "Enterprise AI Solutions",
      subtitle: "Transform your business with cutting-edge AI technology",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-600/10 to-emerald-600/10",
      borderColor: "border-green-500/30"
>>>>>>> cursor/create-and-deploy-new-content-f977
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
<<<<<<< HEAD
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotionalContent.length]);
=======
      setCurrentMessage((prev) => (prev + 1) % promotionalMessages.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const currentPromo = promotionalMessages[currentMessage];
>>>>>>> cursor/create-and-deploy-new-content-f977

  if (!isVisible) return null;

  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden">
      {/* Main Promotion Banner */}
      <div className={`bg-gradient-to-r ${promotionalContent[currentSlide].gradient} text-white p-8 mb-8 rounded-2xl relative overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
=======
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Main Banner */}
        <div className={`${currentPromo.bgColor} border-b ${currentPromo.borderColor} backdrop-blur-lg`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center gap-4 flex-1">
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentPromo.color} rounded-xl flex items-center justify-center`}>
                    <currentPromo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {currentPromo.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {currentPromo.subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center Badge */}
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3" />
                  NEW
                </div>
                <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <TrendingUp className="w-3 h-3" />
                  TRENDING
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <Play className="w-4 h-4" />
                  Explore Now
                </button>
                <button className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
          <motion.div
            key={currentMessage}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 4ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
              }}
              animate={{
                y: [0-20],
                opacity: [0.20.80.2],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
>>>>>>> cursor/create-and-deploy-new-content-f977
              }}
            />
          ))}
        </div>
<<<<<<< HEAD

        {/* Floating Icons */}
        <div className="absolute top-4 right-4 text-6xl animate-bounce opacity-50">
          {promotionalContent[currentSlide].icon}
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl animate-spin">🌟</span>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                  REVOLUTIONARY BREAKTHROUGH 2026
                </h3>
                <span className="text-4xl animate-spin">🌟</span>
              </div>
              
              <h4 className="text-2xl font-bold mb-3">
                {promotionalContent[currentSlide].title}
              </h4>
              
              <p className="text-xl opacity-95 mb-6 max-w-3xl">
                {promotionalContent[currentSlide].description}
              </p>

              <div className="flex space-x-4">
                <a 
                  href={promotionalContent[currentSlide].link}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold border border-white/30 flex items-center space-x-2"
                >
                  <span>🚀</span>
                  <span>Explore Now →</span>
                </a>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30">
                  📊 View Demo
                </button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex flex-col space-y-2 ml-8">
              {promotionalContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {promotionalContent.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`bg-gradient-to-r ${item.gradient} text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 text-4xl opacity-50">
              {item.icon}
            </div>
            <div className="relative z-10">
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm opacity-90 mb-4">{item.description}</p>
              <div className="flex items-center space-x-2 text-sm">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Special Features Highlight */}
      <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/30">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-pulse">✨</span>
            <h3 className="text-2xl font-bold text-white">What Makes These Solutions Revolutionary?</h3>
            <span className="text-3xl animate-pulse">✨</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Intelligence</h4>
              <p className="text-gray-300 text-sm">Advanced neural networks and machine learning algorithms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚛️</div>
              <h4 className="text-lg font-semibold text-white mb-2">Quantum-Enhanced</h4>
              <p className="text-gray-300 text-sm">Quantum computing capabilities for unprecedented performance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔮</div>
              <h4 className="text-lg font-semibold text-white mb-2">Future-Ready</h4>
              <p className="text-gray-300 text-sm">Built for the next generation of technology challenges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          🚀 Ready to Experience the Future?
        </h3>
        <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          Discover how our revolutionary 2026 solutions can transform your business. 
          Get started with a free consultation today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            🎯 Get Free Consultation
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
            📚 View All Solutions
          </button>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-2xl"
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
=======
      </motion.div>
    </AnimatePresence>
>>>>>>> cursor/create-and-deploy-new-content-f977
  );
};

export default UltimateContentPromotionBanner2026;