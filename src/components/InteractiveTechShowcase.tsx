import React, { useState, useEffect } from 'react';
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
>>>>>>> cursor/create-and-deploy-new-content-afc8
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
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
>>>>>>> cursor/create-and-deploy-new-content-cc9d
          </div>
                
                {hoveredCard === tech.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="relative">
            <motion.div
              key={activeTech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-3xl p-8 text-white relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={technologies[activeTech].link}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Explore Technology →
                  </a>
                  <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                    {technologies[activeTech].demo}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

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
>>>>>>> cursor/create-and-deploy-new-content-afc8
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;