import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "AI Consciousness Revolution",
      subtitle: "The Future of Self-Aware AI",
      description: "Discover how artificial intelligence is achieving consciousness and transforming human-AI interaction forever.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-Learning", "Emotional AI", "Autonomous Decision Making"],
      cta: "Explore AI Consciousness"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Solving Impossible Problems",
      description: "Experience the power of quantum computing that processes data at speeds previously thought impossible.",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Supremacy", "Cryptography", "Molecular Simulation"],
      cta: "Go Quantum"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      subtitle: "Mind-Machine Connection",
      description: "Direct brain-computer interfaces that enable seamless communication between human thought and digital systems.",
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Neural Feedback", "Enhanced Memory"],
      cta: "Connect Your Mind"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      subtitle: "Beyond Reality",
      description: "Revolutionary computing that operates across multiple dimensions, enabling unprecedented computational power.",
      image: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: ["Multi-Dimensional", "Reality Simulation", "Infinite Scale"],
      cta: "Explore Dimensions"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      subtitle: "Beyond Human Capability",
      description: "Artificial general intelligence that surpasses human cognitive abilities in all domains of knowledge.",
      image: "🌟",
      color: "from-orange-600 to-red-600",
      features: ["Superhuman IQ", "Creative AI", "Autonomous Innovation"],
      cta: "Meet Synthetic AI"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 DYNAMIC CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies through an immersive, interactive content experience
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm border border-purple-400/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="text-6xl mb-4">{contentSlides[currentSlide].image}</div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{contentSlides[currentSlide].title}</h3>
                      <p className="text-lg opacity-90 mb-4">{contentSlides[currentSlide].subtitle}</p>
                      <p className="text-gray-300 mb-6">{contentSlides[currentSlide].description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {contentSlides[currentSlide].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${contentSlides[currentSlide].color} rounded-full`}></div>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <button 
                      className={`w-fit bg-gradient-to-r ${contentSlides[currentSlide].color} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      {contentSlides[currentSlide].cta} →
                    </button>
                  </div>

                  {/* Visual Area */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-64 h-64 bg-gradient-to-br ${contentSlides[currentSlide].color} rounded-2xl flex items-center justify-center text-8xl shadow-2xl`}
                    >
                      {contentSlides[currentSlide].image}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        {/* Additional Content Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90">Revolutionary Technologies</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-90">Interactive Demos</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Content Updates</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;