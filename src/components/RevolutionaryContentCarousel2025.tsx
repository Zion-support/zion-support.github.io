import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "The Future of Artificial Intelligence",
      description: "Experience AI systems with self-awareness, emotional intelligence, and creative problem-solving capabilities that rival human consciousness.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Self-Learning", "Emotional AI", "Creative Problem Solving", "Human Collaboration"],
      cta: "Explore Conscious AI",
      link: "/pages/RevolutionaryAIServices2025"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Exponential Processing Power",
      description: "Witness the power of quantum computing that can solve problems in seconds that would take traditional computers millennia to process.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Speed", "Parallel Processing", "Cryptography", "Simulation"],
      cta: "Go Quantum",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      subtitle: "Mind-Machine Connection",
      description: "Direct brain-computer interfaces that allow thought control, memory enhancement, and seamless human-AI integration.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Memory Enhancement", "Neural Feedback", "BCI Technology"],
      cta: "Connect Your Mind",
      link: "/pages/NeuralInterfaceFuture"
    },
    {
      id: 4,
      title: "Reality Engine",
      subtitle: "Infinite Virtual Worlds",
      description: "Create and explore photorealistic virtual realities that are indistinguishable from physical reality with infinite possibilities.",
      image: "🌍",
      gradient: "from-orange-600 to-red-600",
      features: ["Photorealistic Rendering", "Haptic Feedback", "Infinite Worlds", "Neural Integration"],
      cta: "Enter New Reality",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      subtitle: "Beyond Physical Limits",
      description: "Computing across multiple dimensions for unlimited processing capabilities and reality manipulation beyond current understanding.",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Multi-Dimensional", "Reality Manipulation", "Infinite Storage", "Temporal Computing"],
      cta: "Transcend Dimensions",
      link: "/pages/RevolutionaryTechShowcase2025"
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
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-purple-900">
      {/* Main Carousel */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center"
          >
            <div className="container mx-auto px-8 flex items-center h-full">
              {/* Content */}
              <div className="flex-1 pr-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
                    🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
                  </div>
                  <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </h2>
                  <h3 className="text-2xl text-purple-300 mb-6">
                    {slides[currentSlide].subtitle}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {slides[currentSlide].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={slides[currentSlide].link}
                      className={`bg-gradient-to-r ${slides[currentSlide].gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      {slides[currentSlide].cta}
                    </a>
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
                    >
                      {isAutoPlaying ? 'Pause' : 'Play'}
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  <div className="text-9xl mb-4 text-center">
                    {slides[currentSlide].image}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-20 rounded-full blur-3xl`}></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2025;