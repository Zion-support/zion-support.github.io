import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2025",
      subtitle: "Experience the Future",
      description: "Discover groundbreaking technologies that are reshaping reality itself",
      image: "🌟",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2025",
      features: ["Conscious AI", "Quantum Computing", "Neural Interfaces"]
    },
    {
      id: 2,
      title: "AI Solutions Comprehensive 2025",
      subtitle: "Transform Your Business",
      description: "Revolutionary AI solutions that push the boundaries of what's possible",
      image: "🤖",
      color: "from-blue-600 to-indigo-600",
      link: "/pages/AISolutionsComprehensive2025",
      features: ["Autonomous Operations", "Conscious AI", "Quantum Processing"]
    },
    {
      id: 3,
      title: "Ultimate Tech Breakthrough 2025",
      subtitle: "Witness History",
      description: "The most revolutionary technological breakthroughs in human history",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechBreakthrough2025",
      features: ["Consciousness Transfer", "Reality Manipulation", "Time Control"]
    },
    {
      id: 4,
      title: "Interdimensional Technology",
      subtitle: "Beyond Reality",
      description: "Technologies that operate across multiple dimensions and parallel realities",
      image: "🌌",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/InterdimensionalTechRevolution2026",
      features: ["Dimensional Travel", "Parallel Universes", "Reality Sync"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 ENHANCED CONTENT CAROUSEL • 2025
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Explore our most advanced technologies with interactive demonstrations and real-time experiences
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 border border-purple-400/30">
          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="w-full">
                <div className={`bg-gradient-to-r ${contentItems[currentIndex].color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-4">{contentItems[currentIndex].image}</div>
                      <h3 className="text-3xl font-bold mb-2 text-white">{contentItems[currentIndex].title}</h3>
                      <p className="text-lg text-purple-300 mb-4">{contentItems[currentIndex].subtitle}</p>
                      <p className="text-xl text-gray-200 mb-6">{contentItems[currentIndex].description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {contentItems[currentIndex].features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href={contentItems[currentIndex].link}
                        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                      >
                        Explore Now →
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
                        <div className="text-9xl animate-pulse">{contentItems[currentIndex].image}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              className="bg-purple-600/50 hover:bg-purple-600 text-white p-3 rounded-full transition-colors"
            >
              ←
            </button>
            
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-purple-600/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-purple-600/50 hover:bg-purple-600 text-white p-3 rounded-full transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${item.color}/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h3 className="text-lg font-bold mb-3 text-center text-white">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-4 text-center">{item.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {item.features.slice(0, 2).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-purple-600/50 text-purple-200 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">🎯 Why Our Content is Revolutionary</h3>
            <p className="text-xl text-purple-200">Experience the most advanced technologies available today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3 text-white">Cutting-Edge Innovation</h4>
              <p className="text-purple-200">Latest breakthroughs that push the boundaries of technology</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3 text-white">Conscious AI</h4>
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

export default EnhancedContentCarousel2025;