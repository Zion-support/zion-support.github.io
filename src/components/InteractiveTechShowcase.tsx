import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Revolution",
      icon: "🧠",
      description: "Next-generation artificial intelligence with autonomous reasoning and quantum-enhanced processing",
      features: [
        "Autonomous Decision Making",
        "Quantum Neural Networks",
        "Predictive Analytics",
        "Natural Language Processing"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: "⚛️",
      description: "Revolutionary quantum processing power that solves complex problems in seconds",
      features: [
        "Quantum Supremacy",
        "Cryptographic Security",
        "Molecular Simulation",
        "Optimization Algorithms"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces enabling seamless human-machine interaction",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Sensory Augmentation",
        "Cognitive Amplification"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      name: "Biotech Revolution",
      icon: "🧪",
      description: "Advanced biotechnology transforming healthcare and human capabilities",
      features: [
        "Gene Therapy",
        "Regenerative Medicine",
        "Synthetic Biology",
        "Personalized Treatment"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { label: "Processing Power", value: "10^18 FLOPS", icon: "⚡" },
    { label: "Data Processing", value: "1 Zettabyte/s", icon: "📊" },
    { label: "Neural Connections", value: "1 Trillion", icon: "🔗" },
    { label: "Success Rate", value: "99.9%", icon: "✅" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology through our revolutionary innovations
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeTech === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveTech(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-8 h-full shadow-2xl border-2 ${
                activeTech === index ? 'border-white' : 'border-transparent'
              } transition-all duration-300`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{tech.description}</p>
                </div>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Technology Details */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-16"
          key={activeTech}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                <span className="text-4xl mr-4">{technologies[activeTech].icon}</span>
                {technologies[activeTech].name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {technologies[activeTech].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {technologies[activeTech].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="text-white font-semibold">{feature}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-white/20">
                  <div className="text-8xl animate-pulse">
                    {technologies[activeTech].icon}
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🧪</div>
            <h4 className="text-xl font-bold mb-3">Live Simulation</h4>
            <p className="text-sm opacity-90 mb-4">Watch real-time simulations of our technologies in action</p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Simulation
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-bold mb-3">Performance Analytics</h4>
            <p className="text-sm opacity-90 mb-4">View detailed performance metrics and analytics</p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Analytics
            </button>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;