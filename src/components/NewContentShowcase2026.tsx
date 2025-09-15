import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience cutting-edge technologies that are reshaping our world",
      image: "🚀",
      color: "from-blue-500 to-indigo-600",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      features: ["Synthetic Intelligence", "Quantum Computing", "Bio-Quantum Interfaces"]
    },
    {
      id: 2,
      title: "Ultimate Tech Showcase 2027",
      description: "Inter-dimensional computing and advanced AI systems",
      image: "🌌",
      color: "from-purple-500 to-pink-600",
      link: "/pages/UltimateTechShowcase2027",
      features: ["Dimensional Computing", "Temporal AI", "Neural Interfaces"]
    },
    {
      id: 3,
      title: "Revolutionary Innovation Hub 2027",
      description: "Advanced innovation labs and breakthrough technologies",
      image: "🔬",
      color: "from-emerald-500 to-teal-600",
      link: "/pages/RevolutionaryInnovationHub2027",
      features: ["Innovation Labs", "Research Centers", "Tech Incubators"]
    },
    {
      id: 4,
      title: "Advanced AI Systems 2026",
      description: "Synthetic consciousness and autonomous AI capabilities",
      image: "🧠",
      color: "from-orange-500 to-red-600",
      link: "/pages/AdvancedAISystems2026",
      features: ["Synthetic Consciousness", "Autonomous AI", "Neural Networks"]
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Exponential processing power and quantum applications",
      image: "⚛️",
      color: "from-cyan-500 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Supremacy", "Quantum Algorithms", "Quantum Cryptography"]
    },
    {
      id: 6,
      title: "Revolutionary Tech Blog 2026",
      description: "Insights and analysis of breakthrough technologies",
      image: "📝",
      color: "from-violet-500 to-purple-600",
      link: "/pages/RevolutionaryTechBlog2026",
      features: ["Tech Insights", "Industry Analysis", "Future Predictions"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
            🎯 NEW CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary New Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies and innovative solutions that are transforming the future
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${showcaseItems[currentSlide].color} text-white p-12 md:p-16`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-6">{showcaseItems[currentSlide].image}</div>
                      <h3 className="text-4xl font-bold mb-6">
                        {showcaseItems[currentSlide].title}
                      </h3>
                      <p className="text-xl opacity-90 mb-8">
                        {showcaseItems[currentSlide].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {showcaseItems[currentSlide].features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={showcaseItems[currentSlide].link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        Explore Now →
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <div className="text-8xl opacity-50">
                          {showcaseItems[currentSlide].image}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid of All Items */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            All New Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} text-white rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/90 mb-4 text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.features.slice(0, 2).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-white/20 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {item.features.length > 2 && (
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">
                      +{item.features.length - 2}
                    </span>
                  )}
                </div>
                <a
                  href={item.link}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-semibold"
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;