import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      title: "Ultimate Tech Revolution 2028",
      description: "Experience the convergence of consciousness computing, quantum reality, and interdimensional technology",
      features: ["Consciousness Computing", "Quantum Reality Engine", "Interdimensional AI"],
      link: "/pages/UltimateTechRevolution2028",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "Consciousness Computing Revolution 2029",
      description: "The first true fusion of human consciousness with artificial intelligence",
      features: ["Neural Consciousness Transfer", "Hybrid AI Consciousness", "Collective Consciousness Network"],
      link: "/pages/ConsciousnessComputingRevolution2029",
      color: "from-indigo-600 to-purple-600",
      icon: "🧠"
    },
    {
      title: "Interdimensional Tech Revolution 2032",
      description: "Break through dimensional barriers and access infinite parallel realities",
      features: ["Dimensional Gateway Technology", "Reality Manipulation Engine", "Interdimensional AI Network"],
      link: "/pages/InterdimensionalTechRevolution2032",
      color: "from-violet-600 to-indigo-600",
      icon: "🌌"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            🌟 Ultimate Technology Showcase 2028-2032
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Explore the most advanced technologies that will reshape reality itself
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === index
                    ? 'bg-white text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {tech.icon} {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {technologies[activeTab].title}
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                {technologies[activeTab].description}
              </p>
              <ul className="space-y-2 mb-8">
                {technologies[activeTab].features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={technologies[activeTab].link}
                className={`inline-block bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                Explore Technology →
              </a>
            </div>
            <div className="relative">
              <div className={`bg-gradient-to-br ${technologies[activeTab].color} rounded-xl p-8 text-center`}>
                <div className="text-8xl mb-4">{technologies[activeTab].icon}</div>
                <h4 className="text-2xl font-bold text-white mb-4">Interactive Demo</h4>
                <p className="text-white/80 mb-6">
                  Experience this technology in action with our interactive demonstration
                </p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Technologies Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">More Revolutionary Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quantum Reality 2027", icon: "⚡", color: "from-cyan-600 to-blue-600" },
              { title: "Neural Reality Engine 2027", icon: "🧬", color: "from-emerald-600 to-teal-600" },
              { title: "Omniversal AI Consciousness 2035", icon: "🌟", color: "from-pink-600 to-red-600" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{tech.title}</h4>
                <p className="text-white/80 text-sm mb-4">
                  Advanced technology that pushes the boundaries of what's possible
                </p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2028;