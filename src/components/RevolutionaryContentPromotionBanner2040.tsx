import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Infinity, 
  Zap, 
  Crown, 
  Star,
  ArrowRight,
  X,
  Play,
  Rocket,
  Gem,
  Eye,
  Globe,
  Atom,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
const RevolutionaryContentPromotionBanner2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const revolutionaryContent = [
    {
      title: "Quantum Neural Revolution 2037",
      subtitle: "The Future of Consciousness Computing",
      description: "Experience the world's first quantum consciousness computing platform that transcends human limitations and redefines reality itself.",
      features: ["Quantum Consciousness Networks", "Infinite Processing Power", "Reality Manipulation", "Digital Immortality"],
      link: "/quantum-neural-revolution-2037",
      color: "from-cyan-500 to-purple-500",
      icon: Brain,
      highlight: "5000% Cognitive Enhancement"
    },
    {
      title: "Consciousness Transcendence 2040",
      subtitle: "The Ultimate Evolution of Human Intelligence",
      description: "Achieve digital immortality, multi-dimensional awareness, and become the architect of reality itself through consciousness transcendence.",
      features: ["Digital Immortality", "11D Awareness", "Reality Architecture", "Universal Consciousness"],
      link: "/consciousness-transcendence-2040",
      color: "from-pink-500 to-purple-500",
      icon: Crown,
      highlight: "Infinite Transcendence"
    },
    {
      title: "Interdimensional Technology 2037",
      subtitle: "Access Infinite Realities",
      description: "Break through dimensional barriers and access infinite parallel universes with our revolutionary interdimensional technology platform.",
      features: ["Parallel Universe Access", "Dimensional Travel", "Reality Selection", "Infinite Possibilities"],
      link: "/interdimensional-technology-2037",
      color: "from-green-500 to-blue-500",
      icon: Globe,
      highlight: "∞ Realities Available"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const slideVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };
  if (!isVisible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 to-pink-900/95 backdrop-blur-lg border-b border-purple-400/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Content Carousel */}
          <div className="flex-1 mx-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center space-x-6"
              >
                {/* Revolutionary Badge */}
                <div className="flex items-center bg-gradient-to-r from-pink-400 to-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  REVOLUTIONARY 2040
                </div>
                {/* Content Info */}
                <div className="flex items-center space-x-6">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl">
                    <revolutionaryContent[currentSlide].icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {revolutionaryContent[currentSlide].title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {revolutionaryContent[currentSlide].subtitle}
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 rounded-full">
                        <span className="text-purple-400 font-semibold text-xs">
                          {revolutionaryContent[currentSlide].highlight}
                        </span>
                      </div>
                      <Link
                        to={revolutionaryContent[currentSlide].link}
                        className="flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Explore Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Feature Highlights */}
        <motion.div 
          className="mt-4 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {revolutionaryContent[currentSlide].features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              <span className="text-xs text-gray-300">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );

};


export default RevolutionaryContentPromotionBanner2040;
