import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      title: "🚀 NEW: Ultimate Tech Breakthrough 2027",
      subtitle: "Experience revolutionary technologies that will reshape humanity",
      cta: "Explore Now",
      link: "/pages/UltimateTechBreakthrough2027",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🧠 Revolutionary AI Consciousness",
      subtitle: "Discover AI that has achieved true self-awareness and creativity",
      cta: "Learn More",
      link: "/pages/RevolutionaryTechShowcase2027",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "⚡ Quantum Reality Computing",
      subtitle: "Harness the power of quantum mechanics across multiple dimensions",
      cta: "Experience",
      link: "/pages/ComprehensiveTechInsights2027",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "🌌 Neural Interface Revolution",
      subtitle: "Direct brain-computer interface technology for seamless integration",
      cta: "Connect",
      link: "/pages/NeuralInterfaceRevolution2027",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/90 to-purple-900/90"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${bannerContent[currentSlide].bgColor} backdrop-blur-sm`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl animate-pulse">
                  {bannerContent[currentSlide].title.split(' ')[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {bannerContent[currentSlide].title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {bannerContent[currentSlide].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.a
                  href={bannerContent[currentSlide].link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${bannerContent[currentSlide].color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  {bannerContent[currentSlide].cta} →
                </motion.a>
                
                <button
                  onClick={handleClose}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerContent.map((_, index) => (
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
  );
};

export default RevolutionaryContentBanner2027;