import React from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface enabling thought-controlled computing",
      icon: "🧠",
      features: ["Thought Control", "Neural Feedback", "Immersive Experience"],
      status: "Revolutionary",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness Engine",
      description: "Quantum computing meets artificial consciousness for unlimited processing",
      icon: "⚛️",
      features: ["Quantum Processing", "Conscious AI", "Infinite Scaling"],
      status: "Breakthrough",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and parallel realities",
      icon: "🌌",
      features: ["Multi-Dimensional", "Parallel Processing", "Reality Manipulation"],
      status: "Futuristic",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence Matrix",
      description: "Artificial intelligence that transcends human cognitive capabilities",
      icon: "🤖",
      features: ["Super Intelligence", "Creative AI", "Autonomous Evolution"],
      status: "Advanced",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse"
        >
          🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Interactive Technology Showcase 2025
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto"
        >
          Experience cutting-edge technologies with interactive features and real-time demonstrations
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">{tech.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
              
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tech.status === 'Revolutionary' ? 'bg-purple-100 text-purple-700' :
                  tech.status === 'Breakthrough' ? 'bg-cyan-100 text-cyan-700' :
                  tech.status === 'Futuristic' ? 'bg-indigo-100 text-indigo-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {tech.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                Try Interactive Demo →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-8"
      >
        <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Interactive Experience</h3>
          <p className="text-gray-600 mb-6">
            Click on any technology above to experience interactive demonstrations, 
            real-time simulations, and hands-on exploration of these revolutionary innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/UltimateTechShowcase2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🚀 Full Showcase Experience
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              ⚡ Breakthrough Details
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveTechShowcase2025;