import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryPromoBanner: React.FC = () => {
  const newContent = [
    {
      title: "Advanced AI Transformation",
      description: "Complete guide to AI transformation with autonomous agents",
      href: "/pages/AdvancedAITransformation2025",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      badge: "NEW"
    },
    {
      title: "Next-Gen Tech Showcase",
      description: "Revolutionary technologies reshaping our world",
      href: "/pages/NextGenTechShowcase2025",
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Quantum Computing Revolution",
      description: "Experience exponential computing power",
      href: "/pages/QuantumComputingRevolution2025",
      icon: "⚡",
      color: "from-emerald-500 to-teal-500",
      badge: "REVOLUTIONARY"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer communication",
      href: "/pages/NeuralInterfaceRevolution2025",
      icon: "🧬",
      color: "from-orange-500 to-red-500",
      badge: "FUTURE"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">Experience the Future of Technology</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring cutting-edge AI, Quantum Computing, 
            Neural Interfaces, and Next-Generation Technologies
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {newContent.map((content, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`text-4xl bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                  {content.icon}
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  content.badge === 'NEW' ? 'bg-green-500/20 text-green-300' :
                  content.badge === 'BREAKTHROUGH' ? 'bg-purple-500/20 text-purple-300' :
                  content.badge === 'REVOLUTIONARY' ? 'bg-red-500/20 text-red-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {content.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{content.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{content.description}</p>
              <a 
                href={content.href}
                className={`inline-block w-full bg-gradient-to-r ${content.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
              >
                Explore Now →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="/pages/ComprehensiveTechInsights2026"
            className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30"
          >
            🌟 View All Revolutionary Content →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner;