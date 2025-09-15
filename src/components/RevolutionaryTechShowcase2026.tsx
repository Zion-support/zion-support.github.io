import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      title: "Advanced Biotech AI",
      description: "Revolutionary AI-powered biotechnology solutions for drug discovery, personalized medicine, and genetic engineering",
      icon: "🧬",
      gradient: "from-emerald-500 to-teal-500",
      link: "/pages/AdvancedBiotechAI2026",
      features: ["Drug Discovery", "Personalized Medicine", "Genetic Engineering", "Protein Folding"]
    },
    {
      title: "Advanced Robotics",
      description: "Next-generation robotics with autonomous systems, humanoid robots, and AI-powered automation",
      icon: "🤖",
      gradient: "from-slate-500 to-gray-500",
      link: "/pages/AdvancedRobotics2026",
      features: ["Industrial Automation", "Medical Robotics", "Autonomous Vehicles", "Service Robotics"]
    },
    {
      title: "Cybersecurity Suite",
      description: "AI-powered cybersecurity solutions with quantum encryption and advanced threat detection",
      icon: "🛡️",
      gradient: "from-red-500 to-orange-500",
      link: "/pages/AdvancedCybersecuritySuite2026",
      features: ["AI Threat Detection", "Quantum Encryption", "Zero Trust", "Automated Response"]
    },
    {
      title: "Quantum Computing",
      description: "Breakthrough quantum computing technology with exponential processing power and quantum supremacy",
      icon: "⚛️",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"]
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer communication enabling thought control and enhanced cognitive capabilities",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"]
    },
    {
      title: "Synthetic Intelligence",
      description: "AI agents with synthetic consciousness and autonomous capabilities for creative synthesis",
      icon: "🌟",
      gradient: "from-indigo-500 to-purple-500",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous Agents", "Synthetic Consciousness", "Collective Intelligence", "Creative Synthesis"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY 2026 • BREAKTHROUGH INNOVATIONS
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover our groundbreaking innovations in biotechnology, robotics, cybersecurity, 
            quantum computing, neural interfaces, and synthetic intelligence
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`text-6xl mb-6 text-center bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {tech.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${tech.gradient} text-white text-xs rounded-full`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={tech.link}
                className={`block w-full bg-gradient-to-r ${tech.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {tech.title} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            🌟 Revolutionary Technology Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$10T+</div>
              <div className="text-lg text-gray-300">Market Value by 2030</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-lg text-gray-300">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100M+</div>
              <div className="text-lg text-gray-300">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the technological revolution and discover how our cutting-edge innovations 
              can transform your business, improve efficiency, and create unprecedented opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/pages/ComprehensiveTechInsights2026"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
              >
                Explore All Technologies
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;