<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-634d
=======
>>>>>>> cursor/create-and-deploy-new-content-2def
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 0,
      name: "AI Innovation Hub 2026",
      description: "Revolutionary AI technologies with consciousness and emotional intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Consciousness AI", "Quantum Neural Networks", "Predictive Intelligence", "Autonomous Agents"],
      demo: "Try AI Consciousness Demo",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 1,
      name: "Quantum Computing 2026",
      description: "Exponential computational power with quantum algorithms and quantum supremacy",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Molecular Simulation", "Quantum Machine Learning"],
      demo: "Calculate Quantum Power",
      link: "/pages/QuantumComputingSolutions2026"
    },
    {
      id: 2,
      name: "Neural Interface 2026",
      description: "Direct brain-computer communication with thought control and neural feedback",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Memory Enhancement"],
      demo: "Monitor Neural Activity",
      link: "/pages/NeuralInterfaceTechnology2026"
    },
    {
      id: 3,
      name: "Analytics Dashboard 2026",
      description: "AI-powered analytics with real-time insights and predictive modeling",
      icon: "📊",
      color: "from-slate-600 to-gray-600",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      demo: "View Live Dashboard",
      link: "/pages/AdvancedAnalyticsDashboard2026"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Technology Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.map((tech, index) => (
          <motion.button
            key={tech.id}
            onClick={() => setActiveTech(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTech === index
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.name}
          </motion.button>
        ))}
      </div>

      {/* Main Showcase Area */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Details */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className={`bg-gradient-to-br ${technologies[activeTech].color} p-8 rounded-2xl text-white`}>
            <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
            <p className="text-xl opacity-90 mb-6">{technologies[activeTech].description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={technologies[activeTech].link}
                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Technology
              </a>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
                {technologies[activeTech].demo}
              </button>
            </div>
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Real-time Performance</div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${technologies[activeTech].color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${75 + Math.random() * 20}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {75 + Math.floor(Math.random() * 20)}%
                  </span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-2">System Status</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Operational</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                activeTech === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveTech(index)}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{tech.name}</h4>
              <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
              
              {hoveredCard === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  {tech.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Technology Comparison</h3>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Technology</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Performance</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Innovation Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Market Ready</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className={activeTech === index ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{tech.icon}</span>
                        <span className="font-medium text-gray-800">{tech.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full`}
                            style={{ width: `${80 + index * 5}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{80 + index * 5}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                        Revolutionary
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                        Available Now
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
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

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/create-and-deploy-new-content-81d0
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-634d
=======
>>>>>>> cursor/create-and-deploy-new-content-2def
          </div>
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;