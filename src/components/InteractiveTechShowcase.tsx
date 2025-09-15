import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
      id: 0,
      name: "AI Revolution",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      description: "Experience the future of artificial intelligence",
      features: [
        "Autonomous AI Agents",
        "Quantum-Enhanced AI",
        "Synthetic Intelligence",
        "Edge AI Networks"
      ]
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Unlock exponential computing power",
      features: [
        "Exponential Speed",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Optimization Problems"
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-green-600 to-emerald-600",
      description: "Bridge the gap between mind and machine",
      features: [
        "Brain-Computer Interfaces",
        "Neural Implants",
        "Thought-Controlled Systems",
        "Cognitive Enhancement"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Tech Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge technologies that are reshaping our world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <motion.div
              key={category.id}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCard(category.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                hoveredCard === category.id ? 'shadow-2xl' : ''
              }`}>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.name}
                </h3>
                <p className="text-white/90 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, index) => (
                    <li key={index} className="text-white/80 flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
=======
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
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
        "Global Learning Systems",
        "Real-time Adaptation"
      ],
      color: "from-purple-600 to-pink-600",
      stats: { performance: "1000x", accuracy: "99.9%", speed: "Real-time" }
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: "⚡",
      description: "Exponential computing power solving impossible problems with quantum supremacy",
      features: [
        "Quantum Supremacy",
        "Molecular Simulation",
        "Unbreakable Encryption",
        "Climate Modeling"
      ],
      color: "from-cyan-600 to-blue-600",
      stats: { performance: "10^18 ops/sec", accuracy: "100%", speed: "Instant" }
    },
    {
      id: 3,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer communication enabling thought control and memory enhancement",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Neural Networking",
        "Medical Applications"
      ],
      color: "from-emerald-600 to-teal-600",
      stats: { performance: "Direct", accuracy: "99.8%", speed: "Instant" }
    },
    {
      id: 4,
      name: "Edge AI",
      icon: "🌐",
      description: "Intelligent processing at the edge bringing AI capabilities to every device",
      features: [
        "Real-time Processing",
        "Low Latency",
        "Privacy Protection",
        "Autonomous Operation"
      ],
      color: "from-orange-600 to-red-600",
      stats: { performance: "Edge-optimized", accuracy: "98.5%", speed: "<1ms" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold mb-8">Choose Your Technology</h3>
            {technologies.map((tech, index) => (
              <motion.button
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
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
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
          </div>
>>>>>>> cursor/create-and-deploy-new-content-6f13
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;