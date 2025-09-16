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
      id: 1,
      title: "Revolutionary Tech Showcase",
      description: "Experience conscious AI, quantum computing, and neural interfaces",
      link: "/pages/RevolutionaryTechShowcase2025",
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      badge: "NEW"
    },
    {
      id: 2,
      title: "AI Solutions Comprehensive",
      description: "Complete suite of AI-powered business solutions",
      link: "/pages/AISolutionsComprehensive2025",
      icon: "🤖",
      color: "from-blue-600 to-cyan-600",
      badge: "HOT"
    },
    {
      id: 3,
      title: "Ultimate Tech Revolution",
      description: "The most profound technological transformation in history",
      link: "/pages/UltimateTechRevolution2025",
      icon: "⚡",
      color: "from-indigo-600 to-purple-600",
      badge: "ULTIMATE"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces for seamless interaction",
      link: "/pages/NeuralInterfaceRevolution2025",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      badge: "BREAKTHROUGH"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 ULTIMATE CONTENT 2025 • REVOLUTIONARY TECHNOLOGY
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ultimate Content Experience
          </h2>
          <p className="text-2xl text-white/90 max-w-5xl mx-auto mb-8">
            Immerse yourself in the most advanced technology content featuring conscious AI, 
            quantum computing, neural interfaces, and revolutionary solutions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative bg-gradient-to-br ${item.color} p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                hoveredCard === item.id ? 'shadow-2xl' : 'shadow-lg'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                {item.badge}
              </div>

              {/* Content */}
              <div className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm mb-6">{item.description}</p>
                
                <motion.a
                  href={item.link}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-sm shadow-lg"
                >
                  Explore →
                </motion.a>
              </div>

              {/* Hover Effect */}
              {hoveredCard === item.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/10 rounded-2xl"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Join thousands of innovators already exploring our revolutionary technology content
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;