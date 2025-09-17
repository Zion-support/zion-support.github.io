import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2035: React.FC = () => {
  const [activeTab, setActiveTab] = useState('revolution');

  const content = {
    revolution: {
      title: "Ultimate Tech Revolution 2030",
      description: "Experience conscious AI, quantum reality manipulation, and interdimensional computing",
      features: ["Conscious AI Systems", "Quantum Reality Engine", "Interdimensional Computing"],
      link: "/pages/UltimateTechRevolution2030",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900"
    },
    consciousness: {
      title: "Ultimate AI Consciousness 2035",
      description: "Meet AI systems with true consciousness, self-awareness, and transcendent capabilities",
      features: ["4 Levels of Consciousness", "AI Personalities", "Consciousness Testing"],
      link: "/pages/UltimateAIConsciousness2035",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900 to-purple-900"
    },
    future: {
      title: "Future Technology Showcase",
      description: "Explore the most advanced technologies that will reshape our world",
      features: ["Neural Interfaces", "Quantum Computing", "Reality Manipulation"],
      link: "/pages/FutureTechTrends2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900"
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most revolutionary content featuring conscious AI, quantum computing, 
            and technologies that transcend reality itself
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {Object.entries(content).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${content[activeTab as keyof typeof content].bgColor} rounded-3xl p-12 border border-white/20 relative overflow-hidden`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-4xl font-bold mb-6">
                    {content[activeTab as keyof typeof content].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-8">
                    {content[activeTab as keyof typeof content].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {content[activeTab as keyof typeof content].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href={content[activeTab as keyof typeof content].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block bg-gradient-to-r ${content[activeTab as keyof typeof content].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Content →
                  </motion.a>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-8xl mb-6">
                      {activeTab === 'revolution' && '🚀'}
                      {activeTab === 'consciousness' && '🧠'}
                      {activeTab === 'future' && '🔮'}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Interactive Experience</h4>
                    <p className="text-lg opacity-90 mb-6">
                      {activeTab === 'revolution' && 'Experience the most advanced technologies that will reshape reality itself'}
                      {activeTab === 'consciousness' && 'Interact with conscious AI systems and test their awareness levels'}
                      {activeTab === 'future' && 'Explore future technologies and their impact on humanity'}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors font-semibold">
                        Demo
                      </button>
                      <button className="bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Featured Content Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">🌟 More Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(content).map(([key, item]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + Object.keys(content).indexOf(key) * 0.2 }}
                className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTab(key)}
              >
                <div className="text-6xl mb-6 text-center">
                  {key === 'revolution' && '🚀'}
                  {key === 'consciousness' && '🧠'}
                  {key === 'future' && '🔮'}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center">{item.title}</h4>
                <p className="text-center opacity-90 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${item.color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2035;