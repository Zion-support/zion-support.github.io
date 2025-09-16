import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 Revolutionary AI Technology 2025",
      subtitle: "Experience the future with conscious AI systems",
      description: "Discover our breakthrough AI solutions that are reshaping industries worldwide",
      cta: "Explore AI Solutions",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      title: "⚡ Quantum Computing Revolution",
      subtitle: "Unlock exponential processing power",
      description: "Harness the power of quantum computing for unprecedented problem-solving capabilities",
      cta: "Learn More",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80"
    },
    {
      title: "🧠 Neural Interface Breakthrough",
      subtitle: "Connect mind and machine seamlessly",
      description: "Experience the next generation of human-computer interaction with neural interfaces",
      cta: "Discover Now",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm`}></div>
      <div className="relative z-10 p-12 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6 animate-pulse">
              🌟 NEW: Revolutionary Technology 2025
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl mb-4 text-gray-200">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              {slides[currentSlide].description}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={slides[currentSlide].link}
                className={`bg-gradient-to-r ${slides[currentSlide].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                {slides[currentSlide].cta} →
              </a>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;