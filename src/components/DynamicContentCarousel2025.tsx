import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world. From conscious AI to quantum consciousness.",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 2,
      title: "Ultimate Content Revolution 2025",
      description: "Discover our latest revolutionary content featuring breakthrough technologies, conscious AI systems, and quantum computing innovations.",
      icon: "🌟",
      color: "from-indigo-600 to-blue-600",
      bgColor: "from-indigo-900 to-blue-900",
      features: ["50+ New Articles", "Interactive Demos", "Revolutionary Tech"],
      link: "/pages/UltimateTechRevolution2025"
    },
    {
      id: 3,
      title: "Interactive Tech Showcase 2025",
      description: "Experience our revolutionary technologies through interactive demonstrations. Click on each technology to explore its capabilities.",
      icon: "⚡",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"],
      link: "/pages/InteractiveTechShowcase2025"
    },
    {
      id: 4,
      title: "AI Solutions Comprehensive 2025",
      description: "Comprehensive AI solutions that transform businesses and drive unprecedented growth through intelligent automation and conscious AI.",
      icon: "🤖",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900",
      features: ["AI Automation", "Conscious Intelligence", "Business Transformation"],
      link: "/pages/AISolutionsComprehensive2025"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 DYNAMIC CONTENT • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Carousel
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our latest revolutionary content and breakthrough technologies through an interactive carousel experience.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${contentSlides[currentSlide].bgColor} p-8 flex items-center`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{contentSlides[currentSlide].icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{contentSlides[currentSlide].title}</h3>
                        <p className="text-lg opacity-90">{contentSlides[currentSlide].description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {contentSlides[currentSlide].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <span className="text-white/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <a
                      href={contentSlides[currentSlide].link}
                      className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105`}
                    >
                      Explore Content →
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-8xl mb-4">{contentSlides[currentSlide].icon}</div>
                    <div className="text-2xl font-bold mb-4">Interactive Experience</div>
                    <p className="text-lg opacity-90">
                      Click to explore this revolutionary content and discover the future of technology.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-400 scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-sm opacity-80">Revolutionary Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-sm opacity-80">Interactive Features</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">2025</div>
            <div className="text-sm opacity-80">Revolution Year</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;