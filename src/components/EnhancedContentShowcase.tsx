import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: 'AI Revolution 2025',
      description: 'Discover how artificial intelligence is reshaping industries',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AIRevolution2025'
    },
    {
      id: 2,
      title: 'Quantum Computing',
      description: 'Experience the future of computing with quantum technology',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumComputingBreakthrough'
    },
    {
      id: 3,
      title: 'Neural Interfaces',
      description: 'Bridge the gap between mind and machine',
      icon: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NeuralInterfaceFuture'
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
    <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enhanced Content Showcase</h2>
          <p className="text-xl text-gray-300">Explore our revolutionary technologies</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 text-center`}
              >
                <div className="text-8xl mb-6">{showcaseItems[currentSlide].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{showcaseItems[currentSlide].title}</h3>
                <p className="text-xl mb-8 text-white/90">{showcaseItems[currentSlide].description}</p>
                <a
                  href={showcaseItems[currentSlide].link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Now →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              ← Previous
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;