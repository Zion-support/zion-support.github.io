import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary AI Content 2025",
      description: "Experience the future of AI-powered content creation with consciousness-aware systems that generate multi-dimensional content.",
      image: "🧠",
      link: "/pages/RevolutionaryAIContent2025",
      category: "AI Revolution",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90",
      features: ["Conscious AI", "Multi-dimensional Content", "Quantum Processing"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolutionary 2025",
      description: "Revolutionary quantum technologies solving impossible problems and unlocking infinite computational power.",
      image: "⚡",
      link: "/pages/QuantumComputingRevolutionary2025",
      category: "Quantum Computing",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Quantum AI"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "Direct neural interfaces that connect human consciousness with artificial intelligence for unprecedented interaction.",
      image: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025",
      category: "Neural Interfaces",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90",
      features: ["Brain-Computer Interface", "Neural Networks", "Mind Control"]
    },
    {
      id: 4,
      title: "Ultimate Tech Breakthrough 2025",
      description: "The most revolutionary technological advances that will reshape our world and define the future of humanity.",
      image: "🌟",
      link: "/pages/UltimateTechBreakthrough2025",
      category: "Future Tech",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/90 to-red-900/90",
      features: ["Revolutionary Tech", "Future Predictions", "Tech Innovation"]
    },
    {
      id: 5,
      title: "Advanced AI Solutions 2025",
      description: "Cutting-edge AI solutions for enterprise and consumer applications with unprecedented intelligence and capabilities.",
      image: "🚀",
      link: "/pages/AdvancedTechSolutions2025",
      category: "AI Solutions",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900/90 to-purple-900/90",
      features: ["Enterprise AI", "Consumer AI", "AI Analytics"]
    },
    {
      id: 6,
      title: "Quantum Solutions 2025",
      description: "Practical quantum computing solutions for real-world applications across industries and domains.",
      image: "⚛️",
      link: "/pages/QuantumComputingSolutions2025",
      category: "Quantum Solutions",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/90 to-purple-900/90",
      features: ["Quantum Optimization", "Quantum Simulation", "Quantum Security"]
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎠 DYNAMIC CONTENT CAROUSEL • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Discovery
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            Explore our comprehensive collection of revolutionary technology content through our dynamic carousel
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${contentItems[currentIndex].bgGradient} flex items-center justify-center`}
              >
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4">
                        {contentItems[currentIndex].category}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        {contentItems[currentIndex].title}
                      </h3>
                      <p className="text-lg text-white/90 mb-6 max-w-2xl">
                        {contentItems[currentIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {contentItems[currentIndex].features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={contentItems[currentIndex].link}
                          className={`inline-block bg-gradient-to-r ${contentItems[currentIndex].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                        >
                          Explore Content →
                        </a>
                        <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-8xl mb-4">{contentItems[currentIndex].image}</div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-xl font-semibold mb-4">Interactive Preview</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">Content Active</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">Real-time Updates</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">Revolutionary Tech</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isAutoPlaying
                  ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30'
                  : 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>

        {/* Content Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">All Revolutionary Content</h3>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Browse through our complete collection of revolutionary technology content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{item.image}</div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm mb-4">{item.description.substring(0, 100)}...</p>
                  <div className="text-xs text-white/60">{item.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;