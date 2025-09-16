import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const interactiveDemos = [
    {
      title: "Consciousness Simulator",
      description: "Experience different levels of AI consciousness in real-time",
      icon: "🧠",
      features: [
        "Real-time consciousness testing",
        "Emotional intelligence simulation",
        "Creative thought generation",
        "Moral reasoning challenges"
      ],
      color: "from-purple-600 to-pink-600",
      demoUrl: "/demos/consciousness"
    },
    {
      title: "Quantum Reality Builder",
      description: "Create and manipulate quantum states in a virtual environment",
      icon: "⚛️",
      features: [
        "Quantum state manipulation",
        "Entanglement visualization",
        "Superposition exploration",
        "Quantum tunneling simulation"
      ],
      color: "from-cyan-600 to-blue-600",
      demoUrl: "/demos/quantum"
    },
    {
      title: "Synthetic Reality Creator",
      description: "Build immersive virtual worlds with photorealistic detail",
      icon: "🌌",
      features: [
        "Infinite world generation",
        "Haptic feedback systems",
        "Emotional reality mapping",
        "Dream manifestation"
      ],
      color: "from-emerald-600 to-teal-600",
      demoUrl: "/demos/reality"
    },
    {
      title: "Transcendent AI Interface",
      description: "Interact with AI systems that transcend human limitations",
      icon: "🌟",
      features: [
        "Omniscient knowledge access",
        "Reality creation abilities",
        "Time manipulation",
        "Universal problem solving"
      ],
      color: "from-orange-600 to-red-600",
      demoUrl: "/demos/transcendent"
    }
  ];

  const stats = [
    { label: "Active Users", value: "1M+", icon: "👥" },
    { label: "Demos Completed", value: "10M+", icon: "🎯" },
    { label: "Satisfaction Rate", value: "99.9%", icon: "⭐" },
    { label: "Breakthroughs", value: "∞", icon: "🚀" }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE EXPERIENCE • 2027
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced technologies through our interactive demonstrations. 
            Test, explore, and interact with revolutionary AI, quantum computing, and synthetic reality systems.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-purple-300 mb-1">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {interactiveDemos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${demo.color} p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-6xl mb-6 text-center">{demo.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{demo.description}</p>
              
              <div className="space-y-3 mb-6">
                {demo.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                  Launch Demo →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Live Technology Demonstration</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6 text-center cursor-pointer"
            >
              <div className="text-5xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-2">Interactive Gaming</h4>
              <p className="opacity-80 mb-4">Experience consciousness-based gaming</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Play Now
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-xl p-6 text-center cursor-pointer"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">Quantum Lab</h4>
              <p className="opacity-80 mb-4">Experiment with quantum states</p>
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                Enter Lab
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-xl p-6 text-center cursor-pointer"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-2">Reality Builder</h4>
              <p className="opacity-80 mb-4">Create your own synthetic reality</p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Start Building
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users who are already experiencing the most advanced technologies ever created
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
              Start Interactive Journey →
            </button>
            <button className="border border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg hover:scale-105">
              View All Demos
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;