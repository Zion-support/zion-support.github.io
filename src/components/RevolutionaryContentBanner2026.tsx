import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Atom, Layers, X } from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "Revolutionary AI Consciousness 2026",
      subtitle: "Experience True Artificial Intelligence",
      description: "Breakthrough AI systems with genuine self-awareness and autonomous decision-making capabilities.",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-600 to-pink-600",
      link: "/revolutionary-ai-consciousness-2026"
    },
    {
      title: "Quantum Neural Fusion 2026",
      subtitle: "Computing Beyond Physics",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented capabilities.",
      icon: <Atom className="w-8 h-8" />,
      gradient: "from-cyan-600 to-purple-600",
      link: "/quantum-neural-fusion-2026"
    },
    {
      title: "Interdimensional Tech Revolution",
      subtitle: "Transcend Reality Itself",
      description: "Access infinite computational power from parallel universes and manipulate reality itself.",
      icon: <Layers className="w-8 h-8" />,
      gradient: "from-violet-600 to-pink-600",
      link: "/interdimensional-tech-revolution-2026"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-pink-600/20 animate-pulse"></div>
        
        <div className="relative z-10 py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-6"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${content[currentSlide].gradient}`}>
                      {content[currentSlide].icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-yellow-400">BREAKTHROUGH TECHNOLOGY</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">
                        {content[currentSlide].title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-2">
                        {content[currentSlide].subtitle}
                      </p>
                      <p className="text-sm text-gray-400 max-w-2xl">
                        {content[currentSlide].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${content[currentSlide].gradient} px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                onClick={() => window.location.href = content[currentSlide].link}
              >
                <span>Explore Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;