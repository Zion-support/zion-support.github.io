import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "AI Innovation Hub 2025",
      subtitle: "The Future of Artificial Intelligence",
      description: "Explore conscious AI systems, quantum neural networks, and autonomous agents that are reshaping our world. Discover the most comprehensive platform for AI innovation and research.",
      image: "🧠",
      link: "/pages/AIInnovationHub2025",
      category: "AI & Machine Learning",
      readTime: "15 min",
      difficulty: "Advanced",
      rating: 4.9,
      views: "125K",
      color: "from-purple-500 to-pink-600",
      features: ["Conscious AI Systems", "Quantum Neural Networks", "Autonomous Agents", "Synthetic Intelligence"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2025",
      subtitle: "Witness the Most Significant Technological Breakthroughs",
      description: "Discover the most revolutionary technologies including conscious AI, quantum neural fusion, neural interfaces, and reality engineering that are transforming our world.",
      image: "⚡",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      category: "Breakthrough Technology",
      readTime: "20 min",
      difficulty: "Expert",
      rating: 4.8,
      views: "98K",
      color: "from-blue-500 to-cyan-600",
      features: ["Conscious AI", "Quantum Neural Fusion", "Neural Interfaces", "Reality Engineering"]
    },
    {
      id: 3,
      title: "Ultimate Content Showcase 2025",
      subtitle: "The Most Comprehensive Technology Content Collection",
      description: "Access the most comprehensive collection of cutting-edge technology content, research papers, and insights from leading experts in AI, quantum computing, and more.",
      image: "🌟",
      link: "/pages/UltimateContentShowcase2025",
      category: "Content & Research",
      readTime: "25 min",
      difficulty: "All Levels",
      rating: 4.7,
      views: "87K",
      color: "from-green-500 to-teal-600",
      features: ["Research Papers", "Expert Insights", "Interactive Content", "Comprehensive Coverage"]
    },
    {
      id: 4,
      title: "Interactive Tech Showcase 2025",
      subtitle: "Experience Technology Like Never Before",
      description: "Try our interactive demonstrations of the latest AI, quantum computing, and neural interface technologies. Experience the future of technology through hands-on demos.",
      image: "🚀",
      link: "/pages/InteractiveTechShowcase2025",
      category: "Interactive Demos",
      readTime: "30 min",
      difficulty: "Beginner",
      rating: 4.6,
      views: "76K",
      color: "from-orange-500 to-red-600",
      features: ["Interactive Demos", "Hands-on Experience", "Real-time Processing", "User Engagement"]
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2025",
      subtitle: "Unlock Infinite Computational Power",
      description: "Explore quantum computing breakthroughs that are solving impossible problems and revolutionizing industries with exponential processing power and unbreakable security.",
      image: "⚛️",
      link: "/pages/QuantumComputingRevolution2025",
      category: "Quantum Computing",
      readTime: "18 min",
      difficulty: "Advanced",
      rating: 4.8,
      views: "112K",
      color: "from-indigo-500 to-purple-600",
      features: ["Quantum Processing", "Exponential Speed", "Unbreakable Security", "Molecular Simulation"]
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2025",
      subtitle: "Direct Brain-Computer Integration",
      description: "Discover breakthrough neural interface technology that enables direct communication between the human brain and digital systems, bridging consciousness and AI.",
      image: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025",
      category: "Neural Interfaces",
      readTime: "22 min",
      difficulty: "Expert",
      rating: 4.7,
      views: "94K",
      color: "from-pink-500 to-rose-600",
      features: ["Brain-Computer Interface", "Thought Control", "Neural Feedback", "Consciousness Integration"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and neural interfaces
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-12"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${currentItem.color} text-white`}>
                        {currentItem.category}
                      </span>
                      <span className="text-yellow-400">⭐ {currentItem.rating}</span>
                    </div>
                    
                    <h3 className="text-4xl font-bold mb-4">{currentItem.title}</h3>
                    <p className="text-xl opacity-90 mb-4">{currentItem.subtitle}</p>
                    <p className="text-lg opacity-80 mb-8">{currentItem.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentItem.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 mb-8 text-sm">
                      <div className="flex items-center">
                        <span className="mr-2">⏱️</span>
                        <span>{currentItem.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">👁️</span>
                        <span>{currentItem.views} views</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📊</span>
                        <span>{currentItem.difficulty}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={currentItem.link}
                        className={`bg-gradient-to-r ${currentItem.color} px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300`}
                      >
                        Explore Now →
                      </a>
                      <button className="border border-white/30 px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`w-64 h-64 mx-auto rounded-full bg-gradient-to-r ${currentItem.color} flex items-center justify-center text-8xl mb-8`}
                    >
                      {currentItem.image}
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <div className="relative">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-white/20 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 2) * 20}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
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

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${item.color} p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-2">{item.image}</div>
                <div className="text-sm font-semibold">{item.title.split(':')[0]}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;