import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const techCategories = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900",
      items: [
        {
          id: "consciousness",
          title: "AI Consciousness",
          description: "Self-aware AI systems that think and feel",
          features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Ethical reasoning"],
          demo: "Launch AI Consciousness Demo"
        },
        {
          id: "generative",
          title: "Generative AI 2.0",
          description: "Next-generation content creation and synthesis",
          features: ["Text generation", "Image creation", "Video synthesis", "Code generation"],
          demo: "Try Generative AI"
        },
        {
          id: "autonomous",
          title: "Autonomous Agents",
          description: "AI agents that operate independently",
          features: ["Task automation", "Decision making", "Learning", "Adaptation"],
          demo: "Deploy Agent"
        }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900",
      items: [
        {
          id: "reality",
          title: "Quantum Reality",
          description: "Experience reality through quantum mechanics",
          features: ["Quantum entanglement", "Parallel universes", "Reality manipulation", "Time-space distortion"],
          demo: "Enter Quantum Reality"
        },
        {
          id: "cryptography",
          title: "Quantum Cryptography",
          description: "Unbreakable encryption using quantum principles",
          features: ["Quantum key distribution", "Unhackable security", "Quantum random numbers", "Secure communication"],
          demo: "Test Quantum Security"
        },
        {
          id: "simulation",
          title: "Quantum Simulation",
          description: "Simulate complex systems at quantum scale",
          features: ["Molecular modeling", "Drug discovery", "Material science", "Climate modeling"],
          demo: "Run Simulation"
        }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900",
      items: [
        {
          id: "bci",
          title: "Brain-Computer Interface",
          description: "Direct neural connection to digital systems",
          features: ["Thought control", "Neural signal processing", "Cognitive enhancement", "Medical applications"],
          demo: "Connect Neural Interface"
        },
        {
          id: "memory",
          title: "Memory Enhancement",
          description: "Augment human memory with technology",
          features: ["Memory storage", "Recall enhancement", "Knowledge transfer", "Learning acceleration"],
          demo: "Enhance Memory"
        },
        {
          id: "sensory",
          title: "Sensory Expansion",
          description: "Extend human senses beyond natural limits",
          features: ["Enhanced vision", "Extended hearing", "New sensory modalities", "Sensory fusion"],
          demo: "Expand Senses"
        }
      ]
    },
    blockchain: {
      title: "Blockchain & Web3",
      icon: "🔗",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900",
      items: [
        {
          id: "defi",
          title: "DeFi Platforms",
          description: "Decentralized financial systems",
          features: ["Smart contracts", "Automated trading", "Liquidity pools", "Yield farming"],
          demo: "Access DeFi"
        },
        {
          id: "nft",
          title: "NFT Marketplaces",
          description: "Digital asset trading and creation",
          features: ["Digital ownership", "Creator royalties", "Cross-chain trading", "Metaverse integration"],
          demo: "Browse NFTs"
        },
        {
          id: "dao",
          title: "DAO Governance",
          description: "Decentralized autonomous organizations",
          features: ["Community voting", "Proposal systems", "Treasury management", "Transparent governance"],
          demo: "Join DAO"
        }
      ]
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setHoveredItem(null);
  };

  const currentCategory = techCategories[activeTab as keyof typeof techCategories];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Category Header */}
            <div className={`bg-gradient-to-r ${currentCategory.bgColor} text-white p-8`}>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{currentCategory.icon}</span>
                <div>
                  <h3 className="text-3xl font-bold">{currentCategory.title}</h3>
                  <p className="text-lg opacity-90">Explore the future of {currentCategory.title.toLowerCase()}</p>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className={`relative bg-gradient-to-br ${currentCategory.color} text-white rounded-xl p-6 cursor-pointer transform transition-all duration-300 ${
                      hoveredItem === item.id ? 'scale-105 shadow-2xl' : 'hover:shadow-lg'
                    }`}
                  >
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-sm opacity-90 mb-4">{item.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                    >
                      {item.demo}
                    </motion.button>

                    {/* Hover Effect */}
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our technologies to transform their businesses
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Free Trial
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;