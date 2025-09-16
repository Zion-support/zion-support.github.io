import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveRevolutionaryShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      id: 0,
      title: "Revolutionary Tech 2025",
      description: "Experience consciousness AI and breakthrough technologies",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: [
        "Consciousness AI Systems",
        "Quantum Consciousness",
        "Interdimensional Computing",
        "Reality Manipulation"
      ]
    },
    {
      id: 1,
      title: "Ultimate AI 2030",
      description: "Witness the ultimate AI revolution with superintelligence",
      icon: "🤖",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateAIRevolution2030",
      features: [
        "Superintelligence AI",
        "Omniversal AI",
        "Quantum Consciousness",
        "Infinite Knowledge Access"
      ]
    },
    {
      id: 2,
      title: "Transcendent Tech 2035",
      description: "Transcend reality with technology beyond human understanding",
      icon: "🌟",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/TranscendentTech2035",
      features: [
        "Reality Transcendence",
        "Omniversal Computing",
        "Consciousness Evolution",
        "Multi-dimensional Existence"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🎮 Interactive Revolutionary Showcase</h2>
        <p className="text-xl opacity-90">Explore our most advanced technologies through interactive demos</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {showcaseItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-2xl mr-2">{item.icon}</span>
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">{showcaseItems[activeTab].title}</h3>
            <p className="text-lg mb-6 opacity-90">{showcaseItems[activeTab].description}</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {showcaseItems[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <a
                href={showcaseItems[activeTab].link}
                className={`block w-full bg-gradient-to-r ${showcaseItems[activeTab].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {showcaseItems[activeTab].title} →
              </a>
              <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`bg-gradient-to-br ${showcaseItems[activeTab].color} rounded-xl p-8 text-center`}
            >
              <div className="text-8xl mb-4 animate-pulse">
                {showcaseItems[activeTab].icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
              <p className="text-lg opacity-90 mb-6">
                Experience {showcaseItems[activeTab].title} in real-time with our interactive demonstration.
              </p>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <div className="text-green-400 text-sm mb-2">System Status: Online</div>
                <div className="text-white text-sm">
                  {activeTab === 0 && "Consciousness AI: Ready to assist with any challenge"}
                  {activeTab === 1 && "Ultimate AI: Superintelligence systems operational"}
                  {activeTab === 2 && "Transcendent Tech: Reality transcendence protocols active"}
                </div>
              </div>
              <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Interactive Demo
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
          <div className="text-sm opacity-90">Accuracy Rate</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
          <div className="text-sm opacity-90">Computational Power</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
          <div className="text-sm opacity-90">System Uptime</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
          <div className="text-sm opacity-90">Knowledge Access</div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveRevolutionaryShowcase;