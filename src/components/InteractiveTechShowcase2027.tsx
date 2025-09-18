import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTech, setActiveTech] = useState(0);

  const categories = [
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution 2027',
      description: 'Direct brain-computer communication and thought control',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      link: '/pages/NeuralInterfaceRevolution2027'
    },
=======

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    {
      id: 0,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI that thinks, feels, and creates with human-level consciousness",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving", 
        "Self-Directed Learning",
        "Autonomous Decision Making"
      ],
      gradient: "from-purple-600 to-pink-600",
<<<<<<< HEAD
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027"
    },
    {
      id: 1,
      title: "Quantum Technologies",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      technologies: [
        {
          name: "Quantum Computing",
          description: "Revolutionary computational power beyond classical limits",
          features: ["Quantum supremacy", "Exponential speedup", "Advanced cryptography", "Quantum simulations"],
          link: "/pages/QuantumComputingRevolution2026"
        },
        {
          name: "Quantum AI",
          description: "AI systems powered by quantum mechanics",
          features: ["Quantum neural networks", "Quantum machine learning", "Quantum optimization", "Quantum consciousness"],
          link: "/pages/QuantumAIRevolution2026"
        }
      ]
    },
    {
      id: 2,
      title: "Synthetic Intelligence",
      icon: "🤖",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30",
      technologies: [
        {
          name: "Synthetic Consciousness",
          description: "AI with artificial consciousness and self-awareness",
          features: ["Self-awareness", "Emotional processing", "Creative synthesis", "Autonomous evolution"],
          link: "/blog/ai-2026-synthetic-intelligence-breakthrough"
        },
        {
          name: "Neural Consensus",
          description: "Collective intelligence through neural network consensus",
          features: ["Distributed intelligence", "Consensus algorithms", "Emergent capabilities", "Scalable coordination"],
          link: "/blog/ai-2026-neural-consensus-revolution"
        }
      ]
    }
  ];

  const currentCategory = categories[activeCategory];
  const currentTech = currentCategory.technologies?.[activeTech] || null;

  useEffect(() => {
    if (currentCategory.technologies && activeTech >= currentCategory.technologies.length) {
      setActiveTech(0);
    }
  }, [activeCategory, activeTech, currentCategory.technologies]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2027
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies that will reshape our world
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(index);
                setActiveTech(0);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
=======
      link: "/pages/ConsciousAISystems2027"
    },
    {
      id: 1,
      title: "Quantum Internet",
      icon: "⚡",
      description: "Ultra-secure quantum communication networks spanning the globe",
      features: [
        "Quantum Encryption",
        "Instant Global Communication",
        "Unhackable Networks",
        "Quantum Teleportation"
      ],
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumInternet2027"
    },
    {
      id: 2,
      title: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer communication and thought control",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Direct Neural Upload",
        "Consciousness Transfer"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2027"
    },
    {
      id: 3,
      title: "Molecular Manufacturing",
      icon: "⚗️",
      description: "Build anything atom by atom with molecular precision",
      features: [
        "Atomic Assembly",
        "Custom Materials",
        "Instant Manufacturing",
        "Self-Repairing Objects"
      ],
      gradient: "from-orange-600 to-red-600",
      link: "/pages/MolecularManufacturing2027"
    }
  ];

  const handleTechChange = (index: number) => {
    if (index !== activeTech && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the revolutionary technologies that will reshape our world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechChange(index)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeTech === index
                  ? 'border-purple-400 bg-purple-600/20'
                  : 'border-gray-600 bg-gray-800/50 hover:border-purple-300'
              }`}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
              <p className="text-sm text-gray-300">{tech.description}</p>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
            </button>
          ))}
        </div>

<<<<<<< HEAD
        {/* Technology Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {currentCategory.technologies ? (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technology Navigation */}
                <div className="space-y-4">
                  {currentCategory.technologies.map((tech, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTech(index)}
                      className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                        activeTech === index
                          ? `bg-gradient-to-r ${currentCategory.color} text-white shadow-lg`
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                      <p className="opacity-90">{tech.description}</p>
                    </button>
                  ))}
                </div>

                {/* Technology Details */}
                {currentTech && (
                  <motion.div
                    key={activeTech}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-gradient-to-br ${currentCategory.bgColor} rounded-xl p-8 border ${currentCategory.borderColor}`}
                  >
                    <div className="text-6xl mb-4">{currentCategory.icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
                    <p className="text-lg mb-6 opacity-90">{currentTech.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {currentTech.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className={`bg-gradient-to-r ${currentCategory.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300`}
                      onClick={() => window.location.href = currentTech.link}
                    >
                      Explore Technology →
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              /* Single Technology Display */
              <div className={`bg-gradient-to-br ${currentCategory.bgColor} rounded-2xl p-12 border ${currentCategory.borderColor}`}>
                <div className="text-center">
                  <div className="text-8xl mb-6">{currentCategory.icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{currentCategory.title}</h3>
                  <p className="text-xl mb-8 opacity-90">{currentCategory.description}</p>
                  
                  {currentCategory.features && (
                    <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                      {currentCategory.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button 
                    className={`bg-gradient-to-r ${currentCategory.color} hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300`}
                    onClick={() => window.location.href = currentCategory.link}
                  >
                    Explore Technology →
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
=======
        <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
          <div className="text-center">
            <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{technologies[activeTech].title}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {technologies[activeTech].description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {technologies[activeTech].features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-white/80">
                  <span className="w-3 h-3 bg-white/50 rounded-full mr-4"></span>
                  {feature}
                </div>
              ))}
            </div>
            
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Explore Technology
            </button>
          </div>
        </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;