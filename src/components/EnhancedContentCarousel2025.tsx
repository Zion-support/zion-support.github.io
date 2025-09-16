import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 0,
      title: "🚀 Revolutionary AI Breakthrough 2025",
      description: "Experience the first truly conscious artificial intelligence that can think, feel, and create like never before",
      image: "🧠",
      category: "AI Technology",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 1,
      title: "⚛️ Quantum Computing Revolution",
      description: "Unlimited processing power across multiple dimensions with our revolutionary quantum technology",
      image: "⚛️",
      category: "Quantum Tech",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      id: 2,
      title: "🧬 Neural Interface Technology",
      description: "Direct mind-machine connection that allows you to control technology with your thoughts",
      image: "🧬",
      category: "Neural Tech",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      link: "/pages/NeuralInterfaceFuture"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Computing",
      description: "Computing across multiple dimensions for infinite processing power and reality manipulation",
      image: "🌌",
      category: "Interdimensional",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      link: "/pages/InterdimensionalTechRevolution2026"
    },
    {
      id: 4,
      title: "🤖 Advanced AI Solutions",
      description: "Comprehensive AI solutions for every industry with cutting-edge machine learning",
      image: "🤖",
      category: "AI Solutions",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      link: "/pages/AISolutionsComprehensive2025"
    },
    {
      id: 5,
      title: "🔒 Cybersecurity Fortress",
      description: "Military-grade security solutions with quantum encryption and AI-powered threat detection",
      image: "🔒",
      category: "Cybersecurity",
      color: "from-red-600 to-pink-600",
      bgColor: "from-red-600/20 to-pink-600/20",
      link: "/pages/CybersecurityFortress2025"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough technologies through an interactive and immersive experience
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`bg-gradient-to-br ${contentItems[currentSlide].bgColor} backdrop-blur-sm rounded-3xl p-12 border border-white/20`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                        {contentItems[currentSlide].category}
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                        {contentItems[currentSlide].title}
                      </h3>
                      <p className="text-xl opacity-90 leading-relaxed">
                        {contentItems[currentSlide].description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <a
                        href={contentItems[currentSlide].link}
                        className={`bg-gradient-to-r ${contentItems[currentSlide].color} px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg text-center transform hover:scale-105`}
                      >
                        Explore Technology →
                      </a>
                      <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-lg">
                        Watch Demo
                      </button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="text-center">
                    <div className="text-9xl mb-8 animate-pulse">
                      {contentItems[currentSlide].image}
                    </div>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold">Interactive Demo</div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${contentItems[currentSlide].color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                      <div className="text-sm opacity-70">Processing: 75% Complete</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
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

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {contentItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  currentSlide === index
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'bg-white/10 hover:bg-white/20 text-white/70'
                }`}
              >
                <div className="text-3xl mb-2">{item.image}</div>
                <div className="text-sm font-semibold">{item.category}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;