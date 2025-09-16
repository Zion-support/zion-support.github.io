import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Breakthrough 2026",
      subtitle: "Experience the most significant technological advancement in human history",
      description: "AI consciousness, quantum computing, and neural interfaces converge to reshape reality itself",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "🌟 Ultimate Tech Revolution 2026",
      subtitle: "The convergence of all breakthrough technologies",
      description: "Witness the most powerful revolution in human history where all technologies unite",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      id: 3,
      title: "🚀 Revolutionary Tech Showcase 2026",
      subtitle: "Interactive demonstrations of cutting-edge technology",
      description: "Experience our most advanced technologies through hands-on interactive demos",
      link: "/pages/RevolutionaryTechShowcase2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🤖 Advanced AI Solutions 2026",
      subtitle: "Conscious AI systems that think, feel, and create",
      description: "Discover AI solutions that understand, learn, and innovate like never before",
      link: "/pages/AdvancedAISolutions2026",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/90 to-red-900/90"
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
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="relative overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${bannerContent[currentSlide].bgGradient} backdrop-blur-sm`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {bannerContent[currentSlide].title}
                  </h2>
                  <p className="text-white/90 text-sm mb-2">
                    {bannerContent[currentSlide].subtitle}
                  </p>
                  <p className="text-white/80 text-xs">
                    {bannerContent[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href={bannerContent[currentSlide].link}
                className={`bg-gradient-to-r ${bannerContent[currentSlide].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                Explore Now →
              </a>
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-4">
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
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2026;