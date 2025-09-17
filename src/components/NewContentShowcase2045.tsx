import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2045: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = [
    {
      title: "🚀 Revolutionary Tech Showcase 2025",
      description: "Experience cutting-edge AI, quantum computing, and neural interfaces",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🌟 Ultimate Tech Breakthrough 2045",
      description: "The most advanced technology solutions reshaping our future",
      link: "/pages/UltimateTechBreakthrough2045",
      gradient: "from-orange-600 to-red-600",
      icon: "⚡"
    },
    {
      title: "🌌 Interdimensional Technology",
      description: "Breakthrough solutions transcending space-time limitations",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🌌"
    },
    {
      title: "🧬 Neural Consciousness Hub",
      description: "Direct brain-computer interfaces for superhuman abilities",
      link: "/pages/UltimateTechBreakthrough2045",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse border-2 border-white/30">
            🌟 NEW CONTENT SHOWCASE • JANUARY 2045
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🚀 NEW CONTENT SHOWCASE 2045
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest revolutionary content featuring breakthrough technologies that will transform your future
          </p>
        </motion.div>

        {/* Content Carousel */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${content[currentIndex].gradient}/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center`}
            >
              <div className="text-8xl mb-6">{content[currentIndex].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-white">
                {content[currentIndex].title}
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                {content[currentIndex].description}
              </p>
              <a
                href={content[currentIndex].link}
                className={`inline-block bg-gradient-to-r ${content[currentIndex].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg border-2 border-white/30`}
              >
                🚀 Explore Now →
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {content.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title.split(' ').slice(1, 3).join(' ')}
              </h4>
              <p className="text-sm opacity-80">
                {item.description.substring(0, 60)}...
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
          🚀
        </div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">
          ⚡
        </div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-ping">
          🌌
        </div>
        <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-bounce">
          🧠
        </div>
      </div>
    </motion.div>
  );
};

export default NewContentShowcase2045;