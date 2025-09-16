import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      title: "🧠 NEW: AI Innovation Hub 2025",
      subtitle: "The Future of Artificial Intelligence is Here",
      description: "Explore conscious AI systems, quantum neural networks, and autonomous agents that are reshaping our world",
      link: "/pages/AIInnovationHub2025",
      color: "from-purple-500 to-pink-600",
      icon: "🧠",
      badge: "BREAKTHROUGH"
    },
    {
      title: "⚡ REVOLUTIONARY: Tech Breakthrough 2025",
      subtitle: "Witness the Most Significant Technological Breakthroughs",
      description: "Discover conscious AI, quantum neural fusion, neural interfaces, and reality engineering technologies",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-blue-500 to-cyan-600",
      icon: "⚡",
      badge: "REVOLUTIONARY"
    },
    {
      title: "🌟 ULTIMATE: Content Showcase 2025",
      subtitle: "The Most Comprehensive Technology Content Collection",
      description: "Access cutting-edge research, articles, and insights from leading experts in AI, quantum computing, and more",
      link: "/pages/UltimateContentShowcase2025",
      color: "from-green-500 to-teal-600",
      icon: "🌟",
      badge: "ULTIMATE"
    },
    {
      title: "🚀 NEW: Interactive Tech Demos",
      subtitle: "Experience Technology Like Never Before",
      description: "Try our interactive demonstrations of the latest AI, quantum computing, and neural interface technologies",
      link: "/pages/InteractiveTechShowcase2025",
      color: "from-orange-500 to-red-600",
      icon: "🚀",
      badge: "INTERACTIVE"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPromotion = promotions[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className={`bg-gradient-to-r ${currentPromotion.color} text-white py-8 px-4 relative`}>
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="container mx-auto relative z-10">
              <div className="flex items-center justify-between">
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-6"
                  >
                    {/* Icon */}
                    <div className="text-6xl animate-pulse">
                      {currentPromotion.icon}
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold animate-pulse">
                          {currentPromotion.badge}
                        </span>
                        <span className="text-sm opacity-90">JANUARY 2025</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {currentPromotion.title}
                      </h2>
                      <p className="text-lg md:text-xl opacity-90 mb-3">
                        {currentPromotion.subtitle}
                      </p>
                      <p className="text-sm md:text-base opacity-80 max-w-2xl">
                        {currentPromotion.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3 ml-8">
                  <motion.a
                    href={currentPromotion.link}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-center min-w-[200px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Now →
                  </motion.a>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ✕ Dismiss
                  </button>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {promotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 backdrop-blur-sm border-t border-gray-200 py-4 px-4"
          >
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">New Content Available:</span>
                    <span className="ml-2">{promotions.length} revolutionary pages</span>
                  </div>
                  <div className="flex space-x-4">
                    {promotions.slice(0, 3).map((promo, index) => (
                      <a
                        key={index}
                        href={promo.link}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r ${promo.color} text-white hover:shadow-lg transition-all duration-300`}
                      >
                        {promo.icon} {promo.badge}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    View All Content
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2025;