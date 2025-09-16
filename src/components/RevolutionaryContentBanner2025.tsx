import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Showcase 2025",
      description: "Experience the future with groundbreaking technologies that reshape reality",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🤖 AI Solutions Comprehensive 2025",
      description: "Transform your business with our revolutionary AI solutions",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-indigo-600",
      icon: "🧠"
    },
    {
      id: 3,
      title: "⚡ Ultimate Tech Breakthrough 2025",
      description: "Witness the most revolutionary technological breakthroughs in history",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-cyan-600 to-blue-600",
      icon: "🚀"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Technology",
      description: "Explore technologies that operate across multiple dimensions",
      link: "/pages/InterdimensionalTechRevolution2026",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-8 border border-purple-400/30">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Content 2025
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover our latest revolutionary technologies that are reshaping the future of humanity
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex"
              >
                <div className={`w-full bg-gradient-to-r ${slides[currentSlide].color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
                      <h3 className="text-3xl font-bold mb-4 text-white">{slides[currentSlide].title}</h3>
                      <p className="text-xl text-gray-200 mb-6">{slides[currentSlide].description}</p>
                      <a
                        href={slides[currentSlide].link}
                        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                      >
                        Explore Now →
                      </a>
                    </div>
                    <div className="hidden md:block ml-8">
                      <div className="w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
                        <div className="text-8xl animate-pulse">{slides[currentSlide].icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-purple-400' : 'bg-purple-600/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${slide.color}/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4 text-center">{slide.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-center text-white">{slide.title}</h3>
              <p className="text-sm text-gray-200 mb-4 text-center">{slide.description}</p>
              <a
                href={slide.link}
                className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Promotional Content */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">🎯 Why Choose Our Revolutionary Content?</h3>
            <p className="text-xl text-purple-200">Experience the most advanced technologies available today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3 text-white">Cutting-Edge Technology</h4>
              <p className="text-purple-200">Latest innovations that push the boundaries of what's possible</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3 text-white">Conscious AI Systems</h4>
              <p className="text-purple-200">Artificial intelligence with genuine consciousness and emotional intelligence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌌</div>
              <h4 className="text-xl font-bold mb-3 text-white">Interdimensional Tech</h4>
              <p className="text-purple-200">Technologies that operate across multiple dimensions and realities</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;