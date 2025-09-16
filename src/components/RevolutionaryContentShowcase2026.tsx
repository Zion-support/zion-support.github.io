import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2026",
      description: "AI consciousness, quantum supremacy, and neural interfaces reshaping reality",
      image: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2026"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2026",
      description: "The convergence of all breakthrough technologies creating the most powerful revolution",
      image: "🌟",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechRevolution2026"
    },
    {
      id: 3,
      title: "Revolutionary Tech Showcase 2026",
      description: "Interactive demos of conscious AI, quantum neural networks, and neural interfaces",
      image: "🎯",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechShowcase2026"
    },
    {
      id: 4,
      title: "Advanced AI Solutions 2026",
      description: "Conscious AI systems, quantum neural networks, and autonomous agents",
      image: "🤖",
      color: "from-orange-600 to-red-600",
      link: "/pages/AdvancedAISolutions2026"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026 • INTERACTIVE SHOWCASE
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our latest revolutionary content through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide Display */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`absolute inset-0 bg-gradient-to-br ${slide.color} rounded-xl flex items-center justify-center`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center p-8">
                  <div className="text-8xl mb-6">{slide.image}</div>
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl">{slide.description}</p>
                  <a 
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                  >
                    Explore Now →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`bg-gradient-to-br ${slide.color} rounded-lg p-4 cursor-pointer hover:scale-105 transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-2">{slide.image}</div>
                <h4 className="font-semibold text-sm mb-1">{slide.title}</h4>
                <p className="text-xs opacity-80 line-clamp-2">{slide.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;