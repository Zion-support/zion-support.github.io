import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Consciousness Transfer",
      description: "Revolutionary technology for transferring human consciousness to digital systems",
      icon: "🧠",
      features: [
        "Complete memory preservation",
        "Emotional state transfer",
        "Personality continuity",
        "Digital body creation"
      ],
      demo: "Experience consciousness transfer simulation",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      description: "Technology that can manipulate quantum states to create and control reality",
      icon: "⚛️",
      features: [
        "Matter creation from energy",
        "Physics law modification",
        "Dimensional travel",
        "Time manipulation"
      ],
      demo: "Witness reality manipulation in action",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Interdimensional Communication",
      description: "Breakthrough technology enabling communication across parallel universes",
      icon: "🌌",
      features: [
        "Parallel universe access",
        "Cross-dimensional data transfer",
        "Alternate reality exploration",
        "Universal knowledge sharing"
      ],
      demo: "Connect with parallel universes",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Synthetic Life Creation",
      description: "Technology to create completely synthetic life forms with consciousness",
      icon: "🧬",
      features: [
        "Synthetic DNA creation",
        "Consciousness programming",
        "Biological system design",
        "Life form customization"
      ],
      demo: "Create synthetic life forms",
      color: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2028
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2028
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Experience the most advanced technologies of 2028 with interactive demos and real-time demonstrations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Select Technology</h3>
          {technologies.map((tech, index) => (
            <motion.button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`w-full p-6 rounded-xl border-2 transition-all duration-300 ${
                activeTech === index
                  ? 'border-purple-400 bg-purple-600/20'
                  : 'border-gray-600 bg-gray-800/50 hover:border-purple-500'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{tech.icon}</div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{tech.name}</h4>
                  <p className="text-sm opacity-75">{tech.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {technologies[activeTech].name}
              </h3>
              <p className="text-gray-300 mb-6">{technologies[activeTech].description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {technologies[activeTech].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-semibold mb-2">Interactive Demo:</h4>
              <p className="text-gray-300 text-sm mb-4">{technologies[activeTech].demo}</p>
              <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Start Demo →
              </button>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More About {technologies[activeTech].name}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Stats */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            100+
          </div>
          <div className="text-gray-300">Advanced Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            99.99%
          </div>
          <div className="text-gray-300">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            24/7
          </div>
          <div className="text-gray-300">Demo Availability</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ∞
          </div>
          <div className="text-gray-300">Possibilities</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;