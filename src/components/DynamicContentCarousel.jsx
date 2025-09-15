import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "AI Innovation Hub 2026",
      description: "Explore cutting-edge AI technologies and breakthrough innovations",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing technologies for the future",
      image: "⚛️",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/QuantumComputingRevolution2025"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Advanced brain-computer interfaces and neural networks",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/NeuralInterfaceRevolution2025"
    },
    {
      id: 4,
      title: "Next-Gen Space Tech",
      description: "Revolutionary space exploration and colonization technologies",
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NextGenSpaceTech2026"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Advanced synthetic intelligence and consciousness systems",
      image: "🤖",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/SyntheticIntelligence2026"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className={`bg-gradient-to-r ${carouselItems[currentSlide].gradient} p-12 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-6xl mb-4">{carouselItems[currentSlide].image}</div>
                  <h2 className="text-4xl font-bold mb-4">{carouselItems[currentSlide].title}</h2>
                  <p className="text-xl mb-6 opacity-90">{carouselItems[currentSlide].description}</p>
                  <a
                    href={carouselItems[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
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

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;