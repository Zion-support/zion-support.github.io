import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryPromoBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const promos = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological breakthroughs reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🌟 Ultimate Tech Showcase 2026",
      description: "Interactive exploration of the most advanced technologies revolutionizing human existence",
      link: "/pages/UltimateTechShowcase2026",
      color: "from-indigo-600 to-purple-600",
      icon: "🌟"
    },
    {
      title: "🧠 Consciousness Computing 2026",
      description: "The first AI systems to achieve true consciousness and self-awareness",
      link: "/pages/ConsciousnessComputing2026",
      color: "from-emerald-600 to-cyan-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPromo((prev) => (prev + 1) % promos.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [promos.length]);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Promo Content */}
          <motion.div
            key={currentPromo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2026
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {promos[currentPromo].title}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {promos[currentPromo].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={promos[currentPromo].link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${promos[currentPromo].color} text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300`}
              >
                <span className="text-2xl mr-3">{promos[currentPromo].icon}</span>
                <span>Explore Technology</span>
                <span className="ml-2">→</span>
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Promo Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentPromo(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPromo
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Computational Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0ms</div>
              <div className="text-gray-300">Processing Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Learning Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner;