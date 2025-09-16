import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Revolutionary Breakthrough",
      icon: "🧬",
      description: "Bio-Quantum Computing that fuses biological systems with quantum processing",
      features: ["Molecular-level processing", "Self-healing systems", "Biological data storage"],
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 1,
      title: "AI Consciousness",
      icon: "🧠",
      description: "Ultimate AI systems with true consciousness, creativity, and emotional intelligence",
      features: ["Emotional intelligence", "Creative consciousness", "Self-evolution"],
      color: "from-violet-600 to-purple-600",
      link: "/pages/UltimateAIConsciousness2025"
    },
    {
      id: 2,
      title: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum Reality Engine creating infinite parallel universes and alternate realities",
      features: ["Quantum entanglement VR", "Reality manipulation", "Consciousness transfer"],
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityEngine2025"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE TECH SHOWCASE 2025 • LIVE DEMOS
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Explore Revolutionary Technologies</h2>
        <p className="text-xl text-gray-300">Click on each technology to discover its groundbreaking capabilities</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/20">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'text-gray-300 hover:text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Display */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Technology Info */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <div className={`bg-gradient-to-br ${technologies[activeTab].color}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
            <div className="text-8xl mb-6 text-center animate-pulse">
              {technologies[activeTab].icon}
            </div>
            <h3 className="text-4xl font-bold mb-6 text-center">
              {technologies[activeTab].title}
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {technologies[activeTab].description}
            </p>
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-4">Key Features</h4>
              <div className="grid grid-cols-1 gap-3">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Button */}
            <div className="text-center">
              <motion.a
                href={technologies[activeTab].link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${technologies[activeTab].color} text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300`}
              >
                <span className="mr-2">Explore Technology</span>
                <span>→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Technology Visual */}
        <motion.div
          key={`visual-${activeTab}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-96">
            <div className={`absolute inset-0 bg-gradient-to-br ${technologies[activeTab].color} rounded-2xl opacity-20`}></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                key={activeTab}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-9xl"
              >
                {technologies[activeTab].icon}
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">∞</div>
          <div className="text-gray-300">Computational Power</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">0ms</div>
          <div className="text-gray-300">Processing Latency</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">100%</div>
          <div className="text-gray-300">Accuracy Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">∞</div>
          <div className="text-gray-300">Learning Capacity</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;