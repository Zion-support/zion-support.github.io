import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const newContent = [
    {
      title: "Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technologies reshaping humanity's future",
      link: "/pages/RevolutionaryTechShowcase2025",
      icon: "🚀",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "AI Solutions Comprehensive 2025",
      description: "Complete AI solutions for every business need and industry",
      link: "/pages/AISolutionsComprehensive2025",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Ultimate Tech Breakthrough 2025",
      description: "Revolutionary technologies that will fundamentally change humanity",
      link: "/pages/UltimateTechBreakthrough2025",
      icon: "⚡",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest groundbreaking content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{content.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {content.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center text-sm">
                {content.description}
              </p>
              <a 
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore Content →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;