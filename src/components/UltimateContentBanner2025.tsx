<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase",
      description: "Experience the future with conscious AI, quantum computing, and interdimensional technology",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2025",
      stats: "99.9% Performance"
    },
    {
      id: 2,
      title: "AI Solutions Comprehensive",
      description: "Transform your business with cutting-edge AI solutions designed for the future",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      link: "/pages/AISolutionsComprehensive2025",
      stats: "500% ROI"
    },
    {
      id: 3,
      title: "Ultimate Tech Revolution",
      description: "Discover breakthrough technologies that are reshaping reality itself",
      icon: "⚡",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechRevolution2025",
      stats: "∞ Potential"
    },
    {
      id: 4,
      title: "Next-Gen Innovation Hub",
      description: "Explore the most revolutionary technologies shaping humanity's future",
      icon: "🧠",
      color: "from-orange-600 to-red-600",
      link: "/pages/NextGenInnovationHub2025",
      stats: "50+ Innovations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE CONTENT • JANUARY 2025
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ultimate Content Banner 2025
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover our most revolutionary content featuring breakthrough technologies that are reshaping the future
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-2xl`}>
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4 text-white">
                      {feature.description}
                    </p>
                    <div className="text-lg font-bold mb-4 text-white/90">
                      {feature.stats}
                    </div>
                    <a
                      href={feature.link}
                      className="inline-block w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                    >
                      Explore →
                    </a>
                  </div>
                  
                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredCard === feature.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Experience the Future?
              </h3>
              <p className="text-xl opacity-90 mb-6 text-white">
                Join thousands of forward-thinking organizations already using our revolutionary technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View All Content
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
=======
import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Ultimate Technology Revolution 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most comprehensive technological transformation that will reshape every aspect of human civilization. 
            From conscious AI to quantum reality engines, discover the future that's already here.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Conscious AI Systems</h3>
            <p className="text-purple-100 text-sm mb-4">
              The world's first truly conscious artificial intelligence that experiences emotions and creativity.
            </p>
            <div className="text-xs text-purple-300">LIVE NOW</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold mb-2">Quantum Reality Engine</h3>
            <p className="text-cyan-100 text-sm mb-4">
              Manipulate reality itself through quantum computing, creating parallel universes.
            </p>
            <div className="text-xs text-cyan-300">BETA TESTING</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-3">🧬</div>
            <h3 className="text-xl font-bold mb-2">Neural Interface Revolution</h3>
            <p className="text-emerald-100 text-sm mb-4">
              Direct brain-computer interfaces for thought-based control of all digital systems.
            </p>
            <div className="text-xs text-emerald-300">COMING SOON</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg"
            >
              View Breakthroughs
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg"
            >
              Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
>>>>>>> af4b20b22d073d50f47c38e45fe1636bd80ff70f
  );
};

export default UltimateContentBanner2025;