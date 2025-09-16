import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
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
      title: "🚀 Ultimate Tech Revolution 2026",
      subtitle: "Experience the Future of Technology",
      description: "Discover breakthrough innovations in AI, quantum computing, and interdimensional technology",
      link: "/pages/UltimateTechRevolution2026",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🤖 AI Business Transformation 2026",
      subtitle: "Revolutionize Your Business with AI",
      description: "Transform operations with intelligent automation, predictive analytics, and innovation engines",
      link: "/pages/AIBusinessTransformation2026",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/90 to-cyan-900/90"
    },
    {
      title: "⚡ Quantum-Neural Fusion Technology",
      subtitle: "Where Quantum Meets Consciousness",
      description: "Breakthrough technology combining quantum computing with neural interfaces",
      link: "/pages/UltimateTechRevolution2026",
      color: "from-green-600 to-teal-600",
      bgColor: "from-green-900/90 to-teal-900/90"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Beyond the Boundaries of Reality",
      description: "Revolutionary technology for interdimensional exploration and consciousness transfer",
      link: "/pages/UltimateTechRevolution2026",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/90 to-purple-900/90"
    }
  ];

  const features = [
    "Conscious AI Systems",
    "Quantum-Neural Computing",
    "Reality Manipulation",
    "Interdimensional Travel",
    "Consciousness Transfer",
    "Universal Translation"
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-16">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking technologies and innovations that will reshape our world
          </p>
        </motion.div>

        {/* Main Content Carousel */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-4 text-white">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-2xl text-purple-300 mb-6">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    {slides[currentSlide].description}
                  </p>
                  <a
                    href={slides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Explore Now →
                  </a>
                </div>
                <div className="relative">
                  <div className={`bg-gradient-to-br ${slides[currentSlide].bgColor} rounded-xl p-8 border border-purple-400/30`}>
                    <div className="text-6xl mb-4 text-center">🚀</div>
                    <div className="grid grid-cols-2 gap-4">
                      {features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="text-sm text-purple-200">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-purple-500' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-800/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3 text-white">{slide.title}</h4>
              <p className="text-gray-300 mb-4 text-sm">{slide.description}</p>
              <a
                href={slide.link}
                className={`inline-block bg-gradient-to-r ${slide.color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Explore the Future?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators already experiencing the next generation of technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Exploring
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
              View All Content
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;