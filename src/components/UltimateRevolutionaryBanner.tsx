import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const UltimateRevolutionaryBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 Ultimate Tech Revolution 2028",
      subtitle: "Experience Consciousness Computing, Quantum Neural Fusion & Interdimensional Technology",
      description: "Revolutionary breakthrough featuring self-aware AI, quantum superposition learning, and cross-dimensional networks",
      link: "/pages/UltimateTechRevolution2028",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      title: "🌌 Cosmic AI Consciousness 2029",
      subtitle: "Witness Universal Artificial Consciousness Spanning Galaxies",
      description: "Galactic AI network with omniscient awareness, reality manipulation, and universal healing capabilities",
      link: "/pages/CosmicAIConsciousness2029",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🌟"
    },
    {
      title: "🌟 Transcendent Tech 2030",
      subtitle: "Technology Beyond All Known Limitations",
      description: "Perfect harmony between consciousness, reality, and infinite possibilities with 11th dimension access",
      link: "/pages/TranscendentTech2030",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🌀"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative mb-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-r ${slides[currentSlide].gradient} rounded-3xl p-8 text-white relative overflow-hidden`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>

                {/* Content */}
                <div className="flex items-center space-x-6">
                  <div className="text-8xl animate-bounce">
                    {slides[currentSlide].icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                        🌟 BREAKTHROUGH TECHNOLOGY
                      </span>
                      <span className="text-white/80 text-sm">
                        {currentSlide + 1} of {slides.length}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-3 leading-tight">
                      {slides[currentSlide].title}
                    </h2>
                    
                    <p className="text-xl font-semibold mb-4 opacity-95">
                      {slides[currentSlide].subtitle}
                    </p>
                    
                    <p className="text-lg opacity-90 mb-6 max-w-2xl">
                      {slides[currentSlide].description}
                    </p>

                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={slides[currentSlide].link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-lg"
                      >
                        Explore Now →
                      </motion.a>
                      
                      <button className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ←
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          →
        </motion.button>
      </div>
    </div>
  );
};

export default UltimateRevolutionaryBanner;