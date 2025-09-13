import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewContentPromotionBanner2026() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🚀 New: Advanced AI Services 2026",
      description: "Discover our revolutionary AI solutions including Quantum-Enhanced AI, Autonomous Agents, and Neural Interface Systems",
      link: "/advanced-ai-services-2026",
      bgColor: "from-purple-600 to-indigo-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "🏆 AI Success Stories & Case Studies",
      description: "See real results from Fortune 500 companies. 85% average ROI, $2.5B+ total savings, 500+ AI models deployed",
      link: "/ai-success-stories-2026",
      bgColor: "from-cyan-600 to-blue-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "🤖 Enterprise AI Transformation",
      description: "Complete AI infrastructure with 99.9% uptime SLA, enterprise-grade security, and 24/7 expert support",
      link: "/advanced-ai-services-2026",
      bgColor: "from-green-600 to-emerald-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "⚛️ Quantum Computing Solutions",
      description: "Next-generation quantum-enhanced AI algorithms delivering 1000x faster processing for complex problems",
      link: "/quantum-computing-solutions",
      bgColor: "from-orange-600 to-red-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`bg-gradient-to-r ${currentSlideData.bgColor} ${currentSlideData.textColor} relative`}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl font-bold mb-2"
                >
                  {currentSlideData.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm md:text-base opacity-90 max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  to={currentSlideData.link}
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Explore Now →
                </Link>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white transition-colors duration-200 p-2"
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}