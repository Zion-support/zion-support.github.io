import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2042: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2042",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2042",
      link: "/pages/UltimateTechBreakthrough2042",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/30 to-pink-900/30",
      borderColor: "border-purple-400/50"
    },
    {
      title: "🌟 Revolutionary Tech Showcase 2042",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      link: "/pages/RevolutionaryTechShowcase2042",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/30 to-blue-900/30",
      borderColor: "border-cyan-400/50"
    },
    {
      title: "🧠 Consciousness Computing Revolution 2042",
      description: "The first truly conscious computing systems that can think, feel, and create independently",
      link: "/pages/ConsciousnessComputingRevolution2042",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/30 to-teal-900/30",
      borderColor: "border-emerald-400/50"
    },
    {
      title: "🌌 Interdimensional Tech Revolution 2042",
      description: "Computing systems that operate across multiple dimensions and realities simultaneously",
      link: "/pages/InterdimensionalTechRevolution2042",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/30 to-red-900/30",
      borderColor: "border-orange-400/50"
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      <div className={`bg-gradient-to-br ${currentSlideData.bgColor} backdrop-blur-sm p-8 border-2 ${currentSlideData.borderColor} relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black text-sm font-bold animate-pulse">
                🌟 NEW 2042 CONTENT
              </div>
              <div className="text-sm opacity-90">
                Slide {currentSlide + 1} of {slides.length}
              </div>
            </div>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
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
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {currentSlideData.title}
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                {currentSlideData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={currentSlideData.link}
                  className={`bg-gradient-to-r ${currentSlideData.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore Now →
                </a>
                <a
                  href="/pages/RevolutionaryTechShowcase2042"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg"
                >
                  View All Content
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-8xl mb-4">
                {currentSlide === 0 && "🚀"}
                {currentSlide === 1 && "🌟"}
                {currentSlide === 2 && "🧠"}
                {currentSlide === 3 && "🌌"}
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-sm text-white/80">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2042;