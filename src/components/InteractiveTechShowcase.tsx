>>>>>>> df1ae652825cf0aad03f4f2c81f7b3bd32b53561
import React, { useState, useEffect } from 'react';

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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time metrics
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTech(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Info */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className={`bg-gradient-to-br ${currentTech.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full`}>
              <div className="text-8xl mb-6 text-center animate-pulse">
                {currentTech.icon}
              </div>
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
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
>>>>>>> df1ae652825cf0aad03f4f2c81f7b3bd32b53561
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
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
>>>>>>> cursor/create-and-deploy-new-content-cc9d
          </div>
>>>>>>> cursor/create-and-deploy-new-content-6f13
>>>>>>> cursor/create-and-deploy-new-content-c439
>>>>>>> df1ae652825cf0aad03f4f2c81f7b3bd32b53561
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;