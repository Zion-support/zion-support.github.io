import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Next-Gen AI Solutions",
      description: "Revolutionary AI technologies transforming industries with autonomous agents and predictive analytics",
      image: "🤖",
      gradient: "from-slate-600 to-gray-600",
      link: "/pages/NextGenAISolutions2025",
      features: ["Autonomous AI Agents", "Real-time Processing", "Predictive Analytics"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Experience exponential computing power with quantum technology solving impossible problems",
      image: "⚡",
      gradient: "from-blue-600 to-indigo-600",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "Blockchain Innovation",
      description: "Decentralized solutions enabling trust, transparency, and new economic opportunities",
      image: "🔗",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/BlockchainInnovation2025",
      features: ["Layer 2 Solutions", "Zero-Knowledge Proofs", "Cross-Chain Interoperability"]
    },
    {
      id: 4,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions driving digital transformation and business growth",
      image: "🏢",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/EnterpriseSolutions2025",
      features: ["AI-Powered Automation", "Cloud Infrastructure", "Cybersecurity Suite"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            ✨ FEATURED CONTENT • 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Showcase</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest breakthrough content covering cutting-edge technologies that are reshaping the future
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Content */}
              <div>
                <div className="text-6xl mb-4">{contentItems[currentIndex].image}</div>
                <h3 className="text-3xl font-bold mb-4">{contentItems[currentIndex].title}</h3>
                <p className="text-lg text-gray-300 mb-6">{contentItems[currentIndex].description}</p>
                
                <div className="space-y-2 mb-8">
                  {contentItems[currentIndex].features.map((feature, index) => (
                    <div key={index} className="flex items-center text-blue-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={contentItems[currentIndex].link}
                  className={`inline-block bg-gradient-to-r ${contentItems[currentIndex].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore {contentItems[currentIndex].title} →
                </a>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${contentItems[currentIndex].gradient} rounded-2xl p-8 text-center`}>
                  <div className="text-8xl mb-4">{contentItems[currentIndex].image}</div>
                  <div className="text-2xl font-bold mb-2">{contentItems[currentIndex].title}</div>
                  <div className="text-lg opacity-90">2025 Innovation</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;