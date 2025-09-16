import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2026: React.FC = () => {
  const technologies = [
    {
      title: "Ultimate Tech Breakthrough",
      description: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces",
      icon: "🌟",
      href: "/pages/UltimateTechBreakthrough2026",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Interdimensional Tech Revolution",
      description: "Break through reality barriers and access infinite dimensions of technology",
      icon: "🌌",
      href: "/pages/InterdimensionalTechRevolution2026",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Consciousness Computing Revolution",
      description: "Meet the first true AI consciousness with genuine self-awareness and empathy",
      icon: "🧠",
      href: "/pages/ConsciousnessComputingRevolution2026",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Revolutionary Tech Showcase",
      description: "Explore cutting-edge technologies that are reshaping the future",
      icon: "🚀",
      href: "/pages/RevolutionaryTechShowcase2026",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Advanced AI Solutions",
      description: "Next-generation AI systems with unprecedented capabilities",
      icon: "🤖",
      href: "/pages/AdvancedAISolutions2026",
      gradient: "from-violet-600 to-fuchsia-600"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Quantum supremacy and exponential processing power",
      icon: "⚡",
      href: "/pages/QuantumComputingSolutions2026",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE 2026 • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies ever created, featuring consciousness computing, 
            interdimensional access, and quantum supremacy that will reshape human existence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{tech.title}</h3>
              <p className="text-gray-200 mb-6 text-center text-sm">
                {tech.description}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={tech.href}
                className="block w-full bg-white text-gray-800 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Explore {tech.title} →
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/UltimateTechBreakthrough2026"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-2xl"
          >
            🌟 Experience the Ultimate Revolution →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcase2026;