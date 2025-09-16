import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Revolutionary AI Systems",
      description: "Experience the next generation of artificial intelligence",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      features: [
        "Conscious AI Agents",
        "Emotional Intelligence",
        "Creative Problem Solving",
        "Self-Learning Systems"
      ],
      demo: "Launch AI Demo"
    },
    quantum: {
      title: "Quantum Computing",
      description: "Breakthrough quantum technology that solves impossible problems",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Supremacy",
        "Reality Simulation",
        "Infinite Processing",
        "Parallel Universes"
      ],
      demo: "Launch Quantum Demo"
    },
    neural: {
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces that expand consciousness",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Consciousness Upload",
        "Digital Immortality"
      ],
      demo: "Launch Neural Demo"
    },
    interdimensional: {
      title: "Interdimensional Tech",
      description: "Technology that allows travel between dimensions",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: [
        "Dimensional Portals",
        "Multiverse Access",
        "Reality Manipulation",
        "Time Travel"
      ],
      demo: "Launch Portal Demo"
    }
  };

  const currentTech = technologies[activeTech as keyof typeof technologies];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 INTERACTIVE TECH SHOWCASE • 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Interactive Technology Showcase 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Experience our cutting-edge technology solutions with interactive features and real-time demonstrations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Technology Selection */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Choose Your Technology:</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(technologies).map((tech) => (
                <motion.button
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTech(tech)}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    activeTech === tech
                      ? `bg-gradient-to-r ${technologies[tech as keyof typeof technologies].color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className="text-4xl mb-3">{technologies[tech as keyof typeof technologies].icon}</div>
                  <div className="font-semibold text-sm">
                    {technologies[tech as keyof typeof technologies].title.split(' ')[0]}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Technology Details */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{currentTech.icon}</div>
              <h4 className="text-2xl font-bold mb-2">{currentTech.title}</h4>
              <p className="text-lg opacity-90">{currentTech.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h5 className="text-lg font-semibold">Key Features:</h5>
              {currentTech.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-2 h-2 bg-gradient-to-r ${currentTech.color} rounded-full`}></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-gradient-to-r ${currentTech.color} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300`}
            >
              {currentTech.demo}
            </motion.button>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of innovators who are already using our revolutionary technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Your Journey →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;