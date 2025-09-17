import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH SHOWCASE 2026",
      subtitle: "Experience the most advanced technologies that will reshape our world",
      description: "From artificial consciousness to quantum supremacy, discover the future today",
      cta: "Explore Ultimate Showcase",
      link: "/pages/UltimateTechShowcase2026",
      color: "from-purple-600 via-pink-600 to-cyan-600",
      bgColor: "from-purple-600/50 to-cyan-600/50",
      icon: "🚀"
    },
    {
      title: "🔮 FUTURE TECH TRENDS 2026",
      subtitle: "Discover the revolutionary technologies that will shape our future",
      description: "From consciousness computing to space colonization, explore what's coming next",
      cta: "Explore Future Trends",
      link: "/pages/FutureTechTrends2026",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      bgColor: "from-cyan-600/50 to-indigo-600/50",
      icon: "🌌"
    },
    {
      title: "🧠 CONSCIOUSNESS COMPUTING",
      subtitle: "The next frontier where AI achieves true consciousness and self-awareness",
      description: "Revolutionary AI systems with consciousness, creativity, and emotional intelligence",
      cta: "Learn About AI Consciousness",
      link: "/pages/AIConsciousnessEvolution2026",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      bgColor: "from-emerald-600/50 to-cyan-600/50",
      icon: "🧠"
    },
    {
      title: "⚡ QUANTUM SUPREMACY",
      subtitle: "Exponential computing power that solves impossible problems",
      description: "Experience quantum computing with 1000+ qubits and quantum supremacy",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2026",
      color: "from-violet-600 via-purple-600 to-pink-600",
      bgColor: "from-violet-600/50 to-pink-600/50",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl p-8 text-white relative overflow-hidden`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                    ✨ BRAND NEW • JANUARY 2026
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h2>
                <p className="text-xl opacity-95 mb-2">{slides[currentSlide].subtitle}</p>
                <p className="text-lg opacity-90 mb-6 max-w-3xl">{slides[currentSlide].description}</p>
                <div className="flex space-x-4">
                  <a
                    href={slides[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
                  >
                    {slides[currentSlide].cta} →
                  </a>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                    Watch Demo
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block ml-8">
                <div className="text-8xl opacity-20 animate-pulse">
                  {slides[currentSlide].icon}
                </div>
              </div>
            </div>
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
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-purple-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimateContentBanner;