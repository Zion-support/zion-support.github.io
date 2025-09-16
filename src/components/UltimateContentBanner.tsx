import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      title: "🚀 NEW: Ultimate Tech Breakthrough 2026",
      subtitle: "Experience revolutionary technologies that will reshape our world",
      cta: "Explore Now",
      link: "/pages/UltimateTechBreakthrough2026",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🌟 Revolutionary Tech Showcase 2027",
      subtitle: "Interactive demos of cutting-edge AI, quantum, and neural technologies",
      cta: "Try Demo",
      link: "/pages/RevolutionaryTechShowcase2027",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "📈 Ultimate Tech Trends 2026",
      subtitle: "Discover the technologies that will define the next decade",
      cta: "Read Report",
      link: "/pages/UltimateTechTrends2026",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${bannerContent[currentSlide].bgColor} backdrop-blur-sm`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl animate-pulse">✨</div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {bannerContent[currentSlide].title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {bannerContent[currentSlide].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href={bannerContent[currentSlide].link}
                  className={`bg-gradient-to-r ${bannerContent[currentSlide].color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
                >
                  {bannerContent[currentSlide].cta} →
                </a>
                <button
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentBanner;