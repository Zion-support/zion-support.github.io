import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "AI Innovation Hub 2026",
      description: "Revolutionary AI technologies including autonomous agents, quantum-enhanced AI, and consciousness computing",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationHub2026",
      features: ["Autonomous AI Agents 2.0", "Quantum-Enhanced AI", "Consciousness Computing", "Neural Interface AI"],
      stats: "300% productivity increase"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum computing applications in drug discovery, financial modeling, and climate science",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Drug Discovery", "Financial Modeling", "Climate Science", "Cryptography"],
      stats: "1000x faster processing"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-AI interaction and human augmentation",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Neural Implants", "Optogenetics", "Magnetic Stimulation"],
      stats: "Seamless human-AI fusion"
    },
    {
      id: 4,
      title: "Advanced AI Solutions 2026",
      description: "Comprehensive AI solutions for enterprise transformation and digital innovation",
      icon: "🤖",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/AdvancedAISolutions2026",
      features: ["Enterprise AI", "Predictive Analytics", "Automated Operations", "Intelligent Automation"],
      stats: "Complete business transformation"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, showcaseItems.length]);

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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6">
              🚀 INTERACTIVE TECH SHOWCASE 2026
            </div>
            <h2 className="text-4xl font-bold mb-4">Experience the Future of Technology</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our revolutionary 2026 technology showcase featuring the most advanced AI, quantum computing, and neural interface innovations
            </p>
          </motion.div>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Slides */}
          <div className="relative h-96 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="grid md:grid-cols-2 gap-8 w-full">
                  {/* Content */}
                  <div className="flex flex-col justify-center p-8">
                    <div className="text-6xl mb-4">{showcaseItems[currentSlide].icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{showcaseItems[currentSlide].title}</h3>
                    <p className="text-lg opacity-90 mb-6">{showcaseItems[currentSlide].description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {showcaseItems[currentSlide].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                      <span className="text-sm font-semibold">Impact: {showcaseItems[currentSlide].stats}</span>
                    </div>

                    <a
                      href={showcaseItems[currentSlide].link}
                      className={`inline-block bg-gradient-to-r ${showcaseItems[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                    >
                      Explore {showcaseItems[currentSlide].title} →
                    </a>
                  </div>

                  {/* Visual */}
                  <div className="flex items-center justify-center">
                    <div className={`w-64 h-64 bg-gradient-to-br ${showcaseItems[currentSlide].gradient} rounded-2xl flex items-center justify-center text-8xl shadow-2xl`}>
                      {showcaseItems[currentSlide].icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Innovations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${item.gradient} rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold">{item.title}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;