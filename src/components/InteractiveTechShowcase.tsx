<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  
  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      subtitle: "Consciousness-Level AI Systems",
      icon: "🧠",
      color: "from-blue-500 to-purple-500",
      description: "Experience the next generation of AI with consciousness-like capabilities, emotional intelligence, and autonomous decision-making.",
      features: [
        "Self-aware AI systems",
        "Emotional intelligence processing",
        "Autonomous problem solving",
        "Human-AI collaboration",
        "Real-time learning adaptation",
        "Ethical decision making"
      ],
      stats: [
        { label: "Processing Power", value: "10x faster", icon: "⚡" },
        { label: "Accuracy Rate", value: "99.9%", icon: "🎯" },
        { label: "Learning Speed", value: "1000x", icon: "📈" }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      subtitle: "Exponential Computational Power",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      description: "Unlock the power of quantum mechanics to solve problems that would take classical computers millennia to process.",
      features: [
        "Quantum entanglement networks",
        "Parallel universe processing",
        "Exponential speedup algorithms",
        "Quantum error correction",
        "Secure quantum communication",
        "Quantum machine learning"
      ],
      stats: [
        { label: "Processing Speed", value: "1Million x", icon: "🚀" },
        { label: "Qubits", value: "1000+", icon: "🔢" },
        { label: "Stability", value: "99.99%", icon: "🛡️" }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      subtitle: "Direct Brain-Computer Communication",
      icon: "🔗",
      color: "from-emerald-500 to-teal-500",
      description: "Seamlessly connect your mind to digital systems with our advanced neural interface technology.",
      features: [
        "Non-invasive neural reading",
        "Real-time thought processing",
        "High-bandwidth data transfer",
        "Secure neural encryption",
        "Multi-modal interaction",
        "Consciousness preservation"
      ],
      stats: [
        { label: "Data Transfer", value: "1TB/s", icon: "📊" },
        { label: "Latency", value: "<1ms", icon: "⏱️" },
        { label: "Accuracy", value: "99.8%", icon: "🎯" }
      ]
    },
    biotech: {
      title: "Biotech AI",
      subtitle: "Personalized Medicine Revolution",
      icon: "🧬",
      color: "from-purple-500 to-pink-500",
      description: "Revolutionize healthcare with AI-driven biotechnology that creates personalized treatments for every individual.",
      features: [
        "Genetic profile analysis",
        "Personalized drug design",
        "Real-time health monitoring",
        "Disease prediction algorithms",
        "Automated treatment optimization",
        "Regenerative medicine AI"
      ],
      stats: [
        { label: "Treatment Success", value: "95%", icon: "💊" },
        { label: "Diagnosis Speed", value: "10x faster", icon: "⚡" },
        { label: "Cost Reduction", value: "80%", icon: "💰" }
      ]
    }
  };

=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
      id: 0,
      name: "AI Revolution",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      description: "Experience the future of artificial intelligence",
      features: [
        "Autonomous AI Agents",
        "Quantum-Enhanced AI",
        "Synthetic Intelligence",
        "Edge AI Networks"
      ]
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Unlock exponential computing power",
      features: [
        "Exponential Speed",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Optimization Problems"
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-green-600 to-emerald-600",
      description: "Bridge the gap between mind and machine",
      features: [
        "Brain-Computer Interfaces",
        "Neural Implants",
        "Thought-Controlled Systems",
        "Cognitive Enhancement"
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  
  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      subtitle: "Consciousness-Level AI Systems",
      icon: "🧠",
      color: "from-blue-500 to-purple-500",
      description: "Experience the next generation of AI with consciousness-like capabilities, emotional intelligence, and autonomous decision-making.",
      features: [
        "Self-aware AI systems",
        "Emotional intelligence processing",
        "Autonomous problem solving",
        "Human-AI collaboration",
        "Real-time learning adaptation",
        "Ethical decision making"
      ],
      stats: [
        { label: "Processing Power", value: "10x faster", icon: "⚡" },
        { label: "Accuracy Rate", value: "99.9%", icon: "🎯" },
        { label: "Learning Speed", value: "1000x", icon: "📈" }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      subtitle: "Exponential Computational Power",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      description: "Unlock the power of quantum mechanics to solve problems that would take classical computers millennia to process.",
      features: [
        "Quantum entanglement networks",
        "Parallel universe processing",
        "Exponential speedup algorithms",
        "Quantum error correction",
        "Secure quantum communication",
        "Quantum machine learning"
      ],
      stats: [
        { label: "Processing Speed", value: "1Million x", icon: "🚀" },
        { label: "Qubits", value: "1000+", icon: "🔢" },
        { label: "Stability", value: "99.99%", icon: "🛡️" }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      subtitle: "Direct Brain-Computer Communication",
      icon: "🔗",
      color: "from-emerald-500 to-teal-500",
      description: "Seamlessly connect your mind to digital systems with our advanced neural interface technology.",
      features: [
        "Non-invasive neural reading",
        "Real-time thought processing",
        "High-bandwidth data transfer",
        "Secure neural encryption",
        "Multi-modal interaction",
        "Consciousness preservation"
      ],
      stats: [
        { label: "Data Transfer", value: "1TB/s", icon: "📊" },
        { label: "Latency", value: "<1ms", icon: "⏱️" },
        { label: "Accuracy", value: "99.8%", icon: "🎯" }
      ]
    },
    biotech: {
      title: "Biotech AI",
      subtitle: "Personalized Medicine Revolution",
      icon: "🧬",
      color: "from-purple-500 to-pink-500",
      description: "Revolutionize healthcare with AI-driven biotechnology that creates personalized treatments for every individual.",
      features: [
        "Genetic profile analysis",
        "Personalized drug design",
        "Real-time health monitoring",
        "Disease prediction algorithms",
        "Automated treatment optimization",
        "Regenerative medicine AI"
      ],
      stats: [
        { label: "Treatment Success", value: "95%", icon: "💊" },
        { label: "Diagnosis Speed", value: "10x faster", icon: "⚡" },
        { label: "Cost Reduction", value: "80%", icon: "💰" }
>>>>>>> cursor/create-and-deploy-new-content-376e
      ]
    }
  };

<<<<<<< HEAD
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Tech Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge technologies that are reshaping our world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <motion.div
              key={category.id}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCard(category.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                hoveredCard === category.id ? 'shadow-2xl' : ''
              }`}>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.name}
                </h3>
                <p className="text-white/90 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, index) => (
                    <li key={index} className="text-white/80 flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
=======
>>>>>>> ebfb30356a744281be19d547f1bc32950779af6f
  const currentTech = technologies[activeTab as keyof typeof technologies];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
            🚀 INTERACTIVE TECH SHOWCASE
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Explore Revolutionary Technologies
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Click on any technology to explore its capabilities and see how it can transform your business
          </p>
        </motion.div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Technology Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Description */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{currentTech.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{currentTech.title}</h3>
                    <p className="text-xl text-gray-300">{currentTech.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {currentTech.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {currentTech.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Learn More About {currentTech.title} →
                </button>
              </div>

              {/* Right Side - Features */}
              <div>
                <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                <div className="space-y-4">
                  {currentTech.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how these revolutionary technologies can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Schedule Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-376e
>>>>>>> ebfb30356a744281be19d547f1bc32950779af6f
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;