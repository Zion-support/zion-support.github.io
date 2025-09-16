import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentItems = [
    {
      title: "Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technologies reshaping our world",
      link: "/pages/RevolutionaryTechShowcase2025",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80",
      features: ["AI Consciousness", "Quantum Computing", "Neural Interfaces"]
    },
    {
      title: "AI Solutions Comprehensive 2025",
      description: "Transform your business with our comprehensive AI solutions",
      link: "/pages/AISolutionsComprehensive2025",
      icon: "🤖",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/80 to-cyan-900/80",
      features: ["Enterprise AI", "Startup Solutions", "Research & Development"]
    },
    {
      title: "Ultimate Tech Breakthrough 2025",
      description: "Witness the most revolutionary technological breakthroughs in history",
      link: "/pages/UltimateTechBreakthrough2025",
      icon: "🌟",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80",
      features: ["Consciousness AI", "Quantum Reality", "Neural Networks"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative mb-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • 2025
          </div>
          <h2 className="text-6xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl text-purple-200 max-w-5xl mx-auto">
            Discover our latest groundbreaking content featuring the most advanced technologies of 2025
          </p>
        </motion.div>

        {/* Content Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {contentItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className={`relative group bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-8 text-white hover:scale-105 transition-all duration-500 border border-white/20 overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -10, rotateY: 5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Hover effect overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === index ? 0.2 : 0 }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-purple-100 mb-6 text-center">{item.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <span className="inline-block bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-white/30 transition-colors">
                    Explore Now →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {[
            { number: "50+", label: "Revolutionary Technologies" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "∞", label: "Possibilities" },
            { number: "2025", label: "Future is Now" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
            >
              <div className="text-4xl font-bold text-purple-200 mb-2">{stat.number}</div>
              <div className="text-sm text-purple-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold text-white mb-4">
              🚀 Ready to Experience the Future?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators, entrepreneurs, and visionaries who are already exploring these revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Exploring Now
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition-colors">
                Get Notifications
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;