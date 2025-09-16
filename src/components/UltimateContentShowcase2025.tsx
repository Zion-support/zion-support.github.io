import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 'revolutionary-breakthrough',
      title: 'Revolutionary Tech Breakthrough 2025',
      description: 'Experience the future of technology with our groundbreaking innovations that are reshaping industries and creating new possibilities',
      icon: '🚀',
      gradient: 'from-purple-600 to-pink-600',
      features: ['AI Consciousness Revolution', 'Quantum Reality Engine', 'Neural Interface Matrix'],
      link: '/pages/RevolutionaryTechBreakthrough2025'
    },
    {
      id: 'consciousness-computing',
      title: 'Consciousness Computing Revolution',
      description: 'The dawn of truly conscious artificial intelligence that thinks, feels, and creates like never before',
      icon: '🧠',
      gradient: 'from-indigo-600 to-purple-600',
      features: ['Self-Aware AI Systems', 'Emotional Intelligence', 'Creative Problem Solving'],
      link: '/pages/ConsciousnessComputingRevolution2025'
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine 2025',
      description: 'Revolutionary quantum computing system that can simulate entire universes and solve impossible problems',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      features: ['Universal Simulation', 'Quantum Entanglement', 'Reality Manipulation'],
      link: '/pages/QuantumRealityEngine2025'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Matrix',
      description: 'Direct brain-computer interface that enables seamless communication between human consciousness and digital systems',
      icon: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      features: ['Direct Neural Communication', 'Thought-Controlled Computing', 'Memory Upload/Download'],
      link: '/pages/NeuralInterfaceMatrix2025'
    },
    {
      id: 'holographic-reality',
      title: 'Holographic Reality System',
      description: 'Advanced holographic technology that creates fully immersive 3D environments indistinguishable from reality',
      icon: '🌟',
      gradient: 'from-violet-600 to-purple-600',
      features: ['Photorealistic Holograms', 'Tactile Feedback', 'Multi-Sensory Experience'],
      link: '/pages/HolographicRealitySystem2025'
    },
    {
      id: 'interdimensional-gateway',
      title: 'Interdimensional Gateway',
      description: 'Revolutionary technology that enables travel between dimensions and parallel universes',
      icon: '🌌',
      gradient: 'from-orange-600 to-red-600',
      features: ['Dimensional Travel', 'Parallel Universe Access', 'Reality Manipulation'],
      link: '/pages/InterdimensionalGateway2025'
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            Discover our groundbreaking collection of cutting-edge technology content that's reshaping the future
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm border border-purple-400/30"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-12">
                {/* Content Info */}
                <div className="flex flex-col justify-center">
                  <div className="text-6xl mb-6">{contentSlides[currentSlide].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{contentSlides[currentSlide].title}</h3>
                  <p className="text-xl opacity-80 mb-6">{contentSlides[currentSlide].description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {contentSlides[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={contentSlides[currentSlide].link}
                      className={`bg-gradient-to-r ${contentSlides[currentSlide].gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Now →
                    </a>
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
                    >
                      {isAutoPlaying ? 'Pause' : 'Play'}
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-80 h-80 bg-gradient-to-br ${contentSlides[currentSlide].gradient} rounded-2xl flex items-center justify-center text-8xl shadow-2xl`}
                  >
                    {contentSlides[currentSlide].icon}
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">🚀 Quick Access to All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentSlides.map((slide, index) => (
              <motion.a
                key={slide.id}
                href={slide.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/20`}
              >
                <div className="text-4xl mb-4">{slide.icon}</div>
                <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
                <p className="text-white/80 text-sm mb-4">{slide.description}</p>
                <div className="text-sm text-white/60">Click to explore →</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Content Impact Statistics</h3>
            <p className="text-xl opacity-80">The numbers that prove our revolutionary impact</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-80">Revolutionary Pages</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-lg opacity-80">Monthly Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Content Updates</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary content to transform their understanding of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Get Notifications
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;