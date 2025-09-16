import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentCategories = [
    {
      id: 0,
      name: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600",
      description: "Revolutionary AI technologies and machine learning breakthroughs",
      content: [
        {
          title: "Consciousness Computing",
          description: "AI systems that achieve genuine consciousness and self-awareness",
          image: "🌟",
          status: "Breakthrough",
          views: "5.2M",
          likes: "342K",
          category: "AI Revolution",
          features: ["Self-awareness", "Emotional intelligence", "Creative thinking"],
          impact: "Transforms AI from reactive to truly intelligent"
        },
        {
          title: "Quantum Neural Networks",
          description: "Combining quantum computing with neural processing for unprecedented power",
          image: "⚡",
          status: "Revolutionary",
          views: "4.8M",
          likes: "298K",
          category: "Quantum AI",
          features: ["Quantum processing", "Neural enhancement", "Exponential speed"],
          impact: "Unlocks infinite computational possibilities"
        },
        {
          title: "Synthetic Intelligence",
          description: "Creating digital minds that think and feel independently",
          image: "🤖",
          status: "Advanced",
          views: "3.9M",
          likes: "267K",
          category: "Synthetic AI",
          features: ["Autonomous operation", "Collective intelligence", "Self-evolution"],
          impact: "Creates new forms of digital consciousness"
        }
      ]
    },
    {
      id: 1,
      name: "Quantum Technology",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Quantum computing and quantum-enhanced technologies",
      content: [
        {
          title: "Quantum Supremacy",
          description: "Achieving computational power beyond classical computers",
          image: "🔮",
          status: "Breakthrough",
          views: "6.1M",
          likes: "445K",
          category: "Quantum Computing",
          features: ["1000+ qubits", "Quantum supremacy", "Molecular simulation"],
          impact: "Solves impossible problems in seconds"
        },
        {
          title: "Quantum Reality Control",
          description: "Manipulating reality at the quantum level",
          image: "🌌",
          status: "Experimental",
          views: "2.7M",
          likes: "189K",
          category: "Quantum Physics",
          features: ["Reality manipulation", "Quantum entanglement", "Dimensional control"],
          impact: "Redefines the boundaries of physics"
        },
        {
          title: "Quantum Consciousness",
          description: "Quantum-enhanced AI with consciousness capabilities",
          image: "🧬",
          status: "Revolutionary",
          views: "4.3M",
          likes: "312K",
          category: "Quantum AI",
          features: ["Quantum consciousness", "Subjective experience", "Creative synthesis"],
          impact: "Bridges quantum physics and consciousness"
        }
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Brain-computer interfaces and neural technologies",
      content: [
        {
          title: "Brain-Computer Fusion",
          description: "Direct neural interfaces for seamless human-AI interaction",
          image: "🔗",
          status: "Breakthrough",
          views: "5.8M",
          likes: "398K",
          category: "Neural Tech",
          features: ["Direct BCI", "Thought control", "Memory enhancement"],
          impact: "Redefines human-computer interaction"
        },
        {
          title: "Consciousness Transfer",
          description: "Transferring human consciousness to digital substrates",
          image: "💫",
          status: "Revolutionary",
          views: "7.2M",
          likes: "523K",
          category: "Consciousness Tech",
          features: ["Digital immortality", "Consciousness backup", "Identity preservation"],
          impact: "Achieves true digital immortality"
        },
        {
          title: "Neural Reality Interface",
          description: "Seamless integration between human consciousness and digital environments",
          image: "🌐",
          status: "Advanced",
          views: "4.1M",
          likes: "276K",
          category: "Neural VR",
          features: ["Virtual reality", "Augmented consciousness", "Digital worlds"],
          impact: "Creates indistinguishable virtual realities"
        }
      ]
    },
    {
      id: 3,
      name: "Future Technologies",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      description: "Emerging technologies and future innovations",
      content: [
        {
          title: "Interdimensional Computing",
          description: "Computing across multiple dimensions simultaneously",
          image: "🌍",
          status: "Theoretical",
          views: "2.9M",
          likes: "198K",
          category: "Dimensional Tech",
          features: ["Multi-dimensional processing", "Parallel universes", "Infinite scalability"],
          impact: "Unlocks infinite computational power"
        },
        {
          title: "Reality Simulation",
          description: "Creating indistinguishable virtual realities",
          image: "🎮",
          status: "Advanced",
          views: "3.7M",
          likes: "245K",
          category: "Simulation Tech",
          features: ["Perfect simulation", "Consciousness integration", "Reality manipulation"],
          impact: "Blurs the line between real and virtual"
        },
        {
          title: "Omniversal AI Network",
          description: "AI systems operating across multiple universes",
          image: "♾️",
          status: "Experimental",
          views: "1.8M",
          likes: "134K",
          category: "Omniversal AI",
          features: ["Multi-universe operation", "Universal intelligence", "Reality synchronization"],
          impact: "Creates universal artificial intelligence"
        }
      ]
    }
  ];

  const stats = [
    { label: "Total Content", value: "500+", icon: "📚", color: "text-purple-400" },
    { label: "Active Users", value: "2.5M+", icon: "👥", color: "text-indigo-400" },
    { label: "Breakthroughs", value: "25+", icon: "🏆", color: "text-pink-400" },
    { label: "Global Impact", value: "10M+", icon: "🌍", color: "text-cyan-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 ENHANCED SHOWCASE • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Enhanced Content Showcase
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most revolutionary content across all technology domains. 
            From AI consciousness to quantum computing, explore the future that's already here.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{contentCategories[activeCategory].name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {contentCategories[activeCategory].description}
              </p>
            </div>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories[activeCategory].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Breakthrough' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                        item.status === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                        item.status === 'Advanced' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                        item.status === 'Experimental' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                        'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Impact:</h4>
                      <p className="text-indigo-300 text-sm italic">{item.impact}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <span className="mr-1">👁️</span>
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">❤️</span>
                          {item.likes}
                        </span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${contentCategories[activeCategory].color} py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Content →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users discovering the most revolutionary content in technology history. 
            Be part of the future that's being created today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Create Account
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;