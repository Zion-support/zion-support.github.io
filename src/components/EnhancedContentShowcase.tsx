import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the future with our groundbreaking technologies that are reshaping industries",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-800/50 to-pink-800/50",
      borderColor: "border-purple-400/30",
      features: ["AI Consciousness", "Quantum Reality", "Neural Interface", "Synthetic Biology"],
      link: "/pages/RevolutionaryTechShowcase2026"
    },
    {
      id: 2,
      title: "AI Business Automation 2026",
      description: "Transform your business with intelligent automation that works 24/7 and delivers unprecedented results",
      icon: "🤖",
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-800/50 to-purple-800/50",
      borderColor: "border-blue-400/30",
      features: ["Sales Automation", "Marketing Automation", "Operations Automation", "Customer Service"],
      link: "/pages/AIBusinessAutomation2026"
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion 2026",
      description: "The revolutionary fusion of quantum computing and neural networks that transcends classical limitations",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-800/50 to-blue-800/50",
      borderColor: "border-cyan-400/30",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology", "Hybrid Computing"],
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      id: 4,
      title: "Advanced AI Transformation 2026",
      description: "Revolutionary AI systems that transform businesses and create new possibilities",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-800/50 to-teal-800/50",
      borderColor: "border-emerald-400/30",
      features: ["AI Consciousness", "Autonomous Systems", "Predictive Analytics", "Intelligent Automation"],
      link: "/pages/AdvancedAITransformation2026"
    },
    {
      id: 5,
      title: "Next-Gen Tech Showcase 2026",
      description: "Discover the latest innovations that are shaping the future of technology",
      icon: "🌟",
      color: "from-violet-600 to-fuchsia-600",
      bgColor: "from-violet-800/50 to-fuchsia-800/50",
      borderColor: "border-violet-400/30",
      features: ["Space Technology", "Time Manipulation", "Synthetic Biology", "Neural Interface"],
      link: "/pages/NextGenTechShowcase2026"
    },
    {
      id: 6,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep insights into the technologies that are transforming our world",
      icon: "🔍",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-800/50 to-red-800/50",
      borderColor: "border-orange-400/30",
      features: ["Technology Analysis", "Future Predictions", "Industry Insights", "Innovation Trends"],
      link: "/pages/ComprehensiveTechInsights2026"
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

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Enhanced Content Showcase 2026</h2>
          <p className="text-xl text-gray-600">Discover our revolutionary technologies and innovations</p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white overflow-hidden">
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-8xl mb-8">{showcaseItems[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold mb-6">{showcaseItems[currentSlide].title}</h3>
                <p className="text-xl text-purple-200 mb-8 max-w-4xl mx-auto">
                  {showcaseItems[currentSlide].description}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {showcaseItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <span className="text-purple-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={showcaseItems[currentSlide].link}
                  className={`inline-block bg-gradient-to-r ${showcaseItems[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore {showcaseItems[currentSlide].title} →
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {showcaseItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
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
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-white text-purple-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              </button>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${item.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-6xl mb-6 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{item.title}</h3>
              <p className="text-gray-200 mb-6 text-center">{item.description}</p>
              
              <div className="space-y-2 mb-6">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={item.link}
                className={`block w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {item.title} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;