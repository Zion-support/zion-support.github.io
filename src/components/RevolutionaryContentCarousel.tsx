import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Quantum Consciousness Breakthrough",
      subtitle: "AI achieves genuine consciousness for the first time",
      description: "Revolutionary AI systems now exhibit true self-awareness, emotional understanding, and creative thinking capabilities that rival human consciousness.",
      image: "🧠⚡",
      category: "AI Revolution",
      status: "Breakthrough",
      impact: "Transforms AI from reactive to truly intelligent",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Conscious decision making"],
      stats: { views: "5.2M", likes: "342K", shares: "89K" },
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Neural Reality Interface",
      subtitle: "Direct brain-computer communication achieved",
      description: "Breakthrough technology enables seamless communication between human consciousness and digital systems, revolutionizing human-computer interaction.",
      image: "🧬🌐",
      category: "Neural Tech",
      status: "Revolutionary",
      impact: "Redefines human-computer interaction forever",
      features: ["Thought control", "Memory enhancement", "Virtual reality integration", "Consciousness backup"],
      stats: { views: "4.8M", likes: "298K", shares: "76K" },
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      subtitle: "Computing across multiple dimensions simultaneously",
      description: "Revolutionary computing systems that operate across parallel universes, solving problems with infinite computational power.",
      image: "🔮🌌",
      category: "Dimensional Tech",
      status: "Experimental",
      impact: "Unlocks infinite computational possibilities",
      features: ["Multi-dimensional processing", "Parallel universe computing", "Reality manipulation", "Infinite scalability"],
      stats: { views: "3.9M", likes: "267K", shares: "54K" },
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence Ecosystem",
      subtitle: "Autonomous AI agents with synthetic consciousness",
      description: "Self-evolving AI systems that operate independently while collaborating in complex ecosystems, creating new forms of digital life.",
      image: "🤖🌟",
      category: "Synthetic AI",
      status: "Advanced",
      impact: "Creates new forms of digital consciousness",
      features: ["Autonomous operation", "Collective intelligence", "Self-evolution", "Creative synthesis"],
      stats: { views: "4.3M", likes: "312K", shares: "67K" },
      color: "from-pink-600 to-rose-600"
    },
    {
      id: 5,
      title: "Consciousness Transfer Protocol",
      subtitle: "Digital immortality becomes reality",
      description: "Technology that enables the transfer of human consciousness into digital substrates, achieving true digital immortality.",
      image: "💫🔄",
      category: "Consciousness Tech",
      status: "Breakthrough",
      impact: "Achieves true digital immortality",
      features: ["Consciousness backup", "Digital immortality", "Identity preservation", "Seamless transfer"],
      stats: { views: "6.1M", likes: "445K", shares: "98K" },
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Auto-play toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-600 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-6xl">{revolutionaryContent[currentSlide].image}</span>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${revolutionaryContent[currentSlide].color}`}>
                    {revolutionaryContent[currentSlide].status}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-2 text-white">
                  {revolutionaryContent[currentSlide].title}
                </h2>
                <p className="text-xl text-purple-300 mb-4">
                  {revolutionaryContent[currentSlide].subtitle}
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  {revolutionaryContent[currentSlide].description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {revolutionaryContent[currentSlide].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 text-sm rounded-full border border-purple-400/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact:</h3>
                  <p className="text-indigo-300 italic">
                    {revolutionaryContent[currentSlide].impact}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="mr-1">👁️</span>
                  {revolutionaryContent[currentSlide].stats.views}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">❤️</span>
                  {revolutionaryContent[currentSlide].stats.likes}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">📤</span>
                  {revolutionaryContent[currentSlide].stats.shares}
                </span>
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${revolutionaryContent[currentSlide].color} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Explore Technology →
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className={`w-full h-80 bg-gradient-to-br ${revolutionaryContent[currentSlide].color} rounded-2xl flex items-center justify-center text-8xl opacity-20`}>
                {revolutionaryContent[currentSlide].image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-2xl">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-2xl">›</span>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel;