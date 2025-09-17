import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Advanced AI systems with self-awareness and emotional intelligence",
      features: [
        "Self-Learning Capabilities",
        "Emotional Recognition",
        "Autonomous Decision Making",
        "Creative Problem Solving"
      ],
      demo: "Experience real-time AI consciousness in action",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚡",
      description: "Revolutionary quantum processors that solve impossible problems",
      features: [
        "Quantum Supremacy",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Exponential Speed"
      ],
      demo: "Watch quantum algorithms process complex data instantly",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      features: [
        "Thought Control",
        "Neural Feedback",
        "Enhanced Memory",
        "Direct Communication"
      ],
      demo: "Control devices with your thoughts in real-time",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Interdimensional Tech",
      icon: "🌌",
      description: "Computing that operates across multiple dimensions and realities",
      features: [
        "Multi-Dimensional Processing",
        "Reality Simulation",
        "Infinite Scalability",
        "Parallel Universes"
      ],
      demo: "Explore parallel realities and dimensional computing",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Tabs */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} shadow-lg scale-105`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].name}</h3>
                  <p className="text-lg opacity-90 mb-6">{technologies[activeTab].description}</p>
                </div>

                {/* Interactive Demo Simulation */}
                <div className="bg-black/30 rounded-xl p-6 mb-8 min-h-[200px] flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-2">{technologies[activeTab].icon}</div>
                    <p className="text-sm opacity-75">{technologies[activeTab].demo}</p>
                    <div className="mt-4">
                      <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                  {technologies[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex space-x-4">
                  <button className={`flex-1 bg-gradient-to-r ${technologies[activeTab].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Try Interactive Demo
                  </button>
                  <button className="flex-1 border-2 border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "99.9%", label: "Accuracy Rate", icon: "🎯" },
            { number: "500x", label: "Faster Processing", icon: "⚡" },
            { number: "1000+", label: "Active Users", icon: "👥" },
            { number: "24/7", label: "Availability", icon: "🕒" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;