import React from 'react';
import { motion } from 'framer-motion';

const AdvancedAISystems2026: React.FC = () => {
  const systems = [
    {
      name: "Autonomous Business Manager",
      icon: "🤖",
      description: "AI system that manages entire business operations autonomously",
      capabilities: ["Strategic Planning", "Resource Allocation", "Performance Monitoring", "Decision Making"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Neural Creative Engine",
      icon: "🎨",
      description: "AI-powered creative system that generates original content and solutions",
      capabilities: ["Content Creation", "Design Generation", "Innovation Synthesis", "Creative Problem Solving"],
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Quantum Analytics Hub",
      icon: "⚡",
      description: "Quantum-enhanced analytics system for complex data processing",
      capabilities: ["Big Data Analysis", "Predictive Modeling", "Pattern Recognition", "Real-time Insights"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Synthetic Intelligence Core",
      icon: "🧠",
      description: "Core AI system with synthetic consciousness and self-awareness",
      capabilities: ["Self-Awareness", "Conscious Decision Making", "Emotional Intelligence", "Ethical Reasoning"],
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Advanced AI Systems 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the next generation of artificial intelligence systems that think, learn, and evolve autonomously
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {systems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{system.icon}</div>
                <h3 className="text-2xl font-bold">{system.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {system.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-purple-300">Key Capabilities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {system.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <button className={`w-full bg-gradient-to-r ${system.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore System →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Deploy Advanced AI Systems?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transform your business with revolutionary AI systems that operate with synthetic consciousness and autonomous capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Implementation →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AdvancedAISystems2026;