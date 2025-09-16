import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2025: React.FC = () => {
  const contentCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      description: "Revolutionary AI technologies and consciousness systems",
      technologies: ["Quantum AI", "Neural Networks", "Consciousness Computing", "Predictive Analytics"],
      color: "from-purple-600 to-indigo-600",
      borderColor: "border-purple-400/30",
      bgColor: "from-purple-600/30 to-indigo-600/30"
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      description: "Breakthrough quantum computing and quantum consciousness",
      technologies: ["Quantum Processors", "Quantum Cryptography", "Quantum AI", "Quantum Networks"],
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400/30",
      bgColor: "from-cyan-600/30 to-blue-600/30"
    },
    {
      title: "Space Technology",
      icon: "🚀",
      description: "Advanced space exploration and colonization technologies",
      technologies: ["Neural Space Travel", "Dimensional Portals", "Space Colonies", "Interstellar Communication"],
      color: "from-orange-600 to-red-600",
      borderColor: "border-orange-400/30",
      bgColor: "from-orange-600/30 to-red-600/30"
    },
    {
      title: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces and neural enhancement",
      technologies: ["BCI Technology", "Neural Implants", "Thought Control", "Memory Enhancement"],
      color: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400/30",
      bgColor: "from-emerald-600/30 to-teal-600/30"
    },
    {
      title: "Reality Manipulation",
      icon: "🔮",
      description: "Control and manipulate reality through quantum fields",
      technologies: ["Matter Control", "Time Manipulation", "Gravity Control", "Dimensional Access"],
      color: "from-violet-600 to-purple-600",
      borderColor: "border-violet-400/30",
      bgColor: "from-violet-600/30 to-purple-600/30"
    },
    {
      title: "Energy Revolution",
      icon: "⚡",
      description: "Unlimited clean energy from quantum sources",
      technologies: ["Zero-Point Energy", "Dimensional Harvesting", "Fusion Power", "Wireless Energy"],
      color: "from-yellow-600 to-orange-600",
      borderColor: "border-yellow-400/30",
      bgColor: "from-yellow-600/30 to-orange-600/30"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ultimate Content Showcase
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Explore our comprehensive collection of revolutionary technologies, breakthrough innovations, and future-forward solutions that will transform your world
          </motion.p>
        </div>

        {/* Content Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-xl p-8 border ${category.borderColor} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{category.title}</h3>
              <p className="text-center mb-6 opacity-90">{category.description}</p>
              
              <div className="space-y-2 mb-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm opacity-80">{tech}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={`/pages/${category.title.replace(/\s+/g, '')}2025`}
                className={`block w-full bg-white ${category.color.replace('from-', 'text-').replace(' to-', '-')} py-3 rounded-lg hover:opacity-80 transition-all duration-300 font-semibold text-center`}
              >
                Explore {category.title} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Featured Content Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-lg font-semibold mb-1">Technologies</div>
            <div className="text-blue-200 text-sm">Available in our library</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-1">Success Rate</div>
            <div className="text-purple-200 text-sm">Across all implementations</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-lg font-semibold mb-1">Support</div>
            <div className="text-cyan-200 text-sm">Expert assistance available</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Possibilities</div>
            <div className="text-emerald-200 text-sm">For your transformation</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to reshape their industries and create the future
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Revolution
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcase2025;