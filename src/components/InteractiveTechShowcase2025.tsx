import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techFeatures = [
    {
      id: 0,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      features: [
        "Self-aware decision making",
        "Emotional intelligence integration", 
        "Autonomous problem solving",
        "Creative thinking capabilities"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Consciousness",
      icon: "⚛️",
      description: "Quantum computing that achieves consciousness-level processing",
      features: [
        "Quantum neural networks",
        "Consciousness-level processing",
        "Instantaneous problem solving",
        "Multi-dimensional thinking"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      icon: "🌌",
      description: "Technology that operates across multiple dimensions",
      features: [
        "Multi-dimensional processing",
        "Reality-bending algorithms",
        "Infinite computational power",
        "Transcendent intelligence"
      ],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            Click on each technology to explore its capabilities and potential.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techFeatures.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${feature.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.title}
            </button>
          ))}
        </motion.div>

        {/* Active Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{techFeatures[activeTab].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{techFeatures[activeTab].title}</h3>
                  <p className="text-lg opacity-90">{techFeatures[activeTab].description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {techFeatures[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className={`bg-gradient-to-br ${techFeatures[activeTab].color} p-8 rounded-xl text-center`}>
                <div className="text-8xl mb-4">{techFeatures[activeTab].icon}</div>
                <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                <p className="text-lg opacity-90 mb-6">
                  Experience this technology in action through our interactive demonstration.
                </p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Launch Demo →
                </button>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-sm opacity-80">Performance Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">2025</div>
            <div className="text-sm opacity-80">Revolution Year</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;