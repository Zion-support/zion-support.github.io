import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary Tech Innovation 2025",
      subtitle: "Experience the most groundbreaking technological innovations",
      description: "Discover AI consciousness, quantum reality, and neural interfaces that are reshaping our world",
      link: "/pages/RevolutionaryTechInnovation2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900"
    },
    {
      id: 2,
      title: "🌟 ULTIMATE: Services Showcase 2025",
      subtitle: "Comprehensive suite of cutting-edge services",
      description: "Transform your business with our AI-powered solutions, quantum computing, and blockchain technology",
      link: "/pages/UltimateServicesShowcase2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900"
    },
    {
      id: 3,
      title: "⚡ BREAKTHROUGH: AI Consciousness 2025",
      subtitle: "Revolutionary AI systems with true consciousness",
      description: "Experience AI that thinks, feels, and creates like never before",
      link: "/pages/AIRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900"
    },
    {
      id: 4,
      title: "🧠 INNOVATION: Neural Interface Revolution",
      subtitle: "Direct brain-computer interfaces for enhanced capabilities",
      description: "Merge human consciousness with technology for unprecedented possibilities",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentContent = bannerContent[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${currentContent.bgColor} text-white py-6 px-4 relative`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-1"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex space-x-2">
                    {bannerContent.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="h-6 w-px bg-white/30"></div>
                  <span className="text-sm font-semibold animate-pulse">LATEST INNOVATIONS</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold mt-2 mb-1"
                >
                  {currentContent.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg opacity-90 mb-2"
                >
                  {currentContent.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm opacity-80 max-w-2xl"
                >
                  {currentContent.description}
                </motion.p>
              </div>

              <div className="flex items-center space-x-4 ml-8">
                <motion.a
                  href={currentContent.link}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`bg-gradient-to-r ${currentContent.color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm whitespace-nowrap`}
                >
                  Explore Now →
                </motion.a>

                <motion.button
                  onClick={handleClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Animated Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-2 border-white/30 rounded-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-2 border-white/30 rounded-full"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryContentBanner2025;