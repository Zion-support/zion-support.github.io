import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const DynamicContentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    {
      id: 1,
      title: "AI-Powered Solutions",
      description: "Revolutionary artificial intelligence that transforms your business",
      image: "🤖",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/AIRevolution2025"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      image: "⚡",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/QuantumComputingSolutions2025"
    },
    {
      id: 3,
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces for seamless interaction",
      image: "🧠",
      gradient: "from-pink-600 to-red-600",
      link: "/pages/NeuralInterfaceFuture"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced technology solutions that will shape the future
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">{carouselItems[currentIndex].image}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  {carouselItems[currentIndex].description}
                </p>
                <button className={`bg-gradient-to-r ${carouselItems[currentIndex].gradient} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto`}>
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;