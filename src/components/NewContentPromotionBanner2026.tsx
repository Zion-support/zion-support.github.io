import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Zap, Brain, Cpu } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: Enterprise Automation Revolution',
      description: 'Transform your business with next-generation AI automation that learns and scales autonomously.',
      category: 'Enterprise AI',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      link: '/pages/AI2026EnterpriseAutomation'
    },
    {
      id: 'quantum-ai-fusion-2026',
      title: 'Quantum-AI Fusion: The Next Computing Paradigm',
      description: 'Discover unprecedented computational capabilities through quantum-AI convergence.',
      category: 'Quantum Computing',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      link: '/pages/QuantumAIFusion2026'
    },
    {
      id: 'conscious-ai-ethics-2026',
      title: 'Conscious AI: Ethical Framework for the Future',
      description: 'Explore ethical implications and frameworks for conscious AI systems.',
      category: 'AI Ethics',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
      link: '/pages/ConsciousAIEthics2026'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [0, Math.random() * 1000],
                y: [0, Math.random() * 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">
                  New Content 2026
                </span>
              </motion.div>
              
              <div className="h-6 w-px bg-gray-600"></div>
              
              <div className="flex items-center space-x-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${newContent[currentSlide].gradient} text-white`}>
                      {newContent[currentSlide].icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {newContent[currentSlide].title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {newContent[currentSlide].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to={newContent[currentSlide].link}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Now</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex space-x-2 mt-4">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-gray-600 w-2 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;