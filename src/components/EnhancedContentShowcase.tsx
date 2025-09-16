import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with revolutionary breakthroughs that are reshaping industries",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"],
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2026",
      description: "Harness exponential computing power with quantum technology that solves impossible problems",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"],
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge the gap between mind and machine with direct neural interfaces for thought-controlled computing",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"],
      badge: "FUTURISTIC"
    },
    {
      id: 4,
      title: "Revolutionary Tech Blog 2026",
      description: "Stay ahead with cutting-edge insights, breakthrough discoveries, and revolutionary technology trends",
      image: "📚",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/RevolutionaryTechBlog2026",
      features: ["Expert Analysis", "Trend Predictions", "Industry Insights"],
      badge: "INSIGHTS"
    },
    {
      id: 5,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep dive into comprehensive analysis of emerging technologies and future predictions",
      image: "🔍",
      gradient: "from-indigo-600 to-pink-600",
      link: "/pages/ComprehensiveTechInsights2026",
      features: ["Market Analysis", "Future Scenarios", "Investment Opportunities"],
      badge: "ANALYSIS"
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
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Showcase */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${showcaseItems[currentSlide].gradient} text-white text-xs font-bold rounded-full animate-pulse`}>
                    {showcaseItems[currentSlide].badge}
                  </span>
                  <span className="text-sm text-gray-400">JANUARY 2026</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {showcaseItems[currentSlide].title}
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {showcaseItems[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {showcaseItems[currentSlide].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={showcaseItems[currentSlide].link}
                    className={`bg-gradient-to-r ${showcaseItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                  >
                    Explore Now →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual */}
              <div className="flex items-center justify-center">
                <div className={`w-64 h-64 bg-gradient-to-br ${showcaseItems[currentSlide].gradient} rounded-2xl flex items-center justify-center text-8xl shadow-2xl`}>
                  {showcaseItems[currentSlide].image}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {showcaseItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center text-white mb-8">🚀 Quick Access to All Content</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {showcaseItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl text-white text-center hover:shadow-lg transition-all duration-300 ${
                index === currentSlide ? 'ring-4 ring-white/50' : ''
              }`}
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <h4 className="font-semibold text-sm">{item.title.split(' ')[0]}</h4>
              <p className="text-xs opacity-90 mt-1">{item.badge}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="mt-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">5</div>
            <div className="text-sm text-gray-300">Revolutionary Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">2026</div>
            <div className="text-sm text-gray-300">Future-Ready Content</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <div className="text-sm text-gray-300">Possibilities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">🚀</div>
            <div className="text-sm text-gray-300">Innovation Level</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;