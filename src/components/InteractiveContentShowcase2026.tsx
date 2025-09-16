import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);

  const contentItems = [
    {
      title: "Revolutionary Tech Showcase",
      description: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces",
      icon: "🌟",
      color: "from-purple-500 to-pink-500",
      features: [
        "AI Consciousness Systems",
        "Quantum Supremacy Technology",
        "Neural Interface Revolution",
        "Synthetic Intelligence",
        "Space Technology Breakthrough",
        "Biotechnology Revolution"
      ],
      link: "/pages/RevolutionaryTechShowcase2026"
    },
    {
      title: "Ultimate Innovation Hub",
      description: "The world's most advanced technology showcase featuring breakthrough innovations",
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Interactive Technology Demos",
        "Real-time Innovation Tracking",
        "Collaborative AI Networks",
        "Quantum Computing Lab",
        "Neural Interface Simulator",
        "Space Exploration Center"
      ],
      link: "/pages/UltimateInnovationHub2026"
    },
    {
      title: "Interdimensional Tech Revolution",
      description: "Step beyond reality into new dimensions of technological possibilities",
      icon: "🌌",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Reality Manipulation",
        "Consciousness Transfer",
        "Quantum Tunneling",
        "Temporal Shifting",
        "Dimension Portals",
        "Reality Bridge Technology"
      ],
      link: "/pages/InterdimensionalTechRevolution2026"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Content Experience
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Immerse yourself in our revolutionary content through interactive demonstrations, 
            real-time simulations, and hands-on experiences with cutting-edge technology.
          </p>
        </motion.div>

        {/* Content Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveContent(index)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeContent === index
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {item.icon} {item.title}
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <motion.div
          key={activeContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{contentItems[activeContent].icon}</div>
              <h3 className="text-4xl font-bold mb-6">
                {contentItems[activeContent].title}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {contentItems[activeContent].description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {contentItems[activeContent].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={contentItems[activeContent].link}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
                >
                  Explore Content →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-lg">
                  Try Interactive Demo
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-center">Interactive Demo</h4>
              <div className="bg-black/20 rounded-lg p-8 mb-6 text-center">
                <div className="text-6xl mb-4 animate-pulse">🎮</div>
                <p className="text-lg mb-4">Interactive Technology Experience</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-semibold">Real-time Simulation</div>
                    <div className="text-cyan-400">Active</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-semibold">AI Integration</div>
                    <div className="text-green-400">Connected</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white text-purple-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Launch Interactive Demo →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: "Real-time Interaction",
              description: "Interact with technologies in real-time through our advanced simulation platform",
              icon: "⚡",
              color: "from-yellow-500 to-orange-500"
            },
            {
              title: "AI-Powered Learning",
              description: "Learn through AI-guided experiences that adapt to your understanding level",
              icon: "🧠",
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Immersive Experience",
              description: "Experience technologies through immersive virtual and augmented reality",
              icon: "🥽",
              color: "from-cyan-500 to-blue-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Dive into our interactive content and experience the technologies that are reshaping the future. 
            Start your journey into the next generation of innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              🎮 Start Interactive Experience →
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              📚 View All Content
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;