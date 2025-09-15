import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness",
      description: "Experience AI with genuine consciousness and emotional intelligence that transcends traditional machine learning",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Autonomous Learning"],
      link: "/pages/RevolutionaryTech2026",
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion",
      description: "The convergence of quantum computing and neural networks creating unprecedented computational power",
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["1000+ Qubits", "Quantum Supremacy", "Neural Integration", "Parallel Processing"],
      link: "/pages/UltimateTechShowcase2026",
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication enabling thought-based control and enhanced cognitive capabilities",
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Memory Enhancement", "Telepathic Communication", "Medical Applications"],
      link: "/pages/NeuralInterfaceRevolution2025",
      badge: "ADVANCED"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "AI agents with synthetic consciousness and autonomous capabilities that learn and evolve independently",
      image: "🤖",
      color: "from-orange-600 to-red-600",
      features: ["Synthetic Consciousness", "Autonomous Agents", "Creative AI", "Collective Intelligence"],
      link: "/pages/SyntheticIntelligence2026",
      badge: "FUTURE"
    },
    {
      id: 5,
      title: "Space Technology Innovation",
      description: "Next-generation space exploration and aerospace solutions enabling interplanetary travel and colonization",
      image: "🚀",
      color: "from-indigo-600 to-purple-600",
      features: ["Interplanetary Travel", "Space Colonization", "Asteroid Mining", "Satellite Networks"],
      link: "/pages/SpaceTechInnovation2026",
      badge: "PIONEERING"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center"
          >
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${slides[currentSlide].color} rounded-full text-sm font-bold animate-pulse`}>
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-300 mb-6"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-2 mb-8"
                >
                  {slides[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex space-x-4"
                >
                  <a
                    href={slides[currentSlide].link}
                    className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                    Watch Demo
                  </button>
                </motion.div>
              </div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-48 h-48 bg-gradient-to-br ${slides[currentSlide].color} rounded-full text-8xl mb-4 shadow-2xl`}>
                  {slides[currentSlide].image}
                </div>
                <div className="text-white text-lg font-semibold">
                  {slides[currentSlide].title}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
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

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? `bg-gradient-to-r ${slides[currentSlide].color} scale-125`
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className={`h-full bg-gradient-to-r ${slides[currentSlide].color}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default DynamicContentCarousel;