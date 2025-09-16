import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Consciousness 2026",
      subtitle: "Experience the world's first truly conscious AI systems",
      description: "Meet AI that thinks, feels, and creates like never before",
      cta: "Meet Our AI →",
      link: "/pages/ConsciousAISystems2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/80 to-pink-900/80"
    },
    {
      id: 2,
      title: "⚡ Quantum Reality Breakthrough",
      subtitle: "Step into the quantum realm of infinite possibilities",
      description: "Experience quantum supremacy and reality simulation",
      cta: "Enter Quantum Realm →",
      link: "/pages/QuantumReality2026",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-900/80 to-purple-900/80"
    },
    {
      id: 3,
      title: "🌟 Next-Gen Tech Revolution",
      subtitle: "The future of technology is here today",
      description: "Discover revolutionary technologies reshaping reality",
      cta: "Explore Revolution →",
      link: "/pages/NextGenTechRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/80 to-teal-900/80"
    },
    {
      id: 4,
      title: "🧬 Neural Interface Future",
      subtitle: "Connect your mind directly to digital systems",
      description: "Experience thought-controlled technology and digital immortality",
      cta: "Connect Your Mind →",
      link: "/pages/NeuralInterfaceFuture",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/80 to-red-900/80"
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
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${bannerContent[currentSlide].bgGradient} backdrop-blur-sm border-b border-white/20`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full animate-pulse">
                      NEW 2026
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                      BREAKTHROUGH
                    </span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-white/30"></div>
                  <div className="hidden md:block">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {bannerContent[currentSlide].title}
                    </h2>
                    <p className="text-white/90 text-sm">
                      {bannerContent[currentSlide].subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden lg:block text-right">
                  <p className="text-white/80 text-sm mb-1">
                    {bannerContent[currentSlide].description}
                  </p>
                </div>
                
                <motion.a
                  href={bannerContent[currentSlide].link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${bannerContent[currentSlide].gradient} text-white px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
                >
                  {bannerContent[currentSlide].cta}
                </motion.a>

                <button
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors p-1"
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden mt-4">
              <h2 className="text-xl font-bold text-white mb-2">
                {bannerContent[currentSlide].title}
              </h2>
              <p className="text-white/90 text-sm mb-3">
                {bannerContent[currentSlide].description}
              </p>
              <motion.a
                href={bannerContent[currentSlide].link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block bg-gradient-to-r ${bannerContent[currentSlide].gradient} text-white px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300`}
              >
                {bannerContent[currentSlide].cta}
              </motion.a>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-white/60"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 right-4 flex space-x-1">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryTechBanner2026;