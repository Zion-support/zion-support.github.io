import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentItems = [
    {
      title: "Revolutionary Tech Showcase",
      description: "Experience cutting-edge technology demonstrations",
      link: "/pages/RevolutionaryTechShowcase2025",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
      stats: "50+ Technologies"
    },
    {
      title: "AI Solutions Comprehensive",
      description: "Complete suite of AI-powered business solutions",
      link: "/pages/AISolutionsComprehensive2025",
      icon: "🤖",
      color: "from-blue-500 to-indigo-500",
      stats: "99.9% Accuracy"
    },
    {
      title: "Ultimate Tech Revolution",
      description: "Witness the convergence of revolutionary technologies",
      link: "/pages/UltimateTechRevolution2025",
      icon: "⚡",
      color: "from-cyan-500 to-teal-500",
      stats: "1000x Faster"
    },
    {
      title: "Interactive Demos",
      description: "Hands-on experience with future technology",
      link: "/pages/InteractiveTechShowcase2025",
      icon: "🎮",
      color: "from-green-500 to-emerald-500",
      stats: "Real-time"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 mb-12 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white animate-pulse">
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate Content Experience
          </h2>
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto">
            Immerse yourself in the most revolutionary technology content of 2025
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group cursor-pointer"
            >
              <a href={item.link} className="block">
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 h-full transition-all duration-300 ${
                  hoveredCard === index ? 'transform scale-105 shadow-2xl' : 'hover:shadow-lg'
                }`}>
                  <div className="text-4xl mb-4 text-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-4 text-center">{item.description}</p>
                  <div className="text-center">
                    <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.stats}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Featured Content Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">🌟 Featured: Revolutionary Technology 2025</h3>
          <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
            Discover our most advanced technology showcase featuring AI consciousness, quantum computing, and neural interfaces
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Explore Showcase
            </a>
            <a
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              ⚡ Join Revolution
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        >
          {[
            { label: "Technologies", value: "100+" },
            { label: "Success Rate", value: "99.9%" },
            { label: "Innovation", value: "1000x" },
            { label: "Future Ready", value: "∞" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-sm text-purple-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;