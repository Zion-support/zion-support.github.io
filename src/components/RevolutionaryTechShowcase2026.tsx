import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      id: 1,
      title: "AI Consciousness Platform",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      image: "🧠",
      color: "from-purple-500 to-pink-500",
      link: "/pages/AIConsciousnessRevolution2025",
      badge: "BREAKTHROUGH",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Autonomous Learning"]
    },
    {
      id: 2,
      title: "Quantum Neural Interface",
      description: "Direct brain-computer interface using quantum entanglement principles",
      image: "⚛️",
      color: "from-blue-500 to-cyan-500",
      link: "/pages/QuantumNeuralFusion2026",
      badge: "FUTURE",
      features: ["Quantum Computing", "Neural Networks", "Brain Interface", "Quantum Entanglement"]
    },
    {
      id: 3,
      title: "Synthetic Reality Engine",
      description: "Create and manipulate reality through advanced quantum field manipulation",
      image: "🌌",
      color: "from-indigo-500 to-purple-500",
      link: "/pages/SyntheticReality2027",
      badge: "REVOLUTIONARY",
      features: ["Reality Manipulation", "Quantum Fields", "Synthetic Worlds", "Consciousness Transfer"]
    },
    {
      id: 4,
      title: "Revolutionary Tech Blog 2026",
      description: "Latest insights on AI consciousness, quantum computing, and neural interfaces",
      image: "📝",
      color: "from-emerald-500 to-teal-500",
      link: "/pages/RevolutionaryTechBlog2026",
      badge: "INSIGHTS",
      features: ["Tech Insights", "AI Consciousness", "Quantum Computing", "Neural Interfaces"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2026
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Technology Showcase 2026
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                Experience the most groundbreaking technologies that will define the future of humanity
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                  <div className="text-6xl mb-4">{item.image}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white text-opacity-90 mb-6">{item.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={item.link}
                    className="inline-block w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Explore Technology
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of innovators already exploring these revolutionary technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/pages/RevolutionaryTechBlog2026"
                  className="bg-white text-purple-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl"
                >
                  Explore All Content
                </a>
                <a 
                  href="/pages/QuantumConsciousnessRevolution2026"
                  className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg hover:bg-purple-400 hover:text-purple-900 transition-all duration-300 font-bold text-xl"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;