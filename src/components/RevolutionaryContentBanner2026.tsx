import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const contentItems = [
    {
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Experience cutting-edge innovations",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      icon: "🚀",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Ultimate AI Consciousness 2025",
      description: "Meet conscious artificial intelligence",
      link: "/pages/UltimateAIConsciousness2025",
      icon: "🧠",
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Quantum Reality Engine 2025",
      description: "Manipulate quantum realities",
      link: "/pages/QuantumRealityEngine2025",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technological breakthroughs that are reshaping our understanding of reality and consciousness
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-center text-sm">{item.description}</p>
              <a
                href={item.link}
                className={`block w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="/pages/RevolutionaryTechBreakthrough2025"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            View All Revolutionary Content →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;