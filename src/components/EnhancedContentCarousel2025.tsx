import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology",
      image: "🚀",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      category: "Technology"
    },
    {
      id: 2,
      title: "AI Solutions Comprehensive 2025",
      description: "Discover our complete suite of revolutionary AI solutions designed to transform your business and reshape the future",
      image: "🤖",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      category: "AI Solutions"
    },
    {
      id: 3,
      title: "Quantum Computing Revolution",
      description: "Experience the future of computing with quantum technology that solves impossible problems in real-time",
      image: "⚡",
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-cyan-600 to-blue-600",
      category: "Quantum Computing"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Bridge the gap between mind and machine with direct neural interfaces and consciousness transfer",
      image: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      category: "Neural Interfaces"
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      description: "Explore computing across multiple dimensions and realities with our breakthrough interdimensional technology",
      image: "🌌",
      link: "/pages/InterdimensionalTechRevolution2026",
      color: "from-violet-600 to-purple-600",
      category: "Interdimensional Tech"
    },
    {
      id: 6,
      title: "Synthetic Intelligence Matrix",
      description: "Advanced AI that creates and manages other AI systems with synthetic intelligence and autonomous operation",
      image: "🌟",
      link: "/pages/SyntheticIntelligence2026",
      color: "from-orange-600 to-red-600",
      category: "Synthetic Intelligence"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, carouselItems.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleItemClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT • JANUARY 2025
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enhanced Content Experience
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover our most advanced technology content and revolutionary solutions that are reshaping the future
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${carouselItems[currentIndex].color} p-12 rounded-2xl`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="text-6xl mb-6 animate-pulse">
                      {carouselItems[currentIndex].image}
                    </div>
                    <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                      {carouselItems[currentIndex].category}
                    </div>
                    <h3 className="text-4xl font-bold mb-6">
                      {carouselItems[currentIndex].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-8">
                      {carouselItems[currentIndex].description}
                    </p>
                    <button
                      onClick={() => handleItemClick(carouselItems[currentIndex].link)}
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                    >
                      Explore Content →
                    </button>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="w-full h-80 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <div className="text-9xl animate-bounce">
                        {carouselItems[currentIndex].image}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-xl"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isAutoPlaying 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white text-gray-900'
              }`}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carouselItems.map((item, index) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleItemClick(item.link)}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <div className="text-sm font-semibold text-center">{item.category}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;