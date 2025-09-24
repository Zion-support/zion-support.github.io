<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
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
      link: "/pages/AdvancedAITransformation2026"
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
>>>>>>> cursor/create-and-deploy-new-content-c963
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
>>>>>>> cursor/create-and-deploy-new-content-c439

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

<<<<<<< HEAD
  const technologies = {
    ai: {
      name: 'Artificial Intelligence',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionary AI that thinks, learns, and creates like humans',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: { accuracy: '99.9%', speed: '1000x', efficiency: '95%' }
=======
  const technologies = [
    {
      id: 0,
      name: "AI Innovation Hub 2026",
      description: "Revolutionary AI technologies with consciousness and emotional intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: { performance: "1000x", accuracy: "99.9%", speed: "Real-time" }
>>>>>>> cursor/create-and-deploy-new-content-c963
    },
    quantum: {
      name: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500',
      description: 'Quantum-powered computing that solves impossible problems',
      features: ['Quantum Supremacy', 'Quantum Algorithms', 'Quantum Cryptography', 'Quantum AI'],
      stats: { qubits: '1000+', speed: '10^15 ops/sec', applications: '50+' }
    },
    holographic: {
      name: 'Holographic Technology',
      icon: '🌟',
      color: 'from-indigo-500 to-purple-500',
      description: 'True 3D holographic displays and communication systems',
      features: ['3D Displays', 'Holographic Communication', 'Holographic Storage', 'Holographic Computing'],
      stats: { resolution: '4K', viewing: '360°', latency: '<1ms' }
    },
    biotech: {
      name: 'Biotechnology',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      description: 'Revolutionary biotechnology transforming human health',
      features: ['Gene Editing', 'Synthetic Biology', 'Neural Interfaces', 'Regenerative Medicine'],
      stats: { precision: '99.9%', diseases: '1000+', lifespan: '+50 years' }
    },
    space: {
      name: 'Space Technology',
      icon: '🚀',
      color: 'from-blue-500 to-indigo-500',
      description: 'Advanced space technologies enabling interstellar travel',
      features: ['Advanced Propulsion', 'Space Habitats', 'Asteroid Mining', 'Space Communication'],
      stats: { missions: '25+', planets: 'Mars', speed: '0.1c' }
    },
    robotics: {
      name: 'Advanced Robotics',
      icon: '🤖',
      color: 'from-gray-500 to-blue-500',
      description: 'Intelligent robots transforming industries and human life',
      features: ['Humanoid Robots', 'Industrial Automation', 'Service Robots', 'Medical Robots'],
      stats: { precision: '0.01mm', speed: '10x human', efficiency: '300%' }
    }
  };

  // Auto-rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const techKeys = Object.keys(technologies);
        const currentIndex = techKeys.indexOf(activeTech);
        const nextIndex = (currentIndex + 1) % techKeys.length;
        setActiveTech(techKeys[nextIndex]);
        setIsAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTech, technologies]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time data
          </p>
        </motion.div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTech(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTech === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </motion.button>
          ))}
        </div>

<<<<<<< HEAD
        {/* Active Technology Display */}
        <AnimatePresence mode="wait">
=======
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold mb-8">Choose Your Technology</h3>
=======
=======
      features: ["Consciousness AI", "Quantum Neural Networks", "Predictive Intelligence", "Autonomous Agents"],
      demo: "Try AI Consciousness Demo",
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
      link: "/pages/AdvancedAITransformation2026"
    },
    {
      id: 1,
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
      name: "Quantum Computing Revolution",
      description: "Breakthrough quantum processors with 1000+ qubits and quantum supremacy",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"],
      demo: "Explore Quantum Demo",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 2,
      name: "Neural Interface Technology",
      description: "Direct brain-computer communication with non-invasive neural interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"],
      demo: "Experience Neural Demo",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 3,
      name: "Synthetic Intelligence",
      description: "AI agents with synthetic consciousness and autonomous capabilities",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      features: ["Synthetic Consciousness", "Autonomous Agents", "Creative AI", "Collective Intelligence"],
      demo: "Create Synthetic AI",
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      id: 4,
      name: "Space Technology Innovation",
      description: "Next-generation space exploration and aerospace solutions",
      icon: "🚀",
      color: "from-indigo-600 to-purple-600",
      features: ["Space Exploration", "Satellite Technology", "Aerospace Solutions", "Extraterrestrial Applications"],
      demo: "Launch Space Demo",
      link: "/pages/SpaceTechInnovation2026"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
>>>>>>> cursor/create-and-deploy-new-content-c963
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/30"
          >
<<<<<<< HEAD
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-8xl mb-6 text-center"
                >
                  {technologies[activeTech as keyof typeof technologies].icon}
                </motion.div>
                <h3 className="text-4xl font-bold mb-4 text-center">
                  {technologies[activeTech as keyof typeof technologies].name}
                </h3>
                <p className="text-xl text-blue-100 mb-8 text-center">
                  {technologies[activeTech as keyof typeof technologies].description}
                </p>
=======
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE TECH SHOWCASE • 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Technology Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our revolutionary 2026 technologies through interactive demonstrations and immersive experiences
            </p>
          </motion.div>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Cards */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                onClick={() => handleTechClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} shadow-lg`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold">{tech.name}</h4>
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTech === tech.id
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
                }`}
                onClick={() => setActiveTech(tech.id)}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                  {activeTech === tech.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  )}
                </div>
              </motion.button>
            ))}
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
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  )}
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
>>>>>>> cursor/create-and-deploy-new-content-cc9d
          </div>
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
>>>>>>> cursor/create-and-deploy-new-content-c963
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(technologies[activeTech as keyof typeof technologies].stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-cyan-300">{value}</div>
                      <div className="text-sm text-cyan-200 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6 text-center">Key Features</h4>
                <div className="space-y-4">
                  {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4"
                    >
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                      <span className="text-blue-100">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

<<<<<<< HEAD
=======
        {/* Technology Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300">Continuous Innovation</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-orange-400 mb-2">2026</div>
            <div className="text-gray-300">Future Technology</div>
          </motion.div>
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-c963
        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-cyan-300">Try Interactive Demo</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Click on different technologies above to see real-time demonstrations and explore their capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Interactive Demo →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default InteractiveTechShowcase;
