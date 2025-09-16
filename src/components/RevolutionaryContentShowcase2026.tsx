import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const contentItems = [
    {
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological breakthroughs reshaping our world",
      icon: "🚀",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Quantum Supremacy", "Neural Interfaces", "Autonomous AI", "Space Technology"]
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "The ultimate destination for cutting-edge innovation and breakthrough technologies",
      icon: "🌟",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Research Labs", "Innovation Process", "Global Network", "Breakthrough Ideas"]
    },
    {
      title: "Advanced Space Technology 2026",
      description: "Revolutionary space exploration technologies enabling interplanetary travel",
      icon: "🛸",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-orange-600 to-red-600",
      features: ["Mars Colonization", "Asteroid Mining", "Space Manufacturing", "Interstellar Travel"]
    },
    {
      title: "Quantum Computing Revolution 2026",
      description: "Breakthrough quantum computing with exponential processing power",
      icon: "⚛️",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-violet-600 to-purple-600",
      features: ["1000+ Qubits", "Quantum Algorithms", "Cryptography", "Simulation"]
    },
    {
      title: "Advanced Robotics 2026",
      description: "Next-generation autonomous robotics with human-like capabilities",
      icon: "🤖",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Humanoid Robots", "AI Integration", "Autonomous Systems", "Precision Control"]
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-rose-600 to-pink-600",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Data", "Medical Applications"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026 • EXCLUSIVE
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced and revolutionary content featuring cutting-edge technologies that are reshaping the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 h-full`}>
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-center">Key Features:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={item.link}
                    className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🌟 Exclusive Content Access</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get early access to our most revolutionary content and be the first to experience the future of technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">Research Insights</h4>
              <p className="text-gray-300">Exclusive access to cutting-edge research and development insights</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Early Access</h4>
              <p className="text-gray-300">Be among the first to experience breakthrough technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-bold mb-2">Innovation Updates</h4>
              <p className="text-gray-300">Regular updates on the latest technological breakthroughs</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mr-4">
              Get Early Access
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View All Content
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;