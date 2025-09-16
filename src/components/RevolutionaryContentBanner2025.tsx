import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🌟 Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technology that will reshape our world",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🤖 AI Solutions Comprehensive 2025",
      description: "Transform your business with our complete suite of AI solutions",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-indigo-600",
      icon: "🧠"
    },
    {
      title: "⚡ Ultimate Tech Revolution 2025",
      description: "Witness the convergence of revolutionary technologies reshaping reality",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-cyan-600 to-teal-600",
      icon: "⚛️"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white animate-pulse">
            🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary Technology
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our latest groundbreaking content featuring the most advanced technologies of 2025
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                  <p className="text-xl text-purple-100 mb-6">{slide.description}</p>
                  <a
                    href={slide.link}
                    className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
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
        </div>

        {/* Quick Access Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {slides.map((slide, index) => (
            <motion.a
              key={index}
              href={slide.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${slide.color} text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center`}
            >
              <div className="text-2xl mb-2">{slide.icon}</div>
              <div className="font-semibold text-sm">{slide.title.split(' ').slice(1).join(' ')}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;