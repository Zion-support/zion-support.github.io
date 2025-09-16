import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🌟 NEW: AI Innovation Hub 2025",
      description: "Discover revolutionary AI technologies that are reshaping our world",
      link: "/pages/AIInnovationHub2025",
      gradient: "from-blue-500 to-purple-600",
      icon: "🤖",
      badge: "BREAKTHROUGH"
    },
    {
      title: "🚀 NEW: Revolutionary Tech Showcase 2025",
      description: "Experience cutting-edge technologies with interactive demonstrations",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-500 to-pink-600",
      icon: "⚡",
      badge: "REVOLUTIONARY"
    },
    {
      title: "🧠 NEW: Ultimate Tech Breakthrough 2025",
      description: "Witness the most advanced technological breakthroughs reshaping reality",
      link: "/pages/UltimateTechBreakthrough2025",
      gradient: "from-indigo-500 to-cyan-600",
      icon: "🌌",
      badge: "ULTIMATE"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT AVAILABLE • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary New Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthrough technologies and interactive showcases
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-5xl mr-4">{promotions[currentSlide].icon}</div>
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white mb-2">
                        {promotions[currentSlide].badge}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {promotions[currentSlide].title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {promotions[currentSlide].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <a
                      href={promotions[currentSlide].link}
                      className={`bg-gradient-to-r ${promotions[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${promotions[currentSlide].gradient} rounded-xl flex items-center justify-center`}>
                    <div className="text-6xl opacity-50">
                      {promotions[currentSlide].icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {promotions.map((promotion, index) => (
            <motion.a
              key={index}
              href={promotion.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${promotion.gradient} text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{promotion.icon}</div>
                <div className="text-sm font-bold bg-white/20 px-2 py-1 rounded">
                  {promotion.badge}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{promotion.title}</h3>
              <p className="text-sm opacity-90">{promotion.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;