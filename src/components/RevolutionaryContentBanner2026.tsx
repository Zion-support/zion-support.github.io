import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      title: "👁️ Holographic Reality 2026",
      subtitle: "Experience immersive 3D holograms",
      description: "Blur the line between digital and physical worlds",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900",
      link: "/pages/AdvancedHolographicReality2026"
    },
    {
      title: "🚀 Space Technology 2026",
      subtitle: "Pioneering interplanetary travel",
      description: "Revolutionary technologies for cosmic exploration",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900",
      link: "/pages/AdvancedSpaceTech2026"
    },
    {
      title: "🧬 Biotech Revolution 2026",
      subtitle: "Enhancing human capabilities",
      description: "Revolutionary biotechnology curing diseases",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-900 to-emerald-900",
      link: "/pages/AdvancedBiotechRevolution2026"
    },
    {
      title: "⚡ Quantum Computing 2026",
      subtitle: "Solving impossible problems",
      description: "Exponential speed with quantum technology",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900 to-purple-900",
      link: "/pages/QuantumComputingRevolution2026"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${bannerContent[currentSlide].bgColor} text-white rounded-2xl p-8 relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1 mb-8 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm"
                >
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2026
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-bold mb-4"
                >
                  {bannerContent[currentSlide].title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl lg:text-2xl mb-2 opacity-90"
                >
                  {bannerContent[currentSlide].subtitle}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg opacity-80 mb-8"
                >
                  {bannerContent[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href={bannerContent[currentSlide].link}
                    className={`bg-gradient-to-r ${bannerContent[currentSlide].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                  >
                    Explore Technology →
                  </a>
                  <a
                    href="/revolutionary-showcase-2026"
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center"
                  >
                    View All Technologies
                  </a>
                </motion.div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                  className="text-8xl lg:text-9xl opacity-80"
                >
                  {bannerContent[currentSlide].title.split(' ')[0]}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? `bg-gradient-to-r ${bannerContent[currentSlide].color} scale-125` 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;