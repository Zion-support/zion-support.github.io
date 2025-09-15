import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerSlides = [
    {
      title: "🚀 REVOLUTIONARY AI BREAKTHROUGH 2026",
      subtitle: "Synthetic Consciousness AI Systems Now Available",
      description: "Experience AI that thinks, feels, and creates like never before. Join the consciousness revolution.",
      cta: "Explore AI Consciousness →",
      href: "/pages/AIInnovationHub2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      title: "⚛️ QUANTUM COMPUTING REVOLUTION",
      subtitle: "1000-Qubit Quantum Processors Now Live",
      description: "Achieve quantum supremacy with our breakthrough quantum computing technology. The future is now.",
      cta: "Enter Quantum Era →",
      href: "/pages/QuantumComputingRevolution2026",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      icon: "⚛️"
    },
    {
      title: "🧬 NEURAL INTERFACE BREAKTHROUGH",
      subtitle: "Direct Brain-Computer Interface Technology",
      description: "Control technology with your thoughts. The future of human-computer interaction is here.",
      cta: "Experience Neural Tech →",
      href: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-teal-500 via-emerald-500 to-green-500",
      icon: "🧬"
    },
    {
      title: "🌟 COMPREHENSIVE TECH SHOWCASE",
      subtitle: "All Revolutionary Technologies in One Place",
      description: "Discover the complete collection of 2026's most advanced technologies and innovations.",
      cta: "View All Technologies →",
      href: "/pages/ComprehensiveTechInsights2026",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: "🌟"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  const currentBanner = bannerSlides[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className={`bg-gradient-to-r ${currentBanner.gradient} text-white relative`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                  animate={{
                    x: [0, Math.random() * 100, 0],
                    y: [0, Math.random() * 100, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <span className="text-4xl animate-bounce">{currentBanner.icon}</span>
                      <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                        {currentBanner.title}
                      </h2>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 opacity-95">
                      {currentBanner.subtitle}
                    </h3>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto lg:mx-0">
                      {currentBanner.description}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <a
                      href={currentBanner.href}
                      className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      {currentBanner.cta}
                    </a>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="flex-1 max-w-md">
                  <motion.div
                    key={`visual-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">{currentBanner.icon}</div>
                      <h4 className="text-xl font-bold mb-4">Interactive Preview</h4>
                      <div className="space-y-3">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-sm opacity-80">Technology Status</div>
                          <div className="font-semibold">Revolutionary</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-sm opacity-80">Availability</div>
                          <div className="font-semibold">Now Available</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-sm opacity-80">Impact Level</div>
                          <div className="font-semibold">Transformative</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {bannerSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white text-gray-900 font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-2">{slide.icon}</span>
                    <span className="text-sm">{slide.title.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;