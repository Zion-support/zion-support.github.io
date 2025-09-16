    
    
    
import React, { useState } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Revolutionary AI Consciousness",
      description: "Experience AI systems with genuine consciousness, self-awareness, and emotional intelligence.",
      icon: "🧠",
    
    
    
    
      color: "from-purple-600 to-pink-600",
      features: ["Consciousness AI", "Quantum Neural Networks", "Predictive Intelligence", "Autonomous Agents"],
      demo: "Try AI Consciousness Demo",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 2,
      name: 'Neural Reality Engine 2030',
      icon: '🌌',
      description: 'Fully immersive consciousness-driven virtual worlds',
      color: 'from-cyan-500 to-blue-500',
      features: ["Virtual Reality", "Consciousness Transfer", "Immersive Worlds", "Neural Interfaces"],
      demo: "Enter Virtual World",
      link: "/pages/NeuralRealityEngine2030"
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
          <button
            key={tech.id}
            onClick={() => setActiveTech(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
              activeTech === index
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tech.icon} {tech.name}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div
        key={activeTech}
        className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-2xl p-8 text-white transition-all duration-500`}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-6xl">{technologies[activeTech].icon}</span>
              <div>
                <h2 className="text-3xl font-bold">{technologies[activeTech].name}</h2>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={technologies[activeTech].link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                {technologies[activeTech].demo}
    
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
    
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware AI systems with emotional intelligence and conscious decision-making",
      features: ["Self-awareness", "Emotional intelligence", "Ethical reasoning", "Autonomous learning"],
      gradient: "from-purple-600 to-pink-600",
      stats: { accuracy: 98, speed: 0.001, efficiency: 95 }
    },
    {
      id: 2,
      name: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum-powered virtual reality with physics manipulation and consciousness integration",
      features: ["Quantum simulation", "Reality manipulation", "Neural interface", "Dimensional exploration"],
      gradient: "from-indigo-600 to-purple-600",
      stats: { accuracy: 99.7, speed: 0.0001, efficiency: 98 }
    },
    {
      id: 3,
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer communication with thought control and cognitive enhancement",
      features: ["Thought control", "Neural enhancement", "Mind communication", "Cognitive augmentation"],
      gradient: "from-emerald-600 to-teal-600",
      stats: { accuracy: 99.2, speed: 0.05, efficiency: 97 }
    },
    
    {
      id: 4,
      name: "Synthetic Intelligence",
      icon: "🤖",
      description: "Hybrid biological-digital intelligence with unprecedented capabilities",
      features: ["Hybrid intelligence", "Biological integration", "Adaptive learning", "Consciousness transfer"],
      gradient: "from-cyan-600 to-blue-600",
      stats: { accuracy: 97.5, speed: 0.01, efficiency: 96 }
    
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);
    

  const currentTech = technologies[activeTech];
    
    

  const currentTech = technologies[activeTech];
    


  const currentTech = technologies[activeTech];
    

    quantum: {
      title: "Quantum Computing",
      subtitle: "Exponential Computational Power",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      description: "Unlock the power of quantum mechanics to solve problems that would take classical computers millennia to process.",
      features: [
        "Quantum entanglement networks",
        "Parallel universe processing",
        "Exponential speedup algorithms",
        "Quantum error correction",
        "Secure quantum communication",
        "Quantum machine learning"
      ],
      stats: [
        { label: "Processing Speed", value: "1Million x", icon: "🚀" },
        { label: "Qubits", value: "1000+", icon: "🔢" },
        { label: "Stability", value: "99.99%", icon: "🛡️" }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      subtitle: "Direct Brain-Computer Communication",
      icon: "🔗",
      color: "from-emerald-500 to-teal-500",
      description: "Seamlessly connect your mind to digital systems with our advanced neural interface technology.",
      features: [
        "Non-invasive neural reading",
        "Real-time thought processing",
        "High-bandwidth data transfer",
        "Secure neural encryption",
        "Multi-modal interaction",
        "Consciousness preservation"
      ],
      stats: [
        { label: "Data Transfer", value: "1TB/s", icon: "📊" },
        { label: "Latency", value: "<1ms", icon: "⏱️" },
        { label: "Accuracy", value: "99.8%", icon: "🎯" }
      ]
    },
    biotech: {
      title: "Biotech AI",
      subtitle: "Personalized Medicine Revolution",
      icon: "🧬",
      color: "from-purple-500 to-pink-500",
      description: "Revolutionize healthcare with AI-driven biotechnology that creates personalized treatments for every individual.",
      features: [
        "Genetic profile analysis",
        "Personalized drug design",
        "Real-time health monitoring",
        "Disease prediction algorithms",
        "Automated treatment optimization",
        "Regenerative medicine AI"
      ],
      stats: [
        { label: "Treatment Success", value: "95%", icon: "💊" },
        { label: "Diagnosis Speed", value: "10x faster", icon: "⚡" },
        { label: "Cost Reduction", value: "80%", icon: "💰" }
      ]
    }
  };

    
    }
  ];

  const currentTech = technologies[activeTech];

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-300">Click through our revolutionary technologies</p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {technologies.map((tech, index) => (
              </a>
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
              >
                {isAnimating ? '⏸️ Pause Animation' : '▶️ Start Animation'}
              </button>
    

              {/* Demo Button */}
              <div className="text-center">
                <motion.a
                  href={currentTech.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentTech.color} text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <span className="mr-2">{currentTech.demo}</span>
                  <span>→</span>
                </motion.a>
              </div>
            </div>
          </div>

    
          {/* Technology Visual */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className="relative h-full min-h-[400px]">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTech.color} rounded-2xl opacity-20`}></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                  key={activeTech}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-9xl"
                >
                  {currentTech.icon}
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
          {/* Interactive Demo */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
              <h4 className="text-3xl font-bold mb-6 text-center">Interactive Demo</h4>
              
              {/* Demo Visualization */}
              <div className="relative mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">
                      {currentTech.icon}
                    </div>
                    <p className="text-gray-400">Interactive {currentTech.name} Demo</p>
                    <p className="text-sm text-gray-500 mt-2">Click to interact</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
              </div>

              {/* Demo Controls */}
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Interactive Demo
                </button>
                <button className="w-full border border-purple-400 text-purple-400 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Documentation
                </button>
                <button className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  Schedule Live Demo
                </button>
              </div>

              {/* Real-time Data */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                <h5 className="text-lg font-bold mb-3 text-center">Real-time Data</h5>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">
                      {Math.floor(Math.random() * 100) + 80}%
                    </div>
                    <div className="text-sm text-gray-400">Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {Math.floor(Math.random() * 1000) + 500}
                    </div>
                    <div className="text-sm text-gray-400">Processes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {Math.floor(Math.random() * 50) + 25}ms
                    </div>
                    <div className="text-sm text-gray-400">Latency</div>
                  </div>
                </div>
    
    
    
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block">
            <div className="text-8xl opacity-30 text-center">
              {technologies[activeTech].icon}
            </div>
          </div>
        </div>
      </div>

    
    
    
        {/* Technology Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
    
      {/* Technology Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech.id}
            className={`bg-gradient-to-br ${tech.color} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setActiveTech(index)}
          >
            <div className="text-4xl mb-4">{tech.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
            <p className="text-sm opacity-90 mb-4">{tech.description}</p>
            <div className="flex items-center text-sm font-medium">
              Explore → <span className="ml-2">🚀</span>
            </div>
          </div>
        ))}
    
      </div>
    </div>
  );
};

    
        {/* Technology Comparison */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Technology</th>
                  <th className="text-center py-4 px-4">Accuracy</th>
                  <th className="text-center py-4 px-4">Speed</th>
                  <th className="text-center py-4 px-4">Efficiency</th>
                  <th className="text-center py-4 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className={`border-b border-white/10 ${activeTech === index ? 'bg-purple-600/20' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-purple-400 font-bold">{tech.stats.accuracy}%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-cyan-400 font-bold">{tech.stats.speed}ms</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-emerald-400 font-bold">{tech.stats.efficiency}%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Technology Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: 50, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${technologies[activeTech].color} p-8 rounded-2xl shadow-2xl`}
              >
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h3>
                  <p className="text-xl opacity-90">{technologies[activeTech].description}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
                    >
                      <span className="text-sm font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{technologies[activeTech].stats.performance}</div>
                    <div className="text-xs opacity-90">Performance</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{technologies[activeTech].stats.accuracy}</div>
                    <div className="text-xs opacity-90">Accuracy</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{technologies[activeTech].stats.speed}</div>
                    <div className="text-xs opacity-90">Speed</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        {/* Interactive Demo Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Try Interactive Demo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-3">Virtual Reality Demo</h4>
              <p className="text-sm opacity-90 mb-4">Experience our technologies in immersive VR environments</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch VR Demo
              </button>
            </motion.div>

    
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
export default InteractiveTechShowcase;
    
    
    
    
    
export default InteractiveTechShowcase;
export default InteractiveTechShowcase;
