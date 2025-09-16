import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 Revolutionary AI Technology 2026",
      subtitle: "Experience the future with conscious AI systems",
      cta: "Explore Now",
      link: "/pages/AIInnovationHub2026",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "⚛️ Quantum Computing Breakthrough",
      subtitle: "Solve impossible problems with quantum power",
      cta: "Learn More",
      link: "/pages/RevolutionaryTechShowcase2026",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "🧠 Neural Interface Revolution",
      subtitle: "Direct brain-computer communication is here",
      cta: "Discover",
      link: "/pages/ComprehensiveServices2026",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "🌟 Holographic Displays",
      subtitle: "True 3D holograms without glasses",
      cta: "Experience",
      link: "/pages/RevolutionaryTechShowcase2026",
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${slides[currentSlide].color} text-white py-4 px-6 relative`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 container mx-auto flex items-center justify-between">
          <div className="flex-1">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="text-2xl animate-bounce">
                {slides[currentSlide].title.split(' ')[0]}
              </div>
              <div>
                <h3 className="text-lg font-bold">{slides[currentSlide].title}</h3>
                <p className="text-sm opacity-90">{slides[currentSlide].subtitle}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={slides[currentSlide].link}
              className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {slides[currentSlide].cta}
            </a>
            
            {/* Slide indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Animated progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <motion.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2026;