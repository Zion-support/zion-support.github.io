import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  const slides = [
    {
      title: "AI 2026: Next-Generation Autonomous Systems",
      description: "Revolutionary breakthroughs in autonomous AI systems transforming enterprise operations",
      link: "/ai-2026-next-generation-autonomous-systems",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum AI Integration: The Future is Now",
      description: "Explore the convergence of quantum computing and artificial intelligence",
      link: "/quantum-ai-integration-2026",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced AI Solutions 2026",
      description: "Cutting-edge AI technologies reshaping the digital landscape",
      link: "/advanced-ai-solutions-2026",
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 border-b border-white/10 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex items-center space-x-6 flex-1">
              <motion.div
                className="flex items-center space-x-3"
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`p-3 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} text-white`}>
                  {slides[currentSlide].icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to={slides[currentSlide].link}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${slides[currentSlide].gradient} rounded-full`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              key={currentSlide}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;